// ============================================================
// DICTIONNAIRE BILINGUE
// ============================================================
const dict = {
    fr: {
        mainTitle: "IA & Computer Science",
        mainSubtitle: "Association Mille Voiles / 千帆协会 - Former les talents du numérique",
        navBrand: "Mille Voiles",
        navHome: "Accueil",
        navAccueil: "Accueil",
        navProgrammes: "Programmes",
        navProjets: "Projets",
        navContact: "Contact",
        navLoginText: "Connexion",
        profileMenuItem: "Mon profil",
        logoutMenuItem: "Déconnexion",
        heroTag: "💻 Tech & Innovation",
        heroTitle: "L'avenir <span class=\"highlight\">se code</span> aujourd'hui",
        heroDesc: "Des ateliers de programmation, d'intelligence artificielle et de data science pour tous les niveaux. Devenez acteur de la transformation numérique.",
        heroBtn1: "Découvrir les programmes",
        heroBtn2: "Voir les projets",
        heroBadge: "Python · IA · Data",
        stat1Label: "Étudiants formés",
        stat2Label: "Projets réalisés",
        stat3Label: "Satisfaction",
        stat4Label: "Ateliers disponibles",
        progTag: "NOS PROGRAMMES",
        progTitle: "Formez-vous aux technologies de demain",
        progSub: "Des ateliers pratiques pour tous les niveaux",
        prog1Title: "Python - Initiation",
        prog1Desc: "Apprenez les bases de la programmation avec Python. Variables, boucles, fonctions et premiers algorithmes.",
        prog1Btn: "S'inscrire",
        prog2Title: "IA & Machine Learning",
        prog2Desc: "Initiez-vous à l'intelligence artificielle : réseaux de neurones, NLP, vision par ordinateur et modèles génératifs.",
        prog2Btn: "S'inscrire",
        prog3Title: "Data Science",
        prog3Desc: "Analyse de données, visualisation, pandas, numpy et création de modèles prédictifs avec Python.",
        prog3Btn: "S'inscrire",
        prog4Title: "Web Dev & Cloud",
        prog4Desc: "Développement web full-stack : HTML, CSS, JavaScript, React et déploiement sur le cloud.",
        prog4Btn: "S'inscrire",
        projetTag: "PROJETS RÉALISÉS",
        projetTitle: "Des projets concrets",
        projetSub: "Découvrez ce que nos étudiants ont créé",
        projet1Title: "Chatbot IA",
        projet1Desc: "Assistant conversationnel basé sur GPT pour répondre aux questions des nouveaux arrivants en France.",
        projet2Title: "Dashboard Data",
        projet2Desc: "Tableau de bord interactif visualisant les données de l'association : membres, cours, satisfaction.",
        projet3Title: "Appli PWA",
        projet3Desc: "Application web progressive pour l'apprentissage du français, accessible hors ligne sur mobile.",
        toolsTag: "OUTILS",
        toolsTitle: "Les technologies que nous utilisons",
        toolsDesc: "Des outils modernes pour une formation pratique et professionnelle.",
        footerAbout: "Association d'intégration et de formation",
        footerAddr: "Paris, France",
        footerYear: "Fondée en 2025",
        footerContactTitle: "Contact",
        footerNavTitle: "Navigation",
        fNav1: "Accueil",
        fNav2: "Programmes",
        fNav3: "Projets",
        fNav4: "Contact",
        footerCopy: "© 2025-2026 Mille Voiles · Tous droits réservés",
        footerCopyZh: "千帆协会 版权所有",
        loginModalTitle: "Connexion",
        nameLabel: "Nom d'utilisateur",
        passwordLabel: "Mot de passe",
        loginBtnText: "Se connecter",
        loginHelp: "Contactez l'association si vous n'avez pas de compte",
        errorMessage: "Nom ou mot de passe incorrect",
        profileModalTitle: "Mon Profil",
        infoSectionTitle: "Informations du compte",
        typeLabel: "Type",
        expiryLabel: "Accès jusqu'au",
        usernameLabel: "Nom",
        editSectionTitle: "Modifier le mot de passe",
        currentPasswordLabel: "Mot de passe actuel",
        newPasswordLabel: "Nouveau mot de passe",
        confirmPasswordLabel: "Confirmer",
        updateBtnText: "Mettre à jour",
        cancelBtnText: "Annuler",
        devTitle: "En développement",
        devMsg: "Cette section est en cours de développement. Revenez bientôt !",
        devBtn: "Fermer",
        loginRequired: "Veuillez vous connecter pour accéder à cette section"
    },
    zh: {
        mainTitle: "人工智能与计算机科学",
        mainSubtitle: "千帆协会 - 培养数字技术人才",
        navBrand: "千帆协会",
        navHome: "首页",
        navAccueil: "首页",
        navProgrammes: "课程",
        navProjets: "项目",
        navContact: "联系我们",
        navLoginText: "登录",
        profileMenuItem: "我的账户",
        logoutMenuItem: "退出登录",
        heroTag: "💻 科技与创新",
        heroTitle: "未来 <span class=\"highlight\">从代码</span> 开始",
        heroDesc: "面向所有水平的编程、人工智能和数据科学工作坊。成为数字化转型的参与者。",
        heroBtn1: "了解课程",
        heroBtn2: "查看项目",
        heroBadge: "Python · 人工智能 · 数据",
        stat1Label: "培训学员",
        stat2Label: "完成项目",
        stat3Label: "满意度",
        stat4Label: "可用工作坊",
        progTag: "我们的课程",
        progTitle: "学习未来科技",
        progSub: "面向所有水平的实践工作坊",
        prog1Title: "Python - 入门",
        prog1Desc: "学习Python编程基础：变量、循环、函数和初级算法。",
        prog1Btn: "报名",
        prog2Title: "人工智能与机器学习",
        prog2Desc: "人工智能入门：神经网络、NLP、计算机视觉和生成模型。",
        prog2Btn: "报名",
        prog3Title: "数据科学",
        prog3Desc: "数据分析、可视化、pandas、numpy和用Python创建预测模型。",
        prog3Btn: "报名",
        prog4Title: "Web开发与云",
        prog4Desc: "全栈Web开发：HTML、CSS、JavaScript、React和云端部署。",
        prog4Btn: "报名",
        projetTag: "已完成项目",
        projetTitle: "具体项目成果",
        projetSub: "看看我们的学生创造了什么",
        projet1Title: "AI聊天机器人",
        projet1Desc: "基于GPT的对话助手，回答新到法国人士的问题。",
        projet2Title: "数据仪表盘",
        projet2Desc: "交互式仪表盘，可视化协会数据：会员、课程、满意度。",
        projet3Title: "PWA应用",
        projet3Desc: "用于法语学习的渐进式Web应用，可在手机上离线访问。",
        toolsTag: "工具",
        toolsTitle: "我们使用的技术",
        toolsDesc: "用于实践和专业培训的现代工具。",
        footerAbout: "融入与培训协会",
        footerAddr: "法国巴黎",
        footerYear: "成立于2025年",
        footerContactTitle: "联系我们",
        footerNavTitle: "导航",
        fNav1: "首页",
        fNav2: "课程",
        fNav3: "项目",
        fNav4: "联系我们",
        footerCopy: "© 2025-2026 千帆协会 · 版权所有",
        footerCopyZh: "Association Mille Voiles · Tous droits réservés",
        loginModalTitle: "登录",
        nameLabel: "用户名",
        passwordLabel: "密码",
        loginBtnText: "登录",
        loginHelp: "如果没有账户请联系协会",
        errorMessage: "用户名或密码错误",
        profileModalTitle: "我的账户",
        infoSectionTitle: "账户信息",
        typeLabel: "类型",
        expiryLabel: "有效期至",
        usernameLabel: "姓名",
        editSectionTitle: "修改密码",
        currentPasswordLabel: "当前密码",
        newPasswordLabel: "新密码",
        confirmPasswordLabel: "确认密码",
        updateBtnText: "更新",
        cancelBtnText: "取消",
        devTitle: "开发中",
        devMsg: "该板块正在开发中，敬请期待！",
        devBtn: "关闭",
        loginRequired: "请登录后访问此板块"
    }
};

let currentLang = 'fr';
let currentUser = null;

// ============================================================
// 语言切换
// ============================================================
function switchLanguage(lang) {
    currentLang = lang;
    const data = dict[lang];

    document.querySelectorAll('[id]').forEach(el => {
        const key = el.id;
        if (data[key] !== undefined) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = data[key];
            } else {
                el.innerHTML = data[key];
            }
        }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    if (lang === 'fr') {
        document.getElementById('langFr').classList.add('active');
    } else {
        document.getElementById('langZh').classList.add('active');
    }
}

// ============================================================
// Toast
// ============================================================
function showToast(message, type) {
    type = type || 'info';
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast ' + type;
    const icons = { success: 'fa-check-circle', error: 'fa-exclamation-circle', info: 'fa-info-circle', warning: 'fa-exclamation-triangle' };
    toast.innerHTML = '<i class="fas ' + (icons[type] || icons.info) + '"></i> ' + message;
    container.appendChild(toast);
    setTimeout(function() {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(40px)';
        setTimeout(function() { if (toast.parentNode) toast.remove(); }, 300);
    }, 3000);
}

// ============================================================
// 认证功能
// ============================================================
function getCurrentUser() {
    if (currentUser) return currentUser;
    var stored = localStorage.getItem('french_user');
    if (stored) {
        try {
            currentUser = JSON.parse(stored);
            return currentUser;
        } catch (e) { return null; }
    }
    return null;
}

function checkAuth() {
    var user = getCurrentUser();
    if (user) {
        updateUIForUser();
        return true;
    }
    return false;
}

function updateUIForUser() {
    var user = getCurrentUser();
    var userInfo = document.getElementById('userInfo');
    var navLogin = document.getElementById('navLogin');
    var welcomeMsg = document.getElementById('welcomeMessage');

    if (user) {
        userInfo.style.display = 'flex';
        navLogin.style.display = 'none';
        welcomeMsg.textContent = user.name || 'Utilisateur';

        var profileType = document.getElementById('profileType');
        if (profileType) {
            profileType.value = user.role === 'admin' ? 'Administrateur' :
                user.role === 'teacher' ? 'Intervenant' : 'Élève';
        }
    } else {
        userInfo.style.display = 'none';
        navLogin.style.display = 'inline';
    }
}

function openLoginModal() {
    document.getElementById('loginModal').classList.add('show');
    document.getElementById('loginError').style.display = 'none';
}

function closeLoginModal() {
    document.getElementById('loginModal').classList.remove('show');
}

async function handleLogin(event) {
    event.preventDefault();
    var name = document.getElementById('loginName').value.trim();
    var password = document.getElementById('loginPassword').value.trim();
    var errorEl = document.getElementById('loginError');

    var user = await window.supabaseAuth.validateFrenchUser(name, password);

    if (user) {
        currentUser = {
            userId: user.id,
            name: user.name,
            role: user.role || 'stu',
            type: user.type || 'n',
            expiry: user.timer,
            level: user.level || 'A1'
        };
        localStorage.setItem('french_user', JSON.stringify(currentUser));
        closeLoginModal();
        updateUIForUser();
        showToast('Bienvenue ' + user.name + ' !', 'success');
    } else {
        errorEl.style.display = 'block';
        errorEl.querySelector('span').textContent = dict[currentLang].errorMessage;
    }
}

function logout() {
    localStorage.removeItem('french_user');
    currentUser = null;
    document.getElementById('userInfo').style.display = 'none';
    document.getElementById('navLogin').style.display = 'inline';
    document.getElementById('userDropdown').classList.remove('show');
    showToast('Déconnecté', 'info');
}

function toggleUserMenu() {
    document.getElementById('userDropdown').classList.toggle('show');
}

// ============================================================
// Profile Modal
// ============================================================
function showProfileModal() {
    document.getElementById('userDropdown').classList.remove('show');
    var modal = document.getElementById('profileModal');
    modal.classList.add('show');

    if (currentUser) {
        document.getElementById('profileType').value = currentUser.role === 'admin' ? 'Administrateur' :
            currentUser.role === 'teacher' ? 'Intervenant' : 'Élève';
        document.getElementById('profileExpiry').value = currentUser.expiry ? new Date(currentUser.expiry).toLocaleDateString('fr-FR') : 'Illimité';
        document.getElementById('profileUsername').value = currentUser.name || '';
    }

    document.getElementById('profileError').style.display = 'none';
    document.getElementById('profileSuccess').style.display = 'none';
}

function closeProfileModal() {
    document.getElementById('profileModal').classList.remove('show');
}

function updateProfile(event) {
    event.preventDefault();
    var newPwd = document.getElementById('newPassword').value;
    var confirmPwd = document.getElementById('confirmPassword').value;
    var errorEl = document.getElementById('profileError');
    var successEl = document.getElementById('profileSuccess');

    errorEl.style.display = 'none';
    successEl.style.display = 'none';

    if (newPwd.length < 6) {
        errorEl.textContent = 'Le mot de passe doit contenir au moins 6 caractères.';
        errorEl.style.display = 'block';
        return;
    }

    if (newPwd !== confirmPwd) {
        errorEl.textContent = 'Les mots de passe ne correspondent pas.';
        errorEl.style.display = 'block';
        return;
    }

    successEl.textContent = 'Mot de passe mis à jour avec succès !';
    successEl.style.display = 'block';
    document.getElementById('currentPassword').value = '';
    document.getElementById('newPassword').value = '';
    document.getElementById('confirmPassword').value = '';
}

// ============================================================
// 程序点击处理 - 开发中
// ============================================================
function handleProgramClick(event) {
    event.preventDefault();
    var user = getCurrentUser();

    if (!user) {
        showToast(dict[currentLang].loginRequired, 'warning');
        openLoginModal();
        return;
    }

    showToast(dict[currentLang].devMsg, 'info');
}

// ============================================================
// 关闭模态框（点击外部）
// ============================================================
document.querySelectorAll('.modal').forEach(function(modal) {
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('show');
        }
    });
});

// ============================================================
// 关闭用户下拉菜单（点击外部）
// ============================================================
document.addEventListener('click', function(e) {
    var userInfo = document.querySelector('.user-info');
    var dropdown = document.getElementById('userDropdown');
    if (userInfo && !userInfo.contains(e.target)) {
        dropdown.classList.remove('show');
    }
});

// ============================================================
// 导航高亮
// ============================================================
var sections = document.querySelectorAll('section[id]');
var navLinks = document.querySelectorAll('.nav-links a:not([href*="index"])');

window.addEventListener('scroll', function() {
    var current = '';
    var navHeight = document.querySelector('.main-nav').offsetHeight;
    var langHeight = document.querySelector('.language-toggle').offsetHeight;
    var offset = navHeight + langHeight + 50;

    sections.forEach(function(section) {
        var sectionTop = section.offsetTop - offset;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(function(link) {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// ============================================================
// 初始化
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    switchLanguage('fr');
    checkAuth();
});

// 暴露函数给 HTML
window.switchLanguage = switchLanguage;
window.openLoginModal = openLoginModal;
window.closeLoginModal = closeLoginModal;
window.handleLogin = handleLogin;
window.logout = logout;
window.toggleUserMenu = toggleUserMenu;
window.showProfileModal = showProfileModal;
window.closeProfileModal = closeProfileModal;
window.updateProfile = updateProfile;
window.showToast = showToast;
window.handleProgramClick = handleProgramClick;