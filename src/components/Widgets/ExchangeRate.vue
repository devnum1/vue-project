<template>
   <div>
      <div>
         <label>Choose Currency</label>
      </div>
      <div class="mb-6">
         <v-select
            v-model="currOne"
            :items="currency"
            menu-props="auto"
            label="Select"
            hide-details
            prepend-icon="zmdi zmdi-money-box"
            single-line
            outlined
         ></v-select>
      </div>  
      <div class="text-center mb-6">
         <i class="ti-exchange-vertical font-2x"></i>
      </div>
      <div>
         <label>Choose Currency</label>
      </div>   
      <div class="mb-6">
         <v-select
            v-model="currTwo"
            :items="currency"
            menu-props="auto"
            label="Select"
            hide-details
            prepend-icon="zmdi zmdi-money-box"
            single-line
            outlined
         ></v-select>
      </div>   
      <div>
         <h5 class="success--text fw-normal">1 BTC = 0.45373 ETC</h5>
      </div>  
	</div>
</template>

<script>
export default {
	data () {
		return {
         active: null,
         currOne: 'Bitcoin',
         currTwo: 'Ethereum',
         currency: [
            'Bitcoin','Ethereum','EOS','Litecoin'
         ]
		}
	}
}
</script>