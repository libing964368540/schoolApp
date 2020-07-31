function getUserInfo(opt) {
	req({
		url:'/accountData/getAccountForMe.action',
		data: opt.data,
		apiName: '获取用户info信息',
		success: function(data) {
			opt.success(data);
		}
	})
}
function editPhoto(opt) {
	req({
		url:'/account/edit/modificationdata.action',
		data: opt.data,
		apiName: '修改用户信息',
		success: function(data) {
			opt.success(data);
		}
	})
}
/*
 * 获取申请住宿状态
 * 
 * */
function getDormitoryState(opt) {
	req({
		url:'/inResidenceApply/getApplyForAccountId.action',
		data: opt.data,
		apiName: '获取申请住宿状态',
		success: function(data) {
			opt.success(data);
		}
	})
}
/*
 * 获取核心素养得分情况
 * 
 * */
function getPerformanceScale(opt){
	req({
		url:'/performance/statistics/student/getPerformanceScale.action',
		data:opt.data,
		apiName: '获取核心素养得分情况',
		success: function(data) {
			opt.success(data);
		}
	})
}
