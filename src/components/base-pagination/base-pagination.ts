import Vue from 'vue';
import Component from 'vue-class-component';
import { Emit, Prop } from 'vue-property-decorator';

@Component
export default class BasePagination extends Vue
{
    @Prop()
    pages: number;

    @Prop({ default: 1 })
    currentPage: number;

    visiblePageLimit: number = 7;

    @Emit('page-selected')
    onPageSelect(): void {
        // emit 'page-selected' event
    }

    get linkClassesForPage(): Function
    {
        return (pageNumber: number): any =>
        {
            return {
                'pagination__link': true,
                'pagination__link--isCurrent': pageNumber == this.currentPage || (!this.currentPage && pageNumber == 1)
            };
        };
    }

    get pagesInRange(): any
    {
        let inRange: number[] = this.pagesInArray(this.pages),
            start: number = Math.max(Math.floor(this.currentPage - (this.visiblePageLimit / 2)), 0),
            end: number = Math.ceil(start + this.visiblePageLimit);

        return inRange.splice(start, (end - start));
    }

    get pagesInArray(): Function
    {
        return (totalPages: number): number[] =>
        {
            let newArray: number[] = [];
            for (var i: number = 1; i < totalPages + 1; i++)
            {
                newArray.push(i);
            }
            return newArray;
        };
    }

    get pageUrl(): Function
    {
        return (page: number): any =>
        {
            return { query: Object.assign({}, this.$route.query, { page: page }) };
        };
    }
}