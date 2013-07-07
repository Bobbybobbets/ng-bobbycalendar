var Gregorian = Bobby.DateTime.Gregorian;

describe("Bobby", function () {
    describe("DateTime", function () {
        describe("Gregorian", function () {
            beforeEach(module("Bobby.DateTime.Gregorian"));

            describe("GregorianDateTime", function () {
                var date = "1987-05-08T00:00:00-04:00";
                var datetime;
                var datetimeFn;

                beforeEach(inject(function (DateTimeFn) {
                    datetime = new DateTimeFn(date);
                    datetimeFn = DateTimeFn;
                }));

                it("should equal date's day", function () {
                    expect(datetime.GetDay()).toEqual(8);
                });

                it("should equal date's day of week", function () {
                    expect(datetime.GetDayOfWeek()).toEqual("Friday");
                });

                it("should equal date's month", function () {
                    expect(datetime.GetMonth()).toEqual(4);
                });

                it("should equal date's month name", function () {
                    expect(datetime.GetMonthName()).toEqual("May");
                });

                it("should equal date's year", function () {
                    expect(datetime.GetYear()).toEqual(1987);
                });

                it("should equal date's hours", function () {
                    expect(datetime.GetHours()).toEqual(0);
                });

                it("should equal date's minutes", function () {
                    expect(datetime.GetMinutes()).toEqual(0);
                });

                it("should equal date's seconds", function () {
                    expect(datetime.GetSeconds()).toEqual(0);
                });

                it("should properly format the date into a string", function () {
                    expect(datetime.Format("YYYY-MM-DD HH:mm:ss")).toEqual("1987-05-08 00:00:00");
                });

                it("should return the right days of the week for a gregorian calendar", function () {
                    expect(datetimeFn.GetDaysOfWeek()).toEqual(["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]);
                });

                it("should return the right months of the year for a gregorian calendar", function () {
                    expect(datetimeFn.GetMonthsNames()).toEqual(["january", "february", "mars", "april", "may", "june", "august", "september", "october", "november", "december"]);
                });
            });
        });
    });
});
//@ sourceMappingURL=GregorianDateTime.spec.js.map
