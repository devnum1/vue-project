<template>
   <div>
      <div>
         <v-text-field
            outlined
            label="Bitcoin"
            prepend-inner-icon="cc BTC-alt mr-2"
            value="AXB35H24ISDJHCISDT"
         ></v-text-field>
      </div>
      <div>
         <v-text-field
            outlined
            label="Ethereum"
            prepend-inner-icon="cc ETH-alt mr-2"
            value="YXB35H24ISDJHCISDT"
         ></v-text-field>
      </div>
      <div>
         <v-text-field
            outlined
            label="Litecoin"
            prepend-inner-icon="cc LTC-alt mr-2"
            value="TXB35H24ISDJHCISDT"
         ></v-text-field>
      </div>
      <div>
         <v-text-field
            outlined
            label="ZCash"
            prepend-inner-icon="cc ZEC-alt mr-2"
            value="XXB35H24ISDJHCISDT"
         ></v-text-field>
      </div>
      <div>
         <h5 class="success--text mb-2 fw-normal">Total amount in all wallet is 200 $</h5>
      </div>
      <div>
         <v-btn class="primary ml-0">Go to Wallet</v-btn>   
      </div>   
   </div>
</template>

<script>

export default {
	data () {
		return {
		}
	}
}
</script>