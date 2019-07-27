var myMap = L.map('map', {
    center: [15.5994, -28.6731],
    zoom: 3
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18, 
    id: "mapbox.light",
    accessToken: 'pk.eyJ1IjoiZW1zMTgiLCJhIjoiY2p3aWZmM3IyMjIycjQ5cXIzNnIxaGVoYiJ9.YcHfDScynwJ3CfGqTFf7Lw'
}).addTo(myMap);
   /*
var coords = [
    {
        name: 'UK', 
        location: [56.4907, 4.2026]
    }, 
    {
        name: 'IE',
        location: [53.1424, 7.6921]
    },
    {
        name: 'US',
        location: [37.0902, 95.7129]
    }
  
    {
        name: 'FR', 
        location:
    }, 
    {
        name: 'BE',
        location:
    }, 
    {
        name: 'SE', 
        location:
    }, 
    {
        name: 'FI',
        location:
    }, 
    {
        name: 'JP',
        location:
    },
    {
        name: 'IN',
        location:
    },
    {
        name: 'TW',
        location:
    },
    {
        name: 'NL',
        location:
    },
    {
        name: 'AU',
        location:
    },
    {
        name: 'AT',
        location:
    },
    {
        name: 'CH',
        location:
    },
    {
        name: 'CZ',
        location:
    },
    {
        name: 'DK',
        location:
    },
    {
        name: 'ES',
        location:
    },
    {
        name: 'MX',
        location:
    },
    {
        name:'LI',
        location:
    },
    {
        name: 'NZ',
        location:
    },
    {
        name:'AR',
        location:
    },
    {
        name: 'ZA',
        location:
    },
    {
        name:'IT',
        location:
    },
    {
        name: 'IS',
        location:
    },
    {
        name:'BT',
        location: [27.5142,90.4336]
    },
    {
        name:'UT',
        location:
    },
    {
        name: 'CA', 
        location: [56.1304, 106.3468]
    }, 
    {
        name: 'GE',
        location:[42.3154,43.3569]
    }
    */

//d3.json("/whiskey").then((data)=> {
d3.csv('../clean-data/Whiskey_data/weather_whiskey Jul23.csv', function(data) {
    var names = [];
    var counter = [];
    data.forEach(function(d) {
        //console.log(d.country);
        if (!names.includes(d.country)) {
            names.push(d.country);
            counter.push(1);} 
        else {
            counter[counter.length-1]++;
        }
    });
    //console.log(names);
    //console.log(counter);
    var countries = new Object();
    countries.name = names;
    countries.points = counter;
    //console.log(countries);
    //console.log(countries.name);
    d3.json('../static/js/countries.json', function (world) {
        var entry = world.objects.units.geometries;
        //console.log(world);
        entry.forEach(function(c) {
            var iso3 = c.properties.iso3;
            var coords = c.arcs;
        //console.log(iso3);
        //console.log(coords);
            d3.csv('../../clean-data/Whiskey_data/country_codes.csv', function(code) {
                //console.log(code);
                code.forEach(function (i) {
                    var iso2 = i.ISO_2;
                    if (iso3 == i.ISO_3) {
                        //console.log('match');
                        //code.coords = coords;
                        entry.points = countries.points;
                    };
                    console.log(entry.points);
                  
                //console.log(code.coords); 
                var countryCode = []
                Object.entries(countries).forEach(([key,value]) => {
                    if (key === 'name') {
                        value.forEach(function(v){
                        if (iso2 === v) {
                            //console.log(v);
                            countryCode.push(iso2);
                            //entry.points = countries.points;
                        };
                    //console.log(countries.points);
                });
                };
            function Color(entry) {
                return d > 1000 ? '#800026' :
                d > 500  ? '#BD0026' :
                d > 200  ? '#E31A1C' :
                d > 100  ? '#FC4E2A' :
                d > 50   ? '#FD8D3C' :
                d > 20   ? '#FEB24C' :
                d > 10   ? '#FED976' :
                           '#FFEDA0';
            }
            function style(entry) {
                return {
                    fillColor: getColor(entry.points),
                    weight: 2,
                    opacity: 1,
                    color: 'white',
                    dashArray: '3',
                    fillOpacity: 0.7
                };
            }
            
            L.geoJson(entry, {style: style}).addTo(myMap);
            /*
            coords.forEach(function(d){
                let color = '';
                if (d.points > 2000) {
                    color = "red";
                }
                else if (d.points >500) {
                    color = 'yellow';
                }
                else if (d.points >100){
                    color = 'blue';
                }
                else {
                    color = 'pink';
                }
                */
            });
        });
        });
        /*
        //Object.entries(countries).forEach(([key,value]) => {
            //console.log(value);
            //console.log(key);
            console.log(iso3);
            if (key === 'name') {
                //console.log(value);
                value.forEach(function(v) {
                    //console.log(typeof(iso3));
                    //console.log(v);
                    if (iso3 === v) {
                        console.log(iso3);
                    }
                });
                
            }
            */
        });
    });
    
    });   

    
    /* var geojson = JSON.parse(countries);
    console.log(geojson); */
    //d3.csv('../static/js/countries.json', function (country){
        //console.log(country);
        //L.geoJson(country).addTo(myMap);    
    //})
    /*
    coords.forEach(function(d) {
        geojson = L.choropleth (d, {
            scale: ["#ffffb2", "#b10026"],
            steps: 10,
            mode: "q",
            style: {
                color: "#fff",
                weight: 1,
                fillOpacity: 0.8
            }
        }).addTo(myMap);

    })
    
    coords.forEach(function(d){
        let color = '';
        if (d.points > 2000) {
            color = "red";
        }
        else if (d.points >500) {
            color = 'yellow';
        }
        else if (d.points >100){
            color = 'blue';
        }
        else {
            color = 'pink';
        }
        L.circle(d.location, {
            fillOpacity: 0.8,
            color: 'white',
            fillColor: color,
            radius: d.points *150
        }).addTo(myMap);
    })
    */
//});