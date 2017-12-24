import { MutationTree } from 'vuex';
import { IExampleState } from 'src/store/modules/example';
import * as types from 'src/store/types';

export const mutations: MutationTree<IExampleState> = {
    [types.UPDATE_DATA](state: IExampleState, data: any): void {
        state.data = data;
    }
};

export default mutations;