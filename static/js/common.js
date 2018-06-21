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
console.log(indexTime)
m = m < 10 ? '0' + m : m; 
d = d < 10 ? '0' + d : d; 
var accidentTime = y + '-' + m + '-' + d;
console.log(accidentTime)

h = h < 10 ? '0' + h : h; 
minutes = minutes < 10 ? '0' + minutes : minutes; 
var nowTime = h + ':' + minutes;
console.log(nowTime)
