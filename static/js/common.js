// 移动端响应式匹配
(function () {
	document.addEventListener('DOMContentLoaded', function () {
		var deviceWidth = document.documentElement.clientWidth;
		console.log(deviceWidth)
			if(deviceWidth < 375){
				console.log(deviceWidth)
				document.documentElement.style.fontSize = deviceWidth / 26.66 + 'px';
			}else{
				document.documentElement.style.fontSize = deviceWidth / 31.25 + 'px';
			}
		
		
	   }, false);
	   
	window.onresize = function(){
		var deviceWidth = document.documentElement.clientWidth;
		
		if(deviceWidth < 375){
			console.log(deviceWidth)
			document.documentElement.style.fontSize = deviceWidth / 26.66 + 'px';
		}else{
			document.documentElement.style.fontSize = deviceWidth / 31.25 + 'px';
		}
		
	};
})();




// 返回上一页
$('.goback').on('click', function(){
	window.history.back();
})



