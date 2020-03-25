const state = {
    availableLanguages: [
        { name: 'English - United Kingdom', codename: 'en-GB' },
        { name: 'Italian - Italy', codename: 'it-IT' }],
    selectedLanguage: 'en-GB'
};

const getters = {
    GET_AVAILABLE_LANGUAGES: state => state.availableLanguages,
    GET_SELECTED_LANGUAGE: state => state.selectedLanguage
};

const mutations = {
    SET_SELECTED_LANGUAGE: (state, { language }) => {
        state.selectedLanguage =
            state.availableLanguages.map(l => l.codename).indexOf(language) !== -1
                ? language
                : state.selectedLanguage;
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
