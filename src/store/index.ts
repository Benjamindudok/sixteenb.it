import Vue from 'vue';
import Vuex, { Store } from 'vuex';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

import sprites, { ISpritesGetters, ISpritesState }  from './modules/sprites/';

Vue.use(Vuex);

export interface IStore<S> extends Store<S>
{
    getters: IStoreGetters;
}

export interface IStoreState
{
    sprites: ISpritesState;
}

export interface IStoreGetters extends ISpritesGetters
{

}

const store: IStore<IStoreState> = new Vuex.Store<IStoreState>({
    state: {
        sprites: {
            environment: [],
            characters: [],
            items: [],
            ui: [],
            spritesPerPage: 0
        }
    },
    actions: actions,
    mutations: mutations,
    getters: getters,
    modules: {
        sprites
    }
});

export default store;
