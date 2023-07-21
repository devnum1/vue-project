// News Letter Campaign Widget
import { Line } from 'vue-chartjs'
import { ChartConfig } from "Constants/chart-config";

const lineTension = lineTension;
const borderWidth = 3;
const pointRadius = 7;
const pointBorderWidth = 2;


export default {
	extends: Line,
	props: ["dataSet"],
	data() {
		return {
			options: {
				scales: {
					yAxes: [{
						 scaleLabel: {
							display: true,
							labelString: 'Y-Axis'
						},
						gridLines: {
							display: true,
							drawBorder: false
						},
						ticks: {
							stepSize: 50,
							display:true
						}
					}],
					xAxes: [{
						scaleLabel: {
							display: true,
							labelString: 'x-Axes'
						},
						gridLines: {
							display: false,
							drawBorder: false
						},
						ticks: {
							display:true
						}
					}]
				},
				legend: {
					display: false
				},
				responsive: true,
				maintainAspectRatio: false
			}
		}
	},
	mounted() {
		// console.log(this.dataSet+ "test");
		this.renderChart({
			labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
			datasets: [
				{
					label: 'Data',
					lineTension,
					borderColor: ChartConfig.color.primary,
					pointBorderColor: ChartConfig.color.primary,
					pointBorderWidth,
					pointRadius,
					fill: false,
					pointBackgroundColor: ChartConfig.color.white,
					borderWidth,
					data: this.dataSet
						}
			]
		}, this.options)
	}
}
