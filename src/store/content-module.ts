import { IPageType, ISpriteType } from '@/typings/sixteenbit';
import { Entry } from 'contentful';
import ContentfulService from 'src/services/contentful-service';
import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators';
import store from 'src/store';

@Module({ dynamic: true, name: 'content-module', store })
export default class Content extends VuexModule
{
    private _sprites: Entry<ISpriteType>[] = [];

    get sprites(): Entry<ISpriteType>[]
    {
        return this._sprites;
    }

    private _pages: Entry<IPageType>[] = [];

    get pages(): Entry<IPageType>[]
    {
        return this._pages;
    }

    private _currentPageId!: string;
    private _currentPage!: Entry<IPageType>;

    get currentPage(): Entry<IPageType>
    {
        return this._currentPage;
    }

    @Action({ commit: 'setPagesMutation' })
    public getPagesAction(): Promise<Entry<IPageType>[]>
    {
        return ContentfulService.getPages()
            .then(pages => pages);
    }

    @Mutation
    private setPagesMutation(sprites: Entry<IPageType>[]): void
    {
        this._pages = sprites;
    }

    @Action({ commit: 'setSpritesMutation' })
    public getSpritesAction(): Promise<Entry<ISpriteType>[]>
    {
        return ContentfulService.getSprites()
            .then(sprites => sprites);
    }

    @Mutation
    private setSpritesMutation(sprites: Entry<ISpriteType>[]): void
    {
        this._sprites = sprites;
    }
}

export const ContentModule: Content = getModule(Content);