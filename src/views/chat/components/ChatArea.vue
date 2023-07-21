<template>
	<div class="chat-wrapper">
		<div class="app-flex justify-center align-center h-vh-100" v-if="loadingChat">
			<single-chat-loader></single-chat-loader>
		</div>
		<template v-else>
			<template v-if="selectedUser">
				<v-toolbar class="chat-head">
					<div class="chat-head-left d-custom-flex align-items-center">
						<v-btn class="mr-2 ham-menu-icon d-none gray--text" @click="toggleChatSidebar" text icon small>
							<v-icon dark>menu</v-icon>
						</v-btn>
						<div class="media align-items-center">
							<div class="media-left mr-4 pos-relative">
								<img :src="selectedUser.avatar" alt="user-profile" class="rounded-circle pos-relative" width="40" height="40">
								<span :class="{'v-badge success rounded floating': selectedUser.status ===1}"></span>
							</div>
							<div class="media-body">
								<h6 class="mb-0">{{selectedUser.name}}</h6>
								<span class="grey--text fs-12 d-inline-block fw-normal" v-if="selectedUser.status ===1">online</span>
								<span class="grey--text fs-12 d-inline-block fw-normal" v-else>Last seen {{selectedUser.lastSeen}}</span>
							</div>
						</div>
					</div>
					<div class="chat-head-right">
						<v-btn icon color="white" class="video-icon primary mr-3">
							<v-icon>videocam</v-icon>
						</v-btn>
						<v-btn icon color="white" class="video-icon primary mr-3">
							<v-icon>phone</v-icon>
						</v-btn>
						<v-menu 
							offset-y 
							origin="left left" 
							transition="scale-transition" 
							left
						>
							<template v-slot:activator="{ on }" >
								<v-btn v-on="on" icon>
									<v-icon>more_vert</v-icon>
								</v-btn>
							</template>
							<v-list>
								<v-list-item @click="console.log('clear chat')">
									<v-list-item-title>Clear Chat</v-list-item-title>
								</v-list-item>
								<v-list-item @click="console.log('mute notifications')">
									<v-list-item-title>Mute Notifications</v-list-item-title>
								</v-list-item>
								<v-list-item @click="console.log('block')">
									<v-list-item-title>Block</v-list-item-title>
								</v-list-item>
							</v-list>
						</v-menu>
					</div>
				</v-toolbar>
				<vue-perfect-scrollbar :style="getScrollHeight()" class="chat-area-scroll" :settings="settings">
					<div class="chat-body">
						<template v-for="(chat, index) in selectedUser.chats">
							<div class="chat-block mb-4" :key="index" :class="{'flex-row-reverse': chat.isAdmin}">
								<template v-if="!chat.isAdmin">
									<div class="avatar-wrap mr-4">
										<img :src="selectedUser.avatar" alt="user-profile" class="rounded-circle" width="40" height="40" />
									</div>
									<div class="chat-bubble-wrap">
										<div class="chat-bubble even aqua-bg px-4 d-custom-flex align-items-center">
											<span class="d-inline-block fs-14">{{chat.body}}</span>
										</div>
										<span class="fs-12 grey--text text-left d-block mt-1 fw-normal">{{chat.time}}</span>
									</div>
								</template>
								<template v-else>
									<div class="avatar-wrap ml-4">
										<img src="/static/avatars/user-5.jpg" alt="user-profile" class="rounded-circle" width="40" height="40" />
									</div>
									<div class="chat-bubble-wrap">
										<div class="chat-bubble odd primary px-4 d-custom-flex align-items-center">
											<span class="d-inline-block fs-14 white--text">{{chat.body}}</span>
										</div>
										<span class="fs-12 grey--text text-right d-block mt-1 fw-normal">{{chat.time}}</span>
									</div>
								</template>
							</div>
						</template>
					</div>
				</vue-perfect-scrollbar>
				<div class="chat-footer px-4">
					<div class="d-custom-flex">
						<v-text-field 
							hide-details 
							name="input-1-3" 
							label="Send Message..." 
							single-line 
							:value="newMessage" 
							v-model="newMessage" 
							@keyup.enter="sendMessage"
							class="mr-4"
						></v-text-field>
						<v-btn fab small>
							<v-icon dark>attachment</v-icon>
						</v-btn>
						<v-btn fab class="chat-send-btn ml-4" dark small color="primary" @click="sendMessage">
							<v-icon dark>send</v-icon>
						</v-btn>
					</div>
				</div>
			</template>
			<div class="chat-box-main" v-else>
				<div class="centered">
					<p><i class="zmdi zmdi-comments font-3x primary--text"></i></p>
					<v-btn class="select-user d-none" text color="primary" @click="toggleChatSidebar">
						Select User
					</v-btn>
				</div>
			</div>
		</template>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import SingleChatLoader from "./SingleChatLoader";
import { getCurrentAppLayout } from "Helpers/helpers";

export default {
	computed: {
		...mapGetters(["selectedUser", "loadingChat"])
	},
	data() {
		return {
			settings: {
			maxScrollbarLength: 260
			},
			newMessage: ""
		};
	},
	components: {
		SingleChatLoader
	},
	mounted(){
		this.scrollToEnd();
	},
	updated(){
		if(this.newMessage == ''){
			this.scrollToEnd();
		}
	},
	methods: {
		sendMessage() {
			if (this.newMessage !== "") {
				this.$store.dispatch("sendMessage", this.newMessage);
				this.newMessage = "";
				this.scrollToEnd();
			}
		},
		toggleChatSidebar() {
			this.$store.dispatch("toggleChatSidebar", true);
		},
		getScrollHeight() {
			let layout = getCurrentAppLayout(this.$router);
			switch (layout) {
			case "default":
				return "height: calc(100vh - 200px)";
			case "horizontal":
				return "height: calc(100vh - 250px)";
			case "boxed":
				return "height: calc(100vh - 380px)";
			case "boxed-v2":
				return "height: calc(100vh - 380px)";
			default:
				return "height: calc(100vh - 200px)";
			}
		},
		scrollToEnd() {
			var container = document.querySelector(".chat-area-scroll");
			if(container !== null){
				var scrollHeight = container.scrollHeight;
				container.scrollTop = scrollHeight;
			}	
		}
	}
};
</script>
