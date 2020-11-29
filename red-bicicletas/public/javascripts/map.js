var mymap = L.map('main_map').setView([-34.6124237,-58.4553231], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
}).addTo(mymap);

var marker = L.marker([-34.64,-58.46]).addTo(mymap);
var marker = L.marker([-34.62,-58.47]).addTo(mymap);
var marker = L.marker([-34.63,-58.53]).addTo(mymap);

