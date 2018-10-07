import Axios from 'axios';
var ApiService = /** @class */ (function () {
    function ApiService() {
    }
    /**
     * Return a http client with base url and other general settings
     * @returns {AxiosInstance}
     */
    ApiService.httpClient = function () {
        return Axios.create({
            baseURL: '',
            timeout: 15000
        });
    };
    return ApiService;
}());
export default ApiService;
//# sourceMappingURL=apiService.js.map