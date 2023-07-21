<template>
   <v-flex :class="colClasses">
      <div class="app-card" :class="customClasses">
         <v-card-text>
            <div class="layout justify-space-between pa-3">
               <div class="align-item-start">
                  <i class="cc BTC"></i>
                  <!-- <span>
                     <i class="cc BTC" title="BCN"></i>
                  </span> -->
                  <h3 class="ma-0">{{heading}}</h3>
               </div>
            </div>
         </v-card-text>
        <slot></slot>

        <v-badge class="info">last 4 days</v-badge>
         <div>
            <i class="zmdi zmdi-long-arrow-up primary--text"></i>
            <v-badge class="info">2.3%</v-badge>
         </div>
         
      </div>
   </v-flex>
</template>
<script>
import countTo from "vue-count-to";
export default {
  props: ["heading", "amount", "colClasses", "customClasses", "icon"],
  components: {
    countTo
  }
};
</script>
