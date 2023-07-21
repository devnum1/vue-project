<template>
   <div>
      <div class="top-selling-widget">
         <slick :options="slickOptions">
            <div v-for="(item,index) in safeTradeContent" :key="index">
               <div class="align-items-center d-custom-flex mb-4">
                  <div class="crypto-icon-wrap inline-block mr-3 font-2x">
                     <i :class="item.icon"></i>
                  </div>   
                  <div class="inline-block">
                     <h4 class="mb-0">{{ item.name }}</h4>
                  </div>   
               </div>
               <div class="mb-4">
                  <line-chart-shadowV3
                     :dataSet="item.data"
                     :lineTension="0.4"
                     :dataLabels="item.chartLabel"
                     :width="400"
                     :height="80"
                     :borderWidth=3
                     :enableGradient= false
                     :enableShadow="true"
                     :shadowColor= item.chartBorderColor
                     :borderColor= item.chartBorderColor>
                  </line-chart-shadowV3>
               </div>
               <div class="chart-info d-custom-flex align-items-center justify-space-between mb-4"> 
                  <v-badge class="primary pa-2">last 4 days</v-badge>
                  <span class="primary--text font-md"><i class="primary--text mr-2" :class="item.percentageIcon"></i>2.3%</span>
               </div>  
               <span class="subheading"><strong class="success--text mr-1">${{ item.market_cap }}</strong> Market Capitalisation</span>
            </div>
         </slick>
      </div>
   </div>
</template>

<script>
import Slick from "vue-slick";
import { safeTradeContent } from 'Views/crypto/data.js'
import LineChartShadowV3 from "Components/Charts/LineChartShadowV3";

export default {
  components: {
    Slick,
    LineChartShadowV3
  },
  data() {
    return {
      safeTradeContent,
      slickOptions: {
         infinite: true,
         speed: 1000,
         slidesToShow: 1,
         slidesToScroll: 1,
         autoplay: true,
         dots: false,
         fade: true,
         cssEase: 'linear',
         arrows: false,
         rtl: this.$store.getters.rtlLayout

      },
    };
  }
};
</script>
