(function() {
  'use strict';
  angular.module('ownersApp.controllers', []).controller('OwnersCtrl', [
    '$scope', 'IotRoute', function($scope, IotRoute) {
      $scope.owner = {};
      $scope.owner.name = IotRoute.getUrlOwner();
      return $scope.iotTitle = IotRoute.getUrlOwner() + "'s page";
    }
  ]);

}).call(this);

//# sourceMappingURL=ownersCtrl.js.map
