import Vue from 'vue';
import Vuex, { Store } from 'vuex';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

import example, { IExampleGetters, IExampleState }  from './modules/example/';

Vue.use(Vuex);

export interface IStore<S> extends Store<S>
{
    getters: IStoreGetters;
}

export interface IStoreState
{
    example: IExampleState;
}

export interface IStoreGetters extends IExampleGetters
{

}

const store: IStore<IStoreState> = new Vuex.Store<IStoreState>({
    state: {
        example: {
            data: [],
        }
    },
    actions: actions,
    mutations: mutations,
    getters: getters,
    modules: {
        example
    }
});

export default store;
