/**
 * Permissions Module
 */

import {endpoints, JufrahAdminAPI} from "../../../WebServices";
import Vue from 'vue'
import Nprogress from 'nprogress';

const state = {
    selectedAdmin: {},
    permissions: []
}

const getters = {
    selectedAdmin: state => {
        return state.selectedAdmin;
    },

    selectedAdminPermissions: state => {
        return state.permissions;
    }
}

const actions = {
    fetchAdminProfile() {

    },

    fetchAdminPermissions(context, admin) {
        return new Promise((resolve, reject) => {
            Nprogress.start();
            JufrahAdminAPI.get(endpoints.permissions + '/' + admin.id)
                .then(response => {
                    context.commit('updateSelectedAdminPermissions', response.data.data);
                    console.log(response.data.data);
                    resolve(response);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                }).finally(() => {
                Nprogress.done();
            })
        });
    },

    updateAdminPermission(context, permission) {
        return new Promise((resolve, reject) => {
            Nprogress.start();
            if (permission.flag) {
                // Delete
                let p = findPermission(permission);
                console.log(p);
                if (p) {
                    JufrahAdminAPI.delete(endpoints.permissions + '/' + p.id)
                        .then(response => {
                            context.dispatch('fetchAdminPermissions', permission.admin);
                            Vue.notify({
                                group: 'loggedIn',
                                type: 'success',
                                text: 'Updated successfully'
                            });
                            resolve(response);
                        })
                        .catch(error => {
                            console.log(error);
                            Vue.notify({
                                group: 'loggedIn',
                                type: 'error',
                                text: error.response.data.message ? error.response.data.message : 'Error Occurred'
                            });
                            reject(error);
                        }).finally(() => {
                        Nprogress.done();
                    })
                }
            } else {
                // Create
                JufrahAdminAPI.post(endpoints.permissions, permission)
                    .then(response => {
                        context.dispatch('fetchAdminPermissions', permission.admin);
                        Vue.notify({
                            group: 'loggedIn',
                            type: 'success',
                            text: 'Updated successfully'
                        });
                        resolve(response);
                    })
                    .catch(error => {
                        console.log(error);
                        Vue.notify({
                            group: 'loggedIn',
                            type: 'error',
                            text: error.response.data.message ? error.response.data.message : 'Error Occurred'
                        });
                        reject(error);
                    }).finally(() => {
                    Nprogress.done();
                })
            }

        });
    },

    changeSuper(context, admin) {
        const url = endpoints.super + admin.id;
        if (admin.is_super) {
            JufrahAdminAPI.delete(url)
                .then(response => {
                    Vue.notify({
                        group: 'loggedIn',
                        type: 'success',
                        text: 'Updated successfully'
                    });
                    resolve(response);
                })
                .catch(error => {
                    console.log(error);
                    Vue.notify({
                        group: 'loggedIn',
                        type: 'error',
                        text: error.response.data.message ? error.response.data.message : 'Error Occurred'
                    });
                    reject(error);
                }).finally(() => {
                Nprogress.done();
            })
        } else {
            JufrahAdminAPI.patch(url)
                .then(response => {
                    Vue.notify({
                        group: 'loggedIn',
                        type: 'success',
                        text: 'Updated successfully'
                    });
                    resolve(response);
                })
                .catch(error => {
                    console.log(error);
                    Vue.notify({
                        group: 'loggedIn',
                        type: 'error',
                        text: error.response.data.message ? error.response.data.message : 'Error Occurred'
                    });
                    reject(error);
                }).finally(() => {
                Nprogress.done();
            })
        }
    },
}

const mutations = {
    updateSelectedAdminPermissions(state, permissions) {
        state.permissions = permissions;
    },

    setSelectedAdmin(state, admin) {
        state.selectedAdmin = admin;
    },
}

const findPermission = function (permission) {
    let permissions = state.permissions;
    // console.log(permissions);
    // return false;
    for (let i = 0; i < permissions.length; i++) {
        if (permission.hasOwnProperty('country_id')) {
            if (permissions[i].action.id === permission.action_id
                && permissions[i].resource.id === permission.resource_id
                && permissions[i].country.id === permission.country_id) {
                return permissions[i];
            }
        } else {
            if (permissions[i].action.id === permission.action_id
                && permissions[i].resource.id === permission.resource_id) {
                return permissions[i];
            }
        }

    }
    return false;
}

export default {
    state,
    getters,
    actions,
    mutations
}