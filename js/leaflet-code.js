document.addEventListener('DOMContentLoaded', function () {

    var mymap = L.map('mapdiv').setView([39, -105.5], 7.4);

    L.tileLayer('https://api.mapbox.com/styles/v1/alindley/cj0smo4ll00c62smpbr2dpehd/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWxpbmRsZXkiLCJhIjoiY2l5Y2JlcmViMDBvczMyc2N1eTA4MDd4MSJ9.t0Z60l8r6_8DNbX7xB1bnA', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.satellite',
        accessToken: 'pk.eyJ1IjoiYWxpbmRsZXkiLCJhIjoiY2l5Y2JlcmViMDBvczMyc2N1eTA4MDd4MSJ9.t0Z60l8r6_8DNbX7xB1bnA'
    }).addTo(mymap);
    
    
    var weather = L.tileLayer('https://maps.aerisapi.com/CSJEnhBz47Lj5Rnz1qOMJ_syBX7hid79IHKhZszE0qC6rmyNx8YNTSmb9NprmT/radar/{z}/{x}/{y}/current.png', {
        subdomains: '1234',
        attribution: '&copy;AerisWeather',

    }).addTo(mymap);
    weather.setOpacity(0.6);

    L.Control.geocoder().addTo(mymap);
    
    var point = [40.533594, -105.145036];
    var myMarker = L.circle(
        point,
        5000, {
            color: 'black',
            fillColor: 'white',
            fillOpacity: 0.8
        }
    );
    myMarker.bindPopup(
        '<b>Horsetooth</b><br> Elevation: 5607 ft.<br> Number of routes: 224<br> Type of routes: TR/Sport/Boulder/Trad<br> <a href="https://www.mountainproject.com/v/horsetooth-reservoir/105744295">More Info</a>'
    );

    var point1 = [40.694621, -105.378603];
    var myMarker1 = L.circle(
        point1,
        5000, {
            color: 'black',
            fillColor: 'white',
            fillOpacity: 0.8
        }
    );
    myMarker1.bindPopup(
        '<b>The Palace</b><br> Elevation: 6057 ft.<br> Number of routes: 105<br> Type of routes: Sport/Trad<br> <a href="https://www.mountainproject.com/v/the-palace/105873941">More Info</a>'
    );

    var point2 = [38.873621, -104.880550];
    var myMarker2 = L.circle(
        point2,
        5000, {
            color: 'black',
            fillColor: 'white',
            fillOpacity: 0.8
        }
    );
    myMarker2.bindPopup(
        '<b>Garden of the Gods</b><br> Elevation: 6455 ft.<br> Number of routes: 144<br> Type of routes: Sport/Trad/TR/Boulder<br> <a href="https://www.mountainproject.com/v/garden-of-the-gods/105744301">More Info</a>'
    );

    var point3 = [39.791291, -105.201154];
    var myMarker3 = L.circle(
        point3,
        5000, {
            color: 'black',
            fillColor: 'white',
            fillOpacity: 0.8
        }
    );
    myMarker3.bindPopup(
        '<b>Golden Cliffs</b><br> Elevation: 6424 ft.<br> Number of routes: 471<br> Type of routes: Sport/Trad/TR<br> <a href="https://www.mountainproject.com/v/north-table-mountaingolden-cliffs/105744249">More Info</a>'
    );

    var point4 = [39.932288, -105.286480];
    var myMarker4 = L.circle(
        point4,
        5000, {
            color: 'black',
            fillColor: 'white',
            fillOpacity: 0.8
        }
    );
    myMarker4.bindPopup(
        '<b>Eldorado Canyon</b><br>Elevation: 5821 ft.<br>Number of routes: 1,140<br> Type of routes: Trad/Sport/TR/Boulder<br> <a href="https://www.mountainproject.com/v/eldorado-canyon-sp/105744246">More Info</a>'
    );

    var point5 = [40.41555, -105.3761];
    var myMarker5 = L.circle(
        point5,
        5000, {
            color: 'black',
            fillColor: 'white',
            fillOpacity: 0.8
        }
    );
    myMarker5.bindPopup(
        "<b>Mary's Bust</b><br> Elevation: 6687 ft.<br> Number of routes: 48<br> Type of routes: Trad/Sport<br> <a href='https://www.mountainproject.com/v/marys-bust-area/106811702'>More Info</a>"
    );

    var point6 = [38.818, -108.6012];
    var myMarker6 = L.circle(
        point6,
        5000, {
            color: 'black',
            fillColor: 'white',
            fillOpacity: 0.8
        }
    );
    myMarker6.bindPopup(
        "<b>Unaweep Canyon</b><br> Elevation: 6816 ft.<br>Number of routes: 1,746<br>Type of routes: Trad/Sport/Boulder/TR<br> <a href='https://www.mountainproject.com/v/unaweep-canyon/105744400'>More Info</a>"
    );

    var point7 = [39.4073, -106.6555];
    var myMarker7 = L.circle(
        point7,
        5000, {
            color: 'black',
            fillColor: 'white',
            fillOpacity: 0.8
        }
    );
    myMarker7.bindPopup(
        "<b>Lime Park</b><br> Elevation: 9,100 ft.<br>Number of routes: 72<br>Types of routes: Sport<br> <a href='https://www.mountainproject.com/v/lime-park-aka-lime-creek/105744451'>More Info</a>"
    );

    var point8 = [39.6042, -105.9481];
    var myMarker8 = L.circle(
        point8,
        5000, {
            color: 'black',
            fillColor: 'white',
            fillOpacity: 0.8
        }
    );
    myMarker8.bindPopup(
        "<b>Montezuma</b><br>Elevation: 9456 ft.<br>Number of routes: 83<br>Types of routes: Sport/TR/Trad/Boulder<br> <a href='https://www.mountainproject.com/v/keystone-aka-montezuma/105744388'>More Info</a>"
    );

    var point9 = [39.2603, -105.1011];
    var myMarker9 = L.circle(
        point9,
        5000, {
            color: 'black',
            fillColor: 'white',
            fillOpacity: 0.8
        }
    );
    myMarker9.bindPopup(
        "<b>Devil's Head</b><br> Elevation: 9000 ft.<br>Number of routes: 359<br>Type of routes: Sport/Trad/TR<br> <a href='https://www.mountainproject.com/v/devils-head/105744261'>More Info</a>"
    );

    var markers = L.layerGroup([myMarker, myMarker1, myMarker2, myMarker3, myMarker4, myMarker5, myMarker6, myMarker7, myMarker8, myMarker9])
        .addLayer(point)
        .addTo(mymap);

    // RESIZE ICONS WITH ZOOM LEVEL (NOT WORKING) //
    mymap.on('zoomend', function () {
        var currentZoom = mymap.getZoom();
        var myRadius = currentZoom * (1 / 2); //or whatever ratio you prefer
        markers.setStyle({
            radius: myRadius
        });
    });
    
});
