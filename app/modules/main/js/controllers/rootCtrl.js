'use strict';

angular.module('iotApp.controllers', [])
	.controller('IotRootCtrl', ['$scope', function($scope) {

		// scope properties
		$scope.iotTitle = "root"; // we should never be in main module, but set a title anyway
		
	}]);