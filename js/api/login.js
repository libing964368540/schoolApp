/**
 * 登陆接口
 * @param {Object} username 用户名
 * @param {Object} pwd		密码	
 * @param {Object} success	回调
 */
function login(opt) {
	req({
		url: '/account/login.action',
		data: opt.data,
		apiName: '登陆',
		success: function(data) {
			opt.success(data);
		}
	})
}
/**
 * 退出登陆
 */
function loginOut(cb) {
	req({
		url: '/account/out.action',
		data:{},
		apiName: '退出登陆',
		success: function() {
			plus.storage.removeItem('token');
			plus.storage.removeItem('faid');
			plus.storage.removeItem('username');
			plus.storage.removeItem('role');
			//对应的学生id
		    plus.storage.removeItem('Forfamily_faid');
			//对应的学生数据
			plus.storage.removeItem('Forfamily_userinfo');
			//对应的学生用户名
			plus.storage.removeItem('Forfamily_username');
//			plus.runtime.quit();
			cb();
		}
	})
}

/**
 * 修改密码
 */
function editPwd(opt) {
	req({
		url: '/account/modificationPassword.action',
		data:opt.data,
		apiName: '修改密码',
		success: function(data) {
			opt.success(data);
		}
	})
}
/*
 * 通过家长账号获取对应的学生信息
 * */
function ForFamily(opt) {
	req({
		url: '/accountStudent/getStudentForFamily.action',
		data:opt.data,
		apiName: '通过家长账号获取对应的学生信息',
		success: function(data) {
			opt.success(data);
		}
	})
}
/*
 * 
 *创建新账号 
 * 
 * */
function createUser(opt){
	req({
		url: '/app/cck.action',
		data:opt.data,
		apiName: '注册新账号',
		success: function(data) {
			opt.success(data);
		}
	})
}
/*
 *
 *测试环境和上线环境判断
 *
 */
function judgeUrl(opt){
	req({
		url: '/app/as/e.action',
		data:opt.data,
		apiName: '测试环境和上线环境判断',
		success: function(data) {
			opt.success(data);
		},
		error:function(){
			opt.error();
		}
	})
}
