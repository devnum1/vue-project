<template>
   <div>
      <v-card flat>
         <div class="table-responsive">
            <!--<app-section-loader :status="loader"></app-section-loader>-->
            <div class="mb-6">
               <v-btn 
               	@click="changeBtn('BTC')"
               	:class="{primary: isBtc}"
               >
            		BTC
            	</v-btn>
               <v-btn 
               	@click="changeBtn('ETH')"
               	:class="{primary: isEth}"
               >
            		ETH
            	</v-btn>
               <v-btn 
               	@click="changeBtn('EUR')"
               	:class="{primary: isEur}"
               >
            		EUR
            	</v-btn>
            </div>
            <v-data-table :headers="headers" :items="selectedCoin"   >
               <template v-slot:item="{ item }">
                  <tr>
	                  <td>{{ selectedCoin.map(function(x) 
            				{              
					           return x.serial_number; 
					         }).indexOf(item.serial_number) }}
					      </td>
							<td>{{ item.desktop_name }}</td>
							<td>{{ item.mobile_name }}</td>
							<td>{{ item.price }}</td>
							<td>{{ item.volume }}</td>
							<td>{{ item.tag }}</td>
							<td>{{ item.total_volume }}</td>
							<td>{{ item.market_cap }}</td>
							<td>{{ item.circulating_supply }}</td>
							<td>
								<v-badge v-if="item.status"class="info" >High</v-badge>
								<v-badge v-else class="error">Low</v-badge>
							</td>
							<td>{{ item.change }}</td>
						</tr>
               </template>
            </v-data-table>
         </div>      
      </v-card>
   </div>
</template>

<script>

import { coinsList } from 'Views/crypto/data.js'
import LineChartShadowV2 from "Components/Charts/LineChartShadowV2";
import { ChartConfig } from "Constants/chart-config";

export default {
	data () {
		return {
			isBtc: true,
			isEth: false,
			isEur: false,
			selectedBtn: 'BTC',
			selectedCoin: [],
         ChartConfig,
         coinsList,
			headers: [
				{
					text: 'No',
					align: "left",
					sortable: false,
					value: 'number'
				},
				{
					text: "Coins",
					align: "left",
					sortable: false,
					value: "coins"
				},
				{
					text: "Symbol",
					align: "left",
					sortable: false,
					value: "symbol"
				},
				{
					text: "Price",
					align: "left",
					sortable: false,
					value: "price"
				},
				{
					text: "Direct Vol. 24H",
					align: "left",
					sortable: false,
					value: "directVolume"
				},
				{
					text: "Tag",
					align: "left",
					sortable: false,
					value: "tag"
				},
				{
					text: "Total Vol. 24H",
					align: "left",
					sortable: false,
					value: "totalVolume"
				},
				{
					text: "Market Cap",
					align: "left",
					sortable: false,
					value: "marketCap"
				},
				{
					text: "Circulating Supply",
					align: "left",
					sortable: false,
					value: "circulatingSupply"
				},
				{
					text: "Status",
					align: "left",
					sortable: false,
					value: "status"
            },
            {
					text: "Chg. 24H",
					sortable: false,
					value: "chg"
            }
            
        ],
		}
   },
   components:{
      LineChartShadowV2
   },
	mounted(){
		this.getSelectedCurrency();
	},
	methods: {
		getSelectedCurrency(){
			this.selectedCoin = [];
			for (var i = 0; i < coinsList.length; i++){
				if(coinsList[i].tag == this.selectedBtn){
					this.selectedCoin.push(coinsList[i]);
				}
		  }
			// console.log("this.selectedBtn="+this.selectedBtn) 

		},
      changeBtn(value){
      	switch(value){
				case 'ETH':
      			this.isBtc = false;
      			this.isEth = true;
      			this.isEur = false;
					break;
				case  'EUR':
      			this.isBtc = false;
	      		this.isEth = false;
	      		this.isEur = true;
      			break;						
      		default:
					this.isBtc = true;
	      		this.isEth = false;
   	   		this.isEur = false;
					break;
      	}
        	this.selectedBtn = value;
			this.getSelectedCurrency();
			// console.log("this.selectedCoin="+this.selectedCoin) 
      }
   }
}
</script>
