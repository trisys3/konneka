'use strict';

angular.module('objectsApp.controllers', [])
	.controller('ObjectsCtrl', ['$scope', 'IotRoute', function($scope, IotRoute) {
		$scope.owner = {};
		$scope.owner.url = IotRoute.getUrlOwner;
		console.log($scope.owner.url);
	}]);