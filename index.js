
    // ==================== 自动登出功能变量 ====================
    let inactivityTimer;
    const INACTIVITY_LIMIT = 10 * 60 * 1000; // 10分钟无操作自动登出
    const CHECK_INTERVAL = 60 * 1000; // 每分钟检查一次页面是否关闭
    let lastActivityTime = Date.now();
    let pageCloseDetected = false;
    // ==================== 自动登出功能 ====================

// 重置计时器
function resetInactivityTimer() {
    if (!isAuthenticated()) return; // 未登录用户不处理
    
    lastActivityTime = Date.now();
    
    // 清除旧计时器
    if (inactivityTimer) {
        clearTimeout(inactivityTimer);
    }
    
    // 设置新计时器
    inactivityTimer = setTimeout(() => {
        handleAutoLogout('inactivity');
    }, INACTIVITY_LIMIT);
}

// 处理自动登出
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
    
    // 清除用户数据
    sessionStorage.removeItem('currentUser');
    
    // 更新UI
    const loginLink = document.getElementById('navLogin');
    const userInfo = document.getElementById('userInfo');
    if (loginLink) loginLink.style.display = 'inline-block';
    if (userInfo) userInfo.style.display = 'none';
    
    // 禁用保护链接
    disableProtectedLinks();
    
    // 显示提示
    showToast(
        currentLang === 'fr' ? 'Déconnexion automatique' : '自动登出',
        messages[reason],
        'warning'
    );
    
    // 关闭所有模态框
    closeLoginModal();
    closeProfileModal();
}

// 监听用户活动
function initActivityTracking() {
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
    
    events.forEach(event => {
        document.addEventListener(event, () => {
            if (isAuthenticated()) {
                resetInactivityTimer();
            }
        });
    });
    
    // 初始化计时器
    if (isAuthenticated()) {
        resetInactivityTimer();
    }
}

// 检测页面关闭/刷新
function initPageCloseDetection() {
    // 监听页面关闭/刷新
    window.addEventListener('beforeunload', function() {
        if (isAuthenticated()) {
            // 标记页面即将关闭
            pageCloseDetected = true;
        }
    });
    
    // 监听页面可见性变化（标签页切换）
    document.addEventListener('visibilitychange', function() {
        if (document.visibilityState === 'hidden' && isAuthenticated()) {
            // 标签页隐藏时，记录时间
            lastActivityTime = Date.now();
        } else if (document.visibilityState === 'visible' && isAuthenticated()) {
            // 标签页重新可见时，检查离开时间
            const timeAway = Date.now() - lastActivityTime;
            if (timeAway > INACTIVITY_LIMIT) {
                handleAutoLogout('inactivity');
            } else {
                resetInactivityTimer();
            }
        }
    });
    
    // 定期检查（防止某些情况漏掉）
    setInterval(() => {
        if (isAuthenticated()) {
            const timeSinceActivity = Date.now() - lastActivityTime;
            if (timeSinceActivity > INACTIVITY_LIMIT) {
                handleAutoLogout('inactivity');
            }
        }
    }, CHECK_INTERVAL);
}
    // 验证学生登录 - 直接调用已存在的函数
    async function validateStudent(name, password) {
        return await window.supabaseAuth.validateStudent(name, password);
    }

    // 更新学生密码
    async function updateStudentPassword(userId, currentPassword, newPassword) {
        try {
            const supabase = window.supabaseAuth.getSupabaseClient();
            
            // 先验证当前密码
            const { data: user, error: fetchError } = await supabase
                .from('students')
                .select('password')
                .eq('id', userId)
                .single();
            
            if (fetchError || !user) {
                return { success: false, message: 'Utilisateur non trouvé' };
            }
            
            // 验证当前密码
            if (user.password !== currentPassword) {
                return { success: false, message: 'Mot de passe actuel incorrect' };
            }
            
            // 更新密码
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

    // 检查访问权限
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
        // ==================== 变量 ====================
        let currentLang = 'fr';
        let deferredPrompt;
        let isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        let isAndroid = /Android/.test(navigator.userAgent);
        let isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;

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
            
            // 3秒后自动消失
            setTimeout(() => {
                const toastElement = document.getElementById(toastId);
                if (toastElement) toastElement.remove();
            }, 3000);
        }

        // ==================== 翻译 ====================
        const translations = {
            fr: {
                // Header
                mainTitle: "Examen Civique Français",
                mainSubtitle: "Association Mille Voiles / 千帆协会 - Préparation à l'examen civique obligatoire 2026",
                logoText: "Mille Voiles",
                 adminSpace: "Administration",
                teacherSpace: "Espace intervenant",
                studentSpace: "Espace étudiant",
                footerWechat: "WeChat: qfparis",

                        
                // Navigation
                navHome: "Accueil",
                navTests: "Tests en ligne",
                navThemes: "Thématiques",
                navPolicy: "Nouvelle politique",
                navFAQ: "FAQ",
                navContact: "Contact",
                navLoginText: "Connexion",
                navAdminText: "Administration",
                profileMenuItem: "Mon profil",
                logoutMenuItem: "Déconnexion",
                
                // Hero
                heroTitle: "Préparez-vous à l'examen civique 2026",
                heroText: "À partir du 1er janvier 2026, tous les étrangers souhaitant obtenir une carte de séjour pluriannuelle, une carte de résident ou la naturalisation française devront réussir un examen civique. Préparez-vous dès maintenant avec nos tests en ligne.",
                heroBtn: "Commencer maintenant",
                
                // Test Cards
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
                
                // Themes
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
                
                // Policy Content
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
                
                // FAQ Section
                faqTitle: "Questions fréquentes",
                faqSubtitle: "Trouvez rapidement des réponses à vos questions sur le nouvel examen civique",
                faq1Q: "Qui doit passer l'examen civique ?",
                faq2Q: "Combien de questions dans l'examen officiel ?",
                faq3Q: "L'examen civique remplace-t-il le test de langue ?",
                
                // Modals
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
                
                // Toast messages
                loginRequired: "Connexion requise",
                loginRequiredMessage: "Veuillez vous connecter pour accéder à cette ressource",
                
                // Footer
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
                
                // PWA
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
                offlineText: "Mode hors ligne - Vous pouvez continuer à utiliser l'application"
            },
            zh: {
                // Header
                mainTitle: "法国公民考试",
                mainSubtitle: "千帆协会 - 2026年强制性公民考试准备",
                logoText: "千帆协会",
                adminSpace: "管理后台",
                teacherSpace: "教师空间",
                studentSpace: "学生空间",
                footerWechat: "微信号: qfparis",
              
                // Navigation
                navHome: "首页",
                navTests: "在线测试",
                navThemes: "考试主题",
                navPolicy: "新政解读",
                navFAQ: "常见问题",
                navContact: "联系我们",
                navLoginText: "登录",
                navAdminText: "管理后台",
                profileMenuItem: "我的资料",
                logoutMenuItem: "退出登录",
                
                // Hero
                heroTitle: "为2026年公民考试做好准备",
                heroText: "从2026年1月1日起，所有希望获得多年居留卡、长期居留卡或法国国籍的外国人都必须通过一项公民考试。立即使用我们的在线测试开始准备。",
                heroBtn: "立即开始",
                
                // Test Cards
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
                
                // Themes
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
                
                // Policy Content
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
                
                // FAQ Section
                faqTitle: "常见问题",
                faqSubtitle: "快速找到关于新公民考试的问题答案",
                faq1Q: "谁必须参加公民考试？",
                faq2Q: "官方考试有多少道题？",
                faq3Q: "公民考试会取代语言测试吗？",
                
                // Modals
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
                
                // Toast messages
                loginRequired: "需要登录",
                loginRequiredMessage: "请登录后访问此资源",
                
                // Footer
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
                
                // PWA
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
                offlineText: "离线模式 - 您可以继续使用应用程序"
            }
        };

        // ==================== 认证函数 ====================
function getCurrentUser() {
    const userData = sessionStorage.getItem('currentUser');
    if (!userData) return null;
    
    try {
        const user = JSON.parse(userData);
        
        // 检查账户是否过期
        if (user.expiryDate) {
            const expiryDate = new Date(user.expiryDate);
            const today = new Date();
            
            if (expiryDate < today) {
                // 账户已过期，清除本地存储
                console.log("账户已过期，清除本地存储");
                sessionStorage.removeItem('currentUser');
                
                // 显示过期提示
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
        
        // 如果账户已过期，不允许登录
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
    
    // 清除计时器
    if (inactivityTimer) {
        clearTimeout(inactivityTimer);
        inactivityTimer = null;
    }
    
    window.location.reload();
}

     function generatePageToken(page, user) {
    // 计算过期时间戳（如果有timer）
    let expiryTimestamp = null;
    if (user.expiryDate) {
        expiryTimestamp = new Date(user.expiryDate).getTime();
    }
    
    const data = {
        page: page,
        userId: user.id,
        name: user.name || "",  // 添加用户名
        type: user.type,
        role: user.role || 'user',
        daysLeft: user.daysLeft,  // 添加剩余天数
        expiry: expiryTimestamp,  // 添加过期时间戳
        timestamp: Date.now()
    };
    
    // 先将对象转为JSON字符串，然后进行UTF-8编码，再用btoa
    const jsonString = JSON.stringify(data);
    const utf8String = encodeURIComponent(jsonString);
    return btoa(utf8String);
}

function initAuthUI() {
    const user = getCurrentUser();
    const loginLink = document.getElementById('navLogin');
    const userInfo = document.getElementById('userInfo');
    const welcomeMessage = document.getElementById('welcomeMessage');
    
    if (user) {
        loginLink.style.display = 'none';
        userInfo.style.display = 'flex';
        welcomeMessage.textContent = user.name;
        enableProtectedLinks(user);
        
        // 更新下拉菜单（管理员会看到 Administration 入口）
        updateRoleBasedMenu(user);
        
        resetInactivityTimer();
    } else {
        loginLink.style.display = 'inline-block';
        userInfo.style.display = 'none';
        disableProtectedLinks();
        
        if (inactivityTimer) {
            clearTimeout(inactivityTimer);
            inactivityTimer = null;
        }
    }
}
// 根据角色更新下拉菜单
function updateRoleBasedMenu(user) {
    const menuContainer = document.getElementById('roleBasedMenu');
    if (!menuContainer) return;
    
    menuContainer.innerHTML = '';
    if (!user) return;
    
    const userToken = generatePageToken('dashboard', user);
    const t = translations[currentLang];  // 获取当前语言翻译
    
    switch (user.role) {
        case 'admin':
            menuContainer.innerHTML = `
                <a href="admin.html?token=${userToken}" style="border-bottom: 1px solid var(--light-gray);">
                    <i class="fas fa-shield-alt"></i> <span>${t.adminSpace || 'Administration'}</span>
                </a>
            `;
            break;
        case 'teacher':
            menuContainer.innerHTML = `
                <a href="teacher.html?token=${userToken}" style="border-bottom: 1px solid var(--light-gray);">
                    <i class="fas fa-chalkboard-user"></i> <span>${t.teacherSpace || 'Espace intervenant'}</span>
                </a>
            `;
            break;
        case 'stu':
            menuContainer.innerHTML = `
                <a href="student.html?token=${userToken}" style="border-bottom: 1px solid var(--light-gray);">
                    <i class="fas fa-user-graduate"></i> <span>${t.studentSpace || 'Espace étudiant'}</span>
                </a>
            `;
            break;
        default:
            menuContainer.innerHTML = '';
            break;
    }
}

// ==================== 保护链接管理 ====================
function disableProtectedLinks() {
    document.querySelectorAll('.protected-link').forEach(link => {
        link.classList.add('disabled');
        // 移除原有事件，添加阻止点击
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
    
    // 重置错误提示
    errorDiv.style.display = 'none';
    
    // 显示加载状态
    loginBtn.disabled = true;
    loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + (currentLang === 'fr' ? 'Connexion...' : '登录中...');
    
    try {
        // 直接调用 validateStudent
        const student = await window.supabaseAuth.validateStudent(name, password);
        
        console.log('验证结果:', student);  // 调试：查看返回的数据
        
        if (!student) {
            errorMessageSpan.textContent = translations[currentLang].errorMessage;
            errorDiv.style.display = 'flex';
            loginBtn.disabled = false;
            loginBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> ' + translations[currentLang].loginBtnText;
            return;
        }
        
        // 检查账户是否过期
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
        
        // 保存用户信息到 sessionStorage
        const userData = {
            id: student.id,
            name: student.name,
            type: student.type || 'etudiant',
            role: student.role || 'user',     // 关键：确保 role 被保存
            expiryDate: student.timer,
            accessValid: accessCheck.valid,
            daysLeft: accessCheck.daysLeft
        };
        
        console.log('保存的用户数据:', userData);  // 调试：查看保存的数据
        
        sessionStorage.setItem('currentUser', JSON.stringify(userData));
        
        // 关闭登录模态框
        closeLoginModal();
        
        // 刷新界面UI
        initAuthUI();
        
        // 显示成功提示
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
            
            // 验证新密码长度
            if (newPassword.length < 6) {
                errorDiv.style.display = 'flex';
                errorMessage.textContent = currentLang === 'fr' ? 
                    'Le mot de passe doit contenir au moins 6 caractères' : 
                    '密码至少需要6个字符';
                return;
            }
            
            // 验证两次密码是否一致
            if (newPassword !== confirmPassword) {
                errorDiv.style.display = 'flex';
                errorMessage.textContent = translations[currentLang].passwordMismatch;
                return;
            }
            
            // 更新密码
            const result = await updateStudentPassword(user.id, currentPassword, newPassword);
            
            if (result.success) {
                successDiv.style.display = 'flex';
                errorDiv.style.display = 'none';
                
                // 更新本地存储的密码（虽然不存储密码，但为了完整性）
                // 实际上我们不需要存储密码在sessionStorage
                
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
            // 对于包含 HTML 标签的内容使用 innerHTML，否则使用 textContent
            if (key.includes('Btn') || key.includes('Info') || key.includes('Title') || key.includes('Desc') || key.includes('Text')) {
                element.innerHTML = value;
            } else {
                element.textContent = value;
            }
        }
    }
// 修复测试按钮的显示（确保图标和文字都正确）
function fixTestButtons() {
    // 免费测试按钮
    const freeBtn = document.getElementById('freeTestBtn');
    if (freeBtn) {
        if (currentLang === 'fr') {
            freeBtn.innerHTML = '<i class="fas fa-play-circle"></i> Commencer le test';
        } else {
            freeBtn.innerHTML = '<i class="fas fa-play-circle"></i> 开始测试';
        }
    }
    
    // 真题测试按钮
    const annalesBtn = document.getElementById('annalesTestBtn');
    if (annalesBtn) {
        if (currentLang === 'fr') {
            annalesBtn.innerHTML = '<i class="fas fa-play-circle"></i> Commencer le test';
        } else {
            annalesBtn.innerHTML = '<i class="fas fa-play-circle"></i> 开始测试';
        }
    }
    
    // 学员测试按钮
    const studentBtn = document.getElementById('studentTestBtn');
    if (studentBtn) {
        if (currentLang === 'fr') {
            studentBtn.innerHTML = '<i class="fas fa-play-circle"></i> Commencer le test';
        } else {
            studentBtn.innerHTML = '<i class="fas fa-play-circle"></i> 开始测试';
        }
    }
}

// 特殊处理：确保所有测试按钮的图标和文字正确显示
fixTestButtons();
    
    // 切换FAQ回答的显示
    toggleFAQAnswers(lang);
    
    // ========== 新增：刷新下拉菜单翻译 ==========
    const user = getCurrentUser();
    if (user) {
        updateRoleBasedMenu(user);
    }
}
        function toggleFAQAnswers(lang) {
            const faqContainers = document.querySelectorAll('.faq-answer > div');
            
            faqContainers.forEach(container => {
                if (lang === 'fr') {
                    container.style.display = container.id.includes('Fr') ? 'block' : 'none';
                } else {
                    container.style.display = container.id.includes('Zh') ? 'block' : 'none';
                }
            });
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
        // 复制微信号
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
        document.addEventListener('DOMContentLoaded', function() {
    switchLanguage('fr');
    
    // 强制检查用户状态，如果过期立即清除
    const currentUser = getCurrentUser();
    if (currentUser && currentUser.expiryDate) {
        const expiryDate = new Date(currentUser.expiryDate);
        const today = new Date();
        if (expiryDate < today) {
            sessionStorage.removeItem('currentUser');
            console.log("页面加载时发现过期账户，已清除");
            
            // 显示提示
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
    
    // 点击其他地方关闭用户菜单
    document.addEventListener('click', function(e) {
        const dropdown = document.getElementById('userDropdown');
        const userInfo = document.getElementById('userInfo');
        if (dropdown && userInfo && !userInfo.contains(e.target)) {
            dropdown.classList.remove('show');
        }
    });
});

// 暴露全局函数
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
   