import { Entry } from 'contentful';
import ContentfulService from 'src/services/contentful-service';
import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators';
import store from 'src/store';


@Module({ dynamic: true, name: 'content-module', store })
export default class Content extends VuexModule
{
    private _contentModel!: any;

    get contentModel(): any
    {
        return this._contentModel;
    }

    private _entries!: Entry<any>[];

    get entries(): any
    {
        return this._entries;
    }

    private _sprites!: Entry<any>[];

    get sprites(): Entry<any>[]
    {
        return this._sprites;
    }

    @Action({commit: 'setContentModelMutation'})
    public getContentModelAction(): Promise<void> | void
    {
        return ContentfulService.getContentModel()
            .then((contentModel: any) => contentModel);
    }

    @Action({commit: 'setSpritesMutation'})
    public getSpritesAction(): Promise<void> | void
    {
        return ContentfulService.getSprites()
            .then((entries: any) => entries);
    }

    @Mutation
    private setContentModelMutation(contentModel: any): void
    {
        this._contentModel = contentModel;
    }

    @Mutation
    private setSpritesMutation(sprites: Entry<any>[]): void
    {
        this._sprites = sprites;
    }
}

export const ContentModule: Content = getModule(Content);