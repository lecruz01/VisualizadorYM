var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 19.3486482, lng: -99.54763059},
    zoom: 15,
    mapTypeId: 'hybrid'
  });
}