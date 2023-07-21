<template>
	<div class="v-add-products v-product-details">
		<app-section-loader :status="loader"></app-section-loader>
		<page-title-bar></page-title-bar>

		<template v-if="selectedProduct !== null">
			<v-container fluid pt-sm-4 pt-0>
				<v-row>
					<v-col cols="12" sm="9" md="10" lg="10" class="mx-auto">
						<v-row>
							<v-col cols="12" sm="12" md="6" lg="6">
								<div class="product-images-wrap d-flex">
									<div class="product-images mr-4">
										<div class="thumb-wrap ml-auto">
											<v-img class="mb-6" v-for="(img,i) in selectedProduct.image_gallery" :src="img"
												style="width: 40px; height: 70px;" @mouseover="doHover(img)" :key="i" />
										</div>
									</div>
									<div class="product-preview-wrap">
										<v-img :src="selectedProduct.image" style="width: 100%;" />
									</div>
								</div>
							</v-col>
							<v-col cols="12" sm="12" md="6" lg="6" class="content-wrap pl-md-6">
								<router-link class="my-4" :to="`/${getCurrentAppLayoutHandler() + '/ecommerce/shop'}`">Go to Products</router-link>
								<p class="mb-3 fs-14 text-gray-light"><span class="fw-semi-bold text-gray">Name :</span> {{selectedProduct.name}}</p>
								<p class="mb-3 fs-14 text-gray-light"><span class="fw-semi-bold text-gray">Price :</span> {{selectedProduct.price}}</p>
								<p class="mb-3 fs-14 text-gray-light"><span class="fw-semi-bold text-gray">Availability :</span> {{selectedProduct.availablity}}</p>
								<p class="mb-3 fs-14 text-gray-light"><span class="fw-semi-bold text-gray">Product Code :</span> {{selectedProduct.product_code}}</p>
								<p class="mb-3 fs-14 text-gray-light"><span class="fw-semi-bold text-gray">Tags :</span> {{selectedProduct.tags}}</p>
								<p class="mb-3 fs-14 text-gray-light"><span class="fw-semi-bold text-gray">Description :</span> {{selectedProduct.description}}</p>
								<p class="mb-3 fs-14 text-gray-light"><span class="fw-semi-bold text-gray">Features :</span> {{selectedProduct.features}}</p>
								<ul class="list-unstyled d-flex flex-wrap">
									<li v-for="color in colors" class="mr-3">
										<v-checkbox :label="color"></v-checkbox>
									</li>
								</ul>
								<ul class="list-unstyled d-flex flex-wrap">
									<li v-for="size in sizes" class="mr-3">
										<v-checkbox :label="size"></v-checkbox>
									</li>
								</ul>
								<v-text-field class="mb-4 w-75" value="5" type="number" label="Total Products"></v-text-field>
								<v-btn color="success" class="mr-3">Buy</v-btn>
								<v-btn color="error" >Wishlist</v-btn>
							</v-col>
						</v-row>
					</v-col>
				</v-row>
			</v-container>
		</template>
	</div>
</template>
<script>
	import { productsData } from 'Views/ecommerce/data.js'
	import { getCurrentAppLayout } from "Helpers/helpers";
	export default {
		data() {
			return {
				loader: false,
				productsData,
				products: '',
				selectedProduct: '',
				colors: ["Red", "Blue", "Yellow", "Green"],
				sizes: ["28", "30", "32", "34", "36", "38", "40"]
			}
		},
		mounted() {
			this.getProductData();
		},
		methods:{
			getProductData(event){
				var allItems = this.productsData.men.concat(this.productsData.women,this.productsData.accessories,this.productsData.gadgets);
				for(var i = 0;i < allItems.length; i++)
				{ if(allItems[i].id == this.$route.params.id )
					{
						this.selectedProduct = {
							availablity: allItems[i].availablity,
							brand: allItems[i].brand,
							category: allItems[i].category,
							category_type: allItems[i].category_type,
							color: allItems[i].color,
							discountPriceValue: allItems[i].discountPriceValue,
							description: allItems[i].description,
							discount_price: allItems[i].discount_price,
							features: allItems[i].features,
							id: allItems[i].id,
							image: allItems[i].image,
							image_gallery: allItems[i].image_gallery,
							name: allItems[i].name,
							popular: allItems[i].popular,
							price: allItems[i].price,
							product_code: allItems[i].product_code,
							quantity: allItems[i].quantity,
							rating: allItems[i].rating,
							status: allItems[i].status,
							tags: allItems[i].tags,
							type: allItems[i].type
						}
					}

				}
			},
			doHover(img) {
				this.selectedProduct.image = img;
			},
			getCurrentAppLayoutHandler() {
				return getCurrentAppLayout(this.$router);
			}
		}

	}
</script>
