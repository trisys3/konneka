'use strict'

# root-level JavaScript file, provides root-level configuration for entire
# site
angular.module 'iotApp', [
	'objectsApp'
	'ownersApp'
	'welcomeApp'
	'iotApp.filters'
	'iotApp.services'
	'iotApp.directives'
	'iotApp.controllers'
	'iotUrl'
	'iotRoute'
	'iotHead'
]