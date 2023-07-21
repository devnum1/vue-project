<template>
  <div class="table-responsive">
     <v-data-table
       :headers="headers"
       :items="products"
       class="elevation-1"
     >
      <template v-slot:item="{ item }">
      	<tr>
	         <td>{{ item.id }}</td>
	         <td class="text-left"><img width="35" height="50" :src="item.image"/></td>
	         <td class="text-left">{{ item.name }}</td>
	         <td class="text-left">{{ item.brand }}</td>
	         <td class="text-left">{{ item.category }}</td>
	         <td class="text-left" >{{ item.product_code }}</td>
	         <td class="text-left">$ {{ item.discount_price }}</td>
	         <td class="text-left" >$ {{ item.price }}</td>
	         <td class="text-left">
	         	<div class="d-flex">
					<div><v-icon dark class="delete-btn" @click="deleteDialog(item)">delete</v-icon></div>
	         	<router-link :to="`/${getCurrentAppLayoutHandler() + '/ecommerce/edit-detail/'+ item.type +'/'+ item.id}`" >
						<v-icon class="edit-btn ml-3" dark style="cursor: pointer;"  >edit</v-icon>	         		
	         	</router-link>
					</div>
	         </td>
         </tr>
       </template>      
     </v-data-table>

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
				open:false,
				headers: [
		          	{ text: 'Id', value: 'id', sortable: false},
		          	{ text: 'Image', value: 'image', sortable: false},
		          	{ text: 'Name', value: 'name', sortable: false},
		          	{ text: 'Brand', value: 'brand', sortable: false},
		          	{ text: 'Category', value: 'category', sortable: false},
		          	{ text: 'Product Code', value: 'product_code', sortable: false},
		          	{ text: 'Discount Price', value: 'discount_price', sortable: false},
		          	{ text: 'Price', value: 'price', sortable: false},
		          	{ text: 'Action', value: 'deadline', sortable: false}
		      ]
			}
		},
		created(){
			var currentRoute = this.$route.path
			var splitRoute = currentRoute.split("/");
			console.log(splitRoute[3]);
			this.currentPage = splitRoute[3];
			console.log
		},
		methods:{
			deleteDialog(item){
				this.$refs.deleteConfirmationDialog.openDialog();
				this.selectItemToDelete = item;
			},
			DeleteProduct(){
				this.$refs.deleteConfirmationDialog.close();
				var index = this.products.indexOf(this.selectItemToDelete)
				this.products.splice(index,1);	
				console.log(index);
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
	.delete-btn,.edit-btn{
		font-size:1.25rem;
	}
</style>