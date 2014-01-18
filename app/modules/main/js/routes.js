'use strict';

// This file contains all routing information
// for the website

// creates special module for routing, with Angular's "ng-route" routing module as a dependency
angular.module('iotRoutes', ['ngRoute'])
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

		// this rule includes all pages that have an owner & an object
		$routeProvider.when('/:owner*\/:objName', {module: 'objects'});
		$routeProvider.when('/:owner*\/:objname*.php', {module: 'objects'});
		$routeProvider.when('/:owner*\/:objname*.html', {module: 'objects'});

		// this rule includes pages with just an owner
		$routeProvider.when('/:owner', {module: 'owners'});
		$routeProvider.when('/:owner*.html', {module: 'owners'});
		$routeProvider.when('/:owner*.php', {module: 'owners'});

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

		// whenever angular detects a "location" change (whenever our ng-include is the parent)
		$scope.$on('$locationChangeSuccess', function() {
			$scope.module = $route.current.module;
			$scope.currUrl = '/dist/app/modules/' + $scope.module + '/index.php';
		});
	}]);