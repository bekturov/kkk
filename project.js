function colorbh(element){
	element.style.color = "rgb(255,255,255,0.5)";
}
function colorb(element){
	element.style.color = "black";
}
function colorsprt(element){
	element.style.color = "rgb(229,33,33,0.5)";
}
function colorcomf(element){
	element.style.color = "rgb(15,48,213,0.7)";
}
function colors(element){
	element.style.color = "white";
}
function colorbl(element){
	element.style.color = "rgb(255,255,255,0.5)";
}
function vrum(element){
	$(".lamba").animate({right: '160px'}, "slow");
}
function initMap() {
	var options = {
		center: {lat: 43.2565, lng: 76.8695},
		zoom: 11,
		styles: [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#523735"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c9b2a6"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#dcd2be"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ae9e90"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#93817c"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a5b076"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#447530"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fdfcf8"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f8c967"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#e9bc62"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e98d58"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#db8555"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#806b63"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8f7d77"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#b9d3c2"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#92998d"
      }
    ]
  }
]
	}
	var map = new google.maps.Map(document.getElementById("maps"), options);
	var icon = {
		url: "https://www.pikpng.com/pngl/b/131-1311171_free-google-maps-download-revision-car-icon-google.png",
		scaledSize: new google.maps.Size(30, 30),
		origin: new google.maps.Point(0, 0),
		anchor: new google.maps.Point(0, 0)
	};
	var marker1 = new google.maps.Marker({
		position: {lat: 43.2565, lng: 76.8695}, 
		map: map,
		icon: icon
	});
	var marker2 = new google.maps.Marker({
		position: {lat: 43.226112, lng: 76.939072}, 
		map: map,
		icon: icon
	});
	var marker3 = new google.maps.Marker({
		position: {lat: 43.271293, lng: 76.889561}, 
		map: map,
		icon: icon
	});
	var marker4 = new google.maps.Marker({
		position: {lat: 43.218771, lng: 76.887985}, 
		map: map,
		icon: icon
	});
	var infoWindow1 = new google.maps.InfoWindow({
		content: "LIONEL"
	});
	marker1.addListener("click", () => {
		infoWindow1.open(marker1.get("maps"), marker1);
	});
	marker2.addListener("click", () => {
		infoWindow1.open(marker2.get("maps"), marker2);
	});
	marker3.addListener("click", () => {
		infoWindow1.open(marker3.get("maps"), marker3);
	});
	marker4.addListener("click", () => {
		infoWindow1.open(marker4.get("maps"), marker4);
	});
	const flightPlanCoordinates = [
    {lat: 43.300730, lng:  76.786795},
    {lat:43.329128, lng: 76.893054}, 
    {lat: 43.377983, lng: 76.946015},  
    {lat: 43.292605, lng: 77.004509}, 
    {lat:43.175190, lng: 77.027753}, 
    {lat: 43.161286, lng: 76.817943},  
    {lat: 43.300730, lng:  76.786795}
  ];
  const flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });
  flightPath.setMap(map);
}
document.getElementById('but').addEventListener('click', "projectmain.html");