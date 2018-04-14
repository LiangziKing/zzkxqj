function openDialog(url,title,width,height,dialog_full) {
	if (url    == undefined){url    = '';}
	if (title  == undefined){title  = '信息提示框';}
	if (height == undefined || height==0){height=($(window).height()-60)+'px';ismaxmin=true;}else{height=height+'px';ismaxmin=false;}
	if (width  == undefined || width==0){width=($(window).width()-60)+'px';ismaxmin=true;}else{  width=width+'px';ismaxmin=false;}
	if (dialog_full==1){ismaxmin=false;}
	lay = layer.open({
		type: 2,
		title: title,
		area: [width, height],
		maxmin: ismaxmin,
		content: url
	});
	if (dialog_full==1) {layer.full(lay)};
}
// 警告弹窗，地址不为空时跳转
function liuAlert(msg,url) {
	if (url    == undefined){url    = '';}
	layer.alert(msg,{title:'警告',icon:7,cancel:function(index){
		if (url != '') top.location.href = url;
		layer.close(index);
	}},function(index){
		if (url != '') top.location.href = url;
		layer.close(index);
	});
}

// 成功弹窗，三个参数，第一个是提示信息，第二个是跳转地址，第三个参数在按钮前面再加一个按钮。如果第三个参数存在，则跳转地址对最前面的按钮有效
function liuSuccess(msg,url,button_title) {
	if (url    == undefined){url    = '';}
	if (button_title == undefined){button_title = '';}
	if (button_title!='') {
		layer.confirm(msg, {
			title: '操作成功',
			icon: 1,
			btn: [button_title,'确定'] //按钮
		}, function(index){
			if (url != '') top.location.href = url;
			layer.close(index);
		}, function(index){
			layer.close(index);
		});
	} else {
		layer.confirm(msg, {
			title: '操作成功',
			icon: 1,
			btn: ['确定'] //按钮
		}, function(index){
			if (url != '') top.location.href = url;
			layer.close(index);
		});
	}
}
// confirm框，可使用回调函数
function liuConfirm(msg,callback) {
	layer.confirm(msg, {
		title: '询问',
		btn: ['确定','取消'] //按钮
	}, function(index){
		if (typeof(callback) === "function") {
			callback.call(this);
		}
		layer.close(index);
	}, function(index){
		layer.msg('您已经取消此操作。');
		layer.close(index);
	});
}
// 提示信息
function liuTips(title) {
	layer.msg(title);
}
// 关闭所有窗口
function closeDialog() {
	layer.closeAll();
}
// 刷新当前窗口
function reload(){
	window.location.href = location.href;
}