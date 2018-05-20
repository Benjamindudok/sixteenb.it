import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component
export default class SpriteList extends Vue
{
    @Prop({ default: () => { return []; } })
    sprites: sixteenBit.IItem[];

    @Prop()
    selectedTags: sixteenBit.Tags[];

    get filteredSprites(): sixteenBit.IItem[]
    {
            return this.sprites;

    }
}