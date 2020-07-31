
var userRole = {
	data: function() {
		return {
			role: '',
			NoData:''
		}
	},
	methods: {
		setMenu: function(type) {
			if(mui.os.android) {
				var index= plus.webview.getWebviewById(plus.runtime.appid);
				if(type == 1) {
					mui.fire(index, 'hideMenu');
				} else {
					mui.fire(index, 'showMenu');
				}
			}else{
				if(type == 1) {
					$('.top-title').addClass('active');
				} else {
					$('.top-title').removeClass('active');
				}
			}
		},
		checkRole: function(need) {
			var needArr = need.split(',');
			var len = 0;
			var that = this;

			for(var i = 0; i < needArr.length; i++) {
				console.log(that.role);
				console.log(needArr[i]);
				console.log(that.role.indexOf(needArr[i]));
				if(that.role == needArr[i]) {
					return true;
				} 
			}
			return false;
			
		}
	}
};

function getUserRole() {
	return JSON.parse(plus.storage.getItem('indexRole')).key;
//	return JSON.parse(plus.storage.getItem('indexRole')).map(function(item) {
//		return item.key;
//	}).join(',');
}