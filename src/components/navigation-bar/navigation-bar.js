import * as tslib_1 from "tslib";
import Vue from 'vue';
import Component from 'vue-class-component';
import { Emit } from 'vue-property-decorator';
var NavigationBar = /** @class */ (function (_super) {
    tslib_1.__extends(NavigationBar, _super);
    function NavigationBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavigationBar.prototype.showAbout = function () {
        // show about overlay
    };
    tslib_1.__decorate([
        Emit('show-about')
    ], NavigationBar.prototype, "showAbout", null);
    NavigationBar = tslib_1.__decorate([
        Component
    ], NavigationBar);
    return NavigationBar;
}(Vue));
export default NavigationBar;
//# sourceMappingURL=navigation-bar.js.map