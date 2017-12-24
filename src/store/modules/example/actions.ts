import { ActionContext, ActionTree } from 'vuex';
import { IStoreState } from 'src/store';
import { IExampleState } from 'src/store/modules/example';
import * as types from 'src/store/types';
import { DataService } from 'src/services/';

export const actions: ActionTree<IExampleState,  IStoreState> = {
    [types.GET_DATA](context: ActionContext<IExampleState, IStoreState>): Promise<void>
    {
        return new Promise<void>((resolve, reject) =>
        {
            DataService.getData()
                .then((data: any) =>
                {
                    context.commit(types.UPDATE_DATA, data);
                    resolve(undefined);
                }).catch((error) =>
                {
                    reject(error);
                });
        });
    }
};

export default actions;