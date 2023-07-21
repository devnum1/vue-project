/**
 * Notifications Module
 */

import { endpoints, JufrahAdminAPI } from '../../../WebServices';
import Vue from 'vue';
import Nprogress from 'nprogress';

const state = {
	selectedMessage: {},
	messages: [],
	messagesMeta: {
		last_page: 0,
	},
	messagesFilter: {
		page: 1,
		type: null,
	},

	types: [],
	selectedType: {
		type: '',
		type_ar: '',
	},
};

const getters = {
	messages: (state) => {
		return state.messages;
	},
	selectedMessage: (state) => {
		return state.selectedMessage;
	},
	messagesMeta: (state) => {
		return state.messagesMeta;
	},
	messagesFilter: (state) => {
		return state.messagesFilter;
	},

	types: (state) => {
		return state.types;
	},
	selectedType: (state) => {
		return state.selectedType;
	},
};

const actions = {
	fetchMessages(context) {
		Nprogress.start();

		const filter = state.messagesFilter;
		const type = filter.type !== null ? filter.type.id : '';
		const url = endpoints.contactUs + 'messages';

		return new Promise((resolve, reject) => {
			JufrahAdminAPI.get(url, {
				params: {
					type: type,
					page: filter.page,
				},
			})
				.then((response) => {
					context.commit('setMessages', response.data);
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

	fetchTypes(context) {
		Nprogress.start();

		const url = endpoints.contactUs + 'types';

		return new Promise((resolve, reject) => {
			JufrahAdminAPI.get(url)
				.then((response) => {
					context.commit('setTypes', response);
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

	createType(context, campaign) {
		Nprogress.start();

		const data = state.selectedType;
		const url = endpoints.contactUs + 'types';

		return new Promise((resolve, reject) => {
			JufrahAdminAPI.post(url, data)
				.then((response) => {
					context.dispatch('fetchTypes');

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

	updateType(context, campaign) {
		Nprogress.start();

		const data = state.selectedType;
		const url = endpoints.contactUs + 'types/' + data.id;

		return new Promise((resolve, reject) => {
			JufrahAdminAPI.put(url, data)
				.then((response) => {
					context.dispatch('fetchTypes');

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

	deleteType(context) {
		Nprogress.start();

		const data = state.selectedType;
		const url = endpoints.contactUs + 'types/' + data.id;

		return new Promise((resolve, reject) => {
			JufrahAdminAPI.delete(url)
				.then((response) => {
					context.dispatch('fetchTypes');

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

	deleteMessage(context) {
		Nprogress.start();

		const message = state.selectedMessage;
		const url = endpoints.contactUs + 'messages/' + message.id;

		return new Promise((resolve, reject) => {
			JufrahAdminAPI.delete(url)
				.then((response) => {
					context.dispatch('fetchMessages');
					const data = response.data.data;

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
	deleteAllMessage(context, payload) {
		Nprogress.start();
		const url = endpoints.contactUs + 'messages';
		return new Promise((resolve, reject) => {
			JufrahAdminAPI.post(url, payload)
				.then((response) => {
					context.dispatch('fetchMessages');
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
	seenAllMessage(context, payload) {
		Nprogress.start();
		const url = endpoints.contactUs + 'messages/seenMulti';
		return new Promise((resolve, reject) => {
			JufrahAdminAPI.patch(url, payload)
				.then((response) => {
					context.dispatch('fetchMessages');
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

	seenMessage(context) {
		Nprogress.start();

		const message = state.selectedMessage;
		const url = endpoints.contactUs + 'messages/' + message.id + '/seen';

		return new Promise((resolve, reject) => {
			JufrahAdminAPI.patch(url)
				.then((response) => {
					context.dispatch('fetchMessages');
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

	replyMessage(context, data) {
		Nprogress.start();

		const message = state.selectedMessage;
		const url = endpoints.contactUs + 'messages/' + message.id + '/reply';

		return new Promise((resolve, reject) => {
			JufrahAdminAPI.post(url, data)
				.then((response) => {
					const data = response.data.data;

					Vue.notify({
						group: 'loggedIn',
						type: 'success',
						text: 'Reply Sent Successfully',
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
	setSelectedMessage(state, message) {
		state.selectedMessage = message;
	},

	resetSelectedMessage(state) {
		state.selectedMessage = {};
	},

	setMessages(state, response) {
		state.messages = response.data;
		state.messagesMeta = response.meta;
	},

	resetMessages(state) {
		state.messages = [];
	},

	setTypes(state, response) {
		state.types = response.data;
	},

	setSelectedType(state, type) {
		state.selectedType = type;
	},

	resetSelectedType(state) {
		state.selectedType = {
			type: '',
			type_ar: '',
		};
	},

	changePage(state, page) {
		state.messagesFilter.page = page;
	},

	changeFilter(state, type) {
		state.messagesFilter.type = type;
	},
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
};
