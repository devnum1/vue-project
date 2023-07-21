<template>
   <div>
      <div>
         <v-select
         	  v-model="currencyDefault"
           	:items="currency"
           	attach
           	label="Select"
           	prepend-icon="zmdi zmdi-money-box"  
            outlined                  
         ></v-select>
      </div>
      <div>
         <v-select
				   v-model="paymentDefault"
           :items="paymentMethods"
           attach
           label="Select"
           prepend-icon="zmdi zmdi-card"
           outlined
         ></v-select>
      </div>
      <div>   
         <v-text-field
            label="Select Amount"
            value="200"
            type="number"
            min="1"
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
      <div class="mb-2">
         <h5 class="success--text fw-normal mb-0">Total amount is 200 $</h5>
      </div>   
      <div class="d-inline-flex align-items-center">
         <div>
            <v-btn class="primary ml-0">Purchase</v-btn>
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
         currencyDefault: 'Bitcoin', 
         currency: [
            'Bitcoin','Ethereum','EOS','Litecoin'
         ],
         paymentMethods:[
            'Debit Card','PayPal','Bank Transfer','Credit Cards'
         ],
         paymentDefault:"Debit Card"

		}
	}
}
</script>