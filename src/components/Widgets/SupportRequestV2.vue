<template>
	<div>
		<app-section-loader :status="loader"></app-section-loader>
		<vue-perfect-scrollbar style="height:404px" :settings="settings">
			<v-list two-line class="card-list">
				<template v-for="(request, index) in supportRequests">
					<v-list-item :key="index">
						<v-list-item-content>
							<v-list-item-subtitle>
								<h5 class="mb-1">{{request.title}}</h5>
								<v-list-item-action-text class="fw-light">
									{{request.date}}
								</v-list-item-action-text>
							</v-list-item-subtitle>
							<p class="mb-0 fs-12 grey--text fw-normal">{{request.content}}</p>
						</v-list-item-content>
						<v-list-item-action>
							<v-badge v-if="request.status" class="error">Pending</v-badge>
							<v-badge v-else class="info">Closed</v-badge>
						</v-list-item-action>
					</v-list-item>
				</template>
			</v-list>
		</vue-perfect-scrollbar>
	</div>
</template>
<script>
import api from "Api";
export default {
  data() {
    return {
      loader: true,
      supportRequests: [],
      settings: {
        maxScrollbarLength: 160
      }
    };
  },
  mounted() {
    this.getSupportRequests();
  },
  methods: {
    getSupportRequests() {
      api
        .get("vuely/supportRequests.js")
        .then(response => {
          this.loader = false;
          this.supportRequests = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>