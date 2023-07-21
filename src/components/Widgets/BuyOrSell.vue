<template>
   <div>
      <div class="mb-4">
         <v-btn color="primary" class="ml-0 ma-2">This Month</v-btn>
         <v-btn color="error" class="ma-2">This Year</v-btn>
         <v-btn color="info" class="ma-2">Over all</v-btn>
      </div>   
      <div>
         <line-chart-v4
            :width="650"
            :height="400"
            :dataSet= buySellChartData.dataAndLabel
            :labels= buySellChartData.buySellChartLabel
            :chartColorsData="buySellChartData.buySellChartColors"
            :label="buySellChartData.dataAndLabel"
            >
         </line-chart-v4>
      </div>
   </div>
</template>
<script>
import LineChartV4 from "Components/Charts/LineChartV4";
import { buySellChartData } from 'Views/crypto/data.js'
import StatsCardV9 from "Components/StatsCardV9/StatsCardV9";


export default {
   components:{
      LineChartV4,
      StatsCardV9
   },
  data() {
    return {
       buySellChartData,
    };
  }
};
</script>
