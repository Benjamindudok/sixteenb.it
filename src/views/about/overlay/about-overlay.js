import * as tslib_1 from "tslib";
import Vue from 'vue';
import Component from 'vue-class-component';
import { Emit, Prop } from 'vue-property-decorator';
var AboutOverlay = /** @class */ (function (_super) {
    tslib_1.__extends(AboutOverlay, _super);
    function AboutOverlay() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AboutOverlay.prototype.close = function () {
        // close overlay
    };
    tslib_1.__decorate([
        Prop()
    ], AboutOverlay.prototype, "show", void 0);
    tslib_1.__decorate([
        Emit('close')
    ], AboutOverlay.prototype, "close", null);
    AboutOverlay = tslib_1.__decorate([
        Component
    ], AboutOverlay);
    return AboutOverlay;
}(Vue));
export default AboutOverlay;
//# sourceMappingURL=about-overlay.js.map