// ============================================================
// 全局变量
// ============================================================
let currentUser = null;
let currentTask = 'tache1';
let selectedTopic = null;
let currentTopics = [];
let filteredTopics = [];
let feedbackVisible = true;
let isSubmitting = false;

// ============================================================
// DOM 引用
// ============================================================
const $ = id => document.getElementById(id);
const writingArea = $('writingArea');
const wordCounter = $('wordCounter');
const wordTarget = $('wordTarget');
const topicList = $('topicList');
const topicDetail = $('topicDetail');
const searchInput = $('searchInput');
const tipText = $('tipText');

// ============================================================
// TOKEN 验证
// ============================================================
function getTokenFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('token');
}

function parseToken(token) {
    try {
        const decoded = decodeURIComponent(atob(token));
        return JSON.parse(decoded);
    } catch (e) {
        console.error('Token 解析失败:', e);
        return null;
    }
}

function verifyUser() {
    const token = getTokenFromURL();
    if (!token) {
        showToast('Veuillez vous connecter d\'abord', 'warning');
        setTimeout(() => { window.location.href = 'francais.html'; }, 1500);
        return null;
    }
    const userData = parseToken(token);
    if (!userData) {
        showToast('Session invalide', 'error');
        setTimeout(() => { window.location.href = 'francais.html'; }, 1500);
        return null;
    }
    if (userData.expiry) {
        const expiryDate = new Date(userData.expiry);
        if (expiryDate < new Date()) {
            showToast('Votre session a expiré', 'error');
            setTimeout(() => { window.location.href = 'francais.html'; }, 1500);
            return null;
        }
    }
    return userData;
}

// ============================================================
// TOAST
// ============================================================
function showToast(message, type = 'info') {
    let container = document.getElementById('toastContainer');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        container.id = 'toastContainer';
        document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    const icons = { success: 'fa-check-circle', error: 'fa-exclamation-circle', info: 'fa-info-circle', warning: 'fa-exclamation-triangle' };
    toast.innerHTML = `<i class="fas ${icons[type] || icons.info}"></i> ${message}`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(40px)';
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

// ============================================================
// 切换任务
// ============================================================
async function switchTask(task) {
    currentTask = task;
    selectedTopic = null;
    filteredTopics = [];

    document.querySelectorAll('.task-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.task === task);
    });

    // 清空搜索
    searchInput.value = '';

    // 更新字数目标
    const targets = {
        'tache1': '30-60 mots',
        'tache2': '40-90 mots',
        'tache3': '40-90 mots'
    };
    wordTarget.textContent = '📏 ' + (targets[task] || '30-60 mots');

    // 禁用写作区
    writingArea.disabled = true;
    writingArea.placeholder = 'Chargement des sujets...';

    await loadTopics(task);
}

// ============================================================
// 加载题目
// ============================================================
async function loadTopics(taskType) {
    topicList.innerHTML = `<div class="loading-state"><i class="fas fa-spinner fa-spin"></i> Chargement...</div>`;

    try {
        const topics = await window.supabaseAuth.getWritingTopics(taskType, null);
        currentTopics = topics || [];
        filteredTopics = [...currentTopics];

        if (currentTopics.length === 0) {
            topicList.innerHTML = `<div class="empty-state"><i class="fas fa-info-circle"></i><p>Aucun sujet disponible</p></div>`;
            return;
        }

        renderTopicList(filteredTopics);

        // 自动选中第一个
        if (filteredTopics.length > 0) {
            selectTopic(filteredTopics[0].id);
        }

    } catch (error) {
        console.error('加载题目失败:', error);
        topicList.innerHTML = `<div class="empty-state"><i class="fas fa-exclamation-triangle"></i><p>Erreur de chargement</p></div>`;
    }
}

// ============================================================
// 渲染题目列表
// ============================================================
function renderTopicList(topics) {
    if (topics.length === 0) {
        topicList.innerHTML = `<div class="empty-state"><i class="fas fa-search"></i><p>Aucun résultat</p></div>`;
        return;
    }

    topicList.innerHTML = topics.map(topic => `
        <div class="topic-item ${selectedTopic && selectedTopic.id === topic.id ? 'active' : ''}" 
             onclick="selectTopic('${topic.id}')">
            <div class="topic-title">${escapeHtml(topic.title)}</div>
            <div class="topic-meta">
                <span class="task-tag">${topic.task_type}</span>
                <span class="word-tag">${topic.word_min}-${topic.word_max} mots</span>
            </div>
        </div>
    `).join('');
}

// ============================================================
// HTML 转义
// ============================================================
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ============================================================
// 搜索过滤
// ============================================================
function filterTopicsBySearch() {
    const query = searchInput.value.toLowerCase().trim();
    if (!query) {
        filteredTopics = [...currentTopics];
    } else {
        filteredTopics = currentTopics.filter(t =>
            t.title.toLowerCase().includes(query) ||
            t.description.toLowerCase().includes(query)
        );
    }
    renderTopicList(filteredTopics);
    // 如果有结果且没有选中，自动选第一个
    if (filteredTopics.length > 0 && !selectedTopic) {
        selectTopic(filteredTopics[0].id);
    } else if (filteredTopics.length === 0) {
        // 清空详情
        topicDetail.innerHTML = `
            <div class="detail-content">
                <div class="detail-empty">
                    <i class="fas fa-search"></i>
                    <p>Aucun sujet ne correspond</p>
                </div>
            </div>
        `;
        writingArea.disabled = true;
        writingArea.placeholder = 'Aucun sujet trouvé';
        tipText.textContent = 'Essayez une autre recherche';
    }
}

// ============================================================
// 随机选题目
// ============================================================
function selectRandomTopic() {
    const available = filteredTopics.length > 0 ? filteredTopics : currentTopics;
    if (available.length === 0) {
        showToast('Aucun sujet disponible', 'warning');
        return;
    }
    const randomIndex = Math.floor(Math.random() * available.length);
    selectTopic(available[randomIndex].id);
    showToast('🎲 Sujet aléatoire !', 'info');
}

// ============================================================
// 选择题目
// ============================================================
function selectTopic(topicId) {
    const topic = currentTopics.find(t => t.id === topicId);
    if (!topic) return;

    selectedTopic = topic;

    // 更新列表高亮
    document.querySelectorAll('.topic-item').forEach(el => {
        const onclick = el.getAttribute('onclick');
        el.classList.toggle('active', onclick && onclick.includes(topicId));
    });

    // 更新详情
    topicDetail.innerHTML = `
        <div class="detail-content">
            <div class="detail-title">${escapeHtml(topic.title)}</div>
            <div class="detail-desc">${escapeHtml(topic.description)}</div>
            <div class="detail-meta">
                <span><i class="fas fa-tag"></i> ${topic.task_type}</span>
                <span><i class="fas fa-font"></i> ${topic.word_min}-${topic.word_max} mots</span>
            </div>
            ${topic.example ? `<button class="detail-example-btn" onclick="openExampleModal('${topic.id}')"><i class="fas fa-book-open"></i> Voir un exemple</button>` : ''}
        </div>
    `;

    // 更新字数目标
    wordTarget.textContent = `📏 ${topic.word_min}-${topic.word_max} mots`;

    // 启用写作区
    writingArea.disabled = false;
    writingArea.placeholder = `Écrivez votre texte ici...`;
    writingArea.value = '';
    updateWordCount();

    // 更新提示
    tipText.textContent = `Sujet: ${topic.title}`;

    // 隐藏反馈
    document.getElementById('feedbackPanel').style.display = 'none';

    // 聚焦
    writingArea.focus();
}

// ============================================================
// 字数统计
// ============================================================
function updateWordCount() {
    const text = writingArea.value.trim();
    const words = text ? text.split(/\s+/).length : 0;
    wordCounter.textContent = `${words} mots`;

    if (selectedTopic) {
        const max = selectedTopic.word_max;
        if (words > max) {
            wordCounter.classList.add('over');
        } else {
            wordCounter.classList.remove('over');
        }
    }
}

// ============================================================
// 清空写作区
// ============================================================
function clearWriting() {
    if (!writingArea.value.trim()) return;
    if (confirm('Effacer votre texte ?')) {
        writingArea.value = '';
        updateWordCount();
        document.getElementById('feedbackPanel').style.display = 'none';
        writingArea.focus();
        showToast('Texte effacé', 'info');
    }
}

// ============================================================
// 提交写作
// ============================================================
async function submitWriting() {
    if (isSubmitting) return;

    const text = writingArea.value.trim();

    if (!selectedTopic) {
        showToast('Sélectionnez un sujet d\'abord', 'warning');
        return;
    }

    if (text.length < 5) {
        showToast('Votre texte est trop court. Écrivez au moins quelques phrases.', 'warning');
        return;
    }

    const words = text.split(/\s+/).length;
    const min = selectedTopic.word_min;
    const max = selectedTopic.word_max;

    if (words < min) {
        showToast(`Minimum: ${min} mots. Actuel: ${words} mots.`, 'warning');
        return;
    }

    if (words > max) {
        showToast(`Maximum: ${max} mots. Actuel: ${words} mots.`, 'warning');
        return;
    }

    // 显示加载
    isSubmitting = true;
    document.getElementById('loadingOverlay').style.display = 'flex';

    try {
        const prompt = window.supabaseAuth.getWritingPrompt(
            currentTask,
            selectedTopic.title,
            selectedTopic.word_min,
            selectedTopic.word_max
        );

        const feedback = await window.supabaseAuth.callGeminiAI(prompt, text);

        // 解析分数
        let score = null;
        const maxScore = currentTask === 'tache1' ? 4 : currentTask === 'tache2' ? 6 : 10;
        const scoreMatch = feedback.match(/Note\s*[:：]\s*([\d.]+)\s*\/\s*(\d+)/);
        if (scoreMatch) {
            score = parseFloat(scoreMatch[1]);
        }

        // 解析水平
        let level = null;
        const levelMatch = feedback.match(/Niveau\s*CECRL\s*estimé\s*[:：]\s*([A-C][1-2])/i);
        if (levelMatch) {
            level = levelMatch[1].toUpperCase();
        }

        // 保存历史
        await window.supabaseAuth.saveWritingHistory({
            user_id: currentUser.userId || currentUser.id || 'unknown',
            user_name: currentUser.name || 'Élève',
            topic_id: selectedTopic.id,
            topic_title: selectedTopic.title,
            task_type: currentTask,
            user_text: text,
            ai_feedback: feedback,
            score: score,
            word_count: words
        });

        // 显示反馈
        showFeedback(feedback, score, maxScore, level);
        showToast('✅ Correction terminée !', 'success');

    } catch (error) {
        console.error('提交失败:', error);
        showToast('Erreur: ' + error.message, 'error');
    } finally {
        isSubmitting = false;
        document.getElementById('loadingOverlay').style.display = 'none';
    }
}

// ============================================================
// 显示反馈
// ============================================================
function showFeedback(feedback, score, maxScore, level) {
    const panel = document.getElementById('feedbackPanel');
    panel.style.display = 'block';
    feedbackVisible = true;

    // 更新 header
    document.getElementById('feedbackLevel').textContent = level || '—';
    document.getElementById('feedbackScore').textContent = score !== null ? `${score} / ${maxScore}` : '—';
    document.getElementById('feedbackToggleBtn').innerHTML = '<i class="fas fa-chevron-up"></i>';

    // 渲染 body
    const body = document.getElementById('feedbackBody');
    let html = feedback
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/✅/g, '<span class="positive">✅</span>')
        .replace(/🔧/g, '<span class="negative">🔧</span>')
        .replace(/💡/g, '💡')
        .replace(/📝/g, '📝')
        .replace(/📄/g, '📄')
        .replace(/📊/g, '📊')
        .replace(/\n/g, '<br>');

    body.innerHTML = html;
    body.classList.remove('collapsed');

    // 滚动到反馈区
    panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ============================================================
// 切换反馈折叠
// ============================================================
function toggleFeedback() {
    feedbackVisible = !feedbackVisible;
    const body = document.getElementById('feedbackBody');
    const btn = document.getElementById('feedbackToggleBtn');
    if (feedbackVisible) {
        body.classList.remove('collapsed');
        btn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    } else {
        body.classList.add('collapsed');
        btn.innerHTML = '<i class="fas fa-chevron-down"></i>';
    }
}

// ============================================================
// 关闭反馈
// ============================================================
function closeFeedback() {
    document.getElementById('feedbackPanel').style.display = 'none';
}

// ============================================================
// 复制反馈
// ============================================================
function copyFeedback() {
    const body = document.getElementById('feedbackBody');
    const text = body.textContent || body.innerText;
    navigator.clipboard.writeText(text).then(() => {
        showToast('Copié !', 'success');
    }).catch(() => {
        const range = document.createRange();
        range.selectNode(body);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand('copy');
        showToast('Copié !', 'success');
    });
}

// ============================================================
// 范文弹窗
// ============================================================
function openExampleModal(topicId) {
    const topic = currentTopics.find(t => t.id === topicId);
    if (!topic || !topic.example) return;

    document.getElementById('exampleContent').innerHTML = `
        <span class="example-label">📄 Exemple de réponse :</span>
        ${escapeHtml(topic.example)}
    `;
    document.getElementById('exampleModal').classList.add('show');
}

function closeExampleModal() {
    document.getElementById('exampleModal').classList.remove('show');
}

// ============================================================
// 历史记录
// ============================================================
async function openHistory() {
    const modal = document.getElementById('historyModal');
    modal.classList.add('show');

    const list = document.getElementById('historyList');
    list.innerHTML = `<div class="loading-state"><i class="fas fa-spinner fa-spin"></i> Chargement...</div>`;

    try {
        const history = await window.supabaseAuth.getWritingHistory(
            currentUser.userId || currentUser.id || 'unknown',
            currentUser.name || 'Élève'
        );

        if (history.length === 0) {
            list.innerHTML = `<div class="empty-state"><i class="fas fa-inbox"></i><p>Aucune production</p></div>`;
            return;
        }

        list.innerHTML = history.map(item => `
            <div class="history-item">
                <div class="h-info">
                    <div class="h-title">${escapeHtml(item.topic_title || 'Sans titre')}</div>
                    <div class="h-meta">
                        ${item.task_type || ''} · 
                        ${new Date(item.created_at).toLocaleDateString('fr-FR')} · 
                        ${item.word_count || 0} mots
                    </div>
                </div>
                <div class="h-score">${item.score !== null && item.score !== undefined ? item.score + '/10' : '-'}</div>
                <div class="h-actions">
                    <button onclick="viewHistoryItem('${item.id}')"><i class="fas fa-eye"></i></button>
                    <button onclick="deleteHistoryItem('${item.id}')"><i class="fas fa-trash"></i></button>
                </div>
            </div>
        `).join('');

    } catch (error) {
        console.error('加载历史失败:', error);
        list.innerHTML = `<div class="empty-state"><i class="fas fa-exclamation-triangle"></i><p>Erreur de chargement</p></div>`;
    }
}

function closeHistory() {
    document.getElementById('historyModal').classList.remove('show');
}

// ============================================================
// 查看历史详情
// ============================================================
async function viewHistoryItem(id) {
    // 先从历史中找
    const list = document.getElementById('historyList');
    const items = list.querySelectorAll('.history-item');
    let targetItem = null;
    for (const el of items) {
        const btn = el.querySelector('.h-actions button');
        if (btn && btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(id)) {
            targetItem = el;
            break;
        }
    }

    if (!targetItem) {
        showToast('Impossible de trouver cette production', 'error');
        return;
    }

    // 获取数据 - 从存储中重新获取
    try {
        const history = await window.supabaseAuth.getWritingHistory(
            currentUser.userId || currentUser.id || 'unknown',
            currentUser.name || 'Élève'
        );
        const item = history.find(h => h.id === id);
        if (!item) {
            showToast('Production non trouvée', 'error');
            return;
        }

        document.getElementById('viewHistoryContent').innerHTML = `
            <div style="margin-bottom:12px;">
                <strong>${escapeHtml(item.topic_title || 'Sans titre')}</strong>
                <br>
                <span style="color:var(--text-muted);font-size:0.82rem;">
                    ${item.task_type || ''} · ${new Date(item.created_at).toLocaleDateString('fr-FR')} · ${item.word_count || 0} mots
                    ${item.score !== null ? ' · Note: ' + item.score + '/10' : ''}
                </span>
            </div>

            <span class="view-history-label">✍️ Votre production :</span>
            <div class="view-history-text">${escapeHtml(item.user_text || '')}</div>

            ${item.ai_feedback ? `
                <span class="view-history-label">🤖 Correction IA :</span>
                <div class="view-history-feedback">${escapeHtml(item.ai_feedback)}</div>
            ` : ''}
        `;

        document.getElementById('viewHistoryModal').classList.add('show');

    } catch (error) {
        console.error('查看历史失败:', error);
        showToast('Erreur', 'error');
    }
}

function closeViewHistory() {
    document.getElementById('viewHistoryModal').classList.remove('show');
}

// ============================================================
// 删除历史
// ============================================================
async function deleteHistoryItem(id) {
    if (!confirm('Supprimer cette production ?')) return;
    try {
        await window.supabaseAuth.deleteWritingHistory(id);
        showToast('Supprimé', 'success');
        openHistory();
    } catch (error) {
        showToast('Erreur', 'error');
    }
}

// ============================================================
// 点击外部关闭模态框
// ============================================================
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('show');
        }
    });
});

// ============================================================
// 初始化
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    const user = verifyUser();
    if (!user) return;

    currentUser = user;
    document.getElementById('userName').textContent = user.name || 'Élève';

    // 加载题目
    loadTopics('tache1');

    // 字数实时统计
    writingArea.addEventListener('input', updateWordCount);

    // Ctrl+Enter 提交
    writingArea.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'Enter') {
            e.preventDefault();
            submitWriting();
        }
    });
});

// ============================================================
// 暴露函数给 HTML
// ============================================================
window.switchTask = switchTask;
window.selectTopic = selectTopic;
window.selectRandomTopic = selectRandomTopic;
window.filterTopicsBySearch = filterTopicsBySearch;
window.submitWriting = submitWriting;
window.clearWriting = clearWriting;
window.openHistory = openHistory;
window.closeHistory = closeHistory;
window.viewHistoryItem = viewHistoryItem;
window.closeViewHistory = closeViewHistory;
window.deleteHistoryItem = deleteHistoryItem;
window.openExampleModal = openExampleModal;
window.closeExampleModal = closeExampleModal;
window.toggleFeedback = toggleFeedback;
window.closeFeedback = closeFeedback;
window.copyFeedback = copyFeedback;
window.updateWordCount = updateWordCount;
window.showToast = showToast;