import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component
export default class BaseButton extends Vue
{
    @Prop()
    variant: string;

    @Prop()
    target: string;

    get buttonClasses(): any
    {
        return {
            'button': true,
            'button--ghost': this.variant === 'ghost',
            'button--blue': this.variant === 'primary',
            'button--secondary': this.variant === 'secondary',
            'button--warning': this.variant === 'warning'
        };
    }
}