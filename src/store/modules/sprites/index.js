import getters from './getters';
import actions from './actions';
import mutations from './mutations';
export var sprites = {
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
//# sourceMappingURL=index.js.map