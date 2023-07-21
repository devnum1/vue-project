<template>
   <v-expansion-panels
       v-model="panel"
   >
    <v-expansion-panel
      v-for="(data,index) in walletData"
      :key="index"
      expand-icon="mdi-menu-down"
    >
      <v-expansion-panel-header>
         <div>
            <h4 class="mb-0">
               <span>
                  <i class="font-lg mr-2" :class="data.icon"></i>
                  {{ data.title }}
               </span>   
            </h4>   
         </div>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
         <v-container fluid grid-list-xl>
            <v-layout row wrap align-items-center colClasses="xl6 lg6 md6 sm12 xs12">
               <v-flex d-flex xs12 sm7 md7>
                  <div>
                     <div class="mb-4">
                        <div class="d-custom-flex align-items-center py-2">
                           <div class="icon-wrap">
                              <i class="zmdi zmdi-money-box mr-3 font-lg primary--text"></i>
                           </div>   
                           <div>
                              <h6 class="mb-0">Received Amount</h6>
                              <span class="font-sm">+ 13247837654</span>
                           </div>
                        </div>   
                        <hr>
                        <div class="d-custom-flex align-items-center py-2">
                           <div class="icon-wrap">
                              <i class="zmdi zmdi-card mr-3 font-lg success--text"></i>
                           </div>
                           <div>
                              <h6 class="mb-0">Sent Amount</h6>
                              <span class="font-sm">- 13247837654</span>
                           </div>   
                        </div>   
                        <hr>
                        <div class="d-custom-flex align-items-center pt-2">
                           <div class="icon-wrap">
                              <i class="zmdi zmdi-balance mr-3 font-lg warning--text"></i>
                           </div>
                           <div>   
                              <h6 class="mb-0">Total Amount</h6>
                              <span class="font-sm">+ 13247837654</span>
                           </div>
                        </div> 
                     </div>        
                     <v-btn class="primary ml-0">Withdraw</v-btn>
                     <v-btn class="info m-0 ml-4">Deposit</v-btn>
                  </div>
               </v-flex>
               
               <v-flex d-flex xs12 sm5 md5>
                  <div>
                     <h4>Wallet Address</h4>
                     <v-flex xs8 px-0>
                        <v-text-field
                           :label="data.title"
                           value="AXB35H24ISDJHCISDT"
                           type="text"
                           min="1"
                           :prepend-inner-icon= "data.iconForWallet"
                        ></v-text-field>
                     </v-flex>
                     <img src="/static/img/gene-qr.jpg" width="150" height="150">
                  </div>
               </v-flex>
            </v-layout>
         </v-container>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>


<script>
import { getCurrentAppLayout } from "Helpers/helpers";

export default {
   data() {
		return {
         panel: 0,
         lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`,
         walletData:[
            {
               icon:"cc BTC primary--text",
               iconForWallet:"cc BTC-alt",
               title:"Bitcoin",
            },
            {
               icon:"cc ETH primary--text",
               iconForWallet:"cc ETH-alt",
               title:"Ethereum",
            },
            {
               icon:"cc LTC primary--text",
               iconForWallet:"cc LTC-alt",
               title:"Litecoin",
            },
            {
               icon:"cc ZEC-alt primary--text",
               iconForWallet:"cc ZEC-alt",
               title:"Zcash",
            }

         ]
      }
   },
	methods: {
		getCurrentAppLayoutHandler() {
			return getCurrentAppLayout(this.$router);
    	}
  	}
}
</script>
