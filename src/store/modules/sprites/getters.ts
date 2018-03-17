import { GetterTree } from 'vuex';
import { IStoreState } from 'src/store';
import { ISpritesState } from 'src/store/modules/sprites';

export interface ISpritesGetters
{
    sprites: sixteenBit.IItem[];
    spritesInCategory: sixteenBit.IItem[];
    spriteWithID: sixteenBit.IItem;
    spritesPerPage: number;
    searchForSpriteWithTag: sixteenBit.IItem[];
}

export const getters: GetterTree<ISpritesState, IStoreState> = {
    sprites( state: ISpritesState ): Function
    {
        return (page?: number) =>
        {
            let sprites: sixteenBit.IItem[] = state.characters
                .concat(state.environment)
                .concat(state.interface)
                .concat(state.items);

            if (page) {
                return returnPagedSprites(sprites, state.spritesPerPage, page);
            }

            return sprites;
        };
    },

    spritesInCategory( state: ISpritesState ): Function
    {
        return (categoryName: string, page?: number) => {
            let sprites: sixteenBit.IItem[] = state[categoryName].slice() || [];

            if (page) {
                return returnPagedSprites(sprites, state.spritesPerPage, page);
            }

            return sprites;
        };
    },

    spriteWithID( state: ISpritesState ): Function
    {
        let sprites: sixteenBit.IItem[] = state.characters
            .concat(state.environment)
            .concat(state.interface)
            .concat(state.items);

        return (spriteID: string) =>
        {
            return sprites.filter((s: sixteenBit.IItem) => s.uuid === spriteID)[0];
        };
    },

    itemsPerPage(state: ISpritesState): number
    {
        return state.spritesPerPage;
    },

    searchForSpriteWithTag(state: ISpritesState): Function
    {
        return (tag: any, page?: number): sixteenBit.IItem[] =>
        {
            let sprites: sixteenBit.IItem[] = state.characters
                .concat(state.environment)
                .concat(state.interface)
                .concat(state.items);

            sprites = sprites.filter((s: sixteenBit.IItem) =>
            {
                let tags: string[] = s.tags.join('|').toLowerCase().split('|');
                return (tags.indexOf(tag.toLowerCase()) > -1);
            });

            if (page) {
                return returnPagedSprites(sprites, state.spritesPerPage, page);
            }

            return sprites;
        };
    }
};

function returnPagedSprites(sprites: sixteenBit.IItem[], spritesPerPage: number, page: number): sixteenBit.IItem[]
{
    let start: number = spritesPerPage * (page - 1);
    return (sprites) ? sprites.splice(start, spritesPerPage) : [];
}

export default getters;