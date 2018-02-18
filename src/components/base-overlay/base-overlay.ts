import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Emit } from 'vue-property-decorator';

@Component
export default class BaseOverlay extends Vue
{
    @Prop()
    show: boolean;

    @Emit('close')
    close(): void
    {
        // close overlay
    }
}