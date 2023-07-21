<template>
	<div>
		<div id="chartdiv"></div>
	</div>	
</template>

<!-- Chart code -->
<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

export default {
	data(){
		return {
			chartData: [{
            "date": "2011-08-01",
            "open": "186.65",
            "high": "136.96",
            "low": "134.15",
            "close": "136.49"
         }, {
            "date": "2011-08-02",
            "open": "186.65",
            "high": "135.95",
            "low": "131.50",
            "close": "131.85"
         }, {
            "date": "2011-08-05",
            "open": "186.65",
            "high": "135.27",
            "low": "128.30",
            "close": "135.25"
         }, {
            "date": "2011-08-06",
            "open": "186.65",
            "high": "137.24",
            "low": "132.63",
            "close": "135.03"
         }, {
            "date": "2011-08-07",
            "open": "186.65",
            "high": "136.86",
            "low": "132.00",
            "close": "134.01"
         }, {
            "date": "2011-08-08",
            "open": "186.65",
            "high": "133.00",
            "low": "125.09",
            "close": "126.39"
         }, {
            "date": "2011-08-09",
            "open": "186.65",
            "high": "127.75",
            "low": "120.30",
            "close": "125.00"
         }, {
            "date": "2011-08-12",
            "open": "186.65",
            "high": "129.35",
            "low": "126.50",
            "close": "127.79"
         }, {
            "date": "2011-08-13",
            "open": "186.65",
            "high": "128.30",
            "low": "123.71",
            "close": "124.03"
         }, {
            "date": "2011-08-14",
            "open": "186.65",
            "high": "124.86",
            "low": "119.65",
            "close": "119.90"
         }, {
            "date": "2011-08-15",
            "open": "186.65",
            "high": "118.50",
            "low": "111.62",
            "close": "117.05"
         }, {
            "date": "2011-08-16",
            "open": "186.65",
            "high": "123.50",
            "low": "119.82",
            "close": "122.06"
         }, {
            "date": "2011-08-19",
            "open": "186.65",
            "high": "124.50",
            "low": "120.50",
            "close": "122.22"
         }, {
            "date": "2011-08-20",
            "open": "186.65",
            "high": "128.96",
            "low": "121.00",
            "close": "127.57"
         }, {
            "date": "2011-08-21",
            "open": "186.65",
            "high": "132.75",
            "low": "130.33",
            "close": "132.51"
         }, {
            "date": "2011-08-22",
            "open": "186.65",
            "high": "133.34",
            "low": "129.76",
            "close": "131.07"
         }, {
            "date": "2011-08-23",
            "open": "186.65",
            "high": "135.37",
            "low": "129.81",
            "close": "135.30"
         }, {
            "date": "2011-08-26",
            "open": "186.65",
            "high": "134.66",
            "low": "132.10",
            "close": "132.25"
         }, {
            "date": "2011-08-27",
            "open": "186.65",
            "high": "132.41",
            "low": "126.63",
            "close": "126.82"
         }, {
            "date": "2011-08-28",
            "open": "186.65",
            "high": "134.18",
            "low": "129.54",
            "close": "134.08"
         }, {
            "date": "2011-08-29",
            "open": "186.65",
            "high": "138.25",
            "low": "132.30",
            "close": "136.25"
         }, {
            "date": "2011-08-30",
            "open": "186.65",
            "high": "139.65",
            "low": "137.41",
            "close": "138.48"
         }, {
            "date": "2011-09-03",
            "open": "186.65",
            "high": "145.73",
            "low": "139.84",
            "close": "144.16"
         }, {
            "date": "2011-09-04",
            "open": "186.65",
            "high": "145.84",
            "low": "136.10",
            "close": "136.76"
         }, {
            "date": "2011-09-05",
            "open": "186.65",
            "high": "137.57",
            "low": "132.71",
            "close": "135.01"
         }, {
            "date": "2011-09-06",
            "open": "186.65",
            "high": "132.30",
            "low": "130.00",
            "close": "131.77"
         }, {
            "date": "2011-09-09",
            "open": "186.65",
            "high": "138.04",
            "low": "133.95",
            "close": "136.71"
         }, {
            "date": "2011-09-10",
            "open": "186.65",
            "high": "138.30",
            "low": "133.75",
            "close": "135.49"
         }, {
            "date": "2011-09-11",
            "open": "186.65",
            "high": "139.40",
            "low": "135.75",
            "close": "136.85"
         }, {
            "date": "2011-09-12",
            "open": "186.65",
            "high": "139.00",
            "low": "136.65",
            "close": "137.20"
         }, {
            "date": "2011-09-13",
            "open": "186.65",
            "high": "138.98",
            "low": "136.20",
            "close": "138.81"
         }, {
            "date": "2011-09-16",
            "open": "186.65",
            "high": "140.59",
            "low": "137.60",
            "close": "138.41"
         }, {
            "date": "2011-09-17",
            "open": "186.65",
            "high": "142.85",
            "low": "137.83",
            "close": "140.92"
         }, {
            "date": "2011-09-18",
            "open": "186.65",
            "high": "143.16",
            "low": "139.40",
            "close": "140.77"
         }, {
            "date": "2011-09-19",
            "open": "186.65",
            "high": "141.79",
            "low": "139.32",
            "close": "140.31"
         }, {
            "date": "2011-09-20",
            "open": "186.65",
            "high": "144.65",
            "low": "140.31",
            "close": "144.15"
         }, {
            "date": "2011-09-23",
            "open": "186.65",
            "high": "149.85",
            "low": "146.65",
            "close": "148.28"
         }, {
            "date": "2011-09-24",
            "open": "186.65",
            "high": "153.22",
            "low": "146.82",
            "close": "153.18"
         }, {
            "date": "2011-09-25",
            "open": "186.65",
            "high": "155.00",
            "low": "151.25",
            "close": "152.77"
         }, {
            "date": "2011-09-26",
            "open": "186.65",
            "high": "154.52",
            "low": "152.32",
            "close": "154.50"
         }, {
            "date": "2011-09-27",
            "open": "186.65",
            "high": "154.60",
            "low": "152.75",
            "close": "153.47"
         }, {
            "date": "2011-09-30",
            "open": "186.65",
            "high": "157.41",
            "low": "152.93",
            "close": "156.34"
         }, {
            "date": "2011-10-01",
            "open": "186.65",
            "high": "158.59",
            "low": "155.89",
            "close": "158.45"
         }, {
            "date": "2011-10-02",
            "open": "186.65",
            "high": "159.18",
            "low": "157.01",
            "close": "157.92"
         }, {
            "date": "2011-10-03",
            "open": "186.65",
            "high": "158.08",
            "low": "153.50",
            "close": "156.24"
         }, {
            "date": "2011-10-04",
            "open": "186.65",
            "high": "161.58",
            "low": "157.70",
            "close": "161.45"
         }, {
            "date": "2011-10-07",
            "open": "186.65",
            "high": "167.91",
            "low": "162.97",
            "close": "167.91"
         }, {
            "date": "2011-10-08",
            "open": "186.65",
            "high": "171.11",
            "low": "166.68",
            "close": "167.86"
         }, {
            "date": "2011-10-09",
            "open": "186.65",
            "high": "167.88",
            "low": "165.60",
            "close": "166.79"
         }, {
            "date": "2011-10-10",
            "open": "186.65",
            "high": "171.88",
            "low": "153.21",
            "close": "162.23"
         }, {
            "date": "2011-10-11",
            "open": "186.65",
            "high": "167.28",
            "low": "161.80",
            "close": "167.25"
         }, {
            "date": "2011-10-14",
            "open": "186.65",
            "high": "169.57",
            "low": "163.50",
            "close": "166.98"
         }, {
            "date": "2011-10-15",
            "open": "186.65",
            "high": "170.18",
            "low": "165.15",
            "close": "169.58"
         }, {
            "date": "2011-10-16",
           "open": "186.65",
            "high": "173.04",
            "low": "169.18",
            "close": "172.75"
         }]
		}
	},
	mounted() {
      let chart = am4core.create("chartdiv", am4charts.XYChart);
      chart.paddingRight = 20;

      chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";

      let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.location = 0;

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.tooltip.disabled = true;

      let series = chart.series.push(new am4charts.CandlestickSeries());
      series.dataFields.dateX = "date";
      series.dataFields.valueY = "close";
      series.dataFields.openValueY = "open";
      series.dataFields.lowValueY = "low";
      series.dataFields.highValueY = "high";
      series.simplifiedProcessing = true;
      series.tooltipText = "Open:${openValueY.value}\nLow:${lowValueY.value}\nHigh:${highValueY.value}\nClose:${valueY.value}";

      chart.cursor = new am4charts.XYCursor();

      // a separate series for scrollbar
      let lineSeries = chart.series.push(new am4charts.LineSeries());
      lineSeries.dataFields.dateX = "date";
      lineSeries.dataFields.valueY = "close";
      // need to set on default state, as initially series is "show"
      lineSeries.defaultState.properties.visible = false;

      // hide from legend too (in case there is one)
      lineSeries.hiddenInLegend = true;
      lineSeries.fillOpacity = 0.5;
      lineSeries.strokeOpacity = 0.5;

      let scrollbarX = new am4charts.XYChartScrollbar();
      scrollbarX.series.push(lineSeries);
      chart.scrollbarX = scrollbarX;

      chart.data = this.chartData;
   }}
</script>

<!-- Styles -->
<style scoped>
#chartdiv {
  width: 100%;
  height: 500px;
}

</style>