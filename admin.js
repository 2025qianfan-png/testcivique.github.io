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
// EMAILJS 配置
// ==============================
const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'D2jk67ERbrJZSUyvC',
    SERVICE_ID: 'service_5i2hyhb',
    TEMPLATE_ID: 'template_ywlxxks'
};

// ==============================
// Token 解析函数
// ==============================
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

function validateAdminToken(tokenData) {
    if (!tokenData) return false;
    if (tokenData.role !== 'admin') {
        console.error('不是管理员账户');
        return false;
    }
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
const preRegTableBody = document.getElementById('preRegTableBody');
const tableLoading = document.getElementById('tableLoading');
const preRegLoading = document.getElementById('preRegLoading');
const editUserModal = document.getElementById('editUserModal');
const addUserModal = document.getElementById('addUserModal');
const detailModal = document.getElementById('detailModal');
const editUserForm = document.getElementById('editUserForm');
const addUserForm = document.getElementById('addUserForm');
const logoutBtn = document.getElementById('logoutBtn');
const deleteConfirmDialog = document.getElementById('deleteConfirmDialog');

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const filterButtons = document.querySelectorAll('.filter-btn');
const addUserBtn = document.getElementById('addUserBtn');

const totalUsersEl = document.getElementById('totalUsers');
const typeNCountEl = document.getElementById('typeNCount');
const typeRCountEl = document.getElementById('typeRCount');
const typeMCountEl = document.getElementById('typeMCount');
const typeTCountEl = document.getElementById('typeTCount');
const currentAdminNameEl = document.getElementById('currentAdminName');
const currentAdminRoleEl = document.getElementById('currentAdminRole');
const stuCountEl = document.getElementById('stuCount');
const courseManageBtn = document.getElementById('courseManageBtn');
const preRegCountEl = document.getElementById('preRegCount');
const preRegCountEl2 = document.getElementById('preRegCount2');

// ==============================
// 全局变量
// ==============================
let currentAdmin = null;
let allUsers = [];
let filteredUsers = [];
let allPreRegs = [];
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
    const tokenData = parseTokenFromUrl();
    
    if (!tokenData || !validateAdminToken(tokenData)) {
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
    
    currentAdmin = {
        id: tokenData.userId,
        name: tokenData.name,
        role: tokenData.role,
        type: tokenData.type,
        expiry: tokenData.expiry,
        daysLeft: tokenData.daysLeft
    };
    
    currentAdminNameEl.textContent = currentAdmin.name;
    currentAdminRoleEl.textContent = `Rôle: Administrateur`;
    
    adminContent.style.display = 'block';
    
    initEventListeners();
    loadUsers();
    loadPreRegistrations();
    setupTabs();
    
    // 预加载 EmailJS
    loadEmailJS();
});

// ==============================
// TABS
// ==============================
function setupTabs() {
    document.querySelectorAll('.admin-tabs button').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.admin-tabs button').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const tab = this.dataset.tab;
            document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
            document.getElementById('tab-' + tab).classList.add('active');
        });
    });
}

// ==============================
// 初始化事件监听器
// ==============================
function initEventListeners() {
    logoutBtn.addEventListener('click', function() {
        sessionStorage.removeItem('adminToken');
        sessionStorage.removeItem('adminUser');
        window.location.href = 'index.html';
    });
    
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') handleSearch();
    });
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.filter;
            applyFilters();
        });
    });
    
    addUserBtn.addEventListener('click', showAddUserModal);
    
    document.getElementById('addUserRole').addEventListener('change', function() {
        const creditGroup = document.getElementById('addCreditGroup');
        if (this.value === 'stu') {
            creditGroup.style.display = 'block';
        } else {
            creditGroup.style.display = 'none';
        }
    });
    
    document.getElementById('closeModalBtn').addEventListener('click', () => closeModal(editUserModal));
    document.getElementById('closeAddModalBtn').addEventListener('click', () => closeModal(addUserModal));
    document.getElementById('closeDetailBtn').addEventListener('click', () => closeModal(detailModal));
    document.getElementById('closeDetailBtn2').addEventListener('click', () => closeModal(detailModal));
    document.getElementById('cancelEditBtn').addEventListener('click', () => closeModal(editUserModal));
    document.getElementById('cancelAddBtn').addEventListener('click', () => closeModal(addUserModal));
    
    editUserForm.addEventListener('submit', handleEditUser);
    addUserForm.addEventListener('submit', handleAddUser);
    
    document.getElementById('cancelDeleteBtn').addEventListener('click', () => closeModal(deleteConfirmDialog));
    document.getElementById('confirmDeleteBtn').addEventListener('click', handleDeleteUser);
    
    window.addEventListener('click', function(e) {
        if (e.target === editUserModal) closeModal(editUserModal);
        if (e.target === addUserModal) closeModal(addUserModal);
        if (e.target === detailModal) closeModal(detailModal);
        if (e.target === deleteConfirmDialog) closeModal(deleteConfirmDialog);
    });
    
    if (courseManageBtn) {
        courseManageBtn.addEventListener('click', function() {
            window.location.href = 'cours.html';
        });
    }
}

// ==============================
// EmailJS 加载函数
// ==============================
function loadEmailJS() {
    return new Promise((resolve, reject) => {
        if (typeof emailjs !== 'undefined') {
            console.log('✅ EmailJS déjà chargé');
            resolve();
            return;
        }
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
        script.onload = () => {
            console.log('✅ EmailJS chargé avec succès');
            emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
            resolve();
        };
        script.onerror = () => {
            console.error('❌ Échec chargement EmailJS');
            reject(new Error('Impossible de charger EmailJS'));
        };
        document.head.appendChild(script);
    });
}

// ==============================
// 发送邮件函数
// ==============================
async function sendActivationEmail(userEmail, userName, userType, userRole, userPassword) {
    try {
        // Vérifier que EmailJS est chargé
        if (typeof emailjs === 'undefined') {
            console.log('📧 Chargement de EmailJS...');
            await loadEmailJS();
        }

        const typeLabels = {
            'n': 'Naturalisation (入籍)',
            'r': 'Carte 10 ans (十年居留)',
            'm': 'Carte pluriannuelle (多年居留)'
        };
        
        const roleLabels = {
            'user': 'Membre (会员)',
            'stu': 'Élève (学员)'
        };

        const templateParams = {
            to_email: userEmail,
            to_name: userName,
            user_name: userName,
            user_type: typeLabels[userType] || userType,
            user_role: roleLabels[userRole] || userRole,
            user_password: userPassword || 'Votre mot de passe',
            login_url: 'https://www.assmv.fr/examen-civique.html',
            contact_email: '2025qianfan@gmail.com',
            subject: '🎉 Votre compte Mille Voiles est activé ! / 🎉 您的千帆协会账户已激活！'
        };

        console.log('📧 Envoi email à:', userEmail);
        console.log('📧 Template ID:', EMAILJS_CONFIG.TEMPLATE_ID);
        console.log('🔗 Lien de connexion:', templateParams.login_url);

        const response = await emailjs.send(
            EMAILJS_CONFIG.SERVICE_ID,
            EMAILJS_CONFIG.TEMPLATE_ID,
            templateParams,
            EMAILJS_CONFIG.PUBLIC_KEY
        );

        console.log('✅ Email envoyé avec succès:', response);
        return { success: true, response };

    } catch (error) {
        console.error('❌ Erreur envoi email:', error);
        return { success: false, error: error.message };
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
        applyFilters();
        updateStats();
        showLoading(false);
        
    } catch (error) {
        console.error('加载用户错误:', error);
        showToast('Erreur lors du chargement des utilisateurs', 'error');
        showLoading(false);
    }
}

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
                <td colspan="9" style="text-align: center; padding: 40px;">
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
            day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'
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
                const daysLeft = Math.ceil((timerDate - now) / (1000 * 60 * 60 * 24));
                timerInfo = `${timerDate.toLocaleDateString('fr-FR')} (${daysLeft} jours restants)`;
                timerClass = daysLeft <= 7 ? 'warning' : 'active';
            }
        }
        
        let typeClass = '', typeText = '';
        switch(user.type) {
            case 'n': typeClass = 'type-n'; typeText = 'Type N'; break;
            case 'r': typeClass = 'type-r'; typeText = 'Type R'; break;
            case 'm': typeClass = 'type-m'; typeText = 'Type M'; break;
            case 't': typeClass = 'type-t'; typeText = 'Type T'; break;
            default: typeClass = 'type-t'; typeText = 'Type T';
        }
        
        let roleClass = '', roleText = '';
        if (user.role === 'admin') { roleClass = 'role-admin'; roleText = 'Administrateur'; }
        else if (user.role === 'user') { roleClass = 'role-user'; roleText = 'Membre'; }
        else if (user.role === 'stu') { roleClass = 'role-stu'; roleText = 'Élève'; }
        else if (user.role === 'teacher') { roleClass = 'role-teacher'; roleText = 'Intervenant'; }
        
        row.innerHTML = `
            <td><strong>${escapeHtml(user.name)}</strong></td>
            <td><span class="user-type ${typeClass}">${typeText}</span></td>
            <td>${roleText ? `<span class="role-tag ${roleClass}">${roleText}</span>` : ''}</td>
            <td>${createdAt}</td>
            <td class="${timerClass}">${timerInfo}</td>
            <td class="credit-cell">${renderCreditCell(user)}</td>
            <td>${user.email || '-'}</td>
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
    
    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            openEditUserModal(this.dataset.id);
        });
    });
    
    document.querySelectorAll('.delete-btn').forEach(btn => {
        if (!btn.disabled) {
            btn.addEventListener('click', function() {
                showDeleteConfirmation(this.dataset.id);
            });
        }
    });
    
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
            if (currentFilter === 'role-user') return user.role === 'user';
            else if (currentFilter === 'role-stu') return user.role === 'stu';
            else if (currentFilter === 'role-teacher') return user.role === 'teacher';
            else if (currentFilter === 'expired') return isExpired(user);
            else if (currentFilter === 'admin' || currentFilter === 'role-admin') return user.role === 'admin';
            else {
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
    document.getElementById('editUserEmail').value = user.email || '';
    document.getElementById('editUserType').value = user.type || 'n';
    document.getElementById('editUserRole').value = user.role || '';
    
    const createdAt = user.created_at ? new Date(user.created_at).toLocaleDateString('fr-FR', {
        day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'
    }) : 'Date non disponible';
    document.getElementById('editUserCreatedAt').textContent = createdAt;
    
    if (user.timer) {
        const timerDate = new Date(user.timer);
        const localDate = new Date(timerDate.getTime() - (timerDate.getTimezoneOffset() * 60000))
            .toISOString().slice(0, 16);
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
    const email = document.getElementById('editUserEmail').value.trim();
    
    if (!username || !userType) {
        showToast('Veuillez remplir tous les champs obligatoires', 'error');
        return;
    }
    
    const updateData = { 
        name: username, 
        type: userType,
        email: email || null
    };
    if (password.trim()) updateData.password = password;
    if (userRole) updateData.role = userRole;
    else updateData.role = null;
    
    if (timer) {
        try {
            const date = new Date(timer);
            if (!isNaN(date.getTime())) updateData.timer = date.toISOString();
        } catch (error) { console.warn('日期格式错误，跳过timer字段'); }
    } else {
        updateData.timer = null;
    }
    
    if (userRole === 'stu') {
        const creditValue = document.getElementById('editUserCredit').value;
        if (creditValue !== '' && creditValue !== null) {
            const creditNum = parseInt(creditValue);
            if (!isNaN(creditNum)) updateData.credit = creditNum;
        } else {
            updateData.credit = 0;
        }
    }
    
    try {
        const supabase = window.supabaseAuth.getSupabaseClient();
        const { error } = await supabase.from('students').update(updateData).eq('id', userId);
        if (error) throw error;
        closeModal(editUserModal);
        await loadUsers();
        showToast('Utilisateur modifié avec succès', 'success');
    } catch (error) {
        console.error('修改用户错误:', error);
        let errorMessage = 'Erreur lors de la modification';
        if (error.code === '23505') errorMessage = 'Ce nom d\'utilisateur existe déjà';
        else if (error.code === '23514') errorMessage = 'Type d\'utilisateur invalide';
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
    const email = document.getElementById('addUserEmail').value.trim();
    
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
        email: email || null,
        created_at: new Date().toISOString()
    };
    
    if (userRole) newUser.role = userRole;
    if (userRole === 'stu') {
        const creditValue = document.getElementById('addUserCredit').value;
        newUser.credit = (creditValue && creditValue !== '') ? parseInt(creditValue) || 0 : 0;
    }
    if (timer) {
        try {
            const date = new Date(timer);
            if (!isNaN(date.getTime())) newUser.timer = date.toISOString();
        } catch (error) { console.warn('日期格式错误，跳过timer字段'); }
    }
    
    try {
        const supabase = window.supabaseAuth.getSupabaseClient();
        const { error } = await supabase.from('students').insert([newUser]);
        if (error) {
            console.error('Supabase插入错误:', error);
            let errorMessage = 'Erreur lors de la création';
            if (error.code === '23505') errorMessage = 'Ce nom d\'utilisateur existe déjà';
            else if (error.code === '23514') errorMessage = 'Type d\'utilisateur invalide';
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
        const { error } = await supabase.from('students').delete().eq('id', userToDelete.id);
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
// PRÉ-INSCRIPTIONS - GESTION
// ==============================

async function loadPreRegistrations() {
    if (preRegLoading) {
        preRegLoading.style.display = 'block';
    }
    
    try {
        console.log('📋 Chargement des pré-inscriptions...');
        const supabase = window.supabaseAuth.getSupabaseClient();
        
        const { data, error } = await supabase
            .from('pre_registrations')
            .select('*')
            .order('created_at', { ascending: false });
        
        if (error) {
            console.error('❌ Erreur Supabase:', error);
            throw error;
        }
        
        console.log('✅ Pré-inscriptions chargées:', data ? data.length : 0);
        allPreRegs = data || [];
        renderPreRegTable();
        updatePreRegCount();
        
        if (preRegLoading) {
            preRegLoading.style.display = 'none';
        }
        
    } catch (error) {
        console.error('❌ 加载预注册错误:', error);
        showToast('Erreur lors du chargement des pré-inscriptions', 'error');
        if (preRegLoading) {
            preRegLoading.style.display = 'none';
        }
        if (preRegTableBody) {
            preRegTableBody.innerHTML = `
                <tr>
                    <td colspan="8" style="text-align: center; padding: 40px;">
                        <i class="fas fa-exclamation-triangle" style="font-size: 2rem; color: var(--red); margin-bottom: 15px;"></i>
                        <p style="color: var(--red);">Erreur de chargement</p>
                        <p style="color: var(--medium-gray); font-size: 0.85rem; margin-top: 8px;">${error.message || 'Veuillez vérifier la table pre_registrations'}</p>
                    </td>
                </tr>
            `;
        }
    }
}

function renderPreRegTable() {
    if (!preRegTableBody) return;
    
    if (!allPreRegs || allPreRegs.length === 0) {
        preRegTableBody.innerHTML = `
            <tr>
                <td colspan="11" style="text-align: center; padding: 40px;">
                    <i class="fas fa-user-plus" style="font-size: 3rem; color: #ddd; margin-bottom: 15px;"></i>
                    <p style="color: var(--medium-gray);">Aucune pré-inscription trouvée</p>
                </td>
            </tr>
        `;
        return;
    }
    
    preRegTableBody.innerHTML = '';
    
    allPreRegs.forEach(reg => {
        const row = document.createElement('tr');
        if (reg.status === 'pending') row.style.background = 'rgba(255,214,51,0.08)';
        
        const created = reg.created_at ? new Date(reg.created_at).toLocaleDateString('fr-FR', {
            day: '2-digit', month: '2-digit', year: 'numeric'
        }) : 'N/A';
        
        const timer = reg.timer ? new Date(reg.timer).toLocaleDateString('fr-FR', {
            day: '2-digit', month: '2-digit', year: 'numeric'
        }) : 'Pas de date';
        
        let typeText = '';
        switch(reg.type) {
            case 'n': typeText = 'Type N (Naturalisation)'; break;
            case 'r': typeText = 'Type R (10 ans)'; break;
            case 'm': typeText = 'Type M (Pluriannuelle)'; break;
            default: typeText = reg.type;
        }
        
        let roleText = '';
        if (reg.role === 'user') roleText = 'Membre';
        else if (reg.role === 'stu') roleText = 'Élève';
        else roleText = reg.role;
        
        let statusText = '', statusClass = '';
        if (reg.status === 'pending') { statusText = 'En attente'; statusClass = 'badge-pending'; }
        else if (reg.status === 'validated') { statusText = 'Validé'; statusClass = 'badge-validated'; }
        else if (reg.status === 'rejected') { statusText = 'Rejeté'; statusClass = 'badge-rejected'; }
        else { statusText = reg.status; statusClass = ''; }
        
        const credit = reg.credit || 0;
        
        let paymentDisplay = '-';
        if (reg.payment_method) {
            const paymentMap = {
                'wechat': 'WeChat 微信',
                'alipay': 'Alipay 支付宝',
                'xiaohongshu': 'Xiaohongshu 小红书',
                'cb': 'CB 银行卡'
            };
            paymentDisplay = paymentMap[reg.payment_method] || reg.payment_method;
        }
        
        const orderNumber = reg.order_number || '-';
        
        // 判断是否可编辑（只有 pending 状态可编辑）
        const isEditable = reg.status === 'pending';
        
        row.innerHTML = `
            <td><strong>${escapeHtml(reg.name)}</strong></td>
            <td><span class="user-type">${typeText}</span></td>
            <td>${roleText}</td>
            <td>${created}</td>
            <td>${timer}</td>
            <td>${credit > 0 ? `📚 ${credit} h` : '—'}</td>
            <td style="font-size:0.8rem; max-width:100px; word-break:break-word;">${orderNumber}</td>
            <td style="font-size:0.8rem;">${paymentDisplay}</td>
            <td><span class="pre-reg-badge ${statusClass}">${statusText}</span></td>
            <td>
                <div style="display: flex; flex-wrap: wrap; gap: 4px;">
                    ${isEditable ? `
                        <button class="action-btn-edit-pre" data-id="${reg.id}"><i class="fas fa-pen"></i> Modifier</button>
                    ` : ''}
                    ${reg.status === 'pending' ? `
                        <button class="action-btn-validate" data-id="${reg.id}"><i class="fas fa-check"></i> Valider</button>
                        <button class="action-btn-reject" data-id="${reg.id}"><i class="fas fa-times"></i> Rejeter</button>
                    ` : ''}
                    <button class="action-btn-detail" data-id="${reg.id}"><i class="fas fa-eye"></i> Détail</button>
                </div>
            </td>
        `;
        preRegTableBody.appendChild(row);
    });
    
    // 事件绑定：编辑按钮
    document.querySelectorAll('.action-btn-edit-pre').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = parseInt(this.dataset.id);
            openEditPreRegModal(id);
        });
    });
    
    // 事件绑定：验证按钮
    document.querySelectorAll('.action-btn-validate').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = parseInt(this.dataset.id);
            validatePreRegistration(id);
        });
    });
    
    // 事件绑定：拒绝按钮
    document.querySelectorAll('.action-btn-reject').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = parseInt(this.dataset.id);
            rejectPreRegistration(id);
        });
    });
    
    // 事件绑定：详情按钮
    document.querySelectorAll('.action-btn-detail').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = parseInt(this.dataset.id);
            showPreRegistrationDetail(id);
        });
    });
}
function openEditPreRegModal(id) {
    const reg = allPreRegs.find(r => r.id === id);
    if (!reg) {
        showToast('Erreur', 'Pré-inscription non trouvée', 'error');
        return;
    }
    
    if (reg.status !== 'pending') {
        showToast('Impossible', 'Cette pré-inscription a déjà été traitée', 'warning');
        return;
    }
    
    document.getElementById('editPreRegId').value = reg.id;
    document.getElementById('editPreRegName').value = reg.name || '';
    document.getElementById('editPreRegEmail').value = reg.email || '';
    document.getElementById('editPreRegPassword').value = '';
    document.getElementById('editPreRegType').value = reg.type || 'n';
    document.getElementById('editPreRegRole').value = reg.role || '';
    document.getElementById('editPreRegCredit').value = reg.credit || 0;
    document.getElementById('editPreRegPrice').value = reg.estimated_price || 0;
    document.getElementById('editPreRegOrderNumber').value = reg.order_number || '';
    document.getElementById('editPreRegPaymentMethod').value = reg.payment_method || '';
    document.getElementById('editPreRegPhone').value = reg.phone || '';
    document.getElementById('editPreRegPack').value = reg.pack_hours ? `${reg.pack_hours}h` : '';
    document.getElementById('editPreRegAddress').value = reg.address || '';
    document.getElementById('editPreRegBirth').value = reg.birth_date || '';
    document.getElementById('editPreRegBirthPlace').value = reg.birth_place || '';
    
    if (reg.timer) {
        const timerDate = new Date(reg.timer);
        const localDate = new Date(timerDate.getTime() - (timerDate.getTimezoneOffset() * 60000))
            .toISOString().slice(0, 16);
        document.getElementById('editPreRegTimer').value = localDate;
    } else {
        document.getElementById('editPreRegTimer').value = '';
    }
    
    editPreRegModal.style.display = 'flex';
}
async function handleEditPreRegistration(e) {
    e.preventDefault();
    
    const id = parseInt(document.getElementById('editPreRegId').value);
    const name = document.getElementById('editPreRegName').value.trim();
    const email = document.getElementById('editPreRegEmail').value.trim();
    const password = document.getElementById('editPreRegPassword').value.trim();
    const type = document.getElementById('editPreRegType').value;
    const role = document.getElementById('editPreRegRole').value;
    const timer = document.getElementById('editPreRegTimer').value;
    const credit = parseInt(document.getElementById('editPreRegCredit').value) || 0;
    const price = parseInt(document.getElementById('editPreRegPrice').value) || 0;
    const orderNumber = document.getElementById('editPreRegOrderNumber').value.trim();
    const paymentMethod = document.getElementById('editPreRegPaymentMethod').value;
    const phone = document.getElementById('editPreRegPhone').value.trim();
    const pack = document.getElementById('editPreRegPack').value.trim();
    const address = document.getElementById('editPreRegAddress').value.trim();
    const birth = document.getElementById('editPreRegBirth').value;
    const birthPlace = document.getElementById('editPreRegBirthPlace').value.trim();
    
    if (!name || !type) {
        showToast('Veuillez remplir tous les champs obligatoires', 'error');
        return;
    }
    
    // 检查是否已被处理
    const reg = allPreRegs.find(r => r.id === id);
    if (!reg || reg.status !== 'pending') {
        showToast('Impossible', 'Cette pré-inscription a déjà été traitée', 'warning');
        closeModal(editPreRegModal);
        return;
    }
    
    const updateData = {
        name: name,
        email: email || null,
        type: type,
        role: role || null,
        credit: credit,
        estimated_price: price,
        order_number: orderNumber || null,
        payment_method: paymentMethod || null,
        phone: phone || null,
        address: address || null,
        birth_date: birth || null,
        birth_place: birthPlace || null,
        updated_at: new Date().toISOString()
    };
    
    // 提取 pack_hours
    if (pack) {
        const hoursMatch = pack.match(/\d+/);
        updateData.pack_hours = hoursMatch ? parseInt(hoursMatch[0]) : null;
    } else {
        updateData.pack_hours = null;
    }
    
    // 如果填写了密码，更新密码
    if (password) {
        updateData.password = password;
    }
    
    if (timer) {
        try {
            const date = new Date(timer);
            if (!isNaN(date.getTime())) updateData.timer = date.toISOString();
        } catch (error) { console.warn('日期格式错误'); }
    } else {
        updateData.timer = null;
    }
    
    try {
        const supabase = window.supabaseAuth.getSupabaseClient();
        
        const { error } = await supabase
            .from('pre_registrations')
            .update(updateData)
            .eq('id', id);
        
        if (error) throw error;
        
        closeModal(editPreRegModal);
        await loadPreRegistrations();
        showToast('✅ Pré-inscription modifiée avec succès', 'success');
        
    } catch (error) {
        console.error('❌ Erreur modification:', error);
        showToast('Erreur lors de la modification: ' + error.message, 'error');
    }
}
function updatePreRegCount() {
    const pending = allPreRegs ? allPreRegs.filter(r => r.status === 'pending').length : 0;
    if (preRegCountEl) preRegCountEl.textContent = pending;
    if (preRegCountEl2) preRegCountEl2.textContent = pending;
}

function getTypeLabel(type) {
    const map = { 
        'n': 'Type N (Naturalisation / 入籍)', 
        'r': 'Type R (Carte 10 ans / 十年居留)', 
        'm': 'Type M (Pluriannuelle / 多年居留)' 
    };
    return map[type] || type;
}

function getRoleLabel(role) {
    const map = { 'user': 'Membre / 会员', 'stu': 'Élève / 学员' };
    return map[role] || role;
}

function showPreRegistrationDetail(id) {
    const reg = allPreRegs.find(r => r.id === id);
    if (!reg) {
        showToast('Erreur', 'Pré-inscription non trouvée', 'error');
        return;
    }
    
    document.getElementById('dName').textContent = reg.name || '-';
    document.getElementById('dType').textContent = getTypeLabel(reg.type) || '-';
    document.getElementById('dRole').textContent = getRoleLabel(reg.role) || '-';
    document.getElementById('dCreated').textContent = reg.created_at ? new Date(reg.created_at).toLocaleString('fr-FR') : '-';
    document.getElementById('dTimer').textContent = reg.timer ? new Date(reg.timer).toLocaleString('fr-FR') : 'Pas de date';
    document.getElementById('dCredit').textContent = reg.credit || '0';
    document.getElementById('dPrice').textContent = reg.estimated_price ? reg.estimated_price + ' €' : '-';
    
    // 订单编号
    document.getElementById('dOrderNumber').textContent = reg.order_number || '-';
    
    // 付款方式
    let paymentDisplay = '-';
    if (reg.payment_method) {
        const paymentMap = {
            'wechat': 'WeChat 微信支付',
            'alipay': 'Alipay 支付宝',
            'xiaohongshu': 'Xiaohongshu 小红书',
            'cb': 'CB 银行卡'
        };
        paymentDisplay = paymentMap[reg.payment_method] || reg.payment_method;
    }
    document.getElementById('dPaymentMethod').textContent = paymentDisplay;
    
    let statusText = '';
    if (reg.status === 'pending') statusText = 'En attente / 等待中';
    else if (reg.status === 'validated') statusText = 'Validé / 已通过';
    else if (reg.status === 'rejected') statusText = 'Rejeté / 已拒绝';
    else statusText = reg.status;
    document.getElementById('dStatus').textContent = statusText;
    
    document.getElementById('dEmail').textContent = reg.email || '-';
    document.getElementById('dBirth').textContent = reg.birth_date || '-';
    document.getElementById('dBirthPlace').textContent = reg.birth_place || '-';
    document.getElementById('dAddress').textContent = reg.address || '-';
    document.getElementById('dPhone').textContent = reg.phone || '-';
    
    let packInfo = '';
    if (reg.pack_hours) {
        packInfo = `${reg.pack_hours} h`;
        if (reg.pack_price) packInfo += ` (${reg.pack_price} €)`;
    } else {
        packInfo = '-';
    }
    document.getElementById('dPack').textContent = packInfo;
    
    detailModal.style.display = 'flex';
}

// ==============================
// VALIDATION PRÉ-INSCRIPTION AVEC EMAIL
// ==============================
async function validatePreRegistration(id) {
    const reg = allPreRegs.find(r => r.id === id);
    if (!reg) {
        showToast('Erreur', 'Pré-inscription non trouvée', 'error');
        return;
    }
    
    if (reg.status !== 'pending') {
        showToast('Déjà traité', 'Cette pré-inscription a déjà été traitée', 'warning');
        return;
    }
    
    if (!confirm(`Valider la pré-inscription de ${reg.name} ?\n\nL'utilisateur sera ajouté à la base students.`)) {
        return;
    }
    
    try {
        const supabase = window.supabaseAuth.getSupabaseClient();
        
        // 1. Copier dans students (包括邮箱)
        const studentData = {
            name: reg.name,
            password: reg.password,
            type: reg.type,
            role: reg.role,
            email: reg.email || null,
            created_at: reg.created_at || new Date().toISOString(),
            timer: reg.timer || null,
            credit: reg.credit || 0
        };
        
        console.log('📤 Insertion dans students:', studentData);
        
        const { error: insertError } = await supabase
            .from('students')
            .insert([studentData]);
        
        if (insertError) {
            console.error('❌ Erreur insertion student:', insertError);
            if (insertError.code === '23505') {
                showToast('Erreur', 'Ce nom d\'utilisateur existe déjà dans la base', 'error');
                return;
            }
            throw insertError;
        }
        
        console.log('✅ Utilisateur ajouté à students avec email:', reg.email);
        
        // 2. Mettre à jour le statut
        const { error: updateError } = await supabase
            .from('pre_registrations')
            .update({
                status: 'validated',
                validated_at: new Date().toISOString(),
                validated_by: currentAdmin?.name || 'admin'
            })
            .eq('id', id);
        
        if (updateError) {
            console.error('❌ Erreur mise à jour statut:', updateError);
            throw updateError;
        }
        
        console.log('✅ Statut pré-inscription mis à jour');
        
        // 3. Envoyer l'email d'activation
        if (reg.email) {
            try {
                const emailResult = await sendActivationEmail(
                    reg.email,
                    reg.name,
                    reg.type,
                    reg.role,
                    reg.password
                );
                
                if (emailResult.success) {
                    console.log('✅ Email d\'activation envoyé à', reg.email);
                    showToast(
                        '📧 Email envoyé',
                        `Un email d'activation a été envoyé à ${reg.email}`,
                        'success'
                    );
                } else {
                    console.warn('⚠️ Échec envoi email:', emailResult.error);
                    showToast(
                        '⚠️ Email non envoyé',
                        `L'utilisateur a été validé mais l'email n'a pas pu être envoyé.`,
                        'warning'
                    );
                }
            } catch (emailError) {
                console.warn('⚠️ Erreur lors de l\'envoi de l\'email:', emailError);
                showToast(
                    '⚠️ Email non envoyé',
                    'L\'utilisateur a été validé mais l\'email n\'a pas pu être envoyé.',
                    'warning'
                );
            }
        } else {
            console.log('ℹ️ Pas d\'email pour cet utilisateur');
            showToast(
                'ℹ️ Pas d\'email',
                `L'utilisateur ${reg.name} a été validé mais n'a pas d'adresse email.`,
                'info'
            );
        }
        
        // 4. Recharger les données
        await loadUsers();
        await loadPreRegistrations();
        
        showToast('✅ Pré-inscription validée', `L'utilisateur ${reg.name} a été ajouté à la base`, 'success');
        
    } catch (error) {
        console.error('❌ Erreur validation:', error);
        showToast('Erreur', 'Une erreur est survenue lors de la validation: ' + error.message, 'error');
    }
}
async function rejectPreRegistration(id) {
    const reg = allPreRegs.find(r => r.id === id);
    if (!reg) {
        showToast('Erreur', 'Pré-inscription non trouvée', 'error');
        return;
    }
    
    if (reg.status !== 'pending') {
        showToast('Déjà traité', 'Cette pré-inscription a déjà été traitée', 'warning');
        return;
    }
    
    if (!confirm(`Êtes-vous sûr de vouloir rejeter la pré-inscription de ${reg.name} ?`)) {
        return;
    }
    
    try {
        const supabase = window.supabaseAuth.getSupabaseClient();
        
        const { error } = await supabase
            .from('pre_registrations')
            .update({
                status: 'rejected',
                validated_at: new Date().toISOString(),
                validated_by: currentAdmin?.name || 'admin'
            })
            .eq('id', id);
        
        if (error) throw error;
        
        await loadPreRegistrations();
        showToast('❌ Pré-inscription rejetée', `La demande de ${reg.name} a été rejetée`, 'warning');
        
    } catch (error) {
        console.error('Erreur rejet:', error);
        showToast('Erreur', 'Une erreur est survenue lors du rejet', 'error');
    }
}

// ==============================
// 辅助函数
// ==============================
function showLoading(show) {
    if (tableLoading) {
        tableLoading.style.display = show ? 'block' : 'none';
    }
}

function closeModal(modal) {
    if (modal) {
        modal.style.display = 'none';
    }
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