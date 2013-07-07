angular.module('Bobby.App.Timetable', ['templates-app', 'Bobby.DateTime.Timetable', 'ngGrid']).directive('bobbyTimetable', [
    'DateTime9Fn',
    function (DateTime9Fn) {
        return {
            restrict: 'E',
            replace: false,
            templateUrl: 'Timetable/Timetable.tpl.html',
            link: function (scope, element, attrs) {
                scope.gridOptions = {};
            }
        };
    }
]);
//@ sourceMappingURL=Timetable.js.map
