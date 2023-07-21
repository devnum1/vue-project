/**
 * Settings Module
 */
import {
    languages,
    sidebarBackgroundImages,
    sidebarFilters,
    routerAnimations,
    themes,
    headerFilters,
    countries
} from "./data";

const getSavedSetting = (key, defaultValue) => {
    return localStorage.getItem(key) ?
        JSON.parse(localStorage.getItem(key))
        : defaultValue
}

const state = {                                       // dark mode
    collapseSidebar: getSavedSetting('collapseSidebar', false),                                // mini sidevar
    rtlLayout: getSavedSetting('rtlLayout', false),                                    // rtl layout
    backgroundImage: getSavedSetting('backgroundImage', false),                                // enable sidebar background image
    horizontalLayoutSidebar: false,                        // horizontal layout sidebar
    languages,                                             // languages
    selectedLocale: languages[0],                          // selected locale
    countries,
    selectedCountry: getSavedSetting('country', countries[0]),
    sidebarBackgroundImages,                               // sidebar backgorund images
    selectedSidebarBgImage: getSavedSetting('selectedSidebarBgImage', sidebarBackgroundImages[0]),    // selected sidebar background image
    sidebarFilters,                                        // sidebar filters
    sidebarSelectedFilter: getSavedSetting('sidebarSelectedFilter', sidebarFilters[0]),              // selected sidebar filter
    routerAnimations,                                      // router animations
    selectedRouterAnimation: getSavedSetting('selectedRouterAnimation', routerAnimations[0]),          // selected router animation
    themes,                                                // themes
    selectedTheme: getSavedSetting('selectedTheme', themes[0]),                              // selected theme
    headerFilters,                                         // header filters
    activeHeaderFilter: getSavedSetting('activeHeaderFilter', headerFilters[1]),                  // selected header filter
    mobileSearchForm: false								   // Is Mobile Search Form Open
}

// getters
const getters = {
    collapseSidebar: state => {
        return state.collapseSidebar;
    },
    boxLayout: state => {
        return state.boxLayout;
    },
    rtlLayout: state => {
        return state.rtlLayout;
    },
    backgroundImage: state => {
        return state.backgroundImage;
    },
    selectedLocale: state => {
        return state.selectedLocale;
    },
    languages: state => {
        return state.languages;
    },
    sidebarBackgroundImages: state => {
        return state.sidebarBackgroundImages;
    },
    selectedSidebarBgImage: state => {
        return state.selectedSidebarBgImage;
    },
    sidebarFilters: state => {
        return state.sidebarFilters;
    },
    sidebarSelectedFilter: state => {
        return state.sidebarSelectedFilter;
    },
    selectedRouterAnimation: state => {
        return state.selectedRouterAnimation;
    },
    routerAnimations: state => {
        return state.routerAnimations;
    },
    themes: state => {
        return state.themes;
    },
    selectedTheme: state => {
        return state.selectedTheme;
    },
    headerFilters: state => {
        return state.headerFilters;
    },
    activeHeaderFilter: state => {
        return state.activeHeaderFilter;
    },
    horizontalLayoutSidebar: state => {
        return state.horizontalLayoutSidebar;
    },
    mobileSearchForm: state => {
        return state.mobileSearchForm;
    },
    countries: state => {
        return state.countries
    },
    selectedCountry: state => {
        return state.selectedCountry
    }
}

// actions
const actions = {
    collapseSidebar(context) {
        context.commit('collapseSidebarHandler');
    },
    boxLayout(context) {
        context.commit('boxLayoutHandler');
    },
    rtlLayout(context) {
        context.commit('rtlLayoutHandler');
    },
    backgroundImage(context) {
        context.commit('sidebarBgImageHandler');
    },
    changeLanguage(context, payload) {
        context.commit('changeLanguageHandler', payload);
    },
    changeBackgroundImage(context, payload) {
        context.commit('changeBackgroundImageHandler', payload);
    },
    changeSidebarFilter(context, payload) {
        context.commit('changeSidebarFilterHandler', payload);
    },
    changeRouterAnimation(context, payload) {
        context.commit('changeRouterAnimationHandler', payload);
    },
    changeTheme(context, payload) {
        context.commit('changeThemeHandler', payload);
    },
    changeHeaderFilter(context, payload) {
        context.commit('changeHeaderFilterHandler', payload);
    },
    setMiniSidebarLayout(context, payload) {
        context.commit('setMiniSidebarLayoutHandler', payload);
    },
    toggleHorizontalLayoutSidebar(context, payload) {
        context.commit('toggleHorizontalLayoutSidebarHandler', payload);
    },
    toggleSearchForm(context) {
        context.commit('toggleSearchFormHandler');
    },
    changeCountry(context, payload) {
        context.commit('changeCountryHandler', payload);
    }
}

// mutations
const mutations = {
    collapseSidebarHandler(state) {
        state.collapseSidebar = !state.collapseSidebar;
        localStorage.setItem('collapseSidebar', JSON.stringify(state.collapseSidebar));
    },
    boxLayoutHandler(state) {
        state.boxLayout = !state.boxLayout;
    },
    rtlLayoutHandler(state) {
        state.rtlLayout = !state.rtlLayout;
        localStorage.setItem('rtlLayout', JSON.stringify(state.rtlLayout));
    },
    sidebarBgImageHandler(state) {
        state.backgroundImage = !state.backgroundImage;
        localStorage.setItem('backgroundImage', JSON.stringify(state.backgroundImage));
    },
    changeLanguageHandler(state, language) {
        state.selectedLocale = language;
        if (language.locale === 'he' || language.locale === 'ar') {
            state.rtlLayout = true;
        } else {
            state.rtlLayout = false;
        }
    },
    changeBackgroundImageHandler(state, image) {
        state.selectedSidebarBgImage = image;
        localStorage.setItem('selectedSidebarBgImage', JSON.stringify(image));
    },
    changeSidebarFilterHandler(state, filter) {
        state.sidebarSelectedFilter = filter;
        localStorage.setItem('sidebarSelectedFilter', JSON.stringify(filter));
    },
    changeRouterAnimationHandler(state, animation) {
        state.selectedRouterAnimation = animation;
        localStorage.setItem('selectedRouterAnimation', JSON.stringify(animation));
    },
    changeThemeHandler(state, theme) {
        state.selectedTheme = theme;
        localStorage.setItem('selectedTheme', JSON.stringify(theme));
    },
    changeHeaderFilterHandler(state, filter) {
        state.activeHeaderFilter = filter;
        localStorage.setItem('activeHeaderFilter', JSON.stringify(filter));
    },
    setMiniSidebarLayoutHandler(state, isSet) {
        state.collapseSidebar = isSet;
    },
    toggleHorizontalLayoutSidebarHandler(state, value) {
        state.horizontalLayoutSidebar = value;
    },
    toggleSearchFormHandler(state) {
        state.mobileSearchForm = !state.mobileSearchForm;
    },
    changeCountryHandler(state, country) {
        state.selectedCountry = country
        localStorage.setItem('country', JSON.stringify(country));
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
