<template>
	<div class="sidebar-filter-wrap">
		<app-card customClasses="mb-5">
			<SearchBox></SearchBox>
		</app-card>
		<app-card customClasses="mb-5">
			<h6>CATEGORY</h6>
			<ais-refinement-list attribute="category" :limit="5"></ais-refinement-list>
		</app-card>

		<app-card customClasses="mb-5">
			<h6>PRICE</h6>
			<ais-range-input attribute="price" :min="10" :max="50">
			</ais-range-input>
		</app-card>

		<app-card customClasses="mb-5">
			<h6>MATERIAL</h6>
			<ais-refinement-list attribute="materials" :limit="5">
			</ais-refinement-list>
		</app-card>

		<app-card customClasses="mb-5">
			<h6>COLOR</h6>
			<ais-refinement-list attribute="colors" :limit="5">
			</ais-refinement-list>
		</app-card>

		<app-card customClasses="mb-5">
			<h6>RATING</h6>
			<ais-rating-menu attribute="rating">
			</ais-rating-menu>
		</app-card>
		<app-card customClasses="mb-5">
			<ais-clear-refinements />
		</app-card>
	</div>
</template>
<script>
	import SearchBox from "./SearchBox";
	export default {
		components: {
			SearchBox
		}
	};
</script>