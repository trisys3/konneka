'use strict';

// main module for welcome sub-app
// pseudo-extends app
angular.module('iotWelcome', [
	'iotApp',
	'iotWelcome.filters',
	'iotWelcome.controllers',
	'iotWelcome.providers',
	'iotWelcome.services'
]);