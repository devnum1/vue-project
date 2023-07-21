<template>
   <div>
      <v-card flat>
         <div class="table-responsive">
            <app-section-loader :status="loader"></app-section-loader>
            <v-data-table class="mb-4" :headers="headers" :items="recentTrade" hide-default-footer>
               <template v-slot:item="{ item }">
                  <tr>
                     <td>
                        <i :class="item.currencyIcon"></i>
                     </td>
                     <td :class="item.statusClass">{{ item.status }}</td>
                     <td>{{ item.price }}</td>
                     <td>{{ item.total }}</td>                     
                  </tr>
               </template>
            </v-data-table>
            <div class="stats-summary mb-2">
               <div>
                  Overall Profit:
                  <span class="success--text">
                     <i class="zmdi zmdi-plus"></i> 
                     $35237
                  </span>
               </div>   
               <div>
                  Overall Loss:
                  <span class="error--text">
                     <i class="zmdi zmdi-minus"></i>
                     $20
                  </span>  
               </div>
            </div>   
            <v-btn class="primary m-0">Download CSV</v-btn>
         </div>
      </v-card>      
   </div>
</template>

<script>
import { recentTrade } from 'Views/crypto/data.js'

export default {
	data () {
		return {
         recentTrade,
			loader: false,
			invoice: [],
			headers: [
				{
					text: "Currency",
					sortable: false,
					value: "currency"
				},
				{
					text: "Status",
					sortable: false,
					value: "status"
				},
				{
					text: "Price",
					sortable: false,
					value: "price"
				},
				{
					text: "Total($)",
					sortable: false,
					value: "total($)"
				},
        ],

       
		  active: null,
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