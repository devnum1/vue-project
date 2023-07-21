/**
 * Notifications Module
 */

import {endpoints, JufrahAdminAPI} from "../../../WebServices";
import Vue from 'vue'
import Nprogress from 'nprogress';

const state = {
    selectedMessage: {},
    messages: [],

    campaign: {
        title: "",
        title_ar: "",
        body: "",
        body_ar: "",
        src: "",
    },
    // reportsMeta: {},
    // reportsFilterOptions: {
    //     page: 1,
    // },
    // reportCategories: [],
    // selectedCategory: {color: "",},

    // categoryReports: [],
    // categoryReportsMeta: {},
}

const getters = {
    selectedMessage: state => {
        return state.selectedMessage;
    },

    messages: state => {
        return state.messages;
    },

    campaign: state => {
        return state.campaign;
    },

}

const actions = {

    fetchMessages(context) {
        Nprogress.start();

        return new Promise((resolve, reject) => {
            JufrahAdminAPI.get(endpoints.notificationsMessages)
                .then(response => {
                    context.commit('setMessages', response.data);
                    console.log(response);
                    resolve(response);
                }).catch(error => {
                Vue.notify({
                    group: 'loggedIn',
                    type: 'error',
                    text: error.response.data.message
                });
                reject(error);
            }).finally(() => {
                Nprogress.done();
            });
        })

    },

    sendCampaign(context, campaign) {
        Nprogress.start();

        const url = endpoints.campaign;

        return new Promise((resolve, reject) => {
            JufrahAdminAPI.post(url, campaign)
                .then(response => {

                    const data = response.data.data;

                    Vue.notify({
                        group: 'loggedIn',
                        type: 'success',
                        text: 'Send successfully'
                    });

                    resolve(response);

                })
                .catch(error => {

                    Vue.notify({
                        group: 'loggedIn',
                        type: 'error',
                        text: error.response.data.message ? error.response.data.message : 'Error Occurred'
                    });

                    reject(error);

                })
                .finally(() => {
                    Nprogress.done();
                })
        });
    },

    updateMessage(context) {
        Nprogress.start();

        const message = state.selectedMessage;
        const url = endpoints.notificationsMessages + '/' + message.id;

        return new Promise((resolve, reject) => {
            JufrahAdminAPI.put(url, message)
                .then(response => {

                    context.dispatch('notifications/fetchMessages');
                    const data = response.data.data;

                    Vue.notify({
                        group: 'loggedIn',
                        type: 'success',
                        text: 'Updated Successfully'
                    });

                    resolve(response);

                })
                .catch(error => {

                    Vue.notify({
                        group: 'loggedIn',
                        type: 'error',
                        text: error.response.data.message ? error.response.data.message : 'Error Occurred'
                    });

                    reject(error);

                })
                .finally(() => {
                    Nprogress.done();
                })
        });
    },

}

const mutations = {
    updateSelectedMessage(state, message) {
        state.selectedMessage = message;
    },

    setMessages(state, response) {
        state.messages = response.data;
    },

    resetMessages(state) {
        state.messages = [];
    },

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}