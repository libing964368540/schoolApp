/**
 * 
 * @param {Object} opt
 * opt.success 回调
 * opt.page 第几页
 * opt.name 班级名称
 * opt.directorid 班主任id
 * opt.grade 年级
 */
function getPunchList(opt) {
	console.log(opt);
	req({
		url: '/PunchGet/GetPunchRecord.action',
		data: opt.data,
		apiName: '获取考勤列表',
		success: function(data) {
			opt.success(data);
		},
		error:function(data){
			opt.error();
		}
	})
};