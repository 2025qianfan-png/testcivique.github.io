// ============================================================
// SUPABASE 配置 v3 - 统一版
// 用户表: users | 课程表: courses_v2 | 其他表不变
// ============================================================

const SUPABASE_URL = 'https://pokwxlbntoxoxogptned.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_pu4aBS3wXF2e3ckgENTt4g_9_HvSG_v';

console.log('🚀 正在加载Supabase配置 v3...');

// ============================================================
// Supabase 客户端
// ============================================================
var supabaseClient = null;

function getSupabaseClient() {
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
                        'Authorization': 'Bearer ' + SUPABASE_PUBLISHABLE_KEY
                    }
                }
            }
        );
        console.log('✅ Supabase客户端创建成功');
    }
    return supabaseClient;
}

// ============================================================
// 工具函数
// ============================================================
function getTypeLabel(type) {
    var map = {
        'n': '🇫🇷 DELF',
        'r': '📘 DALF',
        'm': '📗 TCF',
        't': '📙 TCF IRN'
    };
    return map[type] || type || '-';
}

function getTypeClass(type) {
    var map = {
        'n': 'type-n',
        'r': 'type-r',
        'm': 'type-m',
        't': 'type-t'
    };
    return map[type] || '';
}

// ============================================================
// 【模块一】用户管理（统一 users 表）
// ============================================================

async function validateUser(name, password) {
    try {
        console.log('🔍 验证用户: ' + name);
        var supabase = getSupabaseClient();
        var result = await supabase
            .from('users')
            .select('*')
            .eq('name', name)
            .single();

        if (result.error) {
            console.error('查询用户失败:', result.error.message);
            return null;
        }
        if (!result.data) {
            console.log('用户不存在');
            return null;
        }
        if (result.data.password !== password) {
            console.log('密码不匹配');
            return null;
        }
        console.log('✅ 用户验证成功: ' + result.data.name + ' (' + result.data.role + ')');
        return result.data;
    } catch (error) {
        console.error('验证用户异常:', error);
        return null;
    }
}

// 兼容旧名
function validateStudent(name, password) {
    return validateUser(name, password);
}
function validateFrenchUser(name, password) {
    return validateUser(name, password);
}

function checkAccess(user, category) {
    category = category || 'civique';
    if (!user) return { valid: false, message: 'Utilisateur non trouvé' };

    var timerField = category === 'francais' ? 'french_timer' : 'timer';
    var timer = user[timerField];

    if (!timer) {
        return { valid: true, daysLeft: -1 };
    }
    var expiryDate = new Date(timer);
    var currentDate = new Date();

    if (expiryDate < currentDate) {
        return {
            valid: false,
            daysLeft: 0,
            message: 'Votre période d\'accès a expiré le ' + expiryDate.toLocaleDateString('fr-FR')
        };
    } else {
        var timeDiff = expiryDate - currentDate;
        var daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        return {
            valid: true,
            daysLeft: daysLeft,
            expiryDate: expiryDate
        };
    }
}

function checkFrenchAccess(user) {
    return checkAccess(user, 'francais');
}

async function getUserById(id) {
    try {
        var supabase = getSupabaseClient();
        var result = await supabase
            .from('users')
            .select('*')
            .eq('id', id)
            .single();
        if (result.error) throw result.error;
        return result.data;
    } catch (error) {
        console.error('获取用户失败:', error);
        return null;
    }
}

async function getUsersByRole(role) {
    try {
        var supabase = getSupabaseClient();
        var result = await supabase
            .from('users')
            .select('*')
            .eq('role', role)
            .order('name', { ascending: true });
        if (result.error) throw result.error;
        return result.data || [];
    } catch (error) {
        console.error('获取用户列表失败:', error);
        return [];
    }
}

async function getUsersByModule(module) {
    try {
        var supabase = getSupabaseClient();
        // 手动过滤，不用 .or 或 .contains
        var result = await supabase
            .from('users')
            .select('*')
            .order('name', { ascending: true });
        if (result.error) throw result.error;
        var all = result.data || [];
        return all.filter(function(u) {
            return u.modules && u.modules.indexOf(module) !== -1;
        });
    } catch (error) {
        console.error('获取模块用户失败:', error);
        return [];
    }
}

async function getAllUsers() {
    try {
        var supabase = getSupabaseClient();
        var result = await supabase
            .from('users')
            .select('*')
            .order('name', { ascending: true });
        if (result.error) throw result.error;
        return result.data || [];
    } catch (error) {
        console.error('获取所有用户失败:', error);
        return [];
    }
}

async function getFrenchUsers() {
    try {
        var supabase = getSupabaseClient();
        var result = await supabase
            .from('users')
            .select('*')
            .order('name', { ascending: true });
        if (result.error) throw result.error;
        var all = result.data || [];
        // 手动过滤：有 francais 模块，或者是 stu_fr / stu_all
        return all.filter(function(u) {
            var hasModule = u.modules && u.modules.indexOf('francais') !== -1;
            var isFrenchRole = u.role === 'stu_fr' || u.role === 'stu_all';
            return hasModule || isFrenchRole;
        });
    } catch (error) {
        console.error('获取法语用户失败:', error);
        return [];
    }
}

async function getFrenchStudents() {
    try {
        var supabase = getSupabaseClient();
        var result = await supabase
            .from('users')
            .select('*')
            .in('role', ['stu_fr', 'stu_all'])
            .order('name', { ascending: true });
        if (result.error) throw result.error;
        return result.data || [];
    } catch (error) {
        console.error('获取法语学生失败:', error);
        return [];
    }
}

async function getFrenchTeachers() {
    try {
        var users = await getUsersByModule('francais');
        return users.filter(function(u) { return u.role === 'teacher'; });
    } catch (error) {
        console.error('获取法语老师失败:', error);
        return [];
    }
}

async function createUser(userData) {
    try {
        var supabase = getSupabaseClient();
        var result = await supabase
            .from('users')
            .insert([userData])
            .select()
            .single();
        if (result.error) throw result.error;
        return result.data;
    } catch (error) {
        console.error('创建用户失败:', error);
        return null;
    }
}
function createFrenchUser(userData) {
    return createUser(userData);
}

async function updateUser(id, userData) {
    try {
        var supabase = getSupabaseClient();
        var result = await supabase
            .from('users')
            .update(userData)
            .eq('id', id)
            .select()
            .single();
        if (result.error) throw result.error;
        return result.data;
    } catch (error) {
        console.error('更新用户失败:', error);
        return null;
    }
}
function updateFrenchUser(id, userData) {
    return updateUser(id, userData);
}

async function updateStudentEmail(userId, currentPassword, newEmail) {
    try {
        var supabase = getSupabaseClient();

        var fetchResult = await supabase
            .from('users')
            .select('password, email, name')
            .eq('id', userId)
            .single();

        if (fetchResult.error || !fetchResult.data) {
            return { success: false, message: 'Utilisateur non trouvé' };
        }
        var user = fetchResult.data;

        if (user.password !== currentPassword) {
            return { success: false, message: 'Mot de passe actuel incorrect' };
        }
        if (user.email === newEmail) {
            return { success: true, data: user, message: 'Email inchangé' };
        }

        var checkResult = await supabase
            .from('users')
            .select('id, email, name')
            .eq('email', newEmail)
            .neq('id', userId)
            .maybeSingle();

        if (checkResult.data) {
            return { success: false, message: 'Cet email est déjà utilisé' };
        }

        var updateResult = await supabase
            .from('users')
            .update({ email: newEmail })
            .eq('id', userId)
            .select()
            .single();

        if (updateResult.error) {
            return { success: false, message: 'Erreur lors de la mise à jour' };
        }
        return { success: true, data: updateResult.data };
    } catch (error) {
        console.error('更新邮箱异常:', error);
        return { success: false, message: 'Erreur de connexion' };
    }
}

async function deleteUser(id) {
    try {
        var supabase = getSupabaseClient();
        var result = await supabase
            .from('users')
            .delete()
            .eq('id', id);
        if (result.error) throw result.error;
        return true;
    } catch (error) {
        console.error('删除用户失败:', error);
        return false;
    }
}
function deleteFrenchUser(id) {
    return deleteUser(id);
}

// ============================================================
// 【模块二】课时管理
// ============================================================

async function deductCredit(userId, hours, category) {
    category = category || 'civique';
    if (!userId || !hours || hours <= 0) return true;

    try {
        var supabase = getSupabaseClient();
        var field = category === 'francais' ? 'french_credit' : 'credit';

        var result = await supabase
            .from('users')
            .select(field)
            .eq('id', userId)
            .single();

        if (result.error) throw result.error;
        var current = (result.data && result.data[field]) || 0;

        if (current < hours) {
            throw new Error('Crédits insuffisants (' + current + 'h disponibles, ' + hours + 'h nécessaires)');
        }

        var updateData = {};
        updateData[field] = current - hours;

        var updateResult = await supabase
            .from('users')
            .update(updateData)
            .eq('id', userId);

        if (updateResult.error) throw updateResult.error;
        console.log('✅ 扣课时: ' + category + ' -' + hours + 'h，剩余 ' + (current - hours) + 'h');
        return true;
    } catch (error) {
        console.error('扣课时失败:', error);
        throw error;
    }
}

async function refundCredit(userId, hours, category) {
    category = category || 'civique';
    if (!userId || !hours || hours <= 0) return true;

    try {
        var supabase = getSupabaseClient();
        var field = category === 'francais' ? 'french_credit' : 'credit';

        var result = await supabase
            .from('users')
            .select(field)
            .eq('id', userId)
            .single();

        if (result.error) throw result.error;
        var current = (result.data && result.data[field]) || 0;
        var newVal = current + hours;

        var updateData = {};
        updateData[field] = newVal;

        var updateResult = await supabase
            .from('users')
            .update(updateData)
            .eq('id', userId);

        if (updateResult.error) throw updateResult.error;
        console.log('✅ 还课时: ' + category + ' +' + hours + 'h，现在 ' + newVal + 'h');
        return true;
    } catch (error) {
        console.error('还课时失败:', error);
        throw error;
    }
}

// ============================================================
// 【模块三】课程管理（统一 courses_v2 表）
// ============================================================

async function getCourses(options) {
    options = options || {};
    var userId = options.userId;
    var userRole = options.userRole;
    var category = options.category;

    try {
        var supabase = getSupabaseClient();
        var data = [];

        if (userRole === 'teacher') {
            // ============================================================
            // 老师：查自己作为 teacher_id 的所有课（单人 + 小组都有）
            // ============================================================
            var tQuery = supabase
                .from('courses_v2')
                .select('*')
                .eq('teacher_id', userId)
                .order('start_time', { ascending: true });

            if (category) tQuery = tQuery.eq('category', category);

            var tRes = await tQuery;
            if (tRes.error) throw tRes.error;
            data = tRes.data || [];

        } else if (userRole === 'stu' || userRole === 'stu_fr' || userRole === 'stu_all') {
            // ============================================================
            // 学生：合并「单人课 student_id = 我」+「小组课 course_students 有我」
            // ============================================================

            // 1) 单人课
            var soloQuery = supabase
                .from('courses_v2')
                .select('*')
                .eq('student_id', userId)
                .order('start_time', { ascending: true });

            if (category) soloQuery = soloQuery.eq('category', category);

            var soloRes = await soloQuery;
            if (soloRes.error) throw soloRes.error;
            var soloCourses = soloRes.data || [];

            // 2) 小组课：先拿我所在的所有 course_id
            var csRes = await supabase
                .from('course_students')
                .select('course_id')
                .eq('student_id', userId);

            var csIds = (csRes.data || []).map(function(x) { return x.course_id; });

            var groupCourses = [];
            if (csIds.length > 0) {
                var grpQuery = supabase
                    .from('courses_v2')
                    .select('*')
                    .in('id', csIds)
                    .order('start_time', { ascending: true });

                if (category) grpQuery = grpQuery.eq('category', category);

                var grpRes = await grpQuery;
                if (!grpRes.error) groupCourses = grpRes.data || [];
            }

            // 3) 合并去重
            var allMap = {};
            soloCourses.concat(groupCourses).forEach(function(c) {
                allMap[c.id] = c;
            });
            data = Object.keys(allMap).map(function(k) { return allMap[k]; });
            data.sort(function(a, b) {
                return new Date(a.start_time) - new Date(b.start_time);
            });

        } else {
            // ============================================================
            // 其他角色（admin 等）：拿全部
            // ============================================================
            var aQuery = supabase
                .from('courses_v2')
                .select('*')
                .order('start_time', { ascending: true });

            if (category) aQuery = aQuery.eq('category', category);

            var aRes = await aQuery;
            if (aRes.error) throw aRes.error;
            data = aRes.data || [];
        }

        // ============================================================
        // 关联用户信息（teacher + student + students 数组）
        // ============================================================
        if (data.length > 0) {
            var courseIds = data.map(function(c) { return c.id; });

            // 先收集所有涉及的 user id
            var userIdsSet = {};
            data.forEach(function(c) {
                if (c.teacher_id) userIdsSet[c.teacher_id] = true;
                if (c.student_id) userIdsSet[c.student_id] = true;
            });

            // 顺便把小组课的 student_id 也收集起来
            var csMap = {};   // { courseId: [studentId, ...] }
            if (courseIds.length > 0) {
                var csListRes = await supabase
                    .from('course_students')
                    .select('course_id, student_id')
                    .in('course_id', courseIds);

                (csListRes.data || []).forEach(function(cs) {
                    if (!csMap[cs.course_id]) csMap[cs.course_id] = [];
                    csMap[cs.course_id].push(cs.student_id);
                    userIdsSet[cs.student_id] = true;
                });
            }

            // 拿所有用户
            var userIdsArr = Object.keys(userIdsSet);
            var userMap = {};
            if (userIdsArr.length > 0) {
                var usersRes = await supabase
                    .from('users')
                    .select('id, name, email')
                    .in('id', userIdsArr);

                (usersRes.data || []).forEach(function(u) {
                    userMap[u.id] = u;
                });
            }

            // 挂到每门课
            data.forEach(function(c) {
                // 老师
                c.teacher = c.teacher_id ? (userMap[c.teacher_id] || null) : null;

                // 兼容旧代码：c.student = 第一个人
                c.student = c.student_id ? (userMap[c.student_id] || null) : null;

                // 新增：完整 students 数组（单人 + 小组）
                c.students = [];
                if (c.student_id && userMap[c.student_id]) {
                    c.students.push(userMap[c.student_id]);
                }
                (csMap[c.id] || []).forEach(function(sid) {
                    if (userMap[sid] && !c.students.find(function(s) { return s.id === sid; })) {
                        c.students.push(userMap[sid]);
                    }
                });

                // 如果 c.student 为空但 students 有 → 用第一个
                if (!c.student && c.students.length > 0) {
                    c.student = c.students[0];
                }
            });
        }

        return data;

    } catch (error) {
        console.error('获取课程失败:', error);
        return [];
    }
}
function getFrenchCourses(userId, userRole) {
    return getCourses({ userId: userId, userRole: userRole, category: 'francais' });
}

async function getCourseById(id) {
    try {
        var supabase = getSupabaseClient();
        var result = await supabase
            .from('courses_v2')
            .select('*')
            .eq('id', id)
            .single();
        if (result.error) throw result.error;
        return result.data;
    } catch (error) {
        console.error('获取课程失败:', error);
        return null;
    }
}

async function createCourse(courseData) {
    try {
        var supabase = getSupabaseClient();
        var category = courseData.category || 'civique';
        var duration = courseData.duration || 2;

        var shouldDeduct = courseData.status === 'scheduled' ||
                          courseData.status === 'completed' ||
                          !courseData.status;

        if (shouldDeduct && courseData.student_id) {
            await deductCredit(courseData.student_id, duration, category);
        }

        var insertData = {};
        for (var k in courseData) {
            if (courseData.hasOwnProperty(k)) insertData[k] = courseData[k];
        }
        insertData.category = category;
        insertData.created_at = new Date().toISOString();
        insertData.updated_at = new Date().toISOString();

        var result = await supabase
            .from('courses_v2')
            .insert([insertData])
            .select()
            .single();

        if (result.error) throw result.error;
        console.log('✅ 课程创建成功:', result.data.id);
        return result.data;
    } catch (error) {
        console.error('创建课程失败:', error);
        throw error;
    }
}

async function updateCourse(id, newData) {
    try {
        var supabase = getSupabaseClient();

        // ============================================================
        // 1. 先读出旧课程
        // ============================================================
        var fetchResult = await supabase
            .from('courses_v2')
            .select('*')
            .eq('id', id)
            .maybeSingle();

        if (fetchResult.error || !fetchResult.data) {
            throw new Error('Cours introuvable');
        }
        var oldCourse = fetchResult.data;

        // ============================================================
        // 2. 收集所有"旧/新"字段
        // ============================================================
        var oldCategory = oldCourse.category || 'civique';
        var newCategory = newData.category || oldCategory;

        var oldStatus = oldCourse.status;
        var newStatus = newData.status || oldStatus;

        var oldDuration = oldCourse.duration || 2;
        var newDuration = newData.duration !== undefined ? newData.duration : oldDuration;

        var oldStudentId = oldCourse.student_id || null;
        var newStudentId = newData.student_id !== undefined ? newData.student_id : oldStudentId;

        // ============================================================
        // 3. 判断"是否占用 credit"
        // ============================================================
        function isConsuming(s) {
            return s === 'scheduled' || s === 'in_progress' || s === 'completed';
        }

        var oldConsumes = isConsuming(oldStatus);
        var newConsumes = isConsuming(newStatus);

        // ============================================================
        // 4. 处理 credit
        // ============================================================

        // ---- 情况 A：学生换了 或 category 换了 → 全额退旧的，全额扣新的 ----
        if (oldStudentId !== newStudentId || oldCategory !== newCategory) {

            if (oldConsumes && oldStudentId) {
                await refundCredit(oldStudentId, oldDuration, oldCategory);
            }

            if (newConsumes && newStudentId) {
                await deductCredit(newStudentId, newDuration, newCategory);
            }

        }
        // ---- 情况 B：同学生、同 category → 只处理时长差 ----
        else {

            if (oldConsumes && !newConsumes) {
                // 原来占用，现在不占用（比如改成 cancelled） → 退旧的
                if (oldStudentId) {
                    await refundCredit(oldStudentId, oldDuration, oldCategory);
                }

            } else if (!oldConsumes && newConsumes) {
                // 原来不占用，现在占用（比如从 cancelled 改回 scheduled） → 扣新的
                if (oldStudentId) {
                    await deductCredit(oldStudentId, newDuration, newCategory);
                }

            } else if (oldConsumes && newConsumes) {
                // 前后都占用 → 只处理时长差
                var diff = newDuration - oldDuration;
                if (diff > 0 && oldStudentId) {
                    await deductCredit(oldStudentId, diff, oldCategory);
                } else if (diff < 0 && oldStudentId) {
                    await refundCredit(oldStudentId, -diff, oldCategory);
                }
            }
            // else：前后都不占用 → 什么都不做
        }

        // ============================================================
        // 5. 更新数据库
        // ============================================================
        var updateData = {};
        for (var k in newData) {
            if (newData.hasOwnProperty(k)) {
                updateData[k] = newData[k];
            }
        }
        updateData.updated_at = new Date().toISOString();

        var result = await supabase
            .from('courses_v2')
            .update(updateData)
            .eq('id', id)
            .select()
            .maybeSingle();

        if (result.error) throw result.error;
        return result.data;

    } catch (error) {
        console.error('更新课程失败:', error);
        throw error;
    }
}

async function deleteCourse(id) {
    try {
        var supabase = getSupabaseClient();
        var fetchResult = await supabase
            .from('courses_v2')
            .select('*')
            .eq('id', id)
            .single();

        if (fetchResult.data) {
            var course = fetchResult.data;
            var isConsuming = course.status === 'scheduled' ||
                            course.status === 'in_progress' ||
                            course.status === 'completed';
            if (isConsuming && course.student_id && course.duration) {
                await refundCredit(course.student_id, course.duration, course.category);
            }
        }

        var result = await supabase
            .from('courses_v2')
            .delete()
            .eq('id', id);

        if (result.error) throw result.error;
        return true;
    } catch (error) {
        console.error('删除课程失败:', error);
        return false;
    }
}
function deleteFrenchCourse(id) {
    return deleteCourse(id);
}
function forceDeleteFrenchCourse(id) {
    return deleteCourse(id);
}

async function cancelCourse(id, reason) {
    try {
        var supabase = getSupabaseClient();
        var fetchResult = await supabase
            .from('courses_v2')
            .select('*')
            .eq('id', id)
            .single();

        if (fetchResult.data) {
            var course = fetchResult.data;
            var isConsuming = course.status === 'scheduled' ||
                            course.status === 'in_progress' ||
                            course.status === 'completed';
            if (isConsuming && course.student_id && course.duration) {
                await refundCredit(course.student_id, course.duration, course.category);
            }
        }

        var result = await supabase
            .from('courses_v2')
            .update({
                status: 'cancelled',
                cancel_reason: reason || null,
                updated_at: new Date().toISOString()
            })
            .eq('id', id);

        if (result.error) throw result.error;
        return true;
    } catch (error) {
        console.error('取消课程失败:', error);
        return false;
    }
}

async function getCoursesStats(userId, userRole, category) {
    try {
        var courses = await getCourses({ userId: userId, userRole: userRole, category: category });
        var now = new Date();

        var upcoming = courses.filter(function(c) {
            return c.status !== 'completed' && c.status !== 'cancelled' && new Date(c.start_time) > now;
        }).length;
        var inProgress = courses.filter(function(c) { return c.status === 'in_progress'; }).length;
        var completed = courses.filter(function(c) { return c.status === 'completed'; }).length;
        var cancelled = courses.filter(function(c) { return c.status === 'cancelled'; }).length;

        return { total: courses.length, upcoming: upcoming, inProgress: inProgress, completed: completed, cancelled: cancelled };
    } catch (error) {
        console.error('获取课程统计失败:', error);
        return { total: 0, upcoming: 0, inProgress: 0, completed: 0, cancelled: 0 };
    }
}
function getFrenchCoursesStats(userId, userRole) {
    return getCoursesStats(userId, userRole, 'francais');
}

// ============================================================
// 【模块四】老师空闲时间（teacher_availabilities 表不变）
// ============================================================

async function getTeacherAvailabilities(teacherId, status) {
    try {
        var supabase = getSupabaseClient();
        var query = supabase
            .from('teacher_availabilities')
            .select('*')
            .eq('teacher_id', teacherId)
            .order('start_time', { ascending: true });

        if (status) query = query.eq('status', status);

        var result = await query;
        if (result.error) throw result.error;
        return result.data || [];
    } catch (error) {
        console.error('获取教师空闲时间失败:', error);
        return [];
    }
}

async function getAllAvailableSlots(teacherId) {
    try {
        var supabase = getSupabaseClient();
        var query = supabase
            .from('teacher_availabilities')
            .select('*')
            .eq('status', 'available')
            .gt('start_time', new Date().toISOString())
            .order('start_time', { ascending: true });

        if (teacherId) query = query.eq('teacher_id', teacherId);

        var result = await query;
        if (result.error) throw result.error;
        return result.data || [];
    } catch (error) {
        console.error('获取可用时间段失败:', error);
        return [];
    }
}

async function getAllTeachersAvailableSlots() {
    try {
        var supabase = getSupabaseClient();
        var result = await supabase
            .from('teacher_availabilities')
            .select('*')
            .eq('status', 'available')
            .gt('start_time', new Date().toISOString())
            .order('start_time', { ascending: true });

        if (result.error) throw result.error;
        var data = result.data || [];

        if (data.length > 0) {
            var teacherIds = [];
            var seen = {};
            data.forEach(function(s) {
                if (s.teacher_id && !seen[s.teacher_id]) {
                    seen[s.teacher_id] = true;
                    teacherIds.push(s.teacher_id);
                }
            });

            if (teacherIds.length > 0) {
                var usersResult = await supabase
                    .from('users')
                    .select('id, name')
                    .in('id', teacherIds);

                if (usersResult.data) {
                    var teacherMap = {};
                    usersResult.data.forEach(function(t) { teacherMap[t.id] = t; });
                    data.forEach(function(slot) {
                        slot.teacher = teacherMap[slot.teacher_id] || null;
                    });
                }
            }
        }
        return data;
    } catch (error) {
        console.error('获取所有教师可用时间段失败:', error);
        return [];
    }
}

async function createTeacherAvailability(availabilityData) {
    try {
        var supabase = getSupabaseClient();

        var checkResult = await supabase
            .from('teacher_availabilities')
            .select('id, start_time, end_time')
            .eq('teacher_id', availabilityData.teacher_id)
            .in('status', ['available', 'booked']);
        if (checkResult.error) throw checkResult.error;
        var existing = checkResult.data;

        if (existing && existing.length > 0) {
            for (var i = 0; i < existing.length; i++) {
                var slot = existing[i];
                var slotStart = new Date(slot.start_time);
                var slotEnd = new Date(slot.end_time);
                var newStart = new Date(availabilityData.start_time);
                var newEnd = new Date(availabilityData.end_time);
                if (newStart < slotEnd && newEnd > slotStart) {
                    throw new Error('Ce créneau chevauche un créneau existant');
                }
            }
        }

        var insertData = {};
        for (var k in availabilityData) {
            if (availabilityData.hasOwnProperty(k)) insertData[k] = availabilityData[k];
        }
        insertData.status = 'available';
        insertData.created_at = new Date().toISOString();
        insertData.updated_at = new Date().toISOString();

        var result = await supabase
            .from('teacher_availabilities')
            .insert([insertData])
            .select()
            .single();

        if (result.error) throw result.error;
        return result.data;
    } catch (error) {
        console.error('创建空闲时间段失败:', error);
        throw error;
    }
}

async function deleteTeacherAvailability(id) {
    try {
        var supabase = getSupabaseClient();

        var checkResult = await supabase
            .from('teacher_availabilities')
            .select('status')
            .eq('id', id)
            .maybeSingle();

        if (checkResult.error || !checkResult.data) {
            throw new Error('Créneau introuvable');
        }
        if (checkResult.data.status === 'booked') {
            throw new Error('Impossible de supprimer un créneau déjà réservé');
        }

        var result = await supabase
            .from('teacher_availabilities')
            .delete()
            .eq('id', id);

        if (result.error) throw result.error;
        return true;
    } catch (error) {
        console.error('删除空闲时间段失败:', error);
        return false;
    }
}

async function bookTeacherAvailability(slotId, studentId, studentName) {
    try {
        var supabase = getSupabaseClient();

        var slotResult = await supabase
            .from('teacher_availabilities')
            .select('*')
            .eq('id', slotId)
            .maybeSingle();

        if (slotResult.error || !slotResult.data) {
            throw new Error('Créneau introuvable');
        }
        if (slotResult.data.status !== 'available') {
            throw new Error('Ce créneau n\'est plus disponible');
        }
        if (new Date(slotResult.data.start_time) < new Date()) {
            throw new Error('Ce créneau a déjà expiré');
        }

        var result = await supabase
            .from('teacher_availabilities')
            .update({
                status: 'booked',
                student_id: studentId,
                student_name: studentName,
                booked_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
            })
            .eq('id', slotId)
            .eq('status', 'available')
            .select()
            .single();

        if (result.error) throw result.error;
        return result.data;
    } catch (error) {
        console.error('预约失败:', error);
        throw error;
    }
}

async function cancelBooking(slotId) {
    try {
        var supabase = getSupabaseClient();
        var result = await supabase
            .from('teacher_availabilities')
            .update({
                status: 'available',
                student_id: null,
                student_name: null,
                course_id: null,
                booked_at: null,
                updated_at: new Date().toISOString()
            })
            .eq('id', slotId)
            .eq('status', 'booked')
            .select()
            .maybeSingle();

        if (result.error) throw result.error;
        return result.data;
    } catch (error) {
        console.error('取消预约失败:', error);
        return null;
    }
}

async function bookSlotAndCreateCourse(slotId, studentId, studentName, courseType, duration, category) {
    duration = duration || 2;
    category = category || 'civique';

    try {
        var supabase = getSupabaseClient();
        var slotResult = await supabase
            .from('teacher_availabilities')
            .select('*')
            .eq('id', slotId)
            .maybeSingle();

        if (slotResult.error || !slotResult.data) {
            throw new Error('Créneau introuvable');
        }
        var slot = slotResult.data;
        if (slot.status !== 'available') throw new Error('Ce créneau n\'est plus disponible');
        if (new Date(slot.start_time) < new Date()) throw new Error('Ce créneau a déjà expiré');

  
        var studentResult = await supabase
            .from('users')
            .select('credit, french_credit')
            .eq('id', studentId)
            .single();

        if (studentResult.error) throw studentResult.error;
        var field = category === 'francais' ? 'french_credit' : 'credit';
        var studentCredit = (studentResult.data && studentResult.data[field]) || 0;
        if (studentCredit < duration) {
            throw new Error('Crédits insuffisants. Vous avez ' + studentCredit + 'h, besoin de ' + duration + 'h.');
        }

        var courseData = {
            category: category,
            student_id: studentId,
            teacher_id: slot.teacher_id,
            course_type: courseType || 'ec',
            start_time: slot.start_time,
            duration: duration,
            status: 'scheduled',
            source: 'student_booking',
            created_at: new Date().toISOString()
        };

        var courseResult = await supabase
            .from('courses_v2')
            .insert([courseData])
            .select()
            .single();

        if (courseResult.error) throw courseResult.error;
        var course = courseResult.data;

        var updateCreditData = {};
        updateCreditData[field] = studentCredit - duration;

        var creditResult = await supabase
            .from('users')
            .update(updateCreditData)
            .eq('id', studentId);

        if (creditResult.error) {
            await supabase.from('courses_v2').delete().eq('id', course.id);
            throw creditResult.error;
        }

        var slotUpdateResult = await supabase
            .from('teacher_availabilities')
            .update({
                status: 'booked',
                student_id: studentId,
                student_name: studentName,
                course_id: course.id,
                booked_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
            })
            .eq('id', slotId)
            .eq('status', 'available')
            .select()
            .single();

        if (slotUpdateResult.error) {
            await supabase.from('courses_v2').delete().eq('id', course.id);
            var rollbackData = {};
            rollbackData[field] = studentCredit;
            await supabase.from('users').update(rollbackData).eq('id', studentId);
            throw slotUpdateResult.error;
        }

        return { course: course, slot: slotUpdateResult.data };
    } catch (error) {
        console.error('预约失败:', error);
        throw error;
    }
}

async function cancelStudentBooking(courseId) {
    try {
        var supabase = getSupabaseClient();

        var courseResult = await supabase
            .from('courses_v2')
            .select('*')
            .eq('id', courseId)
            .maybeSingle();

        if (courseResult.error || !courseResult.data) {
            throw new Error('Cours introuvable');
        }
        var course = courseResult.data;
        if (course.source !== 'student_booking') throw new Error('Ce cours n\'a pas été créé par une réservation');
        if (course.status === 'cancelled') throw new Error('Ce cours est déjà annulé');

        var slotResult = await supabase
            .from('teacher_availabilities')
            .select('*')
            .eq('course_id', courseId)
            .maybeSingle();

        var field = course.category === 'francais' ? 'french_credit' : 'credit';
        var studentResult = await supabase
            .from('users')
            .select(field)
            .eq('id', course.student_id)
            .single();

        if (studentResult.data) {
            var newCredit = (studentResult.data[field] || 0) + (course.duration || 2);
            var updateData = {};
            updateData[field] = newCredit;
            await supabase.from('users').update(updateData).eq('id', course.student_id);
        }

        var courseUpdateResult = await supabase
            .from('courses_v2')
            .update({
                status: 'cancelled',
                cancel_reason: 'Annulé par l\'étudiant'
            })
            .eq('id', courseId);

        if (courseUpdateResult.error) throw courseUpdateResult.error;

        if (slotResult.data) {
            await supabase
                .from('teacher_availabilities')
                .update({
                    status: 'available',
                    student_id: null,
                    student_name: null,
                    course_id: null,
                    booked_at: null,
                    updated_at: new Date().toISOString()
                })
                .eq('id', slotResult.data.id);
        }

        return true;
    } catch (error) {
        console.error('取消预约失败:', error);
        throw error;
    }
}

// ============================================================
// 【模块五】公民考试 - 错题集（mistakes 表不变）
// ============================================================

async function recordMistakeToDB(studentInfo, question, userAnswer, testType) {
    // ============================================================
    // 1. 校验 question
    // ============================================================
    if (!question || !question.question || !question.options || !Array.isArray(question.options)) {
        console.error('❌ 记录错题失败：问题数据不完整', question);
        return null;
    }

    // ============================================================
    // 2. 把 answer 统一转成数字索引（支持 0-3 数字 / "A"-"D" 字母 / "0"-"3" 字符串）
    // ============================================================
    function normalizeAnswer(val) {
        if (val === null || val === undefined) return null;

        // 已是数字
        if (typeof val === 'number') {
            return (val >= 0 && val < question.options.length) ? val : null;
        }

        // 字符串：可能是 "A" / "a" / "B" ...
        if (typeof val === 'string') {
            var s = val.trim();
            if (s.length === 1) {
                var code = s.toUpperCase().charCodeAt(0);
                if (code >= 65 && code <= 68) {  // A-D
                    var idx = code - 65;
                    return (idx < question.options.length) ? idx : null;
                }
            }
            // 也可能是 "0" / "1" / "2" / "3"
            var n = parseInt(s, 10);
            if (!isNaN(n) && n >= 0 && n < question.options.length) {
                return n;
            }
        }

        return null;
    }

    var correctAnswer = normalizeAnswer(question.answer);
    var userAnswerIdx = normalizeAnswer(userAnswer);

    // 用户没选 → 默认 0
    if (userAnswerIdx === null) {
        userAnswerIdx = 0;
    }

    // 正确答案取不到 → 记录但警告
    if (correctAnswer === null) {
        console.warn('⚠️ 记录错题：无法解析正确答案', question.answer, '，默认为 0');
        correctAnswer = 0;
    }

    // ============================================================
    // 3. 生成稳定的 question_id（用于去重）
    // ============================================================
    var questionId = question.question_id
        || question.id
        || ('local_' + studentInfo.name + '_' + (question.question || '').substring(0, 40));

    // ============================================================
    // 4. 写入数据库
    // ============================================================
    try {
        var supabase = getSupabaseClient();

        // 先查这个学生是否已经错过这道题
        var findResult = await supabase
            .from('mistakes')
            .select('id, times_wrong')
            .eq('student_name', studentInfo.name)
            .eq('question_id', questionId)
            .maybeSingle();

        // 已有记录 → 更新
        if (findResult.data) {
            var newTimes = (findResult.data.times_wrong || 0) + 1;
            var updateResult = await supabase
                .from('mistakes')
                .update({
                    times_wrong: newTimes,
                    user_answer: userAnswerIdx,
                    correct_answer: correctAnswer,   // 🔥 顺便纠正
                    updated_at: new Date().toISOString(),
                    mastered: false
                })
                .eq('id', findResult.data.id)
                .select('id')
                .single();

            if (updateResult.error) {
                console.error('❌ 更新错题失败:', updateResult.error.message);
                return null;
            }
            return updateResult.data.id;
        }

        // 没有记录 → 插入新错题
        var mistakeData = {
            student_name: studentInfo.name,
            question_id: questionId,
            question: question.question,
            category: question.category || question.theme || question['主题'] || 'Autre',
            difficulty: question['难度'] || question.difficulty || '中等',
            options: question.options,
            correct_answer: correctAnswer,
            user_answer: userAnswerIdx,
            test_type: testType || null,
            explanation: question.explanation || question['解释'] || '',
            times_wrong: 1,
            mastered: false,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        };

        var insertResult = await supabase
            .from('mistakes')
            .insert([mistakeData])
            .select('id')
            .single();

        if (insertResult.error) {
            console.error('❌ 插入错题失败:', insertResult.error.message);
            return null;
        }
        return insertResult.data.id;

    } catch (error) {
        console.error('❌ 记录错题异常:', error);
        return null;
    }
}

async function getStudentMistakes(studentName) {
    try {
        var supabase = getSupabaseClient();
        var result = await supabase
            .from('mistakes')
            .select('*')
            .eq('student_name', studentName)
            .order('created_at', { ascending: false });
        if (result.error) throw result.error;
        return result.data || [];
    } catch (error) {
        console.error('获取错题失败:', error);
        return [];
    }
}

async function getMistakesStats(studentName) {
    try {
        var mistakes = await getStudentMistakes(studentName);
        var total = mistakes.length;
        var themesList = [];
        var seen = {};
        mistakes.forEach(function(m) {
            var t = m.category || m.theme || 'Autre';
            if (!seen[t]) { seen[t] = true; themesList.push(t); }
        });
        var mastered = mistakes.filter(function(m) { return m.mastered; }).length;
        var improvement = total > 0 ? Math.round((mastered / total) * 100) : 0;
        return { total: total, themes: themesList.length, improvement: improvement };
    } catch (error) {
        console.error('获取错题统计失败:', error);
        return { total: 0, themes: 0, improvement: 0 };
    }
}

async function deleteMistake(mistakeId) {
    try {
        var supabase = getSupabaseClient();
        var result = await supabase.from('mistakes').delete().eq('id', mistakeId);
        if (result.error) throw result.error;
        return true;
    } catch (error) {
        console.error('删除错题失败:', error);
        return false;
    }
}

async function clearAllMistakes(studentName) {
    try {
        var supabase = getSupabaseClient();
        await supabase.from('mistakes').delete().eq('student_name', studentName);
        return true;
    } catch (error) {
        console.error('清空错题失败:', error);
        return false;
    }
}

async function markMistakeAsMastered(mistakeId, mastered) {
    if (mastered === undefined) mastered = true;
    try {
        var supabase = getSupabaseClient();
        var result = await supabase
            .from('mistakes')
            .update({ mastered: mastered, updated_at: new Date().toISOString() })
            .eq('id', mistakeId);
        if (result.error) throw result.error;
        return true;
    } catch (error) {
        console.error('标记错题失败:', error);
        return false;
    }
}

// ============================================================
// 【模块六】公民考试 - 成绩记录（test_scores 表不变）
// ============================================================

async function recordTestScore(studentInfo, testResult) {
    try {
        var supabase = getSupabaseClient();
        var scoreRecord = {
            student_name: studentInfo.name || 'Étudiant',
            student_id: studentInfo.id || studentInfo.userId || null,
            test_type: testResult.testType || 'unknown',
            score: testResult.score || 0,
            total: testResult.total || 40,
            percentage: testResult.percentage || 0,
            passed: testResult.passed || false,
            test_date: new Date().toISOString(),
            details: {
                correct_count: testResult.score || 0,
                wrong_count: (testResult.total || 40) - (testResult.score || 0),
                duration: testResult.duration || null,
                question_count: testResult.questions ? testResult.questions.length : 0
            }
        };

        var result = await supabase
            .from('test_scores')
            .insert([scoreRecord])
            .select();

        if (result.error) {
            console.error('插入成绩失败:', result.error.message);
            return null;
        }
        return result.data ? result.data[0] : null;
    } catch (error) {
        console.error('记录成绩失败:', error);
        return null;
    }
}

async function getStudentScores(studentName, testType) {
    try {
        var supabase = getSupabaseClient();
        var query = supabase
            .from('test_scores')
            .select('*')
            .eq('student_name', studentName)
            .order('test_date', { ascending: false });

        if (testType) query = query.eq('test_type', testType);

        var result = await query;
        if (result.error) {
            console.error('获取成绩失败:', result.error);
            return [];
        }
        return result.data || [];
    } catch (error) {
        console.error('获取成绩失败:', error);
        return [];
    }
}

async function getScoreStats(studentName) {
    try {
        var scores = await getStudentScores(studentName);
        if (scores.length === 0) {
            return { total: 0, average: 0, best: 0, worst: 0, passed: 0, failed: 0 };
        }
        var percentages = scores.map(function(s) { return s.percentage || 0; });
        var total = scores.length;
        var sum = 0;
        percentages.forEach(function(p) { sum += p; });
        var average = Math.round(sum / total);
        var best = Math.max.apply(null, percentages);
        var worst = Math.min.apply(null, percentages);
        var passed = scores.filter(function(s) { return s.passed; }).length;
        return { total: total, average: average, best: best, worst: worst, passed: passed, failed: total - passed };
    } catch (error) {
        console.error('获取成绩统计失败:', error);
        return { total: 0, average: 0, best: 0, worst: 0, passed: 0, failed: 0 };
    }
}

// ============================================================
// 【模块七】法语模块 - 考试 / 资源 / 报名（原有表不变）
// ============================================================

async function getFrenchExams() {
    try {
        var supabase = getSupabaseClient();
        var result = await supabase
            .from('french_exams')
            .select('*')
            .order('sort_order', { ascending: true });
        if (result.error) throw result.error;
        return result.data || [];
    } catch (error) {
        console.error('获取法语考试失败:', error);
        return [];
    }
}

async function getFrenchExamById(id) {
    try {
        var supabase = getSupabaseClient();
        var result = await supabase
            .from('french_exams')
            .select('*')
            .eq('id', id)
            .single();
        if (result.error) throw result.error;
        return result.data;
    } catch (error) {
        console.error('获取法语考试失败:', error);
        return null;
    }
}

async function createFrenchExam(examData) {
    try {
        var supabase = getSupabaseClient();
        var result = await supabase
            .from('french_exams')
            .insert([examData])
            .select()
            .single();
        if (result.error) throw result.error;
        return result.data;
    } catch (error) {
        console.error('创建法语考试失败:', error);
        return null;
    }
}

async function updateFrenchExam(id, examData) {
    try {
        var supabase = getSupabaseClient();
        var result = await supabase
            .from('french_exams')
            .update(examData)
            .eq('id', id)
            .select()
            .single();
        if (result.error) throw result.error;
        return result.data;
    } catch (error) {
        console.error('更新法语考试失败:', error);
        return null;
    }
}

async function deleteFrenchExam(id) {
    try {
        var supabase = getSupabaseClient();
        var result = await supabase.from('french_exams').delete().eq('id', id);
        if (result.error) throw result.error;
        return true;
    } catch (error) {
        console.error('删除法语考试失败:', error);
        return false;
    }
}

async function getFrenchProgress(studentId) {
    try {
        var supabase = getSupabaseClient();
        var result = await supabase
            .from('french_progress')
            .select('*')
            .eq('student_id', studentId)
            .order('created_at', { ascending: false });
        if (result.error) throw result.error;
        return result.data || [];
    } catch (error) {
        console.error('获取学习进度失败:', error);
        return [];
    }
}

async function createFrenchProgress(progressData) {
    try {
        var supabase = getSupabaseClient();
        var result = await supabase
            .from('french_progress')
            .insert([progressData])
            .select()
            .single();
        if (result.error) throw result.error;
        return result.data;
    } catch (error) {
        console.error('创建学习进度失败:', error);
        return null;
    }
}

async function updateFrenchProgress(id, progressData) {
    try {
        var supabase = getSupabaseClient();
        var result = await supabase
            .from('french_progress')
            .update(progressData)
            .eq('id', id)
            .select()
            .single();
        if (result.error) throw result.error;
        return result.data;
    } catch (error) {
        console.error('更新学习进度失败:', error);
        return null;
    }
}

async function getFrenchRegistrations(studentId) {
    try {
        var supabase = getSupabaseClient();
        var result = await supabase
            .from('french_registrations')
            .select('*, exam:french_exams(*)')
            .eq('student_id', studentId);
        if (result.error) throw result.error;
        return result.data || [];
    } catch (error) {
        console.error('获取考试报名失败:', error);
        return [];
    }
}

async function createFrenchRegistration(registrationData) {
    try {
        var supabase = getSupabaseClient();
        var result = await supabase
            .from('french_registrations')
            .insert([registrationData])
            .select()
            .single();
        if (result.error) throw result.error;
        return result.data;
    } catch (error) {
        console.error('报名考试失败:', error);
        return null;
    }
}

async function getFrenchResources(level, category) {
    try {
        var supabase = getSupabaseClient();
        var query = supabase
            .from('french_resources')
            .select('*')
            .order('created_at', { ascending: false });

        if (level) query = query.eq('level', level);
        if (category) query = query.eq('category', category);

        var result = await query;
        if (result.error) throw result.error;
        return result.data || [];
    } catch (error) {
        console.error('获取学习资源失败:', error);
        return [];
    }
}

// ============================================================
// 【模块八】写作模块（writing_topics / writing_history）
// ============================================================

async function getWritingTopics(taskType, level) {
    try {
        var supabase = getSupabaseClient();
        var query = supabase
            .from('writing_topics')
            .select('*')
            .order('sort_order', { ascending: true });

        if (taskType) query = query.eq('task_type', taskType);
        if (level && level !== 'all') query = query.eq('level', level);

        var result = await query;
        if (result.error) throw result.error;
        return result.data || [];
    } catch (error) {
        console.error('获取写作题目失败:', error);
        return [];
    }
}

async function getWritingTopicById(id) {
    try {
        var supabase = getSupabaseClient();
        var result = await supabase
            .from('writing_topics')
            .select('*')
            .eq('id', id)
            .single();
        if (result.error) throw result.error;
        return result.data;
    } catch (error) {
        console.error('获取写作题目失败:', error);
        return null;
    }
}

async function createWritingTopic(topicData) {
    try {
        var supabase = getSupabaseClient();
        var result = await supabase
            .from('writing_topics')
            .insert([topicData])
            .select()
            .single();
        if (result.error) throw result.error;
        return result.data;
    } catch (error) {
        console.error('创建写作题目失败:', error);
        return null;
    }
}

async function updateWritingTopic(id, topicData) {
    try {
        var supabase = getSupabaseClient();
        var result = await supabase
            .from('writing_topics')
            .update(topicData)
            .eq('id', id)
            .select()
            .single();
        if (result.error) throw result.error;
        return result.data;
    } catch (error) {
        console.error('更新写作题目失败:', error);
        return null;
    }
}

async function deleteWritingTopic(id) {
    try {
        var supabase = getSupabaseClient();
        var result = await supabase.from('writing_topics').delete().eq('id', id);
        if (result.error) throw result.error;
        return true;
    } catch (error) {
        console.error('删除写作题目失败:', error);
        return false;
    }
}

async function saveWritingHistory(historyData) {
    try {
        var supabase = getSupabaseClient();
        var insertData = {};
        for (var k in historyData) {
            if (historyData.hasOwnProperty(k)) insertData[k] = historyData[k];
        }
        insertData.created_at = new Date().toISOString();

        var result = await supabase
            .from('writing_history')
            .insert([insertData])
            .select()
            .single();

        if (result.error) throw result.error;
        return result.data;
    } catch (error) {
        console.error('保存写作历史失败:', error);
        return null;
    }
}

async function getWritingHistory(userId, userName) {
    try {
        var supabase = getSupabaseClient();
        var result = await supabase
            .from('writing_history')
            .select('*')
            .eq('user_id', userId)
            .order('created_at', { ascending: false });
        if (result.error) throw result.error;
        return result.data || [];
    } catch (error) {
        console.error('获取写作历史失败:', error);
        return [];
    }
}

async function deleteWritingHistory(id) {
    try {
        var supabase = getSupabaseClient();
        var result = await supabase.from('writing_history').delete().eq('id', id);
        if (result.error) throw result.error;
        return true;
    } catch (error) {
        console.error('删除写作历史失败:', error);
        return false;
    }
}

// ============================================================
// 【模块九】AI 批改（Groq · TCF IRN 官方评分）
// ============================================================

var AI_SYSTEM_PROMPT = 'Tu es un correcteur officiel du TCF IRN (France Éducation International). Tu évalues les productions écrites selon le barème officiel A1-B2. Réponds toujours en français, de façon structurée et rigoureuse.';


/**
 * 唯一 AI 入口
 * @param {string} prompt   评分规则 prompt
 * @param {string} userText 学生原文
 * @param {number} retries  429 重试次数
 */
async function callAI(prompt, userText, retries) {
    retries = (retries === undefined) ? 2 : retries;

    var supabase = getSupabaseClient();
    var configResult = await supabase
        .from('app_config')
        .select('value')
        .eq('key', 'groq_api_key')
        .maybeSingle();

    if (configResult.error || !configResult.data || !configResult.data.value) {
        throw new Error('Groq API Key 未配置（app_config.groq_api_key）');
    }

    var apiKey = configResult.data.value.trim();

    var response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + apiKey
        },
        body: JSON.stringify({
            model: 'openai/gpt-oss-120b',
            messages: [
                { role: 'system', content: AI_SYSTEM_PROMPT },
                { role: 'user', content: prompt + '\n\n' + userText }
            ],
            temperature: 0.4,
            max_tokens: 2500
        })
    });

    // 429 → 退避重试
    if (response.status === 429 && retries > 0) {
        var wait = (3 - retries) * 3000;
        console.warn('⏳ Groq 429，' + (wait / 1000) + ' 秒后重试...');
        await new Promise(function(r) { setTimeout(r, wait); });
        return await callAI(prompt, userText, retries - 1);
    }

    if (!response.ok) {
        var errText = '';
        try {
            var errJson = await response.json();
            errText = (errJson.error && errJson.error.message) || JSON.stringify(errJson);
        } catch (e) {
            errText = await response.text().catch(function() { return ''; });
        }
        if (response.status === 401) throw new Error('Groq API Key 无效（401）');
        if (response.status === 429) throw new Error('Groq 配额已用完或请求过快（429），请稍后重试');
        throw new Error('Groq API ' + response.status + ': ' + errText);
    }

    var data = await response.json();
    var result = (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) || '';
    if (!result) throw new Error('Groq 返回空');
    return result;
}


/**
 * 生成 TCF IRN 官方评分 prompt
 */
function getWritingPrompt(taskType, topicTitle, wordMin, wordMax) {
    var taskLabel = taskType === 'tache1' ? 'Message personnel'
                  : taskType === 'tache2' ? 'Récit / Compte rendu'
                  : 'Argumentation / Opinion';

    var basePrompt =
        'Tu es un correcteur officiel du TCF IRN (Test de Connaissance du Français — Intégration, Résidence et Nationalité),' +
        'délivré par France Éducation International.\n' +
        'Tu évalues selon le barème officiel en vigueur (réforme 2025 : le niveau maximum évalué est B2).\n\n' +

        '═══════════════════════════════════════════\n' +
        '📌 SUJET\n' +
        '═══════════════════════════════════════════\n' +
        'Tâche : ' + taskLabel + '\n' +
        'Sujet : ' + topicTitle + '\n' +
        'Longueur exigée : ' + wordMin + '-' + wordMax + ' mots\n\n' +

        '═══════════════════════════════════════════\n' +
        '📊 GRILLE TCF IRN — A1 → B2 UNIQUEMENT\n' +
        '═══════════════════════════════════════════\n' +
        'Le TCF IRN évalue le français général JUSQU\'AU B2 (niveau requis pour la naturalisation depuis 2026).\n' +
        '❌ NE PAS attribuer C1 ou C2. Si le texte dépasse le B2, noter B2.\n\n' +

        'Deux compétences officielles évaluées :\n' +
        '1. Compétence linguistique : étendue lexicale, correction grammaticale, orthographe, complexité syntaxique\n' +
        '2. Compétence pragmatique : cohérence, cohésion, développement thématique, adaptation au destinataire et registre\n\n' +

        '─────────────── DESCRIPTEURS DE NIVEAU ───────────────\n\n' +

        '📌 A1 — Élémentaire\n' +
        '• Phrases simples et isolées, vocabulaire très basique\n' +
        '• Informations personnelles minimales\n' +
        '• Erreurs fréquentes gênant la compréhension\n' +
        '• Aucune structure textuelle identifiable\n\n' +

        '📌 A2 — Élémentaire avancé\n' +
        '• Phrases courtes, connecteurs simples (et, mais, parce que)\n' +
        '• Décrit des situations familières, besoins concrets\n' +
        '• Erreurs nombreuses mais compréhensibles\n' +
        '• Structure minimale (début/fin), pas de paragraphes\n\n' +

        '📌 B1 — Intermédiaire (seuil)\n' +
        '• Discours simple et cohérent ; connecteurs basiques (d\'abord, ensuite, donc, par exemple)\n' +
        '• Raconte une expérience, donne une opinion brève avec justification\n' +
        '• Erreurs présentes mais sans gêne majeure\n' +
        '• Structure reconnaissable : intro / développement / conclusion, quelques paragraphes\n' +
        '• Registre globalement adapté\n\n' +

        '📌 B2 — Intermédiaire avancé (NIVEAU REQUIS NATURALISATION)\n' +
        '• Discours clair et détaillé ; connecteurs variés (cependant, néanmoins, par conséquent, en définitive)\n' +
        '• Argumentation structurée avec exemples concrets\n' +
        '• Nuances explicites (certes... mais, non seulement... mais aussi)\n' +
        '• Lexique étendu ; tournures impersonnelles (force est de constater, il convient de)\n' +
        '• Erreurs rares et mineures, sans gêne pour la compréhension\n' +
        '• Structure claire : paragraphes distincts et transitions efficaces\n' +
        '• Registre pleinement adapté : vouvoiement si formel, tutoiement si familier\n\n' +

        '═══════════════════════════════════════════\n' +
        '⚠️ POINTS CRITIQUES À PÉNALISER\n' +
        '═══════════════════════════════════════════\n' +
        '1. HORS SUJET → plafonner à A1/A2\n' +
        '2. LONGUEUR NON RESPECTÉE → pénalité explicite (trop court ou trop long)\n' +
        '3. REGISTRE INADAPTÉ (ex. « Salut » dans une argumentation formelle) → plafonner la compétence pragmatique\n' +
        '4. AUCUNE STRUCTURE (bloc unique sans paragraphes) → plafonner la cohérence\n' +
        '5. CONNECTEURS TROP BASIQUES en T2/T3 (et, mais, parce que uniquement) → plafonner à B1\n' +
        '6. PHRASES PRÉ-FABRIQUÉES copiées-collées → détection et pénalité\n' +
        '7. FAUTES D\'ACCORD ÉLÉMENTAIRES (relecture absente) → impact sur la note finale\n\n' +

        '═══════════════════════════════════════════\n' +
        '📝 FORMAT DE RÉPONSE (en français, structuré)\n' +
        '═══════════════════════════════════════════\n\n' +

        '📝 **Évaluation**\n' +
        '[2-3 phrases : niveau atteint, points forts, points faibles]\n\n' +

        '✅ **Ce qui est bien**\n' +
        '[2-4 points positifs concrets, cités du texte]\n\n' +

        '🔧 **À améliorer**\n' +
        '[2-4 points précis avec corrections suggérées]\n\n' +

        '💡 **Conseils pour viser le niveau supérieur**\n' +
        '[Conseils TCF IRN : connecteurs, structures, registre]\n\n' +

        '📄 **Proposition de correction (niveau B2 visé)**\n' +
        '[Réécriture du texte : garder les idées, corriger langue et structure]\n\n' +

        '📊 **Niveau CECRL estimé : [A1 / A2 / B1 / B2]**\n' +
        '[Justification concise selon les descripteurs ci-dessus]\n' +
        '**Note : X / 20** (barème : A1 = 1-5 · A2 = 6-9 · B1 = 10-13 · B2 = 14-17)\n\n' +

        '---\n\n' +
        'TEXTE DE L\'ÉLÈVE :';

    return basePrompt;
}

// ============================================================
// 【模块十】语法模块
// ============================================================

async function getGrammarTopics(level) {
    try {
        var supabase = getSupabaseClient();
        var result = await supabase
            .from('grammar_topics')
            .select('*')
            .eq('level', level)
            .order('sort_order', { ascending: true });
        if (result.error) throw result.error;
        return result.data || [];
    } catch (error) {
        console.error('获取语法知识点失败:', error);
        return [];
    }
}

async function getGrammarExercises(level, topicId) {
    try {
        var supabase = getSupabaseClient();
        var query = supabase
            .from('grammar_exercises')
            .select('*')
            .eq('level', level)
            .order('sort_order', { ascending: true });
        if (topicId) query = query.eq('topic_id', topicId);
        var result = await query;
        if (result.error) throw result.error;
        return result.data || [];
    } catch (error) {
        console.error('获取语法习题失败:', error);
        return [];
    }
}

async function getGrammarQuizzes(level) {
    try {
        var supabase = getSupabaseClient();
        var result = await supabase
            .from('grammar_quizzes')
            .select('*')
            .eq('level', level)
            .order('sort_order', { ascending: true });
        if (result.error) throw result.error;
        return result.data || [];
    } catch (error) {
        console.error('获取语法测验失败:', error);
        return [];
    }
}

async function getQuizQuestions(quizId) {
    try {
        var supabase = getSupabaseClient();
        var result = await supabase
            .from('grammar_quiz_questions')
            .select('exercise_id, sort_order, grammar_exercises (*)')
            .eq('quiz_id', quizId)
            .order('sort_order', { ascending: true });
        if (result.error) throw result.error;
        return (result.data || []).map(function(item) {
            var ex = item.grammar_exercises || {};
            var out = {};
            for (var k in ex) {
                if (ex.hasOwnProperty(k)) out[k] = ex[k];
            }
            out.quiz_id = quizId;
            return out;
        });
    } catch (error) {
        console.error('获取测验题目失败:', error);
        return [];
    }
}

async function saveGrammarProgress(progressData) {
    try {
        var supabase = getSupabaseClient();
        var key = progressData.topic_id ? 'topic_id' : 'exercise_id';
        var val = progressData.topic_id || progressData.exercise_id || progressData.quiz_id;

        var checkResult = await supabase
            .from('grammar_progress')
            .select('id')
            .eq('user_id', progressData.user_id)
            .eq(key, val)
            .maybeSingle();

        if (checkResult.data) {
            var updateResult = await supabase
                .from('grammar_progress')
                .update({
                    status: progressData.status,
                    score: progressData.score || 0,
                    attempts: 1,
                    last_attempt_at: new Date().toISOString(),
                    updated_at: new Date().toISOString()
                })
                .eq('id', checkResult.data.id);
            if (updateResult.error) throw updateResult.error;
        } else {
            var insertResult = await supabase
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
            if (insertResult.error) throw insertResult.error;
        }
        return true;
    } catch (error) {
        console.error('保存语法进度失败:', error);
        return false;
    }
}

async function getGrammarProgress(userId) {
    try {
        var supabase = getSupabaseClient();
        var result = await supabase
            .from('grammar_progress')
            .select('*')
            .eq('user_id', userId);
        if (result.error) throw result.error;
        return result.data || [];
    } catch (error) {
        console.error('获取语法进度失败:', error);
        return [];
    }
}

// ============================================================
// 【模块十一】阅读模块
// ============================================================

async function getReadingTexts(level) {
    try {
        var supabase = getSupabaseClient();
        var query = supabase.from('reading_texts').select('*').order('title', { ascending: true });
        if (level) query = query.eq('level', level);
        var result = await query;
        if (result.error) throw result.error;
        return result.data || [];
    } catch (error) {
        console.error('获取阅读文章失败:', error);
        return [];
    }
}

async function getReadingQuestions(textId) {
    try {
        var supabase = getSupabaseClient();
        var result = await supabase
            .from('reading_questions')
            .select('*')
            .eq('text_id', textId)
            .order('sort_order', { ascending: true });
        if (result.error) throw result.error;
        return result.data || [];
    } catch (error) {
        console.error('获取阅读题目失败:', error);
        return [];
    }
}

async function getReadingQuestionsByLevel(level) {
    try {
        var supabase = getSupabaseClient();
        var result = await supabase
            .from('reading_questions')
            .select('*, text:reading_texts!inner(level)')
            .eq('text.level', level);
        if (result.error) throw result.error;
        return result.data || [];
    } catch (error) {
        console.error('获取阅读题目失败:', error);
        return [];
    }
}

async function saveReadingProgress(progressData) {
    try {
        var supabase = getSupabaseClient();
        var checkResult = await supabase
            .from('reading_progress')
            .select('id')
            .eq('user_id', progressData.user_id)
            .eq('text_id', progressData.text_id)
            .maybeSingle();

        if (checkResult.data) {
            var updateResult = await supabase
                .from('reading_progress')
                .update({ status: progressData.status, updated_at: new Date().toISOString() })
                .eq('id', checkResult.data.id);
            if (updateResult.error) throw updateResult.error;
        } else {
            var insertResult = await supabase
                .from('reading_progress')
                .insert([{
                    user_id: progressData.user_id,
                    text_id: progressData.text_id,
                    status: progressData.status || 'in_progress',
                    created_at: new Date().toISOString(),
                    updated_at: new Date().toISOString()
                }]);
            if (insertResult.error) throw insertResult.error;
        }
        return true;
    } catch (error) {
        console.error('保存阅读进度失败:', error);
        return false;
    }
}

async function getReadingProgress(userId) {
    try {
        var supabase = getSupabaseClient();
        var result = await supabase
            .from('reading_progress')
            .select('*')
            .eq('user_id', userId);
        if (result.error) throw result.error;
        return result.data || [];
    } catch (error) {
        console.error('获取阅读进度失败:', error);
        return [];
    }
}

// ============================================================
// 【模块十二】听力模块
// ============================================================

async function getListeningTexts(level) {
    try {
        var supabase = getSupabaseClient();
        var query = supabase.from('listening_texts').select('*').order('sort_order', { ascending: true });
        if (level) query = query.eq('level', level);
        var result = await query;
        if (result.error) throw result.error;
        return result.data || [];
    } catch (error) {
        console.error('获取听力失败:', error);
        return [];
    }
}

async function getListeningQuestions(textId) {
    try {
        var supabase = getSupabaseClient();
        var result = await supabase
            .from('listening_questions')
            .select('*')
            .eq('text_id', textId)
            .order('sort_order', { ascending: true });
        if (result.error) throw result.error;
        return result.data || [];
    } catch (error) {
        console.error('获取听力题目失败:', error);
        return [];
    }
}

async function saveListeningProgress(progressData) {
    try {
        var supabase = getSupabaseClient();
        var checkResult = await supabase
            .from('listening_progress')
            .select('id')
            .eq('user_id', progressData.user_id)
            .eq('text_id', progressData.text_id)
            .maybeSingle();

        if (checkResult.data) {
            var updateResult = await supabase
                .from('listening_progress')
                .update({
                    status: progressData.status,
                    score: progressData.score || 0,
                    attempts: 1,
                    last_attempt_at: new Date().toISOString(),
                    updated_at: new Date().toISOString()
                })
                .eq('id', checkResult.data.id);
            if (updateResult.error) throw updateResult.error;
        } else {
            var insertResult = await supabase
                .from('listening_progress')
                .insert([{
                    user_id: progressData.user_id,
                    text_id: progressData.text_id,
                    status: progressData.status || 'in_progress',
                    score: progressData.score || 0,
                    attempts: 1,
                    last_attempt_at: new Date().toISOString(),
                    created_at: new Date().toISOString(),
                    updated_at: new Date().toISOString()
                }]);
            if (insertResult.error) throw insertResult.error;
        }
        return true;
    } catch (error) {
        console.error('保存听力进度失败:', error);
        return false;
    }
}

async function getListeningProgress(userId) {
    try {
        var supabase = getSupabaseClient();
        var result = await supabase
            .from('listening_progress')
            .select('*')
            .eq('user_id', userId);
        if (result.error) throw result.error;
        return result.data || [];
    } catch (error) {
        console.error('获取听力进度失败:', error);
        return [];
    }
}

// ============================================================
// 【模块十三】预注册
// ============================================================

async function getPreRegistrations() {
    try {
        var supabase = getSupabaseClient();
        var result = await supabase
            .from('pre_registrations')
            .select('*')
            .order('created_at', { ascending: false });
        if (result.error) throw result.error;
        return result.data || [];
    } catch (error) {
        console.error('获取预注册失败:', error);
        return [];
    }
}
// ============================================================
// 【模块十四】TCF IRN 口语训练
// ============================================================

var ORAL_SYSTEM_PROMPT = 
    'Tu es un examinateur officiel du TCF IRN (France Éducation International). ' +
    'Tu conduis un entretien oral en français avec un candidat qui prépare le TCF IRN. ' +
    'Tu poses des questions naturelles, tu écoutes attentivement et tu réagis aux réponses du candidat. ' +
    'Tu ne corriges pas pendant l\'entretien. Tu réponds toujours en français.';


/**
 * Whisper 转写（口语专用 key）
 */
async function transcribeAudioOral(audioBlob) {
    var supabase = getSupabaseClient();
    var { data } = await supabase
        .from('app_config')
        .select('value')
        .eq('key', 'groq_api_key_oral')
        .single();

    if (!data || !data.value) throw new Error('Clé API orale non configurée');

    var formData = new FormData();
    formData.append('file', audioBlob, 'audio.webm');
    formData.append('model', 'whisper-large-v3');
    formData.append('language', 'fr');
    formData.append('response_format', 'json');
    formData.append('temperature', '0');

    var res = await fetch('https://api.groq.com/openai/v1/audio/transcriptions', {
        method: 'POST',
        headers: { 'Authorization': 'Bearer ' + data.value },
        body: formData
    });

    if (!res.ok) {
        var err = await res.text();
        throw new Error('Transcription échouée: ' + res.status);
    }
    var json = await res.json();
    return json.text || '';
}


/**
 * 考官对话回复
 */
async function examinerReplyOral(taskCode, topicPrompt, history) {
    var supabase = getSupabaseClient();
    var { data } = await supabase
        .from('app_config')
        .select('value')
        .eq('key', 'groq_api_key_oral')
        .single();

    if (!data || !data.value) throw new Error('Clé API orale non configurée');

    // 构造对话
    var messages = [{ role: 'system', content: ORAL_SYSTEM_PROMPT }];
    messages.push({
        role: 'system',
        content: 'Tâche en cours: ' + taskCode + '\nSujet: ' + topicPrompt + '\n\n' +
                 'Pose des questions courtes et naturelles (1-2 phrases max). ' +
                 'Rebondis sur ce que dit le candidat pour approfondir. ' +
                 'Ne corrige pas. Ne donne pas de conseil.'
    });

    history.forEach(m => {
        messages.push({
            role: m.role === 'user' ? 'user' : 'assistant',
            content: m.text
        });
    });

    var res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + data.value
        },
        body: JSON.stringify({
            model: 'openai/gpt-oss-120b',
            messages: messages,
            temperature: 0.7,
            max_tokens: 300
        })
    });

    if (!res.ok) throw new Error('Réponse IA échouée: ' + res.status);
    var json = await res.json();
    return json.choices[0].message.content;
}


/**
 * 评分
 */
async function evaluateOralAnswer(taskCode, topicPrompt, history, durationSec) {
    var supabase = getSupabaseClient();
    var { data } = await supabase
        .from('app_config')
        .select('value')
        .eq('key', 'groq_api_key_oral')
        .single();

    if (!data || !data.value) throw new Error('Clé API orale non configurée');

    var transcript = history.map(m =>
        (m.role === 'user' ? 'CANDIDAT: ' : 'EXAMINATEUR: ') + m.text
    ).join('\n');

    var evalPrompt =
        'Tu es correcteur officiel du TCF IRN. Évalue la performance orale du candidat ci-dessous.\n\n' +
        '📌 Tâche : ' + taskCode + '\n' +
        '📌 Sujet : ' + topicPrompt + '\n' +
        '⏱️ Durée : ' + durationSec + ' secondes\n\n' +
        '═══════════════════════════\n' +
        '📊 CRITÈRES OFFICIELS TCF IRN (A1 → B2)\n' +
        '═══════════════════════════\n' +
        '1. Interaction : capacité à échanger, rebondir, clarifier\n' +
        '2. Réponse à la tâche : respect de la consigne\n' +
        '3. Développement : richesse et longueur des réponses\n' +
        '4. Vocabulaire : étendue et précision\n' +
        '5. Grammaire : contrôle des structures\n' +
        '6. Prononciation : intelligibilité (déduite du transcript)\n' +
        '7. Fluidité : continuité du discours\n\n' +
        'Niveau maximum : B2 (pas de C1/C2 au TCF IRN).\n\n' +
        '═══════════════════════════\n' +
        '📝 FORMAT DE RÉPONSE\n' +
        '═══════════════════════════\n\n' +
        '📊 **Niveau CECRL estimé : [A1/A2/B1/B2]**\n' +
        '**Note : X / 20** (A1=1-5, A2=6-9, B1=10-13, B2=14-17)\n\n' +
        '✅ **Points forts**\n[2-3 points concrets]\n\n' +
        '🔧 **Axes d\'amélioration**\n[2-3 points précis avec suggestions]\n\n' +
        '💡 **Conseils TCF IRN**\n[2-3 conseils spécifiques]\n\n' +
        '📄 **Exemple de réponse visée B2**\n[Une réponse modèle au sujet posé, niveau B2]\n\n' +
        '---\n\n' +
        'TRANSCRIPTION DE L\'ENTRETIEN :\n' + transcript;

    var res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + data.value
        },
        body: JSON.stringify({
            model: 'openai/gpt-oss-120b',
            messages: [
                { role: 'system', content: 'Tu es correcteur officiel TCF IRN.' },
                { role: 'user', content: evalPrompt }
            ],
            temperature: 0.3,
            max_tokens: 2500
        })
    });

    if (!res.ok) throw new Error('Évaluation échouée: ' + res.status);
    var json = await res.json();
    var feedback = json.choices[0].message.content;

    // 解析 score / level
    var score = null, level = null;
    var sm = feedback.match(/Note\s*[:：]?\s*([\d.]+)\s*\/\s*(\d+)/);
    if (sm) score = parseFloat(sm[1]);
    var lm = feedback.match(/Niveau\s*(?:CECRL)?[^\n]*?([A-C][12])/i);
    if (lm) level = lm[1].toUpperCase();

    if (score === null && level) {
        var fallback = { 'A1': 3, 'A2': 8, 'B1': 12, 'B2': 16 };
        score = fallback[level] || null;
    }

    return { score: score, level: level, feedback: feedback };
}
// ============================================================
// 导出到 window.supabaseAuth
// ============================================================
window.supabaseAuth = {
    // 工具
    getSupabaseClient: getSupabaseClient,
    getTypeLabel: getTypeLabel,
    getTypeClass: getTypeClass,

    // 用户
    validateUser: validateUser,
    validateStudent: validateStudent,
    validateFrenchUser: validateFrenchUser,
    checkAccess: checkAccess,
    checkFrenchAccess: checkFrenchAccess,
    getUserById: getUserById,
    getUsersByRole: getUsersByRole,
    getUsersByModule: getUsersByModule,
    getAllUsers: getAllUsers,
    getFrenchUsers: getFrenchUsers,
    getFrenchStudents: getFrenchStudents,
    getFrenchTeachers: getFrenchTeachers,
    createUser: createUser,
    createFrenchUser: createFrenchUser,
    updateUser: updateUser,
    updateFrenchUser: updateFrenchUser,
    updateStudentEmail: updateStudentEmail,
    deleteUser: deleteUser,
    deleteFrenchUser: deleteFrenchUser,

    // 课时
    deductCredit: deductCredit,
    refundCredit: refundCredit,

    // 课程
    getCourses: getCourses,
    getFrenchCourses: getFrenchCourses,
    getCourseById: getCourseById,
    createCourse: createCourse,
    updateCourse: updateCourse,
    updateFrenchCourse: updateCourse,
    deleteCourse: deleteCourse,
    deleteFrenchCourse: deleteFrenchCourse,
    forceDeleteFrenchCourse: forceDeleteFrenchCourse,
    cancelCourse: cancelCourse,
    getCoursesStats: getCoursesStats,
    getFrenchCoursesStats: getFrenchCoursesStats,

    // 空闲时间
    getTeacherAvailabilities: getTeacherAvailabilities,
    getAllAvailableSlots: getAllAvailableSlots,
    getAllTeachersAvailableSlots: getAllTeachersAvailableSlots,
    createTeacherAvailability: createTeacherAvailability,
    deleteTeacherAvailability: deleteTeacherAvailability,
    bookTeacherAvailability: bookTeacherAvailability,
    cancelBooking: cancelBooking,
    bookSlotAndCreateCourse: bookSlotAndCreateCourse,
    cancelStudentBooking: cancelStudentBooking,

    // 错题
    recordMistake: recordMistakeToDB,
    getStudentMistakes: getStudentMistakes,
    getMistakesStats: getMistakesStats,
    markMistakeAsMastered: markMistakeAsMastered,
    deleteMistake: deleteMistake,
    clearAllMistakes: clearAllMistakes,

    // 成绩
    recordTestScore: recordTestScore,
    getStudentScores: getStudentScores,
    getScoreStats: getScoreStats,

    // 法语考试
    getFrenchExams: getFrenchExams,
    getFrenchExamById: getFrenchExamById,
    createFrenchExam: createFrenchExam,
    updateFrenchExam: updateFrenchExam,
    deleteFrenchExam: deleteFrenchExam,

    // 法语进度
    getFrenchProgress: getFrenchProgress,
    createFrenchProgress: createFrenchProgress,
    updateFrenchProgress: updateFrenchProgress,

    // 法语报名
    getFrenchRegistrations: getFrenchRegistrations,
    createFrenchRegistration: createFrenchRegistration,

    // 法语资源
    getFrenchResources: getFrenchResources,

    // 写作
    getWritingTopics: getWritingTopics,
    getWritingTopicById: getWritingTopicById,
    createWritingTopic: createWritingTopic,
    updateWritingTopic: updateWritingTopic,
    deleteWritingTopic: deleteWritingTopic,
    saveWritingHistory: saveWritingHistory,
    getWritingHistory: getWritingHistory,
    deleteWritingHistory: deleteWritingHistory,
    callAI: callAI,
    getWritingPrompt: getWritingPrompt,

    // 语法
    getGrammarTopics: getGrammarTopics,
    getGrammarExercises: getGrammarExercises,
    getGrammarQuizzes: getGrammarQuizzes,
    getQuizQuestions: getQuizQuestions,
    saveGrammarProgress: saveGrammarProgress,
    getGrammarProgress: getGrammarProgress,

    // 阅读
    getReadingTexts: getReadingTexts,
    getReadingQuestions: getReadingQuestions,
    getReadingQuestionsByLevel: getReadingQuestionsByLevel,
    saveReadingProgress: saveReadingProgress,
    getReadingProgress: getReadingProgress,

    // 听力
    getListeningTexts: getListeningTexts,
    getListeningQuestions: getListeningQuestions,
    saveListeningProgress: saveListeningProgress,
    getListeningProgress: getListeningProgress,

    // 预注册
    getPreRegistrations: getPreRegistrations,
        // TCF IRN 口语
    transcribeAudioOral: transcribeAudioOral,
    examinerReplyOral: examinerReplyOral,
    evaluateOralAnswer: evaluateOralAnswer
};

console.log('✅ Supabase 配置 v3 已加载');
console.log('📚 方法数: ' + Object.keys(window.supabaseAuth).length);
console.log('📋 users 表 | courses_v2 表');