'use strict'

angular.module 'welcomeApp.controllers', []
	.controller 'WelcomeCtrl', ['$scope', ($scope) ->

		# scope properties
		$scope.iotTitle = "Welcome!" # title for welcome module
		
	]