/**
 * 获取message 
 */
function getMessage(opt) {
	req({
		url: '/message/getMessagesForAccount.action',
		data: opt.data,
		apiName: '获取消息',
		success: function(data) {
			opt.success(data);
		}
	})
}
/**
 * 消息已读设置 
 */
function messageSetStatus(opt) {
	console.log(JSON.stringify(opt));
	req({
		url: '/message/setReadState.action',
		data: opt.data,
		apiName: '消息已读设置',
		success: function(data) {
			opt.success(data);
		}
	})
}
/**
 * 消息全部已读
 */
function messageAllSetStatus(opt) {
	console.log(JSON.stringify(opt));
	req({
		url: '/message/setReadStateForAll.action',
		data: opt.data,
		apiName: '消息全部设置已读',
		success: function(data) {
			opt.success(data);
		}
	})
}
/**
 * 值班签到
 */
function messageDuty(opt) {
	console.log(JSON.stringify(opt));
	req({
		url: '/duty/sign.action',
		data: opt.data,
		apiName: '值班签到成功',
		success: function(data) {
			opt.success(data);
		}
	})
}
/*
 * 获取学期
 * */
function getItem(opt){
   console.log(opt);
   req({
		url: '/time/gettimes.action',
		data: opt.data,
		apiName: '获取学期成功',
		success: function(data) {
			opt.success(data);
		}
	})
}
