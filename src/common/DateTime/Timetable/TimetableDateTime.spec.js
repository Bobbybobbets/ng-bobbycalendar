describe("Bobby", function () {
    describe("DateTime", function () {
        describe("Gregorian", function () {
            beforeEach(module('Bobby.DateTime.Timetable'));

            describe("DateTime", function () {
                var day = 1;
                var hours = 0;
                var minutes = 0;
                var seconds = 0;

                var datetime;
                var datetimeFn;

                beforeEach(inject(function (DateTime9Fn) {
                    datetime = new DateTime9Fn(day, hours, minutes, seconds);
                    datetimeFn = DateTime9Fn;
                }));

                it("should equal date's day", function () {
                    expect(datetime.GetDay()).toEqual(1);
                });

                it("should equal date's day of week", function () {
                    expect(datetime.GetDayOfWeek()).toEqual("");
                });

                it("should equal date's month", function () {
                    expect(datetime.GetMonth()).toEqual(0);
                });

                it("should equal date's month name", function () {
                    expect(datetime.GetMonthName()).toEqual("");
                });

                it("should equal date's year", function () {
                    expect(datetime.GetYear()).toEqual(0);
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

                it("should return the correct number of days in a week", function () {
                    expect(datetimeFn.GetDaysOfWeek().length).toEqual(9);
                });

                it("should return an empty string array", function () {
                    expect(datetimeFn.GetMonthsNames().length).toEqual(0);
                });
            });
        });
    });
});
//@ sourceMappingURL=TimetableDateTime.spec.js.map
