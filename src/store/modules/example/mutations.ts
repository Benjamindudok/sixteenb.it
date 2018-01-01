import { MutationTree } from 'vuex';
import { ISpritesState } from 'src/store/modules/example';
import * as types from 'src/store/types';

export const mutations: MutationTree<ISpritesState> = {
    [types.UPDATE_SPRITES](state: ISpritesState, data: sixteenBit.IContent): void {
        state.environment = data.environment || [];
        state.items = data.items || [];
        state.characters = data.characters || [];
        state.ui = data.ui || [];
    }
};

export default mutations;