var _a;
import * as types from 'src/store/types';
export var mutations = (_a = {},
    _a[types.UPDATE_SPRITES] = function (state, data) {
        state.environment = data.environment || [];
        state.items = data.items || [];
        state.characters = data.characters || [];
        state.interface = data.interface || [];
    },
    _a[types.UPDATE_PAGINATION] = function (state) {
        state.spritesPerPage = 30;
    },
    _a);
export default mutations;
//# sourceMappingURL=mutations.js.map