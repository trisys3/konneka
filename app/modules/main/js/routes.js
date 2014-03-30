'use strict';

angular.module('iotRoute', ['ngRoute']) // we need the ng-route module
	.factory('IotRoute', ['$route', function($route) { // call ng-route's $route service as a dependency

		var iotOwner = ""; // set the owner to nothing originally
		var iotObject = ""; // set the object to nothing originally
		var iotTitle = ""; // set title to nothing originally
		var iotModule = ""; // set module to nothing originally
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

		// getter for module
		IotRouteService.getModule = function() {
			if($route.current.module) {
				iotModule = $route.current.module; // if we are in a module, get that module
			}
			else {
				iotModule = "welcome"; // else, get the welcome module as a default
			}
			return iotModule;
		}

		// setter for module
		IotRouteService.setModule = function(iotModule) {
			$route.current.module = iotModule;
		}

		return IotRouteService;
	}]);