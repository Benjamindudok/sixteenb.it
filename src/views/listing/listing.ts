import Vue from 'vue';
import Component from 'vue-class-component';
import { Watch } from 'vue-property-decorator';

@Component
export default class Listing extends Vue
{
    currentPage: number = 1;
    itemsPerPage: number = 30;

    mounted(): void {
        this.onQueryChange();
    }

    @Watch('$route.query')
    onQueryChange(): void {
        this.currentPage = parseInt(this.$route.query.page) || 1;
    }

    get sprites(): string
    {
        if (this.$route.params.categoryName)
        {
            return this.$store.getters.spritesInCategory(this.$route.params.categoryName, this.currentPage);
        }

        return this.$store.getters.sprites(this.currentPage);
    }

    get amountOfSprites(): number {
        if (this.$route.params.categoryName)
        {
            return this.$store.getters.spritesInCategory(this.$route.params.categoryName).length;
        }

        return this.$store.getters.sprites().length;
    }

    get amountOfSpritesPerPage(): number
    {
        return this.$store.getters.itemsPerPage;
    }

    get amountOfPages(): number
    {
        return this.amountOfSprites / this.amountOfSpritesPerPage;
    }
}