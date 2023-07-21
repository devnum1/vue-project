/**
 * Mobile Ads Module
 */

import {endpoints, JufrahAdminAPI} from "../../../WebServices";
import Vue from 'vue'
import Nprogress from 'nprogress';

const boilerplate = {
    total: 5,
    countries: {
        eg: 2,
        sa: 1,
        qa: 0,
        kw: 2,
        bh: 0,
        ae: 0,
        om: 0,
    }
};

const state = {
    contactUs: {
        total: 0,
        countries: {
            eg: 2,
            sa: 1,
            qa: 0,
            kw: 2,
            bh: 0,
            ae: 0,
            om: 0,
        }
    },
    reports: {
        total: 5,
        countries: {
            eg: 2,
            sa: 1,
            qa: 0,
            kw: 2,
            bh: 0,
            ae: 0,
            om: 0,
        }
    },
}

const getters = {
    contactUs: state => {
        return state.contactUs;
    },

    reports: state => {
        return state.reports;
    }
}

const actions = {

    fetchNotifications(context) {
        Nprogress.start();

        let url = endpoints.adminNotifications;

        return new Promise((resolve, reject) => {
            JufrahAdminAPI.get(url)
                .then(response => {
                    context.commit('setStats', response.data);
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
}

const mutations = {
    setStats(state, response) {
        state.contactUs = response.contact_us;
        state.reports = response.ads_reports;
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}