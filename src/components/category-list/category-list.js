import * as tslib_1 from "tslib";
import Vue from 'vue';
import Component from 'vue-class-component';
var CategoryList = /** @class */ (function (_super) {
    tslib_1.__extends(CategoryList, _super);
    function CategoryList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CategoryList.prototype, "categories", {
        get: function () {
            return ['', 'characters', 'interface', 'environment', 'items'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryList.prototype, "displayNameForCategory", {
        get: function () {
            return function (categorySlug) {
                return categorySlug.length > 0
                    ? categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1)
                    : 'All';
            };
        },
        enumerable: true,
        configurable: true
    });
    CategoryList = tslib_1.__decorate([
        Component
    ], CategoryList);
    return CategoryList;
}(Vue));
export default CategoryList;
//# sourceMappingURL=category-list.js.map