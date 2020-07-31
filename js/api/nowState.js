/**
 * 获取学校的当前信息
 * @param {Object} opt
 *
 */
function getNowState(opt) {
	req({
		url:'/getHomeInfo.action',
		data: opt.data,
		apiName: '获取学校的当前信息',
		success:function(data) {
			opt.success(data);
		},
		error:function(){

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

