(function() {
  'use strict';
  angular.module('iotApp.directives', []).directive('iotSub', [
    function() {
      return function(scope) {
        return {
          restrict: 'E'
        };
      };
    }
  ]).directive('iotOwner', [
    function() {
      return {
        restrict: 'E',
        scope: {
          name: '@'
        },
        link: function(scope, elem, attrs) {}
      };
    }
  ]).directive('iotObject', [
    function() {
      return {
        restrict: 'E'
      };
    }
  ]).directive('iotTitle', [
    function() {
      return {
        restrict: 'A',
        link: function(scope, elem, attrs) {
          return angular.element('title').text(scope.iotTitle);
        }
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=mainDirec.js.map
