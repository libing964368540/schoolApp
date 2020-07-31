var codeSuc = 13; //定义服务器成功响应的code;

//把每个api公共参数放到这里
function setReqData(data) {
	if(!data.token) data.token = plus.storage.getItem('token');
	data.faid = plus.storage.getItem('faid');
	//角色id
	if(plus.storage.getItem('indexRole')) data.identity_id = JSON.parse(plus.storage.getItem('indexRole')).key;
	//设备
	data.clientType = 1;
	return data;
}

function ChangeRoleLogin() {
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
	mui.openWindow({
		url: "../login/login.html",
		id: "login",
	})
}

function req(opt) {
	opt.url = window.apiurl + opt.url;
	var parmas = setReqData(opt.data);
	//	plus.nativeUI.showWaiting( "拼命加载中..." );
	//输出请求api
	console.log('------------------------------------------------------')
	parmas.st = new Date().getTime();
	var strA = '?';
	for(var i in parmas) {
		strA += i + '=' + parmas[i] + '&';
	}
	console.log(opt.apiName + '-----请求url->' + opt.url + strA);

	mui.ajax({
		url: opt.url,
		data: parmas,
		type: opt.type || 'POST',
		timeout: 20000,
		success: function(data) {
			plus.nativeUI.closeWaiting();
			var data = JSON.parse(data);
			if(!data.error) {
				console.log(opt.apiName + '成功' + JSON.stringify(data));
				console.log('------------------------------------------------------dd')
				opt.success(data);
			} else {
				console.log(opt.apiName + '失败' + data.message);
				console.log('------------------------------------------------------ss')
				//				mui.toast(data.message);
				if(data.error.errorCode == 310) {
					var index= plus.webview.getWebviewById(plus.runtime.appid);
					mui.fire(index, 'hideMenu');
					mui.alert('您的当前权限已被管理员更改，请重新登录。', '提示', function() {
                         ChangeRoleLogin();
					}, 'div')
					return;
				}
				new fui({
					text: data.message,
					bg: '#FF3939'
				})
				if(opt.error) {
					opt.error(data);
				}
			}
		},
		error: function(xhr, type, errorThrown) {

			plus.nativeUI.closeWaiting();
			if(type != 'timeout') {
				console.log(opt.apiName + '失败' + type);
				console.log('------------------------------------------------------aa');
				new fui({
					text: '连接异常，请稍后重试。',
					bg: '#FF3939'
				})
			} else {
				new fui({
					text: '服务器连接超时，请稍后再试。',
					bg: '#FF3939'
				})
			}
			if(opt.error) {
				opt.error();
			}
		}
	});
}
Array.prototype.indexOf = function(val) {
	for(var i = 0; i < this.length; i++) {
		if(this[i] == val) return i;
	}
	return -1;
};
Array.prototype.remove = function(val) {
	var index = this.indexOf(val);
	if(index > -1) {
		this.splice(index, 1);
	}
};