'use strict'

angular = require 'angular'

# routes for our welcome module
welcomeRte = angular.module 'welcomeApp.routes', ['ui.router']
	.config ['$stateProvider', ($stateProvider) ->
		$stateProvider
		.state 'welcome',
			url: '/'
			controller: 'welcomeCtrl'
			templateUrl: '/modules/welcome/views/welcome.html'
	]

module.exports = welcomeRte