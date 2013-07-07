var Bobby;
(function (Bobby) {
    (function (DateTime) {
        var AbstractDateTime = (function () {
            function AbstractDateTime() {
            }
            AbstractDateTime.GetDaysOfWeek = function () {
                throw new Error("This is an abstract method");
            };
            AbstractDateTime.GetMonthsNames = function () {
                throw new Error("This is an abstract method");
            };
            AbstractDateTime.prototype.GetDay = function () {
                throw new Error("This is an abstract method");
            };
            AbstractDateTime.prototype.GetDayOfWeek = function () {
                throw new Error("This is an abstract method");
            };
            AbstractDateTime.prototype.GetMonth = function () {
                throw new Error("This is an abstract method");
            };
            AbstractDateTime.prototype.GetMonthName = function () {
                throw new Error("This is an abstract method");
            };
            AbstractDateTime.prototype.GetYear = function () {
                throw new Error("This is an abstract method");
            };
            AbstractDateTime.prototype.GetSeconds = function () {
                throw new Error("This is an abstract method");
            };
            AbstractDateTime.prototype.GetMinutes = function () {
                throw new Error("This is an abstract method");
            };
            AbstractDateTime.prototype.GetHours = function () {
                throw new Error("This is an abstract method");
            };
            return AbstractDateTime;
        })();
        DateTime.AbstractDateTime = AbstractDateTime;
    })(Bobby.DateTime || (Bobby.DateTime = {}));
    var DateTime = Bobby.DateTime;
})(Bobby || (Bobby = {}));
//@ sourceMappingURL=AbstractDateTime.js.map
