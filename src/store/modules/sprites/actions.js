var _a;
import * as types from 'src/store/types';
import { DataService } from 'src/services/';
export var actions = (_a = {},
    _a[types.GET_SPRITES] = function (context) {
        return new Promise(function (resolve, reject) {
            DataService.getData()
                .then(function (data) {
                context.commit(types.UPDATE_SPRITES, data);
                context.commit(types.UPDATE_PAGINATION);
                resolve(undefined);
            }).catch(function (error) {
                reject(error);
            });
        });
    },
    _a);
export default actions;
//# sourceMappingURL=actions.js.map