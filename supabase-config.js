// ============================================================
// SUPABASE 配置
// ============================================================
const SUPABASE_URL = 'https://pokwxlbntoxoxogptned.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_pu4aBS3wXF2e3ckgENTt4g_9_HvSG_v';

console.log('🚀 正在加载Supabase配置...');

// ============================================================
// Supabase 客户端
// ============================================================
let supabaseClient = null;

const getSupabaseClient = () => {
    if (!supabaseClient) {
        supabaseClient = window.supabase.createClient(
            SUPABASE_URL,
            SUPABASE_PUBLISHABLE_KEY,
            {
                auth: {
                    persistSession: false,
                    autoRefreshToken: false,
                    detectSessionInUrl: false
                },
                global: {
                    headers: {
                        'apikey': SUPABASE_PUBLISHABLE_KEY,
                        'Authorization': `Bearer ${SUPABASE_PUBLISHABLE_KEY}`
                    }
                }
            }
        );
        console.log('✅ Supabase客户端创建成功');
    }
    return supabaseClient;
};

// ============================================================
// 工具：类型映射
// ============================================================
function getTypeLabel(type) {
    const map = {
        'n': '🇫🇷 DELF',
        'r': '📘 DALF',
        'm': '📗 TCF',
        't': '📙 TCF IRN'
    };
    return map[type] || type || '-';
}

function getTypeClass(type) {
    const map = {
        'n': 'type-n',
        'r': 'type-r',
        'm': 'type-m',
        't': 'type-t'
    };
    return map[type] || '';
}

// ============================================================
// 公民考试模块 - 学生验证
// ============================================================

async function validateStudent(name, password) {
    try {
        console.log(`🔍 验证学生: ${name}`);
        const supabase = getSupabaseClient();

        const { data, error } = await supabase
            .from('students')
            .select('*')
            .eq('name', name)
            .single();

        if (error) {
            console.error('查询学生失败:', error.message);
            return null;
        }

        if (!data) {
            console.log('学生不存在');
            return null;
        }

        if (data.password !== password) {
            console.log('密码不匹配');
            return null;
        }

        console.log('✅ 学生验证成功:', data.name);
        return data;

    } catch (error) {
        console.error('验证学生异常:', error);
        return null;
    }
}

function checkAccess(student) {
    if (!student.timer) {
        return { valid: true, daysLeft: -1 };
    }

    const expiryDate = new Date(student.timer);
    const currentDate = new Date();

    if (expiryDate < currentDate) {
        return {
            valid: false,
            daysLeft: 0,
            message: `Votre période d'accès a expiré le ${expiryDate.toLocaleDateString('fr-FR')}`
        };
    } else {
        const timeDiff = expiryDate - currentDate;
        const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        return {
            valid: true,
            daysLeft: daysLeft,
            expiryDate: expiryDate
        };
    }
}

// ============================================================
// 公民考试模块 - 错题集
// ============================================================

async function recordMistakeToDB(studentInfo, question, userAnswer, testType) {
    console.log('📝 记录错题:', { student: studentInfo.name, testType, userAnswer });

    if (userAnswer === null || userAnswer === undefined || userAnswer < 0) {
        console.warn('userAnswer无效，设置为0');
        userAnswer = 0;
    }

    if (!question || !question.question || !question.options || !Array.isArray(question.options)) {
        console.error('问题数据不完整:', question);
        return null;
    }

    const mistakeData = {
        student_name: studentInfo.name,
        question_id: question.question_id || question.id || `local_${Date.now()}`,
        question: question.question,
        category: question.category || question.theme || question.主题 || 'Autre',
        difficulty: question.难度 || question.difficulty || '中等',
        options: question.options,
        correct_answer: question.answer,
        user_answer: userAnswer,
        test_type: testType,
        explanation: question.explanation || question.解释 || '',
        times_wrong: 1,
        mastered: false,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    };

    try {
        const supabase = getSupabaseClient();
        const { data, error } = await supabase
            .from('mistakes')
            .insert([mistakeData])
            .select()
            .single();

        if (error) {
            console.warn('Supabase SDK插入失败:', error.message);
            return await insertMistakeViaREST(mistakeData);
        }

        console.log('✅ 错题记录成功 (SDK):', data.id);
        return data.id;

    } catch (error) {
        console.error('记录错题失败:', error);
        return saveMistakeToLocalStorage(studentInfo.name, mistakeData);
    }
}

async function insertMistakeViaREST(mistakeData) {
    try {
        const response = await fetch(`${SUPABASE_URL}/rest/v1/mistakes`, {
            method: 'POST',
            headers: {
                'apikey': SUPABASE_PUBLISHABLE_KEY,
                'Authorization': `Bearer ${SUPABASE_PUBLISHABLE_KEY}`,
                'Content-Type': 'application/json',
                'Prefer': 'return=representation'
            },
            body: JSON.stringify(mistakeData)
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`API错误: ${response.status} - ${errorText}`);
        }

        const data = await response.json();
        console.log('✅ 错题记录成功 (REST):', data[0]?.id);
        return data[0]?.id;

    } catch (error) {
        console.error('REST API插入失败:', error);
        throw error;
    }
}

function saveMistakeToLocalStorage(studentName, mistakeData) {
    try {
        const localKey = `mistakes_${studentName}`;
        const existing = JSON.parse(localStorage.getItem(localKey) || '[]');

        const localMistake = {
            ...mistakeData,
            id: `local_${studentName}_${Date.now()}`,
            local_only: true
        };

        existing.push(localMistake);
        localStorage.setItem(localKey, JSON.stringify(existing));
        console.log('✅ 错题保存到本地存储:', localMistake.id);
        return localMistake.id;
    } catch (localError) {
        console.error('本地存储失败:', localError);
        return null;
    }
}

async function getStudentMistakes(studentName) {
    try {
        console.log('📚 获取学生错题:', studentName);

        const results = { supabase: [], local: [] };

        try {
            const supabase = getSupabaseClient();
            const { data, error } = await supabase
                .from('mistakes')
                .select('*')
                .eq('student_name', studentName)
                .order('created_at', { ascending: false });

            if (!error && data) {
                results.supabase = data;
                console.log('从Supabase获取错题成功:', data.length);
            }
        } catch (supabaseError) {
            console.warn('Supabase获取失败:', supabaseError.message);
        }

        const localKey = `mistakes_${studentName}`;
        try {
            const localData = JSON.parse(localStorage.getItem(localKey) || '[]');
            results.local = localData;
            console.log('从本地存储获取错题成功:', localData.length);
        } catch (localError) {
            console.warn('本地存储获取失败:', localError);
        }

        const allMistakes = [...results.local, ...results.supabase];
        const uniqueMistakes = [];
        const seenIds = new Set();

        for (const mistake of allMistakes) {
            const id = mistake.question_id || mistake.question;
            if (!seenIds.has(id)) {
                seenIds.add(id);
                uniqueMistakes.push(mistake);
            }
        }

        console.log('总错题数（去重后）:', uniqueMistakes.length);
        return uniqueMistakes;

    } catch (error) {
        console.error('获取错题失败:', error);
        const localKey = `mistakes_${studentName}`;
        try {
            return JSON.parse(localStorage.getItem(localKey) || '[]');
        } catch {
            return [];
        }
    }
}

async function getMistakesStats(studentName) {
    try {
        const mistakes = await getStudentMistakes(studentName);
        const total = mistakes.length;
        const themes = [...new Set(mistakes.map(m => m.category || m.theme || 'Autre'))].length;
        const mastered = mistakes.filter(m => m.mastered).length;
        const improvement = total > 0 ? Math.round((mastered / total) * 100) : 0;
        return { total, themes, improvement };
    } catch (error) {
        console.error('获取错题统计失败:', error);
        return { total: 0, themes: 0, improvement: 0 };
    }
}

async function deleteMistake(mistakeId) {
    try {
        console.log('🗑️ 删除错题:', mistakeId);

        const isLocal = mistakeId.toString().includes('local_');

        if (isLocal) {
            const match = mistakeId.match(/local_(.+?)_/);
            const studentName = match ? match[1] : 'unknown';
            const localKey = `mistakes_${studentName}`;
            const localData = JSON.parse(localStorage.getItem(localKey) || '[]');
            const newData = localData.filter(m => m.id !== mistakeId);
            localStorage.setItem(localKey, JSON.stringify(newData));
            return true;
        }

        const supabase = getSupabaseClient();
        const { error } = await supabase
            .from('mistakes')
            .delete()
            .eq('id', mistakeId);

        if (error) {
            console.error('删除错题失败:', error);
            return false;
        }

        return true;

    } catch (error) {
        console.error('删除错题异常:', error);
        return false;
    }
}

async function clearAllMistakes(studentName) {
    try {
        console.log('🗑️ 清空所有错题:', studentName);
        localStorage.removeItem(`mistakes_${studentName}`);

        try {
            const supabase = getSupabaseClient();
            await supabase.from('mistakes').delete().eq('student_name', studentName);
        } catch (supabaseError) {
            console.warn('Supabase清空失败:', supabaseError.message);
        }

        return true;
    } catch (error) {
        console.error('清空错题异常:', error);
        return false;
    }
}

async function markMistakeAsMastered(mistakeId, mastered = true) {
    try {
        console.log('🏷️ 标记错题状态:', { mistakeId, mastered });

        const isLocal = mistakeId.toString().includes('local_');

        if (isLocal) {
            const match = mistakeId.match(/local_(.+?)_/);
            const studentName = match ? match[1] : 'unknown';
            const localKey = `mistakes_${studentName}`;
            const localData = JSON.parse(localStorage.getItem(localKey) || '[]');
            const index = localData.findIndex(m => m.id === mistakeId);

            if (index >= 0) {
                localData[index].mastered = mastered;
                localData[index].updated_at = new Date().toISOString();
                localStorage.setItem(localKey, JSON.stringify(localData));
                return true;
            }
            return false;
        }

        const supabase = getSupabaseClient();
        const { error } = await supabase
            .from('mistakes')
            .update({ mastered, updated_at: new Date().toISOString() })
            .eq('id', mistakeId);

        if (error) {
            console.error('更新错题状态失败:', error);
            return false;
        }

        return true;

    } catch (error) {
        console.error('标记错题状态异常:', error);
        return false;
    }
}

// ============================================================
// 法语模块 - 完全独立
// ============================================================

// ========== 法语用户管理 ==========

async function validateFrenchUser(name, password) {
    try {
        console.log(`🔍 验证法语用户: ${name}`);
        const supabase = getSupabaseClient();

        const { data, error } = await supabase
            .from('french_users')
            .select('*')
            .eq('name', name)
            .single();

        if (error) {
            console.error('查询法语用户失败:', error.message);
            return null;
        }

        if (!data) {
            console.log('法语用户不存在');
            return null;
        }

        if (data.password !== password) {
            console.log('密码不匹配');
            return null;
        }

        console.log('✅ 法语用户验证成功:', data.name);
        return data;

    } catch (error) {
        console.error('验证法语用户异常:', error);
        return null;
    }
}

function checkFrenchAccess(user) {
    if (!user.timer) {
        return { valid: true, daysLeft: -1 };
    }

    const expiryDate = new Date(user.timer);
    const currentDate = new Date();

    if (expiryDate < currentDate) {
        return {
            valid: false,
            daysLeft: 0,
            message: `Votre période d'accès a expiré le ${expiryDate.toLocaleDateString('fr-FR')}`
        };
    } else {
        const timeDiff = expiryDate - currentDate;
        const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        return { valid: true, daysLeft, expiryDate };
    }
}

async function getFrenchUsers() {
    try {
        const supabase = getSupabaseClient();
        const { data, error } = await supabase
            .from('french_users')
            .select('*')
            .order('name', { ascending: true });
        if (error) throw error;
        return data || [];
    } catch (error) {
        console.error('获取法语用户失败:', error);
        return [];
    }
}

async function getFrenchStudents() {
    try {
        const supabase = getSupabaseClient();
        const { data, error } = await supabase
            .from('french_users')
            .select('*')
            .eq('role', 'stu')
            .order('name', { ascending: true });
        if (error) throw error;
        return data || [];
    } catch (error) {
        console.error('获取法语学生失败:', error);
        return [];
    }
}

async function getFrenchTeachers() {
    try {
        const supabase = getSupabaseClient();
        const { data, error } = await supabase
            .from('french_users')
            .select('*')
            .eq('role', 'teacher')
            .order('name', { ascending: true });
        if (error) throw error;
        return data || [];
    } catch (error) {
        console.error('获取法语老师失败:', error);
        return [];
    }
}

async function createFrenchUser(userData) {
    try {
        const supabase = getSupabaseClient();
        const { data, error } = await supabase
            .from('french_users')
            .insert([userData])
            .select()
            .single();
        if (error) throw error;
        return data;
    } catch (error) {
        console.error('创建法语用户失败:', error);
        return null;
    }
}

async function updateFrenchUser(id, userData) {
    try {
        const supabase = getSupabaseClient();
        const { data, error } = await supabase
            .from('french_users')
            .update(userData)
            .eq('id', id)
            .select()
            .single();
        if (error) throw error;
        return data;
    } catch (error) {
        console.error('更新法语用户失败:', error);
        return null;
    }
}

async function deleteFrenchUser(id) {
    try {
        const supabase = getSupabaseClient();
        const { error } = await supabase
            .from('french_users')
            .delete()
            .eq('id', id);
        if (error) throw error;
        return true;
    } catch (error) {
        console.error('删除法语用户失败:', error);
        return false;
    }
}

// ============================================================
// 法语模块 - 考试管理
// ============================================================

async function getFrenchExams() {
    try {
        const supabase = getSupabaseClient();
        const { data, error } = await supabase
            .from('french_exams')
            .select('*')
            .order('sort_order', { ascending: true });
        if (error) throw error;
        return data || [];
    } catch (error) {
        console.error('获取法语考试失败:', error);
        return [];
    }
}

async function getFrenchExamById(id) {
    try {
        const supabase = getSupabaseClient();
        const { data, error } = await supabase
            .from('french_exams')
            .select('*')
            .eq('id', id)
            .single();
        if (error) throw error;
        return data;
    } catch (error) {
        console.error('获取法语考试失败:', error);
        return null;
    }
}

async function createFrenchExam(examData) {
    try {
        const supabase = getSupabaseClient();
        const { data, error } = await supabase
            .from('french_exams')
            .insert([examData])
            .select()
            .single();
        if (error) throw error;
        return data;
    } catch (error) {
        console.error('创建法语考试失败:', error);
        return null;
    }
}

async function updateFrenchExam(id, examData) {
    try {
        const supabase = getSupabaseClient();
        const { data, error } = await supabase
            .from('french_exams')
            .update(examData)
            .eq('id', id)
            .select()
            .single();
        if (error) throw error;
        return data;
    } catch (error) {
        console.error('更新法语考试失败:', error);
        return null;
    }
}

async function deleteFrenchExam(id) {
    try {
        const supabase = getSupabaseClient();
        const { error } = await supabase
            .from('french_exams')
            .delete()
            .eq('id', id);
        if (error) throw error;
        return true;
    } catch (error) {
        console.error('删除法语考试失败:', error);
        return false;
    }
}

// ============================================================
// 法语模块 - 课程管理（含课时扣减/退还）
// ============================================================

async function getFrenchCourses(userId, userRole) {
    try {
        const supabase = getSupabaseClient();
        let query = supabase
            .from('french_courses')
            .select(`
                *,
                teacher:teacher_id(id, name),
                student:student_id(id, name)
            `)
            .order('start_time', { ascending: true });

        if (userRole === 'teacher') {
            query = query.eq('teacher_id', userId);
        } else if (userRole === 'stu') {
            query = query.eq('student_id', userId);
        }

        const { data, error } = await query;
        if (error) throw error;
        return data || [];
    } catch (error) {
        console.error('获取法语课程失败:', error);
        return [];
    }
}

async function getFrenchCoursesStats(userId, userRole) {
    try {
        const courses = await getFrenchCourses(userId, userRole);
        const now = new Date();

        const upcoming = courses.filter(c =>
            c.status !== 'completed' &&
            c.status !== 'cancelled' &&
            new Date(c.start_time) > now
        ).length;

        const inProgress = courses.filter(c => c.status === 'in_progress').length;
        const completed = courses.filter(c => c.status === 'completed').length;
        const cancelled = courses.filter(c => c.status === 'cancelled').length;

        return { total: courses.length, upcoming, inProgress, completed, cancelled };
    } catch (error) {
        console.error('获取法语课程统计失败:', error);
        return { total: 0, upcoming: 0, inProgress: 0, completed: 0, cancelled: 0 };
    }
}

// 创建课程 - 扣减学生课时
async function createFrenchCourse(courseData) {
    try {
        const supabase = getSupabaseClient();
        
        // 1. 先检查学生课时是否足够
        if (courseData.student_id) {
            const { data: student, error: studentError } = await supabase
                .from('french_users')
                .select('credit')
                .eq('id', courseData.student_id)
                .single();
            
            if (studentError) {
                console.error('查询学生失败:', studentError);
                return null;
            }
            
            const currentCredit = student?.credit || 0;
            const duration = courseData.duration || 2;
            
            if (currentCredit < duration) {
                console.error('课时不足:', { currentCredit, needed: duration });
                throw new Error('课时不足，无法创建课程');
            }
            
            // 2. 扣减课时
            const { error: updateError } = await supabase
                .from('french_users')
                .update({ credit: currentCredit - duration })
                .eq('id', courseData.student_id);
            
            if (updateError) {
                console.error('扣减课时失败:', updateError);
                return null;
            }
        }
        
        // 3. 创建课程
        const { data, error } = await supabase
            .from('french_courses')
            .insert([courseData])
            .select()
            .single();
        
        if (error) throw error;
        console.log('✅ 课程创建成功，课时已扣减');
        return data;
        
    } catch (error) {
        console.error('创建法语课程失败:', error);
        return null;
    }
}

// 更新课程
async function updateFrenchCourse(id, courseData) {
    try {
        const supabase = getSupabaseClient();
        const { data, error } = await supabase
            .from('french_courses')
            .update(courseData)
            .eq('id', id)
            .select()
            .single();
        if (error) throw error;
        return data;
    } catch (error) {
        console.error('更新法语课程失败:', error);
        return null;
    }
}

// 删除/取消课程 - 退还课时
async function deleteFrenchCourse(id) {
    try {
        const supabase = getSupabaseClient();
        
        // 1. 获取课程信息
        const { data: course, error: courseError } = await supabase
            .from('french_courses')
            .select('student_id, duration, status')
            .eq('id', id)
            .single();
        
        if (courseError) {
            console.error('查询课程失败:', courseError);
            return false;
        }
        
        // 2. 如果课程是消耗课时的状态，退还课时
        const isConsumingStatus = course.status === 'scheduled' || 
                                   course.status === 'in_progress' || 
                                   course.status === 'completed';
        
        if (isConsumingStatus && course.student_id && course.duration) {
            // 获取学生当前课时
            const { data: student, error: studentError } = await supabase
                .from('french_users')
                .select('credit')
                .eq('id', course.student_id)
                .single();
            
            if (!studentError && student) {
                const newCredit = (student.credit || 0) + course.duration;
                await supabase
                    .from('french_users')
                    .update({ credit: newCredit })
                    .eq('id', course.student_id);
                console.log(`✅ 课时已退还: +${course.duration}h，学生新课时: ${newCredit}h`);
            }
        }
        
        // 3. 软删除 - 标记为 cancelled 而不是真正删除
        const { error: updateError } = await supabase
            .from('french_courses')
            .update({ status: 'cancelled' })
            .eq('id', id);
        
        if (updateError) throw updateError;
        return true;
        
    } catch (error) {
        console.error('删除法语课程失败:', error);
        return false;
    }
}

// 硬删除课程（管理员强制删除，退还课时）
async function forceDeleteFrenchCourse(id) {
    try {
        const supabase = getSupabaseClient();
        
        // 获取课程信息
        const { data: course, error: courseError } = await supabase
            .from('french_courses')
            .select('student_id, duration, status')
            .eq('id', id)
            .single();
        
        if (courseError) {
            console.error('查询课程失败:', courseError);
            return false;
        }
        
        // 退还课时
        const isConsumingStatus = course.status === 'scheduled' || 
                                   course.status === 'in_progress' || 
                                   course.status === 'completed';
        
        if (isConsumingStatus && course.student_id && course.duration) {
            const { data: student } = await supabase
                .from('french_users')
                .select('credit')
                .eq('id', course.student_id)
                .single();
            
            if (student) {
                const newCredit = (student.credit || 0) + course.duration;
                await supabase
                    .from('french_users')
                    .update({ credit: newCredit })
                    .eq('id', course.student_id);
                console.log(`✅ 课时已退还: +${course.duration}h`);
            }
        }
        
        // 物理删除
        const { error } = await supabase
            .from('french_courses')
            .delete()
            .eq('id', id);
        
        if (error) throw error;
        return true;
        
    } catch (error) {
        console.error('强制删除法语课程失败:', error);
        return false;
    }
}

// ============================================================
// 法语模块 - 学习进度
// ============================================================

async function getFrenchProgress(studentId) {
    try {
        const supabase = getSupabaseClient();
        const { data, error } = await supabase
            .from('french_progress')
            .select('*')
            .eq('student_id', studentId)
            .order('created_at', { ascending: false });
        if (error) throw error;
        return data || [];
    } catch (error) {
        console.error('获取学习进度失败:', error);
        return [];
    }
}

async function createFrenchProgress(progressData) {
    try {
        const supabase = getSupabaseClient();
        const { data, error } = await supabase
            .from('french_progress')
            .insert([progressData])
            .select()
            .single();
        if (error) throw error;
        return data;
    } catch (error) {
        console.error('创建学习进度失败:', error);
        return null;
    }
}

async function updateFrenchProgress(id, progressData) {
    try {
        const supabase = getSupabaseClient();
        const { data, error } = await supabase
            .from('french_progress')
            .update(progressData)
            .eq('id', id)
            .select()
            .single();
        if (error) throw error;
        return data;
    } catch (error) {
        console.error('更新学习进度失败:', error);
        return null;
    }
}

// ============================================================
// 法语模块 - 考试报名
// ============================================================

async function getFrenchRegistrations(studentId) {
    try {
        const supabase = getSupabaseClient();
        const { data, error } = await supabase
            .from('french_registrations')
            .select(`
                *,
                exam:french_exams(*)
            `)
            .eq('student_id', studentId);
        if (error) throw error;
        return data || [];
    } catch (error) {
        console.error('获取考试报名失败:', error);
        return [];
    }
}

async function createFrenchRegistration(registrationData) {
    try {
        const supabase = getSupabaseClient();
        const { data, error } = await supabase
            .from('french_registrations')
            .insert([registrationData])
            .select()
            .single();
        if (error) throw error;
        return data;
    } catch (error) {
        console.error('报名考试失败:', error);
        return null;
    }
}

// ============================================================
// 法语模块 - 资源
// ============================================================

async function getFrenchResources(level, category) {
    try {
        const supabase = getSupabaseClient();
        let query = supabase
            .from('french_resources')
            .select('*')
            .order('created_at', { ascending: false });

        if (level) query = query.eq('level', level);
        if (category) query = query.eq('category', category);

        const { data, error } = await query;
        if (error) throw error;
        return data || [];
    } catch (error) {
        console.error('获取学习资源失败:', error);
        return [];
    }
}

// ============================================================
// 导出所有功能
// ============================================================

window.supabaseAuth = {
    // ===== 公民考试模块 =====
    validateStudent: validateStudent,
    checkAccess: checkAccess,
    getSupabaseClient: getSupabaseClient,
    recordMistake: recordMistakeToDB,
    getStudentMistakes: getStudentMistakes,
    getMistakesStats: getMistakesStats,
    markMistakeAsMastered: markMistakeAsMastered,
    deleteMistake: deleteMistake,
    clearAllMistakes: clearAllMistakes,

    // ===== 法语模块 - 用户管理 =====
    validateFrenchUser: validateFrenchUser,
    checkFrenchAccess: checkFrenchAccess,
    getFrenchUsers: getFrenchUsers,
    getFrenchStudents: getFrenchStudents,
    getFrenchTeachers: getFrenchTeachers,
    createFrenchUser: createFrenchUser,
    updateFrenchUser: updateFrenchUser,
    deleteFrenchUser: deleteFrenchUser,

    // ===== 法语模块 - 考试管理 =====
    getFrenchExams: getFrenchExams,
    getFrenchExamById: getFrenchExamById,
    createFrenchExam: createFrenchExam,
    updateFrenchExam: updateFrenchExam,
    deleteFrenchExam: deleteFrenchExam,

    // ===== 法语模块 - 课程管理 =====
    getFrenchCourses: getFrenchCourses,
    getFrenchCoursesStats: getFrenchCoursesStats,
    createFrenchCourse: createFrenchCourse,
    updateFrenchCourse: updateFrenchCourse,
    deleteFrenchCourse: deleteFrenchCourse,
    forceDeleteFrenchCourse: forceDeleteFrenchCourse,

    // ===== 法语模块 - 学习进度 =====
    getFrenchProgress: getFrenchProgress,
    createFrenchProgress: createFrenchProgress,
    updateFrenchProgress: updateFrenchProgress,

    // ===== 法语模块 - 考试报名 =====
    getFrenchRegistrations: getFrenchRegistrations,
    createFrenchRegistration: createFrenchRegistration,

    // ===== 法语模块 - 资源 =====
    getFrenchResources: getFrenchResources,
    
    // ===== 工具 =====
    getTypeLabel: getTypeLabel,
    getTypeClass: getTypeClass
};

console.log('✅ Supabase 配置已加载 (公民考试 + 法语模块)');
console.log('📚 可用方法:', Object.keys(window.supabaseAuth));