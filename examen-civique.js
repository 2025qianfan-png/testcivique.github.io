// ==================== 自动登出功能变量 ====================
let inactivityTimer;
const INACTIVITY_LIMIT = 10 * 60 * 1000;
const CHECK_INTERVAL = 60 * 1000;
let lastActivityTime = Date.now();
let pageCloseDetected = false;

// ==================== 重置计时器 ====================
function resetInactivityTimer() {
    if (!isAuthenticated()) return;
    lastActivityTime = Date.now();
    if (inactivityTimer) {
        clearTimeout(inactivityTimer);
    }
    inactivityTimer = setTimeout(() => {
        handleAutoLogout('inactivity');
    }, INACTIVITY_LIMIT);
}

// ==================== 处理自动登出 ====================
function handleAutoLogout(reason = 'inactivity') {
    if (!isAuthenticated()) return;
    const messages = {
        inactivity: currentLang === 'fr' 
            ? 'Vous avez été déconnecté pour cause d\'inactivité (10 minutes).' 
            : '您因10分钟无操作已被登出。',
        pageClose: currentLang === 'fr' 
            ? 'Session expirée. Veuillez vous reconnecter.' 
            : '会话已过期，请重新登录。'
    };
    sessionStorage.removeItem('currentUser');
    const loginLink = document.getElementById('navLogin');
    const userInfo = document.getElementById('userInfo');
    if (loginLink) loginLink.style.display = 'inline-block';
    if (userInfo) userInfo.style.display = 'none';
    disableProtectedLinks();
    showToast(
        currentLang === 'fr' ? 'Déconnexion automatique' : '自动登出',
        messages[reason],
        'warning'
    );
    closeLoginModal();
    closeProfileModal();
}

// ==================== 监听用户活动 ====================
function initActivityTracking() {
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
    events.forEach(event => {
        document.addEventListener(event, () => {
            if (isAuthenticated()) {
                resetInactivityTimer();
            }
        });
    });
    if (isAuthenticated()) {
        resetInactivityTimer();
    }
}

// ==================== 检测页面关闭 ====================
function initPageCloseDetection() {
    window.addEventListener('beforeunload', function() {
        if (isAuthenticated()) {
            pageCloseDetected = true;
        }
    });
    document.addEventListener('visibilitychange', function() {
        if (document.visibilityState === 'hidden' && isAuthenticated()) {
            lastActivityTime = Date.now();
        } else if (document.visibilityState === 'visible' && isAuthenticated()) {
            const timeAway = Date.now() - lastActivityTime;
            if (timeAway > INACTIVITY_LIMIT) {
                handleAutoLogout('inactivity');
            } else {
                resetInactivityTimer();
            }
        }
    });
    setInterval(() => {
        if (isAuthenticated()) {
            const timeSinceActivity = Date.now() - lastActivityTime;
            if (timeSinceActivity > INACTIVITY_LIMIT) {
                handleAutoLogout('inactivity');
            }
        }
    }, CHECK_INTERVAL);
}

// ==================== 验证学生登录 ====================
async function validateStudent(name, password) {
    return await window.supabaseAuth.validateStudent(name, password);
}

// ==================== 更新学生密码 ====================
async function updateStudentPassword(userId, currentPassword, newPassword) {
    try {
        const supabase = window.supabaseAuth.getSupabaseClient();
        const { data: user, error: fetchError } = await supabase
            .from('students')
            .select('password')
            .eq('id', userId)
            .single();
        if (fetchError || !user) {
            return { success: false, message: 'Utilisateur non trouvé' };
        }
        if (user.password !== currentPassword) {
            return { success: false, message: 'Mot de passe actuel incorrect' };
        }
        const { data, error } = await supabase
            .from('students')
            .update({ password: newPassword })
            .eq('id', userId)
            .select()
            .single();
        if (error) {
            return { success: false, message: 'Erreur lors de la mise à jour' };
        }
        return { success: true, data };
    } catch (error) {
        return { success: false, message: 'Erreur de connexion' };
    }
}

// ==================== 检查访问权限 ====================
function checkAccess(student) {
    if (!student.timer) {
        return { valid: true, daysLeft: -1 };
    }
    const expiryDate = new Date(student.timer);
    const currentDate = new Date();
    if (expiryDate < currentDate) {
        return { valid: false, daysLeft: 0 };
    } else {
        const timeDiff = expiryDate - currentDate;
        const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        return { valid: true, daysLeft: daysLeft };
    }
}

// ==================== 工具函数 ====================
function escapeHtml(s) {
    if (!s) return '';
    return s.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

// ==================== 变量 ====================
let currentLang = 'fr';
let deferredPrompt;
let isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
let isAndroid = /Android/.test(navigator.userAgent);
let isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;

// ==================== 教学评价变量 ====================
let allFeedbacks = [];
let feedbackDisplayCount = 5;
const FEEDBACK_INCREMENT = 5;

// ==================== Toast 通知 ====================
function showToast(title, message, type = 'warning') {
    const container = document.getElementById('toastContainer');
    const toastId = 'toast_' + Date.now();
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.id = toastId;
    let iconClass = 'fa-exclamation-circle';
    if (type === 'success') iconClass = 'fa-check-circle';
    if (type === 'error') iconClass = 'fa-times-circle';
    toast.innerHTML = `
        <div class="toast-icon">
            <i class="fas ${iconClass}"></i>
        </div>
        <div class="toast-content">
            <div class="toast-title">${title}</div>
            <div class="toast-message">${message}</div>
        </div>
        <button class="toast-close" onclick="this.parentElement.remove()">&times;</button>
    `;
    container.appendChild(toast);
    setTimeout(() => {
        const toastElement = document.getElementById(toastId);
        if (toastElement) toastElement.remove();
    }, 3000);
}

// ==================== 翻译 ====================
const translations = {
    fr: {
        mainTitle: "Examen Civique Français",
        mainSubtitle: "Association Mille Voiles / 千帆协会 - Préparation à l'examen civique obligatoire 2026",
        logoText: "Mille Voiles",
        adminSpace: "Administration",
        teacherSpace: "Espace intervenant",
        studentSpace: "Espace étudiant",
        footerWechat: "WeChat: qfparis",
        navHome: "Accueil",
        navTests: "Tests en ligne",
        navThemes: "Thématiques",
        navSituation: "Mises en situation",
        navPolicy: "Nouvelle politique",
        navFAQ: "FAQ",
        navContact: "Contact",
        navLoginText: "Connexion",
        navAdminText: "Administration",
        profileMenuItem: "Mon profil",
        learningProgressMenuItem: "📊 Mon apprentissage",
        logoutMenuItem: "Déconnexion",
        homePageText: "Accueil",
        heroTitle: "Préparez-vous à l'examen civique 2026",
        heroText: "À partir du 1er janvier 2026, tous les étrangers souhaitant obtenir une carte de séjour pluriannuelle, une carte de résident ou la naturalisation française devront réussir un examen civique. Préparez-vous dès maintenant avec nos tests en ligne.",
        heroBtn: "Commencer maintenant",
        testsTitle: "Choisissez votre test",
        testsSubtitle: "Trois options adaptées à vos besoins : test gratuit, test officiel ou test complet pour nos étudiants",
        freeTestTitle: "Test Gratuit",
        freeTestPrice: "GRATUIT",
        freeTestDesc: "Évaluation de niveau",
        feature1: "20 questions adaptatives",
        feature2: "Durée : 20 minutes",
        feature3: "Correction immédiate",
        feature4: "Recommandation de cours",
        feature5: "Sans engagement",
        passwordInfoFree: '<i class="fas fa-key"></i> <strong>Accès protégé :</strong> Pour obtenir le mot de passe, contactez-nous à <a href="mailto:2025qianfan@gmail.com">2025qianfan@gmail.com</a>',
        freeTestBtn: '<i class="fas fa-play-circle"></i> Commencer le test',
        annalesTestTitle: "Test officiel",
        annalesTestPrice: "ACCÈS LIMITÉ",
        annalesTestDesc: "Sujets d'examen réels",
        annalesFeature1: "20 questions officielles",
        annalesFeature2: "Correction immédiate",
        annalesFeature3: "Explications détaillées",
        annalesFeature4: "Statistiques de réussite",
        annalesFeature5: "Renouvelé mensuellement",
        passwordInfoAnnales: '<i class="fas fa-key"></i> <strong>Accès protégé :</strong> Mot de passe disponible après inscription (contactez-nous)',
        annalesTestBtnText: '<i class="fas fa-play-circle"></i> Commencer le test',
        studentTestTitle: "Test Étudiant",
        studentTestPrice: "ACCÈS LIMITÉ",
        studentTestDesc: "Pour nos étudiants inscrits",
        feature6: "40 questions conformes",
        feature7: "Durée : 45 minutes",
        feature8: "Simulation réelle",
        feature9: "2000 questions de type examen",
        feature10: "Révision des erreurs",
        passwordInfoStudent: '<i class="fas fa-lock"></i> <strong>Accès réservé :</strong> Mot de passe fourni après inscription aux cours de l\'association',
        studentTestBtnText: '<i class="fas fa-play-circle"></i> Commencer le test',
        themesTitle: "Thématiques de l'examen",
        themesSubtitle: "Les 5 thématiques principales que vous devrez maîtriser pour réussir l'examen civique",
        theme1: "Principes et valeurs",
        theme1Desc: "La devise et les symboles de la République, la laïcité, les valeurs fondamentales de la France.",
        theme2: "Institutions",
        theme2Desc: "Organisation de la République française, l'Union européenne et ses institutions politiques.",
        theme3: "Droits et devoirs",
        theme3Desc: "Les droits fondamentaux, les obligations et devoirs des personnes résidant en France.",
        theme4: "Culture française",
        theme4Desc: "L'Histoire, la géographie et la culture françaises, patrimoine culturel national.",
        theme5: "Vie sociale",
        theme5Desc: "L'autorité parentale, système éducatif, travail en France et services publics.",
        link1Text: "En savoir plus",
        link2Text: "En savoir plus",
        link3Text: "En savoir plus",
        link4Text: "En savoir plus",
        link5Text: "En savoir plus",
        articleTitle: "Un nouvel examen civique pour les étrangers souhaitant s'installer en France",
        articleDate: "Publié le 18 décembre 2025",
        articleSource: "Service Public / Direction de l'information légale et administrative (Premier ministre)",
        imageCaption: "Examen civique - Nouvelle exigence pour les étrangers souhaitant s'installer en France",
        imageCitation: "Crédit: LP/ Jean-Baptiste Quentin",
        introPara: "Pour obtenir une carte de séjour pluriannuelle, une carte de résident ou la naturalisation française, les étrangers devront avoir réussi un examen civique à compter du 1er janvier 2026. Ce test vise notamment à évaluer leur connaissance des principes et valeurs de la République, ainsi que des droits et devoirs des personnes résidant en France.",
        section1Title: "Contexte légal",
        section1Text1: "La loi du 26 janvier 2024 pour contrôler l'immigration, améliorer l'intégration a notamment créé un examen civique.",
        section1Text2: "Cette épreuve, d'une durée de 45 minutes maximum et réalisée sur support numérique, se présente sous la forme d'un questionnaire à choix multiples (QCM) comprenant 40 questions (28 questions de connaissances générales et 12 questions de mises en situation) ; à chaque fois, une seule réponse est correcte parmi les 4 options proposées. Pour valider l'examen, il faut avoir obtenu au moins 32 bonnes réponses (soit 80 % de réussite).",
        section2Title: "Qui est concerné ?",
        section2Text1: "À partir du 1er janvier 2026, la réussite à cet examen sera obligatoire pour :",
        highlight1Title: "Obligations à partir du 1er janvier 2026 :",
        obligation1: "• Obtenir la naturalisation française",
        obligation2: "• Acquérir un titre de séjour pluriannuel (carte de séjour pluriannuelle ou carte de résident), si vous êtes un ressortissant d'un pays non-membre de l'Union européenne",
        highlight2Title: "Exceptions :",
        exception1: "• Vous n'aurez pas à passer l'examen civique si vous demandez le renouvellement de votre carte de séjour pluriannuelle ou de votre carte de résident",
        exception2: "• Vous n'êtes pas concerné par cet examen si vous êtes bénéficiaire d'une protection internationale, notamment",
        section3Title: "Quand passer l'examen civique ?",
        section3Text1: "L'examen civique devra être passé avant le dépôt de la demande de titre de séjour ou de naturalisation.",
        section3Text2: "Pour les personnes souhaitant obtenir un titre de séjour pluriannuel, l'examen interviendra obligatoirement en conclusion d'une formation civique (d'une durée de 24 heures, réparties sur 4 jours). Actuellement, cette formation est suivie par les étrangers après l'obtention de leur titre de séjour, dans le cadre de leur contrat d'intégration républicaine. À compter du 1er janvier 2026, ils devront donc suivre cette formation avant l'obtention de leur titre de séjour.",
        highlight3Title: "Important :",
        highlight3Text: "L'attestation de réussite à l'examen civique n'aura pas une durée de validité limitée.",
        section4Title: "Thématiques de l'examen",
        section4Text: "Chaque QCM composant l'examen civique comprendra des questions sur les 5 thématiques étudiées lors de la formation civique :",
        resourceText: "Vous pouvez trouver des fiches pour préparer l'examen civique, et prendre connaissance des centres agréés au sein desquels il est possible de passer l'examen sur le site formation-civique.interieur.gouv.fr.",
        faqTitle: "Questions fréquentes",
        faqSubtitle: "Trouvez rapidement des réponses à vos questions sur le nouvel examen civique",
        faq1Q: "Qui doit passer l'examen civique ?",
        faq2Q: "Combien de questions dans l'examen officiel ?",
        faq3Q: "L'examen civique remplace-t-il le test de langue ?",
        loginModalTitle: "Connexion Élève",
        nameLabel: "Nom d'utilisateur",
        passwordLabel: "Mot de passe",
        loginBtnText: "Se connecter",
        loginHelp: "Contactez l'association si vous n'avez pas de compte",
        errorMessage: "Nom d'utilisateur ou mot de passe incorrect",
        profileModalTitle: "Mon Profil",
        infoSectionTitle: "Informations du compte",
        editSectionTitle: "Modifier mon mot de passe",
        typeLabel: "Type",
        expiryLabel: "Accès jusqu'au",
        usernameLabel: "Nom d'utilisateur",
        currentPasswordLabel: "Mot de passe actuel",
        newPasswordLabel: "Nouveau mot de passe",
        confirmPasswordLabel: "Confirmer le mot de passe",
        updateBtnText: "Mettre à jour",
        cancelBtnText: "Annuler",
        profileSuccessMessage: "Mot de passe mis à jour avec succès",
        passwordMismatch: "Les mots de passe ne correspondent pas",
        currentPasswordError: "Mot de passe actuel incorrect",
        loginRequired: "Connexion requise",
        loginRequiredMessage: "Veuillez vous connecter pour accéder à cette ressource",
        footerAbout: "À propos",
        footerAboutText: "L'association Mille Voiles accompagne les communautés chinoises en France dans leurs démarches d'intégration, d'apprentissage du français et de préparation aux examens officiels.",
        footerLinks: "Liens rapides",
        footerLink1: "Accueil",
        footerLink2: "Tests en ligne",
        footerLink3: "Thématiques",
        footerLink4: "Nouvelle politique",
        footerLink5: "FAQ",
        footerLink6: "Administration",
        footerContact: "Contact",
        footerEmail: "2025qianfan@gmail.com",
        footerAddress: "Association enregistrée à Paris",
        footerCopyright: "© 2025 Association Mille Voiles / 千帆协会 - Tous droits réservés.",
        courseTitle: "📚 Nos formations civiques",
        courseSubtitle: "Des cursus adaptés à votre niveau et vos besoins",
        course1Title: "📘 Initiation",
        course1Duration: "8 séances · 16 heures",
        course1Group: "Groupe 4-8 pers.",
        course1Desc: "Cours complet couvrant toutes les bases de l'examen civique. Idéal pour les débutants ou ceux qui découvrent l'examen pour la première fois.",
        course1Feature1: "Système français et valeurs",
        course1Feature2: "Constitution et institutions",
        course1Feature3: "Droits et devoirs des citoyens",
        course1Feature4: "Culture et histoire de France",
        course1Feature5: "Vie sociale et services publics",
        course1Btn: "En savoir plus",
        course2Title: "📘 Perfectionnement",
        course2Duration: "4 séances · 8 heures",
        course2Group: "Groupe 4-8 pers.",
        course2Desc: "Renforcez vos connaissances, approfondissez les points clés et surmontez les difficultés spécifiques de l'examen.",
        course2Feature1: "Analyse approfondie des sujets clés",
        course2Feature2: "Entraînement avec des sujets réels",
        course2Feature3: "Techniques de réponse",
        course2Feature4: "Renforcement des points faibles",
        course2Feature5: "Simulations d'examen",
        course2Btn: "En savoir plus",
        course3Title: "📘 Expertise",
        course3Duration: "2 séances · 4 heures",
        course3Group: "Groupe 2-6 pers.",
        course3Desc: "Synthèse des connaissances, sessions intensives et préparation finale avant l'examen.",
        course3Feature1: "Synthèse des sujets et pronostics",
        course3Feature2: "Analyse des erreurs fréquentes",
        course3Feature3: "Tests en temps limité",
        course3Feature4: "Accompagnement personnalisé",
        course3Feature5: "Conseils de préparation mentale",
        course3Btn: "En savoir plus",
        statStudentLabel: "👨‍🎓 Élèves",
        statSuccessLabel: "✅ Taux de réussite (1er passage)",
        fbAvgLabelStat: "⭐ Évaluations",
        installBtnText: "Installer l'app",
        installGuideTitle: "Installer l'application",
        iosStep1: "Ouvrez Safari",
        iosStep1Desc: "Accédez à cette page via Safari sur votre iPhone",
        iosStep2: "Cliquez sur \"Partager\"",
        iosStep2Desc: "Appuyez sur l'icône <i class='fas fa-share'></i> en bas de l'écran",
        iosStep3: "Ajouter à l'écran d'accueil",
        iosStep3Desc: "Faites défiler et sélectionnez \"Sur l'écran d'accueil\"",
        iosStep4: "Confirmer l'installation",
        iosStep4Desc: "Appuyez sur \"Ajouter\" en haut à droite",
        androidStep1: "Ouvrez Chrome",
        androidStep1Desc: "Accédez à cette page via Chrome sur votre Android",
        androidStep2: "Menu des options",
        androidStep2Desc: "Appuyez sur les trois points <i class='fas fa-ellipsis-v'></i> en haut à droite",
        androidStep3: "Installer l'app",
        androidStep3Desc: "Sélectionnez \"Ajouter à l'écran d'accueil\" ou \"Installer l'application\"",
        androidStep4: "Confirmer",
        androidStep4Desc: "Appuyez sur \"Installer\" pour confirmer",
        closeGuideBtn: "Fermer",
        installPwaBtn: "Installer maintenant",
        offlineText: "Mode hors ligne - Vous pouvez continuer à utiliser l'application",
        situationTitle: "🎯 Mises en situation",
        situationSubtitle: "Entraînez-vous avec des questions pratiques basées sur des scénarios réels de la vie quotidienne en France",
        situationCardTitle: "Mises en situation",
        situationCardDesc: "20 questions basées sur des scénarios de la vie quotidienne pour tester votre compréhension des valeurs républicaines, des droits et des devoirs en France.",
        situationFeature1: "20 questions de mise en situation",
        situationFeature2: "Scénarios réalistes de la vie quotidienne",
        situationFeature3: "Correction immédiate avec explications",
        situationFeature4: "Pas de limite de temps",
        situationFeature5: "Seuil de réussite : 16/20 (80%)",
        situationPasswordInfo: '<i class="fas fa-key"></i> <strong>Accès protégé :</strong> Mot de passe disponible après inscription',
        situationBtnText: "Commencer le test",
        situationInfo1Title: "20 questions",
        situationInfo1Desc: "Questions basées sur des scénarios réels",
        situationInfo2Title: "Tous niveaux",
        situationInfo2Desc: "Adapté aux débutants comme aux avancés",
        situationInfo3Title: "Suivi des progrès",
        situationInfo3Desc: "Historique de vos résultats et erreurs",
        preRegisterTitle: "📝 Prêt à commencer ?",
        preRegisterDesc: "Inscrivez-vous dès maintenant pour réserver votre place dans nos formations civiques et bénéficier d'un suivi personnalisé.",
        preRegisterBtnText: "Je m'inscris maintenant",
        footerSituationLink: "Mises en situation",
        // 教学评价
        feedbackTitle: "⭐ Avis des étudiants",
        feedbackCountLabel: "avis",
        loadMoreText: "Voir plus d'avis",
        feedbackEmptyTitle: "Aucun avis",
        feedbackEmptyText: "Soyez le premier à laisser un avis !",
        feedbackAnonymous: "Anonyme",
        feedbackExamType: "Examen",
        feedbackShowcaseTitle: "⭐ Avis des étudiants",
        feedbackShowcaseSubtitle: "Ce que nos étudiants pensent de nos formations",
        feedbackScore: "Score"
    },
    zh: {
        feedbackShowcaseTitle: "⭐ 学生评价",
feedbackShowcaseSubtitle: "我们的学生怎么说",
        mainTitle: "法国公民考试",
        mainSubtitle: "千帆协会 - 2026年强制性公民考试准备",
        logoText: "千帆协会",
        adminSpace: "管理后台",
        teacherSpace: "教师空间",
        studentSpace: "学生空间",
        footerWechat: "微信号: qfparis",
        navHome: "首页",
        navTests: "在线测试",
        navThemes: "考试主题",
        navSituation: "情景题专项",
        navPolicy: "新政解读",
        navFAQ: "常见问题",
        navContact: "联系我们",
        navLoginText: "登录",
        navAdminText: "管理后台",
        profileMenuItem: "我的资料",
        learningProgressMenuItem: "📊 我的学习进度",
        logoutMenuItem: "退出登录",
        homePageText: "首页",
        heroTitle: "为2026年公民考试做好准备",
        heroText: "从2026年1月1日起，所有希望获得多年居留卡、长期居留卡或法国国籍的外国人都必须通过一项公民考试。立即使用我们的在线测试开始准备。",
        heroBtn: "立即开始",
        testsTitle: "选择您的测试",
        testsSubtitle: "三种选项满足您的需求：免费测试、真题训练或为学员提供的完整测试",
        freeTestTitle: "免费测试",
        freeTestPrice: "免费",
        freeTestDesc: "水平评估",
        feature1: "20道自适应题目",
        feature2: "时长：20分钟",
        feature3: "即时批改",
        feature4: "课程推荐",
        feature5: "无绑定",
        passwordInfoFree: '<i class="fas fa-key"></i> <strong>受保护访问：</strong> 要获取密码，请通过邮件联系我们 <a href="mailto:2025qianfan@gmail.com">2025qianfan@gmail.com</a>',
        freeTestBtn: '<i class="fas fa-play-circle"></i> 开始测试',
        annalesTestTitle: "真题训练",
        annalesTestPrice: "限时访问",
        annalesTestDesc: "学员反馈真题模拟",
        annalesFeature1: "20道官方真题",
        annalesFeature2: "即时批改",
        annalesFeature3: "详细解析",
        annalesFeature4: "通过率统计",
        annalesFeature5: "每月更新",
        passwordInfoAnnales: '<i class="fas fa-key"></i> <strong>受保护访问：</strong> 报名后获取密码（联系我们）',
        annalesTestBtnText: '<i class="fas fa-play-circle"></i> 开始测试',
        studentTestTitle: "学员测试",
        studentTestPrice: "限时访问",
        studentTestDesc: "供我们已注册学员使用",
        feature6: "40道符合标准的题目",
        feature7: "时长：45分钟",
        feature8: "真实模拟",
        feature9: "2000道原题加模拟试题",
        feature10: "错题回顾",
        passwordInfoStudent: '<i class="fas fa-lock"></i> <strong>受限访问：</strong> 报名参加协会课程后提供密码',
        studentTestBtnText: '<i class="fas fa-play-circle"></i> 开始测试',
        themesTitle: "考试主题",
        themesSubtitle: "您必须掌握的5个主要主题才能通过公民考试",
        theme1: "原则与价值观",
        theme1Desc: "共和国的格言和象征，政教分离，法国的基本价值观。",
        theme2: "机构",
        theme2Desc: "法国共和国的组织，欧盟及其政治机构。",
        theme3: "权利与义务",
        theme3Desc: "基本权利，在法国居住者的义务和责任。",
        theme4: "法国文化",
        theme4Desc: "法国的历史、地理和文化，国家文化遗产。",
        theme5: "社会生活",
        theme5Desc: "父母权威，教育体系，在法国工作和公共服务。",
        link1Text: "了解更多",
        link2Text: "了解更多",
        link3Text: "了解更多",
        link4Text: "了解更多",
        link5Text: "了解更多",
        articleTitle: "面向希望在法国定居的外国人的新公民考试",
        articleDate: "发布于2025年12月18日",
        articleSource: "公共服务 / 总理府法律与行政信息局",
        imageCaption: "公民考试 - 希望在法国定居的外国人的新要求",
        imageCitation: "图片来源：LP/ Jean-Baptiste Quentin",
        introPara: "从2026年1月1日起，外国人必须通过公民考试才能获得多年居留卡、长期居留卡或法国国籍。此考试旨在评估他们对共和国原则和价值观，以及在法国居住者的权利和义务的了解。",
        section1Title: "法律背景",
        section1Text1: "2024年1月26日颁布的《控制移民，改善融合法》特别设立了这项公民考试。",
        section1Text2: "这项考试最长持续45分钟，在数字设备上进行，形式为包含40道题（28道一般知识题和12道情境题）的多项选择题（QCM）；每道题提供4个选项，只有一个正确答案。要通过考试，必须获得至少32个正确答案（即80%的正确率）。",
        section2Title: "谁受影响？",
        section2Text1: "从2026年1月1日起，以下情况必须通过此考试：",
        highlight1Title: "从2026年1月1日起的义务：",
        obligation1: "• 获得法国国籍",
        obligation2: "• 获取多年居留许可（多年居留卡或长期居留卡），如果您是非欧盟成员国公民",
        highlight2Title: "例外情况：",
        exception1: "• 如果您申请更新您的多年居留卡或长期居留卡，则无需参加公民考试",
        exception2: "• 如果您是国际保护受益人（例如），则不受此考试影响",
        section3Title: "何时参加公民考试？",
        section3Text1: "公民考试必须在提交居留许可或入籍申请之前通过。",
        section3Text2: "对于希望获得多年居留许可的人员，考试必须在公民培训（为期24小时，分4天进行）结束后进行。目前，外国人在获得居留许可后，在其共和融合合同框架内参加此培训。从2026年1月1日起，他们必须在获得居留许可之前参加此培训。",
        highlight3Title: "重要提示：",
        highlight3Text: "公民考试通过证明没有有效期限。",
        section4Title: "考试主题",
        section4Text: "构成公民考试的每套多项选择题将涵盖公民培训期间学习的5个主题：",
        resourceText: "您可以在网站 formation-civique.interieur.gouv.fr 上找到准备公民考试的资料，并了解可以参加考试的认证中心。",
        faqTitle: "常见问题",
        faqSubtitle: "快速找到关于新公民考试的问题答案",
        faq1Q: "谁必须参加公民考试？",
        faq2Q: "官方考试有多少道题？",
        faq3Q: "公民考试会取代语言测试吗？",
        loginModalTitle: "学生登录",
        nameLabel: "用户名",
        passwordLabel: "密码",
        loginBtnText: "登录",
        loginHelp: "如果您没有账户，请联系协会",
        errorMessage: "用户名或密码错误",
        profileModalTitle: "我的资料",
        infoSectionTitle: "账户信息",
        editSectionTitle: "修改密码",
        typeLabel: "类型",
        expiryLabel: "访问有效期至",
        usernameLabel: "用户名",
        currentPasswordLabel: "当前密码",
        newPasswordLabel: "新密码",
        confirmPasswordLabel: "确认新密码",
        updateBtnText: "更新",
        cancelBtnText: "取消",
        profileSuccessMessage: "密码更新成功",
        passwordMismatch: "两次输入的密码不匹配",
        currentPasswordError: "当前密码错误",
        loginRequired: "需要登录",
        loginRequiredMessage: "请登录后访问此资源",
        footerAbout: "关于我们",
        footerAboutText: "千帆协会一直协助在法华人社区进行融合程序、法语学习以及官方考试准备。",
        footerLinks: "快速链接",
        footerLink1: "首页",
        footerLink2: "在线测试",
        footerLink3: "考试主题",
        footerLink4: "新政解读",
        footerLink5: "常见问题",
        footerLink6: "管理后台",
        footerContact: "联系我们",
        footerEmail: "2025qianfan@gmail.com",
        footerAddress: "注册于巴黎的协会",
        footerCopyright: "© 2025 千帆协会 - 版权所有。",
        courseTitle: "📚 我们的公民课程",
        courseSubtitle: "适合您水平和需求的课程",
        course1Title: "📘 初级课程 · 启蒙",
        course1Duration: "8节课 · 16小时",
        course1Group: "小组 4-8人",
        course1Desc: "全面讲解公民考试基础知识，系统梳理考试要点。适合零基础或初次接触公民考试的学员。",
        course1Feature1: "法国制度与价值观",
        course1Feature2: "宪法与政体结构",
        course1Feature3: "公民权利与义务",
        course1Feature4: "法国文化与历史",
        course1Feature5: "社会生活与公共服务",
        course1Btn: "了解更多",
        course2Title: "📘 中级课程 · 提升",
        course2Duration: "4节课 · 8小时",
        course2Group: "小组 4-8人",
        course2Desc: "巩固核心知识，强化重点考点，针对性突破难点。适合已有基础、希望系统提升的学员。",
        course2Feature1: "核心考点深度解析",
        course2Feature2: "真题实战训练",
        course2Feature3: "答题技巧精讲",
        course2Feature4: "薄弱环节强化",
        course2Feature5: "模拟考试演练",
        course2Btn: "了解更多",
        course3Title: "📘 高级课程 · 精通",
        course3Duration: "2节课 · 4小时",
        course3Group: "小组 2-6人",
        course3Desc: "考点速通，专项突破，考前冲刺强化。适合已完成系统学习、准备冲刺考试的学员。",
        course3Feature1: "考点梳理与押题",
        course3Feature2: "高频易错题精讲",
        course3Feature3: "限时模拟测试",
        course3Feature4: "一对一答疑指导",
        course3Feature5: "考前心理辅导",
        course3Btn: "了解更多",
        statStudentLabel: "👨‍🎓 学员",
        statSuccessLabel: "✅ 通过率 (一次性通过)",
        fbAvgLabelStat: "⭐ 评价",
        installBtnText: "安装应用",
        installGuideTitle: "安装应用程序",
        iosStep1: "打开Safari",
        iosStep1Desc: "在您的iPhone上通过Safari访问此页面",
        iosStep2: "点击\"分享\"",
        iosStep2Desc: "点击屏幕底部的分享图标 <i class='fas fa-share'></i>",
        iosStep3: "添加到主屏幕",
        iosStep3Desc: "滚动并选择\"添加到主屏幕\"",
        iosStep4: "确认安装",
        iosStep4Desc: "点击右上角的\"添加\"",
        androidStep1: "打开Chrome",
        androidStep1Desc: "在您的Android设备上通过Chrome访问此页面",
        androidStep2: "选项菜单",
        androidStep2Desc: "点击右上角的三个点 <i class='fas fa-ellipsis-v'></i>",
        androidStep3: "安装应用",
        androidStep3Desc: "选择\"添加到主屏幕\"或\"安装应用\"",
        androidStep4: "确认",
        androidStep4Desc: "点击\"安装\"进行确认",
        closeGuideBtn: "关闭",
        installPwaBtn: "立即安装",
        offlineText: "离线模式 - 您可以继续使用应用程序",
        situationTitle: "🎯 情景题专项练习",
        situationSubtitle: "通过基于法国日常生活真实场景的实践题目进行训练",
        situationCardTitle: "情景题专项训练",
        situationCardDesc: "20道基于日常生活场景的题目，测试您对共和国价值观、权利和义务的理解。",
        situationFeature1: "20道情景题",
        situationFeature2: "真实的日常生活场景",
        situationFeature3: "即时批改并附详细解析",
        situationFeature4: "无时间限制",
        situationFeature5: "通过标准：16/20 (80%)",
        situationPasswordInfo: '<i class="fas fa-key"></i> <strong>受保护访问：</strong> 报名后获取密码',
        situationBtnText: "开始测试",
        situationInfo1Title: "20道情景题",
        situationInfo1Desc: "基于真实场景的题目",
        situationInfo2Title: "适合所有水平",
        situationInfo2Desc: "初学者和进阶者均可使用",
        situationInfo3Title: "进度追踪",
        situationInfo3Desc: "查看您的成绩和错题历史",
        preRegisterTitle: "📝 准备开始了吗？",
        preRegisterDesc: "立即注册，预定您在公民培训课程中的名额，享受个性化跟踪指导。",
        preRegisterBtnText: "立即注册",
        footerSituationLink: "情景题专项",
        // 教学评价
        feedbackTitle: "⭐ 学生评价",
        feedbackCountLabel: "条评价",
        loadMoreText: "查看更多评价",
        feedbackEmptyTitle: "暂无评价",
        feedbackEmptyText: "成为第一个留下评价的人！",
        feedbackAnonymous: "匿名",
        feedbackExamType: "考试类型",
        feedbackScore: "分数"
    }
};

// ==================== 认证函数 ====================
function getCurrentUser() {
    const userData = sessionStorage.getItem('currentUser');
    if (!userData) return null;
    try {
        const user = JSON.parse(userData);
        if (user.expiryDate) {
            const expiryDate = new Date(user.expiryDate);
            const today = new Date();
            if (expiryDate < today) {
                console.log("账户已过期，清除本地存储");
                sessionStorage.removeItem('currentUser');
                setTimeout(() => {
                    showToast(
                        'Compte expiré',
                        currentLang === 'fr' ? 'Votre compte a expiré. Veuillez contacter l\'association.' : '您的账户已过期，请联系协会。',
                        'error'
                    );
                }, 500);
                return null;
            }
        }
        return user;
    } catch {
        return null;
    }
}

function isAuthenticated() {
    const user = getCurrentUser();
    if (!user) return false;
    if (user.expiryDate) {
        const expiryDate = new Date(user.expiryDate);
        const today = new Date();
        if (expiryDate < today) {
            sessionStorage.removeItem('currentUser');
            return false;
        }
    }
    return true;
}

async function loginUser(name, password) {
    try {
        const student = await validateStudent(name, password);
        if (!student) {
            return { success: false, message: translations[currentLang].errorMessage };
        }
        const accessCheck = checkAccess(student);
        if (!accessCheck.valid) {
            return { 
                success: false, 
                message: currentLang === 'fr' 
                    ? 'Votre compte a expiré. Veuillez contacter l\'association.' 
                    : '您的账户已过期，请联系协会。'
            };
        }
        const userData = {
            id: student.id,
            name: student.name,
            type: student.type || 'etudiant',
            role: student.role || 'user',
            expiryDate: student.timer,
            accessValid: accessCheck.valid,
            daysLeft: accessCheck.daysLeft
        };
        sessionStorage.setItem('currentUser', JSON.stringify(userData));
        return { success: true, user: userData };
    } catch (error) {
        return { success: false, message: translations[currentLang].errorMessage };
    }
}

function logoutUser() {
    sessionStorage.removeItem('currentUser');
    if (inactivityTimer) {
        clearTimeout(inactivityTimer);
        inactivityTimer = null;
    }
    window.location.reload();
}

function generatePageToken(page, user) {
    let expiryTimestamp = null;
    if (user.expiryDate) {
        expiryTimestamp = new Date(user.expiryDate).getTime();
    }
    const data = {
        page: page,
        userId: user.id,
        name: user.name || "",
        type: user.type,
        role: user.role || 'user',
        daysLeft: user.daysLeft,
        expiry: expiryTimestamp,
        timestamp: Date.now()
    };
    const jsonString = JSON.stringify(data);
    const utf8String = encodeURIComponent(jsonString);
    return btoa(utf8String);
}

// ==================== 初始化认证UI ====================
function initAuthUI() {
    const user = getCurrentUser();
    const loginLink = document.getElementById('navLogin');
    const userInfo = document.getElementById('userInfo');
    const welcomeMessage = document.getElementById('welcomeMessage');
    const userDropdown = document.getElementById('userDropdown');
    const roleMenuContainer = document.getElementById('roleBasedMenu');
    
    if (user) {
        loginLink.style.display = 'none';
        userInfo.style.display = 'flex';
        welcomeMessage.textContent = user.name;
        enableProtectedLinks(user);
        
        if (userDropdown) {
            const t = translations[currentLang];
            const userToken = generatePageToken('dashboard', user);
            let menuItems = '';
            
            // 1. 我的资料
            menuItems += `
                <a href="#" onclick="showProfileModal()">
                    <i class="fas fa-user-cog"></i> <span>${t.profileMenuItem || 'Mon profil'}</span>
                </a>
            `;
            
            // 2. 我的学习进度
            const studentTypes = ['t', 'm', 'r', 'n', 'etudiant', 'stu'];
            if (studentTypes.includes(user.type) || studentTypes.includes(user.role)) {
                const dashboardToken = generatePageToken('dashboard', user);
                menuItems += `
                    <a href="dashboard-etudiant.html?token=${dashboardToken}&type=${user.type}" 
                       class="progress-link"
                       style="border-bottom: 1px solid var(--light-gray);">
                        <i class="fas fa-chart-line" style="color: #6c5ce7;"></i> 
                        <span style="font-weight: 600;">${t.learningProgressMenuItem || '📊 Mon apprentissage'}</span>
                    </a>
                `;
            }
            
            // 3. 角色菜单
            if (roleMenuContainer) {
                roleMenuContainer.innerHTML = '';
                const userRole = user.role || user.type || '';
                let roleMenuHtml = '';
                
                if (userRole === 'admin') {
                    roleMenuHtml = `
                        <a href="admin.html?token=${userToken}" style="border-bottom: 1px solid var(--light-gray);">
                            <i class="fas fa-shield-alt"></i> 
                            <span>${t.adminSpace || 'Administration'}</span>
                        </a>
                    `;
                } else if (userRole === 'teacher') {
                    roleMenuHtml = `
                        <a href="teacher.html?token=${userToken}" style="border-bottom: 1px solid var(--light-gray);">
                            <i class="fas fa-chalkboard-user"></i> 
                            <span>${t.teacherSpace || 'Espace intervenant'}</span>
                        </a>
                    `;
                } else if (userRole === 'stu') {
                    roleMenuHtml = `
                        <a href="student.html?token=${userToken}" style="border-bottom: 1px solid var(--light-gray);">
                            <i class="fas fa-user-graduate"></i> 
                            <span>${t.studentSpace || 'Espace étudiant'}</span>
                        </a>
                    `;
                }
                
                if (roleMenuHtml) {
                    roleMenuContainer.innerHTML = roleMenuHtml;
                    menuItems += roleMenuHtml;
                }
            }
            
            // 4. 退出登录
            menuItems += `
                <a href="#" onclick="logout()" class="logout-link" style="border-top: 1px solid var(--light-gray); margin-top: 4px; padding-top: 14px;">
                    <i class="fas fa-sign-out-alt" style="color: var(--red);"></i> 
                    <span>${t.logoutMenuItem || 'Déconnexion'}</span>
                </a>
            `;
            
            userDropdown.innerHTML = menuItems;
        }
        
        resetInactivityTimer();
    } else {
        loginLink.style.display = 'inline-block';
        userInfo.style.display = 'none';
        disableProtectedLinks();
        if (roleMenuContainer) {
            roleMenuContainer.innerHTML = '';
        }
        if (inactivityTimer) {
            clearTimeout(inactivityTimer);
            inactivityTimer = null;
        }
    }
}

// ==================== 保护链接管理 ====================
function disableProtectedLinks() {
    document.querySelectorAll('.protected-link').forEach(link => {
        link.classList.add('disabled');
        const newLink = link.cloneNode(true);
        link.parentNode.replaceChild(newLink, link);
        newLink.addEventListener('click', (e) => {
            e.preventDefault();
            showToast(
                translations[currentLang].loginRequired,
                translations[currentLang].loginRequiredMessage,
                'warning'
            );
            openLoginModal();
        });
    });
}

function enableProtectedLinks(user) {
    document.querySelectorAll('.protected-link').forEach(link => {
        link.classList.remove('disabled');
        const page = link.dataset.page;
        const href = link.dataset.href;
        const needsUserInfo = link.dataset.needsUserinfo === 'true';
        const newLink = link.cloneNode(true);
        link.parentNode.replaceChild(newLink, link);
        newLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (needsUserInfo) {
                const token = generatePageToken(page, user);
                window.location.href = href + '?token=' + token + '&type=' + user.type;
            } else {
                window.location.href = href;
            }
        });
    });
}

// ==================== 模态框 ====================
function openLoginModal() {
    document.getElementById('loginModal').classList.add('show');
}

function closeLoginModal() {
    document.getElementById('loginModal').classList.remove('show');
    document.getElementById('loginForm').reset();
    document.getElementById('loginError').style.display = 'none';
}

async function handleLogin(event) {
    event.preventDefault();
    const name = document.getElementById('loginName').value;
    const password = document.getElementById('loginPassword').value;
    const errorDiv = document.getElementById('loginError');
    const errorMessageSpan = document.getElementById('errorMessage');
    const loginBtn = document.getElementById('loginBtn');
    errorDiv.style.display = 'none';
    loginBtn.disabled = true;
    loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + (currentLang === 'fr' ? 'Connexion...' : '登录中...');
    try {
        const student = await window.supabaseAuth.validateStudent(name, password);
        if (!student) {
            errorMessageSpan.textContent = translations[currentLang].errorMessage;
            errorDiv.style.display = 'flex';
            loginBtn.disabled = false;
            loginBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> ' + translations[currentLang].loginBtnText;
            return;
        }
        const accessCheck = window.supabaseAuth.checkAccess(student);
        if (!accessCheck.valid) {
            errorMessageSpan.textContent = currentLang === 'fr' 
                ? 'Votre compte a expiré. Veuillez contacter l\'association.' 
                : '您的账户已过期，请联系协会。';
            errorDiv.style.display = 'flex';
            loginBtn.disabled = false;
            loginBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> ' + translations[currentLang].loginBtnText;
            return;
        }
        const userData = {
            id: student.id,
            name: student.name,
            type: student.type || 'etudiant',
            role: student.role || 'user',
            expiryDate: student.timer,
            accessValid: accessCheck.valid,
            daysLeft: accessCheck.daysLeft
        };
        sessionStorage.setItem('currentUser', JSON.stringify(userData));
        closeLoginModal();
        initAuthUI();
        showToast(
            currentLang === 'fr' ? 'Connexion réussie' : '登录成功',
            currentLang === 'fr' ? `Bienvenue ${userData.name}` : `欢迎 ${userData.name}`,
            'success'
        );
    } catch (error) {
        console.error('登录错误:', error);
        errorMessageSpan.textContent = currentLang === 'fr' 
            ? 'Une erreur est survenue. Veuillez réessayer.' 
            : '发生错误，请重试。';
        errorDiv.style.display = 'flex';
    } finally {
        loginBtn.disabled = false;
        loginBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> ' + translations[currentLang].loginBtnText;
    }
}

function showProfileModal() {
    const user = getCurrentUser();
    if (!user) return;
    document.getElementById('profileType').value = user.type;
    document.getElementById('profileExpiry').value = user.expiryDate ? 
        new Date(user.expiryDate).toLocaleDateString(currentLang === 'fr' ? 'fr-FR' : 'zh-CN') : 
        (currentLang === 'fr' ? 'Illimité' : '无限期');
    document.getElementById('profileUsername').value = user.name;
    document.getElementById('profileModal').classList.add('show');
    document.getElementById('userDropdown').classList.remove('show');
}

function closeProfileModal() {
    document.getElementById('profileModal').classList.remove('show');
    document.getElementById('profileForm').reset();
    document.getElementById('profileError').style.display = 'none';
    document.getElementById('profileSuccess').style.display = 'none';
}

async function updateProfile(event) {
    event.preventDefault();
    const user = getCurrentUser();
    if (!user) return;
    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorDiv = document.getElementById('profileError');
    const errorMessage = document.getElementById('profileErrorMessage');
    const successDiv = document.getElementById('profileSuccess');
    if (newPassword.length < 6) {
        errorDiv.style.display = 'flex';
        errorMessage.textContent = currentLang === 'fr' ? 
            'Le mot de passe doit contenir au moins 6 caractères' : 
            '密码至少需要6个字符';
        return;
    }
    if (newPassword !== confirmPassword) {
        errorDiv.style.display = 'flex';
        errorMessage.textContent = translations[currentLang].passwordMismatch;
        return;
    }
    const result = await updateStudentPassword(user.id, currentPassword, newPassword);
    if (result.success) {
        successDiv.style.display = 'flex';
        errorDiv.style.display = 'none';
        setTimeout(() => {
            closeProfileModal();
        }, 1500);
    } else {
        errorDiv.style.display = 'flex';
        errorMessage.textContent = result.message === 'Mot de passe actuel incorrect' ?
            translations[currentLang].currentPasswordError : result.message;
    }
}

function toggleUserMenu() {
    document.getElementById('userDropdown').classList.toggle('show');
}

function logout() {
    logoutUser();
}

// ==================== 汉堡菜单 ====================
function initHamburger() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navLinks = document.getElementById('navLinks');
    if (hamburgerBtn && navLinks) {
        hamburgerBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
            if (navLinks.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
                document.body.classList.add('menu-open');
            } else {
                document.body.style.overflow = '';
                document.body.classList.remove('menu-open');
            }
        });
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 1024) {
                    hamburgerBtn.classList.remove('active');
                    navLinks.classList.remove('active');
                    document.body.style.overflow = '';
                    document.body.classList.remove('menu-open');
                }
            });
        });
        document.addEventListener('click', function(e) {
            if (window.innerWidth <= 1024 && 
                navLinks.classList.contains('active') && 
                !navLinks.contains(e.target) && 
                !hamburgerBtn.contains(e.target)) {
                hamburgerBtn.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
                document.body.classList.remove('menu-open');
            }
        });
        window.addEventListener('resize', function() {
            if (window.innerWidth > 1024) {
                hamburgerBtn.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
                document.body.classList.remove('menu-open');
            }
        });
    }
}

// ==================== FAQ ====================
function initFAQ() {
    document.querySelectorAll('.faq-item').forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('active');
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                if (otherItem !== this && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });
}

// ==================== 语言切换 ====================
function switchLanguage(lang) {
    currentLang = lang;
    
    document.getElementById('langFr').classList.toggle('active', lang === 'fr');
    document.getElementById('langZh').classList.toggle('active', lang === 'zh');
    
    const data = translations[lang];
    
    for (const [key, value] of Object.entries(data)) {
        const element = document.getElementById(key);
        if (element) {
            if (key.includes('Btn') || key.includes('Info') || key.includes('Title') || 
                key.includes('Desc') || key.includes('Text') || key.includes('Password') ||
                key.includes('Subtitle') || key.includes('Message') || key.includes('Help')) {
                element.innerHTML = value;
            } else {
                element.textContent = value;
            }
        }
    }
    
    fixTestButtons();
    toggleFAQAnswers(lang);
    
    // 更新下拉菜单文本
    const user = getCurrentUser();
    if (user) {
        const t = translations[currentLang];
        const allSpans = document.querySelectorAll('.user-dropdown span');
        allSpans.forEach(span => {
            const parent = span.closest('a');
            if (!parent) return;
            const html = parent.innerHTML;
            if (html.includes('fa-user-cog')) {
                span.textContent = t.profileMenuItem || 'Mon profil';
            } else if (html.includes('fa-chart-line')) {
                span.textContent = t.learningProgressMenuItem || '📊 Mon apprentissage';
            } else if (html.includes('fa-sign-out-alt')) {
                span.textContent = t.logoutMenuItem || 'Déconnexion';
            } else if (html.includes('fa-shield-alt')) {
                span.textContent = t.adminSpace || 'Administration';
            } else if (html.includes('fa-chalkboard-user')) {
                span.textContent = t.teacherSpace || 'Espace intervenant';
            } else if (html.includes('fa-user-graduate')) {
                span.textContent = t.studentSpace || 'Espace étudiant';
            }
        });
    }
            // 更新教学评价标题
        const feedbackTitle = document.getElementById('feedbackShowcaseTitle');
        if (feedbackTitle) {
            feedbackTitle.textContent = data.feedbackShowcaseTitle || '⭐ Avis des étudiants';
        }
        const feedbackSubtitle = document.getElementById('feedbackShowcaseSubtitle');
        if (feedbackSubtitle) {
            feedbackSubtitle.textContent = data.feedbackShowcaseSubtitle || 'Ce que nos étudiants pensent de nos formations';
        }
    
    // 更新登录按钮
    const navLogin = document.getElementById('navLogin');
    if (navLogin) {
        const span = navLogin.querySelector('span');
        if (span) {
            span.textContent = data.navLoginText || (lang === 'fr' ? 'Connexion' : '登录');
        }
    }
    
    // 更新导航栏
    const navSituation = document.getElementById('navSituation');
    if (navSituation) {
        navSituation.textContent = data.navSituation || (lang === 'fr' ? 'Mises en situation' : '情景题专项');
    }
    
    const footerSituationLink = document.getElementById('footerSituationLink');
    if (footerSituationLink) {
        footerSituationLink.textContent = data.footerSituationLink || (lang === 'fr' ? 'Mises en situation' : '情景题专项');
    }
    
    // 重新加载 KPI 和评价
    loadStats();
    loadFeedbacks();
    
    console.log(`🌐 Langue: ${lang === 'fr' ? 'Français' : '中文'}`);
}

// ==================== 修复测试按钮 ====================
function fixTestButtons() {
    const freeBtn = document.getElementById('freeTestBtn');
    if (freeBtn) {
        freeBtn.innerHTML = currentLang === 'fr' 
            ? '<i class="fas fa-play-circle"></i> Commencer le test'
            : '<i class="fas fa-play-circle"></i> 开始测试';
    }
    const annalesBtn = document.getElementById('annalesTestBtn');
    if (annalesBtn) {
        annalesBtn.innerHTML = currentLang === 'fr'
            ? '<i class="fas fa-play-circle"></i> Commencer le test'
            : '<i class="fas fa-play-circle"></i> 开始测试';
    }
    const studentBtn = document.getElementById('studentTestBtn');
    if (studentBtn) {
        studentBtn.innerHTML = currentLang === 'fr'
            ? '<i class="fas fa-play-circle"></i> Commencer le test'
            : '<i class="fas fa-play-circle"></i> 开始测试';
    }
    const situationBtn = document.querySelector('.situation-btn');
    if (situationBtn) {
        situationBtn.innerHTML = currentLang === 'fr'
            ? '<i class="fas fa-play-circle"></i> Commencer le test'
            : '<i class="fas fa-play-circle"></i> 开始测试';
    }
    const heroBtn = document.getElementById('heroBtn');
    if (heroBtn) {
        heroBtn.textContent = currentLang === 'fr' 
            ? 'Commencer maintenant'
            : '立即开始';
    }
}

// ==================== 切换FAQ回答 ====================
function toggleFAQAnswers(lang) {
    const faqContainers = document.querySelectorAll('.faq-answer > div');
    faqContainers.forEach(container => {
        if (lang === 'fr') {
            container.style.display = container.id && container.id.includes('Fr') ? 'block' : 'none';
        } else {
            container.style.display = container.id && container.id.includes('Zh') ? 'block' : 'none';
        }
    });
}

// ==================== 教学评价功能 ====================
async function loadFeedbacks() {
    const listContainer = document.getElementById('feedbackList');
    if (!listContainer) return;
    
    try {
        const supabase = window.supabaseAuth.getSupabaseClient();
        
        const { data, error } = await supabase
            .from('student_feedback')
            .select('*')
            .eq('is_public', true)
            .order('created_at', { ascending: false });
        
        if (error) throw error;
        
        allFeedbacks = data || [];
        feedbackDisplayCount = 5;
        renderFeedbacks();
        updateFeedbackCount();
        
    } catch (error) {
        console.error('加载评价失败:', error);
        listContainer.innerHTML = `
            <div class="feedback-empty">
                <i class="fas fa-exclamation-triangle" style="color: rgba(255,255,255,0.3);"></i>
                <h3>${currentLang === 'fr' ? 'Erreur de chargement' : '加载失败'}</h3>
                <p>${currentLang === 'fr' ? 'Impossible de charger les évaluations' : '无法加载评价'}</p>
            </div>
        `;
    }
}

function renderFeedbacks() {
    const listContainer = document.getElementById('feedbackList');
    const loadMoreBtn = document.getElementById('loadMoreFeedbackBtn');
    
    if (!listContainer) return;
    
    const t = translations[currentLang];
    const displayFeedbacks = allFeedbacks.slice(0, feedbackDisplayCount);
    
    if (displayFeedbacks.length === 0) {
        listContainer.innerHTML = `
            <div class="feedback-empty">
                <i class="fas fa-star" style="color: rgba(255,255,255,0.2);"></i>
                <h3>${t.feedbackEmptyTitle || 'Aucun avis'}</h3>
                <p>${t.feedbackEmptyText || 'Soyez le premier à laisser un avis !'}</p>
            </div>
        `;
        if (loadMoreBtn) loadMoreBtn.style.display = 'none';
        return;
    }
    
    let html = '';
    displayFeedbacks.forEach(fb => {
        const avg = fb.total_score || 0;
        const fullStars = Math.round(avg);
        let starsHtml = '';
        for (let i = 1; i <= 5; i++) {
            starsHtml += i <= fullStars ? '★' : '☆';
        }
        
        // 考试类型标签
        let examLabel = fb.exam_type || '';
        let examClass = '';
        if (examLabel === 'carte_resident_10ans') {
            examLabel = currentLang === 'fr' ? 'Carte 10 ans' : '十年居留';
            examClass = 'type-resident';
        } else if (examLabel === 'carte_sejour_4ans') {
            examLabel = currentLang === 'fr' ? 'Carte 2-4 ans' : '多年居留';
            examClass = 'type-sejour';
        } else if (examLabel === 'nationalite_francaise') {
            examLabel = currentLang === 'fr' ? 'Nationalité' : '法国国籍';
            examClass = 'type-nationalite';
        }
        
        const displayName = fb.is_public ? fb.student_name : (currentLang === 'fr' ? 'Anonyme' : '匿名');
        const isAnonymous = !fb.is_public;
        
        html += `
            <div class="feedback-card">
                <div class="feedback-card-header">
                    <div class="feedback-card-name">
                        ${escapeHtml(displayName)}
                        ${isAnonymous ? `<span class="badge-anonymous">${t.feedbackAnonymous || 'Anonyme'}</span>` : ''}
                    </div>
                    <div class="feedback-card-score">
                        <span class="total">${avg.toFixed(1)}</span>
                        <span class="stars">${starsHtml}</span>
                    </div>
                </div>
                <div class="feedback-card-meta">
                    ${examLabel ? `<span class="badge-exam ${examClass}">${t.feedbackExamType || 'Examen'}: ${examLabel}</span>` : ''}
                    ${fb.exam_score !== null && fb.exam_score !== undefined ? `<span>📝 ${t.feedbackScore || 'Score'}: ${fb.exam_score}/40</span>` : ''}
                    <span>📅 ${new Date(fb.created_at).toLocaleDateString(currentLang === 'fr' ? 'fr-FR' : 'zh-CN')}</span>
                </div>
                ${fb.comment ? `
                    <div class="feedback-card-comment">
                        <i class="fas fa-quote-left"></i>
                        ${escapeHtml(fb.comment)}
                    </div>
                ` : ''}
            </div>
        `;
    });
    
    listContainer.innerHTML = html;
    
    // 显示/隐藏加载更多按钮
    if (loadMoreBtn) {
        if (feedbackDisplayCount < allFeedbacks.length) {
            loadMoreBtn.style.display = 'block';
            const span = loadMoreBtn.querySelector('span');
            if (span) {
                span.textContent = t.loadMoreText || 'Voir plus d\'avis';
            }
        } else {
            loadMoreBtn.style.display = 'none';
        }
    }
}

function loadMoreFeedback() {
    feedbackDisplayCount += FEEDBACK_INCREMENT;
    renderFeedbacks();
}

function updateFeedbackCount() {
    const countEl = document.getElementById('feedbackCount');
    const t = translations[currentLang];
    if (countEl) {
        countEl.textContent = `${allFeedbacks.length} ${t.feedbackCountLabel || 'avis'}`;
    }
}

// ==================== 平滑滚动 ====================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==================== 窗口大小变化 ====================
function initResizeHandler() {
    window.addEventListener('resize', function() {
        if (window.innerWidth > 1024) {
            const hamburgerBtn = document.getElementById('hamburgerBtn');
            const navLinks = document.getElementById('navLinks');
            if (hamburgerBtn && navLinks) {
                hamburgerBtn.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });
}

// ==================== PWA功能 ====================
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/service-worker.js')
                .catch(error => {
                    console.log('Service Worker注册失败:', error);
                });
        });
    }
}

function copyWechat() {
    const wechatText = 'qfparis';
    navigator.clipboard.writeText(wechatText).then(() => {
        showToast(
            currentLang === 'fr' ? 'WeChat copié' : '微信号已复制',
            currentLang === 'fr' ? 'ID WeChat copié dans le presse-papier' : '微信号已复制到剪贴板',
            'success'
        );
    }).catch(() => {
        showToast(
            currentLang === 'fr' ? 'Erreur' : '复制失败',
            currentLang === 'fr' ? 'Impossible de copier' : '无法复制微信号',
            'error'
        );
    });
}

function checkPWAInstallable() {
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        document.getElementById('pwa-install-button').style.display = 'block';
    });
    if (isIOS && !isStandalone) {
        document.getElementById('pwa-install-button').style.display = 'block';
    }
}

function showInstallGuide() {
    document.getElementById('pwa-install-guide').style.display = 'flex';
    showInstructions(isIOS ? 'ios' : 'android');
}

function closeInstallGuide() {
    document.getElementById('pwa-install-guide').style.display = 'none';
}

function showInstructions(device) {
    document.getElementById('iosBtn').classList.toggle('active', device === 'ios');
    document.getElementById('androidBtn').classList.toggle('active', device === 'android');
    document.getElementById('ios-instructions').classList.toggle('active', device === 'ios');
    document.getElementById('android-instructions').classList.toggle('active', device === 'android');
}

function installPWA() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                document.getElementById('pwa-install-button').style.display = 'none';
                closeInstallGuide();
            }
            deferredPrompt = null;
        });
    } else {
        showInstallGuide();
    }
}

function updateOnlineStatus() {
    const offlineNotice = document.getElementById('offline-notice');
    if (offlineNotice) {
        offlineNotice.style.display = navigator.onLine ? 'none' : 'block';
    }
}

// ==================== 加载统计数据 ====================
async function loadStats() {
    try {
        const supabase = window.supabaseAuth.getSupabaseClient();
        
        // 获取所有用户总数
        const { count: totalCount, error: totalError } = await supabase
            .from('students')
            .select('*', { count: 'exact', head: true });
        if (totalError) throw totalError;
        
        // 一次性通过率 = (学生总数 - 2) / 学生总数 * 100
        const studentCount = totalCount || 0;
        const passRate = studentCount > 0 ? ((studentCount - 2) / studentCount * 100) : 0;
        const passRateDisplay = Math.round(passRate);
        
        // 获取评价平均分
        let avgScore = 0;
        try {
            const { data: feedbackData, error: feedbackError } = await supabase
                .from('student_feedback')
                .select('total_score');
            if (!feedbackError && feedbackData && feedbackData.length > 0) {
                const total = feedbackData.reduce((sum, f) => sum + (f.total_score || 0), 0);
                avgScore = total / feedbackData.length;
            }
        } catch (e) {
            console.log('评价数据加载跳过');
        }
        
        // 更新 KPI
        const studentNumberEl = document.getElementById('statStudentNumber');
        const successRateEl = document.getElementById('statSuccessRate');
        const avgScoreEl = document.getElementById('fbAvgScoreStat');
        
        if (studentNumberEl) studentNumberEl.textContent = studentCount;
        if (successRateEl) successRateEl.textContent = passRateDisplay;
        if (avgScoreEl) avgScoreEl.textContent = avgScore.toFixed(1);
        
        console.log('📊 KPI加载成功:', { students: studentCount, passRate: passRateDisplay + '%', avgScore: avgScore.toFixed(1) });
        
    } catch (error) {
        console.error('加载统计数据失败:', error);
        const studentNumberEl = document.getElementById('statStudentNumber');
        const successRateEl = document.getElementById('statSuccessRate');
        const avgScoreEl = document.getElementById('fbAvgScoreStat');
        if (studentNumberEl) studentNumberEl.textContent = '0';
        if (successRateEl) successRateEl.textContent = '0';
        if (avgScoreEl) avgScoreEl.textContent = '0.0';
    }
}

// ==================== DOM加载完成 ====================
document.addEventListener('DOMContentLoaded', function() {
    switchLanguage('fr');
    
    const currentUser = getCurrentUser();
    if (currentUser && currentUser.expiryDate) {
        const expiryDate = new Date(currentUser.expiryDate);
        const today = new Date();
        if (expiryDate < today) {
            sessionStorage.removeItem('currentUser');
            console.log("页面加载时发现过期账户，已清除");
            setTimeout(() => {
                showToast(
                    'Compte expiré',
                    currentLang === 'fr' ? 'Votre compte a expiré. Veuillez vous reconnecter.' : '您的账户已过期，请重新登录。',
                    'error'
                );
            }, 500);
        }
    }
    
    initAuthUI();
    initHamburger();
    initFAQ();
    initSmoothScroll();
    initResizeHandler();
    registerServiceWorker();
    checkPWAInstallable();
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    updateOnlineStatus();
    
    document.addEventListener('click', function(e) {
        const dropdown = document.getElementById('userDropdown');
        const userInfo = document.getElementById('userInfo');
        if (dropdown && userInfo && !userInfo.contains(e.target)) {
            dropdown.classList.remove('show');
        }
    });
    
    loadStats();
    loadFeedbacks();
});

// ==================== 暴露全局函数 ====================
window.switchLanguage = switchLanguage;
window.openLoginModal = openLoginModal;
window.closeLoginModal = closeLoginModal;
window.handleLogin = handleLogin;
window.showProfileModal = showProfileModal;
window.closeProfileModal = closeProfileModal;
window.updateProfile = updateProfile;
window.toggleUserMenu = toggleUserMenu;
window.logout = logout;
window.showInstallGuide = showInstallGuide;
window.closeInstallGuide = closeInstallGuide;
window.showInstructions = showInstructions;
window.installPWA = installPWA;
window.copyWechat = copyWechat;
window.fixTestButtons = fixTestButtons;
window.toggleFAQAnswers = toggleFAQAnswers;
window.loadMoreFeedback = loadMoreFeedback;
window.loadFeedbacks = loadFeedbacks;