import Vue from 'vue';
import Vuex from 'vuex';
import actions from './store/actions';
import getters from './store/getters';
import mutations from './store/mutations';
import sprites from './store/modules/sprites/';
Vue.use(Vuex);
var store = new Vuex.Store({
    state: {
        sprites: {
            environment: [],
            characters: [],
            items: [],
            interface: [],
            spritesPerPage: 0
        }
    },
    actions: actions,
    mutations: mutations,
    getters: getters,
    modules: {
        sprites: sprites
    }
});
export default store;
//# sourceMappingURL=store.js.map