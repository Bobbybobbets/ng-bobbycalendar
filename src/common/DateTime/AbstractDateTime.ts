/**
 * Created with JetBrains PhpStorm.
 * User: patricepaquette
 * Date: 2013-07-03
 * Time: 3:46 PM
 * To change this template use File | Settings | File Templates.
 */


module Bobby.DateTime{
  export class AbstractDateTime{
    static GetDaysOfWeek(){throw new Error("This is an abstract method");}
    static GetMonthsNames(){throw new Error("This is an abstract method");}
    GetDay(): Number{throw new Error("This is an abstract method"); }
    GetDayOfWeek() : String{throw new Error("This is an abstract method"); }
    GetMonth() : Number{throw new Error("This is an abstract method"); }
    GetMonthName() : String{throw new Error("This is an abstract method"); }
    GetYear() : Number{throw new Error("This is an abstract method"); }
    GetSeconds() : Number{throw new Error("This is an abstract method"); }
    GetMinutes() : Number{throw new Error("This is an abstract method"); }
    GetHours() : Number{throw new Error("This is an abstract method"); }
  }
}