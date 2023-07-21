<template>
   <div class="table-responsive">
    <app-section-loader :status="loader"></app-section-loader>
		<v-data-table
			:headers="headers"
			:items="taxRatesDetails"
			hide-default-footer
		>
      <template v-slot:item="{ item }">
        <tr>			
  				<td class="text-nowrap">{{ item.date }}</td>
  				<td class="text-nowrap">
  					{{ item.account }}
  				</td>
  				<td class="text-nowrap"><v-badge :class="item.TypeColor">{{ item.type }}</v-badge></td>
  				<td>{{ item.amount }}</td>
          <td>{{ item.credit }}</td>
          <td>{{ item.balance }}</td>
  			</tr>
      </template>
		</v-data-table>
	</div>
</template>

<script>
import { taxRatesDetails } from "Views/crm/data.js";

export default {
  data() {
    return {
      loader: false,
      invoice: [],
      taxRatesDetails,
      headers: [
        {
          text: "Date",
          sortable: false, 
          value: "Date"
        },
        {
          text: "Account",
          sortable: false,
          value: "Account"
        },
        {   
          text: "Type",
          sortable: false,
          value: "Type"
        },
        {
          text: "Amount	",
          sortable: false,
          value: "Amount	"
        },
        {
          text: "Credit	",
          sortable: false,
          value: "Credit	"
        },
        {
          text: "Balance	",
          sortable: false,
          value: "Balance	"
        }
      ]
    };
  },
  mounted() {
  },
  methods: {
   
    
  }
};
</script>
