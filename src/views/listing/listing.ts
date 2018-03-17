import Vue from 'vue';
import Component from 'vue-class-component';
import { Watch } from 'vue-property-decorator';

@Component
export default class Listing extends Vue
{
    currentPage: number = 1;
    itemsPerPage: number = 30;

    searchKeyword: string = '';

    mounted(): void {
        this.onQueryChange();
    }

    @Watch('$route.query')
    onQueryChange(): void {
        this.currentPage = parseInt(this.$route.query.page) || 1;
    }

    @Watch('$route.search')
    onSearch(): void {
        this.searchKeyword = this.$route.query.search || '';
        this.currentPage = 1;
    }

    search(): void {
        this.$router.push({ query: Object.assign({}, { search: this.searchKeyword }) });
    }

    get sprites(): string
    {
        if (this.$route.query.search)
        {
            return this.$store.getters.searchForSprite(this.$route.query.search, this.currentPage);
        }
        else if (this.$route.params.categoryName)
        {
            return this.$store.getters.spritesInCategory(this.$route.params.categoryName, this.currentPage);
        }

        return this.$store.getters.sprites(this.currentPage);
    }

    get amountOfSprites(): number {
        if (this.$route.query.search)
        {
            return this.$store.getters.searchForSprite(this.$route.query.search).length;
        }
        else if (this.$route.params.categoryName)
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