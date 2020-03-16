import { getClassesByClassification, getClass, getClassesByBuilder } from '@/api/kentico';

export const Types = {
    getters: {
        GET_CLASS: 'GET_CLASS',
        GET_ALL_CLASSES: 'GET_ALL_CLASSES',
        GET_CLASSES_IN_CLASSIFICATION: 'GET_CLASSES_IN_CLASSIFICATION',
        GET_CLASSES_BY_BUILDER: 'GET_CLASSES_BY_BUILDER'
    },
    mutations: {
        ADD_OR_UPDATE_CLASS: 'ADD_OR_UPDATE_CLASS'
    },
    actions: {
        LOAD_CLASSES_BY_CLASSIFICATION: 'LOAD_CLASSES_BY_CLASSIFICATION',
        LOAD_CLASS: 'LOAD_CLASS',
        LOAD_CLASSES_BY_BUILDER: 'LOAD_CLASSES_BY_BUILDER'
    }
};

const state = {
    allClasses: []
};

const getters = {
    GET_CLASS: state => codename => state.allClasses.find(c => c._raw.system.codename === codename),
    GET_ALL_CLASSES: state => state.allClasses,
    GET_CLASSES_IN_CLASSIFICATION: state => codename => state.allClasses.filter(c => c.classification.value.map(cv => cv.codename).indexOf(codename) !== -1),
    GET_CLASSES_BY_BUILDER: state => codename => state.allClasses.filter(c => c.builders.value.map(bv => bv.system.codename).indexOf(codename) !== -1)
};

const mutations = {
    ADD_OR_UPDATE_CLASS: (state, { dinghyClass }) => {
        state.allClasses = state.allClasses.filter(c => c.system.codename !== dinghyClass.system.codename);
        state.allClasses.push(dinghyClass);
    }
};

const actions = {
    LOAD_CLASSES_BY_CLASSIFICATION: ({ commit }, codename) => getClassesByClassification(codename)
        .then(all => {
            all.items.forEach(dinghyClass => {
                commit(Types.mutations.ADD_OR_UPDATE_CLASS, { dinghyClass });
            });
        }),
    LOAD_CLASSES_BY_BUILDER: ({ commit }, codename) => getClassesByBuilder(codename)
        .then(all => {
            all.items.forEach(c => {
                commit(Types.mutations.CLEAR_CLASSES_BY_CODENAME, { codename: c.system.codename });
                commit(Types.mutations.ADD_CLASS, c);
            });
        }),
    LOAD_CLASS: ({ commit }, codename) => getClass(codename)
        .then(dinghyClass => {
            commit(Types.mutations.CLEAR_CLASSES_BY_CODENAME, { codename });
            commit(Types.mutations.ADD_CLASS, dinghyClass.item);
        })
};

export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations
};
