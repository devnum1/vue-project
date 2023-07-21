// News Letter Campaign Widget
import { Line } from 'vue-chartjs'
import { ChartConfig } from "Constants/chart-config";

const lineTension = lineTension;
const borderWidth = 3;
const pointRadius = 2;
const pointBorderWidth = 2;


export default {
	extends: Line,
	props: {
      dataSet: {
			type: Array
		},
		label: {
			type: Array,
			default: () => 'Subscribed'
		},
		labels: {
			type: Array
      },
      chartColorsData:{
         type: Array,
      },
	},
	data() {
		return {
			gradient1: ChartConfig.color.primary,
			gradient2: ChartConfig.color.primary,
			options: {
				scales: {
					yAxes: [{
						gridLines: {
							display: true,
							drawBorder: true
						},
						ticks: {
							stepSize: 25,
                     // padding: 5
                     display:true
						}
					}],
					xAxes: [{
						gridLines: {
							display: false,
							drawBorder: false
						},
						ticks: {
                     // padding: 10
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
      // console.log("this.dataSet="+this.dataSet)
      // console.log("this.label="+this.label)
		this.renderChart({
         labels: this.labels,
			datasets: [
				{
					label: (this.label[0]).label,
					lineTension,
					borderColor: this.chartColorsData[0].borderColor,
					pointBorderColor: this.chartColorsData[0].borderColor,
					pointBorderWidth,
               pointRadius,
					fill: false,
					pointBackgroundColor: ChartConfig.color.white,
					borderWidth,
					data: this.dataSet[0].data
            },
            {
					label: this.label[1].label,
					lineTension,
					borderColor: this.chartColorsData[1].borderColor,
					pointBorderColor: this.chartColorsData[1].borderColor,
					pointBorderWidth,
               pointRadius,
					fill: false,
					pointBackgroundColor: ChartConfig.color.white,
					borderWidth,
					data: this.dataSet[1].data
            },
            {
					label: this.label[2].label,
					lineTension,
					borderColor: this.chartColorsData[2].borderColor,
					pointBorderColor: this.chartColorsData[2].borderColor,
					pointBorderWidth,
               pointRadius,
					fill: false,
					pointBackgroundColor: ChartConfig.color.white,
					borderWidth,
					data: this.dataSet[2].data
				},
				
			]
		}, this.options)
	}
}
