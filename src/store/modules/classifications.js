import { getClassifications } from '@/dto/data';

export const Types = {
    getters: {
        GET_ALL_CLASSIFICATIONS: 'GET_ALL_CLASSIFICATIONS',
        GET_CLASSIFICATION_BY_NAME: 'GET_CLASSIFICATION_BY_NAME'
    },
    mutations: {
        ADD_CLASSIFICATION: 'ADD_CLASSIFICATION',
        CLEAR_CLASSIFICATIONS: 'CLEAR_CLASSIFICATIONS'
    },
    actions: {
        LOAD_CLASSIFICATIONS: 'LOAD_CLASSIFICATIONS'
    }
};

const state = {
    allClassifications: []
};

const getters = {
    GET_ALL_CLASSIFICATIONS: state => state.allClassifications,
    GET_CLASSIFICATION_BY_NAME: state => name => {
        return state.allClassifications.find(s => s.name === name);
    }
};

const mutations = {
    CLEAR_CLASSIFICATIONS: (state) => { state.allClassifications = []; },
    ADD_CLASSIFICATION: (state, type) => { state.allClassifications.push(type); }
};

const actions = {
    LOAD_CLASSIFICATIONS: ({ commit }) => getClassifications()
        .then(all => {
            commit(Types.mutations.CLEAR_CLASSIFICATIONS);
            all.taxonomy.terms.forEach(c => commit(Types.mutations.ADD_CLASSIFICATION, c));
        })
};

export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations
};
