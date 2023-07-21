<template>
   <div>
      <v-expansion-panels
         v-model="panel"
      >
         <v-expansion-panel
            v-for="(details,index) in marketCapDetails"
            :key="index"
            :id="index"
         >
            <v-expansion-panel-header>
               <p>{{details.sr_no }}</p>
               <p>{{details.currency }}</p>
               <p>{{details.market_cap }}</p>
               <p>{{details.price }}</p>
               <p>{{details.volume }}</p>
               <p>{{details.change }}</p>
               <p>{{details.more}}</p>
            </v-expansion-panel-header>

            <v-expansion-panel-content>
               <v-card class="marketcap-chart-wrap">
                  <div class="mb-3">
                     <v-btn class="error mr-3" @click="showYearly()">Yearly</v-btn>
                     <v-btn class="success mr-3" @click="showMonthly()">Monthly</v-btn>
                     <v-btn class="primary" @click="showWeekly()">Weekly</v-btn>
                  </div>    
                  <line-chart-v6 
                  style="width: 100%; height: 400px;" 
                  :dataSet="[10, 65, 40, 150, 40, 85, 30]" 
                  v-show="selectedBtn == 'yearly'"
                  ></line-chart-v6>
                  <line-chart-v6 
                     style="width: 100%; height: 400px;" 
                     :dataSet="[0, 65, 40,0,40,85,0]"
                     v-show="selectedBtn == 'monthly'"
                  ></line-chart-v6>
                  <line-chart-v6 
                     style="width: 100%; height: 400px;" 
                     :dataSet="[60, 25, 150,60,100,5,60]"
                     v-show ="selectedBtn == 'weekly'"
                  ></line-chart-v6>
               </v-card> 
            </v-expansion-panel-content>
         </v-expansion-panel>
      </v-expansion-panels>
   </div> 
</template>
<script>
   import LineChartV6 from "Components/Charts/LineChartV6";
   // import CourseData from "Views/course/dasRta.js";
   import { getCurrentAppLayout } from "Helpers/helpers";
   import Statistics from 'Components/Widgets/Statistics'
   import { marketCapDetails } from "Views/crypto/data.js";

   export default {
      // props:['details'],
      components:{
      Statistics,
      LineChartV6
      }, 
      data() {
         return {
         panel:0,
         selectedBtn: "yearly",
         marketCapDetails,
         disabled: false,
         readonly: false,
         yearly: [10, 65, 40,150,40,85,30],
         monthly: [0, 65, 40,0,40,85,0],
         weekly: [60, 25, 150,60,100,5,60],
         } 
      },
      methods: {
         getCurrentAppLayoutHandler() {
         return getCurrentAppLayout(this.$router);
         },
         showYearly(){
         this.selectedBtn = "yearly";
         // console.log(this.selectedBtn);
         },
         showMonthly(){
         this.selectedBtn = "monthly"; 
         // console.log(this.selectedBtn);
         },
         showWeekly(){
         this.selectedBtn = "weekly";
         // console.log(this.selectedBtn);
         }
      }
   }
</script>
<style scoped>
   
</style>