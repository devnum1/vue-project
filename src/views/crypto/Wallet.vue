<template>
   <div>
      <page-title-bar></page-title-bar>
      <v-container fluid grid-list-xl pt-0>
         <crypto-slider></crypto-slider>
         <div class="currencies-available mt-4 mb-2">
            <h4>
               {{ $t('message.currenciesAvailable') }}
            </h4>
            <div class="icon-wrap">
               <!-- Icons under Currencies Available -->
               <i class="mr-3 font-2x" v-for="(icon,index) in icons" :key="index" :class="icon"></i>
            </div>   
         </div>   
         <v-layout row wrap>
            <v-flex xs12 sm12 md7>
               <div
                  colClasses="xl7 lg7 md7 sm12 xs12"
                  customClasses="mb-0"
               >  
                  <expandable-table-v2></expandable-table-v2>
               </div> 
            </v-flex>            
            <v-flex xs12 sm12 md5 wallet-status-wrap>
               <v-layout row wrap colClasses="xl12 lg12 md12 sm12 xs12">
                  <template v-for="(data,index) in cardData">
                     <stats-card-v8
                        colClasses="xl6 lg6 md12 sm6 xs12"
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
               <v-layout row wrap colClasses="xl12 lg12 md12 sm12 xs12">
                  <app-card
                     colClasses="xl12 lg12 md12 sm12 xs12"
                     customClasses="mb-0"
                  >
                     <bank-details></bank-details>
                  </app-card>
               </v-layout>
            </v-flex>
         </v-layout>
      </v-container>
   </div>   
</template>

<script>
import StatsCardV8 from "Components/StatsCardV8/StatsCardV8";
import ExpandableTableV2 from "Components/Widgets/ExpandableTableV2";
import BankDetails from "Components/Widgets/BankDetails";
export default {
   components:{
      StatsCardV8,
      ExpandableTableV2,
      BankDetails,
   },
   data(){
      return{
         icons:[
            "cc BTC primary--text",
            "cc ETH success--text",
            "cc LTC error--text",
            "cc ZEC-alt info--text"
         ],
         cardData:[
            {
               name:"Bitcoin",
               viewers:"+41",
               trade:"30",
               icon:"cc BTC",
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
   }

}
</script>
