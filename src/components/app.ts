import { ContentModule } from '@/store/content-module';
import Vue from 'vue';
import Component from 'vue-class-component';
import { Watch } from 'vue-property-decorator';

@Component
export default class App extends Vue
{
    name: string = 'app';
    showNavigationOverlay: boolean = false;
    showAboutOverlay: boolean = false;

    mounted(): void
    {
        this.getEntries();
    }

    @Watch('route.params.categoryName')
    getEntries(): void
    {
        ContentModule.getSpritesAction();
        ContentModule.getPagesAction();
    }
}