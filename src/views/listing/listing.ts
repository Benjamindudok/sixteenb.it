import { ContentModule } from '@/store/content-module';
import { Entry } from 'contentful';
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

    onPageSelected(number: any): void {
        this.$router.push({ query: Object.assign({}, this.$route.query, { page: number }) });
    }

    search(): void {
        // todo: make sure you can search and filter by category at the same time
        // todo: delete search query string if empty
        this.$router.push({ query: Object.assign({}, { search: this.searchKeyword }) });
    }

    get sprites(): Entry<any>[]
    {
        return ContentModule.sprites;
    }

    get amountOfSprites(): number {
        return 40;
    }

    get amountOfSpritesPerPage(): number
    {
        return 20;
    }

    get amountOfPages(): number
    {
        return 2;
    }
}