'use strict'

# This file contains all URL-processing information
# for the website

# creates special module for processing URL's, with Angular's "ng-route" routing module as a dependency
angular.module 'iotUrl', ['ngRoute']
	.config ['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) ->

		# these rule makes any "welcome" page into a generic page
		$routeProvider.when '/welcome',
			module: 'welcome'

		$routeProvider.when '/welcome.html',
			module: 'welcome'

		# this rule includes all pages that have an owner & an object
		$routeProvider.when '/:owner*\/:objName',
			module: 'objects'

		# this rule includes pages with just an owner
		$routeProvider.when '/:owner',
			module: 'owners'

		# this rule includes generic and root pages
		$routeProvider.when '/',
			module: 'welcome'

		$routeProvider.when '',
			module: 'welcome'

		$routeProvider.when '/index.html',
			module: 'welcome'

		# this rule takes any page we haven't created a rule for yet & makes it a generic page
		$routeProvider.otherwise
		module: 'welcome'

		# make URL's comply with HTML5 rules
		$locationProvider.html5Mode true

	]

	# our controller for routing
	.controller 'IotUrlCtrl', ['$scope', '$location', '$route', ($scope, $location, $route) ->

		# whenever angular detects a "location" change (usually whenever we use ng-include)
		$scope.$on '$locationChangeSuccess', ->

			$scope.module = $route.current.module # get the module of our page
			$scope.currUrl = '/modules/' + $scope.module + '/index.php' # this will be passed to the ng-include on the outer page
		
	]

	