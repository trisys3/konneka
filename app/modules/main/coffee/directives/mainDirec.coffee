'use strict'

angular.module 'iotApp.directives', []
	.directive 'iotSub', [ ->
		return (scope) ->
			restrict: 'E' # only use this directive on elements
	]

	.directive 'iotOwner', [ ->
		return {
			restrict: 'E' # only use this directive on elements
			scope:
				name: '@'
			link: (scope, elem, attrs) ->

		}

	]

	.directive 'iotObject', [ ->
		return {
			restrict: 'E' # only use this directive on elements
		}
	]

	# directive for changing title attribute from another module
	.directive 'iotTitle', [ ->
		return {
			restrict: 'A' # only use this directive on attributes
			link: (scope, elem, attrs) ->
				angular.element('title').text(scope.iotTitle) # change title of page to module's title

		}
	]