<template>
   <div>
      <div>
         <v-select
            v-model="currencyDefault"
           :items="currency"
           attach
           label="Choose Currency"
           prepend-icon="zmdi zmdi-money-box"
           outlined
         ></v-select>
      </div>
      <div>   
         <v-text-field
            label="Select Amount"
            value="201"
            type="number"
            outlined
            min="1"
         ></v-text-field>
      </div>
      <div>   
         <v-text-field
            :append-icon="showPassword ? 'visibility' : 'visibility_off'"
            :type="showPassword ? 'text' : 'password'"
            label="Password"
            @click:append="showPassword = !showPassword"
            prepend-icon="ti-shield"
            outlined
         ></v-text-field>
      </div>
      <div>   
         <v-text-field
            outlined
            label="Send To"
             prepend-inner-icon="cc BTC-alt mr-2"
         ></v-text-field>
      </div>   
      <div>
         <h5 class="success--text mb-2 fw-normal">Total amount transfered 200 $</h5>
      </div>
      <div class="d-inline-flex align-items-center">
         <div class="mr-2">   
            <v-btn class="primary ml-0">Transfer</v-btn>
         </div>
         <div>   
            <h5 class="success--text fw-normal">Transaction successfull</h5>
         </div> 
      </div> 
   </div>   
</template>

<script>

export default {
	data () {
		return {
         showPassword:false,
         currencyDefault: 'Bitcoin', 
         currency: [
            'Bitcoin','Ethereum','EOS','Litecoin'
         ],
		}
	},
	mounted(){
	},
	methods: {
		
	}
}
</script>