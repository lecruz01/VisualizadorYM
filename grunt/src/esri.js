var map;

require([
"esri/config",
"esri/InfoTemplate",
"esri/map",
"esri/request",
"esri/geometry/scaleUtils",
"esri/layers/FeatureLayer",
"esri/renderers/SimpleRenderer",
"esri/symbols/PictureMarkerSymbol",
"esri/symbols/SimpleFillSymbol",
"esri/symbols/SimpleLineSymbol",
"dojo/dom",
"dojo/json",
"dojo/on",
"dojo/parser",
"dojo/sniff",
"dojo/_base/array",
"esri/Color",
"dojo/_base/lang",
"dijit/layout/BorderContainer",
"dijit/layout/ContentPane",
"dojo/domReady!"
],
function (
esriConfig, InfoTemplate, Map, request, scaleUtils, FeatureLayer,
SimpleRenderer, PictureMarkerSymbol, SimpleFillSymbol, SimpleLineSymbol,
dom, JSON, on, parser, sniff, arrayUtils, Color, lang
) {

    parser.parse();

    var portalUrl = "https://www.arcgis.com";

    esriConfig.defaults.io.proxyUrl = "/proxy/";

    on(dom.byId("file-upload-form"), "change", function (event) {
        dom.byId('upload-status').style.display = 'block';
        var fileName = event.target.value.toLowerCase();

        if (sniff("ie")) { //filename is full path in IE so extract the file name
            var arr = fileName.split("\\");
            fileName = arr[arr.length - 1];
        }
        if (fileName.indexOf(".zip") !== -1) {//is file a zip - if not notify user
            generateFeatureCollection(fileName);
        }
        else {
            dom.byId('upload-status').innerHTML = '<p style="color:red">Debes cargar un archivo shapefile en formato .zip</p>';
        }
    });

    map = new Map("map", {
    basemap: "topo",
    center: [-41.647, 36.41],
    zoom: 3,
    slider: false
    });

    function generateFeatureCollection (fileName) {
        var name = fileName.split(".");
        name = name[0].replace("c:\\fakepath\\", "");

        dom.byId('upload-status').innerHTML = '<b style="color: blue;"><i class="fa fa-spin fa-spinner"></i>  Loading ' + name + '</b>';

        var params = {
            'name': name,
            'targetSR': map.spatialReference,
            'maxRecordCount': 1000,
            'enforceInputFileSizeLimit': true,
            'enforceOutputJsonSizeLimit': true
        };

        var extent = scaleUtils.getExtentForScale(map, 40000);
        var resolution = extent.getWidth() / map.width;
        params.generalize = true;
        params.maxAllowableOffset = resolution;
        params.reducePrecision = true;
        params.numberOfDigitsAfterDecimal = 0;
       console.log("Params: " + JSON.stringify(params));

        var myContent = {
            'filetype': 'shapefile',
            'publishParameters': JSON.stringify(params),
            'f': 'json',
            'callback.html': 'textarea'
        };

        request({
            url: portalUrl + '/sharing/rest/content/features/generate',
            content: myContent,
            form: dom.byId('uploadForm'),
            handleAs: 'json',
            load: lang.hitch(this, loadHandler),
            error: lang.hitch(this, errorHandler)
        });
    }

    function loadHandler(response) {
        if (response.error) {
            console.log("Response: " + response);
            errorHandler(response.error);
            return;
        }
        var layerName = response.featureCollection.layers[0].layerDefinition.name;
        dom.byId('upload-status').innerHTML = '<b>Loaded: </b>' + layerName;
        addShapefileToMap(response.featureCollection);
    }

    function errorHandler (error) {
        console.log(error);
        dom.byId('upload-status').innerHTML = "<p style='color:red'>Error: " + error.message + "</p>";
    }

    function addShapefileToMap (featureCollection) {
    //add the shapefile to the map and zoom to the feature collection extent
    //If you want to persist the feature collection when you reload browser you could store the collection in
    //local storage by serializing the layer using featureLayer.toJson()  see the 'Feature Collection in Local Storage' sample
    //for an example of how to work with local storage.
    var fullExtent;
    var layers = [];

    arrayUtils.forEach(featureCollection.layers, function (layer) {
        var infoTemplate = new InfoTemplate("Details", "${*}");
        var featureLayer = new FeatureLayer(layer, {
        infoTemplate: infoTemplate
        });
        //associate the feature with the popup on click to enable highlight and zoom to
        featureLayer.on('click', function (event) {
        map.infoWindow.setFeatures([event.graphic]);
        });
        fullExtent = fullExtent ?
        fullExtent.union(featureLayer.fullExtent) : featureLayer.fullExtent;
        layers.push(featureLayer);
    });
    map.addLayers(layers);
    map.setExtent(fullExtent.expand(1.25), true);

    dom.byId('upload-status').innerHTML = "";
    }
});