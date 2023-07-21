<template>
   <div>
      <page-title-bar></page-title-bar>
      <v-container fluid grid-list-xl pt-0 mktcap-container-wrap>
         <crypto-slider></crypto-slider>
         <v-layout row wrap border-rad-sm overflow-hidden crypto-status-card>
            <template v-for="(data,index) in cardData">
               <stats-card-v8
                  colClasses="xl3 lg3 md3 sm6 xs12"
                  :heading="data.name"
                  :key="index"
                  :viewers="data.viewers"
                  :trade="data.trade"
                  :icon="data.icon"
                  :color="data.color"
               >
               </stats-card-v8>
            </template>
         </v-layout>
         <div class="mrkcap-scroll-wrap">
            <div class="mktcap-wrapper">
               <div class="mktcap-resp-scroll">
                  <v-layout row wrap>
                     <app-card
                        colClasses="xl12 lg12 md12 sm12 xs12"
                        customClasses="mb-0 crypto-card-wrap"
                     >
                     <!-- <v-card flat> -->
                        <div>
                           <v-container fluid grid-list-md>
                              <v-layout row wrap class="d-flex align-items-center w-100">
                                 <div class="pa-4">
                                    S.No.
                                 </div>
                                 <div class="pa-4">
                                    Currency
                                 </div>
                                 <div class="pa-4">
                                    Market Cap
                                 </div>
                                 <div class="pa-4">
                                    Price
                                 </div>
                                 <div class="pa-4">
                                    Volume
                                 </div>
                                 <div class="pa-4">
                                    Change(24hr)
                                 </div>
                                 <div class="d-flex justify-end">
                                    More
                                 </div>
                              </v-layout>
                           </v-container>
                        </div>
                     <!-- </v-card> -->
                     </app-card>
                  </v-layout>
                  <v-layout row wrap>
                     <app-card
                        colClasses="xl12 lg12 md12 sm12 xs12"
                        customClasses="mb-0" 
                     >
                        <expandable-table></expandable-table>
                     </app-card>
                  </v-layout>
               </div>   
            </div>   
         </div>   
      </v-container>
   </div>
</template>

<script>
import StatsCardV8 from "Components/StatsCardV8/StatsCardV8";
import ExpandableTable from "Components/Widgets/ExpandableTable";
import Statistics from "Components/Widgets/Statistics";
import { marketCapDetails } from "Views/crypto/data.js";

export default {
   components:{
      StatsCardV8,
      ExpandableTable,
      Statistics
   },
   data() { 
      return {
         marketCapDetails,
         cardData:[
            {
               name:"Bitcoin",
               viewers:"+41",
               trade:"30",
               icon:"cc BTC-alt",
               color:"primary"
            },
            {
               name:"Ethereum",
               viewers:"+4381",
               trade:"60",
               icon:"cc ETH",
               color:"success"
            },
            {
               name:"Litecoin",
               viewers:"+2611",
               trade:"80",
               icon:"cc LTC",
               color:"warning"
            },
            {
               name:"Zcash",
               viewers:"+611",
               trade:"40",
               icon:"cc ZEC",
               color:"error"
            }
         ]
      }
   },
}
</script>
