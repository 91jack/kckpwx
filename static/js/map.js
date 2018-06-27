var p;
var add;
var addr = document.getElementById("addr");

// 地图初始化
var map = new BMap.Map("map"); // 创建Map实例
var point = new BMap.Point(106.552278, 29.571751);
map.centerAndZoom(point, 18); // 初始化地图,设置中心点坐标和地图级别
map.addControl(new BMap.GeolocationControl()); // 定位

var arr =[];
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
	arr.push(mk);
	console.log(arr.pop())
	// 存json
//	localStorage.setItem('lat',p.lat);
//	localStorage.setItem('lng',p.lng);
	
	localStorage.setItem('address_xy',JSON.stringify(e.point))
	
	// 编写自定义函数,创建标注
	function addMarker(point,label){
		var marker = new BMap.Marker(point);
		map.addOverlay(marker);
		marker.setLabel(label);
	}
	// 随机向地图添加25个标注
//	var bounds = map.getBounds();
//	var sw = bounds.getSouthWest();
//	var ne = bounds.getNorthEast();
//	var lngSpan = Math.abs(sw.lng - ne.lng);
//	var latSpan = Math.abs(ne.lat - sw.lat);
//	for (var i = 0; i < 10; i++) {
//		var point = new BMap.Point(sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7));
//		var label = new BMap.Label("我是id="+i,{offset:new BMap.Size(20,-10)});
//		addMarker(point,label);
//	}
	function deletePoint(){
		var allOverlay = map.getOverlays();
		for (var i = 0; i < allOverlay.length -1; i++){
			if(allOverlay[i].getLabel().content == "我是id=1"){
				map.removeOverlay(allOverlay[i]);
				return false;
			}
		}
	}
}

//	获取地址
$('#submap').click(function() {
	addr= $('#addr').html();
	localStorage.setItem('addr',addr);
	window.location.href='upload.html';
})

// 小米手机下 地图点击



//var map = new BMap.Map("allmap");
//	var point = new BMap.Point(116.404, 39.915);
//	map.centerAndZoom(point, 15);
//	map.disableDoubleClickZoom(true);
		
	