<template>
	<div class="inbox-head">
		<user-block></user-block>
		<vue-perfect-scrollbar class="inbox-sidebar-scroll" :style="getScrollHeight()">
			<div class="inbox-inner pa-6">
				<v-dialog v-model="dialog" max-width="1000px" class="mb-5 d-block">
					<template v-slot:activator="{ on }">
						<v-btn color="error" class="btn-icon ma-0" dark v-on="on"  block>
							<i class="zmdi zmdi-edit"></i>
							<span class="mt-1">{{$t("message.composeEmail")}}</span>
						</v-btn>
					</template>
					<v-card>
						<v-card-title>
							<h3 class="mb-0">{{$t("message.newEmail")}}</h3>
						</v-card-title>
						<v-card-text>
							<div class="mail-top px-4">
								<v-text-field label="To"></v-text-field>
								<v-text-field label="From" value="Vuely@examples.com" disabled></v-text-field>
								<v-text-field label="Title"></v-text-field>
							</div>
							<div class="mail-body">
								<email-box></email-box>
							</div>
						</v-card-text>
						<div class="text-right px-4 pb-3">
							<v-btn 
								color="primary" 
								@click.native="dialog = false"
							>
								Close
							</v-btn>
							<v-btn class="ml-4" color="error" @click.native="dialog = false">Save</v-btn>
						</div>
					</v-card>
				</v-dialog>
				<div class="mailbox-items-warp">
					<span class="fs-12 fw-semi-bold px-4 mb-1 d-block">{{$t("message.mailboxes")}}</span>
					<v-list>
						<template v-for="filter in mailboxes">
							<v-list-item @click="filterEmails(filter)" :key="filter.id">
								<v-list-item-action class="my-0">
									<v-icon>{{ filter.action }}</v-icon>
								</v-list-item-action>
								<v-list-item-content class="py-0">
								<span>{{ filter.name }}</span>
								</v-list-item-content>
							</v-list-item>
						</template>
					</v-list>
				</div>
				<div class="mailbox-items-warp">
					<span class="fs-12 fw-semi-bold  px-4 mb-1 d-block">{{$t("message.folders")}}</span>
					<v-list>
						<v-list-item 
							v-for="(item, key) in folder_items" 
							@click="" 
							:key="key"
						>
							<v-list-item-action class="my-0">
								<v-icon :class="item.action"></v-icon>
							</v-list-item-action>
							<v-list-item-content class="py-0">
							<span>{{ $t(item.title) }}</span>
							</v-list-item-content>
							<v-spacer></v-spacer>
							<v-icon :class="item.class">fiber_manual_record</v-icon>
						</v-list-item>
					</v-list>
				</div>
				<div class="mailbox-items-warp">
					<span class="fs-12 fw-semi-bold px-4 mb-1 d-block">{{$t("message.settings")}}</span>
					<v-list>
						<v-list-item 
							v-for="(item, key) in settings_items" 
							:key="key" 
							@click=""
						>
							<v-list-item-action class="my-0">
							<v-icon :class="item.action"></v-icon>
							</v-list-item-action>
							<v-list-item-content class="py-0">
							<span>{{ $t(item.title) }}</span>
							</v-list-item-content>
						</v-list-item>
					</v-list>
				</div>
			</div>
		</vue-perfect-scrollbar>
  	</div>
</template>

<script>
import { mapGetters } from "vuex";
import EmailBox from "./EmailBox";
import UserBlock from "./UserBlock";
import { getCurrentAppLayout } from "Helpers/helpers";

export default {
  computed: {
    ...mapGetters(["mailboxes"])
  },
  methods: {
    filterEmails(filter) {
      this.$store.dispatch("filterEmails", filter);
    },
    getScrollHeight() {
      let layout = getCurrentAppLayout(this.$router);
      switch (layout) {
			case "default":
				return "height:calc(100vh - 220px)";
			case "mini":
				return "height:calc(100vh - 220px)";
			case "horizontal":
				return "height:calc(100vh - 265px)";
			case "boxed":
				return "height:calc(100vh - 390px)";
			case "boxed-v2":
				return "height:calc(100vh - 390px)";
			default:
				return "height:calc(100vh - 220px)";
      }
    }
  },
  data() {
    return {
      dialog: false,
      folder_items: [
        {
          action: "zmdi zmdi-folder",
          title: "message.work",
          class: "primary--text"
        },
        {
          action: "zmdi zmdi-folder-person",
          title: "message.personal",
          class: "error--text"
        }
      ],
      settings_items: [
        {
          action: "zmdi zmdi-folder",
          title: "message.manageFolders"
        },
        {
          action: "zmdi zmdi-account-box-mail",
          title: "message.contacts"
        },
        {
          action: "zmdi zmdi-settings",
          title: "message.settings"
        }
      ]
    };
  },
  components: {
    EmailBox,
    UserBlock
  }
};
</script>
