'use strict';

angular.module('iotRoute', ['ngRoute'])
	.factory('IotRoute', ['$route', function($route) {

		var iotOwner = "";
		var iotObject = "";
		var IotRoute = [];
		var IotRouteService = {};

		IotRouteService.getUrlOwner = function() {
			if($route.current.params.owner) {
				iotOwner = $route.current.params.owner;
			}
			else {
				iotOwner = 'sample';
			}
			return iotOwner;
		};
		IotRouteService.setUrlOwner = function(owner) {
			$route.current.params.owner = owner;
		};

		IotRouteService.getUrlObject = function() {
			if($route.current.params.objName) {
				iotObject = $route.current.params.objName;
			}
			else {
				iotObject = 'sample';
			}
			return iotObject;
		};
		IotRouteService.setUrlObject = function(objName) {
			$route.current.params.objName = objName;
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

	.controller('IotRouteCtrl', ['$scope', '$route',/* 'IotRouteService',*/ function($scope, $route/*, IotRouteService*/) {
		if($route.current.params.owner) {
			console.log($route.current.params.owner);
		}
	}]);