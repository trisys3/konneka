'use strict';

angular.module('welcomeApp.controllers', [])
	.controller('WelcomeCtrl', ['$scope', function($scope) {
		$scope.iotTitle = "Welcome!";
		IotRoute.setIotTitle($scope.iotTitle);
	}]);