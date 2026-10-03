// ============================================================
// ADMIN.JS — 统一管理后台
// 用户 + 预注册 + 公民课 + 法语课 + 学生考试 + 日历 + 双语
// ============================================================

console.log('🚀 Admin.js 初始化...');

if (typeof window.supabaseAuth === 'undefined') {
    console.error('❌ supabase-config.js 未加载');
    alert('系统配置加载失败，请刷新页面');
}

// ============================================================
// EmailJS 配置
// ============================================================
const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'D2jk67ERbrJZSUyvC',
    SERVICE_ID: 'service_5i2hyhb',
    TEMPLATE_ID: 'template_ywlxxks'
};

const EMAILJS_COURSE = {
    PUBLIC_KEY: 'c2dTn19suzx4VxUu6',
    SERVICE_ID: 'service_64o8j3r',
    TEACHER_TEMPLATE_ID: 'template_m97muhh',
    STUDENT_TEMPLATE_ID: 'template_f6nsc21'
};

// ============================================================
// 全局变量
// ============================================================
let currentAdmin = null;
let currentMode = 'all';
let currentTab = 'users';

let allUsers = [];
let filteredUsers = [];
let allPreRegs = [];
let allCiviqueCourses = [];
let allFrenchCourses = [];
let allStudentExams = [];

let userFilter = 'all';
let userSearchTerm = '';
let civiqueFilter = { type: '', teacherId: '', showUpcoming: true, search: '' };
let frenchFilter = { type: '', teacherId: '', showUpcoming: true, search: '' };
let studentExamFilter = 'all';
let studentExamSearch = '';

let pendingDeleteCourse = { id: null, category: null };
let pendingCancelData = null;

// 🔥 日历 + 双语
let calendarWeekStart = getMonday(new Date());
let calendarFilter = {
    category: 'all',
    teacherId: '',
    studentId: '',
    status: 'all'
};
let currentLang = localStorage.getItem('adminLang') || 'fr';

// ============================================================
// 🔥 双语字典
// ============================================================
const I18N = {
    fr: {
        'header.title': 'Administration',
        'header.subtitle': 'Association Mille Voiles',
        'header.back': 'Retour',
        'header.logout': 'Déconnexion',

        'tab.users': 'Utilisateurs',
        'tab.prereg': 'Pré-inscriptions',
        'tab.civique': 'Cours Civique',
        'tab.french': 'Cours Français',
        'tab.exams': 'Examens élèves',
        'tab.calendar': 'Calendrier',

        'stat.total': 'Total',
        'stat.teachers': 'Intervenants',
        'stat.stuCivique': 'Élèves Civique',
        'stat.stuFrench': 'Élèves Français',
        'stat.members': 'Membres',
        'stat.admins': 'Administrateurs',

        'card.users.title': 'Gestion des utilisateurs',
        'card.users.subtitle': 'Civique · Français · Intervenants · Membres',
        'card.prereg.title': 'Pré-inscriptions',
        'card.prereg.subtitle': "Demandes d'inscription (Examen civique)",
        'card.civique.title': 'Cours Civique',
        'card.civique.subtitle': "Cours de préparation à l'examen civique",
        'card.french.title': 'Cours Français',
        'card.french.subtitle': 'Cours de français (FLE)',
        'card.exams.title': 'Examens des élèves',
        'card.exams.subtitle': 'Suivi des examens passés (Civique / Français)',
        'card.calendar.title': 'Calendrier des cours',
        'card.calendar.subtitle': 'Vue hebdomadaire des cours programmés',

        'btn.add': 'Ajouter',
        'btn.addCourse': 'Ajouter un cours',
        'btn.addExam': 'Ajouter un examen',
        'btn.cancel': 'Annuler',
        'btn.save': 'Enregistrer',
        'btn.close': 'Fermer',
        'btn.confirm': 'Confirmer',
        'btn.delete': 'Supprimer',

        'search.name': 'Rechercher par nom...',
        'search.generic': 'Rechercher...',

        'filter.all': 'Tous',
        'filter.admin': '👑 Admins',
        'filter.teacher': '👨‍🏫 Intervenants',
        'filter.stu': '📘 Civique',
        'filter.stuFr': '🇫🇷 Français',
        'filter.stuAll': '📘🇫🇷 Double',
        'filter.user': '👤 Membres',
        'filter.expired': '⚠️ Expirés',
        'filter.allTypes': 'Tous les types',
        'filter.allTeachers': 'Tous les intervenants',
        'filter.upcoming': '📅 À venir',
        'filter.past': '📜 Historique',
        'filter.civique': '📘 Civique',
        'filter.french': '🇫🇷 Français',
        'filter.passed': '✅ Réussis',
        'filter.failed': '❌ Échoués',
        'filter.planned': '📅 Planifiés',
        'filter.scheduled': '📅 Planifié',
        'filter.completed': '✅ Terminé',
        'filter.cancelled': '❌ Annulé',

        'th.name': 'Nom',
        'th.role': 'Rôle',
        'th.modules': 'Modules',
        'th.type': 'Type',
        'th.level': 'Niveau',
        'th.creditCivique': '📘 Civique',
        'th.creditFrench': '🇫🇷 Français',
        'th.expiry': 'Expiration',
        'th.email': '📧 Email',
        'th.password': '🔑 Mot de passe',
        'th.actions': 'Actions',
        'th.inscription': 'Inscription',
        'th.credit': '📚 Crédits',
        'th.order': '📦 Commande',
        'th.payment': '💳 Paiement',
        'th.status': 'Statut',
        'th.student': 'Élève',
        'th.category': 'Catégorie',
        'th.examType': 'Type',
        'th.date': 'Date',
        'th.score': 'Score',
        'th.result': 'Résultat',
        'th.notes': 'Notes',

        'role.user': '👤 Membre',
        'role.stu': '📘 Élève Civique',
        'role.stuFr': '🇫🇷 Élève Français',
        'role.stuAll': '📘🇫🇷 Élève Double',
        'role.teacher': '👨‍🏫 Intervenant',
        'role.admin': '👑 Administrateur',

        'module.civique': '📘 Civique',
        'module.francais': '🇫🇷 Français',
        'form.typeFrench': "Type d'examen français",
        'form.name': 'Nom *',
        'form.email': 'Email',
        'form.password': 'Mot de passe',
        'form.passwordHint': '(vide=inchangé)',
        'form.passwordHint2': 'Vide=inchangé',
        'form.role': 'Rôle *',
        'form.modules': 'Modules autorisés',
        'form.typeCivique': 'Type de cours',
        'form.creditCivique': '📘 Crédits Civique (h)',
        'form.expiryCivique': 'Expiration Civique',
        'form.levelFrench': 'Niveau Français',
        'form.creditFrench': '🇫🇷 Crédits Français (h)',
        'form.expiryFrench': 'Expiration Français',
        'form.createdAt': 'Date de création',
        'form.type': 'Type *',
        'form.credit': '📚 Crédits (h)',
        'form.price': '💰 Prix (€)',
        'form.none': '—',
        'form.select': 'Sélectionner...',

        'cm.title.add': 'Ajouter un cours',
        'cm.mode': 'Mode de cours *',
        'cm.mode.solo': 'Cours individuel',
        'cm.mode.solo.desc': 'Un seul élève',
        'cm.mode.group': 'Cours collectif',
        'cm.mode.group.desc': 'Plusieurs élèves',
        'cm.student': 'Élève *',
        'cm.groupStudents': 'Élèves du groupe *',
        'cm.groupCount': '(0 sélectionné)',
        'cm.selected': '✅ Sélectionnés :',
        'cm.teacher': 'Intervenant *',
        'cm.type': 'Type de cours *',
        'cm.datetime': 'Date et heure *',
        'cm.duration': 'Durée (h)',
        'cm.location': 'Lieu',
        'cm.material': 'Lien du matériel',
        'cm.meeting': '🔗 Lien Google Meet / Visio',
        'cm.status': 'Statut',
        'cm.conflict': 'Conflit horaire avec un autre cours !',

        'cr.title': "Motif d'annulation",
        'cr.subtitle': '📝 Sélectionnez ou saisissez le motif',
        'cr.studentLeave': '📖 Congé d\'élève',
        'cr.teacherBusy': '👨‍🏫 Enseignant occupé',
        'cr.studentAbsent': '❌ Élève absent',
        'cr.other': '📝 Autre',
        'cr.custom': 'Précisez le motif...',

        'dc.title': 'Confirmer la suppression',
        'dc.message': 'Êtes-vous sûr de vouloir supprimer ce cours ?',
        'dc.warning': 'Cette action est irréversible.',
        'dc.course': '📚 Cours:',
        'dc.date': '📅 Date:',
        'dc.teacher': '👨‍🏫 Intervenant:',
        'dc.student': '👨‍🎓 Élève(s):',

        'pd.title': 'Détails de la pré-inscription',
        'pd.price': 'Prix',
        'pd.birth': 'Naissance',
        'pd.birthPlace': 'Lieu de naissance',
        'pd.address': 'Adresse',
        'pd.phone': 'Téléphone',
        'pd.pack': 'Forfait',
        'pre.title': '✏️ Modifier la pré-inscription',
        'um.title.add': 'Ajouter un utilisateur',
        'ev.title': '⭐ Évaluation du cours',
        'ev.teacherComment': 'Commentaire intervenant',
        'ev.rating': 'Note élève (1-5)',
        'ev.studentComment': 'Commentaire élève',
        'se.title.add': 'Ajouter un examen',
        'se.category': 'Catégorie *',
        'se.cat.civique': '📘 Civique',
        'se.cat.francais': '🇫🇷 Français',
        'se.examType': "Type d'examen *",
        'se.total': 'Total',
        'se.status.planned': '📅 Planifié',
        'se.status.passed': '✅ Réussi',
        'se.status.failed': '❌ Échoué',
        'se.status.absent': '🚫 Absent',

        'cd.title': 'Détails du cours',

        'cal.prevWeek': 'Semaine précédente',
        'cal.today': "Aujourd'hui",
        'cal.nextWeek': 'Semaine suivante',
        'cal.filter.allModules': 'Tous les modules',
        'cal.filter.civique': '📘 Civique',
        'cal.filter.francais': '🇫🇷 Français',
        'cal.filter.allTeachers': 'Tous les intervenants',
        'cal.filter.allStudents': 'Tous les élèves',
        'cal.filter.allStatus': 'Tous les statuts',
        'cal.filter.scheduled': '📅 Planifié',
        'cal.filter.inProgress': '🔄 En cours',
        'cal.filter.completed': '✅ Terminé',
        'cal.filter.cancelled': '❌ Annulé',
        'type.n': 'N — Naturalisation',
        'type.r': 'R — Carte 10 ans',
        'type.m': 'M — Carte pluriannuelle',
        'type.t': 'T — Tout droits',

        'footer': '© 2025-2026 Association Mille Voiles / 千帆协会',
        'loading': 'Chargement...',

        days: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
        daysFull: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
        'tab.meetingLinks': 'Liens Meet',
        'meeting.title': 'Liens Meet des intervenants',
        'meeting.subtitle': 'Configurez le lien Google Meet pour chaque intervenant',
        'meeting.refresh': 'Rafraîchir',
        'meeting.save': 'Enregistrer',
        'meeting.saved': 'Lien enregistré ✓',
        'meeting.empty': 'Aucun intervenant',
        'meeting.missing': '⚠️ Manquant',
        'meeting.placeholder': 'https://meet.google.com/...',
        'meeting.errEmpty': '⚠️ Lien vide',
        'meeting.errHttp': '⚠️ Le lien doit commencer par http',
        'meeting.errSave': 'Erreur lors de l\'enregistrement',
        'meeting.refreshed': 'Liens rafraîchis ✓',
    },

    zh: {
        'type.n': 'N — 入籍',
        'type.r': 'R — 十年卡',
        'type.m': 'M — 多年卡',
        'type.t': 'T — 全部内容',
'form.typeFrench': '法语考试类型',
        'header.title': '管理后台',
        'header.subtitle': '千帆协会',
        'header.back': '返回',
        'header.logout': '退出登录',

        'tab.users': '用户管理',
        'tab.prereg': '预注册',
        'tab.civique': '公民课',
        'tab.french': '法语课',
        'tab.exams': '学生考试',
        'tab.calendar': '日历',

        'stat.total': '总数',
        'stat.teachers': '教师',
        'stat.stuCivique': '公民课学员',
        'stat.stuFrench': '法语课学员',
        'stat.members': '会员',
        'stat.admins': '管理员',

        'card.users.title': '用户管理',
        'card.users.subtitle': '公民课 · 法语课 · 教师 · 会员',
        'card.prereg.title': '预注册',
        'card.prereg.subtitle': '报名申请（公民考试）',
        'card.civique.title': '公民课',
        'card.civique.subtitle': '公民考试备考课程',
        'card.french.title': '法语课',
        'card.french.subtitle': '法语课程（FLE）',
        'card.exams.title': '学生考试',
        'card.exams.subtitle': '考试记录（公民 / 法语）',
        'card.calendar.title': '课程日历',
        'card.calendar.subtitle': '每周课程视图',

        'btn.add': '添加',
        'btn.addCourse': '添加课程',
        'btn.addExam': '添加考试',
        'btn.cancel': '取消',
        'btn.save': '保存',
        'btn.close': '关闭',
        'btn.confirm': '确认',
        'btn.delete': '删除',

        'search.name': '按姓名搜索...',
        'search.generic': '搜索...',

        'filter.all': '全部',
        'filter.admin': '👑 管理员',
        'filter.teacher': '👨‍🏫 教师',
        'filter.stu': '📘 公民课',
        'filter.stuFr': '🇫🇷 法语课',
        'filter.stuAll': '📘🇫🇷 双课',
        'filter.user': '👤 会员',
        'filter.expired': '⚠️ 已过期',
        'filter.allTypes': '所有类型',
        'filter.allTeachers': '所有教师',
        'filter.upcoming': '📅 即将开始',
        'filter.past': '📜 历史',
        'filter.civique': '📘 公民课',
        'filter.french': '🇫🇷 法语课',
        'filter.passed': '✅ 通过',
        'filter.failed': '❌ 未通过',
        'filter.planned': '📅 已计划',
        'filter.scheduled': '📅 已安排',
        'filter.completed': '✅ 已完成',
        'filter.cancelled': '❌ 已取消',

        'th.name': '姓名',
        'th.role': '角色',
        'th.modules': '模块',
        'th.type': '类型',
        'th.level': '级别',
        'th.creditCivique': '📘 公民课时',
        'th.creditFrench': '🇫🇷 法语课时',
        'th.expiry': '到期',
        'th.email': '📧 邮箱',
        'th.password': '🔑 密码',
        'th.actions': '操作',
        'th.inscription': '注册时间',
        'th.credit': '📚 课时',
        'th.order': '📦 订单',
        'th.payment': '💳 支付',
        'th.status': '状态',
        'th.student': '学生',
        'th.category': '类别',
        'th.examType': '类型',
        'th.date': '日期',
        'th.score': '分数',
        'th.result': '结果',
        'th.notes': '备注',

        'role.user': '👤 会员',
        'role.stu': '📘 公民课学员',
        'role.stuFr': '🇫🇷 法语课学员',
        'role.stuAll': '📘🇫🇷 双课学员',
        'role.teacher': '👨‍🏫 教师',
        'role.admin': '👑 管理员',

        'module.civique': '📘 公民课',
        'module.francais': '🇫🇷 法语课',

        'form.name': '姓名 *',
        'form.email': '邮箱',
        'form.password': '密码',
        'form.passwordHint': '（留空=不修改）',
        'form.passwordHint2': '留空=不修改',
        'form.role': '角色 *',
        'form.modules': '授权模块',
        'form.typeCivique': '课程类型',
        'form.creditCivique': '📘 公民课时（h）',
        'form.expiryCivique': '公民课到期',
        'form.levelFrench': '法语级别',
        'form.creditFrench': '🇫🇷 法语课时（h）',
        'form.expiryFrench': '法语课到期',
        'form.createdAt': '创建时间',
        'form.type': '类型 *',
        'form.credit': '📚 课时（h）',
        'form.price': '💰 价格（€）',
        'form.none': '—',
        'form.select': '请选择...',

        'cm.title.add': '添加课程',
        'cm.mode': '课程模式 *',
        'cm.mode.solo': '一对一',
        'cm.mode.solo.desc': '单个学生',
        'cm.mode.group': '小组课',
        'cm.mode.group.desc': '多个学生',
        'cm.student': '学生 *',
        'cm.groupStudents': '小组学生 *',
        'cm.groupCount': '（已选 0）',
        'cm.selected': '✅ 已选：',
        'cm.teacher': '教师 *',
        'cm.type': '课程类型 *',
        'cm.datetime': '日期时间 *',
        'cm.duration': '时长（h）',
        'cm.location': '地点',
        'cm.material': '教材链接',
        'cm.meeting': '🔗 Google Meet / 视频链接',
        'cm.status': '状态',
        'cm.conflict': '时间冲突！',

        'cr.title': '取消原因',
        'cr.subtitle': '📝 请选择或输入原因',
        'cr.studentLeave': '📖 学生请假',
        'cr.teacherBusy': '👨‍🏫 老师有事',
        'cr.studentAbsent': '❌ 学生缺席',
        'cr.other': '📝 其他',
        'cr.custom': '请输入原因...',

        'dc.title': '确认删除',
        'dc.message': '确定要删除这门课程吗？',
        'dc.warning': '此操作不可恢复。',
        'dc.course': '📚 课程:',
        'dc.date': '📅 日期:',
        'dc.teacher': '👨‍🏫 教师:',
        'dc.student': '👨‍🎓 学生:',

        'pd.title': '预注册详情',
        'pd.price': '价格',
        'pd.birth': '出生日期',
        'pd.birthPlace': '出生地',
        'pd.address': '地址',
        'pd.phone': '电话',
        'pd.pack': '套餐',
        'pre.title': '✏️ 修改预注册',
        'um.title.add': '添加用户',
        'ev.title': '⭐ 课程评价',
        'ev.teacherComment': '教师评语',
        'ev.rating': '学生评分（1-5）',
        'ev.studentComment': '学生评语',
        'se.title.add': '添加考试',
        'se.category': '类别 *',
        'se.cat.civique': '📘 公民',
        'se.cat.francais': '🇫🇷 法语',
        'se.examType': '考试类型 *',
        'se.total': '总分',
        'se.status.planned': '📅 已计划',
        'se.status.passed': '✅ 通过',
        'se.status.failed': '❌ 未通过',
        'se.status.absent': '🚫 缺席',

        'cd.title': '课程详情',

        'cal.prevWeek': '上一周',
        'cal.today': '今天',
        'cal.nextWeek': '下一周',
        'cal.filter.allModules': '所有模块',
        'cal.filter.civique': '📘 公民课',
        'cal.filter.francais': '🇫🇷 法语课',
        'cal.filter.allTeachers': '所有教师',
        'cal.filter.allStudents': '所有学生',
        'cal.filter.allStatus': '所有状态',
        'cal.filter.scheduled': '📅 已安排',
        'cal.filter.inProgress': '🔄 进行中',
        'cal.filter.completed': '✅ 已完成',
        'cal.filter.cancelled': '❌ 已取消',

        'footer': '© 2025-2026 千帆协会 / Association Mille Voiles',
        'loading': '加载中...',

        days: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        daysFull: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
        'tab.meetingLinks': 'Meet 链接',
        'meeting.title': '教师 Meet 链接',
        'meeting.subtitle': '为每位教师配置 Google Meet 链接',
        'meeting.refresh': '刷新',
        'meeting.save': '保存',
        'meeting.saved': '链接已保存 ✓',
        'meeting.empty': '暂无教师',
        'meeting.missing': '⚠️ 缺失',
        'meeting.placeholder': 'https://meet.google.com/...',
        'meeting.errEmpty': '⚠️ 链接为空',
        'meeting.errHttp': '⚠️ 链接必须以 http 开头',
        'meeting.errSave': '保存失败',
        'meeting.refreshed': '链接已刷新 ✓',
    }
};

function t(key) {
    return (I18N[currentLang] && I18N[currentLang][key])
        || (I18N.fr[key])
        || key;
}

function getMonday(d) {
    const date = new Date(d);
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    const monday = new Date(date.setDate(diff));
    monday.setHours(0, 0, 0, 0);
    return monday;
}

function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('adminLang', lang);
    applyLanguage();
}
window.setLang = setLang;

// ============================================================
// 课程类型配置
// ============================================================
const CIVIQUE_TYPES = {
    rootCode: 'ec', rootName: '1️⃣ 公民考试',
    children: [
        { name: '➡️ 全能班', code: 'ec1', children: [
            { name: '十年卡全能班', code: 'ec110' },
            { name: '四年卡全能班', code: 'ec14' },
            { name: '入籍全能班', code: 'ec1f' }
        ]},
        { name: '➡️ 速成班', code: 'ec2', children: [
            { name: '十年卡速成', code: 'ec210' },
            { name: '四年卡速成', code: 'ec24' },
            { name: '入籍速成', code: 'ec2f' }
        ]},
        { name: '➡️ 自选班', code: 'ec3', children: [
            { name: '十年卡自选', code: 'ec310' },
            { name: '四年卡自选', code: 'ec34' },
            { name: '入籍自选', code: 'ec3f' }
        ]},
        { name: '➡️ 模拟考试', code: 'ex', children: [
            { name: '四年卡模拟考试', code: 'ex4' },
            { name: '十年卡模拟考试', code: 'ex10' },
            { name: '入籍模拟考试', code: 'exf' }
        ]}
    ]
};

const FRENCH_TYPES = [
    { name: '🌱 Débutant A1-A2', code: 'beginner' },
    { name: '📈 Intermédiaire B1-B2', code: 'intermediate' },
    { name: '🎯 Avancé C1-C2', code: 'advanced' },
    { name: '💼 Français des affaires', code: 'business' },
    { name: '📝 Préparation DELF', code: 'delf' },
    { name: '📝 Préparation DALF', code: 'dalf' },
    { name: '📝 Préparation TCF', code: 'tcf' },
    { name: '📝 Préparation TCF IRN', code: 'tcf_irn' }
];

const STUDENT_EXAM_TYPES = {
    civique: [
        { code: 'civique', label: '📘 公民考试' },
        { code: '4ans', label: '🎫 四年卡' },
        { code: '10ans', label: '📚 十年卡' },
        { code: 'nationalite', label: '🛂 入籍' }
    ],
    francais: [
        { code: 'tcf_irn', label: '📝 TCF IRN' },
        { code: 'delf', label: '📝 DELF' },
        { code: 'dalf', label: '📝 DALF' }
    ]
};

// 🔥 老师 Meet 链接缓存（teacher_id -> link）
let teacherMeetingLinks = {};
// ============================================================
// 工具函数
// ============================================================
function escapeHtml(s) {
    if (!s) return '';
    return String(s)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function showToast(msg, type = 'success') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast toast-' + type;
    const icons = { success: 'fa-check-circle', error: 'fa-exclamation-circle', warning: 'fa-exclamation-triangle', info: 'fa-info-circle' };
    toast.innerHTML = '<i class="fas ' + (icons[type] || icons.success) + '"></i> <span>' + escapeHtml(msg) + '</span>';
    container.appendChild(toast);
    setTimeout(() => { if (toast.parentNode) toast.remove(); }, 3500);
}

let loadingCount = 0;
function showLoading(text) {
    loadingCount++;
    const overlay = document.getElementById('loadingOverlay');
    const textEl = document.getElementById('loadingText');
    if (textEl) textEl.textContent = text || t('loading');
    if (overlay) overlay.classList.add('active');
}
function hideLoading() {
    loadingCount = Math.max(0, loadingCount - 1);
    if (loadingCount === 0) {
        const overlay = document.getElementById('loadingOverlay');
        if (overlay) overlay.classList.remove('active');
    }
}

function closeModal(id) {
    const m = document.getElementById(id);
    if (m) m.style.display = 'none';
}
function openModal(id) {
    const m = document.getElementById(id);
    if (m) m.style.display = 'flex';
}

function formatDateTime(dateStr) {
    if (!dateStr) return '—';
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return '—';
    return d.toLocaleDateString('fr-FR') + ' ' + d.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
}

function formatDateShort(dateStr) {
    if (!dateStr) return '—';
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return '—';
    return d.toLocaleDateString('fr-FR');
}

function formatDateForEmail(dateStr) {
    if (!dateStr) return { date: '—', time: '—' };
    try {
        const date = new Date(dateStr);
        if (isNaN(date.getTime())) return { date: '—', time: '—' };
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return { date: day + '/' + month + '/' + year, time: hours + ':' + minutes };
    } catch (e) {
        return { date: '—', time: '—' };
    }
}

function normalizeLocalDateTime(localValue) {
    if (!localValue) return null;
    const parts = localValue.split('T');
    if (parts.length !== 2) return null;
    const hm = parts[1].split(':');
    if (hm.length < 2) return null;
    return parts[0] + ' ' + hm[0].padStart(2, '0') + ':' + hm[1].padStart(2, '0') + ':00';
}

function isExpired(user) {
    if (!user.timer) return false;
    return new Date(user.timer) < new Date();
}

function getCiviqueTypeText(code) {
    if (!code) return '—';
    const map = {
        'ec': '1️⃣ 公民考试', 'ec110': '📚 十年卡全能班', 'ec14': '🎫 四年卡全能班', 'ec1f': '🛂 入籍全能班',
        'ec210': '📚 十年卡速成', 'ec24': '🎫 四年卡速成', 'ec2f': '🛂 入籍速成',
        'ec310': '📚 十年卡自选', 'ec34': '🎫 四年卡自选', 'ec3f': '🛂 入籍自选',
        'ex4': '📝 四年卡模拟考试', 'ex10': '📝 十年卡模拟考试', 'exf': '📝 入籍模拟考试'
    };
    return map[code] || code;
}

function getFrenchTypeText(code) {
    const map = {
        'beginner': '🌱 Débutant', 'intermediate': '📈 Intermédiaire', 'advanced': '🎯 Avancé',
        'business': '💼 Affaires', 'delf': '📝 DELF', 'dalf': '📝 DALF',
        'tcf': '📝 TCF', 'tcf_irn': '📝 TCF IRN'
    };
    return map[code] || code || '—';
}

function getStudentExamTypeLabel(code) {
    for (const cat in STUDENT_EXAM_TYPES) {
        for (const t2 of STUDENT_EXAM_TYPES[cat]) {
            if (t2.code === code) return t2.label;
        }
    }
    return code || '—';
}

function getAllCiviqueTypeCodes() {
    const codes = ['ec'];
    for (const g of CIVIQUE_TYPES.children) {
        codes.push(g.code);
        for (const c of g.children) codes.push(c.code);
    }
    return codes;
}

// ============================================================
// Token 解析
// ============================================================
function getAdminToken() {
    const params = new URLSearchParams(window.location.search);
    let token = params.get('token');
    if (token) {
        sessionStorage.setItem('adminToken', token);
        return token;
    }
    token = sessionStorage.getItem('adminToken');
    if (token) {
        const newUrl = window.location.pathname + '?token=' + token + (currentMode !== 'all' ? '&from=' + currentMode : '');
        window.history.replaceState({}, '', newUrl);
        return token;
    }
    return null;
}

function parseToken() {
    const token = getAdminToken();
    if (!token) return null;
    try {
        return JSON.parse(decodeURIComponent(atob(token)));
    } catch (e) {
        console.error('Token 解析失败:', e);
        return null;
    }
}

function validateToken(data) {
    if (!data) return false;
    if (data.role !== 'admin') return false;
    if (data.expiry) {
        if (new Date(data.expiry) < new Date()) return false;
    }
    return true;
}

// ============================================================
// 🔥 EMAILJS 邮件函数
// ============================================================
let emailjsLoaded = false;

function loadEmailJS() {
    return new Promise((resolve) => {
        if (typeof emailjs !== 'undefined') {
            try { emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY); } catch (e) {}
            emailjsLoaded = true;
            resolve();
            return;
        }
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
        script.onload = () => {
            try { emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY); } catch (e) {}
            emailjsLoaded = true;
            resolve();
        };
        script.onerror = () => resolve();  // 失败也 resolve，不要 reject
        document.head.appendChild(script);
    });
}

async function sendActivationEmail(userEmail, userName, userType, userRole, userPassword) {
    if (typeof emailjs === 'undefined') await loadEmailJS();
    if (typeof emailjs === 'undefined') throw new Error('EmailJS non disponible');

    const typeLabels = {
        'n': 'Naturalisation (入籍)', 'r': 'Carte 10 ans (十年居留)',
        'm': 'Carte pluriannuelle (多年居留)', 't': 'TCF IRN'
    };
    const roleLabels = { 'user': 'Membre (会员)', 'stu': 'Élève (学员)', 'teacher': 'Intervenant' };

    const params = {
        to_email: userEmail,
        to_name: userName,
        user_name: userName,
        user_type: typeLabels[userType] || userType || '—',
        user_role: roleLabels[userRole] || userRole || '—',
        user_password: userPassword || '—',
        login_url: 'https://www.assmv.fr/examen-civique.html',
        contact_email: '2025qianfan@gmail.com',
        subject: '🎉 Votre compte Mille Voiles est activé ! / 🎉 您的千帆协会账户已激活！'
    };

    await emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, params, EMAILJS_CONFIG.PUBLIC_KEY);
}

async function getUpcomingCoursesForUser(userId, userType, excludeCourseId) {
    try {
        const supabase = window.supabaseAuth.getSupabaseClient();
        if (!supabase) return [];
        const now = new Date().toISOString();
        let query = supabase
            .from('courses_v2')
            .select('*')
            .eq('status', 'scheduled')
            .gte('start_time', now)
            .order('start_time', { ascending: true });

        if (userType === 'teacher') {
            query = query.eq('teacher_id', userId);
        } else if (userType === 'student') {
            const { data: csList } = await supabase
                .from('course_students')
                .select('course_id')
                .eq('student_id', userId);
            const courseIds = (csList || []).map(cs => cs.course_id);

            const { data: legacyCourses } = await supabase
                .from('courses_v2')
                .select('id')
                .eq('student_id', userId);
            const legacyIds = (legacyCourses || []).map(c => c.id);
            const allIds = [...new Set([...courseIds, ...legacyIds])];

            if (allIds.length === 0) return [];
            query = query.in('id', allIds);
        }

        if (excludeCourseId) query = query.neq('id', excludeCourseId);

        const { data, error } = await query;
        if (error) return [];
        return data || [];
    } catch (e) {
        return [];
    }
}

function formatUpcomingCoursesForEmail(courses) {
    if (!courses || courses.length === 0) return '✅ Aucun cours à venir.';
    let formatted = '';
    courses.forEach((course, index) => {
        const { date, time } = formatDateForEmail(course.start_time);
        const courseTypeName = course.category === 'civique'
            ? getCiviqueTypeText(course.course_type)
            : getFrenchTypeText(course.course_type);
        formatted += (index + 1) + '. ' + date + ' à ' + time + ' | ' + courseTypeName + ' | ' + (course.duration || 2) + 'h\n';
    });
    return formatted;
}

async function sendCourseEmailNotification(courseId, action, overrideCourse) {
    try {
        // ============================================================
        // 1. 确保 emailjs 加载
        // ============================================================
        if (typeof emailjs === 'undefined') {
            await loadEmailJS();
        }
        if (typeof emailjs === 'undefined') {
            console.warn('⚠️ EmailJS 不可用，跳过发送');
            return { success: false, skipped: true, reason: 'emailjs_unavailable' };
        }
        try { emailjs.init(EMAILJS_COURSE.PUBLIC_KEY); } catch (e) {}

        const supabase = window.supabaseAuth.getSupabaseClient();
        if (!supabase) return { success: false, skipped: true, reason: 'no_supabase' };

        // ============================================================
        // 2. 拿课程（优先用传入的 overrideCourse，比如删除前快照）
        // ============================================================
        let course = overrideCourse;
        if (!course) {
            const { data, error } = await supabase
                .from('courses_v2')
                .select('*')
                .eq('id', courseId)
                .maybeSingle();
            if (error || !data) {
                console.warn('⚠️ 课程查不到，跳过邮件:', courseId);
                return { success: false, skipped: true, reason: 'course_not_found' };
            }
            course = data;
        }

        // ============================================================
        // 3. 拿学生列表（course_students + legacy student_id）
        // ============================================================
        const { data: courseStudents } = await supabase
            .from('course_students')
            .select('student_id')
            .eq('course_id', courseId);

        let studentIds = (courseStudents || []).map(cs => cs.student_id);
        if (studentIds.length === 0 && course.student_id) {
            studentIds = [course.student_id];
        }

        const userIds = [course.teacher_id, ...studentIds].filter(Boolean);
        if (userIds.length === 0) {
            return { success: false, skipped: true, reason: 'no_users' };
        }

        const { data: users } = await supabase
            .from('users')
            .select('id, name, email')
            .in('id', userIds);

        const userMap = {};
        (users || []).forEach(u => { userMap[u.id] = u; });

        const teacher = userMap[course.teacher_id] || null;
        const students = studentIds.map(id => userMap[id]).filter(Boolean);
        const studentsWithEmail = students.filter(s => s.email && s.email.trim() !== '');
        const hasTeacherEmail = teacher && teacher.email && teacher.email.trim() !== '';

        if (!hasTeacherEmail && studentsWithEmail.length === 0) {
            console.log('ℹ️ 无邮箱，跳过发送');
            return { success: false, skipped: true, reason: 'no_email' };
        }

        // ============================================================
        // 4. 准备公共字段
        // ============================================================
        const actionLabels = {
            'create': 'créé',
            'update': 'modifié',
            'cancel': 'annulé',
            'complete': 'terminé',
            'delete': 'supprimé'
        };
        const actionLabel = actionLabels[action] || action;

        const { date, time } = formatDateForEmail(course.start_time);
        const courseTypeName = course.category === 'civique'
            ? getCiviqueTypeText(course.course_type)
            : getFrenchTypeText(course.course_type);
        const categoryLabel = course.category === 'francais' ? '🇫🇷 Français' : '📘 Civique';

        const shouldExclude = (action !== 'create');
        let sentCount = 0;
        const errors = [];

        // ============================================================
        // 5. 发老师
        // ============================================================
        if (hasTeacherEmail) {
            let teacherCourses = '✅ Aucun cours à venir.';
            try {
                const list = await getUpcomingCoursesForUser(
                    teacher.id, 'teacher',
                    shouldExclude ? courseId : null
                );
                teacherCourses = formatUpcomingCoursesForEmail(list);
            } catch (e) {}

            const teacherParams = {
                to_email: teacher.email,
                to_name: teacher.name || 'Enseignant',
                teacher_name: teacher.name || 'Enseignant',
                action: actionLabel,
                course_type: courseTypeName,
                course_category: categoryLabel,
                date: date,
                time: time,
                duration: course.duration || 2,
                student_name: students.map(s => s.name).join(', ') || '-',
                student_email: studentsWithEmail.map(s => s.email).join(', ') || '-',
                upcoming_courses: teacherCourses,
                subject: `📚 [Enseignant] Cours ${actionLabel} - ${date}`
            };

            try {
                await emailjs.send(
                    EMAILJS_COURSE.SERVICE_ID,
                    EMAILJS_COURSE.TEACHER_TEMPLATE_ID,
                    teacherParams,
                    EMAILJS_COURSE.PUBLIC_KEY
                );
                sentCount++;
                console.log('✅ 邮件已发老师:', teacher.email);
            } catch (e) {
                console.error('❌ 发老师邮件失败:', e.message);
                errors.push('teacher: ' + e.message);
            }
        }

        // ============================================================
        // 6. 发每个学生
        // ============================================================
        for (const student of studentsWithEmail) {
            let studentCourses = '✅ Aucun cours à venir.';
            try {
                const list = await getUpcomingCoursesForUser(
                    student.id, 'student',
                    shouldExclude ? courseId : null
                );
                studentCourses = formatUpcomingCoursesForEmail(list);
            } catch (e) {}

            const studentParams = {
                to_email: student.email,
                to_name: student.name || 'Élève',
                student_name: student.name || 'Élève',
                action: actionLabel,
                course_type: courseTypeName,
                course_category: categoryLabel,
                date: date,
                time: time,
                duration: course.duration || 2,
                teacher_name: teacher?.name || '-',
                teacher_email: teacher?.email || '-',
                upcoming_courses: studentCourses,
                subject: `📚 [Élève] Cours ${actionLabel} - ${date}`
            };

            try {
                await emailjs.send(
                    EMAILJS_COURSE.SERVICE_ID,
                    EMAILJS_COURSE.STUDENT_TEMPLATE_ID,
                    studentParams,
                    EMAILJS_COURSE.PUBLIC_KEY
                );
                sentCount++;
                console.log('✅ 邮件已发学生:', student.email);
            } catch (e) {
                console.error('❌ 发学生邮件失败:', student.email, e.message);
                errors.push('student ' + student.email + ': ' + e.message);
            }
        }

        return {
            success: sentCount > 0,
            sentCount,
            skipped: false,
            errors: errors.length > 0 ? errors : undefined
        };

    } catch (err) {
        console.error('❌ 邮件发送异常:', err);
        return { success: false, error: err.message };
    }
}

// ============================================================
// 初始化
// ============================================================
async function init() {
    const tokenData = parseToken();
    if (!tokenData || !validateToken(tokenData)) {
        showToast('Accès refusé', 'error');
        setTimeout(() => window.location.href = 'index.html', 2000);
        return;
    }

    currentAdmin = tokenData;
    document.getElementById('currentAdminName').textContent = tokenData.name || 'Admin';

    const params = new URLSearchParams(window.location.search);
    currentMode = params.get('from') || 'all';

    applyMode();
    bindTabs();
    bindGlobalEvents();

    await loadAllData();
    await loadEmailJS();
    applyLanguage();
    bindLanguageButtons();
}

function bindLanguageButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            setLang(this.dataset.lang);
        });
    });
}

function applyLanguage() {
    document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'fr';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        const val = t(key);
        if (val && val !== key) el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        const val = t(key);
        if (val && val !== key) el.placeholder = val;
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });

    if (typeof renderCalendar === 'function' && allCiviqueCourses.length + allFrenchCourses.length > 0) renderCalendar();
    if (typeof updateUserStats === 'function' && allUsers.length) updateUserStats();
    if (typeof applyUserFilters === 'function' && allUsers.length) applyUserFilters();
    if (typeof renderPreRegTable === 'function' && allPreRegs.length) renderPreRegTable();
    if (typeof renderCiviqueCourses === 'function' && allCiviqueCourses.length) renderCiviqueCourses();
    if (typeof renderFrenchCourses === 'function' && allFrenchCourses.length) renderFrenchCourses();
  
    if (typeof renderStudentExams === 'function' && allStudentExams.length) renderStudentExams();
    if (typeof renderMeetingLinksList === 'function' && allUsers.length) renderMeetingLinksList();   // 🔥 加这一行
}


function applyMode() {
    const backLink = document.getElementById('backHomeLink');
    const backHomeText = document.getElementById('backHomeText');
    const headerTitle = document.getElementById('headerTitle');

    if (currentMode === 'francais') {
        if (backLink) backLink.href = 'francais.html';
        if (backHomeText) backHomeText.textContent = 'Retour Français';
        document.body.setAttribute('data-theme', 'francais');
        if (headerTitle) headerTitle.textContent = 'Admin Français';
    } else if (currentMode === 'civique') {
        if (backLink) backLink.href = 'examen-civique.html';
        if (backHomeText) backHomeText.textContent = 'Retour Civique';
        document.body.setAttribute('data-theme', 'civique');
        if (headerTitle) headerTitle.textContent = 'Admin Civique';
    } else {
        if (backLink) backLink.href = 'examen-civique.html';
    }

    document.querySelectorAll('.admin-tab').forEach(tab => {
        const scope = tab.dataset.scope;
        const visible = scope === 'both' || currentMode === 'all' || scope === currentMode;
        tab.classList.toggle('hidden', !visible);
    });
}

function bindTabs() {
    document.querySelectorAll('.admin-tab').forEach(btn => {
        btn.addEventListener('click', function() {
            const tab = this.dataset.tab;
            currentTab = tab;
            document.querySelectorAll('.admin-tab').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            const content = document.getElementById('tab-' + tab);
            if (content) content.classList.add('active');
            if (tab.startsWith('french-')) document.body.setAttribute('data-theme', 'francais');
            else document.body.setAttribute('data-theme', 'civique');

            if (tab === 'calendar') renderCalendar();
            if (tab === 'meeting-links') renderMeetingLinksList();   // 🔥 加这一行
        });
    });
}

function bindGlobalEvents() {
    document.getElementById('logoutBtn').addEventListener('click', () => {
        sessionStorage.clear();
        window.location.href = 'examen-civique.html';
    });

    // 用户
    document.getElementById('searchBtn').addEventListener('click', handleUserSearch);
    document.getElementById('searchInput').addEventListener('keyup', e => { if (e.key === 'Enter') handleUserSearch(); });
    document.querySelectorAll('#userFilters .filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('#userFilters .filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            userFilter = this.dataset.filter;
            applyUserFilters();
        });
    });
    document.getElementById('addUserBtn').addEventListener('click', () => openUserModal());
    document.getElementById('userForm').addEventListener('submit', handleUserSubmit);
    document.getElementById('userRole').addEventListener('change', updateUserModalFields);
    document.getElementById('userModuleCivique').addEventListener('change', updateUserModalFields);
    document.getElementById('userModuleFrancais').addEventListener('change', updateUserModalFields);

    // 预注册
    document.getElementById('editPreRegForm').addEventListener('submit', handleEditPreRegSubmit);

    // 课程
    document.getElementById('courseForm').addEventListener('submit', handleCourseSubmit);
    document.getElementById('addCiviqueCourseBtn').addEventListener('click', () => openCourseModal('civique'));
    document.getElementById('addFrenchCourseBtn').addEventListener('click', () => openCourseModal('francais'));
    document.getElementById('courseTeacher').addEventListener('change', autoFillMeetingLink);
    document.getElementById('groupSearchInput').addEventListener('input', filterGroupStudents);

    // 公民课筛选
    document.getElementById('civiqueFilterType').addEventListener('change', function() { civiqueFilter.type = this.value; renderCiviqueCourses(); });
    document.getElementById('civiqueFilterTeacher').addEventListener('change', function() { civiqueFilter.teacherId = this.value; renderCiviqueCourses(); });
    document.getElementById('civiqueShowUpcoming').addEventListener('click', () => toggleCourseFilter('civique', true));
    document.getElementById('civiqueShowPast').addEventListener('click', () => toggleCourseFilter('civique', false));
    document.getElementById('civiqueRefreshBtn').addEventListener('click', loadAllData);
    document.getElementById('civiqueSearchInput').addEventListener('input', function() { civiqueFilter.search = this.value.toLowerCase(); renderCiviqueCourses(); });

    // 法语课筛选
    document.getElementById('frenchFilterType').addEventListener('change', function() { frenchFilter.type = this.value; renderFrenchCourses(); });
    document.getElementById('frenchFilterTeacher').addEventListener('change', function() { frenchFilter.teacherId = this.value; renderFrenchCourses(); });
    document.getElementById('frenchShowUpcoming').addEventListener('click', () => toggleCourseFilter('francais', true));
    document.getElementById('frenchShowPast').addEventListener('click', () => toggleCourseFilter('francais', false));
    document.getElementById('frenchRefreshBtn').addEventListener('click', loadAllData);
    document.getElementById('frenchSearchInput').addEventListener('input', function() { frenchFilter.search = this.value.toLowerCase(); renderFrenchCourses(); });

    // 学生考试
    document.getElementById('addStudentExamBtn').addEventListener('click', () => openStudentExamModal());
    document.getElementById('studentExamForm').addEventListener('submit', handleStudentExamSubmit);
    document.getElementById('studentExamCategory').addEventListener('change', updateStudentExamTypes);
    document.getElementById('studentExamSearchInput').addEventListener('input', function() {
        studentExamSearch = this.value.toLowerCase().trim();
        renderStudentExams();
    });
    document.querySelectorAll('#studentExamFilters .filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('#studentExamFilters .filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            studentExamFilter = this.dataset.filter;
            renderStudentExams();
        });
    });

    // 取消原因
    document.getElementById('confirmCancelReasonBtn').addEventListener('click', confirmCancelReason);
    document.getElementById('cancelReasonModalBtn').addEventListener('click', () => {
        closeModal('cancelReasonModal');
        pendingCancelData = null;
    });
    document.querySelectorAll('.cancel-reason-option').forEach(opt => {
        opt.addEventListener('click', function() {
            const radio = this.querySelector('input[type="radio"]');
            radio.checked = true;
            document.querySelectorAll('.cancel-reason-option').forEach(o => o.classList.remove('selected'));
            this.classList.add('selected');
            if (this.dataset.reason === 'other') {
                document.getElementById('customReasonContainer').classList.add('show');
            } else {
                document.getElementById('customReasonContainer').classList.remove('show');
            }
        });
    });

    // 删除确认
    document.getElementById('cancelDeleteCourseBtn').addEventListener('click', () => {
        document.getElementById('deleteConfirmOverlay').classList.remove('active');
        pendingDeleteCourse = { id: null, category: null };
    });
    document.getElementById('confirmDeleteCourseBtn').addEventListener('click', confirmDeleteCourse);

    // 评价星星
    document.querySelectorAll('#ratingStars .star').forEach(star => {
        star.addEventListener('click', function() {
            const val = parseInt(this.dataset.value);
            document.getElementById('studentRating').value = val;
            document.querySelectorAll('#ratingStars .star').forEach((s, i) => {
                s.classList.toggle('active', i < val);
            });
        });
    });

    // 🔥 日历筛选
    const calFilterCat = document.getElementById('calFilterCategory');
    const calFilterTeacher = document.getElementById('calFilterTeacher');
    const calFilterStudent = document.getElementById('calFilterStudent');
    const calFilterStatus = document.getElementById('calFilterStatus');

    if (calFilterCat) calFilterCat.addEventListener('change', function() {
        calendarFilter.category = this.value; renderCalendar();
    });
    if (calFilterTeacher) calFilterTeacher.addEventListener('change', function() {
        calendarFilter.teacherId = this.value; renderCalendar();
    });
    if (calFilterStudent) calFilterStudent.addEventListener('change', function() {
        calendarFilter.studentId = this.value; renderCalendar();
    });
    if (calFilterStatus) calFilterStatus.addEventListener('change', function() {
        calendarFilter.status = this.value; renderCalendar();
    });

    // 点击遮罩关闭
    window.addEventListener('click', function(e) {
        ['userModal', 'detailModal', 'editPreRegModal', 'courseModal', 'cancelReasonModal', 'evaluationModal', 'studentExamModal', 'courseDetailModal'].forEach(id => {
            const m = document.getElementById(id);
            if (e.target === m) closeModal(id);
        });
    });
        // 🔥 Meet 链接刷新按钮
    const refreshMeetingLinksBtn = document.getElementById('refreshMeetingLinksBtn');
    if (refreshMeetingLinksBtn) {
        refreshMeetingLinksBtn.addEventListener('click', async () => {
            await loadTeacherMeetingLinks();
            renderMeetingLinksList();
            showToast(t('meeting.refreshed'), 'success');
        });
    }
}

async function loadTeacherMeetingLinks() {
    try {
        const supabase = window.supabaseAuth.getSupabaseClient();
        const { data, error } = await supabase
            .from('teacher_meeting_links')
            .select('teacher_id, meeting_link');
        if (error) throw error;
        teacherMeetingLinks = {};
        (data || []).forEach(row => {
            teacherMeetingLinks[row.teacher_id] = row.meeting_link;
        });
        console.log('✅ 已加载', Object.keys(teacherMeetingLinks).length, '个老师的 Meet 链接');
    } catch (e) {
        console.warn('⚠️ 加载老师 Meet 链接失败:', e.message);
        teacherMeetingLinks = {};
    }
}
function renderMeetingLinksList() {
    const container = document.getElementById('meetingLinksList');
    if (!container) return;

    const teachers = allUsers.filter(u => u.role === 'teacher');

    if (teachers.length === 0) {
        container.innerHTML = '<div class="empty-state"><i class="fas fa-user-slash"></i><p>' + t('meeting.empty') + '</p></div>';
        return;
    }

    container.innerHTML = teachers.map(t2 => {
        const link = teacherMeetingLinks[t2.id] || '';
        const hasLink = link.trim() !== '';
        return `
            <div class="meeting-link-row" data-teacher-id="${t2.id}">
                <div class="meeting-link-name">
                    <i class="fas fa-chalkboard-user"></i>
                    <strong>${escapeHtml(t2.name)}</strong>
                </div>
                <div class="meeting-link-input">
                    <input type="url"
                           class="meeting-link-field"
                           data-teacher-id="${t2.id}"
                           value="${escapeHtml(link)}"
                           placeholder="${t('meeting.placeholder')}"
                    />
                    ${hasLink ? '' : '<span class="meeting-link-warning">' + t('meeting.missing') + '</span>'}
                </div>
                <div class="meeting-link-actions">
                    <button class="action-btn save-meeting-link-btn"
                            data-teacher-id="${t2.id}"
                            style="background:#27ae60;color:white;">
                        <i class="fas fa-save"></i> ${t('meeting.save')}
                    </button>
                </div>
            </div>
        `;
    }).join('');

    container.querySelectorAll('.save-meeting-link-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const teacherId = this.dataset.teacherId;
            const input = container.querySelector(`.meeting-link-field[data-teacher-id="${teacherId}"]`);
            saveTeacherMeetingLink(teacherId, input.value.trim());
        });
    });

    container.querySelectorAll('.meeting-link-field').forEach(input => {
        updateInputBorder(input);
        input.addEventListener('input', function() {
            updateInputBorder(this);
        });
    });
}

function updateInputBorder(input) {
    const val = input.value.trim();
    if (!val) {
        input.style.borderColor = '#e74c3c';
    } else if (!val.startsWith('http')) {
        input.style.borderColor = '#f39c12';
    } else {
        input.style.borderColor = '#27ae60';
    }
}

async function saveTeacherMeetingLink(teacherId, link) {
    if (!link) {
        showToast(t('meeting.errEmpty'), 'error');
        return;
    }
    if (!link.startsWith('http')) {
        showToast(t('meeting.errHttp'), 'error');
        return;
    }

    showLoading('...');
    try {
        const supabase = window.supabaseAuth.getSupabaseClient();

        // ============================================================
        // 1. 保存老师链接到 teacher_meeting_links
        // ============================================================
        const { error } = await supabase
            .from('teacher_meeting_links')
            .upsert({
                teacher_id: teacherId,
                meeting_link: link,
                updated_at: new Date().toISOString()
            }, { onConflict: 'teacher_id' });

        if (error) throw error;

        // ============================================================
        // 2. 🔥 同步更新该老师所有"未来 + 未取消"课程的 meeting_link
        // ============================================================
        const nowISO = new Date().toISOString();
        const { data: updatedCourses, error: syncErr } = await supabase
            .from('courses_v2')
            .update({
                meeting_link: link,
                updated_at: nowISO
            })
            .eq('teacher_id', teacherId)
            .gt('start_time', nowISO)                                    // 只改未来的
            .in('status', ['scheduled', 'in_progress'])                  // 未取消、未完成
            .select('id');                                               // 返回更新行数

        let syncCount = 0;
        if (syncErr) {
            console.warn('⚠️ 同步未来课程链接失败:', syncErr.message);
        } else {
            syncCount = (updatedCourses || []).length;
            console.log(`🔗 已同步 ${syncCount} 门未来课程的 Meet 链接`);
        }

        // ============================================================
        // 3. 更新本地缓存 + 重渲染
        // ============================================================
        teacherMeetingLinks[teacherId] = link;
        renderMeetingLinksList();

        // ============================================================
        // 4. 提示信息
        // ============================================================
        if (syncErr) {
            showToast(
                t('meeting.saved') + ' — ⚠️ ' + syncCount + ' cours synchronisés (partiel)',
                'warning'
            );
        } else if (syncCount > 0) {
            showToast(
                t('meeting.saved') + ' — 🔗 ' + syncCount + ' cours mis à jour',
                'success'
            );
        } else {
            showToast(t('meeting.saved'), 'success');
        }

    } catch (err) {
        console.error(err);
        showToast(t('meeting.errSave') + ': ' + err.message, 'error');
    } finally {
        hideLoading();
    }
}
// ============================================================
// 🔥 删除老师「未被预定」的冲突空闲时间段
// - 只删除 status = 'available' 的
// - status = 'booked' 的（已被学生预定）不动
// - 只处理未来的时间段
// ============================================================
async function removeConflictingAvailabilities(teacherId, startTimeStr, duration) {
    try {
        const supabase = window.supabaseAuth.getSupabaseClient();
        if (!supabase) return { removed: 0 };

        // 新课程的时间范围
        const newStart = new Date(startTimeStr).getTime();
        const newEnd = newStart + (duration || 2) * 3600000;

        // 1. 查该老师所有「未来 + 未被预定」的空闲时间段
        const nowISO = new Date().toISOString();
        const { data: slots, error } = await supabase
            .from('teacher_availabilities')
            .select('id, start_time, end_time, status, course_id')
            .eq('teacher_id', teacherId)
            .eq('status', 'available')          // 🔥 关键：只看未预定的
            .gt('end_time', nowISO);            // 只看未来的

        if (error) {
            console.warn('⚠️ 查询老师空闲失败:', error.message);
            return { removed: 0, error: error.message };
        }

        if (!slots || slots.length === 0) return { removed: 0 };

        // 2. 找出与新课程时间冲突的 slot
        const conflicts = slots.filter(slot => {
            // 🔥 双重保险：跳过任何已被预定的（防止数据异常）
            if (slot.status !== 'available') return false;
            if (slot.course_id) return false;   // 有 course_id 说明被占了

            const slotStart = new Date(slot.start_time).getTime();
            const slotEnd = new Date(slot.end_time).getTime();
            // 时间重叠：新课程开始 < slot结束 && 新课程结束 > slot开始
            return newStart < slotEnd && newEnd > slotStart;
        });

        if (conflicts.length === 0) return { removed: 0 };

        // 3. 只删除「未被预定」的冲突 slot
        const conflictIds = conflicts.map(s => s.id);
        const { data: deleted, error: delErr } = await supabase
            .from('teacher_availabilities')
            .delete()
            .in('id', conflictIds)
            .eq('status', 'available')          // 🔥 再保险一次：只删 available
            .select('id');

        if (delErr) {
            console.warn('⚠️ 删除冲突空闲失败:', delErr.message);
            return { removed: 0, error: delErr.message };
        }

        const removedCount = (deleted || []).length;
        if (removedCount > 0) {
            console.log(`🗑️ 已删除 ${removedCount} 个未被预定的冲突空闲时间段`);
        }
        return { removed: removedCount };

    } catch (e) {
        console.warn('⚠️ removeConflictingAvailabilities 异常:', e.message);
        return { removed: 0, error: e.message };
    }
}
function getTeacherMeetingLink(teacherId) {
    return teacherMeetingLinks[teacherId] || null;
}
// ============================================================
// 加载所有数据
// ============================================================
async function loadAllData() {
    showLoading('Chargement des données...');
    try {
        const supabase = window.supabaseAuth.getSupabaseClient();
          await loadTeacherMeetingLinks();

        const [usersRes, preRegsRes, coursesRes, studentExamsRes] = await Promise.all([
            supabase.from('users').select('*').order('created_at', { ascending: false }),
            supabase.from('pre_registrations').select('*').order('created_at', { ascending: false }),
            supabase.from('courses_v2').select('*').order('start_time', { ascending: true }),
            supabase.from('student_exams').select('*, student:student_id(id,name)').order('exam_date', { ascending: false })
        ]);

        allUsers = usersRes.data || [];
        allPreRegs = preRegsRes.data || [];
        const allCourses = coursesRes.data || [];
        allCiviqueCourses = allCourses.filter(c => c.category === 'civique');
        allFrenchCourses = allCourses.filter(c => c.category === 'francais');
        allStudentExams = studentExamsRes.data || [];

        await attachUsersToCourses();

        updateUserStats();
        applyUserFilters();
        renderPreRegTable();
        updatePreRegCount();
        buildCiviqueFilterOptions();
        buildFrenchFilterOptions();
        renderCiviqueCourses();
        renderFrenchCourses();
        renderStudentExams();
        buildCalendarFilterOptions();
        renderCalendar();
        renderMeetingLinksList();

    } catch (err) {
        console.error('加载数据失败:', err);
        showToast('Erreur de chargement: ' + err.message, 'error');
    } finally {
        hideLoading();
    }
}

async function attachUsersToCourses() {
    const allCourses = [...allCiviqueCourses, ...allFrenchCourses];
    const ids = new Set();
    allCourses.forEach(c => {
        if (c.teacher_id) ids.add(c.teacher_id);
        if (c.student_id) ids.add(c.student_id);
    });

    const supabase = window.supabaseAuth.getSupabaseClient();
    const courseIds = allCourses.map(c => c.id);

    // 🔥 查询小组课学生
    const csMap = {};
    if (courseIds.length > 0) {
        const { data: csList } = await supabase
            .from('course_students')
            .select('course_id, student_id')
            .in('course_id', courseIds);

        (csList || []).forEach(cs => {
            if (!csMap[cs.course_id]) csMap[cs.course_id] = [];
            csMap[cs.course_id].push(cs.student_id);
            ids.add(cs.student_id);
        });
    }

    if (ids.size === 0) return;

    const { data } = await supabase.from('users').select('id, name').in('id', Array.from(ids));
    const userMap = {};
    (data || []).forEach(u => { userMap[u.id] = u; });

    allCourses.forEach(c => {
        if (c.teacher_id) c.teacher = userMap[c.teacher_id];
        if (c.student_id) c.student = userMap[c.student_id];

        // 🔥 补 students 数组（小组课会包含所有学生）
        c.students = [];
        if (c.student_id && userMap[c.student_id]) {
            c.students.push(userMap[c.student_id]);
        }
        (csMap[c.id] || []).forEach(sid => {
            if (userMap[sid] && !c.students.find(s => s.id === sid)) {
                c.students.push(userMap[sid]);
            }
        });
    });
}
// ============================================================
// 用户管理
// ============================================================
function updateUserStats() {
    const total = allUsers.length;
    const teachers = allUsers.filter(u => u.role === 'teacher').length;
    const stuCivique = allUsers.filter(u => u.role === 'stu').length;
    const stuFrench = allUsers.filter(u => u.role === 'stu_fr').length;
    const members = allUsers.filter(u => u.role === 'user').length;
    const admins = allUsers.filter(u => u.role === 'admin').length;

    document.getElementById('statTotalUsers').textContent = total;
    document.getElementById('statTeachers').textContent = teachers;
    document.getElementById('statStuCivique').textContent = stuCivique;
    document.getElementById('statStuFrench').textContent = stuFrench;
    document.getElementById('statMembers').textContent = members;
    document.getElementById('statAdmins').textContent = admins;
}

function handleUserSearch() {
    userSearchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    applyUserFilters();
}

function applyUserFilters() {
    filteredUsers = allUsers.filter(u => {
        if (userSearchTerm && !(u.name || '').toLowerCase().includes(userSearchTerm)) return false;
        if (userFilter !== 'all') {
            if (userFilter === 'expired') return isExpired(u);
            if (userFilter.startsWith('role-')) {
                const role = userFilter.replace('role-', '');
                return u.role === role;
            }
        }
        return true;
    });
    filteredUsers.sort((a, b) => {
        if (isExpired(a) !== isExpired(b)) return isExpired(a) ? 1 : -1;
        return (a.name || '').localeCompare(b.name || '');
    });
    renderUsersTable();
}
function getUserTypeHtml(user) {
    const role = user.role;

    // 公民课 type 映射（中法双语）
    const civiqueMap = {
        'n': 'N · 入籍 Naturalisation',
        'r': 'R · 十年卡 Carte 10 ans',
        'm': 'M · 多年卡 Pluriannuelle',
        't': 'T · 全部权限 Tous droits'
    };
    // 法语课 french_type 映射
    const frenchMap = {
        'n': 'N · DELF',
        'r': 'R · DALF',
        'm': 'M · TCF',
        't': 'T · TCF IRN'
    };

    let html = '';

    // 公民课 type（学员 stu/stu_all + 会员 user）
    const showCivique = (role === 'stu' || role === 'stu_all' || role === 'user') && user.type;
    if (showCivique) {
        const label = civiqueMap[user.type] || user.type;
        html += '<span class="user-type type-' + user.type + '">' + label + '</span>';
    }

    // 法语课 french_type（只有法语学员 + 双课学员）
    const showFrancais = (role === 'stu_fr' || role === 'stu_all') && user.french_type;
    if (showFrancais) {
        const label = frenchMap[user.french_type] || user.french_type;
        html += '<span class="user-type type-' + user.french_type + '" style="margin-left:4px;background:rgba(230,126,34,0.12);color:#d35400;">🇫🇷 ' + label + '</span>';
    }

    return html || '—';
}
function renderUsersTable() {
    const tbody = document.getElementById('usersTableBody');
    if (!tbody) return;

    if (filteredUsers.length === 0) {
        tbody.innerHTML = '<tr><td colspan="11" class="empty-state"><i class="fas fa-users"></i><p>Aucun utilisateur</p></td></tr>';
        return;
    }

    tbody.innerHTML = filteredUsers.map(u => {
        const rowClass = isExpired(u) ? 'expired-row' : '';
        const roleBadge = getRoleBadge(u.role);

        const modules = u.modules || [];
        let moduleHtml = '';
        if (modules.includes('civique') && modules.includes('francais')) {
            moduleHtml = '<span class="badge badge-both">📘🇫🇷 Double</span>';
        } else if (modules.includes('civique')) {
            moduleHtml = '<span class="badge badge-civique">📘 Civique</span>';
        } else if (modules.includes('francais')) {
            moduleHtml = '<span class="badge badge-francais">🇫🇷 Français</span>';
        } else {
            moduleHtml = '<span style="color:#999;">—</span>';
        }

        const typeHtml = getUserTypeHtml(u);
        const levelHtml = u.level || '—';
                // 只有学员才显示 credit
        const isStudent = (u.role === 'stu' || u.role === 'stu_fr' || u.role === 'stu_all');

       // 只有学员才显示 credit（会员 user 不显示）
        let civiqueCreditHtml = '—';
        if (u.role === 'stu' || u.role === 'stu_all') {
            const c = u.credit || 0;
            const cls = c <= 0 ? 'credit-zero' : (c <= 3 ? 'credit-low' : 'credit-normal');
            civiqueCreditHtml = '<span class="' + cls + '">' + c + ' h</span>';
        }

        let frenchCreditHtml = '—';
        if (u.role === 'stu_fr' || u.role === 'stu_all') {
            const f = u.french_credit || 0;
            const cls = f <= 0 ? 'credit-zero' : (f <= 3 ? 'credit-low' : 'credit-normal');
            frenchCreditHtml = '<span class="' + cls + '">' + f + ' h</span>';
        }

     

       let timerText = '—';
        if (u.timer && (u.role === 'stu' || u.role === 'stu_all' || u.role === 'user')) {
            timerText = formatDateShort(u.timer) + (isExpired(u) ? ' ⚠️' : '');
        } else if (u.french_timer && (u.role === 'stu_fr' || u.role === 'stu_all')) {
            const frExpired = new Date(u.french_timer) < new Date();
            timerText = formatDateShort(u.french_timer) + (frExpired ? ' ⚠️' : '');
        }

        return '<tr class="' + rowClass + '">' +
            '<td><strong>' + escapeHtml(u.name) + '</strong></td>' +
            '<td>' + roleBadge + '</td>' +
            '<td>' + moduleHtml + '</td>' +
            '<td>' + typeHtml + '</td>' +
            '<td>' + levelHtml + '</td>' +
            '<td class="credit-cell">' + civiqueCreditHtml + '</td>' +
            '<td class="credit-cell">' + frenchCreditHtml + '</td>' +
            '<td>' + timerText + '</td>' +
            '<td>' + escapeHtml(u.email || '—') + '</td>' +
            '<td><div class="password-cell"><span class="pwd">' + escapeHtml(u.password || '—') + '</span>' +
            (u.password ? '<button class="copy-password-btn" data-pwd="' + escapeHtml(u.password) + '"><i class="fas fa-copy"></i></button>' : '') +
            '</div></td>' +
            '<td><div class="action-buttons">' +
            '<button class="action-btn edit-btn" data-id="' + u.id + '"><i class="fas fa-edit"></i></button>' +
            '<button class="action-btn delete-btn" data-id="' + u.id + '"' + (u.role === 'admin' && u.id === currentAdmin.userId ? ' disabled' : '') + '><i class="fas fa-trash"></i></button>' +
            '</div></td>' +
            '</tr>';
    }).join('');

    tbody.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', () => openUserModal(btn.dataset.id));
    });
    tbody.querySelectorAll('.delete-btn:not([disabled])').forEach(btn => {
        btn.addEventListener('click', () => confirmDeleteUser(btn.dataset.id));
    });
    tbody.querySelectorAll('.copy-password-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            navigator.clipboard.writeText(this.dataset.pwd).then(() => showToast('Copié!', 'success'));
        });
    });
}

function getRoleBadge(role) {
    const map = {
        'admin': '<span class="badge badge-admin">👑 Admin</span>',
        'teacher': '<span class="badge badge-teacher">👨‍🏫 Intervenant</span>',
        'stu': '<span class="badge badge-stu">📘 Élève Civique</span>',
        'stu_fr': '<span class="badge badge-stu_fr">🇫🇷 Élève Français</span>',
        'stu_all': '<span class="badge badge-stu_all">📘🇫🇷 Élève Double</span>',
        'user': '<span class="badge badge-user">👤 Membre</span>'
    };
    return map[role] || role || '—';
}

// ============================================================
// 用户模态框
// ============================================================
function openUserModal(userId) {
    const form = document.getElementById('userForm');
    form.reset();

    if (userId) {
        const u = allUsers.find(x => x.id === userId);
        if (!u) return;
        document.getElementById('userModalTitle').textContent = 'Modifier ' + u.name;
        document.getElementById('userId').value = u.id;
        document.getElementById('userName').value = u.name;
        document.getElementById('userEmail').value = u.email || '';
        document.getElementById('userPassword').value = '';
        document.getElementById('userRole').value = u.role || 'user';
        document.getElementById('userType').value = u.type || '';
        document.getElementById('userFrenchType').value = u.french_type || '';
        document.getElementById('userLevel').value = u.level || '';
        document.getElementById('userCredit').value = u.credit || 0;
        document.getElementById('userFrenchCredit').value = u.french_credit || 0;
        document.getElementById('userCreatedAt').textContent = formatDateTime(u.created_at);

        if (u.timer) {
            const d = new Date(u.timer);
            const local = new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
            document.getElementById('userTimer').value = local;
        }
        if (u.french_timer) {
            const d = new Date(u.french_timer);
            const local = new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
            document.getElementById('userFrenchTimer').value = local;
        }

        const mods = u.modules || [];
        document.getElementById('userModuleCivique').checked = mods.includes('civique');
        document.getElementById('userModuleFrancais').checked = mods.includes('francais');
    } else {
        document.getElementById('userModalTitle').textContent = t('um.title.add');
        document.getElementById('userId').value = '';
        document.getElementById('userCreatedAt').textContent = '—';
        document.getElementById('userModuleCivique').checked = true;
        document.getElementById('userRole').value = 'user';
        document.getElementById('userFrenchType').value = '';
    }

    updateUserModalFields();
    openModal('userModal');
}

function updateUserModalFields() {
    const role = document.getElementById('userRole').value;

    // 根据角色决定 modules 勾选
    if (role === 'stu') {
        document.getElementById('userModuleCivique').checked = true;
        document.getElementById('userModuleFrancais').checked = false;
    } else if (role === 'stu_fr') {
        document.getElementById('userModuleCivique').checked = false;
        document.getElementById('userModuleFrancais').checked = true;
    } else if (role === 'stu_all') {
        document.getElementById('userModuleCivique').checked = true;
        document.getElementById('userModuleFrancais').checked = true;
    } else if (role === 'teacher') {
        const civ = document.getElementById('userModuleCivique');
        const fr = document.getElementById('userModuleFrancais');
        if (!civ.checked && !fr.checked) civ.checked = true;
    } else if (role === 'user') {
        document.getElementById('userModuleCivique').checked = true;
        document.getElementById('userModuleFrancais').checked = false;
    } else {
        document.getElementById('userModuleCivique').checked = false;
        document.getElementById('userModuleFrancais').checked = false;
    }

    const showCivique = document.getElementById('userModuleCivique').checked;
    const showFrancais = document.getElementById('userModuleFrancais').checked;

    // === 能选 type 的角色：学员 + 会员 ===
    const canHaveType = role === 'stu' || role === 'stu_fr' || role === 'stu_all' || role === 'user';
    // === 能选 credit 的角色：只有学员 ===
    const canHaveCredit = role === 'stu' || role === 'stu_fr' || role === 'stu_all';

    // ===== 公民课字段 =====
    // 会员：显示 type + timer，但不显示 credit
    const showCiviqueType = (role === 'user') || (canHaveType && showCivique);
    const showCiviqueCredit = canHaveCredit && showCivique;

    document.getElementById('civiqueFields').style.display = showCiviqueType ? 'grid' : 'none';
    document.getElementById('civiqueTimerRow').style.display = showCiviqueType ? 'block' : 'none';

    const creditGroup = document.getElementById('civiqueCreditGroup');
    if (creditGroup) {
        creditGroup.style.display = showCiviqueCredit ? 'block' : 'none';
    }

    // ===== 法语课字段（会员不显示）=====
    const showFrancaisFields = (role === 'stu_fr' || role === 'stu_all') && showFrancais;

    document.getElementById('francaisFields').style.display = showFrancaisFields ? 'grid' : 'none';
    document.getElementById('francaisTimerRow').style.display = showFrancaisFields ? 'block' : 'none';

    // 动态改 modules label
    const modulesLabel = document.getElementById('modulesLabel');
    if (modulesLabel) {
        modulesLabel.textContent = (role === 'teacher') ? 'Enseigne (教什么课)' : (t('form.modules') || 'Modules autorisés');
    }
}

async function handleUserSubmit(e) {
    e.preventDefault();
    const id = document.getElementById('userId').value;
    const name = document.getElementById('userName').value.trim();
    const email = document.getElementById('userEmail').value.trim();
    const password = document.getElementById('userPassword').value;
    const role = document.getElementById('userRole').value;

    if (!name) { showToast('Nom requis', 'error'); return; }

    const modules = [];
    if (document.getElementById('userModuleCivique').checked) modules.push('civique');
    if (document.getElementById('userModuleFrancais').checked) modules.push('francais');

    const data = {
    name: name,
    email: email || null,
    role: role,
    modules: modules,
    type: document.getElementById('userType').value || null,
    french_type: document.getElementById('userFrenchType').value || null,
    level: document.getElementById('userLevel').value || null,
    credit: parseInt(document.getElementById('userCredit').value) || 0,
    french_credit: parseInt(document.getElementById('userFrenchCredit').value) || 0
};
    if (password) data.password = password;

    const timer = document.getElementById('userTimer').value;
    data.timer = timer ? new Date(timer).toISOString() : null;
    const frenchTimer = document.getElementById('userFrenchTimer').value;
    data.french_timer = frenchTimer ? new Date(frenchTimer).toISOString() : null;

    showLoading(id ? 'Modification...' : 'Création...');
    try {
        const supabase = window.supabaseAuth.getSupabaseClient();
        let result;
        if (id) {
            result = await supabase.from('users').update(data).eq('id', id).select().single();
        } else {
            if (!password) { showToast('Mot de passe requis', 'error'); hideLoading(); return; }
            data.created_at = new Date().toISOString();
            result = await supabase.from('users').insert([data]).select().single();
        }
        if (result.error) throw result.error;
        closeModal('userModal');
        await loadAllData();
        showToast(id ? 'Utilisateur modifié ✓' : 'Utilisateur créé ✓', 'success');
    } catch (err) {
        console.error(err);
        showToast('Erreur: ' + err.message, 'error');
    } finally {
        hideLoading();
    }
}

function confirmDeleteUser(id) {
    const u = allUsers.find(x => x.id === id);
    if (!u) return;
    if (!confirm('Supprimer ' + u.name + ' ?\n\nCette action est irréversible.')) return;

    showLoading('Suppression...');
    (async () => {
        try {
            const supabase = window.supabaseAuth.getSupabaseClient();
            const { error } = await supabase.from('users').delete().eq('id', id);
            if (error) throw error;
            await loadAllData();
            showToast('Supprimé ✓', 'success');
        } catch (err) {
            showToast('Erreur: ' + err.message, 'error');
        } finally {
            hideLoading();
        }
    })();
}
// ============================================================
// 预注册管理
// ============================================================
function updatePreRegCount() {
    const pending = allPreRegs.filter(r => r.status === 'pending').length;
    const el1 = document.getElementById('preRegCount');
    const el2 = document.getElementById('preRegCount2');
    if (el1) el1.textContent = pending;
    if (el2) el2.textContent = pending;
}

function renderPreRegTable() {
    const tbody = document.getElementById('preRegTableBody');
    if (!tbody) return;

    if (allPreRegs.length === 0) {
        tbody.innerHTML = '<tr><td colspan="10" class="empty-state"><i class="fas fa-user-plus"></i><p>Aucune pré-inscription</p></td></tr>';
        return;
    }

    tbody.innerHTML = allPreRegs.map(reg => {
        const statusMap = {
            'pending': '<span class="badge badge-pending">⏳ En attente</span>',
            'validated': '<span class="badge badge-validated">✅ Validé</span>',
            'rejected': '<span class="badge badge-rejected">❌ Rejeté</span>'
        };
        const paymentMap = {
            'wechat': '<span class="payment-badge payment-wechat">WeChat</span>',
            'alipay': '<span class="payment-badge payment-alipay">Alipay</span>',
            'xiaohongshu': '<span class="payment-badge payment-xiaohongshu">Xiaohongshu</span>',
            'cb': '<span class="payment-badge payment-cb">CB</span>'
        };
        const civiqueTypeLabels = {
            'n': 'N · 入籍',
            'r': 'R · 十年卡',
            'm': 'M · 多年卡',
            't': 'T · 全部权限'
        };
        const typeText = civiqueTypeLabels[reg.type] || reg.type || '—';
        const roleText = { 'user': 'Membre', 'stu': 'Élève', 'teacher': 'Intervenant' }[reg.role] || reg.role || '—';
        const isEditable = reg.status === 'pending';

        return '<tr' + (reg.status === 'pending' ? ' style="background:rgba(255,214,51,0.06);"' : '') + '>' +
            '<td><strong>' + escapeHtml(reg.name) + '</strong></td>' +
            '<td><span class="user-type type-' + (reg.type || 'n') + '">' + typeText + '</span></td>' +
            '<td>' + roleText + '</td>' +
            '<td>' + formatDateShort(reg.created_at) + '</td>' +
            '<td>' + formatDateShort(reg.timer) + '</td>' +
            '<td>' + (reg.credit ? reg.credit + ' h' : '—') + '</td>' +
            '<td style="font-size:0.78rem;">' + escapeHtml(reg.order_number || '—') + '</td>' +
            '<td>' + (paymentMap[reg.payment_method] || '—') + '</td>' +
            '<td>' + (statusMap[reg.status] || reg.status) + '</td>' +
            '<td><div class="action-buttons">' +
            (isEditable ? '<button class="action-btn edit-btn" data-action="edit-prereg" data-id="' + reg.id + '"><i class="fas fa-pen"></i></button>' : '') +
            (reg.status === 'pending' ? '<button class="action-btn-validate" data-action="validate" data-id="' + reg.id + '"><i class="fas fa-check"></i></button>' +
                '<button class="action-btn-reject" data-action="reject" data-id="' + reg.id + '"><i class="fas fa-times"></i></button>' : '') +
            '<button class="action-btn-detail" data-action="detail" data-id="' + reg.id + '"><i class="fas fa-eye"></i></button>' +
            '</div></td>' +
            '</tr>';
    }).join('');

    tbody.querySelectorAll('[data-action="edit-prereg"]').forEach(btn => {
        btn.addEventListener('click', () => openEditPreRegModal(parseInt(btn.dataset.id)));
    });
    tbody.querySelectorAll('[data-action="validate"]').forEach(btn => {
        btn.addEventListener('click', () => validatePreReg(parseInt(btn.dataset.id)));
    });
    tbody.querySelectorAll('[data-action="reject"]').forEach(btn => {
        btn.addEventListener('click', () => rejectPreReg(parseInt(btn.dataset.id)));
    });
    tbody.querySelectorAll('[data-action="detail"]').forEach(btn => {
        btn.addEventListener('click', () => showPreRegDetail(parseInt(btn.dataset.id)));
    });
}

function showPreRegDetail(id) {
    const reg = allPreRegs.find(r => r.id === id);
    if (!reg) return;

   const typeMap = {
    'n': 'N — Naturalisation (入籍)',
    'r': 'R — Carte 10 ans (十年卡)',
    'm': 'M — Carte pluriannuelle (多年卡)',
    't': 'T — Tous droits (全部权限)'
};
    const roleMap = { 'user': 'Membre / 会员', 'stu': 'Élève / 学员', 'teacher': 'Intervenant' };
    const paymentMap = { 'wechat': 'WeChat 微信', 'alipay': 'Alipay 支付宝', 'xiaohongshu': 'Xiaohongshu 小红书', 'cb': 'CB 银行卡' };
    const statusMap = { 'pending': 'En attente / 等待中', 'validated': 'Validé / 已通过', 'rejected': 'Rejeté / 已拒绝' };

    document.getElementById('dName').textContent = reg.name || '—';
    document.getElementById('dType').textContent = typeMap[reg.type] || reg.type || '—';
    document.getElementById('dRole').textContent = roleMap[reg.role] || reg.role || '—';
    document.getElementById('dCreated').textContent = formatDateTime(reg.created_at);
    document.getElementById('dTimer').textContent = formatDateTime(reg.timer);
    document.getElementById('dCredit').textContent = reg.credit || 0;
    document.getElementById('dPrice').textContent = reg.estimated_price ? reg.estimated_price + ' €' : '—';
    document.getElementById('dOrderNumber').textContent = reg.order_number || '—';
    document.getElementById('dPaymentMethod').textContent = paymentMap[reg.payment_method] || '—';
    document.getElementById('dStatus').textContent = statusMap[reg.status] || reg.status;
    document.getElementById('dEmail').textContent = reg.email || '—';
    document.getElementById('dBirth').textContent = reg.birth_date || '—';
    document.getElementById('dBirthPlace').textContent = reg.birth_place || '—';
    document.getElementById('dAddress').textContent = reg.address || '—';
    document.getElementById('dPhone').textContent = reg.phone || '—';
    document.getElementById('dPack').textContent = reg.pack_hours ? (reg.pack_hours + ' h' + (reg.pack_price ? ' (' + reg.pack_price + ' €)' : '')) : '—';

    openModal('detailModal');
}

function openEditPreRegModal(id) {
    const reg = allPreRegs.find(r => r.id === id);
    if (!reg || reg.status !== 'pending') {
        showToast('Impossible: déjà traité', 'warning');
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
    document.getElementById('editPreRegPack').value = reg.pack_hours ? reg.pack_hours + 'h' : '';
    document.getElementById('editPreRegAddress').value = reg.address || '';
    document.getElementById('editPreRegBirth').value = reg.birth_date || '';
    document.getElementById('editPreRegBirthPlace').value = reg.birth_place || '';

    if (reg.timer) {
        const d = new Date(reg.timer);
        const local = new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
        document.getElementById('editPreRegTimer').value = local;
    } else {
        document.getElementById('editPreRegTimer').value = '';
    }

    openModal('editPreRegModal');
}

async function handleEditPreRegSubmit(e) {
    e.preventDefault();
    const id = parseInt(document.getElementById('editPreRegId').value);
    const reg = allPreRegs.find(r => r.id === id);
    if (!reg || reg.status !== 'pending') {
        showToast('Déjà traité', 'warning');
        closeModal('editPreRegModal');
        return;
    }

    const name = document.getElementById('editPreRegName').value.trim();
    if (!name) { showToast('Nom requis', 'error'); return; }

    const data = {
        name: name,
        email: document.getElementById('editPreRegEmail').value.trim() || null,
        type: document.getElementById('editPreRegType').value,
        role: document.getElementById('editPreRegRole').value || null,
        credit: parseInt(document.getElementById('editPreRegCredit').value) || 0,
        estimated_price: parseInt(document.getElementById('editPreRegPrice').value) || 0,
        order_number: document.getElementById('editPreRegOrderNumber').value.trim() || null,
        payment_method: document.getElementById('editPreRegPaymentMethod').value || null,
        phone: document.getElementById('editPreRegPhone').value.trim() || null,
        address: document.getElementById('editPreRegAddress').value.trim() || null,
        birth_date: document.getElementById('editPreRegBirth').value || null,
        birth_place: document.getElementById('editPreRegBirthPlace').value.trim() || null,
        updated_at: new Date().toISOString()
    };

    const password = document.getElementById('editPreRegPassword').value.trim();
    if (password) data.password = password;

    const pack = document.getElementById('editPreRegPack').value.trim();
    if (pack) {
        const m = pack.match(/\d+/);
        data.pack_hours = m ? parseInt(m[0]) : null;
    } else {
        data.pack_hours = null;
    }

    const timer = document.getElementById('editPreRegTimer').value;
    data.timer = timer ? new Date(timer).toISOString() : null;

    showLoading('Modification...');
    try {
        const supabase = window.supabaseAuth.getSupabaseClient();
        const { error } = await supabase.from('pre_registrations').update(data).eq('id', id);
        if (error) throw error;
        closeModal('editPreRegModal');
        await loadAllData();
        showToast('Pré-inscription modifiée ✓', 'success');
    } catch (err) {
        showToast('Erreur: ' + err.message, 'error');
    } finally {
        hideLoading();
    }
}

async function validatePreReg(id) {
    const reg = allPreRegs.find(r => r.id === id);
    if (!reg || reg.status !== 'pending') {
        showToast('Déjà traité', 'warning');
        return;
    }

    if (!confirm('Valider la pré-inscription de ' + reg.name + ' ?\n\nL\'utilisateur sera ajouté à la base.')) return;
    if (!reg.password || reg.password.trim() === '') {
        showToast('Pré-inscription sans mot de passe. Corrigez-la d\'abord.', 'error');
        return;
    }
    showLoading('Validation...');
    try {
        const supabase = window.supabaseAuth.getSupabaseClient();

        const roleToModules = {
            'stu': ['civique'],
            'stu_fr': ['francais'],
            'stu_all': ['civique', 'francais'],
            'teacher': ['civique'],
            'admin': ['civique'],
            'user': []
        };
        const modules = roleToModules[reg.role] || ['civique'];

        const studentData = {
            name: reg.name,
            password: reg.password,
            email: reg.email || null,
            role: reg.role || 'stu',
            type: reg.type || null,
            credit: reg.credit || 0,
            french_credit: 0,
            timer: reg.timer || null,
            french_timer: null,
            level: null,
            modules: modules,
            created_at: reg.created_at || new Date().toISOString()
        };

        const { error: insertErr } = await supabase.from('users').insert([studentData]);
        if (insertErr) {
            if (insertErr.code === '23505') {
                showToast('Ce nom existe déjà', 'error');
                return;
            }
            throw insertErr;
        }

        await supabase.from('pre_registrations').update({
            status: 'validated',
            validated_at: new Date().toISOString(),
            validated_by: currentAdmin.name || 'admin'
        }).eq('id', id);

        if (reg.email) {
            try {
                await sendActivationEmail(reg.email, reg.name, reg.type, reg.role, reg.password);
                showToast('✅ Validé + email envoyé', 'success');
            } catch (e) {
                showToast('✅ Validé (email non envoyé)', 'warning');
            }
        } else {
            showToast('✅ Validé (pas d\'email)', 'info');
        }

        await loadAllData();
    } catch (err) {
        console.error(err);
        showToast('Erreur: ' + err.message, 'error');
    } finally {
        hideLoading();
    }
}

async function rejectPreReg(id) {
    const reg = allPreRegs.find(r => r.id === id);
    if (!reg || reg.status !== 'pending') return;
    if (!confirm('Rejeter la pré-inscription de ' + reg.name + ' ?')) return;

    showLoading('Rejet...');
    try {
        const supabase = window.supabaseAuth.getSupabaseClient();
        const { error } = await supabase.from('pre_registrations').update({
            status: 'rejected',
            validated_at: new Date().toISOString(),
            validated_by: currentAdmin.name || 'admin'
        }).eq('id', id);
        if (error) throw error;
        await loadAllData();
        showToast('Pré-inscription rejetée', 'warning');
    } catch (err) {
        showToast('Erreur: ' + err.message, 'error');
    } finally {
        hideLoading();
    }
}

// ============================================================
// 课程管理 - 过滤器
// ============================================================
let groupSelectedStudents = [];

function buildCiviqueFilterOptions() {
    const typeSelect = document.getElementById('civiqueFilterType');
    const codes = getAllCiviqueTypeCodes();
    typeSelect.innerHTML = '<option value="">Tous les types</option>' +
        codes.map(c => '<option value="' + c + '">' + getCiviqueTypeText(c) + '</option>').join('');

    const teacherSelect = document.getElementById('civiqueFilterTeacher');
    const teachers = allUsers.filter(u => u.role === 'teacher' && (u.modules || []).includes('civique'));
    teacherSelect.innerHTML = '<option value="">Tous les intervenants</option>' +
        teachers.map(t2 => '<option value="' + t2.id + '">' + escapeHtml(t2.name) + '</option>').join('');
}

function buildFrenchFilterOptions() {
    const typeSelect = document.getElementById('frenchFilterType');
    typeSelect.innerHTML = '<option value="">Tous les types</option>' +
        FRENCH_TYPES.map(t2 => '<option value="' + t2.code + '">' + t2.name + '</option>').join('');

    const teacherSelect = document.getElementById('frenchFilterTeacher');
    const teachers = allUsers.filter(u => u.role === 'teacher' && (u.modules || []).includes('francais'));
    teacherSelect.innerHTML = '<option value="">Tous les intervenants</option>' +
        teachers.map(t2 => '<option value="' + t2.id + '">' + escapeHtml(t2.name) + '</option>').join('');
}

function toggleCourseFilter(category, upcoming) {
    if (category === 'civique') {
        civiqueFilter.showUpcoming = upcoming;
        document.getElementById('civiqueShowUpcoming').classList.toggle('active', upcoming);
        document.getElementById('civiqueShowPast').classList.toggle('active', !upcoming);
        renderCiviqueCourses();
    } else {
        frenchFilter.showUpcoming = upcoming;
        document.getElementById('frenchShowUpcoming').classList.toggle('active', upcoming);
        document.getElementById('frenchShowPast').classList.toggle('active', !upcoming);
        renderFrenchCourses();
    }
}

function renderCiviqueCourses() {
    const container = document.getElementById('civiqueCoursesList');
    if (!container) return;
    let list = allCiviqueCourses.slice();
    if (civiqueFilter.showUpcoming) {
        list = list.filter(c => c.status !== 'completed' && c.status !== 'cancelled');
    } else {
        list = list.filter(c => c.status === 'completed' || c.status === 'cancelled');
    }
    if (civiqueFilter.type) list = list.filter(c => c.course_type === civiqueFilter.type);
    if (civiqueFilter.teacherId) list = list.filter(c => c.teacher_id === civiqueFilter.teacherId);
    if (civiqueFilter.search) {
        const s = civiqueFilter.search;
        list = list.filter(c =>
            (c.teacher?.name || '').toLowerCase().includes(s) ||
            (c.students || []).some(stu => (stu.name || '').toLowerCase().includes(s)) ||
            (c.student?.name || '').toLowerCase().includes(s)
        );
    }
    if (list.length === 0) {
        container.innerHTML = '<div class="empty-state"><i class="fas fa-calendar-times"></i><p>Aucun cours</p></div>';
        return;
    }
    container.innerHTML = list.map(c => renderCourseCard(c, 'civique')).join('');
    bindCourseCardEvents(container, 'civique');
}

function renderFrenchCourses() {
    const container = document.getElementById('frenchCoursesList');
    if (!container) return;
    let list = allFrenchCourses.slice();
    if (frenchFilter.showUpcoming) {
        list = list.filter(c => c.status !== 'completed' && c.status !== 'cancelled');
    } else {
        list = list.filter(c => c.status === 'completed' || c.status === 'cancelled');
    }
    if (frenchFilter.type) list = list.filter(c => c.course_type === frenchFilter.type);
    if (frenchFilter.teacherId) list = list.filter(c => c.teacher_id === frenchFilter.teacherId);
    if (frenchFilter.search) {
        const s = frenchFilter.search;
        list = list.filter(c =>
            (c.teacher?.name || '').toLowerCase().includes(s) ||
            (c.students || []).some(stu => (stu.name || '').toLowerCase().includes(s)) ||
            (c.student?.name || '').toLowerCase().includes(s)
        );
    }
    if (list.length === 0) {
        container.innerHTML = '<div class="empty-state"><i class="fas fa-calendar-times"></i><p>Aucun cours</p></div>';
        return;
    }
    container.innerHTML = list.map(c => renderCourseCard(c, 'francais')).join('');
    bindCourseCardEvents(container, 'francais');
}

function renderCourseCard(c, category) {
    const typeText = category === 'civique' ? getCiviqueTypeText(c.course_type) : getFrenchTypeText(c.course_type);
    const teacherName = c.teacher?.name || '—';
    const studentName = (c.students || []).map(s => s.name).join(', ') || c.student?.name || '—';

    const statusMap = {
        'scheduled': '<span class="status-badge status-scheduled">📅 Planifié</span>',
        'in_progress': '<span class="status-badge status-in_progress">🔄 En cours</span>',
        'completed': '<span class="status-badge status-completed">✅ Terminé</span>',
        'cancelled': '<span class="status-badge status-cancelled">❌ Annulé</span>'
    };

    const modeBadge = c.course_mode === 'group'
        ? '<span class="mode-indicator mode-group"><i class="fas fa-users"></i> Groupe</span>'
        : '<span class="mode-indicator mode-solo"><i class="fas fa-user"></i> Individuel</span>';

    const startStr = formatDateTime(c.start_time);

    let studentsHtml = '';
    if (c.course_mode === 'group') {
        studentsHtml = '<div class="detail-item"><i class="fas fa-users"></i> Groupe de ' + (c.max_students || '?') + ' élèves max</div>';
    } else {
        studentsHtml = '<div class="detail-item"><i class="fas fa-user-graduate"></i> Élève: ' + escapeHtml(studentName) + '</div>';
    }

    return '<div class="course-card" data-id="' + c.id + '" data-category="' + category + '">' +
        '<div class="course-header">' +
        '<span class="course-title">' + typeText + ' — ' + startStr + '</span>' +
        '<div>' + modeBadge + ' ' + (statusMap[c.status] || c.status) + '</div>' +
        '</div>' +
        '<div class="course-details">' +
        studentsHtml +
        '<div class="detail-item"><i class="fas fa-chalkboard-user"></i> ' + escapeHtml(teacherName) + '</div>' +
        '<div class="detail-item"><i class="fas fa-clock"></i> ' + (c.duration || 2) + ' h</div>' +
        '<div class="detail-item"><i class="fas fa-map-marker-alt"></i> ' + escapeHtml(c.location || 'À définir') + '</div>' +
        (c.meeting_link ? '<div class="detail-item"><i class="fas fa-video"></i> <a href="' + c.meeting_link + '" target="_blank">Lien visio</a></div>' : '') +
        (c.cancel_reason ? '<div class="detail-item"><i class="fas fa-ban"></i> Motif: ' + escapeHtml(c.cancel_reason) + '</div>' : '') +
        '</div>' +
        '<div class="course-actions">' +
        '<button class="action-btn edit-btn" data-action="edit"><i class="fas fa-edit"></i> Modifier</button>' +
        (c.status !== 'cancelled' && c.status !== 'completed' ?
            '<button class="action-btn cancel-btn-icon" data-action="cancel"><i class="fas fa-ban"></i> Annuler</button>' : '') +
        '<button class="action-btn delete-btn" data-action="delete"><i class="fas fa-trash"></i> Supprimer</button>' +
        '</div>' +
        '</div>';
}

function bindCourseCardEvents(container, category) {
    container.querySelectorAll('[data-action="edit"]').forEach(btn => {
        btn.addEventListener('click', function() {
            const card = this.closest('.course-card');
            openCourseModal(category, card.dataset.id);
        });
    });
    container.querySelectorAll('[data-action="cancel"]').forEach(btn => {
        btn.addEventListener('click', function() {
            const card = this.closest('.course-card');
            const id = card.dataset.id;
            pendingCancelData = { id: id, category: category };
            document.querySelectorAll('.cancel-reason-option').forEach(o => o.classList.remove('selected'));
            document.querySelectorAll('input[name="cancelReason"]').forEach(r => r.checked = false);
            document.getElementById('customReason').value = '';
            document.getElementById('customReasonContainer').classList.remove('show');
            openModal('cancelReasonModal');
        });
    });
    container.querySelectorAll('[data-action="delete"]').forEach(btn => {
        btn.addEventListener('click', function() {
            const card = this.closest('.course-card');
            const id = card.dataset.id;
            showDeleteCourseConfirm(id, category);
        });
    });
}

// ============================================================
// 课程模态框
// ============================================================
function openCourseModal(category, courseId) {
    const form = document.getElementById('courseForm');
    form.reset();
    document.getElementById('courseCategory').value = category;
    document.getElementById('courseMode').value = 'solo';
    groupSelectedStudents = [];

    document.querySelectorAll('.mode-card').forEach(m => {
        m.classList.toggle('active', m.dataset.mode === 'solo');
    });
    document.getElementById('soloStudentGroup').style.display = 'block';
    document.getElementById('groupStudentsGroup').style.display = 'none';
    document.getElementById('courseMeetingLink').value = '';
    document.getElementById('courseDuration').value = 2;
    document.getElementById('courseConflictWarning').classList.remove('show');

    const soloSelect = document.getElementById('courseStudentSolo');
    let students;
    if (category === 'civique') {
        students = allUsers.filter(u => u.role === 'stu' || u.role === 'stu_all');
    } else {
        students = allUsers.filter(u => u.role === 'stu_fr' || u.role === 'stu_all');
    }
    soloSelect.innerHTML = '<option value="">Sélectionner...</option>' +
        students.map(s => '<option value="' + s.id + '">' + escapeHtml(s.name) + ' (' + (category === 'civique' ? (s.credit || 0) : (s.french_credit || 0)) + 'h)</option>').join('');

    const teacherSelect = document.getElementById('courseTeacher');
    const teachers = allUsers.filter(u => u.role === 'teacher' && (u.modules || []).includes(category));
    teacherSelect.innerHTML = '<option value="">Sélectionner...</option>' +
        teachers.map(t2 => '<option value="' + t2.id + '">' + escapeHtml(t2.name) + '</option>').join('');

    renderGroupStudentsList(students, category);

    if (category === 'civique') {
        renderCiviqueTypeSelector('');
    } else {
        renderFrenchTypeSelector('');
    }

    if (courseId) {
        const course = category === 'civique'
            ? allCiviqueCourses.find(c => c.id === courseId)
            : allFrenchCourses.find(c => c.id === courseId);
        if (!course) return;

        document.getElementById('courseModalTitle').textContent = 'Modifier le cours';
        document.getElementById('courseId').value = course.id;
        document.getElementById('courseMode').value = course.course_mode || 'solo';
        document.getElementById('courseMeetingLink').value = course.meeting_link || getTeacherMeetingLink(course.teacher_id) || '';
        document.getElementById('courseDuration').value = course.duration || 2;
        document.getElementById('courseLocation').value = course.location || '';
        document.getElementById('courseMaterialLink').value = course.material_link || '';
        document.getElementById('courseNotes').value = course.notes || '';
        document.getElementById('courseStatus').value = course.status || 'scheduled';

        if (course.start_time) {
            const d = new Date(course.start_time);
            const local = new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
            document.getElementById('courseStartTime').value = local;
        }

        if (course.course_mode === 'group') {
            document.querySelectorAll('.mode-card').forEach(m => {
                m.classList.toggle('active', m.dataset.mode === 'group');
            });
            document.getElementById('soloStudentGroup').style.display = 'none';
            document.getElementById('groupStudentsGroup').style.display = 'block';

            const supabase = window.supabaseAuth.getSupabaseClient();
            supabase.from('course_students').select('student_id').eq('course_id', courseId).then(res => {
                const ids = (res.data || []).map(x => x.student_id);
                groupSelectedStudents = ids.slice();
                ids.forEach(id => {
                    const cb = document.querySelector('#groupStudentsList input[value="' + id + '"]');
                    if (cb) { cb.checked = true; cb.closest('.student-checkbox').classList.add('selected'); }
                });
                updateSelectedStudentsSummary();
            });
        } else {
            soloSelect.value = course.student_id || '';
        }

        document.getElementById('courseTeacher').value = course.teacher_id || '';

        if (category === 'civique') {
            renderCiviqueTypeSelector(course.course_type || '');
        } else {
            renderFrenchTypeSelector(course.course_type || '');
        }
    } else {
        document.getElementById('courseModalTitle').textContent = t('cm.title.add');
        document.getElementById('courseId').value = '';
    }

    openModal('courseModal');
}

function selectCourseMode(mode) {
    document.getElementById('courseMode').value = mode;
    document.querySelectorAll('.mode-card').forEach(m => {
        m.classList.toggle('active', m.dataset.mode === mode);
    });
    document.getElementById('soloStudentGroup').style.display = mode === 'solo' ? 'block' : 'none';
    document.getElementById('groupStudentsGroup').style.display = mode === 'group' ? 'block' : 'none';
}

function renderGroupStudentsList(students, category) {
    const list = document.getElementById('groupStudentsList');
    list.innerHTML = students.map(s => {
        const credit = category === 'civique' ? (s.credit || 0) : (s.french_credit || 0);
        return '<label class="student-checkbox" data-name="' + escapeHtml(s.name).toLowerCase() + '">' +
            '<input type="checkbox" value="' + s.id + '" data-credit="' + credit + '">' +
            '<span class="student-name">' + escapeHtml(s.name) + '</span>' +
            '<span class="student-credit">' + credit + 'h</span>' +
            '</label>';
    }).join('');

    list.querySelectorAll('input[type="checkbox"]').forEach(cb => {
        cb.addEventListener('change', function() {
            if (this.checked) {
                groupSelectedStudents.push(this.value);
                this.closest('.student-checkbox').classList.add('selected');
            } else {
                groupSelectedStudents = groupSelectedStudents.filter(id => id !== this.value);
                this.closest('.student-checkbox').classList.remove('selected');
            }
            updateSelectedStudentsSummary();
        });
    });

    updateSelectedStudentsSummary();
}

function updateSelectedStudentsSummary() {
    const hint = document.getElementById('selectedCountHint');
    const summary = document.getElementById('selectedStudentsSummary');
    const chips = document.getElementById('selectedStudentsChips');

    if (hint) hint.textContent = '(' + groupSelectedStudents.length + ' sélectionné' + (groupSelectedStudents.length > 1 ? 's' : '') + ')';

    if (groupSelectedStudents.length === 0) {
        summary.style.display = 'none';
        return;
    }
    summary.style.display = 'block';
    chips.innerHTML = groupSelectedStudents.map(id => {
        const u = allUsers.find(x => x.id === id);
        return '<span class="student-chip">' + escapeHtml(u?.name || '?') + '<span class="remove" data-id="' + id + '">×</span></span>';
    }).join('');

    chips.querySelectorAll('.remove').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = this.dataset.id;
            groupSelectedStudents = groupSelectedStudents.filter(x => x !== id);
            const cb = document.querySelector('#groupStudentsList input[value="' + id + '"]');
            if (cb) { cb.checked = false; cb.closest('.student-checkbox').classList.remove('selected'); }
            updateSelectedStudentsSummary();
        });
    });
}

function filterGroupStudents() {
    const term = document.getElementById('groupSearchInput').value.toLowerCase();
    document.querySelectorAll('#groupStudentsList .student-checkbox').forEach(el => {
        el.style.display = el.dataset.name.includes(term) ? 'flex' : 'none';
    });
}

function autoFillMeetingLink() {
    const teacherId = document.getElementById('courseTeacher').value;
    const linkInput = document.getElementById('courseMeetingLink');

    if (!teacherId) {
        linkInput.value = '';
        return;
    }

    const link = getTeacherMeetingLink(teacherId);

    if (link) {
        linkInput.value = link;
    } else {
        linkInput.value = '';
        showToast('⚠️ Ce professeur n\'a pas de lien Meet configuré. Ajoutez-le dans la table teacher_meeting_links.', 'warning');
    }
}

// ============================================================
// 课程类型选择器
// ============================================================
function renderCiviqueTypeSelector(selectedCode) {
    const container = document.getElementById('courseTypeSelector');
    const cfg = CIVIQUE_TYPES;
    const isRootExpanded = selectedCode && selectedCode !== 'ec';

    let html = '<div class="course-type-container">';
    html += '<div class="level1-item">' +
        '<div class="level1-header ' + (!isRootExpanded ? 'collapsed' : '') + '" data-level1="root">' +
        '<i class="fas fa-star"></i><span>' + cfg.rootName + '</span>' +
        '<i class="fas fa-chevron-down chevron"></i>' +
        '</div>' +
        '<div class="level2-container ' + (!isRootExpanded ? 'hidden' : '') + '" id="level2-root">';

    for (const g of cfg.children) {
        const isExpanded = selectedCode && (g.code === selectedCode || g.children.some(c => c.code === selectedCode));
        html += '<div class="level2-item">' +
            '<div class="level2-header ' + (!isExpanded ? 'collapsed' : '') + '" data-level2="' + g.code + '">' +
            '<i class="fas fa-list"></i><span>' + g.name + '</span>' +
            '<i class="fas fa-chevron-down chevron2"></i>' +
            '</div>' +
            '<div class="level3-container ' + (!isExpanded ? 'hidden' : '') + '" id="level3-' + g.code + '">';
        for (const c of g.children) {
            html += '<div class="type-option ' + (selectedCode === c.code ? 'selected' : '') + '" data-code="' + c.code + '">' + c.name + '</div>';
        }
        html += '</div></div>';
    }
    html += '</div></div></div>';
    container.innerHTML = html;
    bindTypeSelectorEvents(container);

    if (selectedCode && selectedCode !== 'ec') {
        document.getElementById('courseTypeValue').value = selectedCode;
        const display = document.getElementById('selectedTypeDisplay');
        display.style.display = 'inline-block';
        display.textContent = '已选: ' + getCiviqueTypeText(selectedCode);
    }
}

function renderFrenchTypeSelector(selectedCode) {
    const container = document.getElementById('courseTypeSelector');
    let html = '<div class="course-type-container">';
    html += '<div class="level1-item">' +
        '<div class="level1-header" data-level1="root">' +
        '<i class="fas fa-language"></i><span>🇫🇷 Cours de français</span>' +
        '<i class="fas fa-chevron-down chevron"></i>' +
        '</div>' +
        '<div class="level2-container" id="level2-root">' +
        '<div class="level3-container">';

    for (const t2 of FRENCH_TYPES) {
        html += '<div class="type-option ' + (selectedCode === t2.code ? 'selected' : '') + '" data-code="' + t2.code + '">' + t2.name + '</div>';
    }
    html += '</div></div></div></div>';
    container.innerHTML = html;

    container.querySelectorAll('.type-option').forEach(opt => {
        opt.addEventListener('click', function() {
            container.querySelectorAll('.type-option').forEach(o => o.classList.remove('selected'));
            this.classList.add('selected');
            document.getElementById('courseTypeValue').value = this.dataset.code;
            const display = document.getElementById('selectedTypeDisplay');
            display.style.display = 'inline-block';
            display.textContent = '已选: ' + getFrenchTypeText(this.dataset.code);
        });
    });

    if (selectedCode) {
        document.getElementById('courseTypeValue').value = selectedCode;
        const display = document.getElementById('selectedTypeDisplay');
        display.style.display = 'inline-block';
        display.textContent = '已选: ' + getFrenchTypeText(selectedCode);
    }
}

function bindTypeSelectorEvents(container) {
    container.querySelectorAll('.level1-header').forEach(h => {
        h.addEventListener('click', function() {
            const l2 = document.getElementById('level2-root');
            l2.classList.toggle('hidden');
            this.classList.toggle('collapsed');
        });
    });
    container.querySelectorAll('.level2-header').forEach(h => {
        h.addEventListener('click', function() {
            const code = this.dataset.level2;
            const l3 = document.getElementById('level3-' + code);
            l3.classList.toggle('hidden');
            this.classList.toggle('collapsed');
        });
    });
    container.querySelectorAll('.type-option').forEach(opt => {
        opt.addEventListener('click', function() {
            container.querySelectorAll('.type-option').forEach(o => o.classList.remove('selected'));
            this.classList.add('selected');
            document.getElementById('courseTypeValue').value = this.dataset.code;
            const display = document.getElementById('selectedTypeDisplay');
            display.style.display = 'inline-block';
            display.textContent = '已选: ' + getCiviqueTypeText(this.dataset.code);
        });
    });
}

// ============================================================
// 课程提交
// ============================================================

async function handleCourseSubmit(e) {
    e.preventDefault();
    const id = document.getElementById('courseId').value;
    const category = document.getElementById('courseCategory').value;
    const mode = document.getElementById('courseMode').value;
    const teacherId = document.getElementById('courseTeacher').value;
    const startTimeLocal = document.getElementById('courseStartTime').value;
    const duration = parseFloat(document.getElementById('courseDuration').value) || 2;
    const courseType = document.getElementById('courseTypeValue').value;
    const status = document.getElementById('courseStatus').value;

    // ---------- 1. 基础校验 ----------
    if (!teacherId) { showToast('Intervenant requis', 'error'); return; }
    if (!startTimeLocal) { showToast('Date/heure requise', 'error'); return; }
    if (!courseType) { showToast('Type de cours requis', 'error'); return; }

    const startTimeStr = normalizeLocalDateTime(startTimeLocal);
    if (!startTimeStr) { showToast('Format date invalide', 'error'); return; }

    // ---------- 2. 冲突检查（老师已有课程） ----------
    const allCoursesForCheck = [...allCiviqueCourses, ...allFrenchCourses];
    const startTs = new Date(startTimeStr).getTime();
    const endTs = startTs + duration * 3600000;
    const hasConflict = allCoursesForCheck.some(c => {
        if (c.teacher_id !== teacherId) return false;
        if (id && c.id === id) return false;
        if (c.status === 'cancelled') return false;
        const cs = new Date(c.start_time).getTime();
        const ce = cs + (c.duration || 2) * 3600000;
        return startTs < ce && endTs > cs;
    });
    if (hasConflict) {
        document.getElementById('courseConflictWarning').classList.add('show');
        showToast('Conflit horaire!', 'error');
        return;
    }

    // ---------- 3. 收集 studentIds ----------
    let studentId = null;
    let studentIds = [];
    if (mode === 'solo') {
        studentId = document.getElementById('courseStudentSolo').value;
        if (!studentId) { showToast('Élève requis', 'error'); return; }
        studentIds = [studentId];
    } else {
        if (groupSelectedStudents.length === 0) {
            showToast('Sélectionnez au moins un élève', 'error');
            return;
        }
        studentId = groupSelectedStudents[0];
        studentIds = groupSelectedStudents.slice();
    }

    // ---------- 4. Credit 检查 ----------
    const field = category === 'civique' ? 'credit' : 'french_credit';

    if (!id) {
        const insufficient = [];
        for (const sid of studentIds) {
            const stu = allUsers.find(u => u.id === sid);
            if (!stu) continue;
            const current = stu[field] || 0;
            if (current < duration) {
                insufficient.push({ name: stu.name, current, needed: duration, diff: duration - current });
            }
        }
        if (insufficient.length > 0) {
            let msg = currentLang === 'fr'
                ? '⚠️ Crédits insuffisants pour :\n\n'
                : '⚠️ 以下学员课时不足：\n\n';
            insufficient.forEach(s => {
                msg += `• ${s.name} : ${s.current}h / ${s.needed}h ${currentLang === 'fr' ? '(manque ' + s.diff + 'h)' : '(缺 ' + s.diff + 'h)'}\n`;
            });
            msg += currentLang === 'fr'
                ? '\nContinuer quand même ? Les crédits seront mis à 0.'
                : '\n仍要继续吗？课时将被归零。';
            if (!confirm(msg)) return;
        }
    } else {
        const oldCourse = category === 'civique'
            ? allCiviqueCourses.find(c => c.id === id)
            : allFrenchCourses.find(c => c.id === id);

        if (oldCourse) {
            const oldDur = oldCourse.duration || 2;
            const supabaseTmp = window.supabaseAuth.getSupabaseClient();
            const { data: oldCsList } = await supabaseTmp
                .from('course_students')
                .select('student_id')
                .eq('course_id', id);

            let oldStudentIds = (oldCsList || []).map(cs => cs.student_id);
            if (oldStudentIds.length === 0 && oldCourse.student_id) {
                oldStudentIds = [oldCourse.student_id];
            }

            const insufficient = [];
            for (const sid of studentIds) {
                const stu = allUsers.find(u => u.id === sid);
                if (!stu) continue;
                const isNewlyAdded = !oldStudentIds.includes(sid);
                const additionalHours = isNewlyAdded ? duration : Math.max(0, duration - oldDur);
                if (additionalHours <= 0) continue;
                const current = stu[field] || 0;
                if (current < additionalHours) {
                    insufficient.push({ name: stu.name, current, needed: additionalHours, diff: additionalHours - current });
                }
            }
            if (insufficient.length > 0) {
                let msg = currentLang === 'fr'
                    ? '⚠️ Crédits insuffisants pour les modifications :\n\n'
                    : '⚠️ 以下学员课时不足以完成修改：\n\n';
                insufficient.forEach(s => {
                    msg += `• ${s.name} : ${s.current}h ${currentLang === 'fr' ? 'disponibles, ' + s.needed + 'h nécessaires (manque ' + s.diff + 'h)' : '可用, 需要 ' + s.needed + 'h (缺 ' + s.diff + 'h)'}\n`;
                });
                msg += currentLang === 'fr'
                    ? '\nContinuer quand même ? Les crédits seront mis à 0.'
                    : '\n仍要继续吗？课时将被归零。';
                if (!confirm(msg)) return;
            }
        }
    }

    // ---------- 5. 校验老师 Meet 链接 ----------
    const meetingLink = document.getElementById('courseMeetingLink').value.trim();
    if (!meetingLink) {
        showToast('⚠️ Ce professeur n\'a pas de lien Meet configuré', 'error');
        return;
    }

    // ---------- 6. 构造 data ----------
    const data = {
        category: category,
        course_mode: mode,
        course_type: courseType,
        student_id: studentId,
        teacher_id: teacherId,
        start_time: startTimeStr,
        duration: duration,
        location: document.getElementById('courseLocation').value.trim() || null,
        material_link: document.getElementById('courseMaterialLink').value.trim() || null,
        meeting_link: meetingLink,
        notes: document.getElementById('courseNotes').value.trim() || null,
        status: status,
        max_students: mode === 'group' ? studentIds.length : 1
    };

    // ---------- 7. 状态 = cancelled → 走取消流程 ----------
    if (status === 'cancelled') {
        pendingCancelData = { id: id, category: category, data: data, isNew: !id };
        openModal('cancelReasonModal');
        return;
    }

    // ---------- 8. 写入数据库 ----------
    showLoading(id ? 'Modification...' : 'Création...');
    try {
        const supabase = window.supabaseAuth.getSupabaseClient();
        let courseResult;

        let oldCreditInfo = null;
        if (id) {
            const oldCourse = category === 'civique'
                ? allCiviqueCourses.find(c => c.id === id)
                : allFrenchCourses.find(c => c.id === id);

            const { data: oldCsList } = await supabase
                .from('course_students')
                .select('student_id')
                .eq('course_id', id);

            let oldStudentIds = (oldCsList || []).map(cs => cs.student_id);
            if (oldStudentIds.length === 0 && oldCourse?.student_id) {
                oldStudentIds = [oldCourse.student_id];
            }
            oldCreditInfo = {
                studentIds: oldStudentIds,
                duration: oldCourse?.duration || 2,
                category: oldCourse?.category || category
            };
        }

        if (id) {
            const updateRes = await supabase
                .from('courses_v2')
                .update(data)
                .eq('id', id)
                .select()
                .single();
            if (updateRes.error) throw updateRes.error;
            courseResult = updateRes.data;
            await supabase.from('course_students').delete().eq('course_id', id);
        } else {
            data.created_at = new Date().toISOString();
            const insertRes = await supabase
                .from('courses_v2')
                .insert([data])
                .select()
                .single();
            if (insertRes.error) throw insertRes.error;
            courseResult = insertRes.data;
        }

        const csData = studentIds.map(sid => ({
            course_id: courseResult.id,
            student_id: sid
        }));
        const { error: csErr } = await supabase.from('course_students').insert(csData);
        if (csErr) {
            console.warn('⚠️ course_students 写入失败:', csErr.message);
        }

        // ---------- 9. 退旧 credit + 扣新 credit ----------
        if (oldCreditInfo && oldCreditInfo.studentIds.length > 0) {
            for (const sid of oldCreditInfo.studentIds) {
                await refundStudentCredit(sid, oldCreditInfo.duration, oldCreditInfo.category);
            }
        }
        for (const sid of studentIds) {
            await deductStudentCredit(sid, duration, category);
        }

        // ---------- 10. 🔥 删除老师「未被预定」的冲突空闲 ----------
        let availRemoved = 0;
        try {
            const availResult = await removeConflictingAvailabilities(
                teacherId,
                startTimeStr,
                duration
            );
            availRemoved = availResult.removed || 0;
        } catch (e) {
            console.warn('⚠️ 清理冲突空闲失败:', e.message);
        }

        // ---------- 11. 邮件通知 ----------
        const action = id ? 'update' : 'create';
        let emailResult = null;
        try {
            emailResult = await sendCourseEmailNotification(courseResult.id, action);
        } catch (emailErr) {
            console.warn('⚠️ 邮件发送异常:', emailErr.message);
        }

        // ---------- 12. 关闭 + 刷新 + Toast ----------
        closeModal('courseModal');
        await loadAllData();

        const savedMsg = id ? 'Cours modifié ✓' : 'Cours créé ✓';
        let extraMsg = '';
        if (availRemoved > 0) {
            extraMsg += ` — 🗑️ ${availRemoved} 个冲突空闲已删除`;
        }

        if (emailResult?.skipped) {
            showToast(savedMsg + extraMsg + ' — ⚠️ 邮件未发送', 'warning');
        } else if (emailResult?.sentCount > 0) {
            showToast(savedMsg + extraMsg + ` — 📧 ${emailResult.sentCount} 封邮件已发送`, 'success');
        } else {
            showToast(savedMsg + extraMsg, 'success');
        }

    } catch (err) {
        console.error(err);
        showToast('Erreur: ' + err.message, 'error');
    } finally {
        hideLoading();
    }
}
// ============================================================
// 课时扣减/退还
// ============================================================
async function deductStudentCredit(studentId, hours, category) {
    if (!studentId || !hours) return true;
    const supabase = window.supabaseAuth.getSupabaseClient();
    const field = category === 'civique' ? 'credit' : 'french_credit';

    const { data: u, error: fetchErr } = await supabase
        .from('users')
        .select(field)
        .eq('id', studentId)
        .maybeSingle();

    if (fetchErr || !u) {
        console.warn('⚠️ deductStudentCredit: 学生不存在', studentId);
        return false;
    }

    const current = u[field] || 0;

    // Credit 不足时警告（不阻止，只提示）
    if (current < hours) {
        console.warn('⚠️ Credit 不足: 学生', studentId, '— 当前', current, 'h，需要', hours, 'h');
    }

    const newVal = Math.max(0, current - hours);

    const { error: updErr } = await supabase
        .from('users')
        .update({ [field]: newVal })
        .eq('id', studentId);

    if (updErr) {
        console.error('❌ 扣 credit 失败:', updErr.message);
        return false;
    }
    return true;
}
async function refundStudentCredit(studentId, hours, category) {
    if (!studentId || !hours) return true;
    const supabase = window.supabaseAuth.getSupabaseClient();
    const field = category === 'civique' ? 'credit' : 'french_credit';

    const { data: u, error: fetchErr } = await supabase
        .from('users')
        .select(field)
        .eq('id', studentId)
        .maybeSingle();

    if (fetchErr || !u) {
        console.warn('⚠️ refundStudentCredit: 学生不存在', studentId);
        return false;
    }

    const current = u[field] || 0;
    const newVal = current + hours;

    const { error: updErr } = await supabase
        .from('users')
        .update({ [field]: newVal })
        .eq('id', studentId);

    if (updErr) {
        console.error('❌ refund credit 失败:', updErr.message);
        return false;
    }
    return true;
}

// ============================================================
// 取消原因
// ============================================================
async function confirmCancelReason() {
    if (!pendingCancelData) return;
    let reason = null;
    document.querySelectorAll('input[name="cancelReason"]').forEach(r => { if (r.checked) reason = r.value; });
    if (reason === '其他') {
        const custom = document.getElementById('customReason').value.trim();
        if (custom) reason = custom;
    }
    if (!reason) { showToast('Sélectionnez un motif', 'error'); return; }

    showLoading('Annulation...');
    let emailResult = null;   // 🔥 声明
    try {
        const supabase = window.supabaseAuth.getSupabaseClient();
        const { id, category, data, isNew } = pendingCancelData;

        if (isNew) {
            // ============================================================
            // 新建一个已取消的课程：不需要退 credit（因为还没扣过）
            // ============================================================
            const insertRes = await supabase
                .from('courses_v2')
                .insert([{ ...data, cancel_reason: reason, status: 'cancelled' }])
                .select()
                .single();

            if (!insertRes.error) {
                try {
                    emailResult = await sendCourseEmailNotification(insertRes.data.id, 'cancel');
                } catch (e) {
                    console.warn('⚠️ 取消邮件失败:', e.message);
                }
            }
        } else {
            // ============================================================
            // 防重：先查当前状态，已取消就直接退出
            // ============================================================
            const { data: currentCourse } = await supabase
                .from('courses_v2')
                .select('status')
                .eq('id', id)
                .maybeSingle();

            if (currentCourse?.status === 'cancelled') {
                showToast('Cours déjà annulé', 'warning');
                closeModal('cancelReasonModal');
                closeModal('courseModal');
                pendingCancelData = null;
                return;
            }

            // 1) 先更新状态为 cancelled
            const { error: updErr } = await supabase
                .from('courses_v2')
                .update({ status: 'cancelled', cancel_reason: reason })
                .eq('id', id);
            if (updErr) throw updErr;

            // 2) 拿学生列表 + 退 credit
            const { data: csList } = await supabase
                .from('course_students')
                .select('student_id')
                .eq('course_id', id);

            const ids = (csList || []).map(cs => cs.student_id);
            const course = category === 'civique'
                ? allCiviqueCourses.find(c => c.id === id)
                : allFrenchCourses.find(c => c.id === id);
            const dur = course?.duration || 2;

            for (const sid of ids) {
                await refundStudentCredit(sid, dur, category);
            }

            // 3) 发邮件（状态已 cancelled，但 overrideCourse 可以传原 course）
            try {
                emailResult = await sendCourseEmailNotification(id, 'cancel');
            } catch (e) {
                console.warn('⚠️ 取消邮件失败:', e.message);
            }
        }

        closeModal('cancelReasonModal');
        closeModal('courseModal');
        await loadAllData();

        // 邮件结果提示
        if (emailResult?.sentCount > 0) {
            showToast(`Cours annulé ✓ — 📧 ${emailResult.sentCount} 封邮件已发送`, 'success');
        } else if (emailResult?.skipped) {
            showToast('Cours annulé ✓ — ⚠️ 邮件未发送（无邮箱）', 'warning');
        } else {
            showToast('Cours annulé ✓', 'success');
        }
        pendingCancelData = null;
    } catch (err) {
        showToast('Erreur: ' + err.message, 'error');
    } finally {
        hideLoading();
    }
}

// ============================================================
// 删除课程
// ============================================================
function showDeleteCourseConfirm(id, category) {
    const course = category === 'civique'
        ? allCiviqueCourses.find(c => c.id === id)
        : allFrenchCourses.find(c => c.id === id);
    if (!course) return;

    pendingDeleteCourse = { id, category };

    const typeText = category === 'civique' ? getCiviqueTypeText(course.course_type) : getFrenchTypeText(course.course_type);
    document.getElementById('deleteCourseType').textContent = typeText;
    document.getElementById('deleteCourseDate').textContent = formatDateTime(course.start_time);
    document.getElementById('deleteCourseTeacher').textContent = course.teacher?.name || '—';
    document.getElementById('deleteCourseStudent').textContent = course.student?.name || '—';

    document.getElementById('deleteConfirmOverlay').classList.add('active');
}

async function confirmDeleteCourse() {
    if (!pendingDeleteCourse.id) return;
    const { id, category } = pendingDeleteCourse;
    const course = category === 'civique'
        ? allCiviqueCourses.find(c => c.id === id)
        : allFrenchCourses.find(c => c.id === id);

    showLoading('Suppression...');
    try {
        const supabase = window.supabaseAuth.getSupabaseClient();

        // ============================================================
        // 1. 先拿学生列表（删课程后 course_students 会被级联删）
        // ============================================================
        const { data: csList } = await supabase
            .from('course_students')
            .select('student_id')
            .eq('course_id', id);
        const ids = (csList || []).map(cs => cs.student_id);
        const dur = course?.duration || 2;

        // ============================================================
        // 2. 🔥 删除前：先发邮件（用 course 快照，因为马上要删了）
        // ============================================================
        let emailResult = null;
        try {
            emailResult = await sendCourseEmailNotification(id, 'delete', course);
        } catch (e) {
            console.warn('⚠️ 删除前邮件发送失败:', e.message);
        }

        // ============================================================
        // 3. 删除课程
        // ============================================================
        const { error: delErr } = await supabase
            .from('courses_v2')
            .delete()
            .eq('id', id);
        if (delErr) throw delErr;

        // ============================================================
        // 4. 删除成功后：退 credit
        // ============================================================
        for (const sid of ids) {
            try {
                await refundStudentCredit(sid, dur, category);
            } catch (e) {
                console.warn('⚠️ 退 credit 失败:', sid, e.message);
            }
        }

        document.getElementById('deleteConfirmOverlay').classList.remove('active');
        pendingDeleteCourse = { id: null, category: null };
        await loadAllData();

        if (emailResult?.sentCount > 0) {
            showToast(`Cours supprimé ✓ — 📧 ${emailResult.sentCount} 封邮件已发送`, 'success');
        } else {
            showToast('Cours supprimé ✓', 'success');
        }
    } catch (err) {
        showToast('Erreur: ' + err.message, 'error');
    } finally {
        hideLoading();
    }
}
// ============================================================
// 🔥 学生考试管理
// ============================================================
function updateStudentExamTypes() {
    const category = document.getElementById('studentExamCategory').value;
    const types = STUDENT_EXAM_TYPES[category] || [];
    const typeSelect = document.getElementById('studentExamType');
    typeSelect.innerHTML = types.map(t2 => '<option value="' + t2.code + '">' + t2.label + '</option>').join('');
}

function renderStudentExams() {
    const tbody = document.getElementById('studentExamsTableBody');
    if (!tbody) return;

    let list = allStudentExams.slice();

    if (studentExamFilter !== 'all') {
        if (studentExamFilter.startsWith('cat-')) {
            const cat = studentExamFilter.replace('cat-', '');
            list = list.filter(e => e.exam_category === cat);
        } else if (studentExamFilter.startsWith('status-')) {
            const st = studentExamFilter.replace('status-', '');
            list = list.filter(e => e.status === st);
        }
    }

    if (studentExamSearch) {
        list = list.filter(e => (e.student?.name || '').toLowerCase().includes(studentExamSearch));
    }

    if (list.length === 0) {
        tbody.innerHTML = '<tr><td colspan="8" class="empty-state"><i class="fas fa-file-signature"></i><p>Aucun examen enregistré</p></td></tr>';
        return;
    }

    const statusMap = {
        'planned': '<span class="badge badge-scheduled">📅 Planifié</span>',
        'passed': '<span class="badge badge-validated">✅ Réussi</span>',
        'failed': '<span class="badge badge-rejected">❌ Échoué</span>',
        'absent': '<span class="badge badge-cancelled">🚫 Absent</span>'
    };

    const catMap = {
        'civique': '<span class="badge badge-civique">📘 Civique</span>',
        'francais': '<span class="badge badge-francais">🇫🇷 Français</span>'
    };

    tbody.innerHTML = list.map(e => {
        const scoreText = e.score !== null && e.score !== undefined
            ? (e.total ? e.score + ' / ' + e.total : e.score)
            : '—';

        return '<tr>' +
            '<td><strong>' + escapeHtml(e.student?.name || '—') + '</strong></td>' +
            '<td>' + (catMap[e.exam_category] || e.exam_category || '—') + '</td>' +
            '<td>' + getStudentExamTypeLabel(e.exam_type) + '</td>' +
            '<td>' + formatDateShort(e.exam_date) + '</td>' +
            '<td>' + scoreText + '</td>' +
            '<td>' + (statusMap[e.status] || e.status || '—') + '</td>' +
            '<td>' + escapeHtml(e.notes || '—') + '</td>' +
            '<td><div class="action-buttons">' +
            '<button class="action-btn edit-btn" data-id="' + e.id + '" data-action="edit-exam"><i class="fas fa-edit"></i></button>' +
            '<button class="action-btn delete-btn" data-id="' + e.id + '" data-action="delete-exam"><i class="fas fa-trash"></i></button>' +
            '</div></td>' +
            '</tr>';
    }).join('');

    tbody.querySelectorAll('[data-action="edit-exam"]').forEach(btn => {
        btn.addEventListener('click', () => openStudentExamModal(btn.dataset.id));
    });
    tbody.querySelectorAll('[data-action="delete-exam"]').forEach(btn => {
        btn.addEventListener('click', () => deleteStudentExam(btn.dataset.id));
    });
}

function openStudentExamModal(id) {
    const form = document.getElementById('studentExamForm');
    form.reset();

    const studentSelect = document.getElementById('studentExamStudent');
    const students = allUsers.filter(u => u.role === 'stu' || u.role === 'stu_fr' || u.role === 'stu_all');
    studentSelect.innerHTML = '<option value="">Sélectionner...</option>' +
        students.map(s => '<option value="' + s.id + '">' + escapeHtml(s.name) + '</option>').join('');

    updateStudentExamTypes();

    if (id) {
        const e = allStudentExams.find(x => x.id === id);
        if (!e) return;
        document.getElementById('studentExamModalTitle').textContent = 'Modifier l\'examen';
        document.getElementById('studentExamId').value = e.id;
        document.getElementById('studentExamStudent').value = e.student_id || '';
        document.getElementById('studentExamCategory').value = e.exam_category || 'civique';
        updateStudentExamTypes();
        document.getElementById('studentExamType').value = e.exam_type || '';
        document.getElementById('studentExamDate').value = e.exam_date || '';
        document.getElementById('studentExamScore').value = e.score !== null ? e.score : '';
        document.getElementById('studentExamTotal').value = e.total !== null ? e.total : '';
        document.getElementById('studentExamStatus').value = e.status || 'planned';
        document.getElementById('studentExamNotes').value = e.notes || '';
    } else {
        document.getElementById('studentExamModalTitle').textContent = t('se.title.add');
        document.getElementById('studentExamId').value = '';
        const today = new Date().toISOString().slice(0, 10);
        document.getElementById('studentExamDate').value = today;
    }

    openModal('studentExamModal');
}

async function handleStudentExamSubmit(e) {
    e.preventDefault();
    const id = document.getElementById('studentExamId').value;
    const studentId = document.getElementById('studentExamStudent').value;
    const category = document.getElementById('studentExamCategory').value;
    const examType = document.getElementById('studentExamType').value;
    const examDate = document.getElementById('studentExamDate').value;
    const score = document.getElementById('studentExamScore').value;
    const total = document.getElementById('studentExamTotal').value;
    const status = document.getElementById('studentExamStatus').value;
    const notes = document.getElementById('studentExamNotes').value.trim();

    if (!studentId) { showToast('Élève requis', 'error'); return; }
    if (!examType) { showToast('Type requis', 'error'); return; }
    if (!examDate) { showToast('Date requise', 'error'); return; }

    const scoreNum = score === '' ? null : parseInt(score);
    const totalNum = total === '' ? null : parseInt(total);

    const data = {
        student_id: studentId,
        exam_category: category,
        exam_type: examType,
        exam_date: examDate,
        score: scoreNum,
        total: totalNum,
        passed: status === 'passed',
        status: status,
        notes: notes || null,
        updated_at: new Date().toISOString()
    };

    showLoading(id ? 'Modification...' : 'Création...');
    try {
        const supabase = window.supabaseAuth.getSupabaseClient();
        let result;
        if (id) {
            result = await supabase.from('student_exams').update(data).eq('id', id).select().single();
        } else {
            data.created_at = new Date().toISOString();
            result = await supabase.from('student_exams').insert([data]).select().single();
        }
        if (result.error) throw result.error;
        closeModal('studentExamModal');
        await loadAllData();
        showToast(id ? 'Examen modifié ✓' : 'Examen ajouté ✓', 'success');
    } catch (err) {
        showToast('Erreur: ' + err.message, 'error');
    } finally {
        hideLoading();
    }
}

async function deleteStudentExam(id) {
    const e = allStudentExams.find(x => x.id === id);
    if (!e) return;
    if (!confirm('Supprimer cet examen ?')) return;

    showLoading('Suppression...');
    try {
        const supabase = window.supabaseAuth.getSupabaseClient();
        const { error } = await supabase.from('student_exams').delete().eq('id', id);
        if (error) throw error;
        await loadAllData();
        showToast('Examen supprimé ✓', 'success');
    } catch (err) {
        showToast('Erreur: ' + err.message, 'error');
    } finally {
        hideLoading();
    }
}

// ============================================================
// 🔥 日历视图
// ============================================================
function changeWeek(delta) {
    if (delta === 0) {
        calendarWeekStart = getMonday(new Date());
    } else {
        calendarWeekStart = new Date(calendarWeekStart);
        calendarWeekStart.setDate(calendarWeekStart.getDate() + delta * 7);
    }
    renderCalendar();
}
window.changeWeek = changeWeek;

function buildCalendarFilterOptions() {
    const teacherSelect = document.getElementById('calFilterTeacher');
    if (teacherSelect) {
        const cur = teacherSelect.value;
        const teachers = allUsers.filter(u => u.role === 'teacher');
        teacherSelect.innerHTML = '<option value="">' + t('cal.filter.allTeachers') + '</option>' +
            teachers.map(x => '<option value="' + x.id + '">' + escapeHtml(x.name) + '</option>').join('');
        if (cur) teacherSelect.value = cur;
    }

    const studentSelect = document.getElementById('calFilterStudent');
    if (studentSelect) {
        const cur = studentSelect.value;
        const students = allUsers.filter(u => u.role === 'stu' || u.role === 'stu_fr' || u.role === 'stu_all');
        studentSelect.innerHTML = '<option value="">' + t('cal.filter.allStudents') + '</option>' +
            students.map(x => '<option value="' + x.id + '">' + escapeHtml(x.name) + '</option>').join('');
        if (cur) studentSelect.value = cur;
    }
}

function getCoursesForCalendar() {
    let list = [...allCiviqueCourses, ...allFrenchCourses];

    if (calendarFilter.category !== 'all') {
        list = list.filter(c => c.category === calendarFilter.category);
    }
    if (calendarFilter.teacherId) {
        list = list.filter(c => c.teacher_id === calendarFilter.teacherId);
    }
    if (calendarFilter.studentId) {
        list = list.filter(c => c.student_id === calendarFilter.studentId);
    }
    if (calendarFilter.status !== 'all') {
        list = list.filter(c => c.status === calendarFilter.status);
    }
    return list;
}

function renderCalendar() {
    const weekView = document.getElementById('weekView');
    const mobileList = document.getElementById('calendarMobileList');
    const label = document.getElementById('calendarWeekLabel');
    if (!weekView) return;

    // 标题
    const weekEnd = new Date(calendarWeekStart);
    weekEnd.setDate(weekEnd.getDate() + 6);
    const fmt = d => d.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' });
    if (label) label.textContent = fmt(calendarWeekStart) + ' → ' + fmt(weekEnd);

    const courses = getCoursesForCalendar();
    const days = [];
    for (let i = 0; i < 7; i++) {
        const d = new Date(calendarWeekStart);
        d.setDate(d.getDate() + i);
        days.push(d);
    }
    const todayStr = new Date().toDateString();

    // ============ 桌面网格 ============
    let html = '';
    html += '<div class="cal-header-row">';
    html += '<div class="cal-time-col"></div>';
    days.forEach((d, i) => {
        const isToday = d.toDateString() === todayStr;
        html += '<div class="cal-day-header' + (isToday ? ' today' : '') + '">' +
            '<div class="cal-day-name">' + t('days')[i] + '</div>' +
            '<div class="cal-day-date">' + d.getDate() + '</div>' +
            '</div>';
    });
    html += '</div>';

    const START_H = 8, END_H = 24;
    html += '<div class="cal-body">';
    html += '<div class="cal-time-col">';
    for (let h = START_H; h <= END_H; h++) {
        html += '<div class="cal-time-slot">' + String(h).padStart(2, '0') + ':00</div>';
    }
    html += '</div>';

    days.forEach(d => {
        html += '<div class="cal-day-col">';
        for (let h = START_H; h <= END_H; h++) {
            html += '<div class="cal-hour-cell"></div>';
        }
        const dayCourses = courses.filter(c => {
            const cd = new Date(c.start_time);
            return cd.toDateString() === d.toDateString();
        });
        dayCourses.forEach(c => {
            const cd = new Date(c.start_time);
            const h = cd.getHours() + cd.getMinutes() / 60;
            const dur = c.duration || 2;
            if (h + dur < START_H || h > END_H) return;
            const top = Math.max(0, (h - START_H)) * 60;
            const height = Math.min(dur * 60, (END_H - h + 1) * 60);
            const typeText = c.category === 'civique' ? getCiviqueTypeText(c.course_type) : getFrenchTypeText(c.course_type);
            const cancelled = c.status === 'cancelled';
            const completed = c.status === 'completed';
            html += '<div class="cal-course-card ' + (cancelled ? 'cancelled' : '') + (completed ? ' completed' : '') +
                '" data-id="' + c.id + '" data-category="' + c.category + '"' +
                ' style="top:' + top + 'px;height:' + height + 'px;">' +
                '<div class="cal-course-time">' + String(cd.getHours()).padStart(2, '0') + ':' + String(cd.getMinutes()).padStart(2, '0') + '</div>' +
                '<div class="cal-course-title">' + typeText + '</div>' +
                '<div class="cal-course-sub">' + escapeHtml(c.teacher?.name || '—') + '</div>' +
                '</div>';
        });
        html += '</div>';
    });
    html += '</div>';
    weekView.innerHTML = html;

    weekView.querySelectorAll('.cal-course-card').forEach(card => {
        card.addEventListener('click', () => openCourseDetailModal(card.dataset.id, card.dataset.category));
    });

    renderCalendarMobile(courses, days);
}

function renderCalendarMobile(courses, days) {
    const list = document.getElementById('calendarMobileList');
    if (!list) return;
    const todayStr = new Date().toDateString();
    let html = '';
    days.forEach((d, i) => {
        const isToday = d.toDateString() === todayStr;
        const dayCourses = courses.filter(c => new Date(c.start_time).toDateString() === d.toDateString())
            .sort((a, b) => new Date(a.start_time) - new Date(b.start_time));
        html += '<div class="cal-mobile-day' + (isToday ? ' today' : '') + '">' +
            '<div class="cal-mobile-day-header">' + t('daysFull')[i] + ' ' + d.getDate() + '/' + (d.getMonth() + 1) + '</div>';
        if (dayCourses.length === 0) {
            html += '<div class="cal-mobile-empty">—</div>';
        } else {
            dayCourses.forEach(c => {
                const cd = new Date(c.start_time);
                const typeText = c.category === 'civique' ? getCiviqueTypeText(c.course_type) : getFrenchTypeText(c.course_type);
                html += '<div class="cal-mobile-course" data-id="' + c.id + '" data-category="' + c.category + '">' +
                    '<div class="cal-mobile-time">' + String(cd.getHours()).padStart(2, '0') + ':' + String(cd.getMinutes()).padStart(2, '0') + '</div>' +
                    '<div class="cal-mobile-info">' +
                    '<div class="cal-mobile-title">' + typeText + '</div>' +
                    '<div class="cal-mobile-sub">' + escapeHtml(c.teacher?.name || '—') + ' · ' + (c.duration || 2) + 'h</div>' +
                    '</div></div>';
            });
        }
        html += '</div>';
    });
    list.innerHTML = html;
    list.querySelectorAll('.cal-mobile-course').forEach(card => {
        card.addEventListener('click', () => openCourseDetailModal(card.dataset.id, card.dataset.category));
    });
}

// ============================================================
// 🔥 只读课程详情弹窗
// ============================================================
function openCourseDetailModal(courseId, category) {
    const course = category === 'civique'
        ? allCiviqueCourses.find(c => c.id === courseId)
        : allFrenchCourses.find(c => c.id === courseId);
    if (!course) return;

    const typeText = category === 'civique' ? getCiviqueTypeText(course.course_type) : getFrenchTypeText(course.course_type);
    const statusMap = {
        'scheduled': '📅 ' + t('filter.scheduled'),
        'in_progress': '🔄 ' + t('cal.filter.inProgress'),
        'completed': '✅ ' + t('filter.completed'),
        'cancelled': '❌ ' + t('filter.cancelled')
    };
    const modeText = course.course_mode === 'group' ? t('cm.mode.group') : t('cm.mode.solo');
    const studentText = course.course_mode === 'group'
        ? modeText + ' (' + (course.max_students || '?') + ')'
        : (course.student?.name || '—');

    const titleEl = document.getElementById('courseDetailTitle');
    if (titleEl) titleEl.textContent = t('cd.title') + ' — ' + typeText;

    const body = document.getElementById('courseDetailBody');
    if (!body) return;

    body.innerHTML =
        '<div class="detail-grid">' +
        '<div class="detail-item"><span class="label">' + t('th.type') + '</span><div class="value">' + typeText + '</div></div>' +
        '<div class="detail-item"><span class="label">' + t('th.date') + '</span><div class="value">' + formatDateTime(course.start_time) + '</div></div>' +
        '<div class="detail-item"><span class="label">' + t('cm.duration') + '</span><div class="value">' + (course.duration || 2) + ' h</div></div>' +
        '<div class="detail-item"><span class="label">' + t('cm.teacher') + '</span><div class="value">' + escapeHtml(course.teacher?.name || '—') + '</div></div>' +
        '<div class="detail-item"><span class="label">' + t('cm.student') + '</span><div class="value">' + escapeHtml(studentText) + '</div></div>' +
        '<div class="detail-item"><span class="label">' + t('th.status') + '</span><div class="value">' + (statusMap[course.status] || course.status || '—') + '</div></div>' +
        '<div class="detail-item"><span class="label">' + t('cm.location') + '</span><div class="value">' + escapeHtml(course.location || '—') + '</div></div>' +
        '<div class="detail-item detail-full"><span class="label">🔗 Visio</span><div class="value">' +
        (course.meeting_link ? '<a href="' + course.meeting_link + '" target="_blank">' + escapeHtml(course.meeting_link) + '</a>' : '—') +
        '</div></div>' +
        '<div class="detail-item detail-full"><span class="label">' + t('th.notes') + '</span><div class="value">' + escapeHtml(course.notes || '—') + '</div></div>' +
        (course.cancel_reason ? '<div class="detail-item detail-full"><span class="label">❌ ' + t('cr.title') + '</span><div class="value" style="color:#e74c3c;">' + escapeHtml(course.cancel_reason) + '</div></div>' : '') +
        '</div>';

    openModal('courseDetailModal');
}

// ============================================================
// 启动
// ============================================================
document.addEventListener('DOMContentLoaded', init);

window.closeModal = closeModal;
window.selectCourseMode = selectCourseMode;
window.openCourseDetailModal = openCourseDetailModal;
window.changeWeek = changeWeek;
window.setLang = setLang;