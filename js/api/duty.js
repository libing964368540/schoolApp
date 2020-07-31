/**
 * 
 * @param {Object} opt
 * opt.success 回调
 * opt.classgrade_id 班级id
 */
function getSeatList(opt) {
	console.log(opt);
	req({
		url: '/classgradeSeat/getSeats.action',
		data: opt.data,
		apiName: '获取班级座位表',
		success: function(data) {
			opt.success(data);
		}
	})
};
/**
 * 
 * @param {Object} opt
 * opt.success 回调
 * opt.classgrade_id 班级id
 */
function setStudentState(opt){
	console.log(opt);
	req({
		url: '/accountStudent/setTemporaryState.action',
		data: opt.data,
		apiName: '设置临时有事',
		success: function(data) {
			opt.success(data);
		}
	})
}
/**
 * 
 * @param {Object} opt
 * opt.success 回调
 * opt.classgrade_id 班级id
 */
function removeStudentState(opt){
	console.log(opt);
	req({
		url: '/accountStudent/setTemporaryState.action',
		data: opt.data,
		apiName: '取消临时有事',
		success: function(data) {
			opt.success(data);
		}
	})
}
/**
 * 
 * @param {Object} opt
 *
 *
 */
function getDutyList(opt){
	console.log(opt);
	req({
		url:'/duty/getDuty.action',
		data:opt.data,
		apiName:'获取当前日期下的值班列表',
		success:function(data){
			opt.success(data);
		},
		error:function(){
			
		}
	})
}
