require([
  "esri/map",
  "esri/layers/FeatureLayer", "esri/InfoTemplate", "esri/dijit/Legend",
  "esri/renderers/SimpleRenderer", "esri/Color",
  "esri/symbols/SimpleFillSymbol", "esri/symbols/SimpleLineSymbol",
  "dojo/domReady!"
], function (
  Map,
  FeatureLayer, InfoTemplate, Legend,
  SimpleRenderer, Color,
  SimpleFillSymbol, SimpleLineSymbol
) {

  let map = new Map("map", {
    basemap: "gray",
    zoom: 3
  });

  let who_country_layer = new FeatureLayer(
    "https://services9.arcgis.com/DYJ7DbkMVmIBPMdR/arcgis/rest/services/country_owing_WHO/FeatureServer/0", {
    outFields: ["*"],
    infoTemplate: new InfoTemplate("${COUNTRY}", "<div style='font: 18px Segoe UI'><b>Total:</b> ${TOTAL_OWING:NumberFormat(places:0)} USD <br> <b>2020-2021:</b> ${P_2020_2021_OWING:NumberFormat(places:0)} USD <br> <b>2018-2019:</b> ${P_2018_2019_OWING:NumberFormat(places:0)} USD <br> <b>Prior 2018:</b> ${PRIOR_2018_OWING:NumberFormat(places:0)} USD</div>")
  });

  let legend = new Legend({
    map: map,
    layerInfos: [{ title: "Amount of Owed Money", layer: who_country_layer }]
  }, "legend");

  who_country_layer.on("load", function () {
    let renderer = new SimpleRenderer(new SimpleFillSymbol().setOutline(new SimpleLineSymbol().setWidth(0.1).setColor(new Color([128, 128, 128]))));
    renderer.setVisualVariables([{
      type: "colorInfo",
      field: "TOTAL_OWING",
      minDataValue: 0,
      maxDataValue: 220000000,
      stops:[
        {
          value: 0,
          color: new Color([255,255,255]),
          label: "0"
        },
        {
          value: 1000000,
          color: new Color([255, 0, 0]),
          label: "5,000,000 USD"
        },
        {
          value: 220000000,
          color: new Color([0, 0, 0]),
          label: "220,000,000 USD"
        },
      ]
    }])
    who_country_layer.setRenderer(renderer);
    map.addLayer(who_country_layer);
    legend.startup();
  });
});