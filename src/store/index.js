import Vue from 'vue';
import Vuex from 'vuex';
import classes, { Types as classesTypes } from './modules/classes';
import classifications, { Types as classificationsTypes } from './modules/classifications';
import application, { Types as appTypes } from './modules/application';

Vue.use(Vuex);

export const Types = {
    getters: {
        ...classesTypes.getters,
        ...classificationsTypes.getters,
        ...appTypes.getters
    },
    mutations: {
        ...classesTypes.mutations,
        ...classificationsTypes.mutations,
        ...appTypes.mutations
    },
    actions: {
        ...classesTypes.actions,
        ...classificationsTypes.actions,
        ...appTypes.actions
    }
};

export default new Vuex.Store({
    modules: {
        application,
        classes,
        classifications
    }
});
