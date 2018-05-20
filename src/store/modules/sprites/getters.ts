import { GetterTree } from 'vuex';
import { IStoreState } from 'src/store';
import { ISpritesState } from 'src/store/modules/sprites';

export interface ISpritesGetters
{
    sprites: sixteenBit.IItem[];
    spritesInCategory: sixteenBit.IItem[];
    spriteWithID: sixteenBit.IItem;
    spritesPerPage: number;
    searchForSprite: sixteenBit.IItem[];
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
                return getPagedSprites(sprites, state.spritesPerPage, page);
            }

            return sprites;
        };
    },

    spritesInCategory( state: ISpritesState ): Function
    {
        return (categoryName: string, page?: number) => {
            let sprites: sixteenBit.IItem[] = state[categoryName].slice() || [];

            if (page) {
                return getPagedSprites(sprites, state.spritesPerPage, page);
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

    searchForSprite(state: ISpritesState): Function
    {
        return (keywords: any, page?: number): sixteenBit.IItem[] =>
        {
            let sprites: sixteenBit.IItem[] = state.characters
                .concat(state.environment)
                .concat(state.interface)
                .concat(state.items);

            let results: sixteenBit.IItem[] = [],
                _keywords: string[] = keywords.split(' ');

            _keywords.forEach((keyword) => {
                results = results
                    .concat(sprites.filter((s) => s.name.toLowerCase().indexOf(keyword.toLowerCase()) != -1))
                    .concat(sprites.filter((s) =>
                    {
                        let tags: string[] = s.tags.join('|').toLowerCase().split('|');
                        return tags.indexOf(keyword.toLowerCase()) != -1;
                    }));
            });

            if (page) {
                return getPagedSprites(results, state.spritesPerPage, page);
            }

            return results;
        };
    }
};

function getPagedSprites(sprites: sixteenBit.IItem[], spritesPerPage: number, page: number): sixteenBit.IItem[]
{
    let start: number = spritesPerPage * (page - 1);
    return (sprites) ? sprites.splice(start, spritesPerPage) : [];
}

export default getters;