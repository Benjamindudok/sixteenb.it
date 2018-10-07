import * as tslib_1 from "tslib";
import Vue from 'vue';
import Component from 'vue-class-component';
import { Watch } from 'vue-property-decorator';
import * as types from '../store/types';
var App = /** @class */ (function (_super) {
    tslib_1.__extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'app';
        _this.showNavigationOverlay = false;
        _this.showAboutOverlay = false;
        return _this;
    }
    App.prototype.mounted = function () {
        this.getSpriteData();
    };
    App.prototype.getSpriteData = function () {
        this.$store.dispatch(types.GET_SPRITES);
    };
    tslib_1.__decorate([
        Watch('route.params.categoryName')
    ], App.prototype, "getSpriteData", null);
    App = tslib_1.__decorate([
        Component
    ], App);
    return App;
}(Vue));
export default App;
//# sourceMappingURL=app.js.map