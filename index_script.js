// ============================================
// DICTIONNAIRE BILINGUE
// ============================================
const dict = {
  fr: {
    titleMain: "Association Mille Voiles",
    slogan: "Intégration · Formation · Innovation",
    sloganZh: "融入 · 培训 · 创新",
    navHome: "Accueil",
    navAbout: "Association",
    navServices: "Nos pôles",
    navContact: "Contact",
    heroTag: "🇫🇷 Association Franco-Chinoise",
    heroTitle: "Bienvenue chez <br><span class=\"highlight\">Mille Voiles</span>",
    heroDesc: "Association franco-chinoise dédiée à l'intégration, la formation linguistique et l'innovation numérique. Nous accompagnons les communautés vers la réussite en France.",
    heroBtn1: "Découvrir nos pôles",
    heroBtn2: "Nous contacter",
    heroBadge: "Depuis 2025",
    aboutTag: "À PROPOS",
    aboutTitle: "Qui sommes-nous ?",
    aboutSub: "Découvrez notre histoire, notre mission et nos valeurs",
    aboutP1: "<strong>Mille Voiles (千帆协会)</strong> est une association loi 1901 à but non lucratif, créée à Paris en 2025.",
    aboutP2: "L'association a pour mission de favoriser l'intégration sociale, la formation tout au long de la vie et le développement personnel des membres de la communauté chinoise en France, ainsi que de toutes les personnes intéressées par les échanges culturels franco-chinois.",
    aboutP3: "Nous proposons des programmes de formation variés et structurés : préparation à l'examen civique français, cours de français (préparation DELF/DALF), ateliers d'intelligence artificielle et compétences numériques, ainsi que des cours de chinois pour tous les âges et tous les niveaux.",
    aboutP4: "Notre équipe réunit des compétences pédagogiques, scientifiques et interculturelles. Nous comprenons les défis réels auxquels sont confrontés les Chinois en France dans leurs études, leur travail et leur vie quotidienne, et nous nous engageons à offrir un accompagnement de qualité, personnalisé et professionnel.",
    aboutP5: "Que vous soyez nouvel arrivant en France, en préparation d'une demande de nationalité française, en recherche d'amélioration linguistique ou professionnelle, ou simplement désireux de découvrir la culture chinoise, nous vous invitons à nous rejoindre dans cette aventure humaine et formatrice.",
    value1: "Solidarité",
    value2: "Excellence",
    value3: "Inclusion",
    value4: "Innovation",
    value5: "Franco-Chinois",
    stat1Label: "Année de création",
    stat2Label: "Pôles d'activité",
    stat3Label: "Taux de réussite",
    stat4Label: "Membres actifs",
    pilierTag: "NOS PÔLES",
    pilierTitle: "Quatre pôles d'excellence",
    pilierSub: "Des formations conçues pour répondre aux besoins de la communauté francophone et sinophone",
    card1Title: "Examen civique",
    card1Desc: "Préparation complète au nouvel examen obligatoire (2026) : QCM, mises en situation, cours thématiques.",
    card1Btn: "Accéder au test",
    card2Title: "Français · FLE",
    card2Desc: "Cours de français intensifs, ateliers de conversation, préparation DELF/DALF et français sur objectifs spécifiques.",
    card2Btn: "Voir les cours",
    card3Title: "IA & Computer Science",
    card3Desc: "Ateliers programmation, initiation à l'intelligence artificielle, data science et outils numériques pour tous.",
    card3Btn: "Découvrir",
    card4Title: "中文培训 · Chinois",
    card4Desc: "Cours de chinois mandarin pour tous niveaux : initiation, conversation, préparation aux examens HSK et chinois des affaires.",
    card4Btn: "Découvrir",
    footerAbout: "Association d'intégration et de formation",
    footerAddr: "Paris, France",
    footerYear: "Fondée en 2025",
    footerContactTitle: "Contact",
    footerNavTitle: "Navigation",
    fNav1: "Accueil",
    fNav2: "Association",
    fNav3: "Nos pôles",
    fNav4: "Contact",
    footerCopy: "© 2025-2026 Mille Voiles · Tous droits réservés",
    footerCopyZh: "千帆协会 版权所有",
    devTitle: "En développement",
    devMsg: "Cette section est en cours de développement. Revenez bientôt !",
    devBtn: "Fermer"
  },
  zh: {
    titleMain: "千帆协会",
    slogan: "融入 · 培训 · 创新",
    sloganZh: "Intégration · Formation · Innovation",
    navHome: "首页",
    navAbout: "协会介绍",
    navServices: "我们的板块",
    navContact: "联系我们",
    heroTag: "🇫🇷 法中协会",
    heroTitle: "欢迎来到 <br><span class=\"highlight\">千帆协会</span>",
    heroDesc: "法中协会，致力于融入、语言培训与数字创新。我们陪伴社区在法国取得成功。",
    heroBtn1: "了解我们的板块",
    heroBtn2: "联系我们",
    heroBadge: "成立于2025年",
    aboutTag: "关于我们",
    aboutTitle: "我们是谁？",
    aboutSub: "了解我们的历史、使命和价值观",
    aboutP1: "<strong>千帆协会（Mille Voiles）</strong> 是一家依据法国《1901年协会法》于2025年在巴黎成立的非营利组织（Association loi 1901）。",
    aboutP2: "协会致力于促进在法华人及所有关注中法文化交流人士的社会融入、终身学习与个人发展。我们希望通过优质的教育培训、文化交流和数字技能普及，为每一位成员提供成长与发展的机会，帮助他们更好地适应法国社会，拓展未来的发展空间。",
    aboutP3: "我们围绕实际需求，提供多元化、系统化的培训项目，包括：法国公民考试辅导、法语培训课程（涵盖DELF/DALF备考）、人工智能与数字技能培训，以及面向不同年龄和水平的中文教育课程。",
    aboutP4: "协会汇聚了一支兼具教学经验、科研背景和跨文化实践经验的团队。我们深刻理解华人在法国学习、工作、生活和融入过程中所面临的实际需求，坚持以专业、务实、开放的理念，为每位学员提供高质量、个性化的支持。",
    aboutP5: "无论您是初到法国的新移民、准备申请法国国籍、希望提升语言与职业技能，还是希望深入了解中华文化，我们都期待与您同行，共同开启新的成长旅程。",
    value1: "团结互助",
    value2: "追求卓越",
    value3: "包容共进",
    value4: "创新驱动",
    value5: "法中交流",
    stat1Label: "成立年份",
    stat2Label: "活动板块",
    stat3Label: "通过率",
    stat4Label: "活跃会员",
    pilierTag: "我们的板块",
    pilierTitle: "四大卓越中心",
    pilierSub: "专为法语和中文社区需求量身打造的课程",
    card1Title: "公民考试",
    card1Desc: "全面备考2026年新强制性考试：选择题、情景题、主题课程。",
    card1Btn: "进入测试",
    card2Title: "法语 · FLE",
    card2Desc: "强化法语课程、口语工作坊、DELF/DALF备考及特定目标法语。",
    card2Btn: "查看课程",
    card3Title: "人工智能与计算机科学",
    card3Desc: "编程工作坊、人工智能入门、数据科学及面向所有人的数字工具。",
    card3Btn: "探索发现",
    card4Title: "中文培训 · Chinois",
    card4Desc: "面向所有水平的普通话课程：入门、会话、HSK备考和商务中文。",
    card4Btn: "探索发现",
    footerAbout: "融入与培训协会",
    footerAddr: "法国巴黎",
    footerYear: "成立于2025年",
    footerContactTitle: "联系我们",
    footerNavTitle: "导航",
    fNav1: "首页",
    fNav2: "协会介绍",
    fNav3: "我们的板块",
    fNav4: "联系我们",
    footerCopy: "© 2025-2026 千帆协会 · 版权所有",
    footerCopyZh: "Association Mille Voiles · Tous droits réservés",
    devTitle: "开发中",
    devMsg: "该板块正在开发中，敬请期待！",
    devBtn: "关闭"
  }
};

let currentLang = 'fr';

// ============================================
// SWITCH LANGUAGE
// ============================================
function switchLanguage(lang) {
  currentLang = lang;
  const data = dict[lang];

  document.querySelectorAll('[id]').forEach(el => {
    const key = el.id;
    if (data[key] !== undefined) {
      el.innerHTML = data[key];
    }
  });

  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  if (lang === 'fr') {
    document.getElementById('langFr').classList.add('active');
  } else {
    document.getElementById('langZh').classList.add('active');
  }
}

// ============================================
// DEVELOPING MODAL
// ============================================
function showDevelopingModal() {
  const modal = document.getElementById('developingModal');
  modal.classList.add('show');
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';

  modal.addEventListener('click', function(e) {
    if (e.target === this) closeDevelopingModal();
  });
  document.addEventListener('keydown', handleEscClose);
}

function closeDevelopingModal() {
  const modal = document.getElementById('developingModal');
  modal.classList.remove('show');
  modal.style.display = 'none';
  document.body.style.overflow = '';
  document.removeEventListener('keydown', handleEscClose);
}

function handleEscClose(e) {
  if (e.key === 'Escape') closeDevelopingModal();
}

// ============================================
// SMOOTH SCROLL
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId && targetId !== '#') {
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        const navHeight = document.querySelector('.main-nav').offsetHeight;
        const langHeight = document.querySelector('.lang-toggle').offsetHeight;
        const offset = navHeight + langHeight + 20;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    }
  });
});

// ============================================
// NAV ACTIVE LINK
// ============================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  const navHeight = document.querySelector('.main-nav').offsetHeight;
  const langHeight = document.querySelector('.lang-toggle').offsetHeight;
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

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  switchLanguage('fr');
});

// 暴露给全局
window.switchLanguage = switchLanguage;
window.closeDevelopingModal = closeDevelopingModal;
window.showDevelopingModal = showDevelopingModal;