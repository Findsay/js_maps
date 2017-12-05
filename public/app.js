
var initialise = function(){
  var center = {lat:55.859068, lng:-4.218302};
  var container = document.getElementById('main-map');
  var zoom = 12;
  var mainMap = new MapWrapper(container, center, zoom);
  mainMap.addMarker(center);
  center = {lat:55.859665, lng:-4.250580};
  mainMap.addMarker(center);
  mainMap.addClickEvent();

  var bounceButton = document.getElementById('button-bounce');
  bounceButton.addEventListener('click', mainMap.bounceMarkers.bind(mainMap));

  var takeMeButton = document.getElementById('take-me');
  takeMeButton.addEventListener('click', mainMap.moveMe.bind(mainMap));

  var whereAmI = document.getElementById('where-am-i');
  whereAmI.addEventListener('click', mainMap.findMe.bind(mainMap));
}

window.addEventListener('load', initialise);
