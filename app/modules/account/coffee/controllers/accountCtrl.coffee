'use strict'

# account controller(s)
angular.module 'iotAccount.controllers', []
	.controller 'IotAccCtrl', ['$scope', ($scope) ->
		$scope.log_in = "loggedout" # change this once I have log-in functions
	]