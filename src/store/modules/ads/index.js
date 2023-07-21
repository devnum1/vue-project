/**
 * Ads Module
 */

import {endpoints, JufrahAdminAPI} from "../../../WebServices";
import Vue from 'vue'
import Nprogress from 'nprogress';

const serialize = function (obj, prefix) {
    var str = [],
        p;
    for (p in obj) {
        if (obj.hasOwnProperty(p)) {
            var k = prefix ? prefix + "[" + p + "]" : p,
                v = obj[p];
            str.push((v !== null && typeof v === "object") ?
                serialize(v, k) :
                encodeURIComponent(k) + "=" + encodeURIComponent(v));
        }
    }
    return str.join("&");
}

const state = {
    selectedAd: {
        images: [],
    },
    selectedAdImages: [],
    ads: [],
    adsMeta: {},
    adsLinks: {},
    filterOptions: {
        page: 1,
    },
    adReports: [],
    adReportsMeta: {},
    reportedCount: null,
}

const getters = {
    selectedAd: state => {
        return state.selectedAd;
    },

    selectedAdImages: state => {
        return state.selectedAdImages;
    },

    ads: state => {
        return state.ads;
    },

    adsMeta: state => {
        return state.adsMeta;
    },

    adReports: state => {
        return state.adReports;
    },

    adReportsMeta: state => {
        return state.adReportsMeta;
    },

    filterOptions: state => {
        return state.filterOptions;
    },

    reportedCount: state => {
        return state.reportedCount;
    },
}

const actions = {

    fetchAds(context, options) {
        Nprogress.start();
        console.log(options)

        if (!options) {
            return new Promise((resolve, reject) => {
                JufrahAdminAPI.get(endpoints.ads)
                    .then(response => {
                        context.commit('setAds', response.data);
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
                let filter = [];
                filter['q'] = options.q;
                filter['category_id'] = options.category;
                filter['featured'] = options.featured;
                filter['blocked'] = options.blocked;
                filter['reported'] = options.reported;
                filter['user'] = options.user;

                // console.log(filter)

                const params = {}
                Object.keys(filter).map((item, index) => {
                    // const key = `filter[${item}]&`
                    const key = `filter[${item}]`
                    Object.assign(params, {[key]: filter[item]})
                })
                Object.assign(params, {page: options.page})
                // console.log(params)

                JufrahAdminAPI.get(endpoints.ads, {
                    params
                })
                    .then(response => {
                        context.commit('setAds', response.data);
                        // console.log(state.adsMeta);
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

    deleteAd(context, ad) {
        return new Promise((resolve, reject) => {
            Nprogress.start();
            JufrahAdminAPI.delete(endpoints.ads + '/' + ad.id)
                .then(response => {
                    Vue.notify({
                        group: 'loggedIn',
                        type: 'success',
                        text: 'Deleted successfully'
                    });
                    context.dispatch('fetchAds').then(() => {
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

    activateAd(context, ad) {
        let url = endpoints.ads + '/' + ad.id + '/';
        url += ad.block ? 'disable' : 'enable';
        return new Promise((resolve, reject) => {
            Nprogress.start();
            JufrahAdminAPI.patch(url)
                .then(response => {
                    Vue.notify({
                        group: 'loggedIn',
                        type: 'success',
                        text: ad.block ? 'Blocked successfully' : 'Unblocked successfully'
                    });
                    context.dispatch('fetchAds', state.filterOptions).then(() => {
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

    fetchAdReports(context, options) {
        Nprogress.start();

        if (!options) {
            return new Promise((resolve, reject) => {
                JufrahAdminAPI.get(endpoints.ads + '/' + state.selectedAd.id + '/reports')
                    .then(response => {
                        context.commit('setAdReports', response.data);
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

                JufrahAdminAPI.get(endpoints.ads + '/' + state.selectedAd.id + '/reports', {
                    params: {
                        page: options.page
                    }
                })
                    .then(response => {
                        context.commit('setAdReports', response.data);
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

    deleteAdReport(context, report = null) {
        let url = endpoints.ads + '/' + state.selectedAd.id + '/reports'; // clear all ad reports
        if (report !== null) url += '/' + report.id; // clear only report

        return new Promise((resolve, reject) => {
            Nprogress.start();
            JufrahAdminAPI.delete(url)
                .then(response => {
                    Vue.notify({
                        group: 'loggedIn',
                        type: 'success',
                        text: 'Deleted successfully'
                    });
                    context.dispatch('fetchAds', state.filterOptions).then(() => {
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

    fetchReportedCount(context) {
        return new Promise((resolve, reject) => {
            JufrahAdminAPI.get(endpoints.reportedAds)
                .then(response => {
                    console.log(response.data)
                    context.commit('setReportedCount', response.data.total);
                    resolve(response);
                }).catch(error => {
                reject(error);
            }).finally(() => {
                Nprogress.done();
            });
        })
    },
}

const mutations = {
    updateSelectedAd(state, ad) {
        state.selectedAd = ad;
    },

    setAds(state, response) {
        state.ads = response.data;
        state.adsMeta = response.meta;
    },

    setAdReports(state, response) {
        state.adReports = response.data;
        state.adReportsMeta = response.meta;
    },

    resetAdReports(state) {
        state.adReports = [];
    },

    setSelectedAd(state, ad) {
        state.selectedAd = ad;
        state.selectedAdImages = ad.images;
    },

    resetSelectedAd(state) {
        state.selectedAd = {
            category: {},
            options: [],
            user: {},
            location: {},
            payment: {
                type: {},
            },
        };
        state.selectedAdImages = [];
    },

    resetAds(state) {
        state.ads = [];
    },

    changeFilterOption(state, option, value = null) {
        if (value !== null) state.filterOptions.option = value;
        else delete state.filterOptions.option;
        console.log(state.filterOptions);
    },

    changeFilterPage(state, page = null) {
        if (page !== null) state.filterOptions.page = page;
        else state.filterOptions.page = 1;
    },

    setReportedCount(state, count) {
        state.reportedCount = count;
    },

}

export default {
    state,
    getters,
    actions,
    mutations
}