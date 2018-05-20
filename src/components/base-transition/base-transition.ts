import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component
export default class BaseTransition extends Vue
{
    @Prop({ default: 'fade' })
    name: string;

    @Prop({ default: false })
    appear: boolean;

    @Prop({ default: 'out-in' })
    mode: string;

    @Prop({ default: false })
    group: boolean;
}