document.addEventListener('DOMContentLoaded', function () {

    var mymap = L.map('mapdiv').setView([39, -105.5], 7);

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
    weather.setOpacity(0.65);
    
});
