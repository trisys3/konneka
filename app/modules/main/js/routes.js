'use strict';

angular.module('iotRoute', ['ngRoute'])
	.factory('IotRoute', ['$route', '$routeParams', function($route, $routeParams) {

		var IotRoute = [];
		var IotRouteService = {};

		IotRouteService.getOwner = function() {
			return iotOwner;
		};
		IotRouteService.setOwner = function(owner) {
			iotOwner = owner;
		};

		// IotRouteService.$on('$routeChangeSuccess', function() {
		// 	IotRouteService.owner = function() {
		// 		return $routeParams.owner; // if this is an owner or object page, this will be the owner
		// 	};

		// 	IotRouteService.objName = function() {
		// 		return $routeParams.objName; // if this is an object page, this will be the object
		// 	};
		// });

		return IotRouteService;
	}])

	.controller('IotRouteCtrl', ['$scope', '$routeParams',/* 'IotRouteService',*/ function($scope, $routeParams/*, IotRouteService*/) {
		if($routeParams.owner) {
			console.log($routeParams.owner);
		}
	}]);