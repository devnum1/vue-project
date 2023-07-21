<template>
	<v-menu offset-y origin="right top" left content-class="language-dropdown" transition="slide-y-transition" nudge-top="-10" class="v-step-3">
		<template v-slot:activator="{ on }">
			<v-btn icon large v-on="on" class="ml-2">
				<img class="img-responsive" :src="`/static/flag-icons/${selectedCountry.icon}.png`">
			</v-btn>
		</template>
		<div class="dropdown-content">
			<div class="dropdown-top d-custom-flex justify-space-between primary">
				<span class="white--text fw-bold">Countries</span>
			</div>
			<v-list class="dropdown-list">
				<v-list-item v-for="country in countries" :key="country.name" @click="changeCountry(country)">
					<img class="img-responsive mr-3" :src="`/static/flag-icons/${country.icon}.png`">
					<span>{{ country.name }}</span>
				</v-list-item>
			</v-list>
		</div>
	</v-menu>
</template>

<script>
	import {
		mapGetters
	} from "vuex";

	export default {
		computed: {
			...mapGetters(["selectedCountry", "countries"])
		},
		methods: {
			changeCountry(country) {
			  this.$store.dispatch('changeCountry',country)

        // Reload page
        this.$router.go(0);
			}
		}
	};
</script>