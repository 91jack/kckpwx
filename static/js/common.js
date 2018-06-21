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

// 判断是否存在token
var token = localStorage.getItem('token');
console.log(token)


