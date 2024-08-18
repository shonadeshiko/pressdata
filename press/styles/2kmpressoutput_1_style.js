var size = 0;
var placement = 'point';

var style_2kmpressoutput_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("wariai");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= -0.950033 && value <= -0.750033) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(43,131,186,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -0.750033 && value <= -0.550033) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(116,182,173,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -0.550033 && value <= -0.350033) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(183,226,168,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -0.350033 && value <= -0.150033) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(231,245,183,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -0.150000 && value <= -0.001000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(254,232,164,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -0.001000 && value <= 0.001000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(232,113,141,0.1568627450980392)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.001000 && value <= 0.250000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(253,186,110,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.249967 && value <= 0.449967) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(237,110,67,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.449967 && value <= 0.649967) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(215,25,28,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
