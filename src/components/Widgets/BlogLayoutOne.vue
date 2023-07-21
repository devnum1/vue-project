<!-- BlogLayoutOne Widget -->
<template>
	<div class="blog-widget">
		<div class="blog-layout-v1">
			<a href="javascript:;">
				<img :src="data.thumbnail" class="img-responsive mb-4">
				<div class="app-card-title pa-0 mb-2">
					<h5>{{data.title}}</h5>
				</div>
			</a>	
			<span class="grey--text fs-12 fw-normal mb-2 d-block">Last updated: {{data.date}}</span>
			<p>{{data.body}}</p>
		</div>
		<div class="d-custom-flex justify-space-between">
			<div>
				<v-btn icon class="mr-3">
					<v-icon color="grey">share</v-icon>
				</v-btn>
				<v-btn icon>
					<v-icon color="grey">favorite</v-icon>
				</v-btn>
			</div>
			<v-btn icon>
				<v-icon class="grey--text">more_horiz</v-icon>
			</v-btn>
		</div>
	</div>
</template>

<script>
import { getCurrentAppLayout } from "Helpers/helpers";

export default {
	props: ["data"],
  	methods: {
		getCurrentAppLayoutHandler() {
			return getCurrentAppLayout(this.$router);
		}
  	}
};
</script>
