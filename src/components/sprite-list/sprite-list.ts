import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component
export default class SpriteList extends Vue
{
    @Prop({ default: () => { return []; } })
    sprites!: any[];

    @Prop()
    selectedTags!: any[];

    get filteredSprites(): any[]
    {
            return this.sprites;

    }
}