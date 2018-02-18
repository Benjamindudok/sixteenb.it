import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Listing extends Vue
{
    get sprites(): string
    {
        if (this.$route.params.categoryName)
        {
            return this.$store.getters.spritesInCategory(this.$route.params.categoryName);
        }

        return this.$store.getters.sprites;
    }
}