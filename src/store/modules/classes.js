import { getClassesByClassification } from '@/dto/data';

export const Types = {
    getters: {
        GET_ALL_CLASSES: 'GET_ALL_CLASSES',
        GET_CLASSES_IN_CLASSIFICATION: 'GET_CLASSES_IN_CLASSIFICATION'
    },
    mutations: {
        CLEAR_CLASSES: 'CLEAR_CLASSES',
        ADD_CLASS: 'ADD_CLASS'
    },
    actions: {
        LOAD_CLASSES_BY_CLASSIFICATION: 'LOAD_CLASSES_BY_CLASSIFICATION'
    }
};

const state = {
    allClasses: []
};

const getters = {
    GET_ALL_CLASSES: state => state.allClasses,
    GET_CLASSES_IN_CLASSIFICATION: state => codename => state.allClasses.filter(c => c.classification.value.map(cv => cv.codename).indexOf(codename) !== -1)
};

const mutations = {
    CLEAR_CLASSES: (state, { codename }) => {
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
    ADD_CLASS: (state, boatClass) => { state.allClasses.push(boatClass); }
};

const actions = {
    LOAD_CLASSES_BY_CLASSIFICATION: ({ commit }, codename) => getClassesByClassification(codename)
        .then(all => {
            commit(Types.mutations.CLEAR_CLASSES, { codename });
            all.items.forEach(c => commit(Types.mutations.ADD_CLASS, c));
        })
};

export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations
};
