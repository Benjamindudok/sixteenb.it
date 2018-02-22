import Vue from 'vue';
import Component from 'vue-class-component';
import { Emit, Prop } from 'vue-property-decorator';

@Component
export default class AboutOverlay extends Vue
{
    @Prop()
    show: boolean;

    @Emit('close')
    close(): void
    {
        // close overlay
    }
}