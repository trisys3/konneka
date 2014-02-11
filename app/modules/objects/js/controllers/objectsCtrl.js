'use strict';

angular.module('objectsApp.controllers', [])
	.controller('ObjectsCtrl', ['$scope', 'IotRoute', function($scope, IotRoute) {
		$scope.owner = {};
		$scope.url = "cffty";
		$scope.owner.url = IotRoute.getUrlOwner;
		console.log($scope.owner.url);
		$scope.owner.name = "ftyjfty";
	}]);