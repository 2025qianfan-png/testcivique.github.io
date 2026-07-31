// ============================================================
// DICTIONNAIRE BILINGUE
// ============================================================
const dict = {
    fr: {
        mainTitle: "Français · FLE",
        mainSubtitle: "Association Mille Voiles / 千帆协会 - Formation en français langue étrangère",
        navBrand: "Mille Voiles",
        navHome: "Accueil",
        navExams: "Examens",
        navCourses: "Cours",
        navResources: "Ressources",
        navContact: "Contact",
        navLoginText: "Connexion",
        profileMenuItem: "Mon profil",
        logoutMenuItem: "Déconnexion",
        heroTag: "🇫🇷 Français Langue Étrangère",
        heroTitle: "Maîtrisez le français <br><span class=\"highlight\">pour réussir en France</span>",
        heroDesc: "Des cours adaptés à tous les niveaux, une préparation aux examens officiels et un accompagnement personnalisé pour votre intégration en France.",
        heroBtn1: "Découvrir les examens",
        heroBtn2: "Nos cours",
        heroBadge: "DELF · DALF · TCF · TCF IRN",
        examsTag: "EXAMENS OFFICIELS",
        examsTitle: "Les certifications en français",
        examsSubtitle: "Choisissez l'examen qui correspond à vos objectifs et à votre niveau",
        exam1Title: "DELF",
        exam1Level: "A1 · A2 · B1 · B2",
        exam1Desc: "Diplôme d'Études en Langue Française. Reconnaissance officielle du ministère français de l'Éducation. Valable à vie.",
        exam1Duration: "2h30",
        exam1Price: "~100-200€",
        exam1Valid: "Valable à vie",
        exam1Free: "Accès libre",
        exam1Btn: "En savoir plus",
        exam2Title: "DALF",
        exam2Level: "C1 · C2",
        exam2Desc: "Diplôme Approfondi de Langue Française. Niveau avancé pour les études supérieures et les postes à haute responsabilité.",
        exam2Duration: "3h-4h",
        exam2Price: "~200-300€",
        exam2Valid: "Valable à vie",
        exam2Locked: "🔒 Accès réservé",
        exam2Btn: "Accès réservé",
        exam3Title: "TCF",
        exam3Level: "A1 · C2",
        exam3Desc: "Test de Connaissance du Français. Résultats rapides, reconnaissance par l'Office français de l'immigration et de l'intégration.",
        exam3Duration: "1h30",
        exam3Price: "~80-150€",
        exam3Valid: "Valable 2 ans",
        exam3Free: "Accès libre",
        exam3Btn: "En savoir plus",
        exam4Title: "TCF IRN",
        exam4Level: "A1 · C2",
        exam4Desc: "Test de Connaissance du Français - Intégration, Résidence et Nationalité. Version spécifique pour les démarches d'intégration et de naturalisation.",
        exam4Duration: "1h30",
        exam4Price: "~120-200€",
        exam4Valid: "Valable 2 ans",
        exam4Free: "Accès libre",
        exam4Btn: "En savoir plus",
        coursesTag: "NOS FORMATIONS",
        coursesTitle: "Des cours adaptés à tous",
        coursesSubtitle: "Du débutant à l'expert, trouvez la formation qui vous convient",
        course1Title: "Débutant",
        course1Desc: "Acquérir les bases de la communication en français : vocabulaire quotidien, expressions essentielles et grammaire fondamentale.",
        course1Duration: "30 heures",
        course1Group: "6-12 pers.",
        course2Title: "Intermédiaire",
        course2Desc: "Maîtriser la communication courante, comprendre des sujets complexes et s'exprimer avec aisance au travail et dans la vie quotidienne.",
        course2Duration: "40 heures",
        course2Group: "6-10 pers.",
        course3Title: "Avancé",
        course3Desc: "Perfectionner votre français pour des études supérieures en France ou des postes à responsabilité nécessitant une maîtrise approfondie.",
        course3Duration: "50 heures",
        course3Group: "4-8 pers.",
        course4Title: "Français Pro",
        course4Desc: "Français des affaires, rédaction professionnelle, prise de parole en réunion et communication en milieu professionnel français.",
        course4Duration: "35 heures",
        course4Group: "4-8 pers.",
        resourcesTag: "RESSOURCES",
        resourcesTitle: "Outils pour apprendre",
        resourcesSubtitle: "Des ressources gratuites et payantes pour progresser en français",
        res1Title: "Podcasts & Audio",
        res1Desc: "Des exercices d'écoute pour améliorer votre compréhension orale.",
        res1Btn: "Découvrir",
        res2Title: "Exercices interactifs",
        res2Desc: "Des quiz et exercices pour renforcer votre grammaire et votre vocabulaire.",
        res2Btn: "Découvrir",
        res3Title: "Vidéos pédagogiques",
        res3Desc: "Des leçons animées pour apprendre le français de manière visuelle.",
        res3Btn: "Découvrir",
        res4Title: "Conversation",
        res4Desc: "Ateliers de conversation en ligne avec des locuteurs natifs.",
        res4Btn: "Découvrir",
        footerAbout: "Association d'intégration et de formation",
        footerAddr: "Paris, France",
        footerYear: "Fondée en 2025",
        footerContactTitle: "Contact",
        footerNavTitle: "Navigation",
        fNav1: "Accueil",
        fNav2: "Examens",
        fNav3: "Cours",
        fNav4: "Ressources",
        footerCopy: "© 2025-2026 Mille Voiles · Tous droits réservés",
        footerCopyZh: "千帆协会 版权所有",
        loginModalTitle: "Connexion Élève",
        nameLabel: "Nom d'utilisateur",
        passwordLabel: "Mot de passe",
        loginBtnText: "Se connecter",
        loginHelp: "Contactez l'association si vous n'avez pas de compte",
        errorMessage: "Nom d'utilisateur ou mot de passe incorrect",
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
        loginRequired: "Veuillez vous connecter pour accéder à cette section",
        clickToDiscover: "Cliquez pour découvrir"
    },
    zh: {
        mainTitle: "法语 · FLE",
        mainSubtitle: "千帆协会 - 对外法语培训",
        navBrand: "千帆协会",
        navHome: "首页",
        navExams: "法语考试",
        navCourses: "课程",
        navResources: "学习资源",
        navContact: "联系我们",
        navLoginText: "登录",
        profileMenuItem: "我的账户",
        logoutMenuItem: "退出登录",
        heroTag: "🇫🇷 对外法语",
        heroTitle: "掌握法语 <br><span class=\"highlight\">在法国取得成功</span>",
        heroDesc: "适合所有水平的课程，备考官方考试，为您的融入提供个性化支持。",
        heroBtn1: "了解考试",
        heroBtn2: "我们的课程",
        heroBadge: "DELF · DALF · TCF · TCF IRN",
        examsTag: "官方考试",
        examsTitle: "法语认证考试",
        examsSubtitle: "选择符合您目标和水平的考试",
        exam1Title: "DELF",
        exam1Level: "A1 · A2 · B1 · B2",
        exam1Desc: "法语学习文凭。法国教育部官方认可。终身有效。",
        exam1Duration: "2小时30分",
        exam1Price: "~100-200€",
        exam1Valid: "终身有效",
        exam1Free: "免费访问",
        exam1Btn: "了解更多",
        exam2Title: "DALF",
        exam2Level: "C1 · C2",
        exam2Desc: "高级法语文凭。高级水平，适用于高等教育和高责任职位。",
        exam2Duration: "3-4小时",
        exam2Price: "~200-300€",
        exam2Valid: "终身有效",
        exam2Locked: "🔒 受限访问",
        exam2Btn: "受限访问",
        exam3Title: "TCF",
        exam3Level: "A1 · C2",
        exam3Desc: "法语知识测试。快速出结果，法国移民与融入局认可。",
        exam3Duration: "1小时30分",
        exam3Price: "~80-150€",
        exam3Valid: "有效期2年",
        exam3Free: "免费访问",
        exam3Btn: "了解更多",
        exam4Title: "TCF IRN",
        exam4Level: "A1 · C2",
        exam4Desc: "法语知识测试 - 融入、居留和国籍版。专门用于融入和入籍程序。",
        exam4Duration: "1小时30分",
        exam4Price: "~120-200€",
        exam4Valid: "有效期2年",
        exam4Free: "免费访问",
        exam4Btn: "了解更多",
        coursesTag: "我们的课程",
        coursesTitle: "适合所有人的课程",
        coursesSubtitle: "从初学者到专家，找到适合您的培训",
        course1Title: "初级",
        course1Desc: "掌握法语交流基础：日常词汇、基本表达和基础语法。",
        course1Duration: "30小时",
        course1Group: "6-12人",
        course2Title: "中级",
        course2Desc: "掌握日常交流，理解复杂话题，在工作与生活中自如表达。",
        course2Duration: "40小时",
        course2Group: "6-10人",
        course3Title: "高级",
        course3Desc: "完善法语能力，为法国高等教育或需要深入掌握的责任岗位做准备。",
        course3Duration: "50小时",
        course3Group: "4-8人",
        course4Title: "商务法语",
        course4Desc: "商务法语、专业写作、会议发言及法国职场沟通。",
        course4Duration: "35小时",
        course4Group: "4-8人",
        resourcesTag: "学习资源",
        resourcesTitle: "学习工具",
        resourcesSubtitle: "免费和付费资源助您提升法语",
        res1Title: "播客与音频",
        res1Desc: "听力练习提升您的法语理解能力。",
        res1Btn: "了解",
        res2Title: "互动练习",
        res2Desc: "测验和练习巩固您的语法和词汇。",
        res2Btn: "了解",
        res3Title: "教学视频",
        res3Desc: "动画课程让您通过视觉学习法语。",
        res3Btn: "了解",
        res4Title: "口语会话",
        res4Desc: "与母语者在线会话工作坊。",
        res4Btn: "了解",
        footerAbout: "融入与培训协会",
        footerAddr: "法国巴黎",
        footerYear: "成立于2025年",
        footerContactTitle: "联系我们",
        footerNavTitle: "导航",
        fNav1: "首页",
        fNav2: "法语考试",
        fNav3: "课程",
        fNav4: "学习资源",
        footerCopy: "© 2025-2026 千帆协会 · 版权所有",
        footerCopyZh: "Association Mille Voiles · Tous droits réservés",
        loginModalTitle: "学员登录",
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
        loginRequired: "请登录后访问此板块",
        clickToDiscover: "点击探索"
    }
};

// ============================================================
// 全局变量
// ============================================================
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
// Toast 通知
// ============================================================
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    const icons = { success: 'fa-check-circle', error: 'fa-exclamation-circle', info: 'fa-info-circle', warning: 'fa-exclamation-triangle' };
    toast.innerHTML = `<i class="fas ${icons[type] || icons.info}"></i> ${message}`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(40px)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ============================================================
// 认证功能
// ============================================================
function getCurrentUser() {
    if (currentUser) return currentUser;
    const stored = localStorage.getItem('french_user');
    if (stored) {
        try {
            currentUser = JSON.parse(stored);
            return currentUser;
        } catch (e) { return null; }
    }
    return null;
}

function checkAuth() {
    const user = getCurrentUser();
    if (user) {
        updateUIForUser();
        return true;
    }
    return false;
}
// ============================================================
// 更新UI - 根据用户角色
// ============================================================
function updateUIForUser() {
    const user = getCurrentUser();
    const userInfo = document.getElementById('userInfo');
    const navLogin = document.getElementById('navLogin');
    const welcomeMsg = document.getElementById('welcomeMessage');

    if (user) {
        userInfo.style.display = 'flex';
        navLogin.style.display = 'none';
        welcomeMsg.textContent = user.name || 'Élève';

        const profileType = document.getElementById('profileType');
        if (profileType) {
            profileType.value = user.role === 'admin' ? 'Administrateur' :
                user.role === 'teacher' ? 'Intervenant' : 'Élève';
        }

        // 角色菜单 - 根据角色显示不同入口
        const roleMenu = document.getElementById('roleBasedMenu');
        if (user.role === 'admin') {
            // 管理员 → 管理后台
            const tokenData = {
                userId: user.userId,
                name: user.name,
                role: user.role,
                type: user.type || 'n',
                expiry: user.expiry
            };
            const token = btoa(encodeURIComponent(JSON.stringify(tokenData)));
            roleMenu.innerHTML = `<a href="french-admin.html?token=${token}"><i class="fas fa-cog"></i> Administration</a>`;
        } else if (user.role === 'teacher') {
            // 老师 → 老师界面
            const tokenData = {
                userId: user.userId,
                name: user.name,
                role: user.role,
                type: user.type || 'n',
                expiry: user.expiry
            };
            const token = btoa(encodeURIComponent(JSON.stringify(tokenData)));
            roleMenu.innerHTML = `<a href="french-teacher.html?token=${token}"><i class="fas fa-chalkboard-user"></i> Espace intervenant</a>`;
        } else if (user.role === 'stu') {
            // 学生 → 学生界面
            const tokenData = {
                userId: user.userId,
                name: user.name,
                role: user.role,
                type: user.type || 'n',
                expiry: user.expiry
            };
            const token = btoa(encodeURIComponent(JSON.stringify(tokenData)));
            roleMenu.innerHTML = `<a href="french-student.html?token=${token}"><i class="fas fa-user-graduate"></i> Espace étudiant</a>`;
        } else {
            // 普通用户
            roleMenu.innerHTML = `<a href="#" onclick="showToast('Accès réservé aux membres', 'warning')"><i class="fas fa-info-circle"></i> Devenir membre</a>`;
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
    const name = document.getElementById('loginName').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
    const errorEl = document.getElementById('loginError');

    const user = await window.supabaseAuth.validateFrenchUser(name, password);

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
        showToast('Connexion réussie !', 'success');
        renderAllSections();
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
    renderAllSections();
}

function toggleUserMenu() {
    document.getElementById('userDropdown').classList.toggle('show');
}

// ============================================================
// Profile Modal
// ============================================================
function showProfileModal() {
    document.getElementById('userDropdown').classList.remove('show');
    const modal = document.getElementById('profileModal');
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
    const newPwd = document.getElementById('newPassword').value;
    const confirmPwd = document.getElementById('confirmPassword').value;
    const errorEl = document.getElementById('profileError');
    const successEl = document.getElementById('profileSuccess');

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
// Developing Modal
// ============================================================
function openDevelopingModal() {
    document.getElementById('developingModal').style.display = 'flex';
}

function closeDevelopingModal() {
    document.getElementById('developingModal').style.display = 'none';
}

// ============================================================
// 渲染考试（公开可见）
// ============================================================
async function renderExams() {
    const container = document.getElementById('examsContainer');
    try {
        // 检查函数是否存在
        if (typeof window.supabaseAuth.getFrenchExams !== 'function') {
            console.error('❌ getFrenchExams 不是函数，检查 supabase-config.js');
            container.innerHTML = `<div class="empty-state"><i class="fas fa-exclamation-triangle"></i> <p>Erreur de configuration</p></div>`;
            return;
        }
        
        const exams = await window.supabaseAuth.getFrenchExams();

        if (!exams || exams.length === 0) {
            container.innerHTML = `<div class="empty-state"><i class="fas fa-info-circle"></i> <p>Aucun examen disponible</p></div>`;
            return;
        }

        container.innerHTML = exams.map(exam => `
            <div class="exam-card ${exam.is_locked ? 'featured' : ''}">
                ${exam.is_locked ? '<div class="featured-badge">AVANCÉ</div>' : ''}
                <div class="exam-icon"><i class="fas ${exam.icon || 'fa-certificate'}"></i></div>
                <h3>${exam.name}</h3>
                <div class="exam-level">${exam.level || ''}</div>
                <p>${exam.description || ''}</p>
                <div class="exam-details">
                    <span><i class="fas fa-clock"></i> ${exam.duration || '-'}</span>
                    <span><i class="fas fa-euro-sign"></i> ${exam.price || '-'}</span>
                    <span><i class="fas fa-globe"></i> ${exam.validity || '-'}</span>
                </div>
                <div class="exam-access">
                    <span class="access-tag ${exam.is_locked ? 'locked' : 'free'}">
                        ${exam.is_locked ? '🔒 Accès réservé' : '✅ Accès libre'}
                    </span>
                    <a href="#" class="exam-btn ${exam.is_locked ? 'locked-btn' : ''}" 
                       onclick="handleExamClick(event, '${exam.id}', ${exam.is_locked})">
                        ${exam.is_locked ? 'Accès réservé' : 'En savoir plus'}
                    </a>
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error('加载考试失败:', error);
        container.innerHTML = `<div class="empty-state"><i class="fas fa-exclamation-triangle"></i> <p>Erreur de chargement</p></div>`;
    }
}
function handleExamClick(event, examId, isLocked) {
    event.preventDefault();
    if (isLocked) {
        const user = getCurrentUser();
        if (!user) {
            showToast(dict[currentLang].loginRequired, 'warning');
            openLoginModal();
            return;
        }
        openDevelopingModal();
    } else {
        openDevelopingModal();
    }
}

// ============================================================
// 渲染课程（需登录）
// ============================================================
function renderCourses() {
    const container = document.getElementById('coursesContainer');
    const user = getCurrentUser();

    if (!user) {
        container.innerHTML = `
            <div class="login-required" style="grid-column: 1 / -1;">
                <i class="fas fa-lock"></i>
                <p>${dict[currentLang].loginRequired}</p>
                <button class="btn-primary" onclick="openLoginModal()">
                    <i class="fas fa-sign-in-alt"></i> ${dict[currentLang].navLoginText}
                </button>
            </div>
        `;
        return;
    }

    const courseItems = [
        { icon: 'fa-seedling', title: dict[currentLang].course1Title, level: 'A1 · A2', desc: dict[currentLang].course1Desc, duration: dict[currentLang].course1Duration, group: dict[currentLang].course1Group },
        { icon: 'fa-rocket', title: dict[currentLang].course2Title, level: 'B1 · B2', desc: dict[currentLang].course2Desc, duration: dict[currentLang].course2Duration, group: dict[currentLang].course2Group },
        { icon: 'fa-crown', title: dict[currentLang].course3Title, level: 'C1 · C2', desc: dict[currentLang].course3Desc, duration: dict[currentLang].course3Duration, group: dict[currentLang].course3Group },
        { icon: 'fa-handshake', title: dict[currentLang].course4Title, level: 'B2 · C1', desc: dict[currentLang].course4Desc, duration: dict[currentLang].course4Duration, group: dict[currentLang].course4Group }
    ];

    container.innerHTML = courseItems.map((item, index) => `
        <div class="course-card ${index === 1 ? 'featured' : ''}" onclick="openDevelopingModal()" style="cursor: pointer;">
            <div class="course-icon"><i class="fas ${item.icon}"></i></div>
            <h3>${item.title}</h3>
            <div class="course-level">${item.level}</div>
            <p>${item.desc}</p>
            <div class="course-meta">
                <span><i class="fas fa-clock"></i> ${item.duration}</span>
                <span><i class="fas fa-users"></i> ${item.group}</span>
            </div>
            <span class="click-hint">
                <i class="fas fa-arrow-right"></i> ${dict[currentLang].clickToDiscover}
            </span>
        </div>
    `).join('');
}

// ============================================================
// 渲染资源（需登录）
// ============================================================
function renderRessources() {
    const container = document.getElementById('resourcesContainer');
    const user = getCurrentUser();

    if (!user) {
        container.innerHTML = `
            <div class="login-required" style="grid-column: 1 / -1;">
                <i class="fas fa-lock"></i>
                <p>${dict[currentLang].loginRequired}</p>
                <button class="btn-primary" onclick="openLoginModal()">
                    <i class="fas fa-sign-in-alt"></i> ${dict[currentLang].navLoginText}
                </button>
            </div>
        `;
        return;
    }

    const resourceItems = [
        { icon: 'fa-headphones', title: dict[currentLang].res1Title, desc: dict[currentLang].res1Desc },
        { icon: 'fa-book-open', title: dict[currentLang].res2Title, desc: dict[currentLang].res2Desc },
        { icon: 'fa-video', title: dict[currentLang].res3Title, desc: dict[currentLang].res3Desc },
        { icon: 'fa-users', title: dict[currentLang].res4Title, desc: dict[currentLang].res4Desc }
    ];

    container.innerHTML = resourceItems.map(item => `
        <div class="resource-card" onclick="openDevelopingModal()" style="cursor: pointer;">
            <i class="fas ${item.icon}"></i>
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
            <span class="click-hint">
                <i class="fas fa-arrow-right"></i> ${dict[currentLang].clickToDiscover}
            </span>
        </div>
    `).join('');
}

// ============================================================
// 渲染所有板块
// ============================================================
function renderAllSections() {
    renderExams();
    renderCourses();
    renderRessources();
}

// ============================================================
// 关闭模态框（点击外部）
// ============================================================
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('show');
            if (this.id === 'developingModal') {
                this.style.display = 'none';
            }
        }
    });
});

// ============================================================
// 关闭用户下拉菜单（点击外部）
// ============================================================
document.addEventListener('click', function(e) {
    const userInfo = document.querySelector('.user-info');
    const dropdown = document.getElementById('userDropdown');
    if (userInfo && !userInfo.contains(e.target)) {
        dropdown.classList.remove('show');
    }
});

// ============================================================
// 导航高亮
// ============================================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a:not([href*="index"])');

window.addEventListener('scroll', () => {
    let current = '';
    const navHeight = document.querySelector('.main-nav').offsetHeight;
    const langHeight = document.querySelector('.language-toggle').offsetHeight;
    const offset = navHeight + langHeight + 50;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - offset;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
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
    renderAllSections();
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
window.openDevelopingModal = openDevelopingModal;
window.closeDevelopingModal = closeDevelopingModal;
window.handleExamClick = handleExamClick;
window.getCurrentUser = getCurrentUser;