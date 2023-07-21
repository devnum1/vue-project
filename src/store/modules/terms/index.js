/**
 * Mobile Ads Module
 */

import {endpoints, JufrahAdminAPI} from "../../../WebServices";
import Vue from 'vue'
import Nprogress from 'nprogress';

const state = {

    terms: [
        {
            id: "",
            terms:"",
            lang:""
        }
    ],
}

const getters = {
    terms: state => {
        return state.terms;
    },
}

const actions = {

    fetchTerms(context) {
        Nprogress.start();

        let url = endpoints.terms;

        return new Promise((resolve, reject) => {
            JufrahAdminAPI.get(url)
                .then(response => {
                    context.commit('setTerms', response.data);
                    console.log(response.data)
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

    updateTerms(context, terms) {
        Nprogress.start();

        let url = endpoints.terms;

        return new Promise((resolve, reject) => {
            JufrahAdminAPI.post(url, terms)
                .then(response => {
                    Vue.notify({
                        group: 'loggedIn',
                        type: 'success',
                        text: 'Updated Successfully'
                    });
                    context.dispatch('fetchTerms');
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
    }
}

const mutations = {
    setTerms(state, response) {
        state.terms = response;
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}