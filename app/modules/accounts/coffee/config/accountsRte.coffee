'use strict';

# our account module's routes
angular.module 'accountsApp.routes', ['ui.router']
	.config ['$stateProvider', ($stateProvider) ->
		$stateProvider
		.state 'signup',
			url: '/signup'
			templateUrl: '/modules/accounts/views/signup.html'

		.state 'login',
			url: '/login'
			templateUrl: '/modules/accounts/views/login.html'
	]