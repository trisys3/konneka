'use strict';

angular.module('iotApp.controllers', [])
	.controller('IotRootCtrl', ['$scope', function($scope) {

		// scope properties
		$scope.iotTitle = "root"; // we should never be in main module, as we do not have a route to it, but set a title anyway
		
	}]);