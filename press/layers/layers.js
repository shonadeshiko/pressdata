var wms_layers = [];


        var lyr__0 = new ol.layer.Tile({
            'title': '淡色マップ',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png'
            })
        });
var format_2kmpressoutput_1 = new ol.format.GeoJSON();
var features_2kmpressoutput_1 = format_2kmpressoutput_1.readFeatures(json_2kmpressoutput_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2kmpressoutput_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2kmpressoutput_1.addFeatures(features_2kmpressoutput_1);
var lyr_2kmpressoutput_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2kmpressoutput_1, 
                style: style_2kmpressoutput_1,
                popuplayertitle: "2kmpress — output",
                interactive: true,
    title: '2kmpress — output<br />\
    <img src="styles/legend/2kmpressoutput_1_0.png" /> -0.95 - -0.75<br />\
    <img src="styles/legend/2kmpressoutput_1_1.png" /> -0.75 - -0.55<br />\
    <img src="styles/legend/2kmpressoutput_1_2.png" /> -0.55 - -0.35<br />\
    <img src="styles/legend/2kmpressoutput_1_3.png" /> -0.35 - -0.15<br />\
    <img src="styles/legend/2kmpressoutput_1_4.png" /> -0.15 - 0<br />\
    <img src="styles/legend/2kmpressoutput_1_5.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/2kmpressoutput_1_6.png" /> 0 - 0.25<br />\
    <img src="styles/legend/2kmpressoutput_1_7.png" /> 0.25 - 0.45<br />\
    <img src="styles/legend/2kmpressoutput_1_8.png" /> 0.45 - 0.65<br />'
        });

lyr__0.setVisible(true);lyr_2kmpressoutput_1.setVisible(true);
var layersList = [lyr__0,lyr_2kmpressoutput_1];
lyr_2kmpressoutput_1.set('fieldAliases', {'fid': 'fid', 'wariai': 'wariai', });
lyr_2kmpressoutput_1.set('fieldImages', {'fid': 'TextEdit', 'wariai': 'TextEdit', });
lyr_2kmpressoutput_1.set('fieldLabels', {'fid': 'no label', 'fid2': 'no label', 'code': 'no label', 'presscount': 'no label', 'presssum': 'no label', 'wariai': 'inline label - visible with data', });
lyr_2kmpressoutput_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});