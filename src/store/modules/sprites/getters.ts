import { GetterTree } from 'vuex';
import { IStoreState } from 'src/store';
import { ISpritesState } from 'src/store/modules/sprites';

export interface ISpritesGetters
{
    sprites: sixteenBit.IItem[];
    spritesInCategory: sixteenBit.IItem[];
    spriteWithID: sixteenBit.IItem;
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
    },

    spriteWithID( state: ISpritesState ): Function
    {
        let sprites: sixteenBit.IItem[] = state.characters
            .concat(state.environment)
            .concat(state.ui)
            .concat(state.items);

        return (spriteID: string) => {
            return sprites.filter((s: sixteenBit.IItem) => s.uuid === spriteID)[0];
        };
    }
};

export default getters;