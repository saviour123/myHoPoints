
//creating the map with div
var map = L.map('map').setView([8.076,-0.967], 7);

//add tiles
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//add geoJson
var myLayer = L.geoJson(data).addTo(map);

//create map icon
/*var blueIcon = new L.Icon({iconUrl: 'img/marker-icon.png'});*/



/*
//the function that binds the icon to the layer
function myIcon(feature, layer) {
	layer.bindPopup("<h1>Hi saviour</h1>");
	layer.setIcon(blueIcon);
};

L.geoJson(fielddata,{
	onEachFeature: myIcon
}).addTo(map);*/




