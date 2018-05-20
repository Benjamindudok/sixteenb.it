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
    interface: sixteenBit.IItem[];
    spritesPerPage: number;
}

export const sprites: Module<ISpritesState, IStoreState> = {

    state: {
        environment: [],
        characters: [],
        items: [],
        interface: [],
        spritesPerPage: 0
    },

    getters: getters,

    actions: actions,

    mutations: mutations
};

export default sprites;