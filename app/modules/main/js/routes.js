'use strict';

// This file contains all routing information
// for the website

angular.module('iotRoutes', ['ngRoute'])
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

		$routeProvider.when('/:owner/:objName', {templateUrl: '/people/:owner/objects/:objName.php', module: 'objects'});
		$routeProvider.when('/:owner/:objname*.php', {templateUrl: '/people/:owner/objects/:objName.php', module: 'objects'});
		$routeProvider.when('/:owner/:objname*.html', {templateUrl: '/people/:owner/objects/:objName.php', module: 'objects'});

		$routeProvider.when('/:owner', {templateUrl:'/people/:owner.php', module: 'owners'});
		$routeProvider.when('/:owner*.html', {templateUrl: '/people/:owner.php', module: 'owners'});
		$routeProvider.when('/:owner*.php', {templateUrl: '/people/:owner.php', module: 'owners'});

		$routeProvider.when('/', {templateUrl: 'welcome.php', module: 'welcome'});
		$routeProvider.when('', {templateUrl: 'welcome.php', module: 'welcome'});
		$routeProvider.when('index.php', {templateUrl: 'welcome.php', module: 'welcome'});

		$routeProvider.otherwise({templateUrl: 'welcome.php', module: 'welcome'});

		$locationProvider.html5Mode(true);

	}])

	.controller('RouteCtrl', ['$scope', '$location', '$route', function($scope, $location, $route) {
		$scope.$on('$locationChangeSuccess', function() {
			$scope.module = $route.current.module;
			$scope.currUrl = 'dist/app/' + $scope.module;
		});
	}]);