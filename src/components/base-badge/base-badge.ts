import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component
export default class BaseBadge extends Vue
{
    @Prop()
    variant: string;

    @Prop()
    ghost: boolean;

    get badgeClasses(): any
    {
        return {
            'badge': true,
            'badge--ghost': this.ghost === true,
            ['badge--' + this.variant]: this.variant !== '' || this.variant != null,
        };
    }
}