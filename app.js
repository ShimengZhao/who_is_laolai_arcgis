require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/FeatureLayer"
  ], function(Map, MapView, FeatureLayer) {

  var map = new Map({
    basemap: "gray"
  });

  var view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-118.80500, 34.02700], // longitude, latitude
    zoom: 2
  });

  var trailheadsLayer = new FeatureLayer({
    url: "https://services9.arcgis.com/DYJ7DbkMVmIBPMdR/arcgis/rest/services/country_owing_WHO/FeatureServer/0"
  });

  map.add(trailheadsLayer);


});