<!-- Pie Chart -->
<template>
  <div>
    <ECharts :options="pie" id="salesChart" style="width:100%; height:350px"></ECharts>
  </div>
</template>

<script>
import ECharts from "vue-echarts";
import "echarts/lib/chart/pie";
import "echarts/lib/component/title";
import { ChartConfig } from "Constants/chart-config";

export default {
  components: {
    ECharts
  },
  data() {
    return {
      pie: {
        backgroundColor: "transparent",
        avoidLabelOverlap: false,
        color: [
          ChartConfig.color.primary,
          ChartConfig.color.danger,
          ChartConfig.color.warning,
          ChartConfig.color.success
        ],
        series: [
          {
            name: "Product Sales",
            type: "pie",
            radius: "40%",
            center: ["50%", "50%"],
            data: [
              {
                value: 700,
                name: "Product A"
              },
              {
                value: 300,
                name: "Product B"
              },
              {
                value: 247,
                name: "Product C"
              },
              {                
                value: 379,
                name: "Product E"
              }
            ],
            label: {
              normal: {
                textStyle: {
                  color: "rgba(0, 0, 0, 1)"
                }
              }
            },
            itemStyle: {
              normal: {
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            },
            animationType: "scale",
            animationEasing: "elasticOut",
            animationDelay: function(idx) {
              return Math.random() * 20;
            }
          }
        ]
      },
      media: [
        {
          // query: {
          //   maxWidth: 650
          // },
          option: {
            legend: {
              display: true,  
              right: 10,
              top: '15%',
              orient: 'vertical'
            },
            series: [
              {
                radius: [20, '50%'],
                center: ['50%', '50%']
              },
              {
                radius: [30, '50%'],
                center: ['50%', '75%']
              }
            ]
          }
        }
      ]
    };
  }
};
</script>.
<style scoped>
/*#salesChart > :first-child{
  width: 100% !important; 
}

#salesChart > :first-child :first-child{
  width: 100% !important; 
}*/

</style>
