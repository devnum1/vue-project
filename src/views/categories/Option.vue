<template>
	<div class="profile-top border-bottom-light-1 mt-4">
		<div class="profile-head app-card mb-30">
			<div class="user-list-content">
				<div class="text-center">
					<v-card>
						<v-card-text>
							<v-container fluid grid-list-xl pt-0>
								<v-layout row wrap>
									<v-flex xs12 md12 lg12 sm12 class="col-height-auto">
										<div>
											<v-text-field
												v-model="option.name"
												label="Name"
												filled
												@change="changed = true"
											>
											</v-text-field>
											<v-text-field
												v-model="option.name_ar"
												label="Name Arabic"
												filled
												@change="changed = true"
											>
											</v-text-field>
										</div>
										<v-switch
											v-model="option.required"
											:label="`Required: ${option.required ? 'Yes' : 'No'}`"
											class="ma-auto"
											@change="changed = true"
										></v-switch>
									</v-flex>
								</v-layout>
							</v-container>
						</v-card-text>
						<v-card-actions>
							<v-btn
								v-if="this.$store.getters.selectedOptionIndex !== null"
								color="primary"
								:disabled="!changed || loading"
								@click.stop="updateOption"
								:loading="loading"
								>Save
							</v-btn>
						</v-card-actions>
					</v-card>
				</div>
			</div>
		</div>

		<!-- Option Value Name Dialog -->
		<v-dialog
			v-model="optionValueDialog"
			max-width="700px"
			@click:outside="selectedOptionValue = {}"
		>
			<v-card>
				<v-card-title> Add|Edit Option Value </v-card-title>
				<v-card-text>
					<v-container fluid grid-list-xl pt-0>
						<v-layout row wrap>
							<v-flex xs12 md12 lg12 sm12 class="col-height-auto">
								<div>
									<v-text-field
										v-model="selectedOptionValue.value"
										label="Name"
										filled
									>
									</v-text-field>
									<v-text-field
										v-model="selectedOptionValue.value_ar"
										label="Name Arabic"
										filled
									>
									</v-text-field>
								</div>
							</v-flex>
						</v-layout>
					</v-container>
				</v-card-text>
				<v-card-actions>
					<v-btn
						v-if="this.$store.getters.selectedOptionIndex !== null"
						color="primary"
						@click.stop="optionValueHandler"
						:loading="loading"
						:disabled="loading"
						>Save & Close
					</v-btn>
					<v-btn
						v-else
						color="primary"
						@click.stop="saveOptionValueToLocal"
						:loading="loading"
						:disabled="loading"
						>Add
					</v-btn>
					<v-btn color="warning" @click.stop="closeOptionValueDialog"
						>Close</v-btn
					>
				</v-card-actions>
			</v-card>
		</v-dialog>
		<v-alert class="mx-3" type="info" color="primary"
			>You can move any row up and down to sort options values</v-alert
		>
		<app-card
			:heading="$t('message.options')"
			customClasses="mb-30"
			colClasses="xl12 lg12 md12 sm12 xs12"
		>
			<v-simple-table class="border-top-1 border-bottom-light-1">
				<thead>
					<tr>
						<td class="fw-bold">Name</td>
						<td class="fw-bold">Name Arabic</td>
						<td></td>
					</tr>
				</thead>
				<draggable v-model="values" tag="tbody">
					<tr
						v-for="optionValue in values"
						:key="optionValue.id"
						class="border-top-1"
					>
						<td>{{ optionValue.value }}</td>
						<td>{{ optionValue.value_ar }}</td>
						<td>
							<v-btn
								v-if="!isNew"
								fab
								x-small
								color="primary"
								@click.stop="openOptionValueDialog(optionValue)"
							>
								<v-icon small>edit</v-icon>
							</v-btn>
							<v-btn
								fab
								x-small
								color="error"
								@click.stop="openConfirmationDialog(optionValue)"
								class="mx-2"
							>
								<v-icon small>delete</v-icon>
							</v-btn>
						</td>
					</tr>
				</draggable>
			</v-simple-table>

			<!--   Add to existing option   -->
			<v-btn
				v-if="this.$store.getters.selectedOptionIndex !== null"
				class="mt-6"
				fab
				x-small
				color="primary"
				@click.stop="openOptionValueDialog(selectedOptionValue, true)"
			>
				<v-icon small>add</v-icon>
			</v-btn>

			<!--   Add to existing option   -->
			<v-btn
				v-else
				class="mt-6"
				fab
				x-small
				color="primary"
				@click.stop="openOptionValueDialog(selectedOptionValue, true)"
			>
				<v-icon small>add</v-icon>
			</v-btn>
		</app-card>
		<v-card-actions>
			<v-btn
				v-if="this.$store.getters.selectedOptionIndex === null"
				color="primary"
				:disabled="!changed || loading"
				@click.stop="createOption"
				:loading="loading"
				>Create & Close
			</v-btn>
			<v-btn color="warning" @click.stop="close">Close</v-btn>
		</v-card-actions>
		<!-- Delete Confirmation Dialog -->
		<v-dialog
			v-model="confirmationDialog"
			max-width="400px"
			@click:outside="closeConfirmationDialog"
		>
			<v-card>
				<v-card-title>
					Are you sure you want to delete this option value?
				</v-card-title>
				<v-card-actions>
					<v-btn
						color="error"
						@click.stop="deleteOptionValue"
						:loading="loading"
						:disabled="loading"
					>
						Delete
					</v-btn>
					<v-btn color="warning" @click.stop="closeConfirmationDialog"
						>Cancel</v-btn
					>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
import draggable from 'vuedraggable';

export default {
	props: ['isNew', 'close'],
	components: { draggable },
	data() {
		return {
			sortOption: [],
			loading: false,
			loader: null,
			newValue: false,
			optionValueDialog: false,
			confirmationDialog: false,
			changed: false,
			selectedOptionValue: {
				value: '',
				value_ar: '',
			},
		};
	},

	computed: {
		option() {
			return this.$store.getters.selectedOption;
		},

		values: {
			get() {
				return this.$store.getters.selectedOptionValues;
			},
			set(value) {
				this.$store.commit('setSelectedOptionValues', value);
			},
		},
	},

	watch: {
		values(val) {
			this.$store.dispatch('updateOptionValueOrder', {
				ids: val.map((elm) => elm.id),
			});
		},
	},

	methods: {
		/*----------------------------------------------------------------------------
    / Option Value Remote Operations
    /-----------------------------------------------------------------------------
    */
		createOptionValue() {
			this.loading = true;
			this.$store
				.dispatch('createOptionValue', this.selectedOptionValue)
				.finally(() => {
					this.closeOptionValueDialog();
				});
		},

		updateOptionValue() {
			this.loading = true;
			this.$store
				.dispatch('updateOptionValue', this.selectedOptionValue)
				.finally(() => {
					this.closeOptionValueDialog();
				});
		},

		deleteOptionValue() {
			this.loading = true;
			if (this.isNew) {
				this.deleteOptionLocally();
				this.closeOptionValueDialog();
			} else {
				this.$store
					.dispatch('deleteOptionValue', this.selectedOptionValue)
					.finally(() => {
						this.closeOptionValueDialog();
					});
			}
		},

		deleteOptionLocally() {
			const itemToDelete = this.selectedOptionValue;
			this.values = this.values.filter(function (item, index, arr) {
				return (
					item.value !== itemToDelete.value &&
					item.value_ar !== itemToDelete.value_ar
				);
			});
		},

		/*
    ----------------------------------------------------------------------------------
    */

		optionValueHandler() {
			if (this.newValue) this.createOptionValue();
			else this.updateOptionValue();
		},

		openOptionValueDialog(value, isNew = false) {
			this.newValue = isNew;
			this.optionValueDialog = true;
			this.selectedOptionValue = value;
		},

		closeOptionValueDialog() {
			this.optionValueDialog = false;
			this.newValue = false;
			this.loading = false;
			this.selectedOptionValue = {
				value: '',
				value_ar: '',
			};
			this.confirmationDialog = false;
		},

		openConfirmationDialog(value) {
			this.confirmationDialog = true;
			this.selectedOptionValue = value;
		},

		closeConfirmationDialog() {
			this.confirmationDialog = false;
			this.selectedOptionValue = {};
		},

		saveOptionValueToLocal() {
			this.$store.commit('addOptionValue', this.selectedOptionValue);
			this.optionValueDialog = false;
			this.loading = false;
			this.selectedOptionValue = {
				value: '',
				value_ar: '',
			};
		},

		/*------------------------------------
    / Category Option
    /-------------------------------------
    */
		updateOption() {
			this.loading = true;
			this.$store.dispatch('updateCategoryOption', this.option).finally(() => {
				this.loading = false;
			});
		},

		createOption() {
			if (this.isOptionNameValid() && this.isOptionValuesValid()) {
				this.loading = true;
				this.$store
					.dispatch('createCategoryOption', this.option)
					.finally(() => {
						this.loading = false;
						this.close();
					});
			} else {
				this.$notify({
					group: 'loggedIn',
					type: 'error',
					text: 'Name in English and Arabic are required And add at least one option value',
				});
				this.loading = false;
			}
		},

		isOptionNameValid() {
			return !(this.option.name === '' || this.option.name_ar === '');
		},

		isOptionValuesValid() {
			return !(this.values.length === 0);
		},
	},
};
</script>
