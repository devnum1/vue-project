/**
 * Sales Chart Component
 */

import { Line } from 'vue-chartjs'

// Main Component
export default {
    extends: Line,
    props: ['label', 'chartdata', 'labels', 'borderColor', 'pointBackgroundColor', 'height', 'pointBorderColor', 'borderWidth','shadowColor'],
    data() {
        return {
            options: {
               legend: {
                  display: false
               },
               scales: {
                  xAxes: [{
                     display: false,
                     ticks: {
                           min: 0
                     },
                     gridLines: {
                           display: true,
                           drawBorder: false
                     }
                  }],
                  yAxes: [{
                     display: false,
                     ticks: {
                           suggestedMin: 0,
                           beginAtZero: true
                     }
                  }]
               },
               tooltips: {enabled: false},
               hover: {mode: null},
                
            }
        }
    },
    mounted() {
        const { chartdata, labels, borderColor, borderWidth, pointBorderColor, pointBackgroundColor } = this;
        
        let self = this;
         // console.log("shadowColor="+self.shadowColor);
         if (this.enableShadow !== false) {
            let ctx = this.$refs.canvas.getContext('2d')
            let _stroke = ctx.stroke
            ctx.stroke = function () {
               ctx.save()
               ctx.shadowColor = self.shadowColor
               ctx.shadowBlur = 10
               ctx.shadowOffsetX = 0
               ctx.shadowOffsetY = 8
               _stroke.apply(this, arguments)
               ctx.restore()
            }
         }

         let gradientColor = ' '
         if (this.enableGradient) {
            this.gradient1 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 140, 0)
            this.gradient1.addColorStop(0, this.gradientColor1)
            this.gradient1.addColorStop(1, this.gradientColor2)
            gradientColor = this.gradient1
         } else {
            gradientColor = this.borderColor
         }
        
        
        
        this.renderChart({
            labels,
            datasets: [
               {
                  fill: false,
                  lineTension: 0,
                  fillOpacity: 0.3,
                  borderColor: gradientColor,
                  borderWidth: this.borderWidth,
                  pointBorderColor,
                  pointBackgroundColor,
                  pointBorderWidth: 3,
                  pointRadius: 6,
                  pointHoverBackgroundColor: pointBackgroundColor,
                  pointHoverBorderColor: borderColor,
                  pointHoverBorderWidth: 4,
                  pointHoverRadius: 7,
                  data: chartdata
               }
            ]
        }, this.options)
    }
}