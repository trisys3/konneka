'use strict';

// This file contains all routing information
// for the website

// creates special module for routing, with Angular's "ng-route" routing module as a dependency
angular.module('iotRoutes', ['ngRoute'])
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

		// these rule makes any "welcome" page into a generic page
		$routeProvider.when('/welcome', {module: 'welcome'});
		$routeProvider.when('/welcome.php', {module: 'welcome'});
		$routeProvider.when('/welcome.html', {module: 'welcome'});

		// this rule includes all pages that have an owner & an object
		$routeProvider.when('/:owner*\/:objName', {module: 'objects'});

		// this rule includes pages with just an owner
		$routeProvider.when('/:owner', {module: 'owners'});

		// this rule includes generic or root pages
		$routeProvider.when('/', {module: 'welcome'});
		$routeProvider.when('', {module: 'welcome'});
		$routeProvider.when('index.php', {module: 'welcome'});

		// this rule takes any page we haven't created a rule for yet & makes it a generic page
		$routeProvider.otherwise({module: 'welcome'});

		// causes URL's to comply with HTML5 rules
		$locationProvider.html5Mode(true);

	}])

	// our controller for routing
	.controller('RouteCtrl', ['$scope', '$location', '$route', function($scope, $location, $route) {

		// whenever angular detects a "location" change (usually whenever our ng-include is the parent)
		$scope.$on('$locationChangeSuccess', function() {
			$scope.module = $route.current.module; // get the module of our page
			$scope.currUrl = '/dist/app/modules/' + $scope.module + '/index.php'; // this will be passed to the ng-include on the outer page
		});
	}]);