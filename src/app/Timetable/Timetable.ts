/**
 * Created with JetBrains PhpStorm.
 * User: patricepaquette
 * Date: 2013-07-06
 * Time: 11:35 AM
 * To change this template use File | Settings | File Templates.
 */

///<reference path="../../../vendor/d.ts/DefinitelyTyped/angularjs/angular.d.ts"/>
///<reference path="../../common/DateTime/Timetable/TimetableDateTime.ts"/>

angular.module('Bobby.App.Timetable', ['templates-app', 'Bobby.DateTime.Timetable', 'ngGrid'])

.directive('bobbyTimetable', ['DateTime9Fn', function(DateTime9Fn: Bobby.DateTime.Timetable.DateTime9Fn){
  return {
    restrict: 'E',
    replace: false,
    templateUrl: 'Timetable/Timetable.tpl.html',
    link: function(scope, element, attrs){
      var columnDefs
      scope.gridOptions = {
        columnDefs:
      }
    }
  }
}]);
