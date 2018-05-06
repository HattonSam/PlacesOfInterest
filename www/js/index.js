
var map;
var loc;
var path = [];

$(document).on("pageinit", "#pageone", function( ) {
    
    
   var find = navigator.geolocation.watchPosition(onLocationSuccess, onLocationFail)
    
});

//if gaining the location is a success
function onLocationSuccess(position) {
    
    loc = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    
    position.coords.latitude; position.coords.longitude
    
    path.push(loc);
    map = new google.maps.Map(document.getElementById('map'), {
        center: loc,
        zoom: 15
    });
    
    
     var mapPath = new google.maps.Polyline({
          path: path,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });
    //display the users location with a marker
    mapPath.setMap(map);
    var marker = new google.maps.Marker ({
        position: loc, 
        title: "Your location",
        map: map
    })
}
//if the app failes to gain location itll come up with an error message
function onLocationFail(error) {
    console.log("Error: " + error.message);
}







//The main reason this didnt work for the majority of testing was due to not adding '&libraries=places' at the end of the API key.
function initialize(){
    
    //New map has been created with markers on it for local shops
  
    map = new google.maps.Map(document.getElementById('map'), {
    center: loc,
    zoom: 15
  });

//requesting a query in a specific radius of the users current location
var request = {
    location: loc,
    radius: '5000',
    query: 'store'
  };

  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
}
// callback function. if there are 1 or more of this type of location it will create marker
function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]);
    }
  }
}
//reference for callback function and createMarker function https://developers.google.com/maps/documentation/javascript/examples/place-search 
// create marker function which will create a market from the place create in the callback and display them on the map
function createMarker(place) {
  var placeloc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

}

//this point on has the same code but with different potential search, for hotel and restaurant
function initializee(){
    
    //New map has been created with markers on it for local hotels
  
    map = new google.maps.Map(document.getElementById('map'), {
    center: loc,
    zoom: 15
  });


var request = {
    location: loc,
    radius: '5000',
    query: 'hotel'
  };

  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
}

function initializeee(){
    
    //New map has been created with markers on it for local restaurants
  
    map = new google.maps.Map(document.getElementById('map'), {
    center: loc,
    zoom: 15
  });


var request = {
    location: loc,
    radius: '5000',
    query: 'restaurant'
  };

  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
}

