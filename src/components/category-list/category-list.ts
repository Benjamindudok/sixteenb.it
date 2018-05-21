import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component
export default class CategoryList extends Vue
{
    get categories(): any
    {
        return ['', 'characters', 'interface', 'environment', 'items'];
    }

    get displayNameForCategory(): Function
    {
        return (categorySlug: string) => {
            return categorySlug.length > 0
                ? categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1)
                : 'All';
        };
    }

    get completeQuery(): Function {
        return (categorySlug: string) => {
            let completeQuery: any = Object.assign({}, this.$route.query);

            if (categorySlug == '') {
                delete completeQuery.category;
            }
            else
            {
                completeQuery.category = categorySlug;
            }


            return completeQuery;
        };
    }
}