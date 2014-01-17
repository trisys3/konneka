'use strict';

// This file contains all routing information
// for the website

angular.module('iotRoutes', ['ngRoute'])
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

		$routeProvider.when('/:owner/:objName', {module: 'objects'});
		$routeProvider.when('/:owner/:objname*.php', {module: 'objects'});
		$routeProvider.when('/:owner/:objname*.html', {module: 'objects'});

		$routeProvider.when('/:owner', {module: 'owners'});
		$routeProvider.when('/:owner*.html', {module: 'owners'});
		$routeProvider.when('/:owner*.php', {module: 'owners'});

		$routeProvider.when('/', {module: 'welcome'});
		$routeProvider.when('', {module: 'welcome'});
		$routeProvider.when('index.php', {module: 'welcome'});

		$routeProvider.otherwise({module: 'welcome'});

		$locationProvider.html5Mode(true);

	}])

	.controller('RouteCtrl', ['$scope', '$location', '$route', function($scope, $location, $route) {
		$scope.$on('$locationChangeSuccess', function() {
			$scope.module = $route.current.module;
			$scope.currUrl = 'dist/app/modules/' + $scope.module + '/index.php';
		});
	}]);