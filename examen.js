// ============================================================
// Examen blanc v2 — écoute (banque + IA) · lecture · grammaire · écriture · oral (3 tâches) · bilan IA pondéré
// Paramètres modifiables ici ↓
// ============================================================
const CFG = {
  // Écoute : 5 questions tirées de la banque (audio réel) + 5 documents générés par l'IA (niveau B1–B2, lus par synthèse vocale)
  listening: { bank: { A1: 1, A2: 1, B1: 1, B2: 1, C1: 1 }, ai: ['B1', 'B1', 'B1', 'B2', 'B2'], maxPerText: 1,
    plays: 1,        // nombre de lectures automatiques de chaque document (2 = comme le DELF)
    answerSec: 3 },  // secondes pour répondre après la fin de l'audio, puis passage automatique à la suite,
  reading:   { lv: { A1: 1, A2: 1, B1: 1, B2: 1, C1: 1 }, maxPerText: 2 },
  grammar:   { lv: { A1: 3, A2: 4, B1: 4, B2: 4, C1: 3, C2: 2 } },          // total = 20
  writing: ['tache2', 'tache3'],               // 1 sujet tiré au hasard
  oralTasks: ['tache1', 'tache2', 'tache3'],   // 1 sujet par tâche
  oralShowZh: false,                           // afficher la traduction chinoise de la consigne ?
  oralShowFocus: false,                        // afficher « ce que l'examinateur cherche » ?
  // Poids de chaque épreuve dans le score global (renormalisé si une épreuve est absente)
  weights: { listening: 25, reading: 15, grammar: 20, writing: 20, oral: 20 },
  maxPlays: 2
};
const LV = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const LVX = ['Pré-A1', ...LV];
const LVN = { 'Pré-A1': 'Débutant', A1: 'Découverte', A2: 'Survie', B1: 'Seuil', B2: 'Indépendant', C1: 'Autonome', C2: 'Maîtrise' };
const NAMES = { listening: 'Compréhension orale', reading: 'Compréhension écrite', grammar: 'Grammaire', writing: 'Expression écrite', oral: 'Expression orale' };
const ORAL_MAX = { tache1: 180, tache2: 210, tache3: 210 };
const $ = id => document.getElementById(id);
const esc = s => { const d = document.createElement('div'); d.textContent = s ?? ''; return d.innerHTML; };
const shuf = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
const sb = () => window.supabaseAuth.getSupabaseClient();
const sum = o => Object.values(o).reduce((a, b) => a + b, 0);
const S = { user: null, order: [], stage: -1, running: false, kind: null, plays: {}, listening: {}, reading: {}, grammar: {}, writing: {}, oral: null, res: {},
  ttsTok: 0, lTok: 0, lTimer: null, ttsPlaying: false, ttsPct: 0, oralBusy: false };

function toast(m, t = 'info') {
  const c = $('toastContainer'), e = document.createElement('div');
  e.className = 'toast ' + t; e.innerHTML = '<i class="fas fa-info-circle"></i> ' + esc(m);
  c.appendChild(e); setTimeout(() => e.remove(), 3500);
}
function verifyUser() {
  const ROLES = ['stu', 'stu_fr', 'stu_all', 'teacher', 'admin'];
  try {
    const raw = new URLSearchParams(location.search).get('token');
    if (!raw) throw 0;
    const u = JSON.parse(decodeURIComponent(atob(raw)));
    if (!u || !(u.userId || u.id) || !ROLES.includes(u.role)) throw 0;
    if (u.expiry && new Date(u.expiry) < new Date()) throw 0;
    return u;
  } catch (e) {
    document.querySelector('main').style.display = 'none';
    toast('Veuillez vous connecter d\'abord', 'warning'); setTimeout(() => location.replace('francais.html'), 1500); return null;
  }
}
function leave() { if (!S.running || confirm('Quitter l\'examen ? Votre progression sera perdue.')) { S.running = false; stopAllAudio(); location.href = 'francais.html'; } }
window.addEventListener('beforeunload', e => { if (S.running) { e.preventDefault(); e.returnValue = ''; } });
function show(id) { ['sIntro', 'sQuiz', 'sWriting', 'sOral', 'sEval', 'sResult'].forEach(s => $(s).style.display = s === id ? 'block' : 'none'); scrollTo(0, 0); }
function stopAllAudio() { stopTTS(); if (S.au) S.au.pause(); if ('speechSynthesis' in window) speechSynthesis.cancel(); }

// ---------- Intro ----------
function intro() {
  const nL = sum(CFG.listening.bank) + CFG.listening.ai.length, nR = sum(CFG.reading.lv), nG = sum(CFG.grammar.lv);
  $('sIntro').innerHTML = `<div class="ex-card"><h2>Examen blanc de français</h2>
  <p>Cet examen combine des questions de la banque d'exercices (A1 → C2) et des documents générés par l'IA. À la fin, l'IA analyse vos scores, leur poids dans l'examen et votre profil par niveau pour estimer votre niveau CECRL.</p>
  <div class="ex-parts">
   <div class="ex-part"><b>🎧 Compréhension orale</b>${nL} questions · lecture automatique, ${CFG.listening.plays} écoute(s) par document, sans retour en arrière</div>
   <div class="ex-part"><b>📖 Compréhension écrite</b>${nR} questions</div>
   <div class="ex-part"><b>📘 Grammaire</b>${nG} questions couvrant des points variés</div>
   <div class="ex-part"><b>✍️ Expression écrite</b>1 sujet, corrigé par l'IA</div>
   <div class="ex-part"><b>🎤 Expression orale</b>3 tâches (présentation, interaction, opinion) avec l'examinateur IA · micro requis</div></div>
  <p style="font-size:.85rem;color:var(--text-light)">Durée estimée : 60–75 min. Aucune correction n'est affichée pendant l'examen. Ne fermez pas la page. Utilisez Chrome ou Edge pour la synthèse vocale.</p>
  <div class="ex-actions"><button class="ex-btn" id="startBtn" onclick="startExam()"><i class="fas fa-play"></i> Commencer l'examen</button></div></div>`;
}

// ---------- Banque (écoute / lecture) ----------
async function fetchAll(table) {
  let all = [], from = 0;
  for (;;) {
    const { data, error } = await sb().from(table).select('*').order('id').range(from, from + 999);
    if (error) throw error;
    all = all.concat(data || []);
    if (!data || data.length < 1000) return all;
    from += 1000;
  }
}
const opts = q => { let o = q.options; if (typeof o === 'string') { try { o = JSON.parse(o); } catch (e) { o = []; } } return Array.isArray(o) ? o : []; };
const clean = s => String(s ?? '').replace(/^[A-D][.)]\s*/, '');
function ci(q) {
  const ca = String(q.correct_answer ?? '').trim(), m = ca.match(/^([A-D])(?:[.\s):]|$)/i);
  if (m) return m[1].toUpperCase().charCodeAt(0) - 65;
  return opts(q).findIndex(o => clean(o).trim() === clean(ca).trim());
}
async function loadBank(kind) {
  const tt = kind === 'listening' ? 'listening_texts' : 'reading_texts', qt = kind === 'listening' ? 'listening_questions' : 'reading_questions';
  const [texts, qs] = await Promise.all([fetchAll(tt), fetchAll(qt)]);
  const byT = {}; qs.forEach(q => (byT[q.text_id] = byT[q.text_id] || []).push(q));
  return texts.filter(t => byT[t.id] && (kind !== 'listening' || t.audio_url)).map(t => ({ t: { ...t, level: String(t.level).toUpperCase().trim() }, qs: byT[t.id] }));
}
// Tire des questions de la banque selon un quota par niveau ; `used` évite les doublons entre appels.
function pickBank(groups, lvMap, maxPerText, used) {
  const picked = new Map(); let total = 0; const want = sum(lvMap);
  const take = (g, n) => {
    const free = shuf(g.qs.filter(q => !used.has(q.id))).slice(0, n);
    if (!free.length) return 0;
    free.forEach(q => used.add(q.id));
    const p = picked.get(g.t.id) || { t: g.t, qs: [] }; p.qs.push(...free); picked.set(g.t.id, p);
    return free.length;
  };
  for (const l of LV) {
    let need = lvMap[l] || 0;
    for (const g of shuf(groups.filter(g => g.t.level === l))) { if (need <= 0) break; const k = take(g, Math.min(need, maxPerText)); need -= k; total += k; }
  }
  for (const g of shuf(groups)) { if (total >= want) break; total += take(g, Math.min(want - total, maxPerText)); }
  const items = [];
  [...picked.values()].forEach(p => p.qs.sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0)).forEach(q => items.push({ q, text: p.t, level: p.t.level, src: 'banque' })));
  return items;
}
const byLevel = items => items.map((x, i) => [x, i]).sort((a, b) => (LV.indexOf(a[0].level) - LV.indexOf(b[0].level)) || a[1] - b[1]).map(x => x[0]);
const mkQ = items => ({ items, ans: items.map(() => null), i: 0 });

// ---------- Écoute : banque + documents IA ----------
const THEMES = ['le logement', 'le travail', 'la santé', 'les transports', 'les études', 'les loisirs et le sport', 'l\'environnement', 'les commerces et les achats', 'les voyages', 'la vie associative', 'la technologie au quotidien', 'la culture et les sorties', 'l\'alimentation', 'la vie de famille', 'la vie en ville'];
const FORMATS = ['dialogue entre deux personnes', 'annonce dans un lieu public', 'message laissé sur un répondeur', 'extrait d\'émission de radio (présentateur seul ou interview)', 'témoignage / monologue'];

async function groqJSON(prompt, maxTokens = 6000, temp = .3) {
  const k = async n => { const { data } = await sb().from('app_config').select('value').eq('key', n).maybeSingle(); return data && data.value && data.value.trim(); };
  const key = (await k('groq_api_key')) || (await k('groq_api_key_oral'));
  if (!key) throw new Error('Clé API non configurée');
  const r = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + key },
    body: JSON.stringify({ model: 'openai/gpt-oss-120b', temperature: temp, max_tokens: maxTokens, messages: [
      { role: 'system', content: 'Tu es un expert du CECRL et de la conception d\'épreuves de FLE. Tu réponds uniquement par un objet JSON valide.' }, { role: 'user', content: prompt }] })
  });
  if (!r.ok) throw new Error('IA ' + r.status);
  const txt = (await r.json()).choices[0].message.content, a = txt.indexOf('{'), b = txt.lastIndexOf('}');
  return JSON.parse(txt.slice(a, b + 1));
}
async function genListening(levels) {
  const themes = shuf(THEMES), fmts = shuf(FORMATS);
  const docs = levels.map((niveau, i) => ({ n: i + 1, niveau, theme: themes[i % themes.length], format: fmts[i % fmts.length] }));
  const prompt = `Conçois ${docs.length} documents sonores indépendants pour une épreuve de compréhension orale de français (type TCF/DELF), destinés à des apprenants chinois. Chaque document a UNE question à choix multiple (4 options).
Spécifications (une entrée = un document) :
${JSON.stringify(docs)}

Contraintes :
- "script" = le texte lu à voix haute par une synthèse vocale : phrases naturelles à l'oral, ponctuation correcte, sans didascalie ; écris les heures, prix et dates de façon lisible (« quatorze heures trente », « douze euros »).
- Niveau B1 : 70 à 110 mots, vocabulaire courant, informations plutôt explicites. Niveau B2 : 110 à 170 mots, informations implicites, opinions, nuances, connecteurs logiques, reformulations.
- Format dialogue : alternance de deux locuteurs "A" et "B" (une réplique = un élément de "script"). Tous les autres formats : un seul locuteur "A".
- La question porte sur la compréhension globale, un détail précis ou (B2) une déduction / l'intention du locuteur. Elle ne doit pas pouvoir être devinée sans écouter. Les 4 options sont plausibles, de longueur comparable, une seule est correcte ; les mots de la bonne réponse ne doivent pas être recopiés mot à mot dans le script.
- "answer" = index (0 à 3) de la bonne option ; varie cette position entre les documents.
- Aucun contenu politique ou sensible.
Réponds UNIQUEMENT avec ce JSON :
{"items":[{"niveau":"B1","script":[{"s":"A","t":"..."}],"question":"...","options":["...","...","...","..."],"answer":0,"explication":"1 phrase en français"}]}`;
  const r = await groqJSON(prompt, 8000, .7), out = [];
  (r.items || []).forEach((x, i) => {
    if (!x || !Array.isArray(x.script) || !x.script.length || !x.question || !Array.isArray(x.options) || x.options.length !== 4 || !(x.answer >= 0 && x.answer <= 3)) return;
    const script = x.script.map(l => ({ s: l.s === 'B' ? 'B' : 'A', t: String(l.t || '').trim() })).filter(l => l.t);
    if (!script.length) return;
    const order = shuf([0, 1, 2, 3]), o = order.map(k => String(x.options[k])), a = order.indexOf(x.answer);
    const level = LV.includes(String(x.niveau).toUpperCase()) ? String(x.niveau).toUpperCase() : (levels[i] || 'B1');
    const id = 'ai-' + Date.now() + '-' + out.length;
    out.push({ q: { id, question: String(x.question), options: o, correct_answer: 'ABCD'[a], explanation: x.explication || '' }, text: { id, level, tts: true, script }, level, src: 'ia' });
  });
  return out;
}
async function buildListening() {
  const L = CFG.listening, groups = await loadBank('listening'), used = new Set();
  const bank = pickBank(groups, L.bank, L.maxPerText, used);
  let ai = [];
  for (let attempt = 0; attempt < 2 && ai.length < L.ai.length; attempt++) {
    try { ai.push(...await genListening(L.ai.slice(ai.length))); } catch (e) { console.warn('Génération IA écoute échouée', e); }
  }
  ai = ai.slice(0, L.ai.length);
  let extra = [];
  if (ai.length < L.ai.length) {     // secours : compléter avec la banque (B1/B2)
    const lack = {}; L.ai.slice(ai.length).forEach(l => lack[l] = (lack[l] || 0) + 1);
    extra = pickBank(groups, lack, 2, used);
    toast('Génération IA incomplète : questions complétées avec la banque', 'warning');
  }
  return mkQ(byLevel([...bank, ...ai, ...extra]));
}
async function buildReading() {
  const R = CFG.reading, groups = await loadBank('reading');
  return mkQ(byLevel(pickBank(groups, R.lv, R.maxPerText, new Set())));
}

// ---------- Grammaire ----------
const norm = s => String(s ?? '').toLowerCase().replace(/[’‘`´]/g, '\'').replace(/[.!?]+$/, '').replace(/\s+/g, ' ').trim();
const gKey = e => String(e.topic_id ?? e.grammar_topic_id ?? e.topic ?? e.category ?? e.sub_category ?? 'x');
const validG = e => e && (e.type === 'fill_blank' || e.type === 'multiple_choice') && e.question && e.correct_answer != null && (e.type === 'fill_blank' || opts(e).length >= 2);
// Tour de rôle sur les points de grammaire (topics) pour répartir les questions
function spread(arr, n) {
  const by = {}; shuf(arr).forEach(x => (by[x.key] = by[x.key] || []).push(x));
  let keys = shuf(Object.keys(by)); const out = [];
  while (out.length < n && keys.length) {
    keys = keys.filter(k => by[k].length);
    for (const k of keys) { if (out.length >= n) break; out.push(by[k].shift()); }
  }
  return out;
}
async function buildGrammar() {
  const sa = window.supabaseAuth;
  if (!sa.getGrammarExercises) throw new Error('getGrammarExercises indisponible');
  const per = await Promise.all(LV.map(async l => {
    try {
      const [ex, tp] = await Promise.all([sa.getGrammarExercises(l), sa.getGrammarTopics ? sa.getGrammarTopics(l).catch(() => []) : []]);
      const tm = {}; (tp || []).forEach(t => tm[t.id] = t);
      return { l, list: (ex || []).filter(validG).map(e => ({ e, l, key: gKey(e), label: (tm[e.topic_id] && tm[e.topic_id].title) || e.topic_title || e.sub_category || e.category || 'Divers' })) };
    } catch (err) { console.warn('Grammaire', l, err); return { l, list: [] }; }
  }));
  const pool = {}; per.forEach(p => pool[p.l] = p.list);
  const n = sum(CFG.grammar.lv), picked = [];
  LV.forEach(l => picked.push(...spread(pool[l], CFG.grammar.lv[l] || 0)));
  if (picked.length < n) {            // niveau pauvre en questions → compléter avec les points encore peu couverts
    const ids = new Set(picked.map(x => x.e.id));
    picked.push(...spread(LV.flatMap(l => pool[l]).filter(x => !ids.has(x.e.id)), n - picked.length));
  }
  return mkQ(byLevel(picked.map(x => ({ q: x.e, level: x.l, topic: x.label, src: 'banque' }))));
}
function gOk(q, a) {
  if (a == null || a === '') return false;
  const ca = String(q.correct_answer ?? '');
  if (q.type === 'multiple_choice') {
    const o = opts(q);
    return norm(o[a]) === norm(ca) || (/^[A-D]$/i.test(ca.trim()) && a === ca.trim().toUpperCase().charCodeAt(0) - 65);
  }
  return ca.split(/\s*\|\s*/).some(x => norm(x) === norm(a));
}

// ---------- Écriture / oral : tirage ----------
async function pickWriting() {
  const task = shuf(CFG.writing)[0];
  const t = await window.supabaseAuth.getWritingTopics(task, null);
  return t.length ? { task, topic: shuf(t)[0], text: '' } : null;
}
async function pickOral() {
  const tasks = (await Promise.all(CFG.oralTasks.map(async code => {
    const [a, b] = await Promise.all([sb().from('tcf_oral_tasks').select('*').eq('task_code', code).maybeSingle(), sb().from('tcf_oral_topics').select('*').eq('task_code', code)]);
    return b.data && b.data.length ? { code, info: a.data || {}, topic: shuf(b.data)[0], chat: [], dur: 0, t0: null, secs: 0, skipped: false, examiner: null, res: null } : null;
  }))).filter(Boolean);
  return tasks.length ? { tasks, i: 0 } : null;
}

async function startExam() {
  const steps = [['l', 'Écoute : tirage de la banque + génération des documents audio par l\'IA'], ['r', 'Lecture'], ['g', 'Grammaire'], ['w', 'Écriture'], ['o', 'Oral (3 tâches)']], done = new Set();
  const paint = () => $('sIntro').innerHTML = `<div class="ex-card ex-wait"><div class="ex-spinner"></div><h2 style="margin-top:16px">Préparation de l'examen…</h2><p>Génération des questions par l'IA, cela peut prendre 10–30 secondes. Ne fermez pas la page.</p>
    <ul class="ex-prep">${steps.map(([k, t]) => `<li class="${done.has(k) ? 'ok' : ''}">${done.has(k) ? '✅' : '<span class="ex-dotspin"></span>'} ${t}</li>`).join('')}</ul></div>`;
  const track = (k, p) => p.then(x => { done.add(k); paint(); return x; });
  paint();
  try {
    const [l, r, g, w, o] = await Promise.all([track('l', buildListening()), track('r', buildReading()), track('g', buildGrammar().catch(e => { console.error(e); toast('Grammaire indisponible : ' + e.message, 'warning'); return { items: [] }; })), track('w', pickWriting()), track('o', pickOral())]);
    S.listening = l; S.reading = r; S.grammar = g; S.writing = w; S.oral = o;
    S.order = [l.items.length && 'listening', r.items.length && 'reading', g.items.length && 'grammar', S.writing && 'writing', S.oral && 'oral'].filter(Boolean);
    if (!S.order.length) { toast('Aucune question disponible dans la banque', 'error'); intro(); return; }
    S.t0 = Date.now(); S.running = true; S.stage = -1; next();
  } catch (e) { console.error(e); toast('Erreur : ' + e.message, 'error'); intro(); }
}
function next() {
  stopAllAudio();
  S.stage++;
  $('steps').style.display = 'flex';
  $('steps').innerHTML = S.order.map((k, i) => `<span class="ex-step ${i === S.stage ? 'on' : i < S.stage ? 'done' : ''}">${NAMES[k]}</span>`).join('');
  const k = S.order[S.stage];
  if (!k) return finishExam();
  if (k === 'listening') { S.kind = k; S[k].i = 0; show('sQuiz'); listenIntro(); }
  else if (k === 'reading' || k === 'grammar') { S.kind = k; S[k].i = 0; show('sQuiz'); renderQ(); }
  else if (k === 'writing') enterWriting(); else enterOral();
}

// ---------- Questions (écoute / lecture / grammaire) ----------
const answered = a => a != null && a !== '';
function renderQ() {
  const Q = S[S.kind], it = Q.items[Q.i], K = S.kind, last = Q.i === Q.items.length - 1, t = it.text;
  let left = '', body = '';
  if (K === 'listening') {
    if (S.curAudio !== t.id) { stopAllAudio(); S.curAudio = t.id; if (!t.tts) { S.au = S.au || new Audio(); S.au.src = t.audio_url; } }
    S.plays[t.id] = S.plays[t.id] || 0;
    left = `<div class="audio-card"><div class="audio-header"><span class="audio-title">Document audio</span><span class="audio-title" id="plays"></span></div>
      ${t.image_url ? `<div class="audio-image"><img src="${esc(t.image_url)}" alt=""></div>` : ''}
      <div class="audio-player"><button class="btn-play" id="playBtn" onclick="togglePlay()"><i class="fas fa-play"></i></button>
      <div class="audio-progress"><div class="progress-bar"><div class="progress-fill" id="pf"></div></div></div></div></div>`;
  } else if (K === 'reading') {
    left = `<div class="audio-card"><h3 style="margin-bottom:8px">${esc(t.title || '')}</h3><div class="ex-article">${t.image_url ? `<img src="${esc(t.image_url)}" alt="">` : ''}${esc(t.content || '').replace(/\n/g, '<br>')}</div></div>`;
  }
  const q = it.q, fill = K === 'grammar' && q.type === 'fill_blank';
  if (fill) body = `<div class="answer-area"><input class="ex-input" id="gInput" value="${esc(Q.ans[Q.i] || '')}" oninput="gType(this.value)" placeholder="Écrivez votre réponse…" autocomplete="off" autocapitalize="off" spellcheck="false"></div>`;
  else body = `<div class="answer-area"><div class="options-grid">${opts(q).map((o, i) => `<div class="option-item ${Q.ans[Q.i] === i ? 'selected' : ''}" onclick="pick(${i})"><span class="option-label">${'ABCD'[i]}. ${K === 'grammar' ? esc(o) : esc(clean(o))}</span></div>`).join('')}</div></div>`;
  const panel = `<div class="exercise-panel" ${left ? '' : 'style="max-width:760px;margin:0 auto"'}>
    <div class="exercise-header"><span class="exercise-counter">${NAMES[K]} — Question ${Q.i + 1} / ${Q.items.length}</span></div>
    <div class="question-text">${esc(q.question)}</div>${body}
    <div class="exercise-actions"><button class="btn-next" onclick="go(-1)" ${Q.i ? '' : 'disabled'}><i class="fas fa-arrow-left"></i> Précédent</button>
    <button class="btn-check" onclick="${last ? 'endQuiz()' : 'go(1)'}">${last ? '<i class="fas fa-flag-checkered"></i> Terminer' : 'Suivant <i class="fas fa-arrow-right"></i>'}</button></div>
    <div class="ex-dots">${Q.items.map((_, i) => `<button class="ex-dot ${i === Q.i ? 'cur' : answered(Q.ans[i]) ? 'ans' : ''}" data-i="${i}" onclick="jump(${i})">${i + 1}</button>`).join('')}</div></div>`;
  $('sQuiz').innerHTML = left ? `<div class="ex-2"><div id="qLeft">${left}</div>${panel}</div>` : panel;
  if (K === 'listening') refreshPlay();
  if (fill) { const el = $('gInput'); if (el) el.focus(); }
}
function pick(i) { S[S.kind].ans[S[S.kind].i] = i; renderQ(); }
function gType(v) {
  const Q = S.grammar; Q.ans[Q.i] = v.trim() ? v : null;
  const d = document.querySelector(`.ex-dot[data-i="${Q.i}"]`); if (d && !d.classList.contains('cur')) d.classList.toggle('ans', !!v.trim());
}
function go(d) { S[S.kind].i += d; renderQ(); }
function jump(i) { S[S.kind].i = i; renderQ(); }

// --- lecteur audio : fichier réel (banque) ou synthèse vocale (documents IA)
function curText() { return S.listening.items[S.listening.i].text; }
function refreshPlay() {
  const t = curText(), b = $('playBtn'), p = $('plays'), f = $('pf'); if (!b) return;
  const playing = t.tts ? S.ttsPlaying : (S.au && !S.au.paused);
  b.innerHTML = playing ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
  if (p) p.textContent = `Écoutes restantes : ${CFG.maxPlays - (S.plays[t.id] || 0)}`;
  if (f) f.style.width = (t.tts ? S.ttsPct : (S.au && S.au.duration ? S.au.currentTime / S.au.duration * 100 : 0)) + '%';
  if (!t.tts && S.au) {
    S.au.ontimeupdate = () => { const x = $('pf'); if (x && S.au.duration) x.style.width = S.au.currentTime / S.au.duration * 100 + '%'; };
    S.au.onended = () => { const x = $('playBtn'); if (x) x.innerHTML = '<i class="fas fa-play"></i>'; };
  }
}
const sentences = t => (String(t).match(/[^.!?…]+[.!?…]*/g) || [String(t)]).map(s => s.trim()).filter(Boolean);
function ttsVoice(g) {
  const vs = speechSynthesis.getVoices().filter(v => /^fr/i.test(v.lang));
  const F = ['amelie', 'amélie', 'audrey', 'marie', 'julie', 'celine', 'céline', 'aurelie', 'aurélie', 'denise', 'eloise', 'hortense', 'female', 'woman'];
  const M = ['thomas', 'daniel', 'guillaume', 'henri', 'antoine', 'claude', 'paul', 'male', ' man'];
  const hit = vs.find(v => (g === 'F' ? F : M).some(h => v.name.toLowerCase().includes(h)));
  return { voice: hit || vs.find(v => v.lang === 'fr-FR') || vs[0] || null, pitch: hit ? 1 : (g === 'F' ? 1.15 : .85) };
}
function stopTTS() { S.ttsTok++; S.ttsPlaying = false; if ('speechSynthesis' in window) speechSynthesis.cancel(); }
function playScript(t, cb) {
  stopTTS(); const tok = S.ttsTok; const parts = [];
  t.script.forEach(l => sentences(l.t).forEach(s => parts.push({ s, sp: l.s })));
  const vA = ttsVoice('F'), vB = ttsVoice('M'); let i = 0;
  S.ttsPlaying = true; S.ttsPct = 0;
  const step = () => {
    if (tok !== S.ttsTok) return;
    if (i >= parts.length) { S.ttsPlaying = false; S.ttsPct = 100; refreshPlay(); if (cb) cb(); return; }
    const p = parts[i], v = p.sp === 'B' ? vB : vA, u = new SpeechSynthesisUtterance(p.s);
    u.lang = 'fr-FR'; u.rate = .92; u.pitch = v.pitch; if (v.voice) u.voice = v.voice;
    const done = () => { if (tok !== S.ttsTok) return; i++; S.ttsPct = i / parts.length * 100; const f = $('pf'); if (f) f.style.width = S.ttsPct + '%'; setTimeout(step, 280); };
    u.onend = done; u.onerror = done;
    speechSynthesis.speak(u);
  };
  step();
}
function togglePlay() {
  const t = curText(), a = S.au;
  if (t.tts) {
    if (!('speechSynthesis' in window)) return toast('Synthèse vocale non disponible : utilisez Chrome ou Edge', 'error');
    if (S.ttsPlaying) { stopTTS(); return refreshPlay(); }
    if (S.plays[t.id] >= CFG.maxPlays) return toast('Nombre d\'écoutes maximal atteint', 'warning');
    S.plays[t.id]++; playScript(t); return refreshPlay();
  }
  if (!a.paused) { a.pause(); return refreshPlay(); }
  if (a.currentTime === 0 || a.ended) {
    if (S.plays[t.id] >= CFG.maxPlays) return toast('Nombre d\'écoutes maximal atteint', 'warning');
    S.plays[t.id]++;
  }
  a.play(); refreshPlay();
}

// --- Écoute en lecture automatique : pas de bouton lecture, pas de retour en arrière
function listenIntro() {
  const L = CFG.listening, n = S.listening.items.length;
  $('sQuiz').innerHTML = `<div class="ex-card" style="max-width:720px;margin:0 auto"><h2>🎧 Compréhension orale</h2>
    <p>${n} documents. Chaque document est lu <b>automatiquement ${L.plays} fois</b>. Vous avez ensuite <b>${L.answerSec} secondes</b> pour répondre (vous pouvez aussi répondre pendant l'audio).</p>
    <ul class="ex-list"><li>Pas de bouton « lecture » et pas de retour en arrière.</li><li>Sans réponse à la fin du temps, on passe automatiquement au document suivant (la question compte comme fausse).</li><li>Vérifiez que le son de votre appareil est activé.</li></ul>
    <div class="ex-actions"><button class="ex-btn" onclick="lStart()"><i class="fas fa-headphones"></i> Commencer l'écoute</button></div></div>`;
}
function lStart() { S.listening.i = 0; renderL(); }
function lStat(h) { const e = $('lStat'); if (e) e.innerHTML = h; }
function renderL() {
  const Q = S.listening, it = Q.items[Q.i], t = it.text, q = it.q, last = Q.i === Q.items.length - 1;
  stopAllAudio(); clearInterval(S.lTimer); const tok = ++S.lTok;
  $('sQuiz').innerHTML = `<div class="ex-2"><div><div class="audio-card"><div class="audio-header"><span class="audio-title">Document audio ${Q.i + 1} / ${Q.items.length}</span></div>
      ${t.image_url ? `<div class="audio-image"><img src="${esc(t.image_url)}" alt=""></div>` : ''}
      <div class="ex-lstat" id="lStat">⏳</div><div class="audio-progress" style="margin-top:10px"><div class="progress-bar"><div class="progress-fill" id="pf"></div></div></div></div></div>
    <div class="exercise-panel"><div class="exercise-header"><span class="exercise-counter">${NAMES.listening} — Question ${Q.i + 1} / ${Q.items.length}</span></div>
      <div class="question-text">${esc(q.question)}</div>
      <div class="answer-area"><div class="options-grid" id="lOpts">${opts(q).map((o, i) => `<div class="option-item ${Q.ans[Q.i] === i ? 'selected' : ''}" onclick="pickL(${i})"><span class="option-label">${'ABCD'[i]}. ${esc(clean(o))}</span></div>`).join('')}</div></div>
      <div class="exercise-actions"><button class="btn-check" onclick="lAdvance()">${last ? '<i class="fas fa-flag-checkered"></i> Terminer l\'écoute' : 'Question suivante <i class="fas fa-arrow-right"></i>'}</button></div>
      <p style="font-size:.78rem;color:var(--text-muted);margin-top:10px">Pas de retour en arrière possible.</p></div></div>`;
  let n = 0; const plays = CFG.listening.plays;
  const playOnce = () => {
    if (tok !== S.lTok) return;
    n++; lStat(`🔊 Écoute en cours${plays > 1 ? ` (${n}/${plays})` : ''}…`);
    const f = $('pf'); if (f) f.style.width = '0%';
    const done = () => { if (tok !== S.lTok) return; if (n < plays) setTimeout(playOnce, 3000); else lCountdown(tok); };
    if (t.tts) {
      if (!('speechSynthesis' in window)) return lStat('⚠️ Synthèse vocale indisponible (utilisez Chrome/Edge)'), lCountdown(tok);
      playScript(t, done);
    } else {
      const a = S.au = S.au || new Audio(); a.onended = done; a.onerror = done;
      a.ontimeupdate = () => { const x = $('pf'); if (x && a.duration) x.style.width = a.currentTime / a.duration * 100 + '%'; };
      a.src = t.audio_url; a.currentTime = 0;
      const pr = a.play();
      if (pr && pr.catch) pr.catch(() => { S.lRetry = playOnce; lStat('⚠️ Lecture bloquée par le navigateur <button class="ex-btn" style="padding:6px 16px;margin-left:8px" onclick="S.lRetry()">▶ Lancer</button>'); });
    }
  };
  playOnce();
}
function lCountdown(tok) {
  if (tok !== S.lTok) return;
  const total = CFG.listening.answerSec; let s = total;
  const show = () => { lStat(`⏳ Répondez : <b>${s} s</b>`); const f = $('pf'); if (f) f.style.width = s / total * 100 + '%'; };
  show(); clearInterval(S.lTimer);
  S.lTimer = setInterval(() => { if (tok !== S.lTok) return clearInterval(S.lTimer); s--; show(); if (s <= 0) { clearInterval(S.lTimer); lAdvance(); } }, 1000);
}
function pickL(i) {
  const Q = S.listening; Q.ans[Q.i] = i;
  document.querySelectorAll('#lOpts .option-item').forEach((el, k) => el.classList.toggle('selected', k === i));
}
function lAdvance() {
  const Q = S.listening; S.lTok++; clearInterval(S.lTimer); stopAllAudio();
  if (Q.i >= Q.items.length - 1) { S.res.listening = scoreQuiz(Q, 'listening'); return next(); }
  Q.i++; renderL();
}

// --- estimation locale (utilisée seulement si l'IA est indisponible)
function estLevel(by, c, n) {
  let best = null, mastered = 0, seen = 0;
  LV.filter(l => by[l] && by[l].t).forEach(l => { seen++; if (by[l].c / by[l].t >= .5) { mastered++; if (mastered * 2 >= seen) best = l; } });
  return best || (c > 0 && c / n >= .2 ? 'A1' : 'Pré-A1');
}
function transcriptOf(t) {
  if (!t) return '';
  const s = t.script ?? t.transcript ?? '';
  return Array.isArray(s) ? s.map(l => (l && l.t) || l).join(' ') : String(s || '');
}
function scoreQuiz(Q, K) {
  const by = {}; LV.forEach(l => by[l] = { c: 0, t: 0 }); const topics = {}; let c = 0; const wrong = [];
  Q.items.forEach((it, i) => {
    const a = Q.ans[i], q = it.q, g = K === 'grammar';
    const ok = g ? gOk(q, a) : a === ci(q), b = by[it.level];
    if (b) { b.t++; if (ok) b.c++; }
    if (g) { const tp = topics[it.topic] = topics[it.topic] || { c: 0, t: 0 }; tp.t++; if (ok) tp.c++; }
    if (ok) c++; else wrong.push({
      niveau: it.level, point: g ? it.topic : '', question: q.question,
      reponse_eleve: !answered(a) ? '(sans réponse)' : (q.type === 'fill_blank' ? a : (g ? opts(q)[a] : clean(opts(q)[a]))),
      bonne_reponse: g ? (q.type === 'multiple_choice' && /^[A-D]$/i.test(String(q.correct_answer).trim()) ? opts(q)[ci(q)] : q.correct_answer) : clean(opts(q)[ci(q)] ?? q.correct_answer),
      explication: q.explanation || '', transcription: transcriptOf(it.text), src: it.src });
  });
  const n = Q.items.length;
  return { c, n, pct: n ? c / n * 100 : 0, by, topics, wrong, level: c === 0 ? 'Pré-A1' : estLevel(by, c, n) };
}
function endQuiz() {
  const Q = S[S.kind], miss = Q.ans.filter(a => !answered(a)).length;
  if (miss && !confirm(`${miss} question(s) sans réponse. Terminer cette épreuve ?`)) return;
  S.res[S.kind] = scoreQuiz(Q, S.kind); next();
}

// ---------- Écriture ----------
function enterWriting() {
  const { topic: t } = S.writing; show('sWriting');
  $('sWriting').innerHTML = `<div class="ex-2"><div class="ex-card"><h2>✍️ ${esc(t.title)}</h2><p>${esc(t.description)}</p><p style="margin-top:10px"><b>📏 ${t.word_min}-${t.word_max} mots</b></p></div>
  <div class="ex-card"><textarea class="ex-area" id="wArea" placeholder="Écrivez votre texte ici…" oninput="wc()"></textarea>
  <div class="ex-actions"><span id="wCount" style="align-self:center;font-weight:600">0 mot</span><span style="flex:1"></span>
  <button class="ex-btn sec" onclick="endWriting(true)">Passer</button><button class="ex-btn" onclick="endWriting()">Valider et continuer</button></div></div></div>`;
}
const words = s => s.trim() ? s.trim().split(/\s+/).length : 0;
function wc() { $('wCount').textContent = words($('wArea').value) + ' mots'; }
function endWriting(skip) {
  const txt = $('wArea').value;
  if (skip && !confirm('Passer l\'écriture ? Elle comptera 0.')) return;
  if (!skip && words(txt) < 10 && !confirm('Votre texte est très court. Continuer quand même ?')) return;
  S.writing.text = skip ? '' : txt; next();
}

// ---------- Oral : 3 tâches (1 sujet chacune), même logique que la page TCF IRN ----------
function extractTextAndMood(result) {
  let raw = '', examiner = null;
  if (typeof result === 'string') raw = result; else if (result && typeof result === 'object') { raw = result.content || ''; examiner = result.examiner || null; }
  if (!raw || typeof raw !== 'string') return { text: '', mood: 'neutral', examiner };
  let mood = 'neutral', text = raw; const m = raw.match(/^\s*\[MOOD\s*:\s*(green|neutral|probe)\s*\]\s*/i);
  if (m) { mood = m[1].toLowerCase(); text = raw.slice(m[0].length); }
  return { text: text.replace(/\[MOOD\s*:\s*\w+\]/gi, '').trim(), mood, examiner };
}
function speak(text, ex) {
  if (!('speechSynthesis' in window) || !text || !text.trim()) return;
  speechSynthesis.cancel();
  const go = () => {
    const u = new SpeechSynthesisUtterance(text); u.lang = 'fr-FR'; u.rate = .92; u.pitch = 1; u.volume = 1;
    const fr = speechSynthesis.getVoices().filter(v => v.lang.startsWith('fr')); let ch = null;
    if (ex && ex.gender) {
      const F = ['amelie', 'amélie', 'audrey', 'marie', 'julie', 'celine', 'céline', 'aurelie', 'aurélie', 'female', 'woman'], M = ['thomas', 'daniel', 'alex', 'male', 'man', 'guillaume', 'henri'];
      ch = fr.find(v => (ex.gender === 'F' ? F : M).some(h => v.name.toLowerCase().includes(h)));
      if (!ch) u.pitch = ex.gender === 'F' ? 1.12 : .88;
    }
    ch = ch || fr.find(v => v.lang === 'fr-FR') || fr[0]; if (ch) u.voice = ch;
    speechSynthesis.speak(u);
  };
  if (!speechSynthesis.getVoices().length) {
    speechSynthesis.onvoiceschanged = () => { speechSynthesis.onvoiceschanged = null; go(); };
    setTimeout(() => { if (!speechSynthesis.speaking) { speechSynthesis.onvoiceschanged = null; go(); } }, 700);
  } else go();
}
const curT = () => S.oral.tasks[S.oral.i];
let REC = { mr: null, ctx: null, iv: null, to: null, spoke: false };
function oralTimerStop() { if (S.oTimer) clearInterval(S.oTimer); S.oTimer = null; }
function oralTimerStart(T) {
  oralTimerStop(); T.secs = 0; const max = ORAL_MAX[T.code] || 180;
  S.oTimer = setInterval(() => {
    T.secs++; const e = $('oTimer'), bar = $('oTimerBar'); if (!e) return;
    e.textContent = Math.floor(T.secs / 60) + ':' + String(T.secs % 60).padStart(2, '0');
    bar.classList.toggle('over', T.secs >= max); bar.classList.toggle('warn', T.secs >= max - 30 && T.secs < max);
  }, 1000);
}
function enterOral() { show('sOral'); renderOralTask(); }
function renderOralTask() {
  const o = S.oral, T = curT(), t = T.topic, inf = T.info, last = o.i === o.tasks.length - 1, max = ORAL_MAX[T.code] || 180;
  $('sOral').innerHTML = `<div class="ex-card ex-oralhead"><div><h2>🎤 Tâche ${o.i + 1} / ${o.tasks.length} · ${esc(inf.task_name_fr || T.code)}</h2><p>${esc(inf.task_description_fr || '')}</p></div>
    <div class="ex-badges"><span class="ex-badge"><i class="fas fa-clock"></i> ${esc(inf.duration_minutes || Math.round(max / 60))} min</span>${inf.framework_fr ? `<span class="ex-badge"><i class="fas fa-route"></i> ${esc(inf.framework_fr)}</span>` : ''}</div></div>
  <div class="ex-2"><div class="ex-card"><h2>${esc(t.title_fr)}</h2>
    ${t.scenario_fr ? `<div class="ex-scn"><b>🎭 Scénario</b><p>${esc(t.scenario_fr)}</p>${CFG.oralShowZh && t.scenario_zh ? `<p class="ex-zh">${esc(t.scenario_zh)}</p>` : ''}</div>` : ''}
    <div class="ex-scn"><b>📌 ${T.code === 'tache2' ? 'Votre mission' : 'Question de l\'examinateur'}</b><p>« ${esc(t.prompt_fr)} »</p>${CFG.oralShowZh && t.prompt_zh ? `<p class="ex-zh">${esc(t.prompt_zh)}</p>` : ''}</div>
    ${CFG.oralShowFocus && t.examiner_focus_fr ? `<div class="ex-scn"><b>🎯 Ce que l'examinateur cherche</b><p>${esc(t.examiner_focus_fr)}</p></div>` : ''}
    <p style="margin-top:8px;font-size:.82rem;color:var(--text-muted)">Cliquez sur le micro pour répondre, puis sur « Arrêter ». L'examinateur vous relancera comme au vrai examen.</p></div>
  <div class="ex-card"><div class="ex-timer" id="oTimerBar"><i class="fas fa-clock"></i> <span id="oTimer">0:00</span> <small>/ ${Math.floor(max / 60)}:${String(max % 60).padStart(2, '0')}</small></div>
    <div class="ex-chat" id="chat"></div><div id="oStatus" style="font-size:.85rem;min-height:22px"></div>
    <div class="ex-actions"><button class="ex-btn" id="micBtn" onclick="toggleMic()"><i class="fas fa-microphone"></i> Parler</button><button class="ex-btn sec" onclick="resetOral()"><i class="fas fa-redo"></i> Recommencer</button><span style="flex:1"></span>
    <button class="ex-btn sec" onclick="nextOral(true)">Passer</button><button class="ex-btn" onclick="nextOral()">${last ? 'Terminer l\'oral' : 'Tâche suivante <i class="fas fa-arrow-right"></i>'}</button></div></div></div>`;
  drawChat(); oralTimerStart(T); oralOpen(T);
}
async function oralOpen(T) {
  if (T.chat.length) return;
  const st = $('oStatus'); st.textContent = '🤖 L\'examinateur vous parle…'; S.oralBusy = true;
  try {
    const r = extractTextAndMood(await window.supabaseAuth.examinerReplyOral(T.code, T.topic.prompt_fr, T.topic.title_fr, T.topic.scenario_fr || '', '', []));
    if (!r.text || r.text.length < 3) throw new Error('Réponse IA vide');
    if (curT() !== T) return;
    T.examiner = r.examiner; T.chat.push({ role: 'ai', text: r.text, mood: r.mood }); drawChat(); speak(r.text, T.examiner); $('oStatus').textContent = '🎤 À vous de répondre. Appuyez sur le micro.';
  } catch (e) { console.error(e); const s = $('oStatus'); if (s) s.textContent = '❌ ' + e.message; }
  finally { S.oralBusy = false; }
}
function drawChat() {
  const c = $('chat'); if (!c) return; const T = curT();
  c.innerHTML = T.chat.length ? T.chat.map((m, i) => `<div class="ex-msg ${m.role}"><small>${m.role === 'user' ? 'Vous' : 'Examinateur'}</small><br>${esc(m.text)}${m.role === 'ai' ? ` <button class="ex-replay" onclick="replayMsg(${i})" title="Réécouter">🔊</button>` : ''}</div>`).join('') : '<p style="text-align:center;color:var(--text-muted);margin-top:90px"><i class="fas fa-comments"></i> L\'examinateur va commencer…</p>';
  c.scrollTop = c.scrollHeight;
}
function replayMsg(i) { const T = curT(), m = T.chat[i]; if (m && m.role === 'ai') speak(m.text, T.examiner); }
function micUI(rec) { const b = $('micBtn'); if (b) b.innerHTML = rec ? '<i class="fas fa-stop"></i> Arrêter' : '<i class="fas fa-microphone"></i> Parler'; }
function micCleanup() { clearInterval(REC.iv); clearTimeout(REC.to); if (REC.ctx) REC.ctx.close().catch(() => {}); REC.iv = REC.to = REC.ctx = null; }
async function toggleMic() {
  const T = curT();
  if (REC.mr && REC.mr.state === 'recording') { REC.mr.stop(); micUI(false); $('oStatus').textContent = '⏳ Traitement…'; return; }
  if (S.oralBusy) return;
  try {
    speechSynthesis.cancel();
    const st = await navigator.mediaDevices.getUserMedia({ audio: true }), ch = [];
    const mt = MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm' : MediaRecorder.isTypeSupported('audio/mp4') ? 'audio/mp4' : '';
    const mr = mt ? new MediaRecorder(st, { mimeType: mt }) : new MediaRecorder(st);
    REC.mr = mr; REC.spoke = false;
    mr.ondataavailable = e => e.data.size && ch.push(e.data);
    mr.onstop = async () => { st.getTracks().forEach(x => x.stop()); micCleanup(); await oralTurn(T, new Blob(ch, { type: mr.mimeType || 'audio/webm' })); };
    try {
      REC.ctx = new (window.AudioContext || window.webkitAudioContext)(); const an = REC.ctx.createAnalyser(); REC.ctx.createMediaStreamSource(st).connect(an);
      const arr = new Uint8Array(an.frequencyBinCount);
      REC.iv = setInterval(() => { an.getByteFrequencyData(arr); if (arr.reduce((a, b) => a + b, 0) / arr.length > 15) REC.spoke = true; }, 200);
      REC.to = setTimeout(() => { if (!REC.spoke && $('oStatus')) $('oStatus').textContent = '🤫 L\'examinateur attend votre réponse…'; }, 5000);
    } catch (e) { /* détection de silence facultative */ }
    mr.start(); if (!T.t0) T.t0 = Date.now(); micUI(true); $('oStatus').textContent = '🔴 Enregistrement…';
  } catch (e) { toast('Micro non autorisé', 'error'); }
}
async function oralTurn(T, blob) {
  S.oralBusy = true; const st = () => $('oStatus');
  try {
    const txt = await window.supabaseAuth.transcribeAudioOral(blob);
    if (!txt || txt.trim().length < 2) { if (st()) st().textContent = '❌ Aucune parole détectée'; return; }
    T.chat.push({ role: 'user', text: txt }); if (curT() === T) drawChat(); if (st()) st().textContent = '🤖 L\'examinateur répond…';
    const r = extractTextAndMood(await window.supabaseAuth.examinerReplyOral(T.code, T.topic.prompt_fr, T.topic.title_fr, T.topic.scenario_fr || '', '', T.chat));
    if (!r.text || r.text.length < 3) throw new Error('Réponse IA vide');
    T.chat.push({ role: 'ai', text: r.text, mood: r.mood }); if (curT() === T) { drawChat(); speak(r.text, T.examiner); if (st()) st().textContent = '🎤 À vous. Appuyez sur le micro.'; }
  } catch (e) { console.error(e); if (st()) st().textContent = '❌ ' + e.message; }
  finally { S.oralBusy = false; }
}
function resetOral() {
  const T = curT();
  if (REC.mr && REC.mr.state === 'recording') return toast('Arrêtez d\'abord l\'enregistrement', 'warning');
  if (S.oralBusy) return toast('Patientez un instant…', 'warning');
  if (T.chat.length > 1 && !confirm('Effacer la conversation de cette tâche ?')) return;
  speechSynthesis.cancel(); T.chat = []; T.t0 = null; T.examiner = null; drawChat(); oralTimerStart(T); oralOpen(T);
}
function nextOral(skip) {
  const o = S.oral, T = curT(), n = T.chat.filter(m => m.role === 'user').length, last = o.i === o.tasks.length - 1;
  if (REC.mr && REC.mr.state === 'recording') return toast('Arrêtez d\'abord l\'enregistrement', 'warning');
  if (S.oralBusy) return toast('Patientez un instant…', 'warning');
  if (skip) { if (!confirm('Passer cette tâche ? Elle comptera 0.')) return; T.skipped = true; }
  else if (!n) { if (!confirm('Vous n\'avez pas parlé. Cette tâche comptera 0. Continuer ?')) return; T.skipped = true; }
  T.dur = T.t0 ? Math.round((Date.now() - T.t0) / 1000) : 0; oralTimerStop(); speechSynthesis.cancel();
  if (last) next(); else { o.i++; renderOralTask(); scrollTo(0, 0); }
}

// ---------- Évaluation IA ----------
const lvFromScore = s => s == null ? null : s <= 1 ? 'Pré-A1' : s <= 5 ? 'A1' : s <= 9 ? 'A2' : s <= 13 ? 'B1' : 'B2';
const validLv = x => LVX.includes(x);
function parseEval(fb) {
  const sm = fb.match(/Note\s*[:：]?\s*([\d.]+)\s*\/\s*(\d+)/), lm = fb.match(/Niveau\s*(?:CECRL)?[^\n]*?([A-C][12])/i);
  const score = sm ? parseFloat(sm[1]) : null, level = lm ? lm[1].toUpperCase() : lvFromScore(score);
  return { score, level: level || lvFromScore(score), feedback: fb };
}
// Regroupe les résultats de chaque épreuve : score brut, %, poids, niveau local
function buildSections() {
  const R = S.res, W = CFG.weights, out = [];
  ['listening', 'reading', 'grammar'].forEach(k => { const r = R[k]; if (r) out.push({ k, raw: `${r.c}/${r.n}`, pct: r.pct, w: W[k], level: r.level, by: r.by }); });
  if (S.writing) {
    const r = R.writing;
    if (!(r && r.error)) out.push({ k: 'writing', raw: r && r.score != null ? `${r.score}/20` : 'Non rédigé', pct: r && r.score != null ? r.score / 20 * 100 : 0, w: W.writing, level: r ? (r.level || lvFromScore(r.score) || 'Pré-A1') : 'Pré-A1', skipped: !r });
  }
  if (S.oral && R.oral && R.oral.score != null) out.push({ k: 'oral', raw: `${R.oral.score}/20 (moy. ${R.oral.tasks.length} tâches)`, pct: R.oral.score / 20 * 100, w: W.oral, level: R.oral.level, skipped: R.oral.allSkipped });
  return out;
}
const globalScore = sec => { const tw = sec.reduce((a, s) => a + s.w, 0); return tw ? Math.round(sec.reduce((a, s) => a + s.pct * s.w, 0) / tw) : 0; };
const localGlobal = sec => { const tw = sec.reduce((a, s) => a + s.w, 0); return tw ? LVX[Math.max(0, Math.min(LVX.length - 1, Math.round(sec.reduce((a, s) => a + Math.max(0, LVX.indexOf(s.level)) * s.w, 0) / tw)))] : 'Pré-A1'; };
const byStr = by => LV.filter(l => by[l] && by[l].t).map(l => `${l} ${by[l].c}/${by[l].t}`).join(' · ');

async function finishExam() {
  S.running = false; stopAllAudio(); show('sEval'); $('steps').style.display = 'none';
  const msg = t => $('sEval').innerHTML = `<div class="ex-card ex-wait"><i class="fas fa-spinner fa-spin"></i><h2 style="margin-top:14px">Évaluation en cours…</h2><p>${t}</p></div>`;
  const w = S.writing, o = S.oral, R = S.res;
  if (w && words(w.text) >= 3) {
    msg('Correction de votre production écrite…');
    try { R.writing = { ...parseEval(await window.supabaseAuth.callAI(window.supabaseAuth.getWritingPrompt(w.task, w.topic.title, w.topic.word_min, w.topic.word_max), w.text)), words: words(w.text) }; }
    catch (e) { console.error(e); R.writing = { error: e.message }; }
  }
  if (o) {
    for (let k = 0; k < o.tasks.length; k++) {
      const T = o.tasks[k]; if (T.skipped) continue;
      msg(`Évaluation de l'oral — tâche ${k + 1} / ${o.tasks.length}…`);
      for (let i = 0; i < 2 && !T.res; i++) {
        try { T.res = await window.supabaseAuth.evaluateOralAnswer(T.code, T.topic.prompt_fr, T.chat, T.dur); }
        catch (e) { console.error(e); await new Promise(r => setTimeout(r, 3000)); }
      }
    }
    const scores = o.tasks.filter(T => T.skipped || T.res).map(T => T.skipped ? 0 : (T.res.score ?? 0));
    const sc = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length * 10) / 10 : null;
    R.oral = { tasks: o.tasks.map(T => ({ code: T.code, title: T.topic.title_fr, skipped: T.skipped, score: T.res ? T.res.score : null, level: T.res ? T.res.level : null, feedback: T.res ? T.res.feedback : '' })), score: sc, level: sc == null ? null : (lvFromScore(sc) || 'Pré-A1'), allSkipped: o.tasks.every(T => T.skipped) };
  }

  msg('Analyse de vos résultats et rédaction du bilan…');
  const sec = buildSections(), tw = sec.reduce((a, s) => a + s.w, 0), score = globalScore(sec), data = { score_global_pondere: `${score}/100`, epreuves: [] };
  sec.forEach(s => {
    const e = { epreuve: NAMES[s.k], score_brut: s.raw, pourcentage: Math.round(s.pct) + '%', poids_dans_examen: Math.round(s.w / tw * 100) + '%', points_apportes_au_score_global: +(s.pct * s.w / tw).toFixed(1) };
    const r = R[s.k];
    if (r && r.by) {
      e.reussite_par_niveau_des_questions = Object.fromEntries(LV.filter(l => r.by[l].t).map(l => [l, `${r.by[l].c}/${r.by[l].t}`]));
      if (r.topics) e.reussite_par_point_de_grammaire = Object.fromEntries(Object.entries(r.topics).map(([k, v]) => [k, `${v.c}/${v.t}`]));
      e.erreurs = r.wrong.slice(0, 10).map(x => ({ niveau: x.niveau, point: x.point || undefined, question: String(x.question).slice(0, 120) }));
    }
    if (s.k === 'writing') { e.sujet = w.topic.title; e.nb_mots = R.writing ? R.writing.words : 0; e.niveau_donne_par_correcteur = R.writing && R.writing.level; e.extrait_correction = R.writing && R.writing.feedback ? R.writing.feedback.slice(0, 1200) : 'Non rédigé'; }
    if (s.k === 'oral') e.taches = R.oral.tasks.map(t => ({ tache: t.code, sujet: t.title, note_sur_20: t.skipped ? 0 : t.score, niveau_donne_par_correcteur: t.skipped ? 'non passée' : t.level, extrait_evaluation: (t.feedback || '').slice(0, 700) }));
    data.epreuves.push(e);
  });
  const prompt = `Voici les résultats détaillés d'un examen blanc de français (FLE) passé par un élève chinois. Les questions de QCM sont tirées de banques classées de A1 à C2 (le niveau de chaque question est indiqué dans « reussite_par_niveau_des_questions »). Les documents d'écoute marqués B1/B2 ont été conçus pour ce niveau.\n${JSON.stringify(data)}\n\n` +
    `MISSION : estimer le niveau CECRL réel de l'élève pour chaque compétence, puis son niveau global.\n` +
    `Méthode à suivre :\n` +
    `1. QCM (écoute, lecture, grammaire) : le hasard donne 25 % de réussite. Le niveau d'une compétence est le plus haut niveau où l'élève réussit nettement (≈ 60 % ou plus) sans effondrement aux niveaux inférieurs ; un échec isolé à un niveau bas ou une réussite isolée à un niveau haut s'interprète avec prudence vu le petit échantillon. Utilise aussi le pourcentage global de l'épreuve et, en grammaire, les points forts/faibles par point de grammaire.\n` +
    `2. Écriture et oral : appuie-toi sur les notes /20 et les niveaux donnés par les correcteurs, mais tu peux les nuancer si les extraits le justifient. Une tâche non passée ou non rédigée vaut 0 et pèse dans le score.\n` +
    `3. Niveau global : combine les niveaux par compétence en tenant compte des poids (« poids_dans_examen ») et du score global pondéré. Le niveau global doit être cohérent : compris entre le niveau le plus bas et le plus haut des compétences, proche de leur moyenne pondérée. Repère indicatif d'après le score pondéré, à ajuster avec le profil par niveau : < 15 % Pré-A1 ; 15–30 % A1 ; 30–45 % A2 ; 45–60 % B1 ; 60–75 % B2 ; 75–90 % C1 ; > 90 % C2.\n` +
    `4. Ne sous-évalue pas : un élève qui réussit des questions B1 ou B2 ne peut pas être A1. Ne surévalue pas non plus. Pas de plafond artificiel à B2 si les résultats justifient C1.\n` +
    `5. Les niveaux par compétence et le niveau global doivent être cohérents avec ton analyse écrite.\n` +
    `Réponds UNIQUEMENT avec ce JSON (niveaux parmi Pré-A1, A1, A2, B1, B2, C1, C2) :\n` +
    `{"niveau_global":"B1","confiance":"faible|moyenne|élevée","niveau_par_competence":{"listening":"","reading":"","grammar":"","writing":"","oral":""},"calcul_niveau":"3-5 phrases en français expliquant comment tu passes des scores/poids/niveaux au niveau global","resume":"3-4 phrases en français","resume_zh":"2-3 phrases en chinois","points_forts":["..."],"points_faibles":["..."],"analyse":{"listening":"1-2 phrases","reading":"","grammar":"","writing":"","oral":""},"plan_etude":["4 conseils concrets"],"prediction_tcf":"1-2 phrases sur le TCF/DELF visé"}`;
  try { R.ai = await groqJSON(prompt, 6000, .2); } catch (e) { console.error(e); R.ai = null; toast('Bilan IA indisponible, résultat local affiché', 'warning'); }
  result(sec, score);
}

// ---------- Résultat ----------
function result(sec, score) {
  const R = S.res, ai = R.ai, tw = sec.reduce((a, s) => a + s.w, 0) || 1;
  const global = (ai && validLv(ai.niveau_global) && ai.niveau_global) || localGlobal(sec);
  const lvOf = s => (ai && ai.niveau_par_competence && validLv(ai.niveau_par_competence[s.k]) && ai.niveau_par_competence[s.k]) || s.level;
  const li = a => a && a.length ? `<ul class="ex-list">${a.map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : '';
  const ex = ['listening', 'reading', 'grammar'].filter(k => R[k] && R[k].wrong.length)
    .map(k => `<details><summary>${NAMES[k]} — erreurs (${R[k].wrong.length})</summary>${R[k].wrong.map(w => `<div class="ex-box"><b>[${w.niveau}${w.point ? ' · ' + esc(w.point) : ''}] ${esc(w.question)}</b>\nVotre réponse : ${esc(w.reponse_eleve)}\nBonne réponse : ${esc(w.bonne_reponse)}${w.explication ? '\n💡 ' + esc(w.explication) : ''}${w.transcription ? '\n🎧 Transcription : ' + esc(w.transcription) : ''}</div>`).join('')}</details>`).join('');
  const gt = R.grammar && R.grammar.topics ? Object.entries(R.grammar.topics).map(([k, v]) => `<span class="ex-chip ${v.c === v.t ? 'ok' : v.c === 0 ? 'ko' : ''}">${esc(k)} ${v.c}/${v.t}</span>`).join('') : '';
  $('sResult').innerHTML = `<div class="ex-card ex-hero"><p style="color:var(--text-muted)">Votre niveau estimé</p><div class="ex-level">${global}</div>
    <p><b>${LVN[global] || ''}</b> · Score global pondéré ${score}/100${ai && ai.confiance ? ` · fiabilité ${esc(ai.confiance)}` : ''}</p>
    <div class="ex-skills">${sec.map(s => `<div class="ex-skill"><span>${NAMES[s.k]}</span><b>${lvOf(s)}</b><small>${esc(s.raw)} · ${Math.round(s.pct)} %</small></div>`).join('')}</div></div>
  <div class="ex-card"><h2>📊 Scores et pondération</h2><div style="overflow-x:auto"><table class="ex-table"><thead><tr><th>Épreuve</th><th>Score</th><th>%</th><th>Poids</th><th>Points</th><th>Niveau</th></tr></thead><tbody>
    ${sec.map(s => `<tr><td>${NAMES[s.k]}${s.by ? `<br><small>${byStr(s.by)}</small>` : ''}</td><td>${esc(s.raw)}</td><td>${Math.round(s.pct)} %</td><td>${Math.round(s.w / tw * 100)} %</td><td>${(s.pct * s.w / tw).toFixed(1)}</td><td><b>${lvOf(s)}</b></td></tr>`).join('')}
    <tr class="tot"><td colspan="4"><b>Total pondéré</b></td><td><b>${score}</b> / 100</td><td><b>${global}</b></td></tr></tbody></table></div>
    ${gt ? `<p style="margin-top:12px"><b>Grammaire par point :</b></p><div class="ex-chips">${gt}</div>` : ''}</div>
  ${ai ? `<div class="ex-card"><h2>🧠 Bilan de l'IA</h2>${ai.calcul_niveau ? `<p><b>Comment le niveau est établi :</b> ${esc(ai.calcul_niveau)}</p>` : ''}<p style="margin-top:8px">${esc(ai.resume)}</p>${ai.resume_zh ? `<p style="margin-top:8px;color:var(--text-light)">${esc(ai.resume_zh)}</p>` : ''}
    <h3 style="margin-top:14px">✅ Points forts</h3>${li(ai.points_forts)}<h3 style="margin-top:10px">🔧 À améliorer</h3>${li(ai.points_faibles)}
    <h3 style="margin-top:10px">📚 Plan d'étude</h3>${li(ai.plan_etude)}${ai.prediction_tcf ? `<p style="margin-top:10px"><b>🎯</b> ${esc(ai.prediction_tcf)}</p>` : ''}
    ${ai.analyse ? Object.keys(ai.analyse).map(k => ai.analyse[k] ? `<p style="margin-top:6px"><b>${NAMES[k] || k} :</b> ${esc(ai.analyse[k])}</p>` : '').join('') : ''}</div>` : ''}
  <div class="ex-card"><h2>🔍 Détails</h2>${ex}
    ${R.writing && R.writing.feedback ? `<details><summary>Expression écrite — texte et correction</summary><div class="ex-box">${esc(S.writing.text)}</div><div class="ex-box">${esc(R.writing.feedback)}</div></details>` : ''}
    ${S.oral ? S.oral.tasks.map((T, i) => `<details><summary>Expression orale — tâche ${i + 1} : ${esc(T.topic.title_fr)}${T.skipped ? ' (non passée)' : T.res && T.res.score != null ? ` · ${T.res.score}/20` : ''}</summary>${T.skipped ? '' : `<div class="ex-box">${esc(T.chat.map(m => (m.role === 'user' ? 'Vous : ' : 'Examinateur : ') + m.text).join('\n'))}</div><div class="ex-box">${esc(T.res ? T.res.feedback : 'Évaluation indisponible')}</div>`}</details>`).join('') : ''}
    <div class="ex-actions"><button class="ex-btn" onclick="location.reload()"><i class="fas fa-redo"></i> Nouvel examen</button><button class="ex-btn sec" onclick="location.href='francais.html'">Retour</button></div></div>`;
  show('sResult');
  const pack = k => R[k] && { c: R[k].c, n: R[k].n, by: R[k].by };
  sb().from('fle_mock_exams').insert([{ user_id: String(S.user.userId || S.user.id || 'unknown'), user_name: S.user.name || 'Élève', global_level: global, score, duration_seconds: Math.round((Date.now() - S.t0) / 1000),
    details: { sections: sec.map(s => ({ k: s.k, raw: s.raw, pct: Math.round(s.pct), w: s.w, level: lvOf(s) })), ai, listening: pack('listening'), reading: pack('reading'), grammar: R.grammar && { c: R.grammar.c, n: R.grammar.n, by: R.grammar.by, topics: R.grammar.topics }, oral: R.oral && { score: R.oral.score, tasks: R.oral.tasks.map(t => ({ code: t.code, score: t.score, level: t.level, skipped: t.skipped })) } } }]).then(r => r.error && console.warn('Sauvegarde ignorée :', r.error.message));
}

document.addEventListener('DOMContentLoaded', async () => {
  const u = verifyUser(); if (!u) return;
  S.user = u; $('userName').textContent = u.name || 'Élève';
  for (let i = 0; i < 20 && !window.supabaseAuth; i++) await new Promise(r => setTimeout(r, 200));
  if ('speechSynthesis' in window) speechSynthesis.getVoices();
  intro();
});
Object.assign(window, { S, listenIntro, lStart, lAdvance, pickL, startExam, pick, gType, go, jump, endQuiz, togglePlay, wc, endWriting, toggleMic, nextOral, resetOral, replayMsg, leave });
