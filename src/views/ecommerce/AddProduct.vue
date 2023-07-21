<template>
	<div class="v-add-products">
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
										<div class="thumb-wrap ml-auto" for="upload" v-for="img in 4">
											<v-img src="https://via.placeholder.com/625x800" style="height: 70px;" />
											<div class="edit-btn d-flex justify-center align-items-center">
												<v-icon dark >add</v-icon>
											</div>
											<input type="file" id="upload" accept="image/*" class="upload-img">
										</div>
									</div>
									<div class="product-preview-wrap">
										<v-img src="https://via.placeholder.com/625x800" style="width: 100%;" />
									</div>
								</div>
							</v-col>
							<v-col cols="12" sm="12" md="6" lg="6" class="content-wrap pl-md-6">
								<router-link class="pt-4" :to="`/${getCurrentAppLayoutHandler() + '/ecommerce/edit-product'}`">Go to Products
								</router-link>
								<v-text-field prepend-icon="add" class="name-input" placeholder="Add product Name"></v-text-field>
								<v-text-field prepend-icon="add" class="price-input" placeholder="Add Price"></v-text-field>
								<v-text-field prepend-icon="add" label="Availablity" ></v-text-field>
								<v-text-field prepend-icon="add" label="Product Code :"></v-text-field>
								<v-text-field prepend-icon="add" label="Tags :"></v-text-field>
								<v-text-field prepend-icon="add" label="Description"></v-text-field>
								<v-text-field prepend-icon="add" label="Featured points"></v-text-field>
								<v-text-field class="w-75" prepend-icon="add" value="5" type="number" label="Total Products"></v-text-field>
								<v-btn color="success" class="mr-3">Save</v-btn>
								<v-btn color="error"  >Discard</v-btn>
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
		},
		methods: {
			getCurrentAppLayoutHandler() {
				return getCurrentAppLayout(this.$router);
			}
		}

	}
</script>
