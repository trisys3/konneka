'use strict';

angular.module('objectsApp.controllers', [])
	.controller('ObjectsCtrl', ['$scope', 'IotRoute', function($scope, IotRoute) {
		$scope.owner = {};
		$scope.owner.url = IotRoute.getUrlOwner();
		$scope.iotTitle = IotRoute.getUrlOwner() + "'s " + IotRoute.getUrlObject() + "'s page";
	}]);