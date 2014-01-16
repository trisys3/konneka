'use strict';

// root-level JavaScript file, provides root-level configuration for entire
// site
angular.module('iotApp', [
	'iotApp.filters',
	'iotApp.services',
	'iotApp.directives',
	'iotApp.controllers',
	'iotRoutes'
]);

// Declare app level module which depends on filters, and services
// angular.module('myApp', [
//   'ngRoute',
//   'myApp.filters',
//   'myApp.services',
//   'myApp.directives',
//   'myApp.controllers'
// ]).
// config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
//   $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
//   $routeProvider.otherwise({redirectTo: '/view1'});
// }]);
