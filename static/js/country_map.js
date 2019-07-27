var myMap = L.map('map', {
    center: [45.52, -122.67],
    zoom: 13
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 6,
    minZoom: 3,
    id: "mapbox.light",
    accessToken: API_KEY
}).addTo(myMap);

/*
d3.json("/whiskey").then((data)=> {
    d3.csv('clean-data/Whiskey_data/weather_whiskey Jul23.csv').then((d)=>{
        var geojson=L.chloropleth(data, {
            scale: ['#fff7fb', '#016353'], 
            steps: 10,
            mode: 'q',
            style: {
                color: '#fff', 
                weight: 1, 
                fillOpacity: 0.8
            } 
        }).addTo(myMap);
});
});
*/
