import * as tslib_1 from "tslib";
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
var SpriteCard = /** @class */ (function (_super) {
    tslib_1.__extends(SpriteCard, _super);
    function SpriteCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SpriteCard.prototype, "randomColorId", {
        get: function () {
            return Math.floor(Math.random() * 3 + 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpriteCard.prototype, "cssClasses", {
        get: function () {
            var _a;
            return _a = {
                    'sprite-card': true,
                    'sprite-list__item': true
                },
                _a['sprite-list__item--colspan-' + this.columns] = true,
                _a['sprite-list__item--rowspan-' + this.rows] = true,
                _a;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Prop()
    ], SpriteCard.prototype, "uuid", void 0);
    tslib_1.__decorate([
        Prop()
    ], SpriteCard.prototype, "name", void 0);
    tslib_1.__decorate([
        Prop()
    ], SpriteCard.prototype, "slug", void 0);
    tslib_1.__decorate([
        Prop()
    ], SpriteCard.prototype, "tags", void 0);
    tslib_1.__decorate([
        Prop()
    ], SpriteCard.prototype, "source", void 0);
    tslib_1.__decorate([
        Prop({ default: 1 })
    ], SpriteCard.prototype, "rows", void 0);
    tslib_1.__decorate([
        Prop({ default: 1 })
    ], SpriteCard.prototype, "columns", void 0);
    SpriteCard = tslib_1.__decorate([
        Component
    ], SpriteCard);
    return SpriteCard;
}(Vue));
export default SpriteCard;
//# sourceMappingURL=sprite-card.js.map