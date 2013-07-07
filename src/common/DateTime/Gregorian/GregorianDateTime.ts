///<reference path="../AbstractDateTime.ts"/>
///<reference path="../../../../vendor/d.ts/DefinitelyTyped/moment/moment.d.ts"/>
///<reference path="../../../../vendor/d.ts/DefinitelyTyped/angularjs/angular.d.ts"/>

/**
 * Datetime implementation for the gregorian calendar using the moment.js library.
 */

angular.module("Bobby.DateTime.Gregorian", [])

.factory("DateTimeFn", function(){
  return Bobby.DateTime.Gregorian.DateTime;
});


module Bobby.DateTime.Gregorian{
  export class DateTime extends Bobby.DateTime.AbstractDateTime{
    private _date : Moment;

    static GetDaysOfWeek(){
      var days: String[] = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

      return days;
    }

    static GetMonthsNames(){
      var months: String[] = ["january", "february", "mars", "april", "may", "june", "august", "september", "october", "november", "december"];

      return months;
    }

    constructor(dateString : string){
      super();
      this._date = moment(dateString);
      console.log(this._date.format());
    }

    GetDay(){
      return this._date.date();
    }

    GetDayOfWeek(){
      return this._date.format("dddd");
    }

    GetMonth(){
      return this._date.month();
    }

    GetMonthName(){
      return this._date.format("MMMM")
    }

    GetYear(){
      return this._date.year();
    }

    GetSeconds(){
      return this._date.seconds();
    }

    GetMinutes(){
      return this._date.minutes();
    }

    GetHours(){
      return this._date.hours();
    }

    Format(format : string){
      return this._date.format(format);
    }
  }

  export interface DateTimeFn{
    new (dateString : String) : Bobby.DateTime.AbstractDateTime;
    GetDaysOfWeek(): String[];
    GetMonthsNames(): String[];
  }
}


