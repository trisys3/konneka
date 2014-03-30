'use strict';

angular.module('ownersApp.controllers', [])
	.controller('OwnersCtrl', ['$scope', 'IotRoute', function($scope, IotRoute) {

		// scope properties
		$scope.owner = {}; // JavaScript object for info about owner
		$scope.owner.name = IotRoute.getUrlOwner(); // owner's name, gotten from route parameters

		$scope.iotTitle = IotRoute.getUrlOwner() + "'s page"; // title for owner module
		
	}]);