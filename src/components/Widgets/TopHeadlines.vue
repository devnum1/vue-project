<template>
	<v-list v-if="headlinesData.length > 0" class="list-aqua-ripple">
		<v-list-item v-for="(item,index) in headlinesData" :key="index" ripple @click="" class="news-content">
			<div class="mr-3 img-wrap">
				<img :src="item.imgUrl" width="80" height="80" class="img-responsive d-block">
			</div>
			<v-list-item-content class="text-content">
				<v-badge class="white--text fs-12 mb-2 fw-normal" :class="item.badgeColor">{{item.category }}</v-badge>
				<h6 class="mb-2">{{ item.title }}</h6>
				<div class="d-custom-flex fs-12 grey--text">
					<span class="mx-1">{{ item.place }}</span>
					<span class="mx-1">{{ item.date }}</span>
				</div>
			</v-list-item-content>
			<v-list-item-action class="news-time fs-12 grey--text fw-normal">
				{{ item.time}}
			</v-list-item-action>
		</v-list-item>
	</v-list>
</template>

<script>
	import api from "Api";
  export default {
    mounted() {
      this.getTopHeadlines();
    },
    methods: {
			getTopHeadlines() {
				api
					.get("vuely/topHeadlines.js")
					.then(response => {
						this.headlinesData = response.data;
					})
					.catch(error => {
						console.log(error);
					});
			}
		},
    data () {
      return {
        headlinesData: []
      };
    }
  }
</script>
