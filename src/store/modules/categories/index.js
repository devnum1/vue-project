/**
 * Categories Module
 */

import { endpoints, JufrahAdminAPI } from '../../../WebServices';
import Vue from 'vue';
import Nprogress from 'nprogress';

const state = {
	categories: [],
	selectedCategory: {
		category: {},
	},
	selectedOption: {
		name: '',
		name_ar: '',
		required: false,
	},
	selectedOptionValues: [],
	selectedOptionIndex: null,
	paymentOptions: [],
	categoriesToSort: [],
};

const getters = {
	categories: (state) => {
		return state.categories;
	},

	selectedCategory: (state) => {
		return state.selectedCategory;
	},

	selectedOption: (state) => {
		return state.selectedOption;
	},

	selectedOptionIndex: (state) => {
		return state.selectedOptionIndex;
	},

	selectedOptionValues: (state) => {
		return state.selectedOptionValues;
	},

	categoryPaymentOptions: (state) => {
		return state.paymentOptions;
	},

	categoriesToSort: (state) => {
		return state.categoriesToSort;
	},
};

const actions = {
	getCategoriesTree(context) {
		Nprogress.start();

		JufrahAdminAPI.get(endpoints.categories)
			.then((response) => {
				context.commit('setCategories', response.data);
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				Nprogress.done();
			});
	},

	fetchSelectedCategory(context, category) {
		if (!category) return;

		return new Promise((resolve, reject) => {
			Nprogress.start();
			JufrahAdminAPI.get(endpoints.categories + '/' + category.id)
				.then((response) => {
					console.log(response.data);
					context.commit('updateSelectedCategory', response.data);
					// console.log(state.selectedCategory, state.selectedOption);
					resolve(response);
				})
				.catch((error) => {
					console.log(error);
					reject(error);
				})
				.finally(() => {
					Nprogress.done();
				});
		});
	},

	createOptionValue(context, value) {
		Nprogress.start();

		const url =
			endpoints.createOptionValue + state.selectedOption.id + '/values';
		const optionValue = {
			values: [value],
		};

		return new Promise((resolve, reject) => {
			JufrahAdminAPI.post(url, optionValue)
				.then((response) => {
					const data = response.data.data;
					context
						.dispatch('fetchSelectedCategory', state.selectedCategory.category)
						.then(() => {
							Vue.set(
								state,
								'selectedOption',
								state.selectedCategory.options[state.selectedOptionIndex]
							);
							Vue.set(
								state,
								'selectedOptionValues',
								state.selectedCategory.options[state.selectedOptionIndex].values
							);
						});

					Vue.notify({
						group: 'loggedIn',
						type: 'success',
						text: 'Created successfully',
					});

					resolve(response);
				})
				.catch((error) => {
					console.log(error.response.data);

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
	updateOptionValueOrder({ state }, payload) {
		Nprogress.start();
		console.log(payload);
		const url =
			endpoints.createOptionValue + state.selectedOption.id + '/sortValues';
		return new Promise((resolve, reject) => {
			JufrahAdminAPI.post(url, payload)
				.then((response) => {
					resolve(response);
				})
				.catch((error) => {
					reject(error);
				})
				.finally(() => {
					Nprogress.done();
				});
		});
	},

	updateOptionValue(context, value) {
		Nprogress.start();

		const url = endpoints.updateOptionValue + value.id;

		return new Promise((resolve, reject) => {
			JufrahAdminAPI.patch(url, value)
				.then((response) => {
					// TODO: update selected option
					const data = response.data.data;
					context.dispatch(
						'fetchSelectedCategory',
						state.selectedCategory.category
					);

					Vue.notify({
						group: 'loggedIn',
						type: 'success',
						text: 'Update successfully',
					});

					resolve(response);
				})
				.catch((error) => {
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

	deleteOptionValue(context, optionValue) {
		Nprogress.start();

		const url = endpoints.deleteOptionValue + optionValue.id;

		return new Promise((resolve, reject) => {
			JufrahAdminAPI.delete(url)
				.then((response) => {
					// TODO: update selected option
					const data = response.data.data;
					context
						.dispatch('fetchSelectedCategory', state.selectedCategory.category)
						.then(() => {
							Vue.set(
								state,
								'selectedOption',
								state.selectedCategory.options[state.selectedOptionIndex]
							);
							Vue.set(
								state,
								'selectedOptionValues',
								state.selectedCategory.options[state.selectedOptionIndex].values
							);
						});

					Vue.notify({
						group: 'loggedIn',
						type: 'success',
						text: 'Deleted successfully',
					});

					resolve(response);
				})
				.catch((error) => {
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

	updateCategoryOption(context, categoryOption) {
		Nprogress.start();

		const url = endpoints.updateCategoryOption + categoryOption.id;

		return new Promise((resolve, reject) => {
			JufrahAdminAPI.patch(url, categoryOption)
				.then((response) => {
					// TODO: update selected option
					const data = response.data.data;
					context.dispatch(
						'fetchSelectedCategory',
						state.selectedCategory.category
					);

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

	createCategoryOption(context, categoryOption) {
		Nprogress.start();

		const url =
			endpoints.createCategoryOption +
			state.selectedCategory.category.id +
			'/options';
		categoryOption.values = state.selectedOptionValues;
		const options = {
			options: [categoryOption],
		};

		return new Promise((resolve, reject) => {
			JufrahAdminAPI.post(url, options)
				.then((response) => {
					// TODO: update selected option
					const data = response.data.data;
					context.dispatch(
						'fetchSelectedCategory',
						state.selectedCategory.category
					);

					Vue.notify({
						group: 'loggedIn',
						type: 'success',
						text: 'Created successfully',
					});
					resolve(response);
				})
				.catch((error) => {
					console.log(error.response.data);
					Vue.notify({
						group: 'loggedIn',
						type: 'error',
						text: error.response.data.error
							? error.response.data.error
							: 'Error Occurred',
					});
					reject(error);
				})
				.finally(() => {
					Nprogress.done();
				});
		});
	},

	deleteOption(context, categoryOption) {
		Nprogress.start();

		const url = endpoints.deleteCategoryOption + categoryOption.id;

		return new Promise((resolve, reject) => {
			JufrahAdminAPI.delete(url)
				.then((response) => {
					// TODO: update selected option
					const data = response.data.data;
					context.dispatch(
						'fetchSelectedCategory',
						state.selectedCategory.category
					);

					Vue.notify({
						group: 'loggedIn',
						type: 'success',
						text: 'Deleted successfully',
					});

					resolve(response);
				})
				.catch((error) => {
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

	updateCategory(context, category) {
		Nprogress.start();

		const url = endpoints.updateCategory + state.selectedCategory.category.id;

		return new Promise((resolve, reject) => {
			JufrahAdminAPI.post(url, category)
				.then((response) => {
					// TODO: update selected option
					const data = response.data.data;
					context.dispatch('getCategoriesTree');
					context.dispatch(
						'fetchSelectedCategory',
						state.selectedCategory.category
					);

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

	createCategory(context, category) {
		Nprogress.start();

		const url = endpoints.createCategory;

		return new Promise((resolve, reject) => {
			JufrahAdminAPI.post(url, category)
				.then((response) => {
					const data = response.data.data;
					context.dispatch('getCategoriesTree');

					Vue.notify({
						group: 'loggedIn',
						type: 'success',
						text: 'Created successfully',
					});

					resolve(response);
				})
				.catch((error) => {
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

	updateCategoryPayment(context, option) {
		Nprogress.start();

		const url =
			endpoints.updateCategoryPayment +
			state.selectedCategory.category.id +
			'/payment';

		return new Promise((resolve, reject) => {
			JufrahAdminAPI.patch(url, option)
				.then((response) => {
					// TODO: update selected option
					const data = response.data.data;
					context.dispatch(
						'fetchSelectedCategory',
						state.selectedCategory.category
					);
					// context.dispatch('fetchSelectedCategory', state.selectedCategory.category);

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

	deleteCategory(context) {
		Nprogress.start();

		const url = endpoints.updateCategory + state.selectedCategory.category.id;

		return new Promise((resolve, reject) => {
			JufrahAdminAPI.delete(url)
				.then((response) => {
					// TODO: update selected option
					const data = response.data.data;
					context.dispatch('getCategoriesTree');

					Vue.notify({
						group: 'loggedIn',
						type: 'success',
						text: 'Deleted successfully',
					});

					resolve(response);
				})
				.catch((error) => {
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

	cloneCategories(context, countries) {
		Nprogress.start();

		const url = endpoints.categories + '/clone';

		return new Promise((resolve, reject) => {
			JufrahAdminAPI.post(url, { countries: countries })
				.then((response) => {
					// TODO: update selected option
					const data = response.data.data;
					context.dispatch('getCategoriesTree');

					Vue.notify({
						group: 'loggedIn',
						type: 'success',
						text: 'Cloned successfully',
					});

					resolve(response);
				})
				.catch((error) => {
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

	sortCategories(context, categories) {
		Nprogress.start();

		const url = endpoints.categories + '/sort';

		const newCategories = [];
		for (let i = 0; i < categories.length; i++) {
			newCategories.push({
				id: categories[i].id,
				order: i,
			});
		}

		return new Promise((resolve, reject) => {
			JufrahAdminAPI.put(url, { categories: newCategories })
				.then((response) => {
					// TODO: update selected option
					const data = response.data.data;
					context.dispatch('getCategoriesTree');

					Vue.notify({
						group: 'loggedIn',
						type: 'success',
						text: 'Saved successfully',
					});

					resolve(response);
				})
				.catch((error) => {
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

	duplicateCategory(context, payload) {
		Nprogress.start();

		const url = endpoints.categories + '/duplicate/' + payload.id;

		JufrahAdminAPI.post(url)
			.then((response) => {
				// TODO: update selected option
				const data = response.data.data;
				context.dispatch('getCategoriesTree');

				Vue.notify({
					group: 'loggedIn',
					type: 'success',
					text: 'Saved successfully',
				});

				resolve(response);
			})
			.catch((error) => {
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
	},
};

const mutations = {
	setCategories(state, tree) {
		state.categories = tree;
	},

	updateSelectedCategory(state, category) {
		state.selectedCategory = category;
		state.paymentOptions = category.payment_options;
	},

	setSelectedOption(state, option) {
		state.selectedOption = option;
		console.log(state.selectedOption);
		if (option.hasOwnProperty('values'))
			state.selectedOptionValues = option.values;
		else state.selectedOptionValues = [];
	},

	setSelectedOptionIndex(state, index) {
		state.selectedOptionIndex = index;
		console.log(state.selectedOptionIndex);
	},

	addOptionValue(state, value) {
		state.selectedOptionValues.push(value);
	},

	setSelectedOptionValues(state, value) {
		state.selectedOptionValues = value;
	},

	setCategoriesToSort(state, categories) {
		state.categoriesToSort = categories;
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
