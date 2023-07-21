<!-- Bar Chart -->
<template>
  <ECharts :options="bar" id="barChart" style="width:100%; height:400px"></ECharts>
</template>

<script>
import ECharts from "vue-echarts";
import "echarts/lib/chart/bar";
import "echarts/lib/component/title";
import { ChartConfig } from "Constants/chart-config";

export default {
  name: "buyers-stats",
  components: {
    ECharts
  },
  data() {
    return {
      bar: {
        tooltip: {
          trigger: "axis"
        },
        color: [ChartConfig.color.info],
        legend: {
          data: ["Series A"]
        },
        xAxis: {
          type: "category",
          boundaryGap: true,
          data: ["Project 1", "Project 2", "Project 3", "Project 4"]
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value}"
          }
        },
        series: [
          {
            name: "Series A",
            type: "bar",
            data: [400, 700, 1400, 900]
          }
        ]
      }
    };
  }
};
</script>
<style scoped>
#barChart > :first-child{
  width: 100% !important; 
}

#barChart > :first-child :first-child{
  width: 100% !important; 
}

</style>