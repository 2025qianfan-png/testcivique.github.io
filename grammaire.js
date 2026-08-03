// ============================================================
// 全局变量
// ============================================================
let currentUser = null;
let currentLevel = 'A1';
let currentMode = 'apprendre';
let currentTopics = [];
let currentTopicIndex = 0;
let currentExercises = [];       // 当前显示的习题（10道）
let allExercises = [];           // 该级别所有习题
let currentExerciseIndex = 0;
let exerciseAnswered = false;
let quizQuestions = [];
let quizCurrentIndex = 0;
let quizAnswers = [];
let quizTimer = null;
let quizTimeLeft = 0;
let isQuizSubmitted = false;
let allTopics = [];
let allQuizzes = [];

const EXERCISES_PER_PAGE = 10;

// ============================================================
// DOM 引用
// ============================================================
function $(id) {
    return document.getElementById(id);
}

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
// 加载数据
// ============================================================
async function loadTopics(level) {
    try {
        if (!window.supabaseAuth.getGrammarTopics) {
            console.error('❌ getGrammarTopics 未定义');
            return [];
        }
        const topics = await window.supabaseAuth.getGrammarTopics(level);
        allTopics = topics || [];
        return allTopics;
    } catch (error) {
        console.error('加载知识点失败:', error);
        return [];
    }
}

async function loadAllExercises(level) {
    try {
        if (!window.supabaseAuth.getGrammarExercises) {
            console.error('❌ getGrammarExercises 未定义');
            return [];
        }
        const exercises = await window.supabaseAuth.getGrammarExercises(level);
        allExercises = exercises || [];
        console.log(`📚 级别 ${level} 共有 ${allExercises.length} 道题`);
        return allExercises;
    } catch (error) {
        console.error('加载习题失败:', error);
        return [];
    }
}

async function loadQuizzes(level) {
    try {
        if (!window.supabaseAuth.getGrammarQuizzes) {
            console.error('❌ getGrammarQuizzes 未定义');
            return [];
        }
        const quizzes = await window.supabaseAuth.getGrammarQuizzes(level);
        allQuizzes = quizzes || [];
        return allQuizzes;
    } catch (error) {
        console.error('加载测验失败:', error);
        return [];
    }
}

// ============================================================
// 工具：随机抽取 N 道题
// ============================================================
function pickRandomExercises(exercises, count) {
    const shuffled = [...exercises];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, count);
}

// ============================================================
// 切换级别
// ============================================================
async function switchLevel(level) {
    currentLevel = level;
    
    document.querySelectorAll('.level-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.level === level);
    });

    currentExercises = [];
    currentExerciseIndex = 0;
    exerciseAnswered = false;

    if (currentMode === 'apprendre') {
        await loadTopicsForLearn();
    } else if (currentMode === 'entrainer') {
        await loadExercisesForPractice();
    } else if (currentMode === 'tester') {
        await loadQuizzesForLevel();
    }
    
    showToast(`Niveau ${level} chargé`, 'info');
}

// ============================================================
// 切换模式
// ============================================================
async function switchMode(mode) {
    currentMode = mode;
    document.querySelectorAll('.mode-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.mode === mode);
    });

    document.querySelectorAll('.mode-panel').forEach(panel => {
        panel.classList.remove('active');
    });

    if (mode === 'apprendre') {
        document.getElementById('modeApprendre').classList.add('active');
        await loadTopicsForLearn();
    } else if (mode === 'entrainer') {
        document.getElementById('modeEntrainer').classList.add('active');
        await loadExercisesForPractice();
    } else if (mode === 'tester') {
        document.getElementById('modeTester').classList.add('active');
        await loadQuizzesForLevel();
    }
}

// ============================================================
// MODE APPRENDRE
// ============================================================
async function loadTopicsForLearn() {
    const topics = await loadTopics(currentLevel);
    currentTopics = topics;
    currentTopicIndex = 0;
    
    const container = document.getElementById('topicCard');
    const counter = document.getElementById('topicCounter');
    
    if (topics.length === 0) {
        container.innerHTML = `
            <div style="text-align:center;padding:40px 0;">
                <i class="fas fa-info-circle" style="font-size:2rem;color:var(--text-muted);"></i>
                <p style="color:var(--text-light);margin-top:10px;">Aucune leçon disponible pour ce niveau.</p>
            </div>
        `;
        counter.textContent = '0 / 0';
        return;
    }
    
    counter.textContent = `1 / ${topics.length}`;
    renderTopic(0);
}

function renderTopic(index) {
    const topic = currentTopics[index];
    if (!topic) return;

    document.getElementById('topicLevelBadge').textContent = topic.level;
    document.getElementById('topicTitle').textContent = topic.title;
    document.getElementById('topicCategory').textContent = `${topic.category} · ${topic.sub_category || ''}`;
    document.getElementById('topicDescription').textContent = topic.description || '';

    document.getElementById('topicRule').textContent = topic.rule || 'Pas de règle spécifique.';
    document.getElementById('topicTips').textContent = topic.tips || '💡 Pas d\'astuce pour le moment.';

    const examples = topic.examples || [];
    const examplesContainer = document.getElementById('topicExamples');
    if (examples.length > 0) {
        examplesContainer.innerHTML = examples.map(ex => `
            <div class="example-item">
                <span class="ex-fr">"${ex.fr}"</span>
                <span class="ex-zh">${ex.zh}</span>
            </div>
        `).join('');
    } else {
        examplesContainer.innerHTML = '<div class="example-item" style="color:var(--text-muted);">Aucun exemple disponible.</div>';
    }

    const mistakes = topic.common_mistakes || [];
    const mistakesSection = document.getElementById('commonMistakesSection');
    const mistakesContainer = document.getElementById('topicMistakes');
    if (mistakes.length > 0) {
        mistakesSection.style.display = 'block';
        mistakesContainer.innerHTML = mistakes.map(m => `
            <div class="mistake-item">
                <span class="wrong">❌ "${m.wrong}"</span>
                <span class="correct">✅ "${m.correct}"</span>
            </div>
        `).join('');
    } else {
        mistakesSection.style.display = 'none';
    }

    document.getElementById('topicCounter').textContent = `${index + 1} / ${currentTopics.length}`;
}

function prevTopic() {
    if (currentTopicIndex > 0) {
        currentTopicIndex--;
        renderTopic(currentTopicIndex);
    } else {
        showToast('C\'est déjà la première leçon', 'info');
    }
}

function nextTopic() {
    if (currentTopicIndex < currentTopics.length - 1) {
        currentTopicIndex++;
        renderTopic(currentTopicIndex);
    } else {
        showToast('🎉 Vous avez terminé toutes les leçons de ce niveau !', 'success');
    }
}

async function markTopicLearned() {
    const topic = currentTopics[currentTopicIndex];
    if (!topic) return;

    try {
        await window.supabaseAuth.saveGrammarProgress({
            user_id: currentUser.userId || currentUser.id,
            topic_id: topic.id,
            status: 'completed'
        });
        showToast('✅ Leçon marquée comme apprise !', 'success');
    } catch (error) {
        showToast('Erreur lors de l\'enregistrement', 'error');
    }
}

// ============================================================
// MODE S'ENTRAÎNER - 核心：随机抽10题
// ============================================================
async function loadExercisesForPractice() {
    console.log('📚 加载习题, 级别:', currentLevel);
    
    // 1. 加载该级别所有习题
    await loadAllExercises(currentLevel);
    
    // 2. 如果总题数少于10，全部显示；否则随机抽10道
    let selectedCount = Math.min(EXERCISES_PER_PAGE, allExercises.length);
    currentExercises = pickRandomExercises(allExercises, selectedCount);
    
    console.log(`📚 从 ${allExercises.length} 道题中抽取 ${currentExercises.length} 道`);
    
    currentExerciseIndex = 0;
    exerciseAnswered = false;

    const counter = document.getElementById('exerciseCounter');
    const levelBadge = document.getElementById('exerciseLevel');
    const progressBar = document.querySelector('#exerciseProgress .progress-bar span');

    if (currentExercises.length === 0) {
        document.getElementById('exerciseCard').innerHTML = `
            <div style="text-align:center;padding:40px 0;">
                <i class="fas fa-info-circle" style="font-size:2rem;color:var(--text-muted);"></i>
                <p style="color:var(--text-light);margin-top:10px;">
                    Aucun exercice disponible pour le niveau ${currentLevel}.
                </p>
            </div>
        `;
        counter.textContent = '0 / 0';
        return;
    }

    counter.textContent = `Exercice 1 / ${currentExercises.length}`;
    levelBadge.textContent = currentLevel;
    if (progressBar) {
        progressBar.style.width = `${(1 / currentExercises.length) * 100}%`;
    }
    
    // 恢复 exerciseCard 结构
    const card = document.getElementById('exerciseCard');
    if (!card.querySelector('.question-number')) {
        card.innerHTML = `
            <div class="question-number" id="questionNumber">Q1</div>
            <p class="question-text" id="questionText">Chargement...</p>
            <div class="answer-area" id="answerArea"></div>
            <div class="feedback-area" id="feedbackArea" style="display:none;">
                <div class="feedback-result" id="feedbackResult"></div>
                <div class="feedback-explanation" id="feedbackExplanation"></div>
            </div>
            <div class="exercise-actions">
                <button class="btn-check" onclick="checkExercise()"><i class="fas fa-check"></i> Vérifier</button>
                <button class="btn-next" onclick="nextExercise()"><i class="fas fa-arrow-right"></i> Suivant</button>
            </div>
        `;
    }
    
    renderExercise(0);
    console.log('✅ 渲染完成, 当前显示:', currentExercises.length, '道题');
}

// 重新抽取（换一批题）
function reshuffleExercises() {
    if (allExercises.length === 0) {
        showToast('Aucun exercice disponible', 'warning');
        return;
    }
    let selectedCount = Math.min(EXERCISES_PER_PAGE, allExercises.length);
    currentExercises = pickRandomExercises(allExercises, selectedCount);
    currentExerciseIndex = 0;
    exerciseAnswered = false;
    renderExercise(0);
    document.getElementById('exerciseCounter').textContent = `Exercice 1 / ${currentExercises.length}`;
    document.getElementById('feedbackArea').style.display = 'none';
    showToast('🔄 Nouvelle série de 10 exercices !', 'info');
}

function renderExercise(index) {
    const ex = currentExercises[index];
    if (!ex) {
        console.warn('❌ 没有习题数据, index:', index);
        return;
    }

    console.log('📝 渲染习题:', ex.id, ex.type);

    document.getElementById('questionNumber').textContent = `Q${index + 1}`;
    document.getElementById('questionText').textContent = ex.question;

    const answerArea = document.getElementById('answerArea');
    const feedbackArea = document.getElementById('feedbackArea');
    
    feedbackArea.style.display = 'none';
    exerciseAnswered = false;
    
    const checkBtn = document.querySelector('.btn-check');
    if (checkBtn) checkBtn.disabled = false;

    answerArea.innerHTML = '';

    if (ex.type === 'fill_blank') {
        const input = document.createElement('input');
        input.type = 'text';
        input.id = 'exerciseInput';
        input.placeholder = 'Écrivez votre réponse...';
        input.style.cssText = 'width:100%;max-width:400px;padding:12px 16px;border:2px solid #dce3ed;border-radius:10px;font-size:1rem;font-family:\'Open Sans\',sans-serif;';
        input.onkeydown = function(e) {
            if (e.key === 'Enter') checkExercise();
        };
        answerArea.appendChild(input);
        setTimeout(() => {
            const el = document.getElementById('exerciseInput');
            if (el) el.focus();
        }, 100);
        
    } else if (ex.type === 'multiple_choice') {
        const options = ex.options || [];
        const letters = ['A', 'B', 'C', 'D'];
        const grid = document.createElement('div');
        grid.className = 'options-grid';
        grid.style.cssText = 'display:flex;flex-direction:column;gap:8px;max-width:500px;';
        
        options.forEach((opt, i) => {
            const div = document.createElement('div');
            div.className = 'option-item';
            div.style.cssText = 'display:flex;align-items:center;gap:12px;padding:10px 16px;border:2px solid #e8edf5;border-radius:10px;cursor:pointer;transition:0.3s;';
            div.onclick = function() { selectOption(this, i); };
            div.innerHTML = `
                <input type="radio" name="exerciseOption" value="${opt}" style="width:18px;height:18px;accent-color:#e67e22;cursor:pointer;">
                <span>${letters[i]}. ${opt}</span>
            `;
            grid.appendChild(div);
        });
        answerArea.appendChild(grid);
        
    } else {
        answerArea.innerHTML = `<p style="color:var(--text-muted);">Type d'exercice non supporté: ${ex.type}</p>`;
    }

    const progressBar = document.querySelector('#exerciseProgress .progress-bar span');
    if (progressBar) {
        progressBar.style.width = `${((index + 1) / currentExercises.length) * 100}%`;
    }
    
    document.getElementById('exerciseCounter').textContent = `Exercice ${index + 1} / ${currentExercises.length}`;
}

function selectOption(el, index) {
    const radio = el.querySelector('input[type="radio"]');
    if (radio) {
        radio.checked = true;
        document.querySelectorAll('.option-item').forEach(o => o.classList.remove('selected'));
        el.classList.add('selected');
    }
}

function checkExercise() {
    if (exerciseAnswered) return;

    const ex = currentExercises[currentExerciseIndex];
    let userAnswer = '';

    if (ex.type === 'fill_blank') {
        const input = document.getElementById('exerciseInput');
        if (!input) {
            showToast('Veuillez écrire une réponse', 'warning');
            return;
        }
        userAnswer = input.value.trim();
        if (!userAnswer) {
            showToast('Veuillez écrire une réponse', 'warning');
            return;
        }
    } else if (ex.type === 'multiple_choice') {
        const selected = document.querySelector('input[name="exerciseOption"]:checked');
        if (!selected) {
            showToast('Veuillez sélectionner une option', 'warning');
            return;
        }
        userAnswer = selected.value;
    }

    exerciseAnswered = true;
    const checkBtn = document.querySelector('.btn-check');
    if (checkBtn) checkBtn.disabled = true;

    const isCorrect = userAnswer.toLowerCase().trim() === ex.correct_answer.toLowerCase().trim();

    const feedbackArea = document.getElementById('feedbackArea');
    feedbackArea.style.display = 'block';

    const resultEl = document.getElementById('feedbackResult');
    if (isCorrect) {
        resultEl.className = 'feedback-result correct';
        resultEl.innerHTML = '✅ Bonne réponse !';
    } else {
        resultEl.className = 'feedback-result wrong';
        resultEl.innerHTML = `❌ Mauvaise réponse. La bonne réponse est : <strong>${ex.correct_answer}</strong>`;
    }

    document.getElementById('feedbackExplanation').textContent = ex.explanation || '';

    if (ex.type === 'multiple_choice') {
        document.querySelectorAll('.option-item').forEach(el => {
            const radio = el.querySelector('input[type="radio"]');
            if (radio) {
                if (radio.value.toLowerCase() === ex.correct_answer.toLowerCase()) {
                    el.classList.add('correct');
                } else if (radio.checked && radio.value.toLowerCase() !== ex.correct_answer.toLowerCase()) {
                    el.classList.add('wrong');
                }
            }
        });
    }

    saveExerciseProgress(ex.id, isCorrect);
}

function nextExercise() {
    if (currentExerciseIndex < currentExercises.length - 1) {
        currentExerciseIndex++;
        renderExercise(currentExerciseIndex);
    } else {
        // 全部做完了
        showToast('🎉 Vous avez terminé cette série ! Cliquez sur "Nouvelle série" pour continuer.', 'success');
    }
}

async function saveExerciseProgress(exerciseId, isCorrect) {
    try {
        await window.supabaseAuth.saveGrammarProgress({
            user_id: currentUser.userId || currentUser.id,
            exercise_id: exerciseId,
            status: 'completed',
            score: isCorrect ? 100 : 0
        });
    } catch (error) {
        console.error('Erreur:', error);
    }
}

// ============================================================
// MODE TESTER
// ============================================================
async function loadQuizzesForLevel() {
    const quizzes = await loadQuizzes(currentLevel);
    const list = document.getElementById('quizList');

    if (quizzes.length === 0) {
        list.innerHTML = `
            <div style="text-align:center;padding:20px 0;">
                <p style="color:var(--text-muted);">Aucun quiz disponible pour ce niveau.</p>
            </div>
        `;
        return;
    }

    list.innerHTML = quizzes.map(q => `
        <div class="quiz-item" onclick="startQuiz('${q.id}')">
            <div class="qi-info">
                <h4>${q.title}</h4>
                <p>${q.description || ''}</p>
            </div>
            <div class="qi-meta">
                <span>${q.question_count || 10} questions</span>
                <span>⏱️ ${q.time_limit || 15} min</span>
                <button class="qi-start">Commencer</button>
            </div>
        </div>
    `).join('');

    document.getElementById('quizSelect').style.display = 'block';
    document.getElementById('quizActive').style.display = 'none';
    document.getElementById('quizResults').style.display = 'none';
    document.getElementById('quizDetails').style.display = 'none';
}

async function startQuiz(quizId) {
    try {
        const questions = await window.supabaseAuth.getQuizQuestions(quizId);
        if (!questions || questions.length === 0) {
            showToast('Ce quiz n\'a pas de questions', 'warning');
            return;
        }

        // 随机取10题
        const shuffled = [...questions];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        quizQuestions = shuffled.slice(0, 10);
        quizCurrentIndex = 0;
        quizAnswers = [];
        isQuizSubmitted = false;
        quizQuestions.forEach(() => quizAnswers.push(null));

        document.getElementById('quizSelect').style.display = 'none';
        document.getElementById('quizActive').style.display = 'block';
        document.getElementById('quizResults').style.display = 'none';
        document.getElementById('quizDetails').style.display = 'none';

        const quizzes = await loadQuizzes(currentLevel);
        const quiz = quizzes.find(q => q.id === quizId);
        if (quiz) {
            document.getElementById('quizTitle').textContent = quiz.title;
            const timeLimit = quiz.time_limit || 15;
            quizTimeLeft = timeLimit * 60;
            startQuizTimer();
        }

        renderQuizQuestion(0);

    } catch (error) {
        console.error('Erreur:', error);
        showToast('Erreur lors du chargement du quiz', 'error');
    }
}

function renderQuizQuestion(index) {
    const q = quizQuestions[index];
    if (!q) return;

    document.getElementById('quizQNumber').textContent = `Q${index + 1}`;
    document.getElementById('quizQText').textContent = q.question;
    document.getElementById('quizProgressText').textContent = `${index + 1} / ${quizQuestions.length}`;
    document.getElementById('quizProgressFill').style.width = `${((index + 1) / quizQuestions.length) * 100}%`;

    const answerArea = document.getElementById('quizAnswerArea');
    answerArea.innerHTML = '';

    if (q.type === 'fill_blank') {
        const input = document.createElement('input');
        input.type = 'text';
        input.id = 'quizInput';
        input.placeholder = 'Écrivez votre réponse...';
        input.value = quizAnswers[index] || '';
        input.style.cssText = 'width:100%;max-width:400px;padding:12px 16px;border:2px solid #dce3ed;border-radius:10px;font-size:1rem;font-family:\'Open Sans\',sans-serif;';
        input.onkeydown = function(e) {
            if (e.key === 'Enter') nextQuizQuestion();
        };
        answerArea.appendChild(input);
        setTimeout(() => {
            const el = document.getElementById('quizInput');
            if (el) el.focus();
        }, 100);
    } else if (q.type === 'multiple_choice') {
        const options = q.options || [];
        const letters = ['A', 'B', 'C', 'D'];
        const selected = quizAnswers[index] || '';
        const grid = document.createElement('div');
        grid.className = 'options-grid';
        grid.style.cssText = 'display:flex;flex-direction:column;gap:8px;max-width:500px;';
        
        options.forEach((opt, i) => {
            const div = document.createElement('div');
            div.className = `option-item ${selected === opt ? 'selected' : ''}`;
            div.style.cssText = 'display:flex;align-items:center;gap:12px;padding:10px 16px;border:2px solid #e8edf5;border-radius:10px;cursor:pointer;transition:0.3s;';
            div.onclick = function() { selectQuizOption(this, i); };
            div.innerHTML = `
                <input type="radio" name="quizOption" value="${opt}" ${selected === opt ? 'checked' : ''} style="width:18px;height:18px;accent-color:#e67e22;cursor:pointer;">
                <span>${letters[i]}. ${opt}</span>
            `;
            grid.appendChild(div);
        });
        answerArea.appendChild(grid);
    }

    document.querySelector('.btn-prev').style.display = index === 0 ? 'none' : 'inline-flex';
    document.querySelector('.btn-next').style.display = index === quizQuestions.length - 1 ? 'none' : 'inline-flex';
}

function selectQuizOption(el, index) {
    const radio = el.querySelector('input[type="radio"]');
    if (radio) {
        radio.checked = true;
        document.querySelectorAll('#quizAnswerArea .option-item').forEach(o => o.classList.remove('selected'));
        el.classList.add('selected');
        quizAnswers[quizCurrentIndex] = radio.value;
    }
}

function saveCurrentQuizAnswer() {
    const q = quizQuestions[quizCurrentIndex];
    if (!q) return;
    if (q.type === 'fill_blank') {
        const input = document.getElementById('quizInput');
        if (input) {
            quizAnswers[quizCurrentIndex] = input.value.trim();
        }
    }
}

function prevQuizQuestion() {
    saveCurrentQuizAnswer();
    if (quizCurrentIndex > 0) {
        quizCurrentIndex--;
        renderQuizQuestion(quizCurrentIndex);
    }
}

function nextQuizQuestion() {
    saveCurrentQuizAnswer();
    if (quizCurrentIndex < quizQuestions.length - 1) {
        quizCurrentIndex++;
        renderQuizQuestion(quizCurrentIndex);
    }
}

function startQuizTimer() {
    if (quizTimer) clearInterval(quizTimer);
    quizTimer = setInterval(() => {
        quizTimeLeft--;
        const mins = Math.floor(quizTimeLeft / 60);
        const secs = quizTimeLeft % 60;
        document.getElementById('quizTimer').textContent = `⏱️ ${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        if (quizTimeLeft <= 0) {
            clearInterval(quizTimer);
            showToast('⏰ Temps écoulé !', 'warning');
            submitQuiz();
        }
    }, 1000);
}

function submitQuiz() {
    if (isQuizSubmitted) return;
    isQuizSubmitted = true;
    saveCurrentQuizAnswer();
    if (quizTimer) clearInterval(quizTimer);

    let correctCount = 0;
    const details = [];
    quizQuestions.forEach((q, i) => {
        const userAnswer = quizAnswers[i] || '';
        const isCorrect = userAnswer.toLowerCase().trim() === q.correct_answer.toLowerCase().trim();
        if (isCorrect) correctCount++;
        details.push({
            number: i + 1,
            question: q.question,
            userAnswer: userAnswer || '(non répondu)',
            correctAnswer: q.correct_answer,
            isCorrect: isCorrect
        });
    });

    const total = quizQuestions.length;
    const score = correctCount;
    const percentage = Math.round((correctCount / total) * 100);

    let estimatedLevel = currentLevel;
    const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
    const idx = levels.indexOf(currentLevel);
    if (percentage >= 80 && idx < levels.length - 1) {
        estimatedLevel = levels[idx + 1];
    } else if (percentage < 50 && idx > 0) {
        estimatedLevel = levels[idx - 1];
    }

    document.getElementById('quizActive').style.display = 'none';
    document.getElementById('quizResults').style.display = 'block';

    const icon = percentage >= 80 ? '🎉' : percentage >= 60 ? '😊' : '💪';
    const title = percentage >= 80 ? 'Félicitations !' : percentage >= 60 ? 'Bon travail !' : 'Continuez à vous entraîner !';

    document.getElementById('resultIcon').textContent = icon;
    document.getElementById('resultTitle').textContent = title;
    document.getElementById('resultScore').textContent = `${score} / ${total}`;
    document.getElementById('resultPercentage').textContent = `${percentage}%`;
    document.getElementById('resultLevel').textContent = `Niveau estimé : ${estimatedLevel}`;
    document.getElementById('resultCorrect').textContent = correctCount;
    document.getElementById('resultWrong').textContent = total - correctCount;

    window._quizDetails = details;

    saveQuizProgress(score, total, estimatedLevel);
}

function showQuizDetails() {
    const details = window._quizDetails || [];
    document.getElementById('quizDetailsList').innerHTML = details.map(d => `
        <div class="detail-item">
            <span class="d-number">Q${d.number}</span>
            <span class="d-question">${d.question}</span>
            <span class="d-answer ${d.isCorrect ? 'correct' : 'wrong'}">
                ${d.isCorrect ? '✅' : '❌'} ${d.userAnswer}
                ${!d.isCorrect ? ` → ${d.correctAnswer}` : ''}
            </span>
        </div>
    `).join('');

    document.getElementById('quizResults').style.display = 'none';
    document.getElementById('quizDetails').style.display = 'block';
}

function closeQuizDetails() {
    document.getElementById('quizDetails').style.display = 'none';
    document.getElementById('quizResults').style.display = 'block';
}

function resetQuiz() {
    document.getElementById('quizResults').style.display = 'none';
    document.getElementById('quizActive').style.display = 'block';
    quizCurrentIndex = 0;
    quizAnswers = [];
    isQuizSubmitted = false;
    quizQuestions.forEach(() => quizAnswers.push(null));
    renderQuizQuestion(0);
    if (quizTimer) clearInterval(quizTimer);
    const timeLimit = 15;
    quizTimeLeft = timeLimit * 60;
    startQuizTimer();
}

function backToQuizList() {
    document.getElementById('quizResults').style.display = 'none';
    document.getElementById('quizDetails').style.display = 'none';
    document.getElementById('quizActive').style.display = 'none';
    document.getElementById('quizSelect').style.display = 'block';
    if (quizTimer) clearInterval(quizTimer);
    loadQuizzesForLevel();
}

async function saveQuizProgress(score, total, level) {
    try {
        await window.supabaseAuth.saveGrammarProgress({
            user_id: currentUser.userId || currentUser.id,
            quiz_id: quizQuestions[0]?.quiz_id || null,
            status: 'completed',
            score: (score / total) * 100
        });
    } catch (error) {
        console.error('Erreur:', error);
    }
}

// ============================================================
// 暴露函数给 HTML
// ============================================================
window.switchLevel = switchLevel;
window.switchMode = switchMode;
window.prevTopic = prevTopic;
window.nextTopic = nextTopic;
window.markTopicLearned = markTopicLearned;
window.checkExercise = checkExercise;
window.nextExercise = nextExercise;
window.selectOption = selectOption;
window.reshuffleExercises = reshuffleExercises;
window.startQuiz = startQuiz;
window.prevQuizQuestion = prevQuizQuestion;
window.nextQuizQuestion = nextQuizQuestion;
window.selectQuizOption = selectQuizOption;
window.submitQuiz = submitQuiz;
window.showQuizDetails = showQuizDetails;
window.closeQuizDetails = closeQuizDetails;
window.resetQuiz = resetQuiz;
window.backToQuizList = backToQuizList;
window.showToast = showToast;

// ============================================================
// 初始化
// ============================================================
document.addEventListener('DOMContentLoaded', async function() {
    const user = verifyUser();
    if (!user) return;

    currentUser = user;
    document.getElementById('userName').textContent = user.name || 'Élève';

    await loadTopicsForLearn();
});