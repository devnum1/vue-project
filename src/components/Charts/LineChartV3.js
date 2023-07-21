// News Letter Campaign Widget
import { Line } from 'vue-chartjs'
import { ChartConfig } from "Constants/chart-config";

const lineTension = 0.1;
const borderWidth = 3;
const pointRadius = 6;
const pointBorderWidth = 2;


export default {
	extends: Line,
	props: {
      label: {
         type: String,
         default: () => "abc"
		},
      dataSet: {
			type: Array,
			default: () => [30, 5, 26,10,30]
		},
		label1: {
			type: String,
			default: () => 'Subscribed'
		},
		labels: {
			type: Array,
			default: () => ['A', 'B', 'C', 'D', 'E']
		}
	},
	data() {
		return {
			options: {
				responsive: true,
				maintainAspectRatio: false,
				scales: {
					yAxes: [{
						gridLines: {
							display: false,
							drawBorder: false
						},
						ticks: {
                     display:false
						}
					}],
					xAxes: [{
						gridLines: {
							display: false,
							drawBorder: false
						},
						ticks: {
                     display:false
						}
					}]
				},
				legend: {
					display: false
				}
			}
		}
	},
	mounted() {
      let self = this;
		this.renderChart({
			labels: this.labels,
			datasets: [
				{
					label: self.label,
					lineTension,
					borderColor: ChartConfig.color.white,
					pointBorderColor: ChartConfig.color.white,
					pointBorderWidth,
               pointRadius,
					fill: false,
					pointBackgroundColor: ChartConfig.color.white,
					borderWidth,
               data: this.dataSet,
                        
				},
				
			]
		}, this.options)
	}
}
