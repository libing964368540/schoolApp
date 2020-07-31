/**
 * 获取学生列表
 * @param {Object} opt
 * opt.page  第几页 
 */
function getClassList(opt) {
	req({
		url: '/classgrade/getClassgrades.action',
		data: opt.data,
		apiName: '获取班级列表',
		success:function(data) {
			opt.success(data);
		},
		error:function(){
			opt.error();
		}
	})
}

/**
 * 获取某一个班级详情 
 */
function getClassDetail(opt) {
	req({
		url: '/classgrade/getClassgradeForID.action',
		data: opt.data,
		apiName: '获取班级详情',
		success:function(data) {
			opt.success(data);
		}
	})
}

/**
 * 获取所有专业 
 */
function getMajor(opt) {
	req({
		url: '/major/getMajors.action',
		data:opt.data,
		apiName: '获取所有专业',
		success:function(data) {
			opt.success(data);
		}
	})
}

/**
 * 获取所有专业部
 */
function getMajorGroup(opt) {
	req({
		url: '/major/getMajorGroups.action',
		data:opt.data,
		apiName: '获取所有专业部列表',
		success:function(data) {
			opt.success(data);
		}
	})
}

/**
 * 根据专业部id获取专业 
 */
function getMajorForGroup(opt) {
	req({
		url: '/major/getMajorsForGroupId.action',
		data:opt.data,
		apiName: '根据专业部id获取专业列表',
		success:function(data) {
			opt.success(data);
		}
	})
}

/**
 * 获取班级打分项目
 */
function getClassScoreProjectapi(opt) {
	req({
		url: '/pprojectForClassgrade/getInterveneProjects.action',
		data:opt.data,
		apiName: '获取班级打分项目',
		success:function(data) {
			opt.success(data);
		}
	})
}

/**
 * 给班级打分 
 */
function goclassScore(opt) {
	req({
		url: '/pprojectForClassgrade/operation.action',
		data:opt.data,
		apiName: '为班级打分',
		success:function(data) {
			opt.success(data);
		}
	})
}

/**
 * 获取评比内容
 */
function getPingBiList(opt) {
	req({
		url: '/pprojectForClassgrade/getProject.action',
		data:opt.data,
		apiName: '获取班级评比项',
		success:function(data) {
			opt.success(data);
		}
	})
}
/**
 * 获取学期或者周 
 */
function getClassTime(opt) {
	req({
		url: '/time/gettimes.action',
		data:opt.data,
		apiName: '获取学期或者周 ',
		success:function(data) {
			opt.success(data);
		}
	})
}
/*
 *通过当前时间获取学期和周次 
 * */
function ItemNowTime(opt){
	req({
		url: '/time/getCurrentTime.action',
		data:opt.data,
		apiName: '获取当前时间的学期和周 ',
		success:function(data) {
			opt.success(data);
		},
		error:function(){
			opt.error();
		}
		
	})
}
/*
 *获取班级打分记录
 *
 */
function getScoreForClasses(opt){
	req({
		url: '/pprojectForClassgrade/getRecords.action',
		data:opt.data,
		apiName: '获取班级打分记录 ',
		success:function(data) {
			opt.success(data);
		}
	})
}

/*
 *
 *批量删除班级打分记录
 *
 */
function DeleteScoreForClasses(opt){
	req({
		url: '/pprojectForClassgrade/recover.action',
		data:opt.data,
		apiName: '批量删除班级打分记录 ',
		success:function(data) {
			opt.success(data);
		}		
	})
}
