///<reference path="../AbstractDateTime.ts"/>
///<reference path="../Gregorian/GregorianDateTime.ts"/>
///<reference path="../../../../vendor/d.ts/DefinitelyTyped/angularjs/angular.d.ts"/>

/**
 *  Datetime implementation for timetables. Timetables use time ranges which are isolated from
 *  time. For now, this implementation assumes that a timetable is a variable-length week.
 */

angular.module('Bobby.DateTime.Timetable', [])

.factory('DateTime9Fn', function(){
  return Bobby.DateTime.Timetable.DateTime9;
});

module Bobby.DateTime.Timetable{
  export class DateTime9 extends Bobby.DateTime.AbstractDateTime{
    static WeekLength : number = 9;
    private _day : number;
    private _hours : number;
    private _minutes : number;
    private _seconds : number;

    static GetDaysOfWeek(){
      var days: String[] = [];

      for(var i = 1; i <= DateTime9.WeekLength; i++){
        days.push(i.toString());
      }

      return days;
    }

    static GetMonthsNames(){
      var months: String[] = [];
      return months;
    }

    constructor(
      day : number,
      hours : number,
      minutes : number,
      seconds : number)
    {
      super();
      this._day = day;
      this._hours = hours;
      this._minutes = minutes;
      this._seconds = seconds;
    }

    GetDay(){
      return this._day;
    }

    GetDayOfWeek(){
      return "";
    }

    GetMonth(){
      return 0;
    }

    GetMonthName(){
      return "";
    }

    GetYear(){
      return 0;
    }

    GetSeconds(){
      return this._seconds;
    }

    GetMinutes(){
      return this._minutes;
    }

    GetHours(){
      return this._hours;
    }
  }

  export interface DateTime9Fn{
    new (
      day: number,
      hours: number,
      minutes: number,
      seconds: number): Bobby.DateTime.AbstractDateTime;

    GetDaysOfWeek(): String[];
    GetMonthsNames(): String[];
  }
}