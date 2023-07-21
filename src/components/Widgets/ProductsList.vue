<template>
	<div>
		<template v-for="(details,index) in products">
			<div :id="index" class="pa-4 white mb-8 product-list d-sm-flex" >
				<div class="tab-image">
					<router-link :to="`/${getCurrentAppLayoutHandler() + '/ecommerce/product-detail/'+ details.type +'/'+ details.id}`">
			      	<img :src="details.image" style="width: 100%;" />
	         	</router-link>
				</div>
				<div class="section-content pl-sm-6 pt-sm-0 pt-6">
					<h4>{{ details.name }}</h4>
					<span class="fs-14 d-flex">
						<del>$ {{ details.price }}</del>
						<span class="primary--text pl-3">${{ details.discountPriceValue }}</span>
					</span>
					<p class="fs-14">{{ details.category }}</p>
				</div>
				<div class="action-btn text-right">
					<div>
						<v-btn fab dark small color="primary">
							<v-icon dark>shopping_cart</v-icon>
						</v-btn>
					</div>
				</div>
			</div>
		</template>
	</div>
</template>
<script>
	import { getCurrentAppLayout } from "Helpers/helpers";
	export default{
		props:['productsData'],
		data(){
			return{
				products: this.productsData.men.concat(this.productsData.women,this.productsData.accessories,this.productsData.gadgets),
			}
		},
		methods:{
			getCurrentAppLayoutHandler() {
	         return getCurrentAppLayout(this.$router);
	      }
		}
	}
</script>
<style scoped>
	.shoppingCart-btn{
		position: absolute;
		right: 0;
	}
</style>