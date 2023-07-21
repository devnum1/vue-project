/**
 * Users Management Module
 */

import {endpoints, JufrahAdminAPI} from "../../../WebServices";
import Vue from 'vue'
import Nprogress from 'nprogress';

const state = {
    users: [],
    meta: {},
    selectedUser: {}
}

const getters = {
    users: state => state.users,
    meta: state => state.meta,
    selectedUser: state => state.selectedUser,
}

const actions = {
    getUsers(context, options) {

        Nprogress.start();

        if (!options) {
            return new Promise((resolve, reject) => {
                JufrahAdminAPI.get(endpoints.users)
                    .then(response => {
                        context.commit('setUsers', response.data);
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
        } else {
            return new Promise((resolve, reject) => {
                JufrahAdminAPI.get(endpoints.users, {
                    params: {
                        q: options.q,
                        page: options.page
                    }
                })
                    .then(response => {
                        context.commit('setUsers', response.data);
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
            });
        }


    },

    block(context, user) {
        Nprogress.start();

        JufrahAdminAPI.put(endpoints.block + user.id)
            .then(response => {
                context.commit('updateSelectedUser', response.data.data);
            })
            .catch(error => {
                console.log(error.data)
                Vue.notify({
                    group: 'loggedIn',
                    type: 'error',
                    text: error.response.data.message
                });
            })
            .finally(() => {
                Nprogress.done();
            });
    },

    unblock(context, user) {
        Nprogress.start();

        JufrahAdminAPI.put(endpoints.unblock + user.id)
            .then(response => {
                context.commit('updateSelectedUser', response.data.data);
            })
            .catch(error => {
                console.log(error.data)
                Vue.notify({
                    group: 'loggedIn',
                    type: 'error',
                    text: error.response.data.message
                });
            })
            .finally(() => {
                Nprogress.done();
            });
    }
}

const mutations = {
    setUsers(state, response) {
        state.users = response.data;
        state.meta = response.meta;
    },

    updateSelectedUser(state, user) {
        state.selectedUser = user
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}