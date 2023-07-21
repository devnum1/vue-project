<template>
   <div class="shop-content-wrap px-2">
      <div class="d-custom-flex justify-space-between align-items-center mb-1">
			<div class="shop-header d-custom-flex">
				<div class="ham-menu-sm d-none">
					<v-btn text icon class="mr-3 my-0" @click="toggleEcommerceSidebar">
						<v-icon class="grey--text">menu</v-icon>
					</v-btn>
				</div>
				<div class="app-selectbox-sm">
					<ais-sort-by
					  :items="[
					    { value: 'ikea', label: 'Default' },
					    { value: 'ikea_price_asc',label: 'Lowest price'},
					    { value: 'ikea_price_desc',  label: 'Highest price'},
					  ]"
					/>
				</div>
				<div class="app-selectbox-sm ml-4">
		         <ais-hits-per-page
		           :items="[
		                  { label: '9 hits per page', value: 8 },
		                  { label: '12 hits per page', value: 12, default: true },
		                  { label: '15 hits per page', value: 16 },
		               ]"
		           />
		      </div>
			</div>
         <ais-stats></ais-stats>
      </div>

		<ais-hits class="layout row wrap mb-12">
        	<template 
        		slot="item" 
        		slot-scope="{ item }"
        	>
        		<product-item :data="item"></product-item>
        	</template>
      </ais-hits>

		<div class="pagination-wrap">
			<ais-pagination class="mb-5" :classNames="{
				'ais-pagination': 'pagination',
				'ais-pagination__item': 'pagination__item',
				'ais-pagination__item--active': 'pagination__item--active primary',
				'ais-pagination__item--previous': 'pagination__navigation',
				'ais-pagination__item--next': 'pagination__navigation',
				'ais-pagination__item--disabled': 'disabled'

			}" v-on:page-change="onPageChange"/>
		</div>
   </div>   
</template>
<script>
import { mapGetters } from "vuex";
import ProductItem from "./ProductItem";

export default {
  components: {
    ProductItem
  },
  methods: {
    onPageChange() {
      window.scrollTo(0, 0);
    },
    toggleEcommerceSidebar() {
      this.$store.dispatch("toggleEcommerceSidebarFilter", true);
    }
  }
};
</script>
