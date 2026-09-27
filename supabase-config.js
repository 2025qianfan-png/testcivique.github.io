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
        var query = supabase
            .from('courses_v2')
            .select('*')
            .order('start_time', { ascending: true });

        if (userRole === 'teacher') {
            query = query.eq('teacher_id', userId);
        } else if (userRole === 'stu' || userRole === 'stu_fr' || userRole === 'stu_all') {
            query = query.eq('student_id', userId);
        }

        if (category) {
            query = query.eq('category', category);
        }

        var result = await query;
        if (result.error) throw result.error;
        var data = result.data || [];

        // 手动关联老师/学生名字
        if (data.length > 0) {
            var userIds = [];
            var seen = {};
            data.forEach(function(c) {
                if (c.teacher_id && !seen[c.teacher_id]) {
                    seen[c.teacher_id] = true;
                    userIds.push(c.teacher_id);
                }
                if (c.student_id && !seen[c.student_id]) {
                    seen[c.student_id] = true;
                    userIds.push(c.student_id);
                }
            });

            if (userIds.length > 0) {
                var usersResult = await supabase
                    .from('users')
                    .select('id, name, email')
                    .in('id', userIds);

                if (usersResult.data) {
                    var userMap = {};
                    usersResult.data.forEach(function(u) {
                        userMap[u.id] = u;
                    });
                    data.forEach(function(c) {
                        if (c.teacher_id) c.teacher = userMap[c.teacher_id] || null;
                        if (c.student_id) c.student = userMap[c.student_id] || null;
                    });
                }
            }
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

        var fetchResult = await supabase
            .from('courses_v2')
            .select('*')
            .eq('id', id)
            .single();

        if (fetchResult.error) throw fetchResult.error;
        var oldCourse = fetchResult.data;

        var category = newData.category || oldCourse.category;
        var oldStatus = oldCourse.status;
        var newStatus = newData.status || oldStatus;
        var oldDuration = oldCourse.duration || 2;
        var newDuration = newData.duration !== undefined ? newData.duration : oldDuration;
        var oldStudentId = oldCourse.student_id;
        var newStudentId = newData.student_id !== undefined ? newData.student_id : oldStudentId;

        function isConsuming(s) {
            return s === 'scheduled' || s === 'in_progress' || s === 'completed';
        }

        var oldConsumes = isConsuming(oldStatus);
        var newConsumes = isConsuming(newStatus);

        if (oldStudentId !== newStudentId) {
            if (oldConsumes) await refundCredit(oldStudentId, oldDuration, category);
            if (newConsumes) await deductCredit(newStudentId, newDuration, category);
        } else {
            if (oldConsumes && !newConsumes) {
                await refundCredit(oldStudentId, oldDuration, category);
            } else if (!oldConsumes && newConsumes) {
                await deductCredit(oldStudentId, newDuration, category);
            } else if (oldConsumes && newConsumes) {
                var diff = newDuration - oldDuration;
                if (diff > 0) {
                    await deductCredit(oldStudentId, diff, category);
                } else if (diff < 0) {
                    await refundCredit(oldStudentId, -diff, category);
                }
            }
        }

        var updateData = {};
        for (var k in newData) {
            if (newData.hasOwnProperty(k)) updateData[k] = newData[k];
        }
        updateData.updated_at = new Date().toISOString();

        var result = await supabase
            .from('courses_v2')
            .update(updateData)
            .eq('id', id)
            .select()
            .single();

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
            .in('status', ['available', 'booked'])
            .or('start_time.lt.' + availabilityData.end_time + ',end_time.gt.' + availabilityData.start_time);

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
            .single();

        if (checkResult.error) throw checkResult.error;
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
            .single();

        if (slotResult.error) throw slotResult.error;
        if (slotResult.data.status !== 'available') throw new Error('Ce créneau n\'est plus disponible');
        if (new Date(slotResult.data.start_time) < new Date()) throw new Error('Ce créneau a déjà expiré');

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
                booked_at: null,
                updated_at: new Date().toISOString()
            })
            .eq('id', slotId)
            .eq('status', 'booked')
            .select()
            .single();

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
            .single();

        if (slotResult.error) throw slotResult.error;
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
            .single();

        if (courseResult.error) throw courseResult.error;
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
    if (userAnswer === null || userAnswer === undefined || userAnswer < 0) {
        userAnswer = 0;
    }
    if (!question || !question.question || !question.options || !Array.isArray(question.options)) {
        console.error('问题数据不完整');
        return null;
    }

    var questionId = question.question_id || question.id || ('local_' + Date.now());

    try {
        var supabase = getSupabaseClient();

        var findResult = await supabase
            .from('mistakes')
            .select('id, times_wrong, mastered')
            .eq('student_name', studentInfo.name)
            .eq('question_id', questionId)
            .maybeSingle();

        if (findResult.data) {
            var updateResult = await supabase
                .from('mistakes')
                .update({
                    times_wrong: findResult.data.times_wrong + 1,
                    user_answer: userAnswer,
                    updated_at: new Date().toISOString(),
                    mastered: false
                })
                .eq('id', findResult.data.id)
                .select()
                .single();

            if (updateResult.error) return null;
            return updateResult.data.id;
        }

        var mistakeData = {
            student_name: studentInfo.name,
            question_id: questionId,
            question: question.question,
            category: question.category || question.theme || question['主题'] || 'Autre',
            difficulty: question['难度'] || question.difficulty || '中等',
            options: question.options,
            correct_answer: question.answer,
            user_answer: userAnswer,
            test_type: testType,
            explanation: question.explanation || question['解释'] || '',
            times_wrong: 1,
            mastered: false,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        };

        var insertResult = await supabase
            .from('mistakes')
            .insert([mistakeData])
            .select()
            .single();

        if (insertResult.error) return null;
        return insertResult.data.id;
    } catch (error) {
        console.error('记录错题失败:', error);
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
// 【模块九】AI 批改（优先 Mistral，备用 Gemini）
// ============================================================

async function callMistralAI(prompt, userText) {
    try {
        var supabase = getSupabaseClient();
        var configResult = await supabase
            .from('app_config')
            .select('value')
            .eq('key', 'mistral_api_key')
            .single();

        if (configResult.error || !configResult.data) {
            console.warn('⚠️ Mistral API Key 未配置，尝试 Gemini...');
            return callGeminiAI(prompt, userText);
        }

        var apiKey = configResult.data.value;
        var url = 'https://api.mistral.ai/v1/chat/completions';

        var response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + apiKey
            },
            body: JSON.stringify({
                model: 'mistral-small-latest',
                messages: [
                    { role: 'system', content: 'Tu es un professeur de français expert DELF, spécialiste en évaluation des niveaux A1 à C2 du CECRL. Réponds toujours en français.' },
                    { role: 'user', content: prompt + '\n\n' + userText }
                ],
                temperature: 0.7,
                max_tokens: 2048
            })
        });

        if (!response.ok) {
            if (response.status === 429) {
                return callGeminiAI(prompt, userText);
            }
            throw new Error('Mistral API 错误: ' + response.status);
        }

        var dataResponse = await response.json();
        var result = (dataResponse.choices && dataResponse.choices[0] && dataResponse.choices[0].message && dataResponse.choices[0].message.content) || '';
        if (!result) throw new Error('Mistral 未返回有效结果');
        return result;
    } catch (error) {
        console.error('❌ Mistral 调用失败:', error.message);
        return callGeminiAI(prompt, userText);
    }
}

async function callGeminiAI(prompt, userText) {
    try {
        var supabase = getSupabaseClient();
        var configResult = await supabase
            .from('app_config')
            .select('value')
            .eq('key', 'gemini_api_key')
            .single();

        if (configResult.error || !configResult.data) {
            throw new Error('没有可用的 AI API Key');
        }

        var apiKey = configResult.data.value;
        var MODEL = 'gemini-2.0-flash-lite-001';
        var url = 'https://generativelanguage.googleapis.com/v1beta/models/' + MODEL + ':generateContent?key=' + apiKey;

        var response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt + '\n\n' + userText }] }],
                generationConfig: { temperature: 0.7, maxOutputTokens: 2048 }
            })
        });

        if (!response.ok) {
            var errorJson = await response.json().catch(function() { return {}; });
            throw new Error('Gemini API 错误: ' + ((errorJson.error && errorJson.error.message) || response.status));
        }

        var dataResponse = await response.json();
        var result = (dataResponse.candidates && dataResponse.candidates[0] && dataResponse.candidates[0].content && dataResponse.candidates[0].content.parts && dataResponse.candidates[0].content.parts[0] && dataResponse.candidates[0].content.parts[0].text) || '';
        if (!result) throw new Error('Gemini 未返回有效结果');
        return result;
    } catch (error) {
        console.error('❌ Gemini 调用失败:', error);
        throw error;
    }
}

function getWritingPrompt(taskType, topicTitle, wordMin, wordMax) {
    var basePrompt = 'Tu es un professeur de français expert DELF.\n\n' +
        '📌 SUJET : ' + topicTitle + '\n' +
        '📏 NOMBRE DE MOTS : ' + wordMin + '-' + wordMax + ' mots\n\n' +
        'À la fin, indique le niveau CECRL estimé (A1-C2) avec justification.\n\n' +
        'RÉPONDS EN FRANÇAIS :\n\n' +
        '📝 Évaluation\n' +
        '✅ Ce qui est bien\n' +
        '🔧 À améliorer\n' +
        '💡 Conseils\n' +
        '📄 Proposition de correction\n' +
        '📊 Niveau CECRL estimé\n\n' +
        '---\n\nTEXTE DE L\'ÉLÈVE :';

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
    callMistralAI: callMistralAI,
    callGeminiAI: callGeminiAI,
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
    getPreRegistrations: getPreRegistrations
};

console.log('✅ Supabase 配置 v3 已加载');
console.log('📚 方法数: ' + Object.keys(window.supabaseAuth).length);
console.log('📋 users 表 | courses_v2 表');