import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component
export default class SpriteCard extends Vue
{
    @Prop()
    uuid: string;

    @Prop()
    name: string;

    @Prop()
    slug: string;

    @Prop()
    tags: sixteenBit.Tags[];

    @Prop()
    source: string;

    get randomColorId(): number {
        return Math.floor(Math.random() * 3 + 0);
    }
}