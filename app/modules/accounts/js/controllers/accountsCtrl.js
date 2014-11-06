(function() {
  'use strict';
  angular.module('accountsApp.controllers', []).controller('accountsCtrl', [
    '$scope', '$http', '$location', function($scope, $http, $location) {
      $scope.newUser = {};
      $scope.loginUser = {};
      $scope.signup = function() {
        return $http.put('/signup', $scope.newUser).success(function() {
          return $location.path('/');
        });
      };
      return $scope.login = function() {
        return $http.post('/login', $scope.loginUser).success(function() {
          return $location.path('/');
        });
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=accountsCtrl.js.map
