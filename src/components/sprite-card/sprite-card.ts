import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component
export default class SpriteCard extends Vue
{
    @Prop()
    uuid!: string;

    @Prop()
    name!: string;

    @Prop()
    slug!: string;

    @Prop()
    tags!: sixteenBit.Tags[];

    @Prop()
    source!: string;

    @Prop({default: 1})
    rows!: number;

    @Prop({default: 1})
    columns!: number;

    get randomColorId(): number {
        return Math.floor(Math.random() * 3 + 0);
    }

    get cssClasses(): any {
        return {
            'sprite-card': true,
            'sprite-list__item': true,
            ['sprite-list__item--colspan-' + this.columns]: true,
            ['sprite-list__item--rowspan-' + this.rows]: true
        };
    }
}