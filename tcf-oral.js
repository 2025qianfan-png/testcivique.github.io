// ============================================================
// TCF IRN 口语训练系统 v5 — 全面修复
// ============================================================

let currentUser = null;
let currentTask = 'tache1';
let currentTaskInfo = null;
let allTopics = [];
let selectedTopic = null;
let selectedSamples = [];
let chatMessages = [];
let mediaRecorder = null;
let audioChunks = [];
let isRecording = false;
let practiceStartTime = null;
let isProcessing = false;
let ttsUnlocked = false;
let currentExaminer = null;

let timerInterval = null;
let timerSeconds = 0;

let audioCtx = null;
let silenceCheckInterval = null;
let silenceTimer = null;
let hasSpoken = false;

// ============================================================
// TOKEN
// ============================================================
function getToken() {
    const params = new URLSearchParams(window.location.search);
    return params.get('token');
}
function parseToken(t) {
    try { return JSON.parse(decodeURIComponent(atob(t))); }
    catch (e) { return null; }
}
function verifyUser() {
    const t = getToken();
    if (!t) { showToast('Veuillez vous connecter', 'warning'); setTimeout(() => location.href = 'francais.html', 1500); return null; }
    const u = parseToken(t);
    if (!u) { showToast('Session invalide', 'error'); setTimeout(() => location.href = 'francais.html', 1500); return null; }
    if (u.expiry && new Date(u.expiry) < new Date()) {
        showToast('Session expirée', 'error'); setTimeout(() => location.href = 'francais.html', 1500); return null;
    }
    return u;
}

// ============================================================
// UI
// ============================================================
function showToast(msg, type = 'info') {
    let c = document.getElementById('toastContainer');
    if (!c) { c = document.createElement('div'); c.id = 'toastContainer'; c.className = 'toast-container'; document.body.appendChild(c); }
    const t = document.createElement('div');
    t.className = 'toast ' + type;
    const icons = { success: 'fa-check-circle', error: 'fa-exclamation-circle', info: 'fa-info-circle', warning: 'fa-exclamation-triangle' };
    t.innerHTML = '<i class="fas ' + (icons[type] || icons.info) + '"></i> ' + escapeHtml(msg);
    c.appendChild(t);
    setTimeout(() => { t.style.opacity = '0'; setTimeout(() => t.remove(), 300); }, 3500);
}
function escapeHtml(s) {
    if (!s) return '';
    const d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
}
function showLoading(text) {
    document.getElementById('loadingText').textContent = text || 'Traitement...';
    document.getElementById('loadingOverlay').style.display = 'flex';
}
function hideLoading() {
    document.getElementById('loadingOverlay').style.display = 'none';
}

// ============================================================
// 从 AI 返回中提取纯文本（不管有没有 [MOOD:xxx] tag）
// ============================================================
function extractTextAndMood(result) {
    // 1. 兼容 string / {content, examiner}
    let raw = '';
    let examiner = null;

    if (typeof result === 'string') {
        raw = result;
    } else if (result && typeof result === 'object') {
        raw = result.content || '';
        examiner = result.examiner || null;
    }

    if (!raw || typeof raw !== 'string') {
        console.warn('⚠️ extractTextAndMood: raw 为空或非字符串', result);
        return { text: '', mood: 'neutral', examiner: examiner };
    }

    // 2. 剥 mood tag（只在开头）
    let mood = 'neutral';
    let text = raw;

    const match = raw.match(/^\s*\[MOOD\s*:\s*(green|neutral|probe)\s*\]\s*/i);
    if (match) {
        mood = match[1].toLowerCase();
        text = raw.slice(match[0].length);
    }

    // 3. 清理所有 [MOOD:xxx]（如果AI在中间也写了）
    text = text.replace(/\[MOOD\s*:\s*\w+\]/gi, '').trim();

    return { text, mood, examiner };
}

// ============================================================
// TTS
// ============================================================
function unlockTTS() {
    if (!('speechSynthesis' in window)) return;
    if (ttsUnlocked) return;
    try {
        const u = new SpeechSynthesisUtterance(' ');
        u.volume = 0;
        u.lang = 'fr-FR';
        window.speechSynthesis.speak(u);
        setTimeout(() => window.speechSynthesis.cancel(), 100);
        ttsUnlocked = true;
    } catch (e) {}
}

function speakFrench(text, examiner) {
    if (!('speechSynthesis' in window)) return;
    if (!text || !text.trim()) return;

    window.speechSynthesis.cancel();

    const doSpeak = () => {
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'fr-FR';
        u.rate = 0.92;
        u.pitch = 1.0;
        u.volume = 1.0;

        const voices = window.speechSynthesis.getVoices();
        const frVoices = voices.filter(v => v.lang.startsWith('fr'));
        let chosen = null;

        if (examiner && examiner.gender) {
            const femaleHints = ['amelie', 'amélie', 'audrey', 'marie', 'julie', 'celine', 'céline', 'aurelie', 'aurélie', 'female', 'woman'];
            const maleHints = ['thomas', 'daniel', 'alex', 'male', 'man', 'guillaume', 'henri'];

            if (examiner.gender === 'F') {
                chosen = frVoices.find(v => femaleHints.some(h => v.name.toLowerCase().includes(h)));
                if (!chosen) u.pitch = 1.12;
            } else {
                chosen = frVoices.find(v => maleHints.some(h => v.name.toLowerCase().includes(h)));
                if (!chosen) u.pitch = 0.88;
            }
        }

        if (!chosen) chosen = frVoices.find(v => v.lang === 'fr-FR') || frVoices[0];
        if (chosen) u.voice = chosen;

        window.speechSynthesis.speak(u);
    };

    const voices = window.speechSynthesis.getVoices();
    if (voices.length === 0) {
        window.speechSynthesis.onvoiceschanged = () => {
            window.speechSynthesis.onvoiceschanged = null;
            doSpeak();
        };
        setTimeout(() => {
            if (!window.speechSynthesis.speaking) {
                window.speechSynthesis.onvoiceschanged = null;
                doSpeak();
            }
        }, 700);
    } else {
        doSpeak();
    }
}

// ============================================================
// 计时
// ============================================================
function startTimer(taskCode) {
    stopTimer();
    const durations = { 'tache1': 180, 'tache2': 210, 'tache3': 210 };
    const max = durations[taskCode] || 180;
    timerSeconds = 0;
    const bar = document.getElementById('timerBar');
    if (bar) bar.style.display = 'flex';
    const tEl = document.getElementById('timerTask');
    if (tEl) tEl.textContent = 'Tâche ' + taskCode.slice(-1);

    timerInterval = setInterval(() => {
        timerSeconds++;
        const m = Math.floor(timerSeconds / 60);
        const s = timerSeconds % 60;
        const tEl2 = document.getElementById('timerText');
        if (tEl2) tEl2.textContent = m + ':' + String(s).padStart(2, '0');
        const barEl = document.getElementById('timerBar');
        if (barEl) {
            barEl.classList.toggle('over', timerSeconds >= max);
            barEl.classList.toggle('warning', timerSeconds >= max - 30 && timerSeconds < max);
        }
    }, 1000);
}
function stopTimer() {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = null;
    const bar = document.getElementById('timerBar');
    if (bar) { bar.classList.remove('warning', 'over'); bar.style.display = 'none'; }
}

// ============================================================
// 初始化
// ============================================================
document.addEventListener('DOMContentLoaded', async () => {
    const user = verifyUser();
    if (!user) return;
    currentUser = user;
    document.getElementById('userName').textContent = user.name || 'Élève';

    let retries = 0;
    while (!window.supabaseAuth && retries < 20) {
        await new Promise(r => setTimeout(r, 200));
        retries++;
    }

    if ('speechSynthesis' in window) window.speechSynthesis.getVoices();

    await loadTask('tache1');

    document.getElementById('micBtn').addEventListener('click', startRecording);
    document.getElementById('stopBtn').addEventListener('click', stopRecording);
    document.body.addEventListener('click', () => unlockTTS());
});

// ============================================================
// 切换 Task
// ============================================================
async function switchTask(task) {
    if (currentTask === task && currentTaskInfo) return;
    currentTask = task;
    selectedTopic = null;
    chatMessages = [];
    currentExaminer = null;
    renderChat();
    document.querySelectorAll('.oral-tab').forEach(t => {
        t.classList.toggle('active', t.dataset.task === task);
    });
    await loadTask(task);
}
window.switchTask = switchTask;

async function loadTask(task) {
    showLoading('Chargement...');
    try {
        const supabase = window.supabaseAuth.getSupabaseClient();

        const { data: taskData } = await supabase
            .from('tcf_oral_tasks').select('*').eq('task_code', task).single();

        currentTaskInfo = taskData;
        if (taskData) {
            document.getElementById('taskName').textContent = taskData.task_name_fr;
            document.getElementById('taskDesc').textContent = taskData.task_description_fr || '';
            document.getElementById('taskDuration').textContent = taskData.duration_minutes || '—';
            document.getElementById('taskFramework').textContent = taskData.framework_fr || '—';
        }

        const { data: topics } = await supabase
            .from('tcf_oral_topics').select('*').eq('task_code', task).order('sort_order');

        allTopics = topics || [];
        renderTopics();

        if (allTopics.length > 0) {
            await selectTopic(allTopics[0].id);
        }
    } catch (e) {
        console.error(e);
        showToast('Erreur de chargement', 'error');
    } finally {
        hideLoading();
    }
}

// ============================================================
// 主题列表
// ============================================================
function renderTopics() {
    const container = document.getElementById('topicsList');
    if (allTopics.length === 0) {
        container.innerHTML = '<div class="empty-state"><i class="fas fa-inbox"></i><p>Aucun sujet</p></div>';
        return;
    }
    const groups = {};
    allTopics.forEach(t => {
        const key = t.category_fr;
        if (!groups[key]) groups[key] = { fr: t.category_fr, items: [] };
        groups[key].items.push(t);
    });
    let html = '';
    for (const key in groups) {
        const g = groups[key];
        html += '<div class="topic-category">';
        html += '<div class="topic-category-title" onclick="toggleCategory(this)">' +
                '<span>' + escapeHtml(g.fr) + ' <small style="opacity:0.7;">(' + g.items.length + ')</small></span>' +
                '<i class="fas fa-chevron-down"></i></div>';
        html += '<div class="topic-category-items">';
        g.items.forEach(t => {
            html += '<div class="topic-item" data-id="' + t.id + '" onclick="selectTopic(' + t.id + ')">' +
                    escapeHtml(t.title_fr) + '</div>';
        });
        html += '</div></div>';
    }
    container.innerHTML = html;
}
function toggleCategory(el) {
    el.classList.toggle('collapsed');
    el.nextElementSibling.classList.toggle('collapsed');
}
window.toggleCategory = toggleCategory;

// ============================================================
// 选择题目 → 考官开场
// ============================================================
async function selectTopic(topicId) {
    const topic = allTopics.find(t => t.id === topicId);
    if (!topic) return;
    selectedTopic = topic;

    document.querySelectorAll('.topic-item').forEach(el => {
        el.classList.toggle('active', parseInt(el.dataset.id) === topicId);
    });

    chatMessages = [];
    currentExaminer = null;
    renderChat();
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    practiceStartTime = null;

    showLoading('Chargement...');
    try {
        const supabase = window.supabaseAuth.getSupabaseClient();
        const { data: samples } = await supabase
            .from('tcf_oral_samples').select('*').eq('topic_id', topicId).order('sort_order');
        selectedSamples = samples || [];
        renderDetail();
    } catch (e) {
        console.error(e);
    } finally {
        hideLoading();
    }

    startExaminerOpening();
    startTimer(currentTask);
}
window.selectTopic = selectTopic;

// ============================================================
// 考官开场
// ============================================================
async function startExaminerOpening() {
    const statusEl = document.getElementById('status');
    statusEl.textContent = '🤖 L\'examinateur vous parle...';

    try {
        const scenarioFr = selectedTopic.scenario_fr || '';

        console.log('🚀 startExaminerOpening — 调用 examinerReplyOral...');

        const result = await window.supabaseAuth.examinerReplyOral(
            currentTask,
            selectedTopic.prompt_fr,
            selectedTopic.title_fr,
            scenarioFr,
            '',
            []
        );

        console.log('🚀 examinerReplyOral 返回:', JSON.stringify(result).slice(0, 300));

        const { text, mood, examiner } = extractTextAndMood(result);

        console.log('🚀 提取后 — text 长度:', text.length, '| mood:', mood, '| examiner:', examiner);

        if (!text || text.trim().length < 3) {
            console.error('❌ text 为空，result =', result);
            throw new Error('Réponse IA vide — vérifier la console');
        }

        currentExaminer = examiner;

        chatMessages.push({ role: 'ai', text, mood });
        renderChat();
        speakFrench(text, examiner);
        statusEl.textContent = '🎤 À vous de répondre. Appuyez sur le micro.';
    } catch (e) {
        console.error('❌ Erreur opening:', e);
        statusEl.textContent = '❌ ' + e.message;
        showToast('Erreur: ' + e.message, 'error');
    }
}

// ============================================================
// 渲染题目详情
// ============================================================
function renderDetail() {
    const container = document.getElementById('detailPanel');
    if (!selectedTopic) {
        container.innerHTML = '<div class="empty-state"><i class="fas fa-hand-pointer"></i><p>Sélectionnez un sujet</p></div>';
        return;
    }
    let html = '';

    if (selectedTopic.scenario_fr) {
        html += '<div class="detail-scenario">';
        html += '<div class="detail-prompt-label">🎭 Scénario</div>';
        html += '<div class="detail-scenario-fr">' + escapeHtml(selectedTopic.scenario_fr) + '</div>';
        if (selectedTopic.scenario_zh) {
            html += '<div class="detail-scenario-zh">' + escapeHtml(selectedTopic.scenario_zh) + '</div>';
        }
        html += '</div>';
    }

    html += '<div class="detail-prompt">';
    html += '<div class="detail-prompt-label">📌 ' + (currentTask === 'tache2' ? 'Votre mission' : 'Question de l\'examinateur') + '</div>';
    html += '<div class="detail-prompt-fr">« ' + escapeHtml(selectedTopic.prompt_fr) + ' »</div>';
    html += '<div class="detail-prompt-zh">' + escapeHtml(selectedTopic.prompt_zh) + '</div>';
    html += '</div>';

    if (selectedTopic.examiner_focus_fr) {
        html += '<div class="detail-focus">';
        html += '<i class="fas fa-bullseye"></i> <strong>Ce que l\'examinateur cherche :</strong><br>';
        html += escapeHtml(selectedTopic.examiner_focus_fr);
        if (selectedTopic.examiner_focus_zh) {
            html += '<br><small style="color:#999;">' + escapeHtml(selectedTopic.examiner_focus_zh) + '</small>';
        }
        html += '</div>';
    }

    html += '<div class="detail-samples">';
    const levelOrder = { 'A2': 1, 'B1': 2, 'B2': 3 };
    selectedSamples.sort((a, b) => (levelOrder[a.level] || 99) - (levelOrder[b.level] || 99));
    selectedSamples.forEach(s => {
        const lv = (s.level || '').toLowerCase();
        html += '<div class="sample-card">';
        html += '<span class="sample-level ' + lv + '">' + escapeHtml(s.level) + '</span>';
        html += '<div class="sample-text">' + escapeHtml(s.example_fr) + '</div>';
        html += '<div class="sample-analysis">💡 ' + escapeHtml(s.analysis_zh) + '</div>';
        if (s.key_phrases && Array.isArray(s.key_phrases) && s.key_phrases.length) {
            html += '<div class="sample-phrases">';
            s.key_phrases.forEach(p => {
                html += '<span class="phrase-chip">' + escapeHtml(p) + '</span>';
            });
            html += '</div>';
        }
        html += '</div>';
    });
    html += '</div>';
    container.innerHTML = html;
}

// ============================================================
// 录音
// ============================================================
async function startRecording() {
    unlockTTS();
    if (!selectedTopic) { showToast('Sélectionnez un sujet d\'abord', 'warning'); return; }
    if (isProcessing) return;

    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mimeType = MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm'
                       : MediaRecorder.isTypeSupported('audio/mp4')  ? 'audio/mp4' : '';
        mediaRecorder = mimeType ? new MediaRecorder(stream, { mimeType }) : new MediaRecorder(stream);
        audioChunks = [];
        hasSpoken = false;

        mediaRecorder.ondataavailable = e => { if (e.data.size > 0) audioChunks.push(e.data); };
        mediaRecorder.onstop = async () => {
            const blob = new Blob(audioChunks, { type: mediaRecorder.mimeType || 'audio/webm' });
            stream.getTracks().forEach(t => t.stop());
            cleanupAudioDetection();
            await processAudio(blob);
        };

        try {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const analyser = audioCtx.createAnalyser();
            const source = audioCtx.createMediaStreamSource(stream);
            source.connect(analyser);
            const arr = new Uint8Array(analyser.frequencyBinCount);
            silenceCheckInterval = setInterval(() => {
                analyser.getByteFrequencyData(arr);
                const avg = arr.reduce((a, b) => a + b, 0) / arr.length;
                if (avg > 15) hasSpoken = true;
            }, 200);

            silenceTimer = setTimeout(() => {
                if (!hasSpoken) {
                    document.getElementById('status').textContent = '🤫 L\'examinateur attend votre réponse...';
                }
            }, 5000);
        } catch (e) { /* ignore */ }

        mediaRecorder.start();
        isRecording = true;
        if (!practiceStartTime) practiceStartTime = Date.now();

        document.getElementById('micBtn').style.display = 'none';
        document.getElementById('stopBtn').style.display = 'inline-flex';
        document.getElementById('status').textContent = '🎤 Enregistrement en cours...';
    } catch (e) {
        console.error(e);
        showToast('Micro non autorisé', 'error');
    }
}

function cleanupAudioDetection() {
    if (silenceCheckInterval) clearInterval(silenceCheckInterval);
    if (silenceTimer) clearTimeout(silenceTimer);
    if (audioCtx) audioCtx.close().catch(() => {});
    silenceCheckInterval = null;
    silenceTimer = null;
    audioCtx = null;
}

function stopRecording() {
    if (mediaRecorder && isRecording) {
        mediaRecorder.stop();
        isRecording = false;
        document.getElementById('micBtn').style.display = 'inline-flex';
        document.getElementById('stopBtn').style.display = 'none';
        document.getElementById('status').textContent = '⏳ Traitement...';
    }
}

// ============================================================
// 处理音频 → Whisper → AI 追问
// ============================================================
async function processAudio(blob) {
    isProcessing = true;
    try {
        const userText = await window.supabaseAuth.transcribeAudioOral(blob);
        if (!userText || userText.trim().length < 2) {
            document.getElementById('status').textContent = '❌ Aucune parole détectée';
            isProcessing = false;
            return;
        }

        chatMessages.push({ role: 'user', text: userText });
        renderChat();

        document.getElementById('status').textContent = '🤖 L\'examinateur répond...';

        const result = await window.supabaseAuth.examinerReplyOral(
            currentTask, selectedTopic.prompt_fr, selectedTopic.title_fr,
            selectedTopic.scenario_fr || '', '', chatMessages
        );

        console.log('🚀 examinerReplyOral (follow-up) 返回:', JSON.stringify(result).slice(0, 300));

        const { text, mood } = extractTextAndMood(result);

        if (!text || text.trim().length < 3) {
            throw new Error('Réponse IA vide (follow-up)');
        }

        chatMessages.push({ role: 'ai', text, mood });
        renderChat();
        speakFrench(text, currentExaminer);
        document.getElementById('status').textContent = '🎤 À vous. Appuyez sur le micro.';
    } catch (e) {
        console.error('❌ Erreur processAudio:', e);
        document.getElementById('status').textContent = '❌ ' + e.message;
        showToast(e.message, 'error');
    } finally {
        isProcessing = false;
    }
}

// ============================================================
// 渲染对话
// ============================================================
function renderChat() {
    const box = document.getElementById('chatHistory');
    if (chatMessages.length === 0) {
        box.innerHTML = '<div class="chat-empty"><i class="fas fa-comments"></i><p>L\'examinateur va commencer...</p></div>';
        return;
    }
    let html = '';
    chatMessages.forEach((m, i) => {
        const cls = m.role === 'user' ? 'user' : 'ai';
        const mood = m.mood ? ' mood-' + m.mood : '';
        const label = m.role === 'user' ? 'Vous' : 'Examinateur';
        html += '<div class="chat-message ' + cls + mood + '">';
        html += '<span class="msg-label">' + label + '</span>';
        html += '<span class="msg-text">' + escapeHtml(m.text) + '</span>';
        if (m.role === 'ai') {
            html += '<button class="replay-btn" onclick="replayMessage(' + i + ')" title="Réécouter">🔊</button>';
        }
        html += '</div>';
    });
    box.innerHTML = html;
    box.scrollTop = box.scrollHeight;
}

function replayMessage(index) {
    const msg = chatMessages[index];
    if (msg && msg.role === 'ai') { unlockTTS(); speakFrench(msg.text, currentExaminer); }
}
window.replayMessage = replayMessage;

// ============================================================
// 结束 & 评分
// ============================================================
async function endPractice() {
    const userCount = chatMessages.filter(m => m.role === 'user').length;
    if (userCount === 0) { showToast('Parlez d\'abord avant d\'évaluer', 'warning'); return; }

    stopTimer();
    showLoading('Évaluation en cours...');
    try {
        const duration = practiceStartTime ? Math.round((Date.now() - practiceStartTime) / 1000) : 0;
        const result = await window.supabaseAuth.evaluateOralAnswer(
            currentTask, selectedTopic.prompt_fr, chatMessages, duration
        );
        try {
            const supabase = window.supabaseAuth.getSupabaseClient();
            await supabase.from('tcf_oral_practice').insert([{
                user_id: currentUser.userId || currentUser.id || 'unknown',
                user_name: currentUser.name || 'Élève',
                task_code: currentTask,
                topic_id: selectedTopic.id,
                user_transcript: chatMessages.filter(m => m.role === 'user').map(m => m.text).join('\n---\n'),
                ai_response: chatMessages.filter(m => m.role === 'ai').map(m => m.text).join('\n---\n'),
                ai_feedback: result.feedback,
                score: result.score,
                level: result.level,
                duration_seconds: duration
            }]);
        } catch (e) { console.warn('历史保存失败', e); }
        showReport(result);
    } catch (e) {
        console.error(e);
        showToast('Erreur: ' + e.message, 'error');
    } finally {
        hideLoading();
    }
}
window.endPractice = endPractice;

function showReport(result) {
    const score = result.score !== null ? result.score : 0;
    const scoreEl = document.getElementById('reportScore');
    scoreEl.textContent = (result.score !== null ? result.score : '—') + ' / 20';

    let color = '#27ae60';
    if (score <= 1) color = '#e74c3c';
    else if (score <= 5) color = '#e67e22';
    else if (score <= 9) color = '#f39c12';
    scoreEl.style.color = color;

    document.getElementById('reportLevel').textContent = result.level || '—';
    document.getElementById('reportBody').innerHTML = escapeHtml(result.feedback || '').replace(/\n/g, '<br>');
    document.getElementById('reportModal').classList.add('show');
}

function closeReport() {
    document.getElementById('reportModal').classList.remove('show');
}
window.closeReport = closeReport;

function copyReport() {
    const text = document.getElementById('reportBody').innerText;
    navigator.clipboard.writeText(text).then(() => showToast('Copié !', 'success'));
}
window.copyReport = copyReport;

function resetPractice() {
    if (chatMessages.length > 0 && !confirm('Effacer la conversation ?')) return;
    chatMessages = [];
    practiceStartTime = null;
    currentExaminer = null;
    renderChat();
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    stopTimer();
    if (selectedTopic) {
        startExaminerOpening();
        startTimer(currentTask);
    }
}
window.resetPractice = resetPractice;

document.querySelectorAll('.modal').forEach(m => {
    m.addEventListener('click', e => { if (e.target === m) m.classList.remove('show'); });
});