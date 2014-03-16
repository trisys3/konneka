'use strict';

angular.module('iotRoute', ['ngRoute']) // we need the ng-route module
	.factory('IotRoute', ['$route', function($route) { // we call ng-route's $route service as a dependency

		var iotOwner = ""; // set the owner to nothing originally
		var iotObject = ""; // set the object to nothing originally
		var IotRoute = []; // set the route to an empty array originally
		var IotRouteService = {}; // create the route service singleton object

		// getters & setters for parts of the route

		// getter for the owner part of the route
		IotRouteService.getUrlOwner = function() {
			if($route.current.params.owner) {
				iotOwner = $route.current.params.owner;
			}
			else {
				iotOwner = 'sample'; // if the owner route section is not set, we set it to "sample"
			}
			return iotOwner;
		};

		// setter for the owner part of the route; used if the owner part of the URL is different
		// from the name of the owner
		IotRouteService.setUrlOwner = function(owner) {
			$route.current.params.owner = owner;
		};

		// getter for the object part of the route
		IotRouteService.getUrlObject = function() {
			if($route.current.params.objName) {
				iotObject = $route.current.params.objName;
			}
			else {
				iotObject = 'sample'; // if the object route section is not set, we set it to "sample"
			}
			return iotObject;
		};

		// setter for the object part of the route; used if the object part of the URL is different
		// from the name of the object
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