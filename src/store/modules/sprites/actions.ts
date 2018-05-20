import { ActionContext, ActionTree } from 'vuex';
import { IStoreState } from 'src/store';
import { ISpritesState } from 'src/store/modules/sprites';
import * as types from 'src/store/types';
import { DataService } from 'src/services/';

export const actions: ActionTree<ISpritesState,  IStoreState> = {
    [types.GET_SPRITES](context: ActionContext<ISpritesState, IStoreState>): Promise<void>
    {
        return new Promise<void>((resolve, reject) =>
        {
            DataService.getData()
                .then((data: sixteenBit.IContent) =>
                {
                    context.commit(types.UPDATE_SPRITES, data);
                    context.commit(types.UPDATE_PAGINATION);

                    resolve(undefined);
                }).catch((error) =>
                {
                    reject(error);
                });
        });
    }
};

export default actions;