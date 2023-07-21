<!-- Doughnut Chart -->
<template>
    <ECharts :options="pie" style="width:100%; height:300px"></ECharts>
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
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        color: [
          ChartConfig.color.primary,
          ChartConfig.color.danger,
          ChartConfig.color.info,
          ChartConfig.color.success,
          ChartConfig.color.warning
        ],
        series: [
          {
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            data: [
              {
                value: 60,
                name: "Product 1"
              },
              {
                value: 30,
                name: "Product 2"
              },
              {
                value: 16,
                name: "Product 3"
              },
            ],
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: false,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            }
          }
        ]
      }
    };
  }
};
</script>
