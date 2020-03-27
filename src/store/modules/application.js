export const siteDefaultLanguage = process.env.VUE_APP_DEFAULT_LANGUAGE;

export const Types = {
    getters: {
        GET_AVAILABLE_LANGUAGES: 'GET_AVAILABLE_LANGUAGES',
        GET_SELECTED_LANGUAGE: 'GET_SELECTED_LANGUAGE'
    },
    mutations: {
        SET_SELECTED_LANGUAGE: 'SET_SELECTED_LANGUAGE',
        SET_TO_DEFAULT_LANGUAGE: 'SET_TO_DEFAULT_LANGUAGE'
    },
    actions: {

    }
};

const state = {
    availableLanguages: [
        { name: 'English - United Kingdom', codename: 'en-GB' },
        { name: 'Italian - Italy', codename: 'it-IT' }],
    selectedLanguage: ''
};

const getters = {
    GET_AVAILABLE_LANGUAGES: state => state.availableLanguages,
    GET_SELECTED_LANGUAGE: state => state.selectedLanguage
};

const setLanguage = (state, language) => {
    if (state.availableLanguages.map(l => l.codename).indexOf(language) !== -1) {
        state.selectedLanguage = language;
    } else if (!state.selectedLanguage) {
        state.selectedLanguage = siteDefaultLanguage;
    }
};

const mutations = {
    SET_SELECTED_LANGUAGE: (state, { language }) => {
        setLanguage(state, language);
    },
    SET_TO_DEFAULT_LANGUAGE: (state) => {
        setLanguage(state, siteDefaultLanguage);
    }
};

const actions = {

};

export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations
};
