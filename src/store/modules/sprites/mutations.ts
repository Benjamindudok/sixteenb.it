import { MutationTree } from 'vuex';
import { ISpritesState } from 'src/store/modules/sprites';
import * as types from 'src/store/types';
import { UPDATE_PAGINATION } from '../../types';

export const mutations: MutationTree<ISpritesState> = {
    [types.UPDATE_SPRITES](state: ISpritesState, data: sixteenBit.IContent): void {
        state.environment = data.environment || [];
        state.items = data.items || [];
        state.characters = data.characters || [];
        state.interface = data.interface || [];
    },

    [types.UPDATE_PAGINATION](state: ISpritesState): void {
        state.spritesPerPage = 30;
    }
};

export default mutations;