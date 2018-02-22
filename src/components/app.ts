import Vue from 'vue';
import Component from 'vue-class-component';
import { Watch } from 'vue-property-decorator';
import * as types from '../store/types';

@Component
export default class App extends Vue
{
    name: string = 'app';
    showNavigationOverlay: boolean = false;
    showAboutOverlay: boolean = false;

    mounted(): void
    {
        this.getSpriteData();
    }

    @Watch('route.params.categoryName')
    getSpriteData(): void
    {
        this.$store.dispatch(types.GET_SPRITES);
    }
}