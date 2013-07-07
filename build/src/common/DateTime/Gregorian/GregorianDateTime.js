var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
angular.module("Bobby.DateTime.Gregorian", []).factory("DateTimeFn", function () {
    return Bobby.DateTime.Gregorian.DateTime;
});

var Bobby;
(function (Bobby) {
    (function (DateTime) {
        (function (Gregorian) {
            var DateTime = (function (_super) {
                __extends(DateTime, _super);
                function DateTime(dateString) {
                    _super.call(this);
                    this._date = moment(dateString);
                    console.log(this._date.format());
                }
                DateTime.GetDaysOfWeek = function () {
                    var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

                    return days;
                };

                DateTime.GetMonthsNames = function () {
                    var months = ["january", "february", "mars", "april", "may", "june", "august", "september", "october", "november", "december"];

                    return months;
                };

                DateTime.prototype.GetDay = function () {
                    return this._date.date();
                };

                DateTime.prototype.GetDayOfWeek = function () {
                    return this._date.format("dddd");
                };

                DateTime.prototype.GetMonth = function () {
                    return this._date.month();
                };

                DateTime.prototype.GetMonthName = function () {
                    return this._date.format("MMMM");
                };

                DateTime.prototype.GetYear = function () {
                    return this._date.year();
                };

                DateTime.prototype.GetSeconds = function () {
                    return this._date.seconds();
                };

                DateTime.prototype.GetMinutes = function () {
                    return this._date.minutes();
                };

                DateTime.prototype.GetHours = function () {
                    return this._date.hours();
                };

                DateTime.prototype.Format = function (format) {
                    return this._date.format(format);
                };
                return DateTime;
            })(Bobby.DateTime.AbstractDateTime);
            Gregorian.DateTime = DateTime;
        })(DateTime.Gregorian || (DateTime.Gregorian = {}));
        var Gregorian = DateTime.Gregorian;
    })(Bobby.DateTime || (Bobby.DateTime = {}));
    var DateTime = Bobby.DateTime;
})(Bobby || (Bobby = {}));
//@ sourceMappingURL=GregorianDateTime.js.map
