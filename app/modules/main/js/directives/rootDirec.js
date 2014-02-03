'use strict';

angular.module('iotApp.directives', [])
	.directive('iotSub', [function() {
		return function(scope) {
			restrict: 'E'
		};
	}])

	// This directive is for if and when Angular
	// makes modules able to be split apart better
	// or rebootstrapped; it also helps to determine
	// which module a page is in
	.directive('iotModule', [function() {
		return function(scope, elem, attrs) {
			restrict: 'A'
		};
	}])

	.directive('iotOwner', [function() {
		return {
			restrict: 'E',
			scope: {
				name: '@'
			},
			link: function(scope, elem, attrs) {
				
			}
		};
	}])

	.directive('iotObject', [function() {
		return function(scope, elem, attrs) {
			restrict: 'E'
		};
	}]);