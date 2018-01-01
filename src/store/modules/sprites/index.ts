import { Module } from 'vuex';
import { IStoreState } from 'src/store';

import getters from './getters';
import actions from './actions';
import mutations from './mutations';

export { ISpritesGetters } from './getters';

export interface ISpritesState {
    environment: sixteenBit.IItem[];
    characters: sixteenBit.IItem[];
    items: sixteenBit.IItem[];
    ui: sixteenBit.IItem[];
}

export const sprites: Module<ISpritesState, IStoreState> = {

    state: {
        environment: [],
        characters: [],
        items: [],
        ui: []
    },

    getters: getters,

    actions: actions,

    mutations: mutations
};

export default sprites;