'use strict'

# our owner routes
angular.module 'ownersApp.routes', ['ui.router']
	.config ['$stateProvider', ($stateProvider) ->
		$stateProvider
			.state 'owners',
				url: '/owners'
				controller: 'ownersCtrl'
				templateUrl: ''
		]