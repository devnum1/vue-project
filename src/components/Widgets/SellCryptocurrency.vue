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
            min="1"
            outlined
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
            label="Wallet Address"
            prepend-inner-icon="cc BTC-alt mr-2"
            value="AXB35H24ISDJHCISDT"
         ></v-text-field>
      </div>   
      <div>
         <h5 class="success--text mb-2 fw-normal">Your Account will be credited with 200 $</h5>
      </div>
      <div class="d-inline-flex align-items-center">
         <div class="mr-2">
            <v-btn class="primary ml-0">Sell</v-btn>
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
	}
}
</script>