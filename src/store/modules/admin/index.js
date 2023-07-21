/**
 * Admins Module
 */

import {endpoints, JufrahAdminAPI} from "../../../WebServices";
import Vue from 'vue'
import Nprogress from 'nprogress';


const state = {
    currentAdmin: {
        permissions: []
    },
    adminsList: [],
    meta: {},
}

const getters = {

    currentAdmin: state => {
        return state.currentAdmin;
    },

    admins: state => {
        return state.adminsList
    },

    admins_meta: state => state.meta,
}

const actions = {

    adminProfile(context) {
        JufrahAdminAPI.get('/profile')
            .then(response => {
                const admin = response.data.data;
                context.commit('setCurrentAdmin', admin)
            })
            .catch(error => {
                console.log(error)
            });
    },

    updateAdmin(context, payload) {

        Nprogress.start();
        const admin = payload.admin;
        const current_admin = payload.current_admin;

        return new Promise((resolve, reject) => {

            JufrahAdminAPI.put(endpoints.admins + '/' + admin.id, admin)
                .then(response => {
                    Vue.notify({
                        group: 'loggedIn',
                        type: 'success',
                        text: 'Updated successfully'
                    });
                    const admin = response.data.data;
                    if (current_admin) {
                        context.commit('setCurrentAdmin', admin);
                    } else {
                        context.dispatch('getAdmins').then(() => resolve(response));
                    }
                })
                .catch(error => {
                    console.log(error)
                    Vue.notify({
                        group: 'loggedIn',
                        type: 'error',
                        text: 'Error occurred'
                    });
                    reject(error);
                }).finally(() => {
                Nprogress.done();
            })
        });
    },

    createAdmin(context, payload) {
        Nprogress.start();

        return new Promise((resolve, reject) => {

            JufrahAdminAPI.post(endpoints.admins, payload)
                .then(response => {
                    Vue.notify({
                        group: 'loggedIn',
                        type: 'success',
                        text: 'Created successfully'
                    });
                    context.dispatch('getAdmins').then(() => resolve(response));
                })
                .catch(error => {
                    console.log(error)
                    Vue.notify({
                        group: 'loggedIn',
                        type: 'error',
                        text: error.response.data.message ? error.response.data.message : 'Error Occurred'
                    });
                    reject(error);
                }).finally(() => {
                Nprogress.done();
            })
        });
    },

    deleteAdmin(context, admin) {
        Nprogress.start();

        return new Promise((resolve, reject) => {

            JufrahAdminAPI.delete(endpoints.admins + '/' + admin.id)
                .then(response => {
                    Vue.notify({
                        group: 'loggedIn',
                        type: 'success',
                        text: 'Deleted successfully'
                    });
                    context.dispatch('getAdmins').then(() => resolve(response));
                })
                .catch(error => {
                    console.log(error)
                    Vue.notify({
                        group: 'loggedIn',
                        type: 'error',
                        text: error.response.data.message ? error.response.data.message : 'Error Occurred'
                    });
                    reject(error);
                }).finally(() => {
                Nprogress.done();
            })
        });
    },

    getAdmins(context, options) {

        Nprogress.start();

        if (!options) {
            return new Promise((resolve, reject) => {
                JufrahAdminAPI.get(endpoints.admins)
                    .then(response => {
                        context.commit('setAdmins', response.data)
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
                JufrahAdminAPI.get(endpoints.admins, {
                    params: {
                        q: options.q,
                        page: options.page
                    }
                })
                    .then(response => {
                        context.commit('setAdmins', response.data)
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

    permissions(context, id = null) {

        let url = endpoints.permissions;
        if (id) {
            url = url + '/' + id;
        }

        JufrahAdminAPI.get(url)
            .then(response => {
                const permissions = response.data.data;
                context.commit('setPermissions', permissions)
            }).catch(error => {
            Vue.notify({
                group: 'loggedIn',
                type: 'error',
                text: error.response.data.message
            });
        }).finally(() => {
            Nprogress.done();
        })
    }
}

const mutations = {

    setCurrentAdmin(state, admin) {
        state.currentAdmin = admin;
    },

    setAdmins(state, response) {
        state.adminsList = response.data;
        state.meta = response.meta;
    },

    setPermissions(state, permissions) {
        state.currentAdmin.permissions = permissions;
    }

}

export default {
    state,
    getters,
    actions,
    mutations
}

