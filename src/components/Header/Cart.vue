<template>
	<v-menu
      :close-on-content-click="false"
		left 
		offset-y
		origin="right top" z-index="99" content-class="cart-dropdown" transition="slide-y-transition" nudge-top="-20"
    >
      <template v-slot:activator="{ on }">
      	<v-btn text icon v-on="on">
	      	<v-badge right overlap>
					<span slot="badge">{{cart.length}}</span>
					<i class="zmdi grey--text zmdi-shopping-cart zmdi-hc-fw font-lg"></i>
				</v-badge>
			</v-btn>
      </template>
      <v-card>
			<div class="dropdown-top d-custom-flex justify-space-between primary">
				<span class="white--text fw-bold">Cart</span>
				<span class="v-badge warning">3 NEW</span>
			</div>
			<div class="text-center pa-4" v-if="cart == ''">
				<span class="d-block font-3x mb-15 error--text">
					<i class="zmdi zmdi-shopping-cart"></i>
				</span>
				<h3>{{$t('message.noItemsFound')}}</h3>
			</div>
			<div v-else class="dropdown-content">
				<vue-perfect-scrollbar style="height:280px" :settings="settings">
					<v-list two-line>
						<template v-for="(cart, index) in cart">
							<v-list-item :key="index">
								<div class="product-img mr-3">
									<img height="55" width="55" :src="cart.productImg">
								</div>
								<v-list-item-content>
									<span class="fs-14">{{cart.name}}</span>
									<span class="fs-12 fw-normal grey--text">
										$ {{cart.price}} X {{cart.quantity}}
									</span>
								</v-list-item-content>
								<v-list-item-action>
									<v-btn @click="deleteProductFromCart(cart)" icon >
										<i class="zmdi zmdi-close"></i>
									</v-btn>
								</v-list-item-action>
							</v-list-item>
						</template>
					</v-list>
				</vue-perfect-scrollbar>
				<delete-confirmation-dialog
					ref="deleteConfirmationDialog"
					heading="Are You Sure You Want To Delete?"
					message="Are you sure you want to delete this product permanently?"
					@onConfirm="onDeleteProductFromCart"
				>
				</delete-confirmation-dialog>
			</div>
			<v-card-actions v-if="cart != ''">
				<v-btn color="primary" v-if="horizontal" small :to="`/${getCurrentAppLayoutHandler() + '/ecommerce/cart'}`">
					{{$t('message.viewCart')}}
				</v-btn>
				<v-btn v-else small color="primary" :to="`/${getCurrentAppLayoutHandler() + '/ecommerce/cart'}`">{{$t('message.viewCart')}}</v-btn>
				<v-spacer></v-spacer>
				<span class="fs-14 grey--text">{{$t('message.totalPrice')}}: ${{getTotalPrice}}</span>
			</v-card-actions>
		</v-card>
    </v-menu>
</template>

<script>
import { mapGetters } from "vuex";
import { getCurrentAppLayout } from "Helpers/helpers";

export default {
  props: ["horizontal"],
  data() {
    return {
      selectDeletedProduct: null,
      settings: {
        maxScrollbarLength: 160
      }
    };
  },
  computed: {
    ...mapGetters(["cart"]),
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
      this.$store.dispatch(
        "onDeleteProductFromCart",
        this.selectDeletedProduct
      );
    }
  }
};
</script>
