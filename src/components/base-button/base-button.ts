import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component
export default class BaseButton extends Vue
{
    @Prop()
    variant: string;

    @Prop()
    ghost: boolean;

    @Prop()
    target: string;

    get buttonClasses(): any
    {
        return {
            'button': true,
            'button--ghost': this.ghost === true,
            ['button--' + this.variant]: this.variant !== '' || this.variant != null,
        };
    }
}