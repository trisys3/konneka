'use strict'

# This file contains all URL-processing information
# for the website

# creates special module for processing URL's, with Angular's "ng-route" routing module as a dependency
angular.module 'iotUrl', ['ngRoute']
	.config ['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) ->

		# make URL's comply with HTML5 rules
		$locationProvider.html5Mode true

	]

	# our controller for routing
	.controller 'IotUrlCtrl', ['$scope', '$location', '$route', ($scope, $location, $route) ->
		
	]

	