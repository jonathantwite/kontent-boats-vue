import { getItem } from '@/api/kentico';
import i18n from '@/i18n';

export const siteDefaultLanguage = process.env.VUE_APP_DEFAULT_LANGUAGE;

export const Types = {
    getters: {
        GET_AVAILABLE_LANGUAGES: 'GET_AVAILABLE_LANGUAGES',
        GET_SELECTED_LANGUAGE: 'GET_SELECTED_LANGUAGE',
        GET_SELECTED_LANGUAGE_PACK: 'GET_SELECTED_LANGUAGE_PACK'
    },
    mutations: {
    },
    actions: {
        SET_SELECTED_LANGUAGE: 'SET_SELECTED_LANGUAGE',
        SET_TO_DEFAULT_LANGUAGE: 'SET_TO_DEFAULT_LANGUAGE'
    }
};

const state = {
    availableLanguages: [
        { name: 'English - United Kingdom', codename: 'en-GB' },
        { name: 'Italian - Italy', codename: 'it-IT' }],
    selectedLanguage: '',
    languagePacks: {}
};

const getters = {
    GET_AVAILABLE_LANGUAGES: state => state.availableLanguages,
    GET_SELECTED_LANGUAGE: state => state.selectedLanguage,
    GET_SELECTED_LANGUAGE_PACK: state => state.languagePacks[state.selectedLanguage]
};

const mutations = {
    SET_LANGUAGE: (state, { language }) => {
        if (state.availableLanguages.map(l => l.codename).indexOf(language) !== -1) {
            state.selectedLanguage = language;
        } else if (!state.selectedLanguage) {
            state.selectedLanguage = siteDefaultLanguage;
        }
    },
    SAVE_LANGUAGE_PACK: (state, { language, translations }) => {
        state.languagePacks = {
            ...state.languagePacks,
            [language]: translations
        };
    }
};

const actions = {
    SET_SELECTED_LANGUAGE: ({ getters, commit, dispatch }, language) => {
        commit('SET_LANGUAGE', language);
        return dispatch('LOAD_LANGUAGE_PACK')
            .then(() => {
                i18n.availableLocales.push(getters.GET_SELECTED_LANGUAGE);
                i18n.locale = getters.GET_SELECTED_LANGUAGE;
                i18n.setLocaleMessage(getters.GET_SELECTED_LANGUAGE, getters.GET_SELECTED_LANGUAGE_PACK);
            });
    },
    SET_TO_DEFAULT_LANGUAGE: ({ getters, commit, dispatch }) => {
        commit('SET_LANGUAGE', siteDefaultLanguage);
        return dispatch('LOAD_LANGUAGE_PACK')
            .then(() => {
                i18n.availableLocales.push(getters.GET_SELECTED_LANGUAGE);
                i18n.locale = getters.GET_SELECTED_LANGUAGE;
                i18n.setLocaleMessage(getters.GET_SELECTED_LANGUAGE, getters.GET_SELECTED_LANGUAGE_PACK);
            });
    },

    LOAD_LANGUAGE_PACK: ({ state, commit }) =>
        getItem('site_language_pack')
            .then(response => {
                const msgs = {};

                Object.values(response.item)
                    .filter(ci => ci && ci.name && ci.value)
                    .forEach(ci => { msgs[ci.name] = ci.value; });

                commit('SAVE_LANGUAGE_PACK', {
                    language: state.selectedLanguage,
                    translations: msgs
                });
            })

};

window.i18n = i18n;

export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations
};
