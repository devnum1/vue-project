<template>
		<div>
			<v-toolbar color="primary" dark>
				<v-toolbar-title class="text-center">{{ $t('message.chat') }}</v-toolbar-title>
				<v-spacer></v-spacer>
				<v-btn icon>
					<v-icon>search</v-icon>
				</v-btn>
			</v-toolbar>
			<v-tabs>
				<v-tab>{{ $t('message.recentChat') }}</v-tab>
				<v-tab>{{ $t('message.previousChats') }}</v-tab>
				<v-tab-item>
					<v-list>
						<v-list-item v-for="item in recentChat" v-bind:key="item.id" @click="">
							<v-list-item-avatar>
								<img v-bind:src="item.avatar"/>
							</v-list-item-avatar>
							<v-list-item-content>
								<v-list-item-title v-html="item.userName"></v-list-item-title>
							</v-list-item-content>
							<v-list-item-action>
								<v-icon v-bind:color="item.active ? 'primary' : 'grey'">chat_bubble</v-icon>
							</v-list-item-action>
						</v-list-item>
					</v-list>
				</v-tab-item>
				<v-tab-item>
					<v-list>
						<v-list-item v-for="item in previousChat" v-bind:key="item.id" @click="">
							<v-list-item-avatar>
								<img v-bind:src="item.avatar"/>
							</v-list-item-avatar>
							<v-list-item-content>
								<v-list-item-title v-html="item.userName"></v-list-item-title>
							</v-list-item-content>
						</v-list-item>
					</v-list>
				</v-tab-item>
			</v-tabs>
		</div>
	</template>
	
	<script>
	import { recentChat, previousChat } from "./data";
	
	export default {
	  data() {
		 return {
			recentChat,
			previousChat
		 };
	  }
	};
	</script>