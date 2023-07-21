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
				"items": "Product 1",
				"percent": "44.8%"
			},{
				"items": "Product 2",
				"percent": "21.1%"
			}, {
				"items": "Product 3",
				"percent": "17.8%"
			}, {
				"items": "Product 4",
				"percent": "16.3%"
			}]
		}
	},
	mounted() {
		let chart = am4core.create("chartdiv", am4charts.PieChart);
		
		// Add and configure Series
		let pieSeries = chart.series.push(new am4charts.PieSeries());
		pieSeries.dataFields.value = "percent";
		pieSeries.dataFields.category = "items";

		// Let's cut a hole in our Pie chart the size of 30% the radius
		chart.innerRadius = am4core.percent(30);

		// Put a thick white border around each Slice
		pieSeries.slices.template.stroke = am4core.color("#fff");
		pieSeries.slices.template.strokeWidth = 2;
		pieSeries.slices.template.strokeOpacity = 1;
		pieSeries.slices.template
		// change the cursor on hover to make it apparent the object can be interacted with
		.cursorOverStyle = [
			{
				"property": "cursor",
				"value": "pointer"
			}
		];

		pieSeries.alignLabels = false;
		pieSeries.labels.template.bent = true;
		pieSeries.labels.template.radius = 3;
		pieSeries.labels.template.padding(0,0,0,0);

		pieSeries.ticks.template.disabled = true;

		// Create a base filter effect (as if it's not there) for the hover to return to
		let shadow = pieSeries.slices.template.filters.push(new am4core.DropShadowFilter);
		shadow.opacity = 0;

		// Create hover state
		let hoverState = pieSeries.slices.template.states.getKey("hover"); // normally we have to create the hover state, in this case it already exists

		// Slightly shift the shadow and make it more prominent on hover
		let hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter);
		hoverShadow.opacity = 0.7;
		hoverShadow.blur = 5;

		// Add a legend
		chart.legend = new am4charts.Legend();

		chart.data = this.chartData;
   }}
</script>

<!-- Styles -->
<style scoped>
#chartdiv {
  width: 100%;
  height: 300px;
}

</style>