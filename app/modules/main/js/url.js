(function() {
  'use strict';
  angular.module('iotUrl', ['ngRoute']).config([
    '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
      $routeProvider.when('/welcome', {
        module: 'welcome'
      });
      $routeProvider.when('/welcome.html', {
        module: 'welcome'
      });
      $routeProvider.when('/:owner*\/:objName', {
        module: 'objects'
      });
      $routeProvider.when('/:owner', {
        module: 'owners'
      });
      $routeProvider.when('/', {
        module: 'welcome'
      });
      $routeProvider.when('', {
        module: 'welcome'
      });
      $routeProvider.when('/index.html', {
        module: 'welcome'
      });
      $routeProvider.otherwise;
      ({
        module: 'welcome'
      });
      return $locationProvider.html5Mode(true);
    }
  ]).controller('IotUrlCtrl', [
    '$scope', '$location', '$route', function($scope, $location, $route) {
      return $scope.$on('$locationChangeSuccess', function() {
        $scope.module = $route.current.module;
        return $scope.currUrl = '/modules/' + $scope.module + '/index.php';
      });
    }
  ]);

}).call(this);

//# sourceMappingURL=url.js.map
