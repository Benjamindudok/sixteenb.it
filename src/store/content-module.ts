import { Entry } from 'contentful';
import ContentfulService from 'src/services/contentful-service';
import { Module, VuexModule, Mutation, Action, getModule, MutationAction } from 'vuex-module-decorators';
import store from 'src/store';


@Module({ dynamic: true, name: 'content-module', store })
export default class Content extends VuexModule
{
    private _sprites: Entry<any>[] = [];

    get sprites(): Entry<any>[]
    {
        return this._sprites;
    }

    @Action({ commit: 'setSpritesMutation' })
    public getSpritesAction(): Promise<any>
    {
        return ContentfulService.getSprites()
            .then(sprites => sprites);
    }

    @Mutation
    private setSpritesMutation(sprites: Entry<any>[]): void
    {
        this._sprites = sprites;
    }
}

export const ContentModule: Content = getModule(Content);