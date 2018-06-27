var p;
var add;
var addr = document.getElementById("addr");
// 地图初始化
var map = new BMap.Map("map"); // 创建Map实例
var point = new BMap.Point(106.552278, 29.571751);
map.centerAndZoom(point, 18); // 初始化地图,设置中心点坐标和地图级别

var arr =[];
// 当前定位
var geolocation = new BMap.Geolocation();
geolocation.getCurrentPosition(function(r) {
	if(this.getStatus() == BMAP_STATUS_SUCCESS) {
		position(r);
		deletePoint();
	} else {
		alert('failed' + this.getStatus());
	}
});

function showInfo(e) {
	position(e);
	deletePoint();
}
map.addEventListener("click", showInfo);

var geolocation = new BMap.Geolocation();
geolocation.getCurrentPosition(function(r) {
	if(this.getStatus() == BMAP_STATUS_SUCCESS) {
		var geoc = new BMap.Geocoder();
		geoc.getLocation(r.point, function(rs) {
			console.log(r.point)
			var addComp = rs.addressComponents;
			var address = addComp.city + addComp.district + addComp.street + addComp.streetNumber;
			console.log(address);
			$('.icon').click(function(e){
				var mk = new BMap.Marker(e.point);
				mk.point= new BMap.Point(r.point.lng, r.point.lat)
				arr.push(mk);
				map.addOverlay(mk);
				map.panTo(mk.point);
				// 逆地址解析
				var geoc = new BMap.Geocoder();
				geoc.getLocation(mk.point, function(rs) {
					var addComp = rs.addressComponents;
					var address = addComp.city + addComp.district + addComp.street + addComp.streetNumber;
					addr.innerHTML = address;
				})
				p = mk.point;
				console.log(p);
				deletePoint();
			})
		})
	} else {
		alert('failed' + this.getStatus());
	}
});

function position(e) {
	var mk = new BMap.Marker(e.point);
	arr.push(mk);
	map.addOverlay(mk);
	map.panTo(e.point);
	// 逆地址解析
	var geoc = new BMap.Geocoder();
	geoc.getLocation(e.point, function(rs) {
		var addComp = rs.addressComponents;
		var address = addComp.city + addComp.district + addComp.street + addComp.streetNumber;
		addr.innerHTML = address;
	})
	p = e.point;
	console.log(p);
	$('.BMap_geolocationIcon').on('click',function(){
		console.log(1111111111)
	})
	// 存json
	
	localStorage.setItem('address_xy',JSON.stringify(e.point))
}
function deletePoint(){
	var allOverlay = map.getOverlays();
	for (var i = 0; i < arr.length-1; i++){
		map.removeOverlay(allOverlay[i+1]);
		return false;
	}
}


//	获取地址
$('#submap').click(function() {
	addr= $('#addr').html();
	localStorage.setItem('addr',addr);
	window.location.href='upload.html';
})

// 小米手机下 地图点击
