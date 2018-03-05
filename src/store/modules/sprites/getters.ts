import { GetterTree } from 'vuex';
import { IStoreState } from 'src/store';
import { ISpritesState } from 'src/store/modules/sprites';

export interface ISpritesGetters
{
    sprites: sixteenBit.IItem[];
    spritesInCategory: sixteenBit.IItem[];
    spriteWithID: sixteenBit.IItem;
    spritesPerPage: number;
}

export const getters: GetterTree<ISpritesState, IStoreState> = {
    sprites( state: ISpritesState ): Function
    {
        return (page?: number) => {
            let sprites: sixteenBit.IItem[] = state.characters
                .concat(state.environment)
                .concat(state.ui)
                .concat(state.items);

            if (page) {
                let start: number = state.spritesPerPage * (page - 1),
                    pages: number = sprites.length / state.spritesPerPage;

                if (sprites) {
                    return sprites.splice(start, state.spritesPerPage);
                }
            }

            return sprites;
        };
    },

    spritesInCategory( state: ISpritesState ): Function
    {
        return (categoryName: string, page?: number) => {
            let sprites: sixteenBit.IItem[] = state[categoryName];

            if (page) {
                let start: number = state.spritesPerPage * page;

                if (sprites) {
                    return sprites.splice(start, state.spritesPerPage);
                }
            }

            return sprites;
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
    },

    itemsPerPage(state: ISpritesState): number {
        return state.spritesPerPage;
    }
};

export default getters;