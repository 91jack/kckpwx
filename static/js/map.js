var p;
var add;
var addr = document.getElementById("addr");

// 地图初始化
var map = new BMap.Map("map"); // 创建Map实例
var point = new BMap.Point(106.552278, 29.571751);
map.centerAndZoom(point, 18); // 初始化地图,设置中心点坐标和地图级别
map.addControl(new BMap.GeolocationControl()); // 定位

// 当前定位
var geolocation = new BMap.Geolocation();
geolocation.getCurrentPosition(function(r) {
	if(this.getStatus() == BMAP_STATUS_SUCCESS) {
		position(r)
	} else {
		alert('failed' + this.getStatus());
	}
});

function showInfo(e) {
	position(e)
}
map.addEventListener("click", showInfo);

function position(e) {
	var mk = new BMap.Marker(e.point);
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
	// 存json
	localStorage.setItem('lat',p.lat);
	localStorage.setItem('lng',p.lng);
}

//	获取地址
$('#submap').click(function() {
	add= $('#addr').html();
	localStorage.setItem('add',add);
	window.location.href='upload.html';
})

// 小米手机下 地图点击
