import * as tslib_1 from "tslib";
import Vue from 'vue';
import Component from 'vue-class-component';
var Sprite = /** @class */ (function (_super) {
    tslib_1.__extends(Sprite, _super);
    function Sprite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Sprite.prototype, "sprite", {
        get: function () {
            if (this.$route.params.spriteID) {
                return this.$store.getters.spriteWithID(this.$route.params.spriteID);
            }
            return this.$store.getters.sprites;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sprite.prototype, "previewStyle", {
        get: function () {
            return {
                'background-image': 'url(' + this.sprite.image + ')'
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sprite.prototype, "previewAlt", {
        get: function () {
            return 'This is a preview of ' + this.sprite.name + '.png';
        },
        enumerable: true,
        configurable: true
    });
    Sprite = tslib_1.__decorate([
        Component
    ], Sprite);
    return Sprite;
}(Vue));
export default Sprite;
//# sourceMappingURL=sprite.js.map