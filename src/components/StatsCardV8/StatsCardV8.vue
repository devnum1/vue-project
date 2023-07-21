<template>
   <v-flex :class="colClasses">
      <div class="app-card white--text"  :class="color">
          <v-card-text class="wallet-stats-card">
           <div>
               <div class="mb-2 d-custom-flex justify-start align-items-center">
                  <span class="font-md d-inline-block">
                     <i class="mr-2 white--text font-lg" :class="icon" title="BCN"></i>
                  </span>   
                  <span class="d-inline-block font-md">{{heading}}</span>  
               </div>
               <div class="d-custom-flex justify-space-between align-items-start mb-4"> 
                  <span>{{ viewers }}</span>
                  <span>{{ $t('message.trade') }} : {{ trade }}%</span>
               </div>   
               <div class="mb-2">
                  <v-progress-linear :value="trade" class="my-1" height="3" color="white"></v-progress-linear>
               </div>   
            </div>
         </v-card-text>
      </div>
   </v-flex>
</template>
<script>
export default {
  props: ["heading", "viewers", "colClasses", "customClasses","trade", "icon", "color"]
}
</script>
