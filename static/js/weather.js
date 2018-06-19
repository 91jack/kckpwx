$(function(){
	var weather=[];
	$.ajax({
		type:"post",
		url:getWeatherUrl,
		success:function(data){
			console.log(data)
			if(data.status==2000){
				var Len = data.list.length;
				for (var i=0;i<Len;i++) {
					var item={};
					item.code=data.list[i].code;
					item.name=data.list[i].name;
					weather.push(item);
				}
				console.log(weather)
			}
		}
	});
})