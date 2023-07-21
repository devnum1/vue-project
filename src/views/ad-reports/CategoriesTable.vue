<template>
	<div>
		<v-simple-table>
			<thead>
				<tr>
					<th class="text-left">ID</th>
					<th class="text-left">Name</th>
					<th class="text-left">Arabic</th>
					<th class="text-left">Color</th>
					<th class="text-left">
						Reports
						<!--          <v-chip-->
						<!--            class="ml-2"-->
						<!--            color="yellow"-->
						<!--            pill-->
						<!--            small-->
						<!--            title="Not Handled"-->
						<!--        >-->
						<!--          Not Handled-->
						<!--        </v-chip>-->
					</th>
					<th class="text-center"></th>
				</tr>
			</thead>
			<tbody>
				<tr
					class="pointer"
					v-for="category in categories"
					:key="category.id"
					@click="fetchCategoryReports(category)"
				>
					<td>{{ category.id }}</td>
					<td>{{ category.name }}</td>
					<td>{{ category.name_ar }}</td>
					<td>
						<v-chip :color="category.color" pill>&nbsp;&nbsp; </v-chip>
					</td>
					<td>
						<div class="mr-3 d-inline">
							{{ category.reports_total }}
						</div>
						<v-chip
							v-if="category.reports_unhandled > 0"
							class="white--text"
							color="red"
							small
							title="Not Handled"
						>
							{{ category.reports_unhandled }}
						</v-chip>
					</td>
					<td>
						<v-btn
							class="mr-2"
							fab
							x-small
							color="primary"
							@click.stop="openCategoryDialog(category)"
							:disabled="!$can(UPDATE, RESOURCE)"
						>
							<v-icon small>edit</v-icon>
						</v-btn>
						<v-btn
							class="mr-2"
							fab
							x-small
							color="error"
							@click.stop="openDeleteDialog(category)"
							:disabled="!$can(DELETE, RESOURCE)"
						>
							<v-icon small>delete</v-icon>
						</v-btn>
					</td>
				</tr>
			</tbody>
		</v-simple-table>

		<!--  New Button  -->
		<v-btn
			class="mt-70"
			color="primary"
			@click="openCategoryDialog(null)"
			:disabled="!$can(CREATE, RESOURCE)"
		>
			+ New
		</v-btn>

		<!--  Category Dialog  -->
		<v-dialog max-width="600" v-model="categoryDialog">
			<report-category-dialog
				:close="closeCategoryDialog"
				:save-category="saveCategory"
			></report-category-dialog>
		</v-dialog>

		<v-dialog max-width="300px" v-model="deleteDialog">
			<v-card>
				<v-card-title class="text-capitalize text-center"
					>delete category</v-card-title
				>
				<v-card-text>
					Are you sure you want to delete this category?
				</v-card-text>
				<v-card-actions>
					<v-btn text color="red" @click="deleteDialog = false">cancel</v-btn>
					<v-btn text color="primary" @click="deleteCategory()">delete</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>

		<!--  Category Reports Dialog  -->
		<v-dialog
			max-width="700"
			v-model="categoryReportsDialog"
			@click:outside="closeCategoryReportsDialog"
		>
			<category-reports-dialog
				:close="closeCategoryDialog"
				:save-category="saveCategory"
			></category-reports-dialog>
		</v-dialog>
	</div>
</template>

<script>
import ReportCategoryDialog from './ReportCategoryDialog';
import CategoryReportsDialog from './CategoryReportsDialog';
import Permissions from '../../store/modules/admin/permissions';

export default {
	components: { ReportCategoryDialog, CategoryReportsDialog },

	data() {
		return {
			/**
			 * Permissions Constants
			 */
			VIEW: Permissions.actions.view,
			CREATE: Permissions.actions.create,
			UPDATE: Permissions.actions.update,
			DELETE: Permissions.actions.delete,
			RESOURCE: Permissions.resources.adReportCategory,

			categoryDialog: false,
			categoryReportsDialog: false,
			deleteDialog: false,
		};
	},

	methods: {
		openDeleteDialog(category = null) {
			if (category !== null) {
				this.$store.commit('reports/setSelectedCategory', category);
			}
			this.deleteDialog = true;
		},
		openCategoryDialog(category = null) {
			if (category !== null) {
				category.editMode = true;
				this.$store.commit('reports/setSelectedCategory', category);
			}
			this.categoryDialog = true;
		},

		closeCategoryDialog() {
			this.categoryDialog = false;
			this.$store.commit('reports/resetSelectedCategory');
		},
		deleteCategory() {
			this.$store
				.dispatch('reports/deleteCategory')
				.finally(() => {
					this.deleteDialog = false;
				});
		},
		saveCategory() {
			return new Promise((resolve) => {
				this.$store.dispatch('reports/saveCategory').finally(() => {
					resolve();
				});
			});
		},

		fetchCategoryReports(category) {
			this.$store.commit('reports/setSelectedCategory', category);
			this.$store.dispatch('reports/fetchCategoryReports');
			this.categoryReportsDialog = true;
		},

		closeCategoryReportsDialog() {
			this.categoryReportsDialog = false;
			this.$store.commit('reports/resetCategoryReports');
		},
	},

	computed: {
		categories() {
			return this.$store.getters['reports/reportCategories'];
		},
	},
};
</script>

<style scoped>
.pointer {
	cursor: pointer;
}
</style>
