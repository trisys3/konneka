(function() {
  'use strict';
  angular.module('objectsApp.controllers', []).controller('ObjectsCtrl', [
    '$scope', 'IotRoute', function($scope, IotRoute) {
      $scope.owner = {};
      $scope.owner.name = IotRoute.getUrlOwner();
      $scope.object = {};
      $scope.object.name = IotRoute.getUrlObject();
      return $scope.iotTitle = IotRoute.getUrlOwner() + "'s " + IotRoute.getUrlObject() + "'s page";
    }
  ]);

}).call(this);

//# sourceMappingURL=objectsCtrl.js.map
