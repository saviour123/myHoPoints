
//creating the map with div
var map = L.map('map').setView([6.6069, 0.4749], 14);

//add tiles
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//add geoJson
var myLayer = L.geoJson(data).bindLabel('saviour').addTo(map);
L.bi