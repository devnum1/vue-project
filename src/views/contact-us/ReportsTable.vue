<template>
	<div>
		<!--  Loading Bar  -->
		<v-card :loading="loading" height="2px" flat></v-card>

		<!-- Actions -->
		<div class="d-flex mb-5 justify-center align-items-center">
			<v-select
				:items="types"
				:item-value="'id'"
				:item-text="'type'"
				label="Type"
				class="mr-md-5"
				hide-details
				return-object
				v-model="type"
				@change="filter"
				clearable
				outlined
				dense
			></v-select>
			<v-menu offset-y>
				<template v-slot:activator="{ on, attrs }">
					<v-btn icon v-bind="attrs" v-on="on">
						<v-icon>mdi-menu-down-outline</v-icon>
					</v-btn>
				</template>
				<v-list>
					<v-list-item link @click="makeAction('deleteAllMessage')">
						<v-list-item-icon><v-icon>delete</v-icon></v-list-item-icon>
						<v-list-item-title>Delete all selected</v-list-item-title>
					</v-list-item>
					<v-list-item @click="makeAction('seenAllMessage')">
						<v-list-item-icon><v-icon>mdi-check-all</v-icon></v-list-item-icon>
						<v-list-item-title>Mark as read</v-list-item-title>
					</v-list-item>
				</v-list>
			</v-menu>
		</div>
		<v-data-table
			:headers="headers"
			:items="messages"
			show-select
			v-model="selected"
			hide-default-footer
			:items-per-page="25"
		>
			<template #[`item.country`]="{ item }">
				<img
					class="img-responsive mr-3"
					:src="`/static/flag-icons/${item.country}.png`"
				/>
			</template>
			<template #[`item.type_id`]="{ item }">
				{{ getType(item.type_id) }}
			</template>
			<template #[`item.actions`]="{ item }">
				<v-btn
					:disabled="loading || item.seen || !$can(UPDATE, RESOURCE)"
					:loading="loading"
					color="teal accent-4"
					fab
					x-small
					title="Mark as seen"
					@click="seen(item)"
				>
					<p>
						<i class="zmdi zmdi-check-all font-lg mt-4 white--text"></i>
					</p>
				</v-btn>

				<v-btn
					class="ma-2"
					color="info"
					fab
					x-small
					:disabled="!$can(UPDATE, RESOURCE)"
					@click="replyDialog(item)"
					title="Reply"
				>
					<v-icon>reply</v-icon>
				</v-btn>

				<v-btn fab dark x-small color="error" @click="confirmDeletion(item)">
					<v-icon dark small>delete</v-icon>
				</v-btn>
			</template>
		</v-data-table>

		<!-- Reply Dialog Model -->
		<v-dialog v-model="dialog" max-width="500px" @click:outside="closeDialog">
			<v-card>
				<v-card-title> Message </v-card-title>
				<v-card-text>
					<v-chip>Date:</v-chip>
					{{ selectedMessage.created_at }}
				</v-card-text>
				<v-card-text>
					<v-chip>Subject:</v-chip>
					{{ selectedMessage.subject }}
				</v-card-text>
				<v-card-text>
					<v-chip>Type:</v-chip>
					{{ getType(selectedMessage.type_id) }}
				</v-card-text>
				<v-card-text>
					<v-chip>Name:</v-chip>
					{{ selectedMessage.name }}
				</v-card-text>
				<v-card-text>
					<v-chip>Email:</v-chip>
					{{ selectedMessage.email }}
				</v-card-text>
				<v-card-text>
					<v-chip>Mobile:</v-chip>
					{{ selectedMessage.mobile }}
				</v-card-text>
				<v-card-text>
					<v-chip>Body:</v-chip>
					{{ selectedMessage.message }}
				</v-card-text>

				<v-card-title> Reply </v-card-title>
				<v-card-text>
					<v-text-field
						label="Title"
						required
						v-model="reply.title"
					></v-text-field>
					<v-textarea class="pt-2 pr-3" label="Body" v-model="reply.body">
					</v-textarea>
					<v-btn
						@click="replyMessage"
						:disabled="loading"
						color="success"
						class="mr-3 mt-2"
						:loading="loading"
					>
						<div>Send</div>
					</v-btn>

					<v-btn
						class="float-right mt-2"
						color="warning"
						@click.stop="closeDialog"
						>Cancel</v-btn
					>
				</v-card-text>
			</v-card>
		</v-dialog>

		<!-- Delete Dialog Model -->
		<v-dialog
			v-model="confirmDialog"
			max-width="500px"
			@click:outside="closeConfirmDialog"
		>
			<v-card>
				<v-card-title> Are you sure you want to delete this? </v-card-title>
				<v-card-text>
					<v-btn
						@click="deleteMessage"
						:disabled="loading"
						color="error"
						class="mr-3 mt-2"
						:loading="loading"
					>
						<div>Delete</div>
					</v-btn>

					<v-btn
						class="float-right mt-2"
						color="warning"
						@click.stop="closeConfirmDialog"
						>Cancel</v-btn
					>
				</v-card-text>
			</v-card>
		</v-dialog>

		<template>
			<div class="text-center">
				<v-container>
					<v-row justify="center">
						<v-col cols="8">
							<v-container class="max-width">
								<v-pagination
									v-model="page"
									class="my-4"
									:length="lastPage"
									@input="changePage"
								></v-pagination>
							</v-container>
						</v-col>
					</v-row>
				</v-container>
			</div>
		</template>
	</div>
</template>

<script>
import Permissions from '../../store/modules/admin/permissions';
import { textTruncate } from 'Helpers/helpers';

export default {
	data() {
		return {
			/**
			 * Permissions Constants
			 */
			VIEW: Permissions.actions.view,
			CREATE: Permissions.actions.create,
			UPDATE: Permissions.actions.update,
			DELETE: Permissions.actions.delete,
			RESOURCE: Permissions.resources.contactUsReport,
			selected: [],
			dialog: false,
			confirmDialog: false,
			loading: false,
			reply: {
				title: 'Re: ',
				body: '',
			},
			headers: [
				{
					text: 'ID',
					align: 'start',
					sortable: false,
					value: 'id',
				},
				{
					text: 'Country',
					align: 'start',
					sortable: false,
					value: 'country',
				},
				{
					text: 'Type',
					align: 'start',
					sortable: false,
					value: 'type_id',
				},
				{
					text: 'Name',
					align: 'start',
					sortable: false,
					value: 'name',
				},
				{
					text: 'Mobile',
					align: 'start',
					sortable: false,
					value: 'mobile',
				},
				{
					text: 'Subject',
					align: 'start',
					sortable: false,
					value: 'subject',
				},
				{
					text: 'Message',
					align: 'start',
					sortable: false,
					value: 'message',
				},
				{
					text: 'Date',
					align: 'start',
					sortable: false,
					value: 'created_at',
				},
				{
					text: 'Actions',
					align: 'start',
					sortable: false,
					value: 'actions',
				},
			],
		};
	},

	methods: {
		getType(message_type_id) {
			for (let i = 0; i < this.types.length; i++) {
				if (this.types[i].id === message_type_id) return this.types[i].type;
			}
		},

		changePage(page) {
			this.page = page;
			this.loading = true;
			this.$store.commit('contactUs/resetMessages');
			this.$store.dispatch('contactUs/fetchMessages').finally(() => {
				this.loading = false;
			});
		},

		replyMessage() {
			this.loading = true;
			this.$store.dispatch('contactUs/replyMessage', this.reply).finally(() => {
				this.loading = false;
				this.$store.commit('contactUs/resetSelectedMessage');
				this.closeDialog();
			});
		},

		replyDialog(message) {
			this.$store.commit('contactUs/setSelectedMessage', message);
			this.reply.title = `Re: ${message.subject}`;
			this.dialog = true;
		},

		closeDialog() {
			this.dialog = false;
		},

		filter() {
			this.loading = true;
			this.page = 1;
			this.$store.commit('contactUs/resetMessages');
			this.$store.dispatch('contactUs/fetchMessages').finally(() => {
				this.loading = false;
			});
		},

		confirmDeletion(message) {
			this.$store.commit('contactUs/setSelectedMessage', message);
			this.confirmDialog = true;
		},

		closeConfirmDialog() {
			this.$store.commit('contactUs/resetSelectedMessage');
			this.confirmDialog = false;
		},

		deleteMessage() {
			this.loading = true;
			this.$store.dispatch('contactUs/deleteMessage').finally(() => {
				this.loading = false;
				this.closeConfirmDialog();
				this.$store.dispatch('adminNotifications/fetchNotifications');
			});
		},
		makeAction(action) {
			if (this.selected.length > 0) {
				this.loading = true;
				const ids = this.selected.map((elm) => elm.id);
				this.$store.dispatch(`contactUs/${action}`, { ids }).finally(() => {
					this.loading = false;
					this.$store.dispatch('adminNotifications/fetchNotifications');
				});
			}
		},
		textTruncate(text) {
			return textTruncate(text, 18);
		},

		seen(message) {
			this.$store.commit('contactUs/setSelectedMessage', message);
			this.loading = true;
			this.$store.dispatch('contactUs/seenMessage').finally(() => {
				this.loading = false;
				this.$store.commit('contactUs/resetSelectedMessage');
				this.$store.dispatch('adminNotifications/fetchNotifications');
			});
		},
	},

	computed: {
		messages() {
			return this.$store.getters['contactUs/messages'];
		},

		selectedMessage() {
			return this.$store.getters['contactUs/selectedMessage'];
		},

		types() {
			return this.$store.getters['contactUs/types'];
		},

		page: {
			get() {
				return this.$store.getters['contactUs/messagesFilter'].page;
			},
			set(page) {
				this.$store.commit('contactUs/changePage', page);
			},
		},

		lastPage() {
			return this.$store.getters['contactUs/messagesMeta'].last_page;
		},

		type: {
			get() {
				return this.$store.getters['contactUs/messagesFilter'].type;
			},
			set(type) {
				this.$store.commit('contactUs/changeFilter', type);
			},
		},
	},
};
</script>
