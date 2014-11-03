(function() {
  'use strict';
  angular.module('accountsApp.controllers', []).controller('accountsCtrl', [
    '$scope', '$http', function($scope, $http) {
      $scope.newUser = {};
      $scope.loginUser = {};
      $scope.signup = function() {
        return $http.put('/signup', $scope.newUser);
      };
      return $scope.login = function() {
        return $http.post('/login', $scope.loginUser);
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=accountsCtrl.js.map
