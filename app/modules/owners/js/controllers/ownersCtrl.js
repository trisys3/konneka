'use strict';

angular.module('ownersApp.controllers', [])
	.controller('OwnersCtrl', ['$scope', 'IotRoute', function($scope, IotRoute) {
		$scope.owner = {};
		IotRoute.setUrlOwner("Cedric");
		$scope.owner.url = IotRoute.getUrlOwner();
		$scope.owner.name = IotRoute.getUrlOwner();
	}]);