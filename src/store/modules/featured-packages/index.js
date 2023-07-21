/**
 * Permissions Module
 */

import {endpoints, JufrahAdminAPI} from "../../../WebServices";
import Vue from 'vue'
import Nprogress from 'nprogress';

const state = {
    selectedPackage: {},
    packages: []
}

const getters = {
    selectedPackage: state => {
        return state.selectedPackage;
    },

    packages: state => {
        return state.packages;
    }
}

const actions = {
    fetchAdminProfile() {

    },

    fetchPackages(context) {
        return new Promise((resolve, reject) => {
            Nprogress.start();
            JufrahAdminAPI.get(endpoints.featuredPackages)
                .then(response => {
                    context.commit('setPackages', response.data.data);
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

    createPackage(context, data) {
        return new Promise((resolve, reject) => {
            Nprogress.start();
            JufrahAdminAPI.post(endpoints.featuredPackages, data)
                .then(response => {
                    Vue.notify({
                        group: 'loggedIn',
                        type: 'success',
                        text: 'Created successfully'
                    });
                    context.dispatch('fetchPackages').then(() => {
                        resolve(response);
                    });
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
        });
    },

    updatePackage(context, data) {
        return new Promise((resolve, reject) => {
            Nprogress.start();
            JufrahAdminAPI.post(endpoints.featuredPackages + '/' + state.selectedPackage.id, data)
                .then(response => {
                    Vue.notify({
                        group: 'loggedIn',
                        type: 'success',
                        text: 'Updated successfully'
                    });
                    context.dispatch('fetchPackages').then(() => {
                        resolve(response);
                    });
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
        });
    },

    deletePackage(context) {
        return new Promise((resolve, reject) => {
            Nprogress.start();
            JufrahAdminAPI.delete(endpoints.featuredPackages + '/' + state.selectedPackage.id)
                .then(response => {
                    Vue.notify({
                        group: 'loggedIn',
                        type: 'success',
                        text: 'Deleted successfully'
                    });
                    context.dispatch('fetchPackages').then(() => {
                        resolve(response);
                    });
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
        });
    },

    sortPackages(context, packages) {
        return new Promise((resolve, reject) => {
            Nprogress.start();
            JufrahAdminAPI.post(endpoints.sortFeaturedPackages, packages)
                .then(response => {
                    Vue.notify({
                        group: 'loggedIn',
                        type: 'success',
                        text: 'Updated successfully'
                    });
                    context.dispatch('fetchPackages').then(() => {
                        resolve(response);
                    });
                })
                .catch(error => {
                    console.log(error);
                    Vue.notify({
                        group: 'loggedIn',
                        type: 'error',
                        text: error.response.data.message ? error.response.data.message : 'Error Occurred'
                    });
                    context.dispatch('fetchPackages').then(() => {
                        reject(error);
                    });
                }).finally(() => {
                Nprogress.done();
            })
        });
    }
}

const mutations = {
    updateSelectedPackage(state, featured_package) {
        state.selectedPackage = featured_package;
    },

    setPackages(state, packages) {
        state.packages = packages;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}