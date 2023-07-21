<template>
	<div>
		<page-title-bar></page-title-bar>
		<v-container grid-list-xl pt-0>
			<v-layout row wrap>
				<v-flex xs12 sm12 md12 lg-12>
					<v-simple-table>
						<thead>
							<tr>
								<th class="text-left">ID</th>
								<th class="text-left">Name</th>
								<th class="text-left">Started</th>
								<th class="text-left">Ends</th>
								<th class="text-left">Points</th>
								<th class="text-left">Usage</th>
								<th class="text-center"></th>
							</tr>
						</thead>
						<tbody>
							<tr
								v-for="voucher in vouchers"
								:key="voucher.id"
								:class="{ red: isFinished(voucher.ends_formatted) }"
							>
								<td>{{ voucher.id }}</td>
								<td>{{ voucher.name }}</td>
								<td>{{ voucher.created_at }}</td>
								<td>{{ voucher.ends_formatted }}</td>
								<td>{{ voucher.points }}</td>
								<td>{{ voucher.usage }}</td>
								<td>
									<v-btn
										class="ma-2"
										color="primary"
										fab
										x-small
										:disabled="!$can(UPDATE, RESOURCE)"
										@click="editDialog(voucher)"
									>
										<v-icon>edit</v-icon>
									</v-btn>

									<v-btn
										class="ma-2"
										color="error"
										fab
										x-small
										:disabled="!$can(DELETE, RESOURCE)"
										@click="currentDeleteItem = voucher"
									>
										<v-icon>delete</v-icon>
									</v-btn>
								</td>
							</tr>
						</tbody>
					</v-simple-table>
				</v-flex>
			</v-layout>

			<v-btn
				:disabled="!$can(CREATE, RESOURCE)"
				class="mt-10"
				@click.stop="newDialog"
				color="primary"
			>
				+ New
			</v-btn>
		</v-container>

		<template>
			<div class="text-center">
				<v-container>
					<v-row justify="center">
						<v-col cols="8">
							<v-container class="max-width">
								<v-pagination
									v-model="options.page"
									class="my-4"
									:length="lastPage"
									@input="fetchPage"
								></v-pagination>
							</v-container>
						</v-col>
					</v-row>
				</v-container>
			</div>
		</template>

		<!--  Dialog Model-->
		<v-dialog v-model="dialog" max-width="500px" @click:outside="closeDialog">
			<v-card>
				<v-card-title> New/Edit </v-card-title>
				<v-card-text>
					<v-text-field
						label="name"
						v-model="selectedVoucher.name"
						required
					></v-text-field>
					<v-row justify="center">
						<v-col cols="12" sm="12" md="12">
							<v-menu
								ref="menu"
								v-model="menu"
								:close-on-content-click="false"
								:return-value.sync="selectedVoucher.ends"
								transition="scale-transition"
								offset-y
								min-width="auto"
							>
								<template v-slot:activator="{ on, attrs }">
									<v-text-field
										v-model="selectedVoucher.ends"
										label="Ends"
										prepend-icon="mdi-calendar"
										readonly
										v-bind="attrs"
										v-on="on"
									></v-text-field>
								</template>
								<v-date-picker
									v-model="selectedVoucher.ends"
									no-title
									scrollable
								>
									<v-spacer></v-spacer>
									<v-btn text color="primary" @click="menu = false">
										Cancel
									</v-btn>
									<v-btn
										text
										color="primary"
										@click="$refs.menu.save(selectedVoucher.ends)"
									>
										OK
									</v-btn>
								</v-date-picker>
							</v-menu>
						</v-col>
					</v-row>
					<v-text-field
						label="points"
						v-model="selectedVoucher.points"
						required
					></v-text-field>

					<v-btn
						@click="saveVoucher"
						:disabled="loading"
						color="success"
						class="mr-3 mt-2"
						:loading="loading"
					>
						<div>Save</div>
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
		<v-dialog
			:value="true"
			v-if="currentDeleteItem"
			max-width="320px"
			@click:outside="currentDeleteItem = null"
		>
			<v-card :loading="deleteLoading">
				<v-card-title>
					Are you sure you want to delete this voucher
				</v-card-title>
				<v-card-actions>
					<v-btn
						text
						color="warning"
						@click="currentDeleteItem = null"
						:disabled="deleteLoading"
						>cancel</v-btn
					>
					<v-btn
						text
						color="error"
						:loading="deleteLoading"
						@click="deleteVoucher()"
						>delete</v-btn
					>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
import Permissions from '../../store/modules/admin/permissions';

export default {
	created() {
		this.$store.dispatch('vouchers/fetchVouchers');
	},

	data() {
		return {
			/**
			 * Permissions Constants
			 */
			VIEW: Permissions.actions.view,
			CREATE: Permissions.actions.create,
			UPDATE: Permissions.actions.update,
			DELETE: Permissions.actions.delete,
			RESOURCE: Permissions.resources.notificationMessage,
			deleteLoading: false,
			currentDeleteItem: null,
			dialog: false,
			loading: false,
			date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
				.toISOString()
				.substr(0, 10),
			menu: false,
			newVoucher: false,
		};
	},

	watch: {
		options: {
			handler() {
				this.$store.dispatch('vouchers/fetchVouchers', {
					page: this.options.page,
				});
			},
			deep: true,
		},
	},

	methods: {
		isFinished(date) {
			return new Date(date) < new Date();
		},
		saveVoucher() {
			if (this.newVoucher) {
				this.createVoucher();
			} else {
				this.updateVoucher();
			}
		},

		createVoucher() {
			this.loading = true;
			this.$store
				.dispatch('vouchers/createVoucher')
				.then(() => {
					this.closeDialog();
				})
				.catch((err) => {
					this.loading = false;
				})
				.finally(() => (this.loading = false));
		},

		updateVoucher() {
			this.loading = true;
			this.$store
				.dispatch('vouchers/updateVoucher')
				.then(() => {
					this.closeDialog();
				})
				.finally(() => (this.loading = false));
		},
		deleteVoucher() {
			this.deleteLoading = true;
			this.$store
				.dispatch('vouchers/deleteVoucher', this.currentDeleteItem)
				.then(() => {
					this.currentDeleteItem = null;
				})
				.finally(() => (this.deleteLoading = false));
		},

		editDialog(voucher) {
			this.$store.commit('vouchers/updateSelectedVoucher', voucher);
			this.dialog = true;
		},

		newDialog() {
			this.$store.commit('vouchers/resetSelectedVoucher');
			this.newVoucher = true;
			this.dialog = true;
		},

		closeDialog() {
			this.dialog = false;
			this.newVoucher = false;
		},

		fetchPage(page) {
			this.options.page = page;
		},
	},

	computed: {
		vouchers() {
			return this.$store.getters['vouchers/vouchers'];
		},

		selectedVoucher() {
			return this.$store.getters['vouchers/selectedVoucher'];
		},

		options() {
			return this.$store.getters['vouchers/filterOptions'];
		},

		lastPage() {
			return this.$store.getters['vouchers/meta'].last_page;
		},
	},
};
</script>
