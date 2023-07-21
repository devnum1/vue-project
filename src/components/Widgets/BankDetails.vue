<template>
  <div>
      <div class="sec-title mb-4">
         <h4>Bank Details</h4>
      </div>
      <v-layout row wrap>
         <v-flex xs12 sm6 md6 lg-8>
            <div> 
               <div class="bank-detail mb-4">
                  <div class="mb-4">  
                     <h6 class="mb-0">Rich Earnand</h6>
                  </div>
                  <div class="mb-4">
                     <h5>
                        <span class="fw-normal"><i class="zmdi zmdi-balance primary--text mr-3 font-lg"></i>Central Bank Of Lorem</span>
                     </h5>
                     <h6>
                        <span class="success--text"><i class="zmdi zmdi-check success--text mr-3 font-lg"></i>KYC Verified</span>
                     </h6>
                  </div>   
               </div> 
               <div class="fw-bold font-sm">
                  <div class="mb-2">Account : <span class="fw-normal">XXXXXXXXX73823</span></div>
                  <div>Phone : <span class="fw-normal">XXXXXXXX1234</span></div>
               </div>
            </div>
         </v-flex> 
         <v-flex xs12 sm6 md6 lg-4> 
            <div class="price-wrap">
               <div>
                  <div class="text-right">    
                     <h4 class="price">$9783862</h4>
                  </div>   
                  <div class="button-wrap text-right">
                     <div class="mb-4">
                        <v-btn class="primary mx-0 mt-0 price-btn-wrap">Withdraw</v-btn>
                     </div>
                     <div class="mb-4">   
                        <v-btn class="info mx-0 mt-0 price-btn-wrap">Deposit</v-btn>
                     </div>
                     <div>   
                        <v-btn 
                           class="error mx-0 mt-0 price-btn-wrap"
                           :to="`/${getCurrentAppLayoutHandler() + '/ecommerce/cards'}`"
                        >
                           Saved Cards
                        </v-btn>   
                     </div>    
                  </div>
               </div>   
            </div>
         </v-flex>   
      </v-layout>      
  </div> 
</template>

<script>
import { getCurrentAppLayout } from "Helpers/helpers";


export default {
	data () {
		return {         
         showPassword:false,
         currOne: 'Bitcoin',
         currTwo: 'Ethereum', 
         currency: [
            'Bitcoin','Ethereum','EOS','Litecoin'
         ],
         payMethodInitial:"Debit Card",
         paymentMethod:[
            'Debit Card','PayPal','Bank Transfer','Credit Cards'
         ],
		  active: null,
		  tabs:[
			   {
               icon:"zmdi zmdi-shopping-cart",
               title:"Buy",
				},
				{
               icon:"ti-money",
					title:"Sell",
				},
				{
               icon:"zmdi zmdi-square-right",
					title:"Transfer",
				}
			]
		}
	},
	mounted(){
	},
	methods: {
		next () {
			const active = parseInt(this.active)
			this.active = (active < 2 ? active + 1 : 0)
      },
      getCurrentAppLayoutHandler() {
			return getCurrentAppLayout(this.$router);
    	}
	}
}
</script>




