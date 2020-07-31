/**
 * 
 * @param {Object} opt
 * opt.success 回调
 * opt.page 第几页
 * opt.name 班级名称
 * opt.directorid 班主任id
 * opt.grade 年级
 */
function getStudentList(opt) {
	console.log(opt);
	req({
		url: '/account/getAccountsForStudent.action',
		data: opt.data,
		apiName: '获取学生列表',
		success: function(data) {
			opt.success(data);
		},
		error:function(data){
			opt.error();
		}
	})
};

/**
 *	获取学生打分节点
 *  opt.keyword 搜索某一个打分项目
 *  opt.page 页数
 *  opt.size 页长度
 */
function getStudentScoreIntervenes(opt) {
	req({
		url: '/pprojectForStudent/getIntervenes.action',
		data: opt.data,
		apiName: '获取学生打分节点',
		success: function(data) {
			opt.success(data);
		}
	})
}
/**
 * 为学生打分 
 */
function studentRrade(opt) {
	req({
		url: '/pprojectForStudent/operation.action',
		data: {
			taids: opt.taids,
			rids: opt.rids,
			annotation: opt.annotation,
			time: opt.time
		},
		apiName: '给学生打分',
		success:function(data) {
			opt.success(data);
		}
	})
}

/**
 * 获取学生打分详情 
 */
function getScoreDetail(opt) {
	req({
		url: '/performance/getForStudentID.action',
		data: opt.data,
		apiName: '获取学生打分详情',
		success:function(data) {
			opt.success(data);
		},
		error:function(){
			opt.error();
		}
	})
}

/**
 * 获取学生成绩报告
 */
function getPerformanceReport(opt) {
	req({
		url: '/performance/statistics/student/getPerformanceReport.action',
		data: opt.data,
		apiName: '获取学生成绩报告',
		success:function(data) {
			opt.success(data);
		}
	})
}
/*
 * 通学生的打分规则获取班级打分规则
 * 
 * */
function getRuleForStudentRules(opt){
	req({
		url: '/prunle/getBindData.action',
		data: opt.data,
		apiName: '通学生的打分规则获取班级打分规则',
		success:function(data) {
			opt.success(data);
		}
	})
}
/*
 *
 *获取当前账号给学生的打分记录
 *
 */
function getStudentScoreHistoryForUser(opt){
	req({
		url:'/performance/getForOperationAccountId.action',
		data: opt.data,
		apiName: '获取当前账号给学生的打分记录',
		success:function(data) {
			opt.success(data);
		}
	})
}
/*
 *删除当前账号给学生的打分记录 
 * 
 * */
function DelStudentScoreHistoryForUser(opt){
	req({
		url:'/pprojectForStudent/recover.action',
		data: opt.data,
		apiName: '删除当前账号给学生的打分记录 ',
		success:function(data) {
			opt.success(data);
		},
		error:function(){
			opt.error();
		}
	})
}
/*
 *获取班内打分项
 * 
 * 
 * */
function getScoreProjectForClasses(opt){
	req({
		url:'/classPrivateProject/getProjects.action',
		data: opt.data,
		apiName: '获取班内打分项 ',
		success:function(data) {
			opt.success(data);
		},
		error:function(){
			opt.error();
		}
	})
}

/*
 *批量给学生班内打分接口
 * 
 * 
 * */ 
 function MoreScoreForClassgrade(opt){
 	req({
		url:'/classPrivateProject/submits.action',
		data: opt.data,
		apiName: '批量给学生班内打分接口 ',
		success:function(data) {
			opt.success(data);
		},
		error:function(){
			opt.error();
		}
	})	
 }
 /*
  * 
  * 批量给学生班内打分接口 
  * 
  * */
 function getScoreHistoryForInClass(opt){
 	req({
		url:'/classPrivateProject/submits.action',
		data: opt.data,
		apiName: '批量给学生班内打分接口 ',
		success:function(data) {
			opt.success(data);
		},
		error:function(){
			opt.error();
		}
	})	
 }
 /*
  *获取班内打分历史记录
  */
 function getRecordHistoryForInClass(opt){
 	req({
		url:'/classPrivateProject/getRecords.action',
		data: opt.data,
		apiName: '获取班内打分历史记录 ',
		success:function(data) {
			opt.success(data);
		},
		error:function(){
			opt.error();
		}
	})	 
 }
 /*
  *删除班内打分历史记录
  */
  function DelRecordHistoryForInClass(opt){
 	req({
		url:'/classPrivateProject/delete.action',
		data: opt.data,
		apiName: '批量给学生班内打分接口 ',
		success:function(data) {
			opt.success(data);
		},
		error:function(){
			opt.error();
		}
	})	
 }
