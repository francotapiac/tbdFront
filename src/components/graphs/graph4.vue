<template>
    <div id="chartdiv4"></div>
</template>



<!-- Styles -->
<style>
#chartdiv4 {
  width: 100%;
  height: 500px
}

</style>

<!-- Chart code -->
<script>
am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("chartdiv4", am4charts.XYChart);

var valueAxisX = chart.xAxes.push(new am4charts.ValueAxis());
valueAxisX.renderer.ticks.template.disabled = true;
valueAxisX.renderer.axisFills.template.disabled = true;

var valueAxisY = chart.yAxes.push(new am4charts.ValueAxis());
valueAxisY.renderer.ticks.template.disabled = true;
valueAxisY.renderer.axisFills.template.disabled = true;

var series = chart.series.push(new am4charts.LineSeries());
series.dataFields.valueX = "x";
series.dataFields.valueY = "y";
series.dataFields.value = "value";
series.strokeOpacity = 0;
series.sequencedInterpolation = true;
series.tooltip.pointerOrientation = "vertical";

var bullet = series.bullets.push(new am4core.Circle());
bullet.fill = am4core.color("#ff0000");
bullet.propertyFields.fill = "color";
bullet.strokeOpacity = 0;
bullet.strokeWidth = 2;
bullet.fillOpacity = 0.5;
bullet.stroke = am4core.color("#ffffff");
bullet.hiddenState.properties.opacity = 0;
bullet.tooltipText = "[bold]{title}:[/]\nPopulation: {value.value}\nIncome: {valueX.value}\nLife expectancy:{valueY.value}";

var outline = chart.plotContainer.createChild(am4core.Circle);
outline.fillOpacity = 0;
outline.strokeOpacity = 0.8;
outline.stroke = am4core.color("#ff0000");
outline.strokeWidth = 2;
outline.hide(0);

var blurFilter = new am4core.BlurFilter();
outline.filters.push(blurFilter);

bullet.events.on("over", function(event) {
    var target = event.target;
    chart.cursor.triggerMove({ x: target.pixelX, y: target.pixelY }, "hard");
    chart.cursor.lineX.y = target.pixelY;
    chart.cursor.lineY.x = target.pixelX - chart.plotContainer.pixelWidth;
    valueAxisX.tooltip.disabled = false;
    valueAxisY.tooltip.disabled = false;

    outline.radius = target.pixelRadius + 2;
    outline.x = target.pixelX;
    outline.y = target.pixelY;
    outline.show();
})

bullet.events.on("out", function(event) {
    chart.cursor.triggerMove(event.pointer.point, "none");
    chart.cursor.lineX.y = 0;
    chart.cursor.lineY.x = 0;
    valueAxisX.tooltip.disabled = true;
    valueAxisY.tooltip.disabled = true;
    outline.hide();
})

var hoverState = bullet.states.create("hover");
hoverState.properties.fillOpacity = 1;
hoverState.properties.strokeOpacity = 1;

series.heatRules.push({ target: bullet, min: 2, max: 60, property: "radius" });

bullet.adapter.add("tooltipY", function (tooltipY, target) {
    return -target.radius;
})

chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "zoomXY";

chart.scrollbarX = new am4core.Scrollbar();
chart.scrollbarY = new am4core.Scrollbar();

chart.data = [
    {
        "title": "Afghanistan",
        "id": "AF",
        "color": "#eea638",
        "continent": "asia",
        "x": 1349.69694102398,
        "y": 60.524,
        "value": 33397058
    },
    {
        "title": "Albania",
        "id": "AL",
        "color": "#d8854f",
        "continent": "europe",
        "x": 6969.30628256456,
        "y": 77.185,
        "value": 3227373
    },
    {
        "title": "Argentina",
        "id": "AR",
        "color": "#86a965",
        "continent": "south_america",
        "x": 15714.1031814398,
        "y": 76.128,
        "value": 41118986
    },
    {
        "title": "Armenia",
        "id": "AM",
        "color": "#d8854f",
        "continent": "europe",
        "x": 5059.0879636443,
        "y": 74.469,
        "value": 3108972
    },
    {
        "title": "Australia",
        "id": "AU",
        "color": "#8aabb0",
        "continent": "australia",
        "x": 36064.7372768548,
        "y": 82.364,
        "value": 22918688
    },
    {
        "title": "Austria",
        "id": "AT",
        "color": "#d8854f",
        "continent": "europe",
        "x": 36731.6287741081,
        "y": 80.965,
        "value": 8428915
    },
    {
        "title": "Azerbaijan",
        "id": "AZ",
        "color": "#d8854f",
        "continent": "europe",
        "x": 9291.02626998762,
        "y": 70.686,
        "value": 9421233
    },
    {
        "title": "Bahrain",
        "id": "BH",
        "color": "#eea638",
        "continent": "asia",
        "x": 24472.896235865,
        "y": 76.474,
        "value": 1359485
    },
    {
        "title": "Bangladesh",
        "id": "BD",
        "color": "#eea638",
        "continent": "asia",
        "x": 1792.55023464123,
        "y": 70.258,
        "value": 152408774
    },
    {
        "title": "Belarus",
        "id": "BY",
        "color": "#d8854f",
        "continent": "europe",
        "x": 13515.1610255056,
        "y": 69.829,
        "value": 9527498
    },
    {
        "title": "Belgium",
        "id": "BE",
        "color": "#d8854f",
        "continent": "europe",
        "x": 32585.0119650436,
        "y": 80.373,
        "value": 10787788
    },
    {
        "title": "Benin",
        "id": "BJ",
        "color": "#de4c4f",
        "continent": "africa",
        "x": 1464.13825459126,
        "y": 59.165,
        "value": 9351838
    },
    {
        "title": "Bhutan",
        "id": "BT",
        "color": "#eea638",
        "continent": "asia",
        "x": 6130.86235464324,
        "y": 67.888,
        "value": 750443
    },
    {
        "title": "Bolivia",
        "id": "BO",
        "color": "#86a965",
        "continent": "south_america",
        "x": 4363.43264453337,
        "y": 66.969,
        "value": 10248042
    },
    {
        "title": "Bosnia and Herzegovina",
        "id": "BA",
        "color": "#d8854f",
        "continent": "europe",
        "x": 7664.15281166303,
        "y": 76.211,
        "value": 3744235
    },
    {
        "title": "Botswana",
        "id": "BW",
        "color": "#de4c4f",
        "continent": "africa",
        "x": 14045.9403255843,
        "y": 47.152,
        "value": 2053237
    },
    {
        "title": "Brazil",
        "id": "BR",
        "color": "#86a965",
        "continent": "south_america",
        "x": 10383.5405937283,
        "y": 73.667,
        "value": 198360943
    },
    {
        "title": "Brunei",
        "id": "BN",
        "color": "#eea638",
        "continent": "asia",
        "x": 45658.2532642054,
        "y": 78.35,
        "value": 412892
    },
    {
        "title": "Bulgaria",
        "id": "BG",
        "color": "#d8854f",
        "continent": "europe",
        "x": 11669.7223127119,
        "y": 73.448,
        "value": 7397873
    },
    {
        "title": "Burkina Faso",
        "id": "BF",
        "color": "#de4c4f",
        "continent": "africa",
        "x": 1363.77981282077,
        "y": 55.932,
        "value": 17481984
    },
    {
        "title": "Burundi",
        "id": "BI",
        "color": "#de4c4f",
        "continent": "africa",
        "x": 484.090924612833,
        "y": 53.637,
        "value": 8749387
    },
    {
        "title": "Cambodia",
        "id": "KH",
        "color": "#eea638",
        "continent": "asia",
        "x": 2076.68958647462,
        "y": 71.577,
        "value": 14478320
    },
    {
        "title": "Cameroon",
        "id": "CM",
        "color": "#de4c4f",
        "continent": "africa",
        "x": 2094.09541317011,
        "y": 54.61,
        "value": 20468943
    },
    {
        "title": "Canada",
        "id": "CA",
        "color": "#a7a737",
        "continent": "north_america",
        "x": 35992.8327204722,
        "y": 81.323,
        "value": 34674708
    },
    {
        "title": "Cape Verde",
        "id": "CV",
        "color": "#de4c4f",
        "continent": "africa",
        "x": 3896.04113919638,
        "y": 74.771,
        "value": 505335
    },
    {
        "title": "Central African Rep.",
        "id": "CF",
        "color": "#de4c4f",
        "continent": "africa",
        "x": 718.264633200085,
        "y": 49.517,
        "value": 4575586
    },
    {
        "title": "Chad",
        "id": "TD",
        "color": "#de4c4f",
        "continent": "africa",
        "x": 1768.88201756553,
        "y": 50.724,
        "value": 11830573
    },
    {
        "title": "Chile",
        "id": "CL",
        "color": "#86a965",
        "continent": "south_america",
        "x": 15403.7608144625,
        "y": 79.691,
        "value": 17423214
    },
    {
        "title": "China",
        "id": "CN",
        "color": "#eea638",
        "continent": "asia",
        "x": 9501.57424554247,
        "y": 75.178,
        "value": 1353600687
    },
    {
        "title": "Colombia",
        "id": "CO",
        "color": "#86a965",
        "continent": "south_america",
        "x": 8035.65638212719,
        "y": 73.835,
        "value": 47550708
    },
    {
        "title": "Comoros",
        "id": "KM",
        "color": "#de4c4f",
        "continent": "africa",
        "x": 1027.40854349726,
        "y": 60.661,
        "value": 773344
    },
    {
        "title": "Congo, Dem. Rep.",
        "id": "CD",
        "color": "#de4c4f",
        "continent": "africa",
        "x": 403.164594003407,
        "y": 49.643,
        "value": 69575394
    },
    {
        "title": "Congo, Rep.",
        "id": "CG",
        "color": "#de4c4f",
        "continent": "africa",
        "x": 4106.51173855966,
        "y": 58.32,
        "value": 4233063
    },
    {
        "title": "Costa Rica",
        "id": "CR",
        "color": "#a7a737",
        "continent": "north_america",
        "x": 10827.6787293035,
        "y": 79.712,
        "value": 4793725
    },
    {
        "title": "Cote d'Ivoire",
        "id": "CI",
        "color": "#de4c4f",
        "continent": "africa",
        "x": 1491.51631215108,
        "y": 50.367,
        "value": 20594615
    },
    {
        "title": "Croatia",
        "id": "HR",
        "color": "#d8854f",
        "continent": "europe",
        "x": 13388.9902780816,
        "y": 76.881,
        "value": 4387376
    },
    {
        "title": "Cuba",
        "id": "CU",
        "color": "#a7a737",
        "continent": "north_america",
        "x": 10197.4191892126,
        "y": 79.088,
        "value": 11249266
    },

];


}); 
</script>
