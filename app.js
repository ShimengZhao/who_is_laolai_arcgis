require([
  "esri/map", "esri/geometry/Extent", 
  "esri/layers/FeatureLayer", "esri/InfoTemplate", "esri/dijit/Legend",
  "esri/renderers/SimpleRenderer", "esri/Color", 
  "esri/symbols/SimpleFillSymbol", "esri/symbols/SimpleLineSymbol", 
  "dojo/domReady!"
  ], function(
    Map, Extent, 
    FeatureLayer, InfoTemplate, Legend,
    SimpleRenderer, Color, 
    SimpleFillSymbol, SimpleLineSymbol
  ) {

    // var map = new Map("map", {
    //   extent: new Extent({"xmin":-2460944,"ymin":-1389910,"xmax":2297115,"ymax":1643787,"spatialReference":{"wkid":102003}})
    // });

    var map = new Map("map", {
      basemap: "gray",
      zoom: 3
    });

  // var view = new MapView({
  //   container: "map",
  //   map: map,
  //   center: [-118.80500, 34.02700], // longitude, latitude
  //   zoom: 3
  // });

  var who_country_layer = new FeatureLayer(
    "https://services9.arcgis.com/DYJ7DbkMVmIBPMdR/arcgis/rest/services/country_owing_WHO/FeatureServer/0",{
      outFields: ["*"],
      infoTemplate: new InfoTemplate("${COUNTRY}", "<div style='font: 18px Segoe UI'><b>Total:</b> ${TOTAL_OWING:NumberFormat(places:0)} USD <br> <b>2020-2021:</b> ${P_2020_2021_OWING:NumberFormat(places:0)} USD <br> <b>2018-2019:</b> ${P_2018_2019_OWING:NumberFormat(places:0)} USD <br> <b>Prior 2018:</b> ${PRIOR_2018_OWING:NumberFormat(places:0)} USD</div>")
        });

  var legend = new Legend({
    map: map,
    layerInfos: [{ title: "Amount of Owed Money", layer: who_country_layer}]
  }, "legend");

  who_country_layer.on("load", function(){
    var renderer = new SimpleRenderer(new SimpleFillSymbol().setOutline(new SimpleLineSymbol().setWidth(0.1).setColor(new Color([128,128,128]))));
    renderer.setColorInfo({
      field: "TOTAL_OWING",
      minDataValue: 0,
      maxDataValue: 220000000,
      colors: [
        new Color([255, 255, 255]),
        new Color([255, 0, 0]),
        new Color([0, 0, 0])
      ],
    });
    who_country_layer.setRenderer(renderer);
    map.addLayer(who_country_layer);
    legend.startup();
  });



  // map.add(who_country_layer);


});