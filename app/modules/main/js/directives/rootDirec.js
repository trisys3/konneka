'use strict';

angular.module('iotApp.directives', [])
	.directive('iotSub', [function() {
		return function(scope) {
			restrict: 'E' // only use this directive on elements
		};
	}])

	.directive('iotOwner', [function() {
		return {
			restrict: 'E', // only use this directive on elements
			scope: {
				name: '@'
			},
			link: function(scope, elem, attrs) {

			}
		};
	}])

	.directive('iotObject', [function() {
		return {
			restrict: 'E' // only use this directive on elements
		};
	}])

	// directive for changing title attribute from another module
	.directive('iotTitle', [function() {
		return {
			restrict: 'A', // only use this directive on attributes
			link: function(scope, elem, attrs) {
				angular.element('title').text(scope.iotTitle); // change title of page to module's title
			}
		}
	}]);