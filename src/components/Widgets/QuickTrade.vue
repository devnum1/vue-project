<template>
  <div>
    <v-tabs class="quicktrade-tab-wrap" v-model="active" slider-color="primary" >
      <v-tab v-for="(tab,index) in tabs" :key="index" ripple >
         <div class="font-sm text-capitalize">
            <i :class="tab.icon" class="v-input__prepend-outer font-md"></i>
            {{ tab.title }}
         </div>
      </v-tab>
      <v-tab-item v-for="n in 3" :key="n" >
         <v-card flat v-if="n==1">
            <div>
               <div>
                  <div class="mb-5">
                     <div>
                        <label>Choose Currency</label>
                     </div>   
                     <v-select
                        v-model="currTwo"
                        :items="currency"
                        menu-props="auto"
                        label="Select"
                        hide-details
                        prepend-icon="zmdi zmdi-money-box"
                        single-line
                     ></v-select>
                  </div>
                  <div class="mb-5">
                     <div>
                        <label>Payment Method</label>
                     </div>   
                     <v-select
                        v-model="payMethodInitial"
                        :items="paymentMethod"
                        menu-props="auto"
                        label="Select"
                        hide-details
                        prepend-icon="zmdi zmdi-card"
                        single-line
                     ></v-select>
                  </div>  
                  <div class="mb-5"> 
                     <v-text-field
                        label="Select Amount"
                        value="200"
                        type="number"
                        min="1"
                     ></v-text-field>
                  </div>
                  <div class="mb-5">   
                     <v-text-field
                        prepend-inner-icon="cc BTC-alt"
                        label="Wallet Address"
                        value="AXB35H24ISDJHCISDT"
                        type="text"
                        min="1"
                     ></v-text-field>
                  </div>   
               </div>   
               <div class="mb-4">
                  <h5 class="success--text fw-normal mb-0">Total amount is 200 $</h5>
               </div>
               <div class="d-inline-flex align-items-center">
                  <div class="mr-4">   
                     <v-btn class="primary ml-0">Purchase</v-btn>
                  </div>
                  <div>   
                     <h5 class="success--text fw-normal mb-0">Transaction successfull</h5>
                  </div>   
               </div>              
				</div>
         </v-card>
         <v-card flat v-if="n==2">
            <div>
               <div class="mb-5">
                  <div>
                     <label>Choose Currency</label>
                  </div>   
                  <v-select
                     v-model="currTwo"
                     :items="currency"
                     menu-props="auto"
                     label="Select"
                     hide-details
                     prepend-icon="zmdi zmdi-money-box"
                     single-line
                  ></v-select>
               </div>
               <div class="mb-5">
                  <v-text-field
                     label="Select Amount"
                     value="200"
                     type="number"
                     min="1"
                  ></v-text-field>
               </div>
               <div class="mb-5">
                  <v-text-field
                     :append-icon="showPassword ? 'visibility' : 'visibility_off'"
                     :type="showPassword ? 'text' : 'password'"
                     label="Password"
                     @click:append="showPassword = !showPassword"
                     prepend-icon="ti-shield"
                  ></v-text-field>
               </div>
               <div class="mb-5">   
                  <v-text-field
                     prepend-inner-icon="cc BTC-alt"
                     label="Wallet Address"
                     value="AXB35H24ISDJHCISDT"
                     type="text"
                     min="1"
                     prepend-icon=""
                  ></v-text-field>
               </div>
               <div class="mb-4">
                  <h5 class="success--text fw-normal">Your Account will be credited with 220 $</h5>
               </div>  
               <div class="d-inline-flex align-items-center">
                  <div class="mr-3">
                     <v-btn class="primary ml-0">Sell</v-btn>
                  </div>
                  <div>   
                     <h5 class="success--text fw-normal">Transaction successfull</h5>
                  </div>
               </div>  
				</div>
        </v-card>
         <v-card flat v-if="n==3">
            <div>
               <div class="mb-5">
                  <div>
                     <label>Choose Currency</label>
                  </div>   
                  <v-select
                     v-model="currTwo"
                     :items="currency"
                     menu-props="auto"
                     label="Select"
                     hide-details
                     prepend-icon="zmdi zmdi-money-box"
                     single-line
                  ></v-select>
               </div>
               <div class="mb-5">
                  <v-text-field
                     label="Select Amount"
                     value="300"
                     type="number"
                     min="1"
                  ></v-text-field>
               </div>
               <div class="mb-5">  
                  <v-text-field
                     :append-icon="showPassword ? 'visibility' : 'visibility_off'"
                     :type="showPassword ? 'text' : 'password'"
                     label="Password"
                     counter
                     @click:append="showPassword = !showPassword"
                     prepend-icon="ti-shield"
                  ></v-text-field>
               </div>
               <div class="mb-5">   
                  <v-text-field
                     prepend-inner-icon="cc BTC-alt"
                     label="Send To"
                     value=""
                     type="text"
                     min="1"
                     prepend-icon=""
                  ></v-text-field>
               </div>
               <div class="mb-4">
                  <h5 class="success--text fw-normal mb-0">Total amount transfered 300 $</h5>
               </div> 
               <div class="d-inline-flex align-items-center">
                  <div class="mr-3">  
   			         <v-btn class="primary ml-0">Transfer</v-btn>
                  </div>
                  <div>   
                     <h5 class="success--text mb-0 fw-normal">Transaction successfull</h5>
                  </div>   
               </div> 
				</div>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </div>
</template>
<script>
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
		}
	}
}
</script>