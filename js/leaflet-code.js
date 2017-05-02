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
    var myMarker = L.circleMarker(point);
    myMarker.bindPopup(
        '<b>Horsetooth</b><br> Elevation: 5607 ft.<br> Number of routes: 224<br> Type of routes: TR/Sport/Boulder/Trad<br> <a href="https://www.mountainproject.com/v/horsetooth-reservoir/105744295">More Info</a><br><span style="display: block !important; width: 320px; text-align: center; font-family: sans-serif; font-size: 12px;"><a href="http://www.wunderground.com/cgi-bin/findweather/getForecast?query=zmw:80521.1.99999&bannertypeclick=wu_clean2day" title="Fort Collins, Colorado Weather Forecast" target="_blank"><img src="http://weathersticker.wunderground.com/weathersticker/cgi-bin/banner/ban/wxBanner?bannertype=wu_clean2day_cond&airportcode=KFNL&ForcedCity=Fort Collins&ForcedState=CO&zip=80521&language=EN" alt="Find more about Weather in Fort Collins, CO" width="300" /></a><br><a href="http://www.wunderground.com/cgi-bin/findweather/getForecast?query=zmw:80521.1.99999&bannertypeclick=wu_clean2day" title="Get latest Weather Forecast updates" style="font-family: sans-serif; font-size: 12px" target="_blank">Click for weather forecast</a></span>'
    );

    var point1 = [40.694621, -105.378603];
    var myMarker1 = L.circleMarker(point1);
    myMarker1.bindPopup(
        '<b>The Palace</b><br> Elevation: 6057 ft.<br> Number of routes: 105<br> Type of routes: Sport/Trad<br> <a href="https://www.mountainproject.com/v/the-palace/105873941">More Info</a><br> <span style="display: block !important; width: 320px; text-align: center; font-family: sans-serif; font-size: 12px;"><a href="http://www.wunderground.com/cgi-bin/findweather/getForecast?query=zmw:80512.1.99999&bannertypeclick=wu_clean2day" title="Bellvue, Colorado Weather Forecast" target="_blank"><img src="http://weathersticker.wunderground.com/weathersticker/cgi-bin/banner/ban/wxBanner?bannertype=wu_clean2day_cond&airportcode=KFNL&ForcedCity=Bellvue&ForcedState=CO&zip=80512&language=EN" alt="Find more about Weather in Bellvue, CO" width="300" /></a><br><a href="http://www.wunderground.com/cgi-bin/findweather/getForecast?query=zmw:80512.1.99999&bannertypeclick=wu_clean2day" title="Get latest Weather Forecast updates" style="font-family: sans-serif; font-size: 12px" target="_blank">Click for weather forecast</a></span>'
    );

    var point2 = [38.873621, -104.880550];
    var myMarker2 = L.circleMarker(point2);
    myMarker2.bindPopup(
        '<b>Garden of the Gods</b><br> Elevation: 6455 ft.<br> Number of routes: 144<br> Type of routes: Sport/Trad/TR/Boulder<br> <a href="https://www.mountainproject.com/v/garden-of-the-gods/105744301">More Info</a><br> <span style="display: block !important; width: 320px; text-align: center; font-family: sans-serif; font-size: 12px;"><a href="http://www.wunderground.com/cgi-bin/findweather/getForecast?query=zmw:80901.1.99999&bannertypeclick=wu_clean2day" title="Colorado Springs, Colorado Weather Forecast" target="_blank"><img src="http://weathersticker.wunderground.com/weathersticker/cgi-bin/banner/ban/wxBanner?bannertype=wu_clean2day_cond&airportcode=KCOS&ForcedCity=Colorado Springs&ForcedState=CO&zip=80901&language=EN" alt="Find more about Weather in Colorado Springs, CO" width="300" /></a><br><a href="http://www.wunderground.com/cgi-bin/findweather/getForecast?query=zmw:80901.1.99999&bannertypeclick=wu_clean2day" title="Get latest Weather Forecast updates" style="font-family: sans-serif; font-size: 12px" target="_blank">Click for weather forecast</a></span>'
    );

    var point3 = [39.791291, -105.201154];
    var myMarker3 = L.circleMarker(point3);
    myMarker3.bindPopup(
        '<b>Golden Cliffs</b><br> Elevation: 6424 ft.<br> Number of routes: 471<br> Type of routes: Sport/Trad/TR<br> <a href="https://www.mountainproject.com/v/north-table-mountaingolden-cliffs/105744249">More Info</a><br> <span style="display: block !important; width: 320px; text-align: center; font-family: sans-serif; font-size: 12px;"><a href="http://www.wunderground.com/cgi-bin/findweather/getForecast?query=zmw:80401.1.99999&bannertypeclick=wu_clean2day" title="Golden, Colorado Weather Forecast" target="_blank"><img src="http://weathersticker.wunderground.com/weathersticker/cgi-bin/banner/ban/wxBanner?bannertype=wu_clean2day_cond&airportcode=KBJC&ForcedCity=Golden&ForcedState=CO&zip=80401&language=EN" alt="Find more about Weather in Golden, CO" width="300" /></a><br><a href="http://www.wunderground.com/cgi-bin/findweather/getForecast?query=zmw:80401.1.99999&bannertypeclick=wu_clean2day" title="Get latest Weather Forecast updates" style="font-family: sans-serif; font-size: 12px" target="_blank">Click for weather forecast</a></span>'
    );

    var point4 = [39.932288, -105.286480];
    var myMarker4 = L.circleMarker(point4);
    myMarker4.bindPopup(
        '<b>Eldorado Canyon</b><br>Elevation: 5821 ft.<br>Number of routes: 1,140<br> Type of routes: Trad/Sport/TR/Boulder<br> <a href="https://www.mountainproject.com/v/eldorado-canyon-sp/105744246">More Info</a><br> <span style="display: block !important; width: 320px; text-align: center; font-family: sans-serif; font-size: 12px;"><a href="http://www.wunderground.com/cgi-bin/findweather/getForecast?query=zmw:80301.1.99999&bannertypeclick=wu_clean2day" title="Boulder, Colorado Weather Forecast" target="_blank"><img src="http://weathersticker.wunderground.com/weathersticker/cgi-bin/banner/ban/wxBanner?bannertype=wu_clean2day_cond&airportcode=KBDU&ForcedCity=Boulder&ForcedState=CO&zip=80301&language=EN" alt="Find more about Weather in Boulder, CO" width="300" /></a><br><a href="http://www.wunderground.com/cgi-bin/findweather/getForecast?query=zmw:80301.1.99999&bannertypeclick=wu_clean2day" title="Get latest Weather Forecast updates" style="font-family: sans-serif; font-size: 12px" target="_blank">Click for weather forecast</a></span>'
    );

    var point5 = [40.41555, -105.3761];
    var myMarker5 = L.circleMarker(point5);
    myMarker5.bindPopup(
        "<b>Mary's Bust</b><br> Elevation: 6687 ft.<br> Number of routes: 48<br> Type of routes: Trad/Sport<br> <a href='https://www.mountainproject.com/v/marys-bust-area/106811702'>More Info</a><br> <span style='display: block !important; width: 320px; text-align: center; font-family: sans-serif; font-size: 12px;'><a href='http://www.wunderground.com/cgi-bin/findweather/getForecast?query=zmw:80511.1.99999&bannertypeclick=wu_clean2day' title='Estes Park, Colorado Weather Forecast' target='_blank'><img src='http://weathersticker.wunderground.com/weathersticker/cgi-bin/banner/ban/wxBanner?bannertype=wu_clean2day_cond&airportcode=KCRV&ForcedCity=Estes Park&ForcedState=CO&zip=80511&language=EN' alt='Find more about Weather in Estes Park, CO' width='300' /></a><br><a href='http://www.wunderground.com/cgi-bin/findweather/getForecast?query=zmw:80511.1.99999&bannertypeclick=wu_clean2day' title='Get latest Weather Forecast updates' style='font-family: sans-serif; font-size: 12px' target='_blank'>Click for weather forecast</a></span>"
    );

    var point6 = [38.818, -108.6012];
    var myMarker6 = L.circleMarker(point6);
    myMarker6.bindPopup(
        '<b>Unaweep Canyon</b><br> Elevation: 6816 ft.<br>Number of routes: 1,746<br>Type of routes: Trad/Sport/Boulder/TR<br> <a href="https://www.mountainproject.com/v/unaweep-canyon/105744400">More Info</a><br> <span style="display: block !important; width: 320px; text-align: center; font-family: sans-serif; font-size: 12px;"><a href="http://www.wunderground.com/cgi-bin/findweather/getForecast?query=zmw:81501.1.99999&bannertypeclick=wu_clean2day" title="Grand Junction, Colorado Weather Forecast" target="_blank"><img src="http://weathersticker.wunderground.com/weathersticker/cgi-bin/banner/ban/wxBanner?bannertype=wu_clean2day_cond&airportcode=KGJT&ForcedCity=Grand Junction&ForcedState=CO&zip=81501&language=EN" alt="Find more about Weather in Grand Junction, CO" width="300" /></a><br><a href="http://www.wunderground.com/cgi-bin/findweather/getForecast?query=zmw:81501.1.99999&bannertypeclick=wu_clean2day" title="Get latest Weather Forecast updates" style="font-family: sans-serif; font-size: 12px" target="_blank">Click for weather forecast</a></span>'
    );

    var point7 = [39.4073, -106.6555];
    var myMarker7 = L.circleMarker(point7);
    myMarker7.bindPopup(
        '<b>Lime Park</b><br> Elevation: 9,100 ft.<br>Number of routes: 72<br>Types of routes: Sport<br> <a href="https://www.mountainproject.com/v/lime-park-aka-lime-creek/105744451">More Info</a><br> <span style="display: block !important; width: 320px; text-align: center; font-family: sans-serif; font-size: 12px;"><a href="http://www.wunderground.com/cgi-bin/findweather/getForecast?query=zmw:81611.1.99999&bannertypeclick=wu_clean2day" title="Aspen, Colorado Weather Forecast" target="_blank"><img src="http://weathersticker.wunderground.com/weathersticker/cgi-bin/banner/ban/wxBanner?bannertype=wu_clean2day_cond&airportcode=KASE&ForcedCity=Aspen&ForcedState=CO&zip=81611&language=EN" alt="Find more about Weather in Aspen, CO" width="300" /></a><br><a href="http://www.wunderground.com/cgi-bin/findweather/getForecast?query=zmw:81611.1.99999&bannertypeclick=wu_clean2day" title="Get latest Weather Forecast updates" style="font-family: sans-serif; font-size: 12px" target="_blank">Click for weather forecast</a></span>'
    );

    var point8 = [39.6042, -105.9481];
    var myMarker8 = L.circleMarker(point8);
    myMarker8.bindPopup(
        '<b>Montezuma</b><br>Elevation: 9456 ft.<br>Number of routes: 83<br>Types of routes: Sport/TR/Trad/Boulder<br> <a href="https://www.mountainproject.com/v/keystone-aka-montezuma/105744388">More Info</a><br><span style="display: block !important; width: 320px; text-align: center; font-family: sans-serif; font-size: 12px;"><a href="http://www.wunderground.com/cgi-bin/findweather/getForecast?query=zmw:80424.1.99999&bannertypeclick=wu_clean2day" title="Breckenridge, Colorado Weather Forecast" target="_blank"><img src="http://weathersticker.wunderground.com/weathersticker/cgi-bin/banner/ban/wxBanner?bannertype=wu_clean2day_cond&airportcode=KCCU&ForcedCity=Breckenridge&ForcedState=CO&zip=80424&language=EN" alt="Find more about Weather in Breckenridge, CO" width="300" /></a><br><a href="http://www.wunderground.com/cgi-bin/findweather/getForecast?query=zmw:80424.1.99999&bannertypeclick=wu_clean2day" title="Get latest Weather Forecast updates" style="font-family: sans-serif; font-size: 12px" target="_blank">Click for weather forecast</a></span>'
    );

    var point9 = [39.2603, -105.1011];
    var myMarker9 = L.circleMarker(point9);
    myMarker9.bindPopup(
        "<b>Devil's Head</b><br> Elevation: 9000 ft.<br>Number of routes: 359<br>Type of routes: Sport/Trad/TR<br> <a href='https://www.mountainproject.com/v/devils-head/105744261'>More Info</a><br> <span style='display: block !important; width: 320px; text-align: center; font-family: sans-serif; font-size: 12px;'><a href='http://www.wunderground.com/cgi-bin/findweather/getForecast?query=zmw:80118.1.99999&bannertypeclick=wu_clean2day' title='Larkspur, Colorado Weather Forecast' target='_blank'><img src='http://weathersticker.wunderground.com/weathersticker/cgi-bin/banner/ban/wxBanner?bannertype=wu_clean2day_cond&airportcode=KMNH&ForcedCity=Larkspur&ForcedState=CO&zip=80118&language=EN' alt='Find more about Weather in Larkspur, CO' width='300' /></a><br><a href='http://www.wunderground.com/cgi-bin/findweather/getForecast?query=zmw:80118.1.99999&bannertypeclick=wu_clean2day' title='Get latest Weather Forecast updates' style='font-family: sans-serif; font-size: 12px' target='_blank'>Click for weather forecast</a></span>"
    );

    var markers = L.layerGroup([myMarker, myMarker1, myMarker2, myMarker3, myMarker4, myMarker5, myMarker6, myMarker7, myMarker8, myMarker9])
        .addTo(mymap);

});
