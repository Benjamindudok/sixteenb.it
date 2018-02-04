import { GetterTree } from 'vuex';
import { IStoreState } from 'src/store';
import { ISpritesState } from 'src/store/modules/sprites';

export interface ISpritesGetters
{
    sprites: sixteenBit.IItem[];
    spritesInCategory: sixteenBit.IItem[];
}

export const getters: GetterTree<ISpritesState, IStoreState> = {
    sprites( state: ISpritesState ): sixteenBit.IItem[]
    {
        return state.characters
            .concat(state.environment)
            .concat(state.ui)
            .concat(state.items);
    },

    spritesInCategory( state: ISpritesState ): Function
    {
        return (categoryName: string) => {
            return state[categoryName];
        };
    }
};

export default getters;