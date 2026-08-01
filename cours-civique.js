// ============================================================
// DICTIONNAIRE BILINGUE
// ============================================================
const dict = {
    fr: {
        mainTitle: "Nos formations civiques",
        mainSubtitle: "Association Mille Voiles / 千帆协会 - Préparez-vous à l'examen civique 2026",
        navBrand: "Mille Voiles",
        navBackText: "Retour",
        navDebutant: "Débutant",
        navIntermediaire: "Intermédiaire",
        navAvance: "Avancé",
        heroTitle: "Choisissez la formation <span class=\"highlight\">adaptée à votre niveau</span>",
        heroDesc: "Trois parcours conçus pour vous accompagner pas à pas vers la réussite de l'examen civique.",
        featuresTitle: "法国公民考试 · 培训",
        featuresSub: "À partir du 1er janvier 2026, toute demande de nationalité française, de carte de résident ou de carte de séjour pluriannuelle nécessite la réussite de l'examen civique. L'examen couvre l'histoire, la culture, les valeurs, les devoirs civiques et les compétences linguistiques. Avec une préparation adaptée, même un niveau de français modeste permet de réussir !",
        feature1Title: "🎓 Accompagnement personnalisé",
        feature1Desc: "Un programme sur mesure adapté à votre niveau de français et à votre progression.",
        feature2Title: "🎯 Analyse précise des sujets",
        feature2Desc: "Décryptage des thèmes clés et des questions fréquentes de l'examen.",
        feature3Title: "💡 Techniques et stratégies",
        feature3Desc: "Simulations et méthodes pour gagner en confiance et en efficacité.",
        feature4Title: "📚 Plateforme d'entraînement",
        feature4Desc: "Accès à des exercices en ligne pour renforcer vos connaissances à votre rythme.",
        feature5Title: "📋 Aide à l'inscription",
        feature5Desc: "Nous vous guidons dans toutes les démarches administratives liées à l'examen.",
        feature6Title: "🌱 Débutants acceptés",
        feature6Desc: "Une progression pas à pas, idéale pour les apprenants avec un niveau de français débutant.",
        audienceTitle: "🎯 Public concerné :",
        audience1: "✅ Demande de nationalité française",
        audience2: "✅ Demande de carte de résident (10 ans)",
        audience3: "✅ Demande de carte de séjour pluriannuelle (4 ans)",
        audience4: "✅ Convocation à l'examen civique",
        audience5: "✅ Préparation anticipée pour maximiser les chances",
        audience6: "✅ Niveau de français débutant ou intermédiaire",
        ctaText: "<strong>Formation professionnelle + accompagnement personnalisé</strong>, pour réussir l'examen civique et franchir une nouvelle étape en France !",
        ctaBtn: "📩 Demander une évaluation gratuite",
        cours1Title: "📘 初级课程 · Initiation",
        cours1Price: "180€",
        cours1Subtitle: "👤 À qui s'adresse ce cours ?",
        cours1Audience: "Ce cours est conçu pour les personnes qui débutent totalement leur apprentissage :",
        cours1Audience1: "Vous n'avez aucune connaissance du français",
        cours1Audience2: "Vous découvrez la France et ses institutions",
        cours1Audience3: "Vous partez de zéro et souhaitez tout apprendre",
        cours1Audience4: "Vous avez besoin d'un accompagnement pas à pas",
        cours1Duration: "8 séances · 16 heures",
        cours1Group: "Groupe 4-8 pers.",
        cours1PriceLabel: "180€",
        cours1ProgrammeTitle: "📖 Programme",
        cours1Module1: "🇫🇷 La France et ses symboles",
        cours1Module2: "🏛️ Les institutions de la République",
        cours1Module3: "📜 La Constitution et les lois",
        cours1Module4: "🤝 Les droits et devoirs du citoyen",
        cours1Module5: "🎭 La culture et l'histoire de France",
        cours1Module6: "🏙️ La vie sociale et les services publics",
        cours1Module7: "🗳️ La démocratie et la participation citoyenne",
        cours1Module8: "✅ Révision générale et simulation",
        cours1Btn: "S'inscrire",
        cours1Next: "Voir le niveau suivant →",
        cours2Title: "📘 中级课程 · Perfectionnement",
        cours2Price: "100€",
        cours2Subtitle: "👤 À qui s'adresse ce cours ?",
        cours2Audience: "Ce cours est conçu pour les personnes qui ont déjà une base et souhaitent approfondir :",
        cours2Audience1: "Vous avez un niveau A2 en français",
        cours2Audience2: "Vous vivez en France depuis quelques années",
        cours2Audience3: "Vous connaissez déjà les bases de la société française",
        cours2Audience4: "Vous souhaitez consolider vos connaissances",
        cours2Duration: "4 séances · 8 heures",
        cours2Group: "Groupe 4-8 pers.",
        cours2PriceLabel: "100€",
        cours2ProgrammeTitle: "📖 Programme",
        cours2Module1: "🏛️ Approfondissement des institutions",
        cours2Module2: "📜 Analyse de la Constitution",
        cours2Module3: "⚖️ Droits et devoirs en pratique",
        cours2Module4: "🎯 Entraînement sur sujets réels",
        cours2Module5: "📝 Techniques de réponse efficace",
        cours2Module6: "🔄 Renforcement des points faibles",
        cours2Module7: "🎭 Culture et actualité françaises",
        cours2Module8: "✅ Simulation d'examen complète",
        cours2Btn: "S'inscrire",
        cours2Next: "Voir le niveau suivant →",
        cours3Title: "📘 高级课程 · Expertise",
        cours3Price: "60€",
        cours3Subtitle: "👤 À qui s'adresse ce cours ?",
        cours3Audience: "Ce cours est conçu pour les personnes qui ont déjà une bonne maîtrise et veulent optimiser leurs chances :",
        cours3Audience1: "Vous avez un niveau B1 en français",
        cours3Audience2: "Vous maîtrisez déjà les bases de l'examen",
        cours3Audience3: "Vous souhaitez une préparation intensive",
        cours3Audience4: "Vous voulez maximiser vos chances de réussite",
        cours3Duration: "2 séances · 4 heures",
        cours3Group: "Groupe 2-6 pers.",
        cours3PriceLabel: "60€",
        cours3ProgrammeTitle: "📖 Programme",
        cours3Module1: "🎯 Synthèse des sujets clés",
        cours3Module2: "📝 Analyse des erreurs fréquentes",
        cours3Module3: "⏱️ Tests en temps limité",
        cours3Module4: "💡 Pronostics et sujets probables",
        cours3Module5: "🎤 Accompagnement personnalisé",
        cours3Module6: "🧠 Stratégies de préparation mentale",
        cours3Module7: "📋 Simulation d'examen complète",
        cours3Module8: "✅ Feedback et plan de révision",
        cours3Btn: "S'inscrire",
        cours3Next: "← Retour aux tests",
        comparaisonTitle: "📊 Comparaison des formations",
        comp1Title: "Débutant",
        comp1Dur: "8 séances · 16h",
        comp1Group: "4-8 pers.",
        comp1Level: "Aucun prérequis",
        comp1Support: "Supports inclus",
        comp2Title: "Intermédiaire",
        comp2Dur: "4 séances · 8h",
        comp2Group: "4-8 pers.",
        comp2Level: "Niveau A2",
        comp2Support: "Supports inclus",
        comp3Title: "Avancé",
        comp3Dur: "2 séances · 4h",
        comp3Group: "2-6 pers.",
        comp3Level: "Niveau B1",
        comp3Support: "Supports inclus",
        footerAbout: "Association d'intégration et de formation",
        footerAddr: "Paris, France",
        footerYear: "Fondée en 2025",
        footerContactTitle: "Contact",
        footerNavTitle: "Navigation",
        fNav1: "Examen civique",
        fNav2: "Débutant",
        fNav3: "Intermédiaire",
        fNav4: "Avancé",
        footerCopy: "© 2025-2026 Mille Voiles · Tous droits réservés",
        footerCopyZh: "千帆协会 版权所有",
        modalTitle: "📩 Demande d'inscription",
        modalText: "Veuillez nous contacter par email ou WeChat pour vous inscrire à une formation.",
        modalCloseBtn: "Fermer"
    },
    zh: {
        mainTitle: "我们的公民课程",
        mainSubtitle: "千帆协会 - 备战2026年公民考试",
        navBrand: "千帆协会",
        navBackText: "返回",
        navDebutant: "初级",
        navIntermediaire: "中级",
        navAvance: "高级",
        heroTitle: "选择适合 <span class=\"highlight\">您水平的课程</span>",
        heroDesc: "三个课程，循序渐进，助您成功通过公民考试。",
        featuresTitle: "法国公民考试 · 培训",
        featuresSub: "从2026年1月1日起，申请法国国籍、十年居留卡或四年居留卡，都必须通过公民考试。考试内容涵盖法国历史、文化、价值观、公民义务及语言交流能力。只要准备充分，即使法语基础一般，也能顺利通过！",
        feature1Title: "🎓 一对一专业辅导",
        feature1Desc: "根据每位学员的法语水平和考试进度，量身定制学习方案。",
        feature2Title: "🎯 考试重点精准讲解",
        feature2Desc: "深入解析考试内容，梳理高频考点，帮助学员高效备考。",
        feature3Title: "💡 实用考试技巧培训",
        feature3Desc: "模拟真实考试场景，教授答题技巧、表达方法及应试策略，提高通过率。",
        feature4Title: "📚 专业练习平台",
        feature4Desc: "配套专业在线练习系统，随时随地刷题巩固，让学习更高效。",
        feature5Title: "📋 全程协助报名",
        feature5Desc: "全程指导考试报名流程，省时省心，无需担心手续问题。",
        feature6Title: "🌱 法语基础薄弱也能学",
        feature6Desc: "课程循序渐进，从基础到实战，帮助法语较弱的学员建立信心，顺利通过考试。",
        audienceTitle: "🎯 适合人群：",
        audience1: "✅ 准备申请法国国籍",
        audience2: "✅ 准备申请十年居留卡",
        audience3: "✅ 准备申请四年居留卡",
        audience4: "✅ 已收到公民考试通知",
        audience5: "✅ 希望提前备考，提高通过率",
        audience6: "✅ 法语基础较弱，希望获得专业辅导",
        ctaText: "<strong>专业培训 + 一对一辅导 + 全程陪伴</strong>，助您顺利通过法国公民考试，开启在法国的全新篇章！",
        ctaBtn: "📩 预约免费学习评估",
        cours1Title: "📘 初级课程 · 启蒙",
        cours1Price: "180€",
        cours1Subtitle: "👤 适合谁？",
        cours1Audience: "本课程专为零基础学员设计：",
        cours1Audience1: "完全没有法语基础",
        cours1Audience2: "刚来法国，对法国一无所知",
        cours1Audience3: "从零开始，希望系统学习",
        cours1Audience4: "需要一步步引导和陪伴",
        cours1Duration: "8节课 · 16小时",
        cours1Group: "小组 4-8人",
        cours1PriceLabel: "180€",
        cours1ProgrammeTitle: "📖 课程内容",
        cours1Module1: "🇫🇷 法国及其象征",
        cours1Module2: "🏛️ 共和国的机构",
        cours1Module3: "📜 宪法与法律",
        cours1Module4: "🤝 公民的权利与义务",
        cours1Module5: "🎭 法国的文化与历史",
        cours1Module6: "🏙️ 社会生活与公共服务",
        cours1Module7: "🗳️ 民主与公民参与",
        cours1Module8: "✅ 总复习与模拟考试",
        cours1Btn: "报名",
        cours1Next: "查看下一级别 →",
        cours2Title: "📘 中级课程 · 提升",
        cours2Price: "100€",
        cours2Subtitle: "👤 适合谁？",
        cours2Audience: "本课程适合已有基础、希望进一步提升的学员：",
        cours2Audience1: "法语水平达到A2",
        cours2Audience2: "已在法国生活数年",
        cours2Audience3: "对法国社会已有基本了解",
        cours2Audience4: "希望巩固和深化知识",
        cours2Duration: "4节课 · 8小时",
        cours2Group: "小组 4-8人",
        cours2PriceLabel: "100€",
        cours2ProgrammeTitle: "📖 课程内容",
        cours2Module1: "🏛️ 机构深入讲解",
        cours2Module2: "📜 宪法深度分析",
        cours2Module3: "⚖️ 权利与义务实践",
        cours2Module4: "🎯 真题实战训练",
        cours2Module5: "📝 高效答题技巧",
        cours2Module6: "🔄 薄弱环节强化",
        cours2Module7: "🎭 法国文化与时事",
        cours2Module8: "✅ 完整模拟考试",
        cours2Btn: "报名",
        cours2Next: "查看下一级别 →",
        cours3Title: "📘 高级课程 · 精通",
        cours3Price: "60€",
        cours3Subtitle: "👤 适合谁？",
        cours3Audience: "本课程适合已有较好基础、希望冲刺高分的学员：",
        cours3Audience1: "法语水平达到B1",
        cours3Audience2: "已掌握考试基础知识",
        cours3Audience3: "希望进行强化训练",
        cours3Audience4: "希望最大化通过机会",
        cours3Duration: "2节课 · 4小时",
        cours3Group: "小组 2-6人",
        cours3PriceLabel: "60€",
        cours3ProgrammeTitle: "📖 课程内容",
        cours3Module1: "🎯 核心考点总结",
        cours3Module2: "📝 高频错误分析",
        cours3Module3: "⏱️ 限时模拟测试",
        cours3Module4: "💡 押题与预测",
        cours3Module5: "🎤 个性化辅导",
        cours3Module6: "🧠 考前心理准备",
        cours3Module7: "📋 完整模拟考试",
        cours3Module8: "✅ 反馈与复习计划",
        cours3Btn: "报名",
        cours3Next: "← 返回测试",
        comparaisonTitle: "📊 课程对比",
        comp1Title: "初级",
        comp1Dur: "8节课 · 16小时",
        comp1Group: "4-8人",
        comp1Level: "零基础",
        comp1Support: "含学习资料",
        comp2Title: "中级",
        comp2Dur: "4节课 · 8小时",
        comp2Group: "4-8人",
        comp2Level: "A2水平",
        comp2Support: "含学习资料",
        comp3Title: "高级",
        comp3Dur: "2节课 · 4小时",
        comp3Group: "2-6人",
        comp3Level: "B1水平",
        comp3Support: "含学习资料",
        footerAbout: "融入与培训协会",
        footerAddr: "法国巴黎",
        footerYear: "成立于2025年",
        footerContactTitle: "联系我们",
        footerNavTitle: "导航",
        fNav1: "公民考试",
        fNav2: "初级",
        fNav3: "中级",
        fNav4: "高级",
        footerCopy: "© 2025-2026 千帆协会 · 版权所有",
        footerCopyZh: "Association Mille Voiles · Tous droits réservés",
        modalTitle: "📩 报名咨询",
        modalText: "请通过邮件或微信联系我们报名课程。",
        modalCloseBtn: "关闭"
    }
};

// ============================================================
// 全局变量
// ============================================================
let currentLang = 'fr';

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
// 模态框
// ============================================================
function openInscriptionModal() {
    document.getElementById('inscriptionModal').classList.add('show');
    document.getElementById('inscriptionModal').style.display = 'flex';
}

function closeInscriptionModal() {
    document.getElementById('inscriptionModal').classList.remove('show');
    document.getElementById('inscriptionModal').style.display = 'none';
}

// ============================================================
// 关闭模态框（点击外部）
// ============================================================
document.querySelectorAll('.modal').forEach(function(modal) {
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('show');
            this.style.display = 'none';
        }
    });
});

// ============================================================
// 导航高亮
// ============================================================
var sections = document.querySelectorAll('.cours-section');
var navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', function() {
    var current = '';
    var navHeight = document.querySelector('.main-nav').offsetHeight;
    var langHeight = document.querySelector('.lang-toggle').offsetHeight;
    var offset = navHeight + langHeight + 80;

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
});

// 暴露函数给 HTML
window.switchLanguage = switchLanguage;
window.openInscriptionModal = openInscriptionModal;
window.closeInscriptionModal = closeInscriptionModal;