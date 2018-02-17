import Vue from 'vue';
import Component from 'vue-class-component';
import { Watch } from 'vue-property-decorator';
import * as types from 'src/store/types';

@Component
export default class Sprite extends Vue
{
    get sprite(): string
    {
        if (this.$route.params.spriteID)
        {
            return this.$store.getters.spriteWithID(this.$route.params.spriteID);
        }

        return this.$store.getters.sprites;
    }
}