import { Module } from 'vuex';
import { IStoreState } from 'src/store';

import getters from './getters';
import actions from './actions';
import mutations from './mutations';

export { IExampleGetters } from './getters';

export interface IExampleState {
    data: any;
}

export const sprites: Module<IExampleState, IStoreState> = {

    state: {
        data: []
    },

    getters: getters,

    actions: actions,

    mutations: mutations
};

export default sprites;