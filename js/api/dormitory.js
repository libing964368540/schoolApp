/*
 *申请住宿 
 * */
function dormotory_Apply(opt) {
	console.log(opt);
	req({
		url:'/inResidenceApply/apply.action',
		data: opt.data,
		apiName: '学生申请住宿',
		success:function(data) {
			opt.success(data);
		}
	})
}
/* 
 *获取学生住宿信息 
 * */
function Dormotory_GetForStudent(opt) {
	req({
		url: '/classgrade/getClassgrades.action',
		data: opt.data,
		apiName: '获取学生住宿信息住宿',
		success:function(data) {
			opt.success(data);
		}
	})
}