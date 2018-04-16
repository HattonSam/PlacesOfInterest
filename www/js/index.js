var find;
var map;
var loc;
var path = [];


       

$(document).on("pageinit", "#pageone", function( ) {
    
    
    find = navigator.geolocation.watchPosition(onLocationSuccess, onLocationFail)
    
});


function onLocationSuccess(position) {
    
    loc = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    
    position.coords.latitude; position.coords.longitude
    
    path.push(loc);
    map = new google.maps.Map(document.getElementById('map'), {
        center: loc,
        zoom: 12
    });
    
    
     var mapPath = new google.maps.Polyline({
          path: path,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });
    
    mapPath.setMap(map);
    var marker = new google.maps.Marker ({
        position: loc, 
        title: "Your location",
        map: map
    })
}

function onLocationFail(error) {
    console.log("Error: " + error.message);
}
function display()
{
    alert("Places of interest displayed.");
}