var MapWrapper = function(container, coords, zoom){
  this.googleMap =  new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
  this.markers = [];
}

MapWrapper.prototype.addMarker = function(coords){
  var marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap,
    title: "A place"
  });
  this.markers.push(marker);

  var infowindow = new google.maps.InfoWindow({
    content: "this is some useless information"
  });

  marker.addListener('click', function() {
    infowindow.open(this.googleMap, marker);
  });
}

MapWrapper.prototype.addClickEvent = function(){
  google.maps.event.addListener(this.googleMap, 'click', function(event){
    this.addMarker({lat: event.latLng.lat(), lng: event.latLng.lng()});
  }.bind(this))
}

MapWrapper.prototype.bounceMarkers = function(){
  this.markers.forEach(function(marker){
    marker.setAnimation(google.maps.Animation.DROP)
  })
}

MapWrapper.prototype.moveMe = function(coords){
  var chicago = {lat: 41.879683, lng:-87.633225};
  this.googleMap.setCenter(chicago);
  // if (currentCenter.lat() === glasgow.lat){
  //   this.googleMap.setCenter(chicago);
  //
  // }else{
  //   this.googleMap.setCenter(glasgow);
  // }
}

MapWrapper.prototype.findMe = function(){
  navigator.geolocation.getCurrentPosition(function(position) {
    current = {lat: position.coords.latitude, lng: position.coords.longitude}
    this.googleMap.setCenter(current);

  }.bind(this))

}
