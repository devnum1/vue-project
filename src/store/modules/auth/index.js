/**
 * Auth Module
 */
import Vue from 'vue'
import Nprogress from 'nprogress';
import router from '../../../router';
import {JufrahAdminAPI, endpoints} from "../../../WebServices";

const state = {
    user: localStorage.getItem('user')
}

// getters
const getters = {
    getUser: state => {
        return state.user;
    }
}

// actions
const actions = {

    signIn(context, payload) {

        const {user} = payload;
        Nprogress.start();

        JufrahAdminAPI.post('/login', JSON.stringify(user))
            .then(response => {
                    const data = response.data;
                    Nprogress.done();
                    let authToken = data.access_token;
                    context.commit('loginUserSuccess', data);
                    JufrahAdminAPI.defaults.headers.common.Authorization = `Bearer ${authToken}`;
                    context.dispatch('adminProfile').then(() => context.dispatch('permissions'))
                }
            ).catch(error => {
            context.commit('loginUserFailure', error.response.data.error);
        })
    },

    signOut(context, payload) {

        Nprogress.start();

        // logout from api
        JufrahAdminAPI.post(endpoints.logout)
            .then(response => {

                const data = response.data;
                console.log(data);

                Nprogress.done();


                Vue.notify({
                    group: 'loggedIn',
                    type: 'success',
                    text: 'Logged out successfully'
                });


                // delete use from local storage
                context.commit('logoutAdmin');

            })

            .catch(error => {
                console.log(error);
                Vue.notify({
                    group: 'loggedIn',
                    type: 'error',
                    text: 'Error while processing request'
                });
            });
    },
}

// mutations
const mutations = {

    loginUserSuccess(state, user) {
        state.user = user;
        localStorage.setItem('user', JSON.stringify(user));
        state.isUserSigninWithAuth0 = false
        router.push("/dashboard");
        setTimeout(function () {
            Vue.notify({
                group: 'loggedIn',
                type: 'success',
                text: 'User Logged In Success!'
            });
        }, 1500);
    },

    loginUserFailure(state, message) {
        Nprogress.done();
        Vue.notify({
            group: 'loggedIn',
            type: 'error',
            text: message
        });
    },

    logoutAdmin(state) {
        state.user = null
        localStorage.removeItem('user');
        router.push("/session/login");
    }

}

export default {
    state,
    getters,
    actions,
    mutations
}
