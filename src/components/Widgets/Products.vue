<template>
	<div>
		<v-layout row wrap >
			<template v-for="(details,index) in products" >					
				<app-card 
               :id="index"
               colClasses="xl3 lg3 md6 sm6 xs12"
                >
               <v-layout row wrap contact-item-info>
                  <v-flex xs12 lg12 md12 sm-12 text-center>
                     <div class="tab-image">
                     	<!-- Redirect to product detail page -->
                     	<router-link :to="`/${getCurrentAppLayoutHandler() + '/ecommerce/product-detail/'+ details.type +'/'+ details.id}`">
						      	<img :src="details.image" style="width: 100%;" />
                     	</router-link>	
						      <template v-if="currentPage == 'shop'">
							      <v-btn fab dark small color="primary" class="shoppingCart-btn mt-2">
								      <v-icon dark>shopping_cart</v-icon>
								   </v-btn>						      	
						      </template>

                     	<!-- Redirect to product edit page -->						      
						      <template v-if="currentPage == 'edit-product'">
								   <v-icon dark class="delete-btn" @click="deleteDialog(details)">delete</v-icon>
								   <v-btn fab dark small 
								   	color="primary" 
								   	class="edit-btn"
								   	:to="`/${getCurrentAppLayoutHandler() + '/ecommerce/edit-detail/'+ details.type +'/'+ details.id}`"
								   	>
								      <v-icon dark>edit</v-icon>
								   </v-btn>
						      </template>
                     </div>
                  </v-flex>
                  <v-flex xs12 lg12 md12 sm-12 pt-0>
                  	<p class="fs-14 mb-3">{{ details.category }}</p>
   						<h4 class="mb-3">{{ details.name }}</h4>
							<span class="fs-14 d-inline-flex">
								<del>$ {{ details.price }}</del>
								<span class="primary--text pl-3">${{ details.discountPriceValue }}</span>
							</span>
                  </v-flex>
               </v-layout>
				</app-card>
			</template>
		</v-layout>
		<delete-confirmation-dialog
			ref="deleteConfirmationDialog"
			heading="Are You Sure You Want To Delete?"
			message="Are you sure you want to delete this Product permanently?"
			@onConfirm="DeleteProduct"
		>
		</delete-confirmation-dialog>
	</div>
</template>
<script>
	import { getCurrentAppLayout } from "Helpers/helpers";
	export default{
		props:['productsData'],
		data(){
			return{
				products: this.productsData.men.concat(this.productsData.women,this.productsData.accessories,this.productsData.gadgets),
				currentPage: '',
				selectItemToDelete:'',
				open:false
			}
		},
		created(){
			var currentRoute = this.$route.path
			var splitRoute = currentRoute.split("/");
			this.currentPage = splitRoute[3];
		},
		methods:{
			deleteDialog(item){
				this.$refs.deleteConfirmationDialog.openDialog();
				this.selectItemToDelete = item;
			},
			DeleteProduct(){
				this.$refs.deleteConfirmationDialog.close();
				var index = this.products.indexOf(this.selectItemToDelete)
				this.products.splice(index,1)
			},
			openDialog(){
				this.open = true;
			},
			close(){
				this.open = false;
			},
			getCurrentAppLayoutHandler() {
	         return getCurrentAppLayout(this.$router);
	      }
		}
	}
</script>
<style scoped>
	.delete-btn{
		position: absolute;
		margin-left: -40px; 
		margin-top: 10px; 
		cursor: pointer;
	}
	.edit-btn{
		position: absolute;
		margin-left: -48px; 
		margin-top: 40px;
	}
	.shoppingCart-btn{
		position: absolute;
		margin-left: -48px;
	}
</style>