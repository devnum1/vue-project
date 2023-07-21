import Vue from 'vue'
import Vuex from 'vuex'

// modules
import auth from './modules/auth';
import chat from './modules/chat';
import settings from './modules/settings';
import ecommerce from './modules/ecommerce';
import mail from './modules/mail';
import sidebar from './modules/sidebar';
import admin from './modules/admin';
import users from './modules/users';
import categories from './modules/categories';
import permissions from './modules/permissions';
import featuredPackage from './modules/featured-packages';
import ads from './modules/ads';
import reports from './modules/ad-reports';
import notifications from './modules/notifications';
import vouchers from './modules/vouchers';
import mobileAds from './modules/mobile-ads';
import contactUs from './modules/contact-us';
import adminNotifications from './modules/admin-notifications';
import terms from './modules/terms';
import dashboard from './modules/dashboard';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        auth,
        chat,
        settings,
        ecommerce,
        mail,
        sidebar,
        admin,
        users,
        categories,
        permissions,
        featuredPackage,
        ads,
        reports,
        notifications,
        vouchers,
        mobileAds,
        contactUs,
        adminNotifications,
        terms,
        dashboard,
    }
})
