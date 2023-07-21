<template>
   <div class="table-responsive">
    <app-section-loader :status="loader"></app-section-loader>
      <v-data-table
			:headers="headers"
			:items="paymentDetails"
			hide-default-footer
		>
      <template v-slot:item="{ item }">
        <tr>
  				<td>{{ item.payid }}</td>
  				<td class="text-nowrap">
  					{{ item.firstName }} {{ item.lastName }}
  				</td>
  				<td><v-badge :class="item.paymentTypeColor">{{ item.paymentType }}</v-badge></td>
  				<td class="text-nowrap">{{ item.paidDate }}</td>
  				<td>{{ item.amount }}</td>
        </tr>
			</template>
		</v-data-table>
	</div>
</template>

<script>
import { paymentDetails } from "Views/crm/data.js";

export default {
  data() {
    return {
      loader: false,
      invoice: [],
      paymentDetails,
      headers: [
        {
          text: "Payment Id",
          sortable: false,
          value: "Payment Id"
        },
        {
          text: "Client Name	",
          sortable: false,
          value: "Client Name	"
        },
        {
          text: "Payment Type",
          sortable: false,
          value: "Payment Type"
        },
        {
          text: "Paid Date",
          sortable: false,
          value: "Paid Date"
        },
        {
          text: "Amount",
          sortable: false,
          value: "Amount"
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
