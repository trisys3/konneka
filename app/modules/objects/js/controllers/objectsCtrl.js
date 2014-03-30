'use strict';

angular.module('objectsApp.controllers', [])
	.controller('ObjectsCtrl', ['$scope', 'IotRoute', function($scope, IotRoute) {

		// scope variables
		$scope.owner = {}; // object to hold information about owner
		$scope.owner.name = IotRoute.getUrlOwner(); // owner's name

		$scope.object = {}; // object to hold information about object
		$scope.object.name = IotRoute.getUrlObject(); // object's name

		$scope.iotTitle = IotRoute.getUrlOwner() + "'s " + IotRoute.getUrlObject() + "'s page"; // title
		
	}]);