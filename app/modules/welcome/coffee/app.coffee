'use strict'

# main module for welcome sub-app
# pseudo-extends app
angular.module 'welcomeApp', [
	'iotApp'
	'welcomeApp.filters'
	'welcomeApp.controllers'
	'welcomeApp.directives'
	'welcomeApp.services'
]