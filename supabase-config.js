// supabase-config.js - 修复版
const SUPABASE_URL = 'https://pokwxlbntoxoxogptned.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_pu4aBS3wXF2e3ckgENTt4g_9_HvSG_v';

console.log('正在加载Supabase配置...');

// 单例Supabase客户端
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
        console.log('Supabase客户端创建成功');
    }
    return supabaseClient;
};

// ==================== 学生验证功能 ====================

async function validateStudent(name, password) {
    try {
        console.log(`验证学生: ${name}`);
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
        
        // 简单密码验证
        if (data.password !== password) {
            console.log('密码不匹配');
            return null;
        }
        
        console.log('学生验证成功:', data.name);
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

// ==================== 错题集功能 ====================

// 记录错题到数据库
async function recordMistakeToDB(studentInfo, question, userAnswer, testType) {
    console.log('开始记录错题:', { student: studentInfo.name, testType, userAnswer });
    
    // 确保userAnswer有效
    if (userAnswer === null || userAnswer === undefined || userAnswer < 0) {
        console.warn('userAnswer无效，设置为0');
        userAnswer = 0;
    }
    
    // 确保question对象包含必要字段
    if (!question || !question.question || !question.options || !Array.isArray(question.options)) {
        console.error('问题数据不完整:', question);
        return null;
    }
    
    // 创建错题记录
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
    
    console.log('准备记录的错题数据:', mistakeData);
    
    try {
        // 首先尝试使用Supabase SDK
        const supabase = getSupabaseClient();
        const { data, error } = await supabase
            .from('mistakes')
            .insert([mistakeData])
            .select()
            .single();
        
        if (error) {
            console.warn('Supabase SDK插入失败，尝试REST API:', error.message);
            // 降级方案1: 使用REST API
            return await insertMistakeViaREST(mistakeData, studentInfo.name);
        }
        
        console.log('错题记录成功 (SDK):', data.id);
        return data.id;
        
    } catch (error) {
        console.error('记录错题主方案失败:', error);
        // 降级方案2: 保存到localStorage
        return saveToLocalStorage(studentInfo.name, mistakeData);
    }
}

// 通过REST API插入错题
async function insertMistakeViaREST(mistakeData, studentName) {
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
            console.error('REST API错误:', errorText);
            throw new Error(`API错误: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('错题记录成功 (REST):', data[0]?.id);
        return data[0]?.id;
        
    } catch (error) {
        console.error('REST API插入失败:', error);
        throw error; // 传递错误以便降级处理
    }
}

// 保存到本地存储
function saveToLocalStorage(studentName, mistakeData) {
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
        console.log('错题保存到本地存储:', localMistake.id);
        return localMistake.id;
    } catch (localError) {
        console.error('本地存储失败:', localError);
        return null;
    }
}

// 获取学生的错题
async function getStudentMistakes(studentName) {
    try {
        console.log('获取学生错题:', studentName);
        
        const results = {
            supabase: [],
            local: []
        };
        
        // 1. 尝试从Supabase获取
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
        
        // 2. 从localStorage获取本地错题
        const localKey = `mistakes_${studentName}`;
        try {
            const localData = JSON.parse(localStorage.getItem(localKey) || '[]');
            results.local = localData;
            console.log('从本地存储获取错题成功:', localData.length);
        } catch (localError) {
            console.warn('本地存储获取失败:', localError);
        }
        
        // 3. 合并数据，去重（基于question_id）
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
        
        // 最终降级方案：只返回本地数据
        const localKey = `mistakes_${studentName}`;
        try {
            const localData = JSON.parse(localStorage.getItem(localKey) || '[]');
            return localData;
        } catch {
            return [];
        }
    }
}

// 获取错题统计
async function getMistakesStats(studentName) {
    try {
        const mistakes = await getStudentMistakes(studentName);
        
        const total = mistakes.length;
        const themes = [...new Set(mistakes.map(m => m.category || m.theme || 'Autre'))].length;
        const mastered = mistakes.filter(m => m.mastered).length;
        const improvement = total > 0 ? Math.round((mastered / total) * 100) : 0;
        
        return {
            total,
            themes,
            improvement
        };
    } catch (error) {
        console.error('获取错题统计失败:', error);
        return { total: 0, themes: 0, improvement: 0 };
    }
}

// 删除错题 - 确保返回布尔值
async function deleteMistake(mistakeId) {
    try {
        console.log('删除错题:', mistakeId);
        
        // 检查是否是本地存储的错题
        const isLocal = mistakeId.toString().includes('local_');
        
        if (isLocal) {
            // 从本地存储删除
            const match = mistakeId.match(/local_(.+?)_/);
            const studentName = match ? match[1] : 'unknown';
            const localKey = `mistakes_${studentName}`;
            
            const localData = JSON.parse(localStorage.getItem(localKey) || '[]');
            const newData = localData.filter(m => m.id !== mistakeId);
            
            localStorage.setItem(localKey, JSON.stringify(newData));
            console.log('本地错题删除成功');
            return true;
        }
        
        // 删除Supabase中的记录
        const supabase = getSupabaseClient();
        const { error } = await supabase
            .from('mistakes')
            .delete()
            .eq('id', mistakeId);
        
        if (error) {
            console.error('删除错题失败:', error);
            return false;
        }
        
        console.log('云端错题删除成功');
        return true;
        
    } catch (error) {
        console.error('删除错题异常:', error);
        return false;
    }
}

// 清空学生所有错题 - 确保返回布尔值
async function clearAllMistakes(studentName) {
    try {
        console.log('清空所有错题:', studentName);
        
        // 1. 清空本地存储
        localStorage.removeItem(`mistakes_${studentName}`);
        
        // 2. 尝试清空Supabase中的记录
        try {
            const supabase = getSupabaseClient();
            const { error } = await supabase
                .from('mistakes')
                .delete()
                .eq('student_name', studentName);
            
            if (error) {
                console.warn('Supabase清空失败（不影响操作）:', error.message);
            }
        } catch (supabaseError) {
            console.warn('Supabase操作异常（不影响操作）:', supabaseError.message);
        }
        
        console.log('所有错题已清空');
        return true;
        
    } catch (error) {
        console.error('清空错题异常:', error);
        return false;
    }
}

// 标记错题为已掌握 - 确保返回布尔值
async function markMistakeAsMastered(mistakeId, mastered = true) {
    try {
        console.log('标记错题状态:', { mistakeId, mastered });
        
        // 检查是否是本地存储的错题
        const isLocal = mistakeId.toString().includes('local_');
        
        if (isLocal) {
            // 更新本地存储
            const match = mistakeId.match(/local_(.+?)_/);
            const studentName = match ? match[1] : 'unknown';
            const localKey = `mistakes_${studentName}`;
            
            const localData = JSON.parse(localStorage.getItem(localKey) || '[]');
            const index = localData.findIndex(m => m.id === mistakeId);
            
            if (index >= 0) {
                localData[index].mastered = mastered;
                localData[index].updated_at = new Date().toISOString();
                localStorage.setItem(localKey, JSON.stringify(localData));
                console.log('本地错题状态更新成功');
                return true;
            }
            return false;
        }
        
        // 更新Supabase中的记录
        const supabase = getSupabaseClient();
        const { error } = await supabase
            .from('mistakes')
            .update({
                mastered: mastered,
                updated_at: new Date().toISOString()
            })
            .eq('id', mistakeId);
        
        if (error) {
            console.error('更新错题状态失败:', error);
            return false;
        }
        
        console.log('云端错题状态更新成功');
        return true;
        
    } catch (error) {
        console.error('标记错题状态异常:', error);
        return false;
    }
}

// ==================== 导出所有功能 ====================

window.supabaseAuth = {
    // 学生验证
    validateStudent,
    checkAccess,
    
    // 错题集功能
    recordMistake: recordMistakeToDB,
    getStudentMistakes,
    getMistakesStats,
    markMistakeAsMastered,
    deleteMistake,
    clearAllMistakes,
    
    // 工具函数
    getSupabaseClient
};

console.log('window.supabaseAuth已设置完成');
console.log('可用方法:', Object.keys(window.supabaseAuth));
