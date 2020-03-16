import { getClassesByClassification, getClass, getClassesByBuilder } from '@/dto/data';

export const Types = {
    getters: {
        GET_CLASS: 'GET_CLASS',
        GET_ALL_CLASSES: 'GET_ALL_CLASSES',
        GET_CLASSES_IN_CLASSIFICATION: 'GET_CLASSES_IN_CLASSIFICATION',
        GET_CLASSES_BY_BUILDER: 'GET_CLASSES_BY_BUILDER'
    },
    mutations: {
        CLEAR_CLASSES_BY_CLASSIFICATION: 'CLEAR_CLASSES_BY_CLASSIFICATION',
        ADD_CLASS: 'ADD_CLASS',
        CLEAR_CLASSES_BY_CODENAME: 'CLEAR_CLASSES_BY_CODENAME'
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
    CLEAR_CLASSES_BY_CLASSIFICATION: (state, { codename }) => {
        const classesToRemove = [];
        state.allClasses.forEach(c => {
            c.classification.value.forEach(classification => {
                if (classification.codename === codename) {
                    classesToRemove.push(c._raw.system.id);
                }
            });
        });

        state.allClasses = state.allClasses.filter(c => classesToRemove.indexOf(c._raw.system.id) === -1);
    },
    CLEAR_CLASSES_BY_CODENAME: (state, { codename }) => {
        state.allClasses = state.allClasses.filter(c => c.system.codename !== codename);
    },
    ADD_CLASS: (state, boatClass) => { state.allClasses.push(boatClass); }
};

const actions = {
    LOAD_CLASSES_BY_CLASSIFICATION: ({ commit }, codename) => getClassesByClassification(codename)
        .then(all => {
            commit(Types.mutations.CLEAR_CLASSES_BY_CLASSIFICATION, { codename });
            all.items.forEach(c => commit(Types.mutations.ADD_CLASS, c));
        }),
    LOAD_CLASS: ({ commit }, codename) => getClass(codename)
        .then(dinghyClass => {
            commit(Types.mutations.CLEAR_CLASSES_BY_CODENAME, { codename });
            commit(Types.mutations.ADD_CLASS, dinghyClass.item);
        }),
    LOAD_CLASSES_BY_BUILDER: ({ commit }, codename) => getClassesByBuilder(codename)
        .then(all => {
            all.items.forEach(c => {
                commit(Types.mutations.CLEAR_CLASSES_BY_CODENAME, { codename: c.system.codename });
                commit(Types.mutations.ADD_CLASS, c);
            });
        })
};

export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations
};
