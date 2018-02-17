import Vue from 'vue';
import Component from 'vue-class-component';
import { Watch } from 'vue-property-decorator';
import * as types from 'src/store/types';

@Component
export default class Listing extends Vue
{
    mounted(): void
    {
        this.getSpriteData();
    }

    @Watch('route.params.categoryName')
    getSpriteData(): void
    {
        this.$store.dispatch(types.GET_SPRITES);
    }

    get sprites(): string
    {
        if (this.$route.params.categoryName)
        {
            return this.$store.getters.spritesInCategory(this.$route.params.categoryName);
        }

        return this.$store.getters.sprites;
    }
}