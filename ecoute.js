// ============================================================
// 全局变量
// ============================================================
let currentUser = null;
let currentLevel = 'A1';
let allAudio = [];
let sessionAudio = [];
let currentAudioIndex = 0;
let currentQuestions = [];
let currentQuestionIndex = 0;
let answered = false;
let audioPlayer = null;
let isPlaying = false;
const MAX_PER_SESSION = 10;

// ============================================================
// DOM 引用
// ============================================================
const $ = id => document.getElementById(id);

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
    } catch (e) { return null; }
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
// 数据加载
// ============================================================
async function loadListeningTexts(level) {
    try {
        if (!window.supabaseAuth.getListeningTexts) {
            console.error('❌ getListeningTexts 未定义');
            return [];
        }
        const texts = await window.supabaseAuth.getListeningTexts(level);
        return texts || [];
    } catch (error) {
        console.error('加载听力失败:', error);
        return [];
    }
}

async function loadListeningQuestions(textId) {
    try {
        if (!window.supabaseAuth.getListeningQuestions) {
            console.error('❌ getListeningQuestions 未定义');
            return [];
        }
        const questions = await window.supabaseAuth.getListeningQuestions(textId);
        return questions || [];
    } catch (error) {
        console.error('加载题目失败:', error);
        return [];
    }
}

// ============================================================
// 切换级别
// ============================================================
// ============================================================
// 切换级别
// ============================================================
async function switchLevel(level) {
    currentLevel = level;
    currentAudioIndex = 0;
    
    // ✅ 重置所有答题状态
    currentQuestions = [];
    currentQuestionIndex = 0;
    answered = false;
    
    // ✅ 重置音频播放器
    if (audioPlayer) {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
        isPlaying = false;
        document.getElementById('playBtn').innerHTML = '<i class="fas fa-play"></i>';
        document.getElementById('progressFill').style.width = '0%';
        document.getElementById('timeCurrent').textContent = '0:00';
    }

    // ✅ 清空答题区域
    document.getElementById('answerArea').innerHTML = '';
    document.getElementById('feedbackArea').style.display = 'none';
    document.getElementById('feedbackArea').classList.remove('show');
    document.getElementById('questionText').textContent = 'Chargement...';
    document.getElementById('questionNumber').textContent = 'Q1';
    document.getElementById('exerciseCounter').textContent = '0 / 0';
    document.getElementById('progressFill').style.width = '0%';
    
    // ✅ 清空图片
    document.getElementById('audioImg').style.display = 'none';
    document.getElementById('imagePlaceholder').style.display = 'flex';
    
    // ✅ 清空原文
    document.getElementById('scriptContent').textContent = '';
    document.getElementById('scriptContent').classList.remove('show');
    document.getElementById('audioScript').style.display = 'none';

    // 更新按钮高亮
    document.querySelectorAll('.level-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.level === level);
    });

    await loadAudioForLevel();
    await updateProgress();
}
// ============================================================
// 加载音频
// ============================================================
async function loadAudioForLevel() {
    const texts = await loadListeningTexts(currentLevel);
    allAudio = texts;

    if (allAudio.length === 0) {
        document.getElementById('audioLevel').textContent = currentLevel;
        document.getElementById('audioTitle').textContent = 'Aucun audio disponible';
        document.getElementById('audioImg').style.display = 'none';
        document.getElementById('imagePlaceholder').style.display = 'flex';
        document.getElementById('questionText').textContent = 'Aucun audio disponible pour ce niveau.';
        document.getElementById('answerArea').innerHTML = '';
        document.getElementById('exerciseCounter').textContent = '0 / 0';
        document.getElementById('progressFill').style.width = '0%';
        document.getElementById('feedbackArea').style.display = 'none';
        return;
    }

    // 随机抽取最多10篇
    const shuffled = [...allAudio];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    sessionAudio = shuffled.slice(0, Math.min(MAX_PER_SESSION, shuffled.length));
    currentAudioIndex = 0;

    await loadAudio(0);
}
async function loadAudio(index) {
    const audio = sessionAudio[index];
    if (!audio) return;

    // ✅ 重置答题状态（切换音频时清空）
    currentQuestions = [];
    currentQuestionIndex = 0;
    answered = false;
    document.getElementById('answerArea').innerHTML = '';
    document.getElementById('feedbackArea').style.display = 'none';
    document.getElementById('feedbackArea').classList.remove('show');
    document.getElementById('btnCheck').disabled = false;
    document.getElementById('btnNext').disabled = true;
    document.getElementById('progressFill').style.width = '0%';
    document.getElementById('questionText').textContent = 'Chargement...';
    document.getElementById('questionNumber').textContent = 'Q1';
    document.getElementById('exerciseCounter').textContent = '0 / 0';

    // 更新标题
    document.getElementById('audioLevel').textContent = audio.level;
    document.getElementById('audioTitle').textContent = audio.title || `Document ${index + 1}`;

    // 显示图片
    const img = document.getElementById('audioImg');
    const placeholder = document.getElementById('imagePlaceholder');
    if (audio.image_url) {
        img.src = audio.image_url;
        img.style.display = 'block';
        placeholder.style.display = 'none';
    } else {
        img.style.display = 'none';
        placeholder.style.display = 'flex';
    }

    // 设置音频
    if (audioPlayer) {
        audioPlayer.pause();
        audioPlayer.src = audio.audio_url;
        audioPlayer.load();
    } else {
        audioPlayer = new Audio(audio.audio_url);
        audioPlayer.addEventListener('timeupdate', updateProgressBar);
        audioPlayer.addEventListener('loadedmetadata', () => {
            document.getElementById('timeTotal').textContent = formatTime(audioPlayer.duration);
        });
        audioPlayer.addEventListener('ended', () => {
            isPlaying = false;
            document.getElementById('playBtn').innerHTML = '<i class="fas fa-play"></i>';
        });
    }

    // 显示原文（如果有）
    const scriptContent = document.getElementById('scriptContent');
    if (audio.script) {
        scriptContent.textContent = audio.script;
        document.getElementById('audioScript').style.display = 'block';
    } else {
        document.getElementById('audioScript').style.display = 'none';
        scriptContent.textContent = '';
    }

    // 重置播放按钮
    isPlaying = false;
    document.getElementById('playBtn').innerHTML = '<i class="fas fa-play"></i>';
    document.getElementById('timeCurrent').textContent = '0:00';
    document.getElementById('progressFill').style.width = '0%';

    // 加载题目
    const questions = await loadListeningQuestions(audio.id);
    currentQuestions = questions;
    currentQuestionIndex = 0;
    answered = false;

    if (questions.length === 0) {
        document.getElementById('questionText').textContent = 'Aucune question pour cet audio.';
        document.getElementById('answerArea').innerHTML = '';
        document.getElementById('exerciseCounter').textContent = '0 / 0';
        document.getElementById('progressFill').style.width = '0%';
        return;
    }

    document.getElementById('exerciseCounter').textContent = `Question 1 / ${questions.length}`;
    renderQuestion(0);
}

// ============================================================
// 播放控制
// ============================================================
function togglePlay() {
    if (!audioPlayer) return;
    if (isPlaying) {
        audioPlayer.pause();
        isPlaying = false;
        document.getElementById('playBtn').innerHTML = '<i class="fas fa-play"></i>';
    } else {
        audioPlayer.play();
        isPlaying = true;
        document.getElementById('playBtn').innerHTML = '<i class="fas fa-pause"></i>';
    }
}

function updateProgressBar() {
    if (!audioPlayer) return;
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('timeCurrent').textContent = formatTime(audioPlayer.currentTime);
}

function seekAudio(event) {
    if (!audioPlayer) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    audioPlayer.currentTime = x * audioPlayer.duration;
}

function toggleMute() {
    if (!audioPlayer) return;
    audioPlayer.muted = !audioPlayer.muted;
    document.getElementById('soundIcon').className = audioPlayer.muted ? 'fas fa-volume-mute' : 'fas fa-volume-up';
}

function toggleScript() {
    const content = document.getElementById('scriptContent');
    content.classList.toggle('show');
}

function formatTime(seconds) {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// ============================================================
// 题目渲染
// ============================================================
function renderQuestion(index) {
    const q = currentQuestions[index];
    if (!q) return;

    document.getElementById('questionNumber').textContent = `Q${index + 1}`;
    document.getElementById('questionText').textContent = q.question;
    document.getElementById('exerciseCounter').textContent = `Question ${index + 1} / ${currentQuestions.length}`;
    document.getElementById('progressFill').style.width = `${((index + 1) / currentQuestions.length) * 100}%`;

    const feedbackArea = document.getElementById('feedbackArea');
    feedbackArea.classList.remove('show');
    feedbackArea.style.display = 'none';
    answered = false;

    document.getElementById('btnCheck').disabled = false;
    document.getElementById('btnNext').disabled = true;

    const answerArea = document.getElementById('answerArea');
    answerArea.innerHTML = '';

    const options = q.options || [];
    const letters = ['A', 'B', 'C', 'D'];
    const grid = document.createElement('div');
    grid.className = 'options-grid';

    options.forEach((opt, i) => {
        const div = document.createElement('div');
        div.className = 'option-item';
        div.dataset.index = i;
        div.onclick = function() { selectOption(this, i); };

        let displayText = opt;
        if (/^[A-D]\.\s/.test(opt)) {
            displayText = opt.replace(/^[A-D]\.\s/, '');
        }

        div.innerHTML = `
            <input type="radio" name="questionOption" value="${opt}">
            <span class="option-label">${letters[i]}. ${displayText}</span>
        `;
        grid.appendChild(div);
    });

    answerArea.appendChild(grid);
}

function selectOption(el, index) {
    if (answered) return;

    const radio = el.querySelector('input[type="radio"]');
    if (radio) {
        radio.checked = true;
        document.querySelectorAll('.option-item').forEach(o => o.classList.remove('selected'));
        el.classList.add('selected');
    }
}

// ============================================================
// 答题逻辑
// ============================================================
function checkAnswer() {
    if (answered) return;

    const selected = document.querySelector('input[name="questionOption"]:checked');
    if (!selected) {
        showToast('Veuillez sélectionner une réponse', 'warning');
        return;
    }

    const q = currentQuestions[currentQuestionIndex];
    const userAnswer = selected.value;
    const correctAnswer = q.correct_answer;

    const getLetter = (str) => {
        const match = str.match(/^([A-D])/);
        return match ? match[1] : str;
    };

    const userLetter = getLetter(userAnswer);
    const correctLetter = getLetter(correctAnswer);
    const isCorrect = userLetter === correctLetter;

    answered = true;
    document.getElementById('btnCheck').disabled = true;
    document.getElementById('btnNext').disabled = false;

    document.querySelectorAll('.option-item').forEach(el => {
        const radio = el.querySelector('input[type="radio"]');
        if (radio) {
            const radioLetter = getLetter(radio.value);
            if (radioLetter === correctLetter) {
                el.classList.add('correct');
            } else if (radio.checked && radioLetter !== correctLetter) {
                el.classList.add('wrong');
            }
        }
    });

    const feedbackArea = document.getElementById('feedbackArea');
    feedbackArea.style.display = 'block';
    feedbackArea.classList.add('show');

    const resultEl = document.getElementById('feedbackResult');
    if (isCorrect) {
        resultEl.className = 'feedback-result correct';
        resultEl.innerHTML = '✅ Bonne réponse !';
    } else {
        resultEl.className = 'feedback-result wrong';
        const correctOption = q.options ? q.options.find(opt => getLetter(opt) === correctLetter) : correctAnswer;
        const displayCorrect = correctOption || correctAnswer;
        resultEl.innerHTML = `❌ Mauvaise réponse. La bonne réponse est : <strong>${displayCorrect}</strong>`;
    }

    document.getElementById('feedbackExplanation').textContent = q.explanation || '';
}

function nextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        renderQuestion(currentQuestionIndex);
    } else {
        showToast('🎉 Audio terminé ! Passage au suivant...', 'success');
        setTimeout(() => {
            if (currentAudioIndex < sessionAudio.length - 1) {
                currentAudioIndex++;
                loadAudio(currentAudioIndex);
            } else {
                document.getElementById('questionText').textContent = '🎉 Tous les audios de cette série sont terminés !';
                document.getElementById('answerArea').innerHTML = '';
                document.getElementById('feedbackArea').style.display = 'none';
                document.getElementById('btnNext').disabled = true;
                document.getElementById('btnCheck').disabled = true;
                showToast('🎉 Série terminée ! Cliquez sur "Nouvelle série" pour continuer.', 'success');
            }
        }, 600);
    }
}

async function loadQuestions() {
    await loadAudioForLevel();
    showToast('🔄 Nouvelle série chargée !', 'info');
}

// ============================================================
// 进度
// ============================================================
async function updateProgress() {
    try {
        const progress = await window.supabaseAuth.getListeningProgress(
            currentUser.userId || currentUser.id
        );
        const completed = progress.filter(p => p.status === 'completed');
        const total = allAudio.length || 1;
        const percent = Math.min(Math.round((completed.length / total) * 100), 100);
        document.getElementById('progressBadge').textContent = `📊 ${percent}%`;
    } catch (error) {
        console.error('加载进度失败:', error);
    }
}

// ============================================================
// 初始化
// ============================================================
document.addEventListener('DOMContentLoaded', async function() {
    const user = verifyUser();
    if (!user) return;

    currentUser = user;
    document.getElementById('userName').textContent = user.name || 'Élève';

    await loadAudioForLevel();
    await updateProgress();
});

// ============================================================
// 暴露函数
// ============================================================
window.switchLevel = switchLevel;
window.loadQuestions = loadQuestions;
window.togglePlay = togglePlay;
window.seekAudio = seekAudio;
window.toggleMute = toggleMute;
window.toggleScript = toggleScript;
window.selectOption = selectOption;
window.checkAnswer = checkAnswer;
window.nextQuestion = nextQuestion;
window.showToast = showToast;
