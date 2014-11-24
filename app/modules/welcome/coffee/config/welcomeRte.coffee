'use strict';

# routes for our welcome module
angular.module 'welcomeApp.routes', ['ui.router']
	.config ['$stateProvider', ($stateProvider) ->
		$stateProvider
		.state 'welcome',
			url: '/'
			controller: 'welcomeCtrl'
			templateUrl: '/modules/welcome/views/welcome.html'
	]