import Vue from 'vue';
import Component from 'vue-class-component';
import { Emit } from 'vue-property-decorator';

@Component
export default class NavigationBar extends Vue
{
    @Emit('show-about')
    showAbout(): void
    {
        // show about overlay
    }
}