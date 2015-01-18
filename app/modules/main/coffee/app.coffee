'use strict'

angular = require 'angular'

# main Angular module
module.exports = angular.module 'iotApp', [
	require './config/mainRte'
	require './filters/mainFils'
	require './services/mainServ'
	require './directives/mainDirec'
	require './controllers/mainCtrl'
]