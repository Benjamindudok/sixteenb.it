import * as tslib_1 from "tslib";
import Vue from 'vue';
import Component from 'vue-class-component';
import { Emit, Prop } from 'vue-property-decorator';
var NavigationOverlay = /** @class */ (function (_super) {
    tslib_1.__extends(NavigationOverlay, _super);
    function NavigationOverlay() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavigationOverlay.prototype.close = function () {
        // close overlay
    };
    NavigationOverlay.prototype.showAbout = function () {
        this.close();
    };
    tslib_1.__decorate([
        Prop()
    ], NavigationOverlay.prototype, "show", void 0);
    tslib_1.__decorate([
        Emit('close')
    ], NavigationOverlay.prototype, "close", null);
    tslib_1.__decorate([
        Emit('show-about')
    ], NavigationOverlay.prototype, "showAbout", null);
    NavigationOverlay = tslib_1.__decorate([
        Component
    ], NavigationOverlay);
    return NavigationOverlay;
}(Vue));
export default NavigationOverlay;
//# sourceMappingURL=navigation-overlay.js.map