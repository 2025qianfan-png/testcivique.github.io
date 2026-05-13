// ==============================
// 管理后台核心逻辑（纯 token 验证版）
// ==============================

console.log('管理后台初始化...');

// 检查supabaseAuth是否已加载
if (typeof window.supabaseAuth === 'undefined') {
    console.error('错误: supabase-config.js 未加载');
    alert('系统配置加载失败，请刷新页面重试');
}

// ==============================
// Token 解析函数
// ==============================
// ========== Token 解析函数（支持 URL 参数和 sessionStorage）==========
function getAdminToken() {
    const urlParams = new URLSearchParams(window.location.search);
    let token = urlParams.get('token');
    
    if (token) {
        sessionStorage.setItem('adminToken', token);
        return token;
    }
    
    token = sessionStorage.getItem('adminToken');
    if (token) {
        const newUrl = window.location.pathname + '?token=' + token;
        window.history.replaceState({}, '', newUrl);
        return token;
    }
    
    return null;
}

function parseTokenFromUrl() {
    const token = getAdminToken();
    if (!token) {
        console.error('没有找到 token');
        return null;
    }
    
    try {
        const jsonString = decodeURIComponent(atob(token));
        const data = JSON.parse(jsonString);
        return data;
    } catch (e) {
        console.error('Token 解析失败:', e);
        return null;
    }
}

// 验证 token 中的管理员身份
function validateAdminToken(tokenData) {
    if (!tokenData) return false;
    // 检查角色是否为 admin
    if (tokenData.role !== 'admin') {
        console.error('不是管理员账户');
        return false;
    }
    // 检查是否过期
    if (tokenData.expiry) {
        const expiryDate = new Date(tokenData.expiry);
        const now = new Date();
        if (expiryDate < now) {
            console.error('账户已过期');
            return false;
        }
    }
    return true;
}

// ==============================
// DOM 元素引用
// ==============================
const adminContent = document.getElementById('adminContent');
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

// 统计数据元素
const totalUsersEl = document.getElementById('totalUsers');
const typeNCountEl = document.getElementById('typeNCount');
const typeRCountEl = document.getElementById('typeRCount');
const typeMCountEl = document.getElementById('typeMCount');
const typeTCountEl = document.getElementById('typeTCount');
const currentAdminNameEl = document.getElementById('currentAdminName');
const currentAdminRoleEl = document.getElementById('currentAdminRole');
const stuCountEl = document.getElementById('stuCount');
const courseManageBtn = document.getElementById('courseManageBtn');

// ==============================
// 全局变量
// ==============================
let currentAdmin = null;
let allUsers = [];
let filteredUsers = [];
let currentFilter = 'all';
let userToDelete = null;
let currentSearchTerm = '';

function isExpired(user) {
    return user.timer ? new Date(user.timer) < new Date() : false;
}

// ==============================
// 页面加载初始化
// ==============================
document.addEventListener('DOMContentLoaded', function() {
    // 解析 token
    const tokenData = parseTokenFromUrl();
    
    // 验证 token
    if (!tokenData || !validateAdminToken(tokenData)) {
        // 验证失败，跳转到首页登录
        showToast(
            'Accès refusé',
            'Vous devez être connecté en tant qu\'administrateur pour accéder à cette page.',
            'error'
        );
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
        return;
    }
    
    // 保存管理员信息
    currentAdmin = {
        id: tokenData.userId,
        name: tokenData.name,
        role: tokenData.role,
        type: tokenData.type,
        expiry: tokenData.expiry,
        daysLeft: tokenData.daysLeft
    };
    
    // 更新界面显示
    currentAdminNameEl.textContent = currentAdmin.name;
    currentAdminRoleEl.textContent = `Rôle: Administrateur`;
    
    // 显示管理界面
    adminContent.style.display = 'block';
    
    // 初始化事件和加载数据
    initEventListeners();
    loadUsers();
});

// ==============================
// 初始化事件监听器
// ==============================
function initEventListeners() {
    // 登出按钮 - 跳转到首页
  logoutBtn.addEventListener('click', function() {
    sessionStorage.removeItem('adminToken');
    sessionStorage.removeItem('adminUser');
    window.location.href = 'index.html';
});
    
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
    
    // 角色选择时显示/隐藏课时输入框
    document.getElementById('addUserRole').addEventListener('change', function() {
        const creditGroup = document.getElementById('addCreditGroup');
        if (this.value === 'stu') {
            creditGroup.style.display = 'block';
        } else {
            creditGroup.style.display = 'none';
        }
    });
    
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
    
    // 课程管理按钮
    if (courseManageBtn) {
        courseManageBtn.addEventListener('click', function() {
            window.location.href = 'cours.html';
        });
    }
}

// ==============================
// 用户管理功能
// ==============================
async function loadUsers() {
    showLoading(true);
    
    try {
        const supabase = window.supabaseAuth.getSupabaseClient();
        
        const { data, error } = await supabase
            .from('students')
            .select('*')
            .order('created_at', { ascending: false });
        
        if (error) throw error;
        
        allUsers = data || [];
        
        // 应用当前的筛选
        applyFilters();
        
        updateStats();
        
        showLoading(false);
        
    } catch (error) {
        console.error('加载用户错误:', error);
        showToast('Erreur lors du chargement des utilisateurs', 'error');
        showLoading(false);
    }
}

// 渲染课时单元格（只有 stu 才显示课时）
function renderCreditCell(user) {
    if (user.role !== 'stu') {
        return '<span class="credit-na">—</span>';
    }
    const credit = (user.credit !== undefined && user.credit !== null) ? user.credit : 0;
    let creditClass = 'credit-normal';
    if (credit <= 0) creditClass = 'credit-zero';
    else if (credit <= 3) creditClass = 'credit-low';
    return `<span class="${creditClass}">📚 ${credit} h</span>`;
}

function renderUsersTable() {
    if (filteredUsers.length === 0) {
        usersTableBody.innerHTML = `
            <tr>
                <td colspan="8" style="text-align: center; padding: 40px;">
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
       
        if (isExpired(user)) row.classList.add('expired-row');
        
        const createdAt = user.created_at ? new Date(user.created_at).toLocaleDateString('fr-FR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }) : 'N/A';
        
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
        
        let typeClass = '';
        let typeText = '';
        switch(user.type) {
            case 'n': typeClass = 'type-n'; typeText = 'Type N'; break;
            case 'r': typeClass = 'type-r'; typeText = 'Type R'; break;
            case 'm': typeClass = 'type-m'; typeText = 'Type M'; break;
            case 't': typeClass = 'type-t'; typeText = 'Type T'; break;
            default: typeClass = 'type-t'; typeText = 'Type T';
        }
        
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
            roleText = 'Élève';
        } else if (user.role === 'teacher') {
            roleClass = 'role-teacher';
            roleText = 'Intervenant';
        } else {
            roleClass = '';
            roleText = '';
        }
        
        // 注意：删除了 ID 列
        row.innerHTML = `
            <td><strong>${escapeHtml(user.name)}</strong></td>
            <td><span class="user-type ${typeClass}">${typeText}</span></td>
            <td>${roleText ? `<span class="role-tag ${roleClass}">${roleText}</span>` : ''}</td>
            <td>${createdAt}</td>
            <td class="${timerClass}">${timerInfo}</td>
            <td class="credit-cell">${renderCreditCell(user)}</td>
            <td>
                <div style="display: flex; align-items: center; gap: 8px;">
                    <span style="font-family: monospace; background: #f0f0f0; padding: 4px 8px; border-radius: 4px;">${user.password || '—'}</span>
                    ${user.password ? `<button class="copy-password-btn" data-password="${escapeHtml(user.password)}" style="background: none; border: none; color: var(--primary-blue); cursor: pointer;"><i class="fas fa-copy"></i></button>` : ''}
                </div>
            </td>
            <td>
                <div class="action-buttons">
                    <button class="action-btn edit-btn" data-id="${user.id}"><i class="fas fa-edit"></i> Modifier</button>
                    <button class="action-btn delete-btn" data-id="${user.id}" ${user.role === 'admin' && user.id === currentAdmin?.id ? 'disabled' : ''}><i class="fas fa-trash"></i> Supprimer</button>
                </div>
            </td>
        `;
        usersTableBody.appendChild(row);
    });
    
    // ... 后面的事件监听器代码保持不变
}
// ==============================
// 统计功能
// ==============================
function updateStats() {
    const total = allUsers.length;
    const stuCount = allUsers.filter(u => u.role === 'stu').length;
    const typeN = allUsers.filter(u => u.type === 'n').length;
    const typeR = allUsers.filter(u => u.type === 'r').length;
    const typeM = allUsers.filter(u => u.type === 'm').length;
    const typeT = allUsers.filter(u => u.type === 't').length;
    
    totalUsersEl.textContent = total;
    stuCountEl.textContent = stuCount;
    typeNCountEl.textContent = typeN;
    typeRCountEl.textContent = typeR;
    typeMCountEl.textContent = typeM;
    typeTCountEl.textContent = typeT;
}

// ==============================
// 搜索和过滤
// ==============================
function handleSearch() {
    currentSearchTerm = searchInput.value.toLowerCase().trim();
    applyFilters();
}

function applyFilters() {
    filteredUsers = allUsers.filter(user => {
        if (currentSearchTerm && !user.name.toLowerCase().includes(currentSearchTerm)) {
            return false;
        }
        
        if (currentFilter !== 'all') {
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
    
    filteredUsers.sort((a, b) => (isExpired(a) === isExpired(b)) ? 0 : isExpired(a) ? 1 : -1);
    renderUsersTable();
}

// ==============================
// 用户编辑功能
// ==============================
function openEditUserModal(userId) {
    const user = allUsers.find(u => u.id.toString() === userId.toString());
    if (!user) return;
    
    document.getElementById('editUserId').value = user.id;
    document.getElementById('editUserName').value = user.name;
    document.getElementById('editUserType').value = user.type || 'n';
    document.getElementById('editUserRole').value = user.role || '';
    
    const createdAt = user.created_at ? new Date(user.created_at).toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }) : 'Date non disponible';
    document.getElementById('editUserCreatedAt').textContent = createdAt;
    
    if (user.timer) {
        const timerDate = new Date(user.timer);
        const localDate = new Date(timerDate.getTime() - (timerDate.getTimezoneOffset() * 60000))
            .toISOString()
            .slice(0, 16);
        document.getElementById('editUserTimer').value = localDate;
    } else {
        document.getElementById('editUserTimer').value = '';
    }
    
    const creditGroup = document.getElementById('editCreditGroup');
    const creditInput = document.getElementById('editUserCredit');
    
    if (user.role === 'stu') {
        creditGroup.style.display = 'block';
        creditInput.value = (user.credit !== undefined && user.credit !== null) ? user.credit : 0;
    } else {
        creditGroup.style.display = 'none';
        creditInput.value = '';
    }
    
    document.getElementById('modalTitle').textContent = `Modifier ${user.name}`;
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
    
    if (!username || !userType) {
        showToast('Veuillez remplir tous les champs obligatoires', 'error');
        return;
    }
    
    const updateData = {
        name: username,
        type: userType
    };
    
    if (password.trim()) {
        updateData.password = password;
    }
    
    if (userRole) {
        updateData.role = userRole;
    } else {
        updateData.role = null;
    }
    
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
        updateData.timer = null;
    }
    
    if (userRole === 'stu') {
        const creditValue = document.getElementById('editUserCredit').value;
        if (creditValue !== '' && creditValue !== null) {
            const creditNum = parseInt(creditValue);
            if (!isNaN(creditNum)) {
                updateData.credit = creditNum;
            }
        } else {
            updateData.credit = 0;
        }
    }
    
    try {
        const supabase = window.supabaseAuth.getSupabaseClient();
        
        const { error } = await supabase
            .from('students')
            .update(updateData)
            .eq('id', userId);
        
        if (error) throw error;
        
        closeModal(editUserModal);
        await loadUsers();
        showToast('Utilisateur modifié avec succès', 'success');
        
    } catch (error) {
        console.error('修改用户错误:', error);
        
        let errorMessage = 'Erreur lors de la modification';
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
    document.getElementById('addCreditGroup').style.display = 'none';
    addUserModal.style.display = 'flex';
}

async function handleAddUser(e) {
    e.preventDefault();
    
    const username = document.getElementById('addUserName').value.trim();
    const password = document.getElementById('addUserPassword').value;
    const userType = document.getElementById('addUserType').value;
    const userRole = document.getElementById('addUserRole').value;
    const timer = document.getElementById('addUserTimer').value;
    
    if (!username || !password || !userType) {
        showToast('Veuillez remplir tous les champs obligatoires', 'error');
        return;
    }
    
    const validTypes = ['n', 'r', 'm', 't'];
    if (!validTypes.includes(userType)) {
        showToast('Type d\'utilisateur invalide', 'error');
        return;
    }
    
    const existingUser = allUsers.find(u => u.name === username);
    if (existingUser) {
        showToast('Ce nom d\'utilisateur existe déjà', 'error');
        return;
    }
    
    const newUser = {
        name: username,
        password: password,
        type: userType,
        created_at: new Date().toISOString()
    };
    
    if (userRole) {
        newUser.role = userRole;
    }
    
    if (userRole === 'stu') {
        const creditValue = document.getElementById('addUserCredit').value;
        if (creditValue && creditValue !== '') {
            const creditNum = parseInt(creditValue);
            if (!isNaN(creditNum)) {
                newUser.credit = creditNum;
            }
        } else {
            newUser.credit = 0;
        }
    }
    
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
    
    try {
        const supabase = window.supabaseAuth.getSupabaseClient();
        
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
            }
            showToast(errorMessage, 'error');
            return;
        }
        
        closeModal(addUserModal);
        await loadUsers();
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
        
        const { error } = await supabase
            .from('students')
            .delete()
            .eq('id', userToDelete.id);
        
        if (error) throw error;
        
        closeModal(deleteConfirmDialog);
        await loadUsers();
        showToast('Utilisateur supprimé avec succès', 'success');
        userToDelete = null;
        
    } catch (error) {
        console.error('删除用户错误:', error);
        showToast('Erreur lors de la suppression', 'error');
    }
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

function escapeHtml(s) {
    if (!s) return '';
    return s.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

function showToast(message, type = 'success') {
    const existingToast = document.querySelector('.toast');
    if (existingToast) existingToast.remove();
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
        <span>${message}</span>
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        if (toast.parentNode) {
            toast.style.animation = 'slideInRight 0.3s reverse';
            setTimeout(() => {
                if (toast.parentNode) toast.remove();
            }, 300);
        }
    }, 3000);
}

console.log('管理后台初始化完成');
