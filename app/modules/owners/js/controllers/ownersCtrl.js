'use strict';

angular.module('ownersApp.controllers', [])
	.controller('OwnersCtrl', ['$scope', 'IotRoute', function($scope, IotRoute) {
		$scope.owner = {};
		$scope.owner.url = IotRoute.getUrlOwner;
		console.log($scope.owner.url);
		$scope.owner.name = "ftyjfty";
	}]);