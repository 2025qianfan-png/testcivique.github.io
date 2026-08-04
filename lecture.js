// ============================================================
// 全局变量
// ============================================================
let currentUser = null;
let currentLevel = 'A1';
let allArticles = [];
let sessionArticles = [];
let currentArticleIndex = 0;
let currentArticle = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let answered = false;
const MAX_ARTICLES_PER_SESSION = 10;

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
async function loadArticles(level) {
    try {
        if (!window.supabaseAuth.getReadingTexts) {
            console.error('❌ getReadingTexts 未定义');
            return [];
        }
        const texts = await window.supabaseAuth.getReadingTexts(level);
        return texts || [];
    } catch (error) {
        console.error('加载文章失败:', error);
        return [];
    }
}

async function loadQuestionsForArticle(textId) {
    try {
        if (!window.supabaseAuth.getReadingQuestions) {
            console.error('❌ getReadingQuestions 未定义');
            return [];
        }
        const questions = await window.supabaseAuth.getReadingQuestions(textId);
        return questions || [];
    } catch (error) {
        console.error('加载题目失败:', error);
        return [];
    }
}

// ============================================================
// 切换级别
// ============================================================
async function switchLevel(level) {
    currentLevel = level;
    currentArticleIndex = 0;
    
    document.querySelectorAll('.level-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.level === level);
    });

    await loadArticlesForLevel();
    await updateProgress();
}

// ============================================================
// 加载文章
// ============================================================
async function loadArticlesForLevel() {
    const texts = await loadArticles(currentLevel);
    allArticles = texts;
    
    if (allArticles.length === 0) {
        document.getElementById('articleBody').innerHTML = `
            <div style="text-align:center;padding:40px 0;color:var(--text-muted);">
                <i class="fas fa-info-circle" style="font-size:2rem;"></i>
                <p style="margin-top:10px;">Aucun article disponible pour ce niveau.</p>
            </div>
        `;
        document.getElementById('articleTitle').textContent = 'Aucun article';
        document.getElementById('articleCounter').textContent = '0 / 0';
        document.getElementById('articleQuestionCount').textContent = '';
        document.getElementById('exerciseCounter').textContent = '0 / 0';
        document.getElementById('progressFill').style.width = '0%';
        document.getElementById('exercisePreview').innerHTML = '<i class="fas fa-info-circle"></i> Aucun article disponible';
        return;
    }
    
    // 随机抽取最多10篇
    const shuffled = [...allArticles];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    sessionArticles = shuffled.slice(0, Math.min(MAX_ARTICLES_PER_SESSION, shuffled.length));
    currentArticleIndex = 0;
    
    await loadArticle(0);
}

async function loadArticle(index) {
    const article = sessionArticles[index];
    if (!article) return;
    
    currentArticle = article;
    
    // 显示文章
    document.getElementById('articleLevel').textContent = article.level;
    document.getElementById('articleSource').textContent = article.source || 'TCF 250';
    document.getElementById('articleTitle').textContent = article.title || 'Sans titre';
    document.getElementById('articleBody').innerHTML = article.content ? article.content.replace(/\n/g, '<br>') : 'Contenu non disponible.';
    document.getElementById('articleCounter').textContent = `${index + 1} / ${sessionArticles.length}`;
    
    // 加载该文章的题目
    const questions = await loadQuestionsForArticle(article.id);
    currentQuestions = questions;
    currentQuestionIndex = 0;
    answered = false;
    
    // 更新问题计数
    document.getElementById('articleQuestionCount').textContent = `${questions.length} question${questions.length > 1 ? 's' : ''}`;
    document.getElementById('exerciseArticleTitle').textContent = `📄 ${article.title || ''}`;
    
    // ✅ 预览区只显示提示
    document.getElementById('exercisePreview').innerHTML = `
        <i class="fas fa-arrow-left" style="color:var(--orange);"></i>
        Lisez l'article à gauche, puis répondez aux questions.
    `;
    
    if (questions.length === 0) {
        document.getElementById('questionText').textContent = 'Aucune question pour cet article.';
        document.getElementById('answerArea').innerHTML = '';
        document.getElementById('exerciseCounter').textContent = '0 / 0';
        document.getElementById('progressFill').style.width = '0%';
        return;
    }
    
    renderQuestion(0);
}

function renderQuestion(index) {
    const q = currentQuestions[index];
    if (!q) return;
    
    document.getElementById('questionNumber').textContent = `Q${index + 1}`;
    document.getElementById('questionText').textContent = q.question;
    document.getElementById('exerciseCounter').textContent = `Question ${index + 1} / ${currentQuestions.length}`;
    document.getElementById('progressFill').style.width = `${((index + 1) / currentQuestions.length) * 100}%`;
    
    // 重置反馈
    const feedbackArea = document.getElementById('feedbackArea');
    feedbackArea.classList.remove('show');
    feedbackArea.style.display = 'none';
    answered = false;
    
    document.getElementById('btnCheck').disabled = false;
    document.getElementById('btnNext').disabled = true;
    
    // 渲染选项
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
        
        // ✅ 去掉选项中已有的字母前缀（A. / B. / C. / D.）
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
    
    // ✅ 提取选项字母（A/B/C/D）
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
    
    // 标记选项颜色
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
    
    // 显示反馈
    const feedbackArea = document.getElementById('feedbackArea');
    feedbackArea.style.display = 'block';
    feedbackArea.classList.add('show');
    
    const resultEl = document.getElementById('feedbackResult');
    if (isCorrect) {
        resultEl.className = 'feedback-result correct';
        resultEl.innerHTML = '✅ Bonne réponse !';
    } else {
        resultEl.className = 'feedback-result wrong';
        // ✅ 显示正确的选项字母 + 内容
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
        // 当前文章所有问题答完 -> 自动切换到下一篇文章
        showToast('🎉 Article terminé !', 'success');
        setTimeout(() => {
            if (currentArticleIndex < sessionArticles.length - 1) {
                currentArticleIndex++;
                loadArticle(currentArticleIndex);
            } else {
                // 所有文章完成
                document.getElementById('questionText').textContent = '🎉 Tous les articles de cette série sont terminés !';
                document.getElementById('answerArea').innerHTML = '';
                document.getElementById('feedbackArea').style.display = 'none';
                document.getElementById('btnNext').disabled = true;
                document.getElementById('btnCheck').disabled = true;
                showToast('🎉 Série terminée ! Cliquez sur "Nouvelle série" pour continuer.', 'success');
            }
        }, 600);
    }
}

function prevArticle() {
    if (currentArticleIndex > 0) {
        currentArticleIndex--;
        loadArticle(currentArticleIndex);
    } else {
        showToast('C\'est déjà le premier article', 'info');
    }
}

function nextArticle() {
    if (currentArticleIndex < sessionArticles.length - 1) {
        currentArticleIndex++;
        loadArticle(currentArticleIndex);
    } else {
        showToast('Dernier article de cette série', 'info');
    }
}

async function reshuffleArticles() {
    await loadArticlesForLevel();
    showToast('🔄 Nouvelle série chargée !', 'info');
}

// ============================================================
// 进度
// ============================================================
async function updateProgress() {
    try {
        const progress = await window.supabaseAuth.getReadingProgress(
            currentUser.userId || currentUser.id
        );
        const completed = progress.filter(p => p.status === 'completed');
        const total = allArticles.length || 1;
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
    
    await loadArticlesForLevel();
    await updateProgress();
});

// ============================================================
// 暴露函数
// ============================================================
window.switchLevel = switchLevel;
window.prevArticle = prevArticle;
window.nextArticle = nextArticle;
window.reshuffleArticles = reshuffleArticles;
window.selectOption = selectOption;
window.checkAnswer = checkAnswer;
window.nextQuestion = nextQuestion;
window.showToast = showToast;