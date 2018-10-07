import * as tslib_1 from "tslib";
import Vue from 'vue';
import Component from 'vue-class-component';
import { Watch } from 'vue-property-decorator';
var Listing = /** @class */ (function (_super) {
    tslib_1.__extends(Listing, _super);
    function Listing() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentPage = 1;
        _this.itemsPerPage = 30;
        _this.searchKeyword = '';
        return _this;
    }
    Listing.prototype.mounted = function () {
        this.onQueryChange();
    };
    Listing.prototype.onQueryChange = function () {
        this.currentPage = parseInt(this.$route.query.page) || 1;
    };
    Listing.prototype.onSearch = function () {
        this.searchKeyword = this.$route.query.search || '';
        this.currentPage = 1;
    };
    Listing.prototype.search = function () {
        this.$router.push({ query: Object.assign({}, { search: this.searchKeyword }) });
    };
    Object.defineProperty(Listing.prototype, "sprites", {
        get: function () {
            if (this.$route.query.search) {
                return this.$store.getters.searchForSprite(this.$route.query.search, this.currentPage);
            }
            else if (this.$route.params.categoryName) {
                return this.$store.getters.spritesInCategory(this.$route.params.categoryName, this.currentPage);
            }
            return this.$store.getters.sprites(this.currentPage);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Listing.prototype, "amountOfSprites", {
        get: function () {
            if (this.$route.query.search) {
                return this.$store.getters.searchForSprite(this.$route.query.search).length;
            }
            else if (this.$route.params.categoryName) {
                return this.$store.getters.spritesInCategory(this.$route.params.categoryName).length;
            }
            return this.$store.getters.sprites().length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Listing.prototype, "amountOfSpritesPerPage", {
        get: function () {
            return this.$store.getters.itemsPerPage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Listing.prototype, "amountOfPages", {
        get: function () {
            return this.amountOfSprites / this.amountOfSpritesPerPage;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Watch('$route.query')
    ], Listing.prototype, "onQueryChange", null);
    tslib_1.__decorate([
        Watch('$route.search')
    ], Listing.prototype, "onSearch", null);
    Listing = tslib_1.__decorate([
        Component
    ], Listing);
    return Listing;
}(Vue));
export default Listing;
//# sourceMappingURL=listing.js.map