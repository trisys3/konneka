'use strict';

# our account module's routes
angular.module 'accountsApp.routes', ['ui.router']
	.config ['$stateProvider', ($stateProvider) ->
		$stateProvider
		.state 'auth',
			views:
				'signup'
					url: '/signup'
					templateUrl: '/modules/accounts/views/signup.html'

				'login',
					url: '/login'
					templateUrl: '/modules/accounts/views/login.html'
	]