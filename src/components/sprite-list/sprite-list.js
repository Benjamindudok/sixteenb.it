import * as tslib_1 from "tslib";
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
var SpriteList = /** @class */ (function (_super) {
    tslib_1.__extends(SpriteList, _super);
    function SpriteList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SpriteList.prototype, "filteredSprites", {
        get: function () {
            return this.sprites;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Prop({ default: function () { return []; } })
    ], SpriteList.prototype, "sprites", void 0);
    tslib_1.__decorate([
        Prop()
    ], SpriteList.prototype, "selectedTags", void 0);
    SpriteList = tslib_1.__decorate([
        Component
    ], SpriteList);
    return SpriteList;
}(Vue));
export default SpriteList;
//# sourceMappingURL=sprite-list.js.map