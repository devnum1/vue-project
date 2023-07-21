<template>
	<div class="mb-1">
		<app-section-loader :status="loader"></app-section-loader> 
		<vue-perfect-scrollbar style="height:371px" :settings="settings">  
			<v-data-table
				:headers="headers"
				:items="data"
				hide-default-footer
			>
            <template v-slot:item="{ item }">
            	<tr>
					<td class="d-custom-flex align-items-center">
						<a :class="`${item.icon}-bg rounded-circle social-icon mr-3`" href="javascript:void(0)">
							<i :class="`zmdi zmdi-${item.icon}`"></i>
						</a>
						<div>
							<span class="d-block">{{ item.name }}</span>
							<span class="fs-12 grey--text fw-normal">{{item.url}}</span>
						</div>
					</td>
					<td>{{ item.likes }}</td>
					<td>{{ item.shares }}</td>
					<td><span class="v-badge primary white--text">{{ item.members }}</span></td>
					<td :class="[{'success--text': item.status === 1, 'error--text': item.status === 0}]">
						<i :class="[{'ti-arrow-up': item.status === 1, 'ti-arrow-down': item.status === 0}]"></i>
						{{item.profit}}%
					</td>
					</tr>
				</template>
			</v-data-table>
		</vue-perfect-scrollbar>
	</div>  
</template>

<script>
import api from "Api";

export default {
  data() {
    return {
		loader: true,
		settings: {
			maxScrollbarLength: 100
		},
      headers: [
        	{
          text: "Name",
          sortable: false,
          value: "name"
        	},
        { text: "Likes", value: "likes", sortable: false },
        { text: "Shares", value: "shares", sortable: false },
        { text: "Members", value: "members", sortable: false },
        { text: "", value: "profit", sortable: false }
      ],
      data: []
    };
  },
  mounted() {
    this.getMarketingCampaign();
  },
  methods: {
    getMarketingCampaign() {
      api
        .get("vuely/marketingCampaign.js")
        .then(response => {
          this.loader = false;
          this.data = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

