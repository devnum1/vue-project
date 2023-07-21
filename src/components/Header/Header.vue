<!-- Header Structure -->
<template>
	<div>
		<v-navigation-drawer
			v-if="!horizontal"
			app
			fixed
			v-model="drawer"
			:mini-variant.sync="sidebarState"
			mini-variant-width="70"
			:width="250"
			class="Vuely-sidebar"
			:style="{backgroundImage: 'url(' + selectedSidebarBgImage.url + ')'}"
			:class="{'background-none': !backgroundImage}"
			:right="rtlLayout"
		>
			<!-- App Sidebar -->
			<app-sidebar></app-sidebar>
		</v-navigation-drawer>

		<v-app-bar
			class="Vuely-toolbar"
			app
			:color="activeHeaderFilter.class"
			fixed
		>
			<div class="d-custom-flex align-items-center navbar-left">
				<div v-if="!horizontal">
					<v-app-bar-nav-icon  @click.stop="drawer = !drawer" class="v-step-0"></v-app-bar-nav-icon>
				</div>
				<div class="site-logo-wrap d-custom-flex ml-0 align-items-center" v-else>
					<router-link to="/horizontal/dashboard/ecommerce" class="grayish-blue site-logo-img">
						<img src="/static/img/site-logo.png" alt="site logo" width="100" height="30">
					</router-link>
				</div>
<!--				<quick-links></quick-links>-->
<!--				<v-text-field text solo prepend-icon="search" :placeholder="$t('message.search')" class="search-bar"></v-text-field>-->
<!--				<div class="mobile-search d-none">-->
<!--					<v-btn text icon  small class="mobile-search-btn" @click="toggleSearchForm">-->
<!--						<v-icon class="font-md">search</v-icon>-->
<!--					</v-btn>-->
<!--				</div>-->
			</div>
			<div class="navbar-right">
<!--				<v-btn class="v-step-2 mr-2 upgrade-btn" color="primary" tag="link" @click="sidebarPath('/pages/pricing-1')">{{ $t('message.pricing') }}</v-btn>-->
<!--				<v-btn icon large @click="toggleFullScreen" class="full-screen ma-0">-->
<!--					<v-icon color="grey">fullscreen</v-icon>-->
<!--				</v-btn>-->
<!--				<v-btn class="ma-0" icon large @click.stop="chatSidebar = !chatSidebar">-->
<!--					<v-icon color="grey">forum</v-icon>-->
<!--				</v-btn>-->
<!--				<notifications></notifications>-->
<!--				<cart :horizontal="horizontal"></cart>-->
        <reports></reports>
        <contact-us></contact-us>
				<country-provider></country-provider>
				<user></user>
			</div>
		</v-app-bar>
		<!-- Chat Searchbar -->
<!--		<v-navigation-drawer fixed v-model="chatSidebar" :right="!rtlLayout" temporary app class="chat-sidebar-wrap" :width="300">-->
<!--			<chat-sidebar></chat-sidebar>-->
<!--		</v-navigation-drawer>-->
		<mobile-search-form></mobile-search-form>
	</div>
</template>

<script>
import Sidebar from "../Sidebar/Sidebar.vue";
import ChatSidebar from "../ChatSidebar/ChatSidebar.vue";
import CountryProvider from "./CountryProvider";
import ContactUs from "./Jufrah/ContactUs";
import Reports from "./Jufrah/Reports";
import Notifications from "./Notifications";
import User from "./User";
import Cart from "./Cart";
import QuickLinks from "./QuickLinks";
import MobileSearchForm from "./MobileSearchForm";
import { getCurrentAppLayout } from "Helpers/helpers";
import { mapGetters } from "vuex";

export default {
  created() {
    this.fetchNotifications();
  },

  props: {
		horizontal: {
			default: false,
			type: Boolean
		}
	},
	data() {
		return {
			collapsed: false, // collapse sidebar
			drawer: null, // sidebar drawer default true
			chatSidebar: false, // chat component right sidebar
			sidebarImages: "", // sidebar background images
			enableDefaultSidebar: false
		};
	},
	computed: {
		...mapGetters([
			"rtlLayout",
			"backgroundImage",
			"backgroundImage",
			"selectedSidebarBgImage",
			"collapseSidebar",
			"activeHeaderFilter"
		]),
		sidebarState: {
			get: function() {
				return this.collapseSidebar;
			},
			set: function() {
				return this.collapseSidebar;
			}
		}
	},
	methods: {
		// toggle full screen method

		sidebarPath(link){
			this.$store.dispatch('setActiveMenuGroup',{ pathURL: link });
			this.$router.push(this.getMenuLink(link));
		},
		getMenuLink(link) {
			return "/" + getCurrentAppLayout(this.$router) + link;
		},
			toggleSearchForm() {
				this.$store.dispatch('toggleSearchForm');
		},

    fetchNotifications() {
      this.$store.dispatch('adminNotifications/fetchNotifications');
    }
	},
	components: {
		appSidebar: Sidebar,
		ChatSidebar,
		CountryProvider,
		Notifications,
		Cart,
		QuickLinks,
		MobileSearchForm,
		User,
    ContactUs,
    Reports,
	}
};
</script>
