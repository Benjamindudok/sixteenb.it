import moment from 'moment';
export var fromNow = function (value) {
    if (value == null) {
        return '';
    }
    return moment(value).fromNow();
};
export default fromNow;
//# sourceMappingURL=fromNow.js.map