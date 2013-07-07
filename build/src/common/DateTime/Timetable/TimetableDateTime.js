var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
angular.module('Bobby.DateTime.Timetable', []).factory('DateTime9Fn', function () {
    return Bobby.DateTime.Timetable.DateTime9;
});

var Bobby;
(function (Bobby) {
    (function (DateTime) {
        (function (Timetable) {
            var DateTime9 = (function (_super) {
                __extends(DateTime9, _super);
                function DateTime9(day, hours, minutes, seconds) {
                    _super.call(this);
                    this._day = day;
                    this._hours = hours;
                    this._minutes = minutes;
                    this._seconds = seconds;
                }
                DateTime9.GetDaysOfWeek = function () {
                    var days = [];

                    for (var i = 1; i <= DateTime9.WeekLength; i++) {
                        days.push(i.toString());
                    }

                    return days;
                };

                DateTime9.GetMonthsNames = function () {
                    var months = [];
                    return months;
                };

                DateTime9.prototype.GetDay = function () {
                    return this._day;
                };

                DateTime9.prototype.GetDayOfWeek = function () {
                    return "";
                };

                DateTime9.prototype.GetMonth = function () {
                    return 0;
                };

                DateTime9.prototype.GetMonthName = function () {
                    return "";
                };

                DateTime9.prototype.GetYear = function () {
                    return 0;
                };

                DateTime9.prototype.GetSeconds = function () {
                    return this._seconds;
                };

                DateTime9.prototype.GetMinutes = function () {
                    return this._minutes;
                };

                DateTime9.prototype.GetHours = function () {
                    return this._hours;
                };
                DateTime9.WeekLength = 9;
                return DateTime9;
            })(Bobby.DateTime.AbstractDateTime);
            Timetable.DateTime9 = DateTime9;
        })(DateTime.Timetable || (DateTime.Timetable = {}));
        var Timetable = DateTime.Timetable;
    })(Bobby.DateTime || (Bobby.DateTime = {}));
    var DateTime = Bobby.DateTime;
})(Bobby || (Bobby = {}));
//@ sourceMappingURL=TimetableDateTime.js.map
