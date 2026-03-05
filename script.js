// 禁止右键和快捷键
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && ['c', 'u', 's', 'x', 'v', 'a'].includes(e.key.toLowerCase())) {
        e.preventDefault();
    }
    if (e.key === 'F12') {
        e.preventDefault();
    }
});

// 汉堡菜单功能
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navLinks = document.getElementById('navLinks');

if (hamburgerBtn && navLinks) {
    // 打开/关闭菜单
    hamburgerBtn.addEventListener('click', function() {
        hamburgerBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // 点击导航链接后关闭菜单（移动设备）
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 1024) {
                hamburgerBtn.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });
    
    // 点击菜单外部关闭菜单
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 1024 && 
            navLinks.classList.contains('active') && 
            !navLinks.contains(e.target) && 
            !hamburgerBtn.contains(e.target)) {
            hamburgerBtn.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
    
    // 按ESC键关闭菜单
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            hamburgerBtn.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
}

// 语言切换数据
const translations = {
    fr: {
        // Header
        mainTitle: "Examen Civique Français",
        mainSubtitle: "Association Mille Voiles / 千帆协会 - Préparation à l'examen civique obligatoire 2026",
        logoText: "Mille Voiles",
        
        // Navigation
        navHome: "Accueil",
        navTests: "Tests en ligne",
        navThemes: "Thématiques",
        navPolicy: "Nouvelle politique",
        navFAQ: "FAQ",
        navContact: "Contact",
        adminBtn: '<i class="fas fa-user-shield"></i> Administration',
        
        // Hero
        heroTitle: "Préparez-vous à l'examen civique 2026",
        heroText: "À partir du 1er janvier 2026, tous les étrangers souhaitant obtenir une carte de séjour pluriannuelle, une carte de résident ou la naturalisation française devront réussir un examen civique. Préparez-vous dès maintenant avec nos tests en ligne.",
        heroBtn: "Commencer maintenant",
        
        // Test Cards
        testsTitle: "Choisissez votre test",
        testsSubtitle: "Trois options adaptées à vos besoins : test gratuit, entraînement aux annales ou test complet pour nos étudiants",
        
        freeTestTitle: "Test Gratuit",
        freeTestPrice: "GRATUIT",
        freeTestDesc: "Évaluation de niveau",
        feature1: "20 questions adaptatives",
        feature2: "Durée : 20 minutes",
        feature3: "Correction immédiate",
        feature4: "Recommandation de cours",
        feature5: "Sans engagement",
        passwordInfoFree: '<i class="fas fa-key"></i> <strong>Accès protégé :</strong> Pour obtenir le mot de passe, contactez-nous à <a href="mailto:2025qianfan@gmail.com">2025qianfan@gmail.com</a>',
        freeTestBtn: '<i class="fas fa-play-circle"></i> Commencer le test gratuit',
        
        // Annales / 真题训练
        annalesTestTitle: "Entraînement aux annales",
        annalesTestPrice: "ACCÈS LIMITÉ",
        annalesTestDesc: "Questions issues des annales officielles",
        annalesFeature1: "20 questions d'annales officielles",
        annalesFeature2: "Durée : 30 minutes",
        annalesFeature3: "Correction détaillée",
        annalesFeature4: "Statistiques de réussite",
        annalesFeature5: "Renouvelé mensuellement",
        passwordInfoAnnales: '<i class="fas fa-key"></i> <strong>Accès protégé :</strong> Mot de passe disponible après inscription (contactez-nous)',
        annalesTestBtn: '<i class="fas fa-history"></i> Accéder aux annales',
        
        studentTestTitle: "Test Étudiant",
        studentTestPrice: "ACCÈS LIMITÉ",
        studentTestDesc: "Pour nos étudiants inscrits",
        feature6: "40 questions conformes",
        feature7: "Durée : 45 minutes",
        feature8: "Simulation réelle",
        feature9: "2000 questions originales + questions types examen",
        feature10: "Accès à la plateforme",
        passwordInfoStudent: '<i class="fas fa-lock"></i> <strong>Accès réservé :</strong> Mot de passe fourni après inscription aux cours de l\'association',
        studentTestBtn: '<i class="fas fa-lock"></i> Accéder au test étudiant',
        
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
        footerCopyright: "© 2025 Association Mille Voiles / 千帆协会 - Tous droits réservés."
    },
    zh: {
        // Header
        mainTitle: "法国公民考试",
        mainSubtitle: "千帆协会 / Association Mille Voiles - 2026年强制性公民考试准备",
        logoText: "千帆协会",
        
        // Navigation
        navHome: "首页",
        navTests: "在线测试",
        navThemes: "考试主题",
        navPolicy: "新政解读",
        navFAQ: "常见问题",
        navContact: "联系我们",
        adminBtn: '<i class="fas fa-user-shield"></i> 管理后台',
        
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
        freeTestBtn: '<i class="fas fa-play-circle"></i> 开始免费测试',
        
        // Annales / 真题训练
        annalesTestTitle: "真题训练",
        annalesTestPrice: "限时访问",
        annalesTestDesc: "学员反馈真题模拟",
        annalesFeature1: "20道官方真题",
        annalesFeature2: "即时批改",
        annalesFeature3: "详细解析",
        annalesFeature4: "通过率统计",
        annalesFeature5: "每月更新",
        passwordInfoAnnales: '<i class="fas fa-key"></i> <strong>受保护访问：</strong> 报名后获取密码（联系我们）',
        annalesTestBtn: '<i class="fas fa-history"></i> 进入真题训练',
        
        studentTestTitle: "学员测试",
        studentTestPrice: "限时访问",
        studentTestDesc: "供我们已注册学员使用",
        feature6: "40道符合标准的题目",
        feature7: "时长：45分钟",
        feature8: "真实模拟",
        feature9: "2000道原题加模拟试题",
        feature10: "访问学习平台",
        passwordInfoStudent: '<i class="fas fa-lock"></i> <strong>受限访问：</strong> 报名参加协会课程后提供密码',
        studentTestBtn: '<i class="fas fa-lock"></i> 进入学员测试',
        
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
        footerCopyright: "© 2025 千帆协会 / Association Mille Voiles - 版权所有。"
    }
};

// 当前语言
let currentLang = 'fr';

// 切换语言函数
function switchLanguage(lang) {
    currentLang = lang;
    
    // 更新语言按钮状态
    document.getElementById('langFr').classList.toggle('active', lang === 'fr');
    document.getElementById('langZh').classList.toggle('active', lang === 'zh');
    
    // 获取翻译数据
    const data = translations[lang];
    
    // 遍历所有数据项并更新页面
    for (const [key, value] of Object.entries(data)) {
        const element = document.getElementById(key);
        if (element) {
            if (key.includes('Btn') || key.includes('Info') || key.includes('Title') || key.includes('Desc') || key.includes('Text')) {
                element.innerHTML = value;
            } else {
                element.textContent = value;
            }
        }
    }
    
    // 切换FAQ回答的显示
    toggleFAQAnswers(lang);
}

// 切换FAQ回答显示的函数
function toggleFAQAnswers(lang) {
    const faqContainers = document.querySelectorAll('.faq-answer > div');
    
    faqContainers.forEach(container => {
        if (lang === 'fr') {
            if (container.id.includes('Fr')) {
                container.style.display = 'block';
            } else if (container.id.includes('Zh')) {
                container.style.display = 'none';
            }
        } else {
            if (container.id.includes('Fr')) {
                container.style.display = 'none';
            } else if (container.id.includes('Zh')) {
                container.style.display = 'block';
            }
        }
    });
}

// 页面初始化
document.addEventListener('DOMContentLoaded', function() {
    // 设置默认语言
    switchLanguage('fr');
    
    // FAQ功能
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('active');
            
            faqItems.forEach(otherItem => {
                if (otherItem !== this && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });
    
    // 平滑滚动
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
    
    // 窗口大小变化时，如果大于1024px，确保汉堡菜单关闭
    window.addEventListener('resize', function() {
        if (window.innerWidth > 1024) {
            hamburgerBtn.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});

// PWA功能代码
let deferredPrompt;
let isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
let isAndroid = /Android/.test(navigator.userAgent);
let isStandalone = window.matchMedia('(display-mode: standalone)').matches || 
                   window.navigator.standalone || 
                   document.referrer.includes('android-app://');

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    // 注册Service Worker
    registerServiceWorker();
    
    // 检查是否已安装
    if (!isStandalone) {
        // 检测是否支持PWA安装
        if ('serviceWorker' in navigator && 'PushManager' in window) {
            // 延迟显示安装按钮，让页面先加载
            setTimeout(() => {
                checkPWAInstallable();
            }, 3000);
        }
    }
    
    // 检测网络状态
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    updateOnlineStatus();
    
    // 添加多语言支持到PWA部分
    updatePWAStrings();
});

// 注册Service Worker
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/service-worker.js')
                .then(registration => {
                    console.log('Service Worker enregistré avec succès:', registration);
                    
                    // 检查更新
                    registration.addEventListener('updatefound', () => {
                        const newWorker = registration.installing;
                        console.log('Nouveau Service Worker trouvé:', newWorker);
                    });
                })
                .catch(error => {
                    console.log('Échec de l\'enregistrement du Service Worker:', error);
                });
        });
    }
}

// 检查是否可以安装PWA
function checkPWAInstallable() {
    // 监听beforeinstallprompt事件
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        
        // 显示安装按钮
        showInstallButton();
    });
    
    // 如果是iOS，总是显示安装按钮
    if (isIOS && !isStandalone) {
        showInstallButton();
    }
}

// 显示安装按钮
function showInstallButton() {
    const installButton = document.getElementById('pwa-install-button');
    if (installButton) {
        installButton.style.display = 'block';
    }
}

// 显示安装指引
function showInstallGuide() {
    const installGuide = document.getElementById('pwa-install-guide');
    if (installGuide) {
        installGuide.style.display = 'flex';
        
        // 根据设备类型显示相应指引
        if (isIOS) {
            showInstructions('ios');
        } else if (isAndroid) {
            showInstructions('android');
        }
        
        // 如果是支持beforeinstallprompt的浏览器，显示安装按钮
        const installPwaBtn = document.getElementById('installPwaBtn');
        if (deferredPrompt && installPwaBtn) {
            installPwaBtn.style.display = 'inline-block';
        }
    }
}

// 关闭安装指引
function closeInstallGuide() {
    const installGuide = document.getElementById('pwa-install-guide');
    if (installGuide) {
        installGuide.style.display = 'none';
    }
}

// 显示安装指引步骤
function showInstructions(device) {
    // 更新设备选择按钮
    const iosBtn = document.getElementById('iosBtn');
    const androidBtn = document.getElementById('androidBtn');
    const iosInstructions = document.getElementById('ios-instructions');
    const androidInstructions = document.getElementById('android-instructions');
    
    if (device === 'ios') {
        iosBtn.classList.add('active');
        androidBtn.classList.remove('active');
        iosInstructions.classList.add('active');
        androidInstructions.classList.remove('active');
    } else {
        iosBtn.classList.remove('active');
        androidBtn.classList.add('active');
        iosInstructions.classList.remove('active');
        androidInstructions.classList.add('active');
    }
}

// 安装PWA
function installPWA() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('Utilisateur a accepté l\'installation PWA');
                // 隐藏安装按钮
                const installButton = document.getElementById('pwa-install-button');
                if (installButton) {
                    installButton.style.display = 'none';
                }
                closeInstallGuide();
            } else {
                console.log('Utilisateur a refusé l\'installation PWA');
            }
            deferredPrompt = null;
        });
    } else {
        // 对于不支持beforeinstallprompt的设备，显示指引
        showInstallGuide();
    }
}

// 更新在线状态
function updateOnlineStatus() {
    const offlineNotice = document.getElementById('offline-notice');
    if (offlineNotice) {
        if (!navigator.onLine) {
            offlineNotice.style.display = 'block';
        } else {
            offlineNotice.style.display = 'none';
        }
    }
}

// 更新PWA相关字符串的多语言支持
function updatePWAStrings() {
    // 这个函数会被语言切换功能调用
    const pwaTranslations = {
        fr: {
            installBtnText: "Installer l'app",
            installGuideTitle: "Installer l'application",
            iosStep1: "Ouvrez Safari",
            iosStep1Desc: "Accédez à cette page via Safari sur votre iPhone",
            iosStep2: "Cliquez sur \"Partager\"",
            iosStep2Desc: "Appuyez sur l'icône de partage en bas de l'écran",
            iosStep3: "Ajouter à l'écran d'accueil",
            iosStep3Desc: "Faites défiler et sélectionnez \"Sur l'écran d'accueil\"",
            iosStep4: "Confirmer l'installation",
            iosStep4Desc: "Appuyez sur \"Ajouter\" en haut à droite",
            androidStep1: "Ouvrez Chrome",
            androidStep1Desc: "Accédez à cette page via Chrome sur votre Android",
            androidStep2: "Menu des options",
            androidStep2Desc: "Appuyez sur les trois points en haut à droite",
            androidStep3: "Installer l'app",
            androidStep3Desc: "Sélectionnez \"Ajouter à l'écran d'accueil\"",
            androidStep4: "Confirmer",
            androidStep4Desc: "Appuyez sur \"Installer\" pour confirmer",
            closeGuideBtn: "Fermer",
            installPwaBtn: "Installer maintenant",
            offlineText: "Mode hors ligne - Vous pouvez continuer à utiliser l'application"
        },
        zh: {
            installBtnText: "安装应用",
            installGuideTitle: "安装应用程序",
            iosStep1: "打开Safari",
            iosStep1Desc: "在您的iPhone上通过Safari访问此页面",
            iosStep2: "点击\"分享\"",
            iosStep2Desc: "点击屏幕底部的分享图标",
            iosStep3: "添加到主屏幕",
            iosStep3Desc: "滚动并选择\"添加到主屏幕\"",
            iosStep4: "确认安装",
            iosStep4Desc: "点击右上角的\"添加\"",
            androidStep1: "打开Chrome",
            androidStep1Desc: "在您的Android设备上通过Chrome访问此页面",
            androidStep2: "选项菜单",
            androidStep2Desc: "点击右上角的三个点",
            androidStep3: "安装应用",
            androidStep3Desc: "选择\"添加到主屏幕\"",
            androidStep4: "确认",
            androidStep4Desc: "点击\"安装\"进行确认",
            closeGuideBtn: "关闭",
            installPwaBtn: "立即安装",
            offlineText: "离线模式 - 您可以继续使用应用程序"
        }
    };
    
    // 这个函数会被外部调用
    window.updatePWAStrings = function(lang) {
        const translations = pwaTranslations[lang] || pwaTranslations.fr;
        
        for (const [key, value] of Object.entries(translations)) {
            const element = document.getElementById(key);
            if (element) {
                element.textContent = value;
            }
        }
    };
    
    // 初始设置
    updatePWAStrings(currentLang);
}

// 修改现有的switchLanguage函数，添加PWA字符串更新
const originalSwitchLanguage = window.switchLanguage;
window.switchLanguage = function(lang) {
    // 调用原始函数
    if (originalSwitchLanguage) {
        originalSwitchLanguage(lang);
    }
    
    // 更新PWA字符串
    if (window.updatePWAStrings) {
        updatePWAStrings(lang);
    }
};