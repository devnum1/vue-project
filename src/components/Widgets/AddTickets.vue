<template>
   <div class="table-responsive">
    <app-section-loader :status="loader"></app-section-loader>
		<v-data-table
			:headers="headers"
			:items="addTickets"
			hide-default-footer
		>
      <template v-slot:item="{ item }">
        <tr>      
  				<td>{{ item.srno }}</td>
  				<td>{{ item.ticketCode }}</td>
              <td>{{ item.subject }}</td>
              <td class="text-nowrap">{{ item.date }}</td>
              <td>{{ item.department }}</td>
  				<td><v-badge :class="item.statusColor">{{ item.status }}</v-badge></td>
        </tr>
			</template>
		</v-data-table>
	</div>
</template>

<script>
// import { addtickets } from "Views/crm/data.js";
import api from "Api";

export default {
  data() {
    return {
      loader: true,
      addTickets: [],
      headers: [
        {
          text: "Sr.No",
          sortable: false, 
          value: "Sr.No"
        },
        {
          text: "Tickets Code",
          sortable: false,
          value: "Tickets Code"
        },
        {   
          text: "Subject",
          sortable: false,
          value: "Subject"
        },
        {
          text: "Date",
          sortable: false,
          value: "Date"
        },
        {
          text: "Department",
          sortable: false,
          value: "Department"
        },
        {
          text: "Status",
          sortable: false,
          value: "Status"
        }
      ]
    };
  },
  mounted() {
    let self=this;
    self.getTickets();
  },
  methods: {
    getTickets(){
      let self = this;
				api
					.get("vuely/addTickets.js")
					.then(response => {
						self.loader = false;            
            self.addTickets = response.data;
            
						// console.log("self.addTickets =" + self.addTickets);

					})
					.catch(error => {
						console.log("error" + error);
					});
    }
    
  }
};
</script>
