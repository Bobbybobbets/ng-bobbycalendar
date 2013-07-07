angular.module('templates-app', ['Timetable/Timetable.tpl.html']);

angular.module("Timetable/Timetable.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("Timetable/Timetable.tpl.html",
    "<div>\n" +
    "    <div ng-grid=\"gridOptions\"></div>\n" +
    "</div>\n" +
    "");
}]);
