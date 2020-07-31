
function upFile(cb) {
	var token = plus.storage.getItem('token');
	var faid = plus.storage.getItem('faid');
	var roleid = JSON.parse(plus.storage.getItem('indexRole')).key;
	var api = window.apiurl+'/file/fileUpload.action?token=' + token + '&faid=' + faid + '&clientType=1&identity_id=' + roleid;
	var wt = plus.nativeUI.showWaiting();
	return plus.uploader.createUpload(api, {
			method: "POST"
		},
		function(t, status) { //上传完成
			if(status == 200) {
				console.log(t.responseText);
				cb(JSON.parse(t.responseText).data);
				wt.close(); //关闭等待提示按钮
			} else {
				console.log('上传失败' + status);
				wt.close(); //关闭等待提示按钮
			}
		}
	);
}