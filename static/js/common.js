// 移动端响应式匹配
(function () {
  document.addEventListener('DOMContentLoaded', function () {
	var deviceWidth = document.documentElement.clientWidth;
	console.log(deviceWidth)
	
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

// jQueryAjax 封装
function commonAjax(url,data){
	$.ajax({
	    type: "POST",
	    url: url,
	  	data: data,
	    success: function(res){
			if(res.status == 2000){
				return res;
			}else{
				console.log(res)
			}
	    }
	})	
}

