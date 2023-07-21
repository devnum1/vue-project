/**
 * Free Vouchers Module
 */

import { endpoints, JufrahAdminAPI } from '../../../WebServices';
import Vue from 'vue';
import Nprogress from 'nprogress';

const state = {
	selectedVoucher: {},
	vouchers: [
		{
			id: 1,
			name: '#FreeVoucher',
			started: '2016-06-15',
			ends: '2016-06-22',
			points: 10,
			usage: 105,
		},
		{
			id: 2,
			name: '#DummyText',
			started: '2016-06-15',
			ends: '2016-06-22',
			points: 5,
			usage: 2,
		},
		{
			id: 3,
			name: 'FreeVoucher',
			started: '2016-06-15',
			ends: '2016-06-22',
			points: 22,
			usage: 98,
		},
	],

	voucher: {
		name: '',
		started: '',
		ends: '',
		points: '',
	},

	meta: {
		last_page: 5,
	},

	filterOptions: {
		page: 1,
	},

	errors: [],
};

const getters = {
	selectedVoucher: (state) => {
		return state.selectedVoucher;
	},

	vouchers: (state) => {
		return state.vouchers;
	},

	voucher: (state) => {
		return state.voucher;
	},

	meta: (state) => {
		return state.meta;
	},

	filterOptions: (state) => {
		return state.filterOptions;
	},
};

const actions = {
	fetchVouchers(context, page) {
		Nprogress.start();

		return new Promise((resolve, reject) => {
			JufrahAdminAPI.get(endpoints.freeVouchers, {
				params: page,
			})
				.then((response) => {
					context.commit('setVouchers', response.data);
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

	createVoucher(context) {
		Nprogress.start();

		const url = endpoints.freeVouchers;
		const voucher = state.selectedVoucher;

		return new Promise((resolve, reject) => {
			JufrahAdminAPI.post(url, voucher)
				.then((response) => {
					context.dispatch('fetchVouchers');
					const data = response.data.data;

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

	updateVoucher(context) {
		Nprogress.start();

		const voucher = state.selectedVoucher;
		const url = endpoints.freeVouchers + '/' + voucher.id;

		return new Promise((resolve, reject) => {
			JufrahAdminAPI.patch(url, voucher)
				.then((response) => {
					context.dispatch('fetchVouchers');
					const data = response.data.data;

					Vue.notify({
						group: 'loggedIn',
						type: 'success',
						text: 'Updated Successfully',
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

	deleteVoucher(context, payload) {
		Nprogress.start();
		const url = endpoints.freeVouchers + '/' + payload.id;
		return new Promise((resolve, reject) => {
			JufrahAdminAPI.delete(url)
				.then((response) => {
					context.dispatch('fetchVouchers');
					Vue.notify({
						group: 'loggedIn',
						type: 'success',
						text: 'Deleted Successfully',
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
	deleteAll(context, payload) {
		Nprogress.start();
		const url = endpoints.freeVouchers + '/deleteAll';
		return new Promise((resolve, reject) => {
			JufrahAdminAPI.post(url, payload)
				.then((response) => {
					context.dispatch('fetchVouchers');
					Vue.notify({
						group: 'loggedIn',
						type: 'success',
						text: 'Deleted Successfully',
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
};

const mutations = {
	updateSelectedVoucher(state, voucher) {
		state.selectedVoucher = voucher;
	},

	setVouchers(state, response) {
		state.vouchers = response.data;
		state.meta = response.meta;
	},

	resetVouchers(state) {
		state.vouchers = [];
	},

	resetSelectedVoucher(state) {
		state.selectedVoucher = {
			name: '',
			started: '',
			ends: '',
			points: '',
		};
	},
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
};
