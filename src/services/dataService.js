import * as tslib_1 from "tslib";
import ApiService from './apiService';
var DataService = /** @class */ (function (_super) {
    tslib_1.__extends(DataService, _super);
    function DataService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataService.getData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpClient().get('/content.json')
                .then(function (response) { resolve(response.data); })
                .catch(function (error) { reject(error); });
        });
    };
    return DataService;
}(ApiService));
export { DataService };
export default DataService;
//# sourceMappingURL=dataService.js.map