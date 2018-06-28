// 移动端响应式匹配
(function () {
	document.addEventListener('DOMContentLoaded', function () {
		var deviceWidth = document.documentElement.clientWidth;
		document.documentElement.style.fontSize = deviceWidth / 31.25 + 'px';
	   }, false);
	   
	window.onresize = function(){
		var deviceWidth = document.documentElement.clientWidth;
		document.documentElement.style.fontSize = deviceWidth / 31.25 + 'px';
	};
})();

// 返回上一页
$('.goback').on('click', function(){
	window.history.back();
})

$('#goback').on('click', function(){
//	var handleType = localStorage.getItem('handleType');
//	if(handleType == 2){
//		window.location.href='chooseaccident.html';
//	}else{
		
		$('.exit-modal').show();
		$('.exit-modal a').eq(0).on('click',function(){
			$('.exit-modal').hide();
		})
		$('.exit-modal a').eq(1).on('click',function(){
			window.location.href='index.html';
		})
//	}
})

// 判断是否存在token
var token = localStorage.getItem('token');
console.log(token)
var accidentId = localStorage.getItem('accidentId');

// 时间
// 日期换算
var allWeek= ["日","一","二","三","四","五","六","日"];
function week(w){
	return allWeek[w];
}

// 获取本地时间
var nowdate = new Date();
var y = nowdate.getFullYear();
var m = nowdate.getMonth()+1;
var d = nowdate.getDate();
var w = nowdate.getDay();
var h = nowdate.getHours();
var minutes = nowdate.getMinutes();

var indexTime = m + '月' + d + '日' + '&nbsp;&nbsp;星期'+week(w);
//console.log(indexTime)
m = m < 10 ? '0' + m : m; 
d = d < 10 ? '0' + d : d; 
var accidentTime = y + '-' + m + '-' + d;
//console.log(accidentTime)

h = h < 10 ? '0' + h : h; 
minutes = minutes < 10 ? '0' + minutes : minutes; 
var nowTime = h + ':' + minutes;
console.log(nowTime)





//建立一個可存取到該file的url  
function getObjectURL(file) {
	var url = '';
	if(window.createObjectURL != undefined) {
		url = window.createObjectURL(file);
	} else if(window.URL != undefined) {
		url = window.URL.createObjectURL(file);
	} else if(window.webkitURL != undefined) {
		url = window.webkitURL.createObjectURL(file);
	}
	return url;
}

// 压缩图片
function compress(img, width, height, ratio) {        
   var canvas, ctx, img64;   
   canvas = document.createElement('canvas');        
   canvas.width = width;
   canvas.height = height;
        
   ctx = canvas.getContext("2d");        
   ctx.drawImage(img, 0, 0, width, height);
        
   img64 = canvas.toDataURL("image/jpeg", ratio);  
   return img64;
}