/**
 * 获取请假列表 
 */
function getLeaveList(opt) {
	req({
		url: '/leave/getApplys.action',
		data: opt.data,
		apiName: '获取请假列表',
		success:function(data) {
			opt.success(data);
		},
		error:function(data){
			opt.error(data);
		}
	})
}

/**
 * 申请请假 
 */
function applyLeave(opt) {
	req({
		url: '/leave/apply.action',
		data: opt.data,
		apiName: '申请请假',
		success:function(data) {
			opt.success(data);
		}
	})
}

/**
 * 审核请假 
 */
function applyLeaveCheck(opt) {
	req({
		url: '/leave/examine.action',
		data: opt.data,
		apiName: opt.apiName || '请假审核',
		success:function(data) {
			opt.success(data);
		}
	})
}

/**
 * 使用id去获取请假详情 
 */
function getLeaveDetail(opt) {
	req({
		url: '/leave/getApplyForID.action',
		data: opt.data,
		apiName: opt.apiName || '获取请假详情',
		success:function(data) {
			opt.success(data);
		}
	})
}

//获取考勤列表
function getPunchList(opt) {
	req({
		url: '/Punch/getPunchs.action',
		data: opt.data,
		apiName: opt.apiName || '获取考勤列表',
		success:function(data) {
			opt.success(data);
		}
	})
}
