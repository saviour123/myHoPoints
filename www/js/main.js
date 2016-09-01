


//creating the map with div
var map = L.map('map').setView([6.6069, 0.4749], 14);

//add tiles
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//add geoJson
var myLayer = L.geoJson(data, {
	pointToLayer: function(feature, latlng){
		return L.marker(latlng);
	},//geoJson content appears one for each and returns the default marker


//this piece of code does the labelling.
	onEachFeature: function(feature, layer){
		var popupcontent = []; //empty array

		for (var i in feature.properties){
			popupcontent.push(i + ": " + feature.properties[i]);
		}
		layer.bindPopup(popupcontent.join("<br />"))
	}//end onEachFeature
}).addTo(map);



