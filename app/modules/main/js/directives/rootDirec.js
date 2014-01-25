'use strict';

angular.module('iotApp.directives', [])
	.directive('iotSub', [function() {
		return function(scope) {
			restrict: 'E';
		};
	}])
	.directive('iotModule', [function() {
		return function(scope, elem, attrs) {
			restrict: 'A';
			// elem.ngApp = changeModule;
		};
	}]);