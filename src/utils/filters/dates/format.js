import moment from 'moment';
export var format = function (value, formatting, emptyValue) {
    if (value == null) {
        return emptyValue || '';
    }
    else {
        return moment(value).format(formatting);
    }
};
export default format;
//# sourceMappingURL=format.js.map