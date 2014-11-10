(function() {
  'use strict';
  angular.module('iotUrl', ['ngRoute']).config([
    '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
      return $locationProvider.html5Mode(true);
    }
  ]).controller('IotUrlCtrl', ['$scope', '$location', '$route', function($scope, $location, $route) {}]);

}).call(this);

//# sourceMappingURL=url.js.map
