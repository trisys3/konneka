// This file contains all routing information
// for the website

angular.module('iotRoutes', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {

		$routeProvider.when('/:location/:owner/:objName', {redirectTo: 'locations/:location/people/:people/objects/:objName'});

		$routeProvider.when('/:owner/:objName', {redirectTo: '/people/:owner/objects/:objName', controller: objName});

	}])