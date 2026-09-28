// ============================================================
// TCF IRN 口语训练系统
// ============================================================

let currentUser = null;
let currentTask = 'tache1';
let currentTaskInfo = null;
let allTopics = [];
let selectedTopic = null;
let selectedSamples = [];
let chatMessages = [];      // [{role: 'user'|'ai', text}]
let mediaRecorder = null;
let audioChunks = [];
let isRecording = false;
let practiceStartTime = null;
let isProcessing = false;

// ============================================================
// TOKEN / 用户
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
// UI 工具
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
// 初始化
// ============================================================
document.addEventListener('DOMContentLoaded', async () => {
    const user = verifyUser();
    if (!user) return;
    currentUser = user;
    document.getElementById('userName').textContent = user.name || 'Élève';

    // 等 supabase 就绪
    let retries = 0;
    while (!window.supabaseAuth && retries < 20) {
        await new Promise(r => setTimeout(r, 200));
        retries++;
    }

    await loadTask('tache1');

    // 绑定麦克风
    document.getElementById('micBtn').addEventListener('click', startRecording);
    document.getElementById('stopBtn').addEventListener('click', stopRecording);
});

// ============================================================
// 切换 Task
// ============================================================
async function switchTask(task) {
    if (currentTask === task && currentTaskInfo) return;
    currentTask = task;
    selectedTopic = null;
    chatMessages = [];
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

        // Task info
        const { data: taskData } = await supabase
            .from('tcf_oral_tasks')
            .select('*')
            .eq('task_code', task)
            .single();

        currentTaskInfo = taskData;
        if (taskData) {
            document.getElementById('taskName').textContent = taskData.task_name_fr;
            document.getElementById('taskDesc').textContent = taskData.task_description_fr || '';
            document.getElementById('taskDuration').textContent = taskData.duration_minutes || '—';
            document.getElementById('taskFramework').textContent = taskData.framework_fr || '—';
        }

        // Topics
        const { data: topics } = await supabase
            .from('tcf_oral_topics')
            .select('*')
            .eq('task_code', task)
            .order('sort_order');

        allTopics = topics || [];
        renderTopics();

        // 自动选第一个
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

    // 按 category 分组
    const groups = {};
    allTopics.forEach(t => {
        const key = t.category_fr;
        if (!groups[key]) groups[key] = { fr: t.category_fr, zh: t.category_zh, items: [] };
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
// 选择题目
// ============================================================
async function selectTopic(topicId) {
    const topic = allTopics.find(t => t.id === topicId);
    if (!topic) return;

    selectedTopic = topic;

    // 高亮
    document.querySelectorAll('.topic-item').forEach(el => {
        el.classList.toggle('active', parseInt(el.dataset.id) === topicId);
    });

    // 清空对话
    chatMessages = [];
    renderChat();

    showLoading('Chargement...');
    try {
        const supabase = window.supabaseAuth.getSupabaseClient();
        const { data: samples } = await supabase
            .from('tcf_oral_samples')
            .select('*')
            .eq('topic_id', topicId)
            .order('sort_order');

        selectedSamples = samples || [];
        renderDetail();
    } catch (e) {
        console.error(e);
    } finally {
        hideLoading();
    }
}
window.selectTopic = selectTopic;

function renderDetail() {
    const container = document.getElementById('detailPanel');
    if (!selectedTopic) {
        container.innerHTML = '<div class="empty-state"><i class="fas fa-hand-pointer"></i><p>Sélectionnez un sujet</p></div>';
        return;
    }

    let html = '';

    // Prompt
    html += '<div class="detail-prompt">';
    html += '<div class="detail-prompt-label">📌 Question de l\'examinateur</div>';
    html += '<div class="detail-prompt-fr">« ' + escapeHtml(selectedTopic.prompt_fr) + ' »</div>';
    html += '<div class="detail-prompt-zh">' + escapeHtml(selectedTopic.prompt_zh) + '</div>';
    html += '</div>';

    // Focus
    if (selectedTopic.examiner_focus_fr) {
        html += '<div class="detail-focus">';
        html += '<i class="fas fa-bullseye"></i> <strong>Ce que l\'examinateur cherche :</strong><br>';
        html += escapeHtml(selectedTopic.examiner_focus_fr);
        if (selectedTopic.examiner_focus_zh) {
            html += '<br><small style="color:#999;">' + escapeHtml(selectedTopic.examiner_focus_zh) + '</small>';
        }
        html += '</div>';
    }

    // Samples
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
// 麦克风 / 录音
// ============================================================
async function startRecording() {
    if (!selectedTopic) { showToast('Sélectionnez un sujet d\'abord', 'warning'); return; }
    if (isProcessing) return;

    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });
        audioChunks = [];

        mediaRecorder.ondataavailable = e => {
            if (e.data.size > 0) audioChunks.push(e.data);
        };
        mediaRecorder.onstop = async () => {
            const blob = new Blob(audioChunks, { type: 'audio/webm' });
            stream.getTracks().forEach(t => t.stop());
            await processAudio(blob);
        };

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
// 处理音频：Whisper → 考官 LLM
// ============================================================
async function processAudio(blob) {
    isProcessing = true;
    try {
        // 1. Whisper 转文字
        const userText = await window.supabaseAuth.transcribeAudioOral(blob);

        if (!userText || userText.trim().length < 2) {
            document.getElementById('status').textContent = '❌ Aucune parole détectée';
            isProcessing = false;
            return;
        }

        // 加入对话
        chatMessages.push({ role: 'user', text: userText });
        renderChat();

        // 2. 考官回应
        document.getElementById('status').textContent = '🤖 L\'examinateur répond...';
        const aiReply = await window.supabaseAuth.examinerReplyOral(
            currentTask,
            selectedTopic.prompt_fr,
            chatMessages
        );

        chatMessages.push({ role: 'ai', text: aiReply });
        renderChat();

        // 3. TTS 朗读
        speakFrench(aiReply);

        document.getElementById('status').textContent = '✅ Prêt';
    } catch (e) {
        console.error(e);
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
        box.innerHTML = '<div class="chat-empty"><i class="fas fa-comments"></i><p>Appuyez sur le micro pour commencer</p></div>';
        return;
    }
    let html = '';
    chatMessages.forEach(m => {
        const cls = m.role === 'user' ? 'user' : 'ai';
        const label = m.role === 'user' ? 'Vous' : 'Examinateur';
        html += '<div class="chat-message ' + cls + '">';
        html += '<span class="msg-label">' + label + '</span>';
        html += escapeHtml(m.text);
        html += '</div>';
    });
    box.innerHTML = html;
    box.scrollTop = box.scrollHeight;
}

// ============================================================
// TTS
// ============================================================
function speakFrench(text) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'fr-FR';
    u.rate = 0.95;
    u.pitch = 1.0;
    const voices = window.speechSynthesis.getVoices();
    const fr = voices.find(v => v.lang.startsWith('fr'));
    if (fr) u.voice = fr;
    window.speechSynthesis.speak(u);
}

// ============================================================
// 结束 & 评分
// ============================================================
async function endPractice() {
    if (chatMessages.length === 0) {
        showToast('Parlez d\'abord avant d\'évaluer', 'warning');
        return;
    }

    showLoading('Évaluation en cours...');
    try {
        const duration = practiceStartTime ? Math.round((Date.now() - practiceStartTime) / 1000) : 0;
        const result = await window.supabaseAuth.evaluateOralAnswer(
            currentTask,
            selectedTopic.prompt_fr,
            chatMessages,
            duration
        );

        // 保存历史
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
    document.getElementById('reportScore').textContent = (result.score !== null ? result.score : '—') + ' / 20';
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
    renderChat();
    document.getElementById('status').textContent = '';
}
window.resetPractice = resetPractice;

function closeHistory() {
    document.getElementById('historyModal').classList.remove('show');
}
window.closeHistory = closeHistory;

// 点遮罩关闭
document.querySelectorAll('.modal').forEach(m => {
    m.addEventListener('click', e => {
        if (e.target === m) m.classList.remove('show');
    });
});