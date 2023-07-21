/**
 * Mobile Ads Module
 */

import { endpoints, JufrahAdminAPI } from '../../../WebServices';
import Vue from 'vue';
import Nprogress from 'nprogress';

const ad = {
  name: '',
  ends_at: '',
  external: false,
  referer_link: '',
  referer_screen: '',
  active: true,
  image: '',
  image_ar: '',
  screens: [],
};

const homePageAds = [
  {
    id: 1,
    name: 'New ad for company X',
    external: false,
    referer_link: '',
    referer_screen: 1,
    ends_at: '12-1-2022',
    src: 'https://picsum.photos/id/237/1200/500',
    src_ar: 'https://picsum.photos/id/238/600/300',
    active: true,
    screens: [3],
  },
  {
    id: 2,
    name: 'New ad for company Y',
    external: true,
    referer_link: 'https://www.example.com',
    referer_screen: null,
    ends_at: '12-13-2021',
    src: 'https://picsum.photos/id/239/200/300',
    src_ar: 'https://picsum.photos/id/100/700/300',
    active: false,
    screens: [1, 2],
  },
  {
    id: 3,
    name: 'New ad for company Z',
    external: true,
    referer_link: 'https://www.example.com',
    referer_screen: null,
    ends_at: null,
    src: 'https://picsum.photos/id/220/300/300',
    src_ar: 'https://picsum.photos/id/120/400/300',
    active: false,
    screens: [1, 2],
  },
];

const state = {
  pages: [
    {
      id: 1,
      name: 'Home',
    },

    {
      id: 2,
      name: 'Categories',
    },

    {
      id: 3,
      name: 'Ad Creation',
    },

    {
      id: 4,
      name: 'Favorites',
    },

    {
      id: 5,
      name: 'Vouchers',
    },

    {
      id: 6,
      name: 'Notifications',
    },

    {
      id: 7,
      name: 'Payment Selection',
    },
    {
      id: 8,
      name: 'My Ads',
    },
  ],

  selectedAd: ad,

  selectedPage: {
    id: 1,
    name: 'Home',
  },

  ads: homePageAds,

  meta: {
    last_page: 5,
  },

  filterOptions: {
    page: 1,
  },
};

const getters = {
  adPages: (state) => {
    return state.pages;
  },

  selectedAd: (state) => {
    return state.selectedAd;
  },

  selectedPage: (state) => {
    return state.selectedPage;
  },

  ads: (state) => {
    return state.ads;
  },

  meta: (state) => {
    return state.meta;
  },

  filterOptions: (state) => {
    return state.filterOptions;
  },
};

const actions = {
  fetchAds(context) {
    Nprogress.start();

    let url = endpoints.mobileAds + '/screen/' + state.selectedPage.id;

    return new Promise((resolve, reject) => {
      JufrahAdminAPI.get(url)
        .then((response) => {
          // console.log(response)
          context.commit('setAds', response.data);
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

  createAd(context, ad) {
    Nprogress.start();

    const url = endpoints.mobileAds;

    return new Promise((resolve, reject) => {
      JufrahAdminAPI.post(url, ad)
        .then((response) => {
          context.dispatch('fetchAds');
          const data = response.data.data;

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

  updateAd(context, ad) {
    Nprogress.start();

    const url = endpoints.mobileAds + '/' + state.selectedAd.id;

    return new Promise((resolve, reject) => {
      JufrahAdminAPI.post(url, ad)
        .then((response) => {
          context.dispatch('fetchAds');
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

  deleteAd(context) {
    Nprogress.start();

    const url = endpoints.mobileAds + '/' + state.selectedAd.id;

    return new Promise((resolve, reject) => {
      JufrahAdminAPI.delete(url)
        .then((response) => {
          context.dispatch('fetchAds');
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
};

const mutations = {
  updateSelectedAd(state, ad) {
    state.selectedAd = ad;
  },

  setSelectedPage(state, page) {
    state.selectedPage = page;
  },

  setAds(state, response) {
    state.ads = response.data;
    state.meta = response.meta;
  },

  resetAds(state) {
    state.ads = [];
  },

  resetSelectedAd(state) {
    state.selectedAd = ad;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
