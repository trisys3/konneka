'use strict'

# root-level Angular module, has all other modules as
# dependencies
angular.module 'iotApp', [
	'iotApp.filters'
	'iotApp.services'
	'iotApp.directives'
	'iotApp.controllers'
	'iotUrl'
	'iotRoute'
	'iotHead'
]