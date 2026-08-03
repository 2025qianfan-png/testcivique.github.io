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
// 法语模块 - 用户管理
// ============================================================

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

async function createFrenchCourse(courseData) {
    try {
        const supabase = getSupabaseClient();
        
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
            
            const { error: updateError } = await supabase
                .from('french_users')
                .update({ credit: currentCredit - duration })
                .eq('id', courseData.student_id);
            
            if (updateError) {
                console.error('扣减课时失败:', updateError);
                return null;
            }
        }
        
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

async function deleteFrenchCourse(id) {
    try {
        const supabase = getSupabaseClient();
        
        const { data: course, error: courseError } = await supabase
            .from('french_courses')
            .select('student_id, duration, status')
            .eq('id', id)
            .single();
        
        if (courseError) {
            console.error('查询课程失败:', courseError);
            return false;
        }
        
        const isConsumingStatus = course.status === 'scheduled' || 
                                   course.status === 'in_progress' || 
                                   course.status === 'completed';
        
        if (isConsumingStatus && course.student_id && course.duration) {
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
                console.log(`✅ 课时已退还: +${course.duration}h`);
            }
        }
        
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

async function forceDeleteFrenchCourse(id) {
    try {
        const supabase = getSupabaseClient();
        
        const { data: course, error: courseError } = await supabase
            .from('french_courses')
            .select('student_id, duration, status')
            .eq('id', id)
            .single();
        
        if (courseError) {
            console.error('查询课程失败:', courseError);
            return false;
        }
        
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
// 写作模块 - 题目管理
// ============================================================

async function getWritingTopics(taskType, level) {
    try {
        const supabase = getSupabaseClient();
        let query = supabase
            .from('writing_topics')
            .select('*')
            .order('sort_order', { ascending: true });

        if (taskType) {
            query = query.eq('task_type', taskType);
        }
        if (level && level !== 'all') {
            query = query.eq('level', level);
        }

        const { data, error } = await query;
        if (error) throw error;
        return data || [];
    } catch (error) {
        console.error('获取写作题目失败:', error);
        return [];
    }
}

async function getWritingTopicById(id) {
    try {
        const supabase = getSupabaseClient();
        const { data, error } = await supabase
            .from('writing_topics')
            .select('*')
            .eq('id', id)
            .single();
        if (error) throw error;
        return data;
    } catch (error) {
        console.error('获取写作题目失败:', error);
        return null;
    }
}

async function createWritingTopic(topicData) {
    try {
        const supabase = getSupabaseClient();
        const { data, error } = await supabase
            .from('writing_topics')
            .insert([topicData])
            .select()
            .single();
        if (error) throw error;
        return data;
    } catch (error) {
        console.error('创建写作题目失败:', error);
        return null;
    }
}

async function updateWritingTopic(id, topicData) {
    try {
        const supabase = getSupabaseClient();
        const { data, error } = await supabase
            .from('writing_topics')
            .update(topicData)
            .eq('id', id)
            .select()
            .single();
        if (error) throw error;
        return data;
    } catch (error) {
        console.error('更新写作题目失败:', error);
        return null;
    }
}

async function deleteWritingTopic(id) {
    try {
        const supabase = getSupabaseClient();
        const { error } = await supabase
            .from('writing_topics')
            .delete()
            .eq('id', id);
        if (error) throw error;
        return true;
    } catch (error) {
        console.error('删除写作题目失败:', error);
        return false;
    }
}

// ============================================================
// 写作模块 - 历史管理
// ============================================================

async function saveWritingHistory(historyData) {
    try {
        const supabase = getSupabaseClient();
        const { data, error } = await supabase
            .from('writing_history')
            .insert([{
                ...historyData,
                created_at: new Date().toISOString()
            }])
            .select()
            .single();
        if (error) throw error;
        console.log('✅ 写作历史保存成功:', data.id);
        return data;
    } catch (error) {
        console.error('保存写作历史失败:', error);
        return saveWritingHistoryLocal(historyData);
    }
}

function saveWritingHistoryLocal(historyData) {
    try {
        const user = JSON.parse(localStorage.getItem('french_user') || '{}');
        const key = `writing_history_${user.name || 'guest'}`;
        const existing = JSON.parse(localStorage.getItem(key) || '[]');
        const newEntry = {
            ...historyData,
            id: `local_${Date.now()}`,
            created_at: new Date().toISOString(),
            local_only: true
        };
        existing.push(newEntry);
        localStorage.setItem(key, JSON.stringify(existing));
        console.log('✅ 写作历史保存到本地:', newEntry.id);
        return newEntry;
    } catch (e) {
        console.error('本地保存失败:', e);
        return null;
    }
}

async function getWritingHistory(userId, userName) {
    try {
        const results = { supabase: [], local: [] };

        try {
            const supabase = getSupabaseClient();
            const { data, error } = await supabase
                .from('writing_history')
                .select('*')
                .eq('user_id', userId)
                .order('created_at', { ascending: false });

            if (!error && data) {
                results.supabase = data;
                console.log('从 Supabase 获取历史:', data.length);
            }
        } catch (e) {
            console.warn('Supabase 获取失败:', e.message);
        }

        try {
            const key = `writing_history_${userName || 'guest'}`;
            const localData = JSON.parse(localStorage.getItem(key) || '[]');
            results.local = localData;
            console.log('从本地获取历史:', localData.length);
        } catch (e) {
            console.warn('本地获取失败:', e);
        }

        const all = [...results.local, ...results.supabase];
        const seen = new Set();
        const unique = [];
        for (const item of all) {
            const id = item.id || item._id || item.created_at;
            if (!seen.has(id)) {
                seen.add(id);
                unique.push(item);
            }
        }

        return unique;
    } catch (error) {
        console.error('获取写作历史失败:', error);
        return [];
    }
}

async function deleteWritingHistory(id) {
    try {
        const isLocal = id && id.toString().includes('local_');

        if (isLocal) {
            const user = JSON.parse(localStorage.getItem('french_user') || '{}');
            const key = `writing_history_${user.name || 'guest'}`;
            const existing = JSON.parse(localStorage.getItem(key) || '[]');
            const filtered = existing.filter(item => item.id !== id);
            localStorage.setItem(key, JSON.stringify(filtered));
            return true;
        }

        const supabase = getSupabaseClient();
        const { error } = await supabase
            .from('writing_history')
            .delete()
            .eq('id', id);
        if (error) throw error;
        return true;
    } catch (error) {
        console.error('删除写作历史失败:', error);
        return false;
    }
}

// ============================================================
// 写作模块 - AI 批改（优先 Mistral，备用 Gemini）
// ============================================================

/**
 * 调用 Mistral AI API
 * 免费额度：每天 500 次请求
 */
async function callMistralAI(prompt, userText) {
    try {
        const supabase = getSupabaseClient();
        const { data, error } = await supabase
            .from('app_config')
            .select('value')
            .eq('key', 'mistral_api_key')
            .single();

        if (error || !data) {
            console.warn('⚠️ Mistral API Key 未配置，尝试使用 Gemini...');
            return callGeminiAI(prompt, userText);
        }

        const apiKey = data.value;
        const url = 'https://api.mistral.ai/v1/chat/completions';

        console.log('📤 调用 Mistral API...');
        console.log('🤖 模型: mistral-small-latest');

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'mistral-small-latest',
                messages: [
                    {
                        role: 'system',
                        content: 'Tu es un professeur de français expert DELF, spécialiste en évaluation des niveaux A1 à C2 du CECRL. Réponds toujours en français.'
                    },
                    {
                        role: 'user',
                        content: prompt + '\n\n' + userText
                    }
                ],
                temperature: 0.7,
                max_tokens: 2048
            })
        });

        console.log('📥 API 响应状态:', response.status);

        if (!response.ok) {
            const errorText = await response.text();
            console.error('❌ Mistral API 错误:', response.status, errorText);
            
            if (response.status === 429) {
                console.warn('⚠️ Mistral 配额已用完，尝试使用 Gemini...');
                return callGeminiAI(prompt, userText);
            }
            
            throw new Error(`Mistral API 错误: ${response.status}`);
        }

        const dataResponse = await response.json();
        const result = dataResponse.choices?.[0]?.message?.content || '';

        if (!result) {
            throw new Error('Mistral 未返回有效结果');
        }

        console.log('✅ Mistral 返回成功，长度:', result.length);
        return result;

    } catch (error) {
        console.error('❌ Mistral 调用失败:', error.message);
        console.log('🔄 尝试使用 Gemini...');
        return callGeminiAI(prompt, userText);
    }
}

/**
 * 调用 Gemini API（备用）
 * 免费额度：每天 1500 次请求
 */
async function callGeminiAI(prompt, userText) {
    try {
        const supabase = getSupabaseClient();
        const { data, error } = await supabase
            .from('app_config')
            .select('value')
            .eq('key', 'gemini_api_key')
            .single();

        if (error || !data) {
            console.error('❌ Gemini API Key 未配置');
            throw new Error('没有可用的 AI API Key，请联系管理员');
        }

        const apiKey = data.value;
        const MODEL = 'gemini-2.0-flash-lite-001';
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${apiKey}`;

        console.log('📤 调用 Gemini API (备用)...');
        console.log('🤖 模型:', MODEL);

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: prompt + '\n\n' + userText }]
                }],
                generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 2048
                }
            })
        });

        console.log('📥 API 响应状态:', response.status);

        if (!response.ok) {
            let errorMessage = `HTTP ${response.status}`;
            try {
                const errorJson = await response.json();
                console.error('❌ Gemini API 错误详情:', errorJson);
                errorMessage = errorJson.error?.message || errorMessage;
            } catch (e) {
                const errorText = await response.text();
                console.error('❌ Gemini API 错误:', response.status, errorText);
                errorMessage = errorText.substring(0, 200);
            }
            
            throw new Error(`Gemini API 错误: ${errorMessage}`);
        }

        const dataResponse = await response.json();
        const result = dataResponse.candidates?.[0]?.content?.parts?.[0]?.text || '';

        if (!result) {
            throw new Error('Gemini 未返回有效结果');
        }

        console.log('✅ Gemini 返回成功，长度:', result.length);
        return result;

    } catch (error) {
        console.error('❌ Gemini 调用失败:', error);
        throw error;
    }
}

// ============================================================
// 写作模块 - 批改 Prompt
// ============================================================

function getWritingPrompt(taskType, topicTitle, wordMin, wordMax) {
    const basePrompt = `Tu es un professeur de français expert DELF, spécialiste en évaluation des niveaux A1 à C2 du CECRL.

📌 SUJET : ${topicTitle}
📏 NOMBRE DE MOTS : ${wordMin}-${wordMax} mots

⚠️ INSTRUCTION IMPORTANTE : 
À la fin de ta correction, tu DOIS obligatoirement indiquer le niveau CECRL estimé du texte (A1, A2, B1, B2, C1 ou C2) avec une justification claire et précise.

RÉPONDS EN FRANÇAIS AVEC CETTE STRUCTURE :

📝 **Évaluation**
- Nombre de mots : [compter] mots
- Note : [X/分数]

✅ **Ce qui est bien** :
- [point 1]
- [point 2]
- [point 3]

🔧 **À améliorer** (erreurs + corrections) :
- ❌ "..." → ✅ "..."

💡 **Conseils** :
- [conseil 1]
- [conseil 2]

📄 **Proposition de correction** :
[réécriture complète du texte]

📊 **Niveau CECRL estimé** : [A1/A2/B1/B2/C1/C2]
📝 **Justification** : [expliquer pourquoi ce niveau, avec des exemples précis du texte]

---

TEXTE DE L'ÉLÈVE :`;

    const taskSpecific = {
        'tache1': `
📋 CRITÈRES SPÉCIFIQUES (Tâche 1 - 4 points) :
1. Respect du nombre de mots (30-60) → 1 point
2. Contenu centré sur le sujet → 1 point
3. Utilisation du vocabulaire approprié → 1 point
4. Correction grammaticale et orthographique → 1 point`,

        'tache2': `
📋 CRITÈRES SPÉCIFIQUES (Tâche 2 - 6 points) :
1. Respect du nombre de mots (40-90) → 1 point
2. Utilisation d'au moins 2 temps verbaux → 1.5 points
3. Cohérence du récit → 1.5 points
4. Richesse du vocabulaire → 1 point
5. Correction grammaticale → 1 point`,

        'tache3': `
📋 CRITÈRES SPÉCIFIQUES (Tâche 3 - 10 points) :
1. Respect du nombre de mots (40-90) → 1 point
2. Présence d'une opinion claire → 2 points
3. Arguments et justifications → 2.5 points
4. Structure logique → 2 points
5. Vocabulaire et grammaire → 2.5 points`
    };

    const specific = taskSpecific[taskType] || taskSpecific['tache1'];
    return basePrompt + '\n' + specific;
}
// ============================================================
// 语法模块 - 数据获取
// ============================================================

async function getGrammarTopics(level) {
    try {
        const supabase = getSupabaseClient();
        let query = supabase
            .from('grammar_topics')
            .select('*')
            .eq('level', level)
            .order('sort_order', { ascending: true });

        const { data, error } = await query;
        if (error) throw error;
        return data || [];
    } catch (error) {
        console.error('获取语法知识点失败:', error);
        return [];
    }
}

async function getGrammarExercises(level, topicId) {
    try {
        const supabase = getSupabaseClient();
        let query = supabase
            .from('grammar_exercises')
            .select('*')
            .eq('level', level)
            .order('sort_order', { ascending: true });

        if (topicId) {
            query = query.eq('topic_id', topicId);
        }

        const { data, error } = await query;
        if (error) throw error;
        return data || [];
    } catch (error) {
        console.error('获取语法习题失败:', error);
        return [];
    }
}

async function getGrammarQuizzes(level) {
    try {
        const supabase = getSupabaseClient();
        const { data, error } = await supabase
            .from('grammar_quizzes')
            .select('*')
            .eq('level', level)
            .order('sort_order', { ascending: true });

        if (error) throw error;
        return data || [];
    } catch (error) {
        console.error('获取语法测验失败:', error);
        return [];
    }
}

async function getQuizQuestions(quizId) {
    try {
        const supabase = getSupabaseClient();
        const { data, error } = await supabase
            .from('grammar_quiz_questions')
            .select(`
                exercise_id,
                sort_order,
                grammar_exercises (*)
            `)
            .eq('quiz_id', quizId)
            .order('sort_order', { ascending: true });

        if (error) throw error;
        return data?.map(item => ({
            ...item.grammar_exercises,
            quiz_id: quizId
        })) || [];
    } catch (error) {
        console.error('获取测验题目失败:', error);
        return [];
    }
}

async function saveGrammarProgress(progressData) {
    try {
        const supabase = getSupabaseClient();
        // Vérifier si un enregistrement existe déjà
        const { data: existing, error: checkError } = await supabase
            .from('grammar_progress')
            .select('id')
            .eq('user_id', progressData.user_id)
            .eq(progressData.topic_id ? 'topic_id' : 'exercise_id', 
                progressData.topic_id || progressData.exercise_id || progressData.quiz_id)
            .maybeSingle();

        if (checkError && checkError.code !== 'PGRST116') {
            throw checkError;
        }

        if (existing) {
            // Mettre à jour
            const { error: updateError } = await supabase
                .from('grammar_progress')
                .update({
                    status: progressData.status,
                    score: progressData.score || 0,
                    attempts: 1,
                    last_attempt_at: new Date().toISOString(),
                    updated_at: new Date().toISOString()
                })
                .eq('id', existing.id);

            if (updateError) throw updateError;
        } else {
            // Insérer
            const { error: insertError } = await supabase
                .from('grammar_progress')
                .insert([{
                    user_id: progressData.user_id,
                    topic_id: progressData.topic_id || null,
                    exercise_id: progressData.exercise_id || null,
                    quiz_id: progressData.quiz_id || null,
                    status: progressData.status,
                    score: progressData.score || 0,
                    attempts: 1,
                    last_attempt_at: new Date().toISOString(),
                    created_at: new Date().toISOString(),
                    updated_at: new Date().toISOString()
                }]);

            if (insertError) throw insertError;
        }

        return true;
    } catch (error) {
        console.error('保存语法进度失败:', error);
        return false;
    }
}

async function getGrammarProgress(userId) {
    try {
        const supabase = getSupabaseClient();
        const { data, error } = await supabase
            .from('grammar_progress')
            .select('*')
            .eq('user_id', userId);

        if (error) throw error;
        return data || [];
    } catch (error) {
        console.error('获取语法进度失败:', error);
        return [];
    }
}
// ============================================================
// 导出所有功能
// ============================================================

window.supabaseAuth = {
    // ===== 工具 =====
    getSupabaseClient: getSupabaseClient,
    getTypeLabel: getTypeLabel,
    getTypeClass: getTypeClass,

    // ===== 公民考试模块 =====
    validateStudent: validateStudent,
    checkAccess: checkAccess,
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

    // ===== 写作模块 =====
    getWritingTopics: getWritingTopics,
    getWritingTopicById: getWritingTopicById,
    createWritingTopic: createWritingTopic,
    updateWritingTopic: updateWritingTopic,
    deleteWritingTopic: deleteWritingTopic,
    saveWritingHistory: saveWritingHistory,
    getWritingHistory: getWritingHistory,
    deleteWritingHistory: deleteWritingHistory,
    callGeminiAI: callMistralAI,  // 优先使用 Mistral
    getWritingPrompt: getWritingPrompt,

    // ============================================================
    // 语法模块 (新增)
    // ============================================================
    getGrammarTopics: getGrammarTopics,
    getGrammarExercises: getGrammarExercises,
    getGrammarQuizzes: getGrammarQuizzes,
    getQuizQuestions: getQuizQuestions,
    saveGrammarProgress: saveGrammarProgress,
    getGrammarProgress: getGrammarProgress
};

console.log('✅ Supabase 配置已加载 (公民考试 + 法语 + 写作 + 语法模块)');
console.log('📚 可用方法:', Object.keys(window.supabaseAuth));
console.log('🤖 AI 服务: 优先 Mistral，备用 Gemini');