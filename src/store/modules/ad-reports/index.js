/**
 * Reports Module
 */

import { endpoints, JufrahAdminAPI } from '../../../WebServices';
import Vue from 'vue';
import Nprogress from 'nprogress';

const state = {
	selectedReport: {},
	reports: [],
	reportsMeta: {},
	reportsFilterOptions: {
		page: 1,
	},
	reportCategories: [],
	selectedCategory: { color: '' },

	categoryReports: [],
	categoryReportsMeta: {},

	spamSettings: {
		auto_disable: false,
		views_ratios: {
			p_0_to_100: 0,
		},
	},
};

const getters = {
	selectedReport: (state) => {
		return state.selectedReport;
	},

	spamSettings: (state) => {
		return state.spamSettings;
	},

	reports: (state) => {
		return state.reports;
	},

	reportsMeta: (state) => {
		return state.reportsMeta;
	},

	reportsFilterOptions: (state) => {
		return state.reportsFilterOptions;
	},

	reportCategories: (state) => {
		return state.reportCategories;
	},

	selectedCategory: (state) => {
		return state.selectedCategory;
	},

	categoryReports: (state) => {
		return state.categoryReports;
	},

	categoryReportsMeta: (state) => {
		return state.categoryReportsMeta;
	},
};

const actions = {
	fetchReports(context, options) {
		Nprogress.start();

		if (!options) {
			return new Promise((resolve, reject) => {
				JufrahAdminAPI.get(endpoints.reports)
					.then((response) => {
						context.commit('setReports', response.data);
						resolve(response);
					})
					.catch((error) => {
						Vue.notify({
							group: 'loggedIn',
							type: 'error',
							text: error.response.data.message,
						});
						reject(error);
					})
					.finally(() => {
						Nprogress.done();
					});
			});
		} else {
			return new Promise((resolve, reject) => {
				JufrahAdminAPI.get(endpoints.reports, {
					params: {
						page: options.page,
					},
				})
					.then((response) => {
						context.commit('setReports', response.data);
						resolve(response);
					})
					.catch((error) => {
						Vue.notify({
							group: 'loggedIn',
							type: 'error',
							text: error.response.data.message,
						});
						reject(error);
					})
					.finally(() => {
						Nprogress.done();
					});
			});
		}
	},

	fetchReportCategories(context) {
		return new Promise((resolve, reject) => {
			JufrahAdminAPI.get(endpoints.reportCategories)
				.then((response) => {
					context.commit('setReportCategories', response.data);
					resolve(response);
				})
				.catch((error) => {
					Vue.notify({
						group: 'loggedIn',
						type: 'error',
						text: error.response.data.message,
					});
					reject(error);
				})
				.finally(() => {
					Nprogress.done();
				});
		});
	},

	fetchSpamSettings(context) {
		return new Promise((resolve, reject) => {
			JufrahAdminAPI.get(endpoints.spamSettings)
				.then((response) => {
					context.commit('setSpamSettings', response.data);
					resolve(response);
				})
				.catch((error) => {
					Vue.notify({
						group: 'loggedIn',
						type: 'error',
						text: error.response.data.message,
					});
					reject(error);
				})
				.finally(() => {
					Nprogress.done();
				});
		});
	},

	updateSpamSettings(context) {
		const settings = state.spamSettings;

		return new Promise((resolve, reject) => {
			JufrahAdminAPI.put(endpoints.spamSettings, settings)
				.then((response) => {
					Vue.notify({
						group: 'loggedIn',
						type: 'success',
						text: 'Updated successfully',
					});
					context.dispatch('fetchSpamSettings');
					resolve(response);
				})
				.catch((error) => {
					Vue.notify({
						group: 'loggedIn',
						type: 'error',
						text: error.response.data.message,
					});
					reject(error);
				})
				.finally(() => {
					Nprogress.done();
				});
		});
	},

	saveCategory(context) {
		const category = {
			id: state.selectedCategory.id,
			editMode: state.selectedCategory.editMode,
			name: state.selectedCategory.name,
			name_ar: state.selectedCategory.name_ar,
			color: state.selectedCategory.color,
		};
		let url = endpoints.reportCategories;
		url += category.editMode ? '/' + category.id : '';
		if (category.editMode) {
			return new Promise((resolve, reject) => {
				Nprogress.start();
				JufrahAdminAPI.patch(url, category)
					.then((response) => {
						Vue.notify({
							group: 'loggedIn',
							type: 'success',
							text: 'Updated successfully',
						});
						context.dispatch('fetchReportCategories').then(() => {
							resolve(response);
						});
					})
					.catch((error) => {
						console.log(error);
						Vue.notify({
							group: 'loggedIn',
							type: 'error',
							text: error.response.data.message
								? error.response.data.message
								: 'Error Occurred',
						});
						reject(error);
					})
					.finally(() => {
						Nprogress.done();
					});
			});
		}

		return new Promise((resolve, reject) => {
			Nprogress.start();
			JufrahAdminAPI.post(url, category)
				.then((response) => {
					Vue.notify({
						group: 'loggedIn',
						type: 'success',
						text: 'Created successfully',
					});
					context.dispatch('fetchReportCategories').then(() => {
						resolve(response);
					});
				})
				.catch((error) => {
					console.log(error);
					Vue.notify({
						group: 'loggedIn',
						type: 'error',
						text: error.response.data.message
							? error.response.data.message
							: 'Error Occurred',
					});
					reject(error);
				})
				.finally(() => {
					Nprogress.done();
				});
		});
	},
	deleteCategory({ state, commit }) {
		const url = endpoints.reportCategories + '/' + state.selectedCategory.id;
		return new Promise((resolve, reject) => {
			Nprogress.start();
			JufrahAdminAPI.delete(url)
				.then((response) => {
					commit('deleteCat', state.selectedCategory.id);
					Vue.notify({
						group: 'loggedIn',
						type: 'success',
						text: 'Deleted successfully',
					});
					resolve(response);
				})
				.catch((error) => {
					console.log(error);
					Vue.notify({
						group: 'loggedIn',
						type: 'error',
						text: error.response.data.message
							? error.response.data.message
							: 'Error Occurred',
					});
					reject(error);
				})
				.finally(() => {
					Nprogress.done();
				});
		});
	},

	fetchCategoryReports(context, options) {
		const url = endpoints.reportCategories + '/' + state.selectedCategory.id;

		Nprogress.start();

		if (!options) {
			return new Promise((resolve, reject) => {
				JufrahAdminAPI.get(url)
					.then((response) => {
						context.commit('setCategoryReports', response.data);
						resolve(response);
					})
					.catch((error) => {
						Vue.notify({
							group: 'loggedIn',
							type: 'error',
							text: error.response.data.message,
						});
						reject(error);
					})
					.finally(() => {
						Nprogress.done();
					});
			});
		} else {
			return new Promise((resolve, reject) => {
				JufrahAdminAPI.get(url, {
					params: {
						page: options.page,
					},
				})
					.then((response) => {
						context.commit('setCategoryReports', response.data);
						resolve(response);
					})
					.catch((error) => {
						Vue.notify({
							group: 'loggedIn',
							type: 'error',
							text: error.response.data.message,
						});
						reject(error);
					})
					.finally(() => {
						Nprogress.done();
					});
			});
		}
	},

	handleReport(context, report) {
		const url = endpoints.reports + '/' + report.id + '/handle';
		return new Promise((resolve, reject) => {
			JufrahAdminAPI.patch(url)
				.then((response) => {
					Vue.notify({
						group: 'loggedIn',
						type: 'success',
						text: 'Updated successfully',
					});
					resolve(response);
				})
				.catch((error) => {
					Vue.notify({
						group: 'loggedIn',
						type: 'error',
						text: error.response.data.message,
					});
				})
				.finally(() => {
					Nprogress.done();
				});
		});
	},
};

const mutations = {
	updateSelectedReport(state, report) {
		state.selectedReport = report;
	},

	setSpamSettings(state, settings) {
		state.spamSettings = settings;
		console.log(state.spamSettings);
	},

	setReports(state, response) {
		state.reports = response.data;
		state.reportsMeta = response.meta;
	},

	resetReports(state) {
		state.reports = [];
	},

	setSelectedReport(state, report) {
		state.selectedReport = report;
	},

	resetSelectedReport(state) {
		state.selectedReport = {};
	},

	setReportCategories(state, categories) {
		state.reportCategories = categories;
	},

	setSelectedCategory(state, category) {
		state.selectedCategory = category;
	},

	resetSelectedCategory(state) {
		state.selectedCategory = {
			color: '',
		};
	},

	setCategoryReports(state, response) {
		state.categoryReports = response.data;
		state.categoryReportsMeta = response.meta;
	},

	resetCategoryReports(state) {
		state.categoryReports = [];
	},
	deleteCat(state, id) {
		state.reportCategories = state.reportCategories.filter(
			(cat) => cat.id !== id
		);
		state.selectedCategory = { color: '' };
	},
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
};
