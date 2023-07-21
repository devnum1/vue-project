<template>
	<div class="cart-wrapper">
		<page-title-bar></page-title-bar>
		<v-container fluid pt-0>
			<v-layout row wrap px-3>
				<app-card :fullBlock="true" colClasses="xl12 lg12 md12 sm12 xs12 pa-0">
					<app-section-loader :status="loader"></app-section-loader>
					<v-data-table :headers="headers" :items="cart" hide-default-footer>
						<template v-slot:item="{ item }">
							<tr>
								<td class="d-custom-flex align-items-center justify-center product-item px-1">
									<img :src="item.productImg" class="img-responsive" height="100" width="100">
								</td>
								<td>
									<h6 class="mb-0">{{ item.name }}</h6>
								</td>
								<td class="text-center count-wrap">
									<input type="number" min="1" :value="item.quantity" @change="onChangeQuantity($event, item)">
								</td>
								<td class="text-center">
									<span class="fw-light">$ {{ item.price }}</span>
								</td>
								<td class="text-center">${{ item.total }}</td>
								<td class="text-center">
									<v-btn icon class="mx-0" @click="deleteProductFromCart(item)">
										<v-icon class="error--text">close</v-icon>
									</v-btn>
								</td>
							</tr>
						</template>
						<template slot="no-data">
							<span>{{$t('message.noItemsFound')}}</span>
						</template>
						<template slot="footer">
							<div class="table-footer d-flex flex-wrap justify-space-between align-items-center">
								<div class="">
									<v-text-field solo placeholder="Apply Promo Code"></v-text-field>
								</div>
								<div>
									<v-btn class="ma-0" color="warning">Apply</v-btn>
								</div>
								<div>
									<span class="fw-semi-bold">{{$t('message.total')}}</span>
								</div>
								<div>
									<span class="fw-semi-bold">${{getTotalPrice}}</span>
								</div>
								<div>
									<v-btn class="ma-0" color="primary"
										:to="`/${getCurrentAppLayoutHandler() + '/ecommerce/checkout'}`">
										Checkout
									</v-btn>
								</div>
							</div>
						</template>
					</v-data-table>
					<delete-confirmation-dialog ref="deleteConfirmationDialog" heading="Are You Sure You Want To Delete?"
						message="Are you sure you want to delete this product permanently?"
						@onConfirm="onDeleteProductFromCart">
					</delete-confirmation-dialog>
				</app-card>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import { getCurrentAppLayout } from "Helpers/helpers";
export default {
  data() {
    return {
      selectDeletedProduct: null,
      loader: false,
      headers: [
        {
          text: "",
          align: "center",
          sortable: false,
          class: "w-10"
        },
        {
          text: "Product",
          value: "product",
          sortable: false,
          class: "w-50"
        },
        {
          text: "Quantity",
          value: "quantity",
          sortable: false,
          align: "center",
          class: "w-10"
        },
        {
          text: "Price",
          value: "price",
          sortable: false,
          align: "center",
          class: "w-10"
        },
        {
          text: "Total",
          value: "total",
          sortable: false,
          align: "center",
          class: "w-10"
        },
        {
          text: "Remove",
          sortable: false,
          align: "center",
          class: "w-10"
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["cart"]),
    /**
     *  to get total price of all the items
     */
    getTotalPrice() {
      let totalPrice = 0;
      if (this.cart.length > 0) {
        for (const item of this.cart) {
          totalPrice += item.total;
        }
        return totalPrice.toFixed(2);
      } else {
        return totalPrice;
      }
    }
  },
  methods: {
    getCurrentAppLayoutHandler() {
      return getCurrentAppLayout(this.$router);
    },
    /**
     * show total price of product according to quantity change
     */
    onChangeQuantity(e, cartItem) {
      this.$store.dispatch("changeQuantityHandler", {
        e,
        cartItem
      });
    },
    /**
     * open dialog to delete product
     */
    deleteProductFromCart(product) {
      this.$refs.deleteConfirmationDialog.openDialog();
      this.selectDeletedProduct = product;
    },
    /**
     * delete product
     */
    onDeleteProductFromCart() {
      this.$refs.deleteConfirmationDialog.close();
      this.loader = true;
      setTimeout(() => {
        this.loader = false;
        this.$store.dispatch(
          "onDeleteProductFromCart",
          this.selectDeletedProduct
        );
      }, 1500);
    }
  }
};
</script>
