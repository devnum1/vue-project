<!-- Shopping Cart Widget -->
<template>
	<div>
	  <app-section-loader :status="loader"></app-section-loader>
		<v-data-table
		 v-model="selected"
		 :headers="headers"
		 :items="items"
		 item-key="id"      
		 class="elevation-1"
		 hide-default-footer
	  >
		 <template v-slot:item="{ item }">      
		 <tr>
			<td>
			  <v-checkbox color="primary" hide-details></v-checkbox>
			</td>
			<td>{{ item.id }}</td>
			<td>{{ item.productName }}</td>
			<td>{{ item.quantity }}</td>
			<td><v-badge :class="item.labelClasses">{{ item.status }}</v-badge></td>
			<td>$ {{ item.amount }}</td>
			<td>
			  <v-btn text icon color="error" @click="onDeleteCartItem(item)">
					<v-icon class="zmdi zmdi-delete"></v-icon>
			  </v-btn>
			</td>
		 </tr>
	  </template>
	  </v-data-table>
	</div>
 </template>
 
 <script>
 import api from "Api";
 
 export default {
	data() {
	  return {
		 loader: true,
		 selected: [],
		 headers: [
			{
			  text: "Select",
			  align: "center",
			  sortable: false,
			  value: "select"
			},
			{
			  text: "Order Id",
			  align: "center",
			  sortable: false,
			  value: "id"
			},
			{
			  text: "Product Name",
			  align: "center",
			  sortable: false,
			  value: "productName"
			},
			{
			  text: "Quantity",
			  align: "center",
			  sortable: false,
			  value: "quantity"
			},
			{
			  text: "Status",
			  align: "center",
			  sortable: false,
			  value: "status"
			},
			{
			  text: "Amount",
			  align: "center",
			  sortable: false,
			  value: "amount"
			},
			{
			  text: "",
			  align: "center",
			  sortable: false
			}
		 ],
		 items: []
	  };
	},
	mounted() {
	  this.getShoppingCart();
	},
	methods: {
	  toggleAll() {
		 if (this.selected.length) this.selected = [];
		 else this.selected = this.items.slice();
	  },
	  // on delete cart item
	  onDeleteCartItem(item) {
		 let index = this.items.indexOf(item);
		 this.items.splice(index, 1);
	  },
	  getShoppingCart() {
		 api
			.get("vuely/recentOrders.js")
			.then(response => {
			  this.loader = false;
			  this.items = response.data;
			})
			.catch(error => {
			  console.log(error);
			});
	  }
	}
 };
 </script>
 