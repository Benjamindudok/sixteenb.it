import Vue from 'vue';
import Component from 'vue-class-component';
import { Watch } from 'vue-property-decorator';
import * as types from '../store/types';
import ContentfulService from '../services/contentfulService';

@Component
export default class App extends Vue
{
    name: string = 'app';
    showNavigationOverlay: boolean = false;
    showAboutOverlay: boolean = false;

    mounted(): void
    {
        this.getSpriteData();

        ContentfulService.getContentModel();
        ContentfulService.getEntries();
    }

    @Watch('route.params.categoryName')
    getSpriteData(): void
    {
        this.$store.dispatch(types.GET_SPRITES);
    }
}