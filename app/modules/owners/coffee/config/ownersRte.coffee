'use strict'

angular.module 'ownersApp.routes', []
	.config 'OwnersRte', ['$stateProvider', ($stateProvider)
		$stateProvider
			.state 'owners',
				url: '/owners'
				templateUrl: ''
		]