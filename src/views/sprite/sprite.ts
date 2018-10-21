import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Sprite extends Vue
{
    get sprite(): sixteenBit.IItem
    {
        if (this.$route.params.spriteID)
        {
            return this.$store.getters.spriteWithID(this.$route.params.spriteID);
        }

        return this.$store.getters.sprites;
    }

    get previewStyle(): any {
        return {
            'background-image': 'url(' + this.sprite.image + ')'
        };
    }

    get previewAlt(): string {
        return 'This is a preview of ' + this.sprite.name + '.png';
    }
}