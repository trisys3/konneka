'use strict'

angular = require 'angular'

welcomeCtrl = angular.module 'welcomeApp.controllers', []
	.controller 'WelcomeCtrl', ['$scope', ($scope) ->

		# scope properties
		$scope.iotTitle = 'Welcome!' # title for welcome module
		
	]

module.exports = welcomeCtrl