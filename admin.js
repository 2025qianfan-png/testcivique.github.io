
        // ==============================
        // 管理后台核心逻辑
        // ==============================
        
        console.log('管理后台初始化...');
        
        // 检查supabaseAuth是否已加载
        if (typeof window.supabaseAuth === 'undefined') {
            console.error('错误: supabase-config.js 未加载');
            alert('系统配置加载失败，请刷新页面重试');
        }

        // ==============================
        // DOM 元素引用
        // ==============================
        const loginSection = document.getElementById('loginSection');
        const adminContent = document.getElementById('adminContent');
        const loginForm = document.getElementById('loginForm');
        const usersTableBody = document.getElementById('usersTableBody');
        const tableLoading = document.getElementById('tableLoading');
        const editUserModal = document.getElementById('editUserModal');
        const addUserModal = document.getElementById('addUserModal');
        const editUserForm = document.getElementById('editUserForm');
        const addUserForm = document.getElementById('addUserForm');
        const logoutBtn = document.getElementById('logoutBtn');
        const deleteConfirmDialog = document.getElementById('deleteConfirmDialog');
        
        // 搜索和过滤元素
        const searchInput = document.getElementById('searchInput');
        const searchBtn = document.getElementById('searchBtn');
        const filterButtons = document.querySelectorAll('.filter-btn');
        const addUserBtn = document.getElementById('addUserBtn');
        
        // 统计数据元素 - 现在有5个统计项
        const totalUsersEl = document.getElementById('totalUsers');
        const typeNCountEl = document.getElementById('typeNCount'); // Type N - 入籍学员
        const typeRCountEl = document.getElementById('typeRCount'); // Type R - 十年卡学员
        const typeMCountEl = document.getElementById('typeMCount'); // Type M - 多年卡学员
        const typeTCountEl = document.getElementById('typeTCount'); // Type T - 其他类型
        const currentAdminNameEl = document.getElementById('currentAdminName');
        const currentAdminRoleEl = document.getElementById('currentAdminRole');
        const stuCountEl = document.getElementById('stuCount');  // 新增学员统计
        const courseManageBtn = document.getElementById('courseManageBtn');  // 课程管理按钮
        
        // ==============================
        // 全局变量
        // ==============================
        let currentAdmin = null;
        let allUsers = [];
        let filteredUsers = [];
        let currentFilter = 'all';
        let userToDelete = null;
        function isExpired(user) {
    return user.timer ? new Date(user.timer) < new Date() : false;
}

        // ==============================
        // 页面加载初始化
        // ==============================
        document.addEventListener('DOMContentLoaded', function() {
            initEventListeners();
            checkAdminSession();
        });

        // ==============================
        // 初始化事件监听器
        // ==============================
      function initEventListeners() {
    // 登录表单提交
    loginForm.addEventListener('submit', handleAdminLogin);
    
    // 登出按钮
    logoutBtn.addEventListener('click', handleLogout);
    
    // 搜索功能
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') handleSearch();
    });
    
    // 过滤按钮
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.filter;
            applyFilters();
        });
    });
    
    // 添加用户按钮
    addUserBtn.addEventListener('click', showAddUserModal);
    
    // 模态框关闭按钮
    document.getElementById('closeModalBtn').addEventListener('click', () => closeModal(editUserModal));
    document.getElementById('closeAddModalBtn').addEventListener('click', () => closeModal(addUserModal));
    document.getElementById('cancelEditBtn').addEventListener('click', () => closeModal(editUserModal));
    document.getElementById('cancelAddBtn').addEventListener('click', () => closeModal(addUserModal));
    
    // 表单提交
    editUserForm.addEventListener('submit', handleEditUser);
    addUserForm.addEventListener('submit', handleAddUser);
    
    // 确认删除对话框
    document.getElementById('cancelDeleteBtn').addEventListener('click', () => closeModal(deleteConfirmDialog));
    document.getElementById('confirmDeleteBtn').addEventListener('click', handleDeleteUser);
    
    // 点击模态框外部关闭
    window.addEventListener('click', function(e) {
        if (e.target === editUserModal) closeModal(editUserModal);
        if (e.target === addUserModal) closeModal(addUserModal);
        if (e.target === deleteConfirmDialog) closeModal(deleteConfirmDialog);
    });
    
    // 课程管理按钮 - 跳转到 cours.html
    if (courseManageBtn) {
        courseManageBtn.addEventListener('click', function() {
            window.location.href = 'cours.html';
        });
    }
}

        // ==============================
        // 会话管理
        // ==============================
        function checkAdminSession() {
            try {
                const savedAdmin = sessionStorage.getItem('adminUser');
                if (savedAdmin) {
                    const admin = JSON.parse(savedAdmin);
                    if (admin && admin.name && admin.role === 'admin') {
                        currentAdmin = admin;
                        showAdminContent();
                        loadUsers();
                    } else {
                        sessionStorage.removeItem('adminUser');
                    }
                }
            } catch (e) {
                sessionStorage.removeItem('adminUser');
                console.error('会话检查错误:', e);
            }
        }

        // ==============================
        // 登录功能
        // ==============================
        async function handleAdminLogin(e) {
            e.preventDefault();
            
            const username = document.getElementById('adminUsername').value.trim();
            const password = document.getElementById('adminPassword').value;
            const usernameError = document.getElementById('usernameError');
            const passwordError = document.getElementById('passwordError');
            
            // 重置错误信息
            usernameError.style.display = 'none';
            passwordError.style.display = 'none';
            
            try {
                // 使用supabaseAuth验证用户
                const studentData = await window.supabaseAuth.validateStudent(username, password);
                
                if (!studentData) {
                    usernameError.textContent = "Nom d'utilisateur ou mot de passe incorrect";
                    usernameError.style.display = 'block';
                    return;
                }
                
                // 检查是否是管理员
                if (studentData.role !== 'admin') {
                    passwordError.textContent = "Accès refusé: Cet utilisateur n'est pas administrateur";
                    passwordError.style.display = 'block';
                    return;
                }
                
                // 检查访问权限
                const access = window.supabaseAuth.checkAccess(studentData);
                if (!access.valid) {
                    passwordError.textContent = access.message || "Votre compte a expiré";
                    passwordError.style.display = 'block';
                    return;
                }
                
                // 登录成功
                currentAdmin = {
                    id: studentData.id,
                    name: studentData.name,
                    role: studentData.role,
                    type: studentData.type,
                    timer: studentData.timer
                };
                
                // 保存到本地存储
                sessionStorage.setItem('adminUser', JSON.stringify(currentAdmin));
                
                // 显示管理界面
                showAdminContent();
                loadUsers();
                showToast('Connexion réussie!', 'success');
                
            } catch (error) {
                console.error('登录错误:', error);
                usernameError.textContent = "Une erreur s'est produite. Veuillez réessayer.";
                usernameError.style.display = 'block';
            }
        }

        // ==============================
        // 显示/隐藏界面
        // ==============================
        function showAdminContent() {
            loginSection.style.display = 'none';
            adminContent.style.display = 'block';
            
            // 更新当前管理员信息
            if (currentAdmin) {
                currentAdminNameEl.textContent = currentAdmin.name;
                currentAdminRoleEl.textContent = `Rôle: ${currentAdmin.role === 'admin' ? 'Administrateur' : currentAdmin.role || 'Utilisateur'}`;
            }
        }

        function showLoginContent() {
            loginSection.style.display = 'flex';
            adminContent.style.display = 'none';
            loginForm.reset();
        }

        // ==============================
        // 用户管理功能
        // ==============================
        async function loadUsers() {
            showLoading(true);
            
            try {
                const supabase = window.supabaseAuth.getSupabaseClient();
                
                // 从 Supabase 获取所有用户
                const { data, error } = await supabase
                    .from('students')
                    .select('*')
                    .order('created_at', { ascending: false });
                
                if (error) throw error;
                
                allUsers = data || [];
                filteredUsers = [...allUsers];
                
                // 更新统计数据
                updateStats();
                
                // 渲染表格
                renderUsersTable();
                
                showLoading(false);
                
            } catch (error) {
                console.error('加载用户错误:', error);
                showToast('Erreur lors du chargement des utilisateurs', 'error');
                showLoading(false);
            }
        }

        function renderUsersTable() {
            if (filteredUsers.length === 0) {
                usersTableBody.innerHTML = `
                    <tr>
                        <td colspan="8" style="text-align: center; padding: 40px;">  <!-- 从7改为8 -->
                            <i class="fas fa-users" style="font-size: 3rem; color: #ddd; margin-bottom: 15px;"></i>
                            <p style="color: var(--medium-gray);">Aucun utilisateur trouvé</p>
                        </td>
                    </tr>
                `;
                return;
            }
            
            usersTableBody.innerHTML = '';
            
            filteredUsers.forEach(user => {
                const row = document.createElement('tr');
               
                if (isExpired(user)) row.classList.add('expired-row');  // 添加这行
                
                // 格式化日期
                const createdAt = user.created_at ? new Date(user.created_at).toLocaleDateString('fr-FR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                }) : 'N/A';
                
                // 检查过期时间并格式化
                let timerInfo = 'Pas de date';
                let timerClass = '';
                if (user.timer) {
                    const timerDate = new Date(user.timer);
                    const now = new Date();
                    
                    if (timerDate < now) {
                        timerInfo = `Expiré le ${timerDate.toLocaleDateString('fr-FR')}`;
                        timerClass = 'expired';
                    } else {
                        const timeDiff = timerDate - now;
                        const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
                        timerInfo = `${timerDate.toLocaleDateString('fr-FR')} (${daysLeft} jours restants)`;
                        timerClass = daysLeft <= 7 ? 'warning' : 'active';
                    }
                }
                
                // 确定类型标签
                let typeClass = '';
                let typeText = '';
                switch(user.type) {
                    case 'n': typeClass = 'type-n'; typeText = 'Type N (入籍)'; break;
                    case 'r': typeClass = 'type-r'; typeText = 'Type R (十年卡)'; break;
                    case 'm': typeClass = 'type-m'; typeText = 'Type M (多年卡)'; break;
                    case 't': typeClass = 'type-t'; typeText = 'Type T'; break;
                    default: typeClass = 'type-t'; typeText = 'Type T';
                }
                
                // 确定角色标签
                let roleClass = '';
                let roleText = '';
                if (user.role === 'admin') {
                    roleClass = 'role-admin';
                    roleText = 'Administrateur';
                } else if (user.role === 'user') {
                    roleClass = 'role-user';
                    roleText = 'Membre';
                } else if (user.role === 'stu') {
                    roleClass = 'role-stu';
                    roleText = 'Elève';
                } else if (user.role === 'teacher') {
                    roleClass = 'role-teacher';
                    roleText = 'Intervenant';
                } else {
                    roleClass = '';
                    roleText = '';
                }
                
                row.innerHTML = `
                    <td>${user.id}</td>
                    <td><strong>${user.name}</strong></td>
                    <td><span class="user-type ${typeClass}">${typeText}</span></td>
                    <td>${roleText ? `<span class="role-tag ${roleClass}">${roleText}</span>` : ''}</td>
                    <td>${createdAt}</td>
                    <td class="${timerClass}">${timerInfo}</td>
                    <td>
                        <div style="display: flex; align-items: center;">
                            <span style="font-family: monospace; background: #f0f0f0; padding: 4px 8px; border-radius: 4px; font-size: 0.9rem;">
                                ${user.password || '—'}
                            </span>
                            ${user.password ? `
                            <button class="copy-password-btn" data-password="${user.password}" style="margin-left: 8px; background: none; border: none; color: var(--primary-blue); cursor: pointer;" title="Copier le mot de passe">
                                <i class="fas fa-copy"></i>
                            </button>
                            ` : ''}
                        </div>
                    </td>
                    <td>
                        <div class="action-buttons">
                            <button class="action-btn edit-btn" data-id="${user.id}">
                                <i class="fas fa-edit"></i> Modifier
                            </button>
                            <button class="action-btn delete-btn" data-id="${user.id}" ${user.role === 'admin' && user.id === currentAdmin?.id ? 'disabled' : ''}>
                                <i class="fas fa-trash"></i> Supprimer
                            </button>
                        </div>
                    </td>
                `;
                
                usersTableBody.appendChild(row);
            });
            
            // 添加事件监听器到操作按钮
            document.querySelectorAll('.edit-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const userId = this.dataset.id;
                    openEditUserModal(userId);
                });
            });
            
            document.querySelectorAll('.delete-btn').forEach(btn => {
                if (!btn.disabled) {
                    btn.addEventListener('click', function() {
                        const userId = this.dataset.id;
                        showDeleteConfirmation(userId);
                    });
                }
            });
            
            // 添加密码复制功能
            document.querySelectorAll('.copy-password-btn').forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const password = this.dataset.password;
                    if (!password) return;
                    
                    navigator.clipboard.writeText(password).then(() => {
                        showToast('Mot de passe copié!', 'success');
                    }).catch(() => {
                        showToast('Erreur lors de la copie', 'error');
                    });
                });
            });
        }

        // ==============================
        // 统计功能 - 按照您的要求修改
        // ==============================
       function updateStats() {
            const total = allUsers.length;
            const stuCount = allUsers.filter(u => u.role === 'stu').length;  // 新增
            const typeN = allUsers.filter(u => u.type === 'n').length;
            const typeR = allUsers.filter(u => u.type === 'r').length;
            const typeM = allUsers.filter(u => u.type === 'm').length;
            const typeT = allUsers.filter(u => u.type === 't').length;
            
            totalUsersEl.textContent = total;
            stuCountEl.textContent = stuCount;  // 新增
            typeNCountEl.textContent = typeN;
            typeRCountEl.textContent = typeR;
            typeMCountEl.textContent = typeM;
            typeTCountEl.textContent = typeT;
}

        // ==============================
        // 搜索和过滤
        // ==============================
        function handleSearch() {
            const searchTerm = searchInput.value.toLowerCase().trim();
            applyFilters(searchTerm);
        }

       function applyFilters(searchTerm = '') {
            filteredUsers = allUsers.filter(user => {
                if (searchTerm && !user.name.toLowerCase().includes(searchTerm)) {
                    return false;
                }
                
                if (currentFilter !== 'all') {
                    // 角色和过期筛选
                    if (currentFilter === 'role-user') {
                        return user.role === 'user';
                    } else if (currentFilter === 'role-stu') {
                        return user.role === 'stu';
                    } else if (currentFilter === 'role-teacher') {
                        return user.role === 'teacher';
                    } else if (currentFilter === 'expired') {
                        return isExpired(user);
                    } else if (currentFilter === 'admin' || currentFilter === 'role-admin') {
                        return user.role === 'admin';
                    } else {
                        const type = currentFilter.split('-')[1];
                        return user.type === type;
                    }
                }
                return true;
            });
    
    // 过期用户排在最后
    filteredUsers.sort((a, b) => (isExpired(a) === isExpired(b)) ? 0 : isExpired(a) ? 1 : -1);
    
    renderUsersTable();
}

        // ==============================
        // 用户编辑功能
        // ==============================
        function openEditUserModal(userId) {
            const user = allUsers.find(u => u.id.toString() === userId.toString());
            if (!user) return;
            
            // 填充表单数据
            document.getElementById('editUserId').value = user.id;
            document.getElementById('editUserName').value = user.name;
            document.getElementById('editUserType').value = user.type || 'n';
            document.getElementById('editUserRole').value = user.role || '';
            
            // 格式化创建日期
            const createdAt = user.created_at ? new Date(user.created_at).toLocaleDateString('fr-FR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            }) : 'Date non disponible';
            document.getElementById('editUserCreatedAt').textContent = createdAt;
            
            // 设置过期日期
            if (user.timer) {
                const timerDate = new Date(user.timer);
                const localDate = new Date(timerDate.getTime() - (timerDate.getTimezoneOffset() * 60000))
                    .toISOString()
                    .slice(0, 16);
                document.getElementById('editUserTimer').value = localDate;
            } else {
                document.getElementById('editUserTimer').value = '';
            }
            
            // 更新模态框标题
            document.getElementById('modalTitle').textContent = `Modifier ${user.name}`;
            
            // 显示模态框
            editUserModal.style.display = 'flex';
        }

        async function handleEditUser(e) {
            e.preventDefault();
            
            const userId = document.getElementById('editUserId').value;
            const username = document.getElementById('editUserName').value.trim();
            const password = document.getElementById('editUserPassword').value;
            const userType = document.getElementById('editUserType').value;
            const userRole = document.getElementById('editUserRole').value;
            const timer = document.getElementById('editUserTimer').value;
            
            // 验证输入
            if (!username || !userType) {
                showToast('Veuillez remplir tous les champs obligatoires', 'error');
                return;
            }
            
            // 准备更新数据
            const updateData = {
                name: username,
                type: userType
            };
            
            // 如果提供了新密码，则更新
            if (password.trim()) {
                updateData.password = password;
            }
            
            // 处理role字段
            if (userRole) {
                updateData.role = userRole;
            } else {
                updateData.role = null; // 清除role字段
            }
            
            // 处理timer字段
            if (timer) {
                try {
                    const date = new Date(timer);
                    if (isNaN(date.getTime())) {
                        throw new Error('Date invalide');
                    }
                    updateData.timer = date.toISOString();
                } catch (error) {
                    console.warn('日期格式错误，跳过timer字段');
                }
            } else {
                updateData.timer = null; // 清除timer字段
            }
            
            try {
                const supabase = window.supabaseAuth.getSupabaseClient();
                
                console.log('更新用户数据:', updateData);
                
                // 更新用户数据
                const { error } = await supabase
                    .from('students')
                    .update(updateData)
                    .eq('id', userId);
                
                if (error) throw error;
                
                // 关闭模态框
                closeModal(editUserModal);
                
                // 重新加载用户数据
                await loadUsers();
                
                // 显示成功消息
                showToast('Utilisateur modifié avec succès', 'success');
                
            } catch (error) {
                console.error('修改用户错误:', error);
                
                let errorMessage = 'Erreur lors de la modification de l\'utilisateur';
                if (error.code === '23505') {
                    errorMessage = 'Ce nom d\'utilisateur existe déjà';
                } else if (error.code === '23514') {
                    errorMessage = 'Type d\'utilisateur invalide';
                }
                
                showToast(errorMessage, 'error');
            }
        }

        // ==============================
        // 添加用户功能
        // ==============================
        function showAddUserModal() {
            addUserForm.reset();
            document.getElementById('addUserType').value = 'n';
            document.getElementById('addUserRole').value = '';
            document.getElementById('addUserTimer').value = '';
            addUserModal.style.display = 'flex';
        }

        async function handleAddUser(e) {
            e.preventDefault();
            
            const username = document.getElementById('addUserName').value.trim();
            const password = document.getElementById('addUserPassword').value;
            const userType = document.getElementById('addUserType').value;
            const userRole = document.getElementById('addUserRole').value;
            const timer = document.getElementById('addUserTimer').value;
            
            console.log('准备创建用户:', { username, userType, userRole, timer });
            
            // 验证输入
            if (!username || !password || !userType) {
                showToast('Veuillez remplir tous les champs obligatoires', 'error');
                return;
            }
            
            // 验证type值是否有效
            const validTypes = ['n', 'r', 'm', 't'];
            if (!validTypes.includes(userType)) {
                showToast('Type d\'utilisateur invalide', 'error');
                return;
            }
            
            // 验证用户名是否已存在
            const existingUser = allUsers.find(u => u.name === username);
            if (existingUser) {
                showToast('Ce nom d\'utilisateur existe déjà', 'error');
                return;
            }
            
            // 准备新用户数据
            const newUser = {
                name: username,
                password: password,
                type: userType,
                created_at: new Date().toISOString()
            };
            
            // 添加role字段（如果提供）
            if (userRole) {
                newUser.role = userRole;
            }
            
            // 如果设置了过期时间，则添加
            if (timer) {
                try {
                    const date = new Date(timer);
                    if (isNaN(date.getTime())) {
                        throw new Error('Date invalide');
                    }
                    newUser.timer = date.toISOString();
                } catch (error) {
                    console.warn('日期格式错误，跳过timer字段');
                }
            }
            
            console.log('最终用户数据:', newUser);
            
            try {
                const supabase = window.supabaseAuth.getSupabaseClient();
                
                // 插入新用户
                const { data, error } = await supabase
                    .from('students')
                    .insert([newUser])
                    .select();
                    
                if (error) {
                    console.error('Supabase插入错误:', error);
                    
                    let errorMessage = 'Erreur lors de la création';
                    if (error.code === '23505') {
                        errorMessage = 'Ce nom d\'utilisateur existe déjà';
                    } else if (error.code === '23514') {
                        errorMessage = 'Type d\'utilisateur invalide';
                    } else if (error.message.includes('null value')) {
                        errorMessage = 'Champ obligatoire manquant';
                    }
                    
                    showToast(errorMessage, 'error');
                    return;
                }
                
                console.log('用户创建成功:', data);
                
                // 关闭模态框
                closeModal(addUserModal);
                
                // 重新加载用户数据
                await loadUsers();
                
                // 显示成功消息
                showToast('Utilisateur créé avec succès', 'success');
                
            } catch (error) {
                console.error('创建用户错误:', error);
                showToast('Erreur technique lors de la création', 'error');
            }
        }

        // ==============================
        // 删除用户功能
        // ==============================
        function showDeleteConfirmation(userId) {
            const user = allUsers.find(u => u.id.toString() === userId.toString());
            if (!user) return;
            
            userToDelete = user;
            document.getElementById('deleteUserName').textContent = user.name;
            deleteConfirmDialog.style.display = 'flex';
        }

        async function handleDeleteUser() {
            if (!userToDelete) return;
            
            try {
                const supabase = window.supabaseAuth.getSupabaseClient();
                
                // 从 Supabase 删除用户
                const { error } = await supabase
                    .from('students')
                    .delete()
                    .eq('id', userToDelete.id);
                
                if (error) throw error;
                
                // 关闭确认对话框
                closeModal(deleteConfirmDialog);
                
                // 重新加载用户数据
                await loadUsers();
                
                // 显示成功消息
                showToast('Utilisateur supprimé avec succès', 'success');
                
                // 重置要删除的用户
                userToDelete = null;
                
            } catch (error) {
                console.error('删除用户错误:', error);
                showToast('Erreur lors de la suppression de l\'utilisateur', 'error');
            }
        }

        // ==============================
        // 登出功能
        // ==============================
        function handleLogout() {
            sessionStorage.removeItem('adminUser');
            currentAdmin = null;
            allUsers = [];
            filteredUsers = [];
            showLoginContent();
            showToast('Vous avez été déconnecté', 'success');
        }

        // ==============================
        // 辅助函数
        // ==============================
        function showLoading(show) {
            tableLoading.style.display = show ? 'block' : 'none';
        }

        function closeModal(modal) {
            modal.style.display = 'none';
        }

        function showToast(message, type = 'success') {
            // 移除已有的 toast
            const existingToast = document.querySelector('.toast');
            if (existingToast) existingToast.remove();
            
            // 创建新的 toast
            const toast = document.createElement('div');
            toast.className = `toast toast-${type}`;
            toast.innerHTML = `
                <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
                <span>${message}</span>
            `;
            
            document.body.appendChild(toast);
            
            // 3秒后自动移除
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.style.animation = 'slideInRight 0.3s reverse';
                    setTimeout(() => {
                        if (toast.parentNode) toast.remove();
                    }, 300);
                }
            }, 3000);
        }

        // ==============================
        // 初始化完成
        // ==============================
        console.log('管理后台初始化完成');
