'use strict'

exports.routes = {
  deps: 'ui.router'
  def: ['$stateProvider', ($stateProvider) ->

  ]
}

exports.location =
  def: ['$locationProvider', ($locationProvider) ->
    # make URL's comply with HTML5 rules
    $locationProvider.html5Mode
      enabled: true
      requireBase: false # if we need to support IE9, remove this line
  ]

# # routes for our main module
# mainRte = angular.module 'iotApp.routes', ['ui.router']
# 	.config ['$stateProvider', ($stateProvider) ->
#
# 	]
#
# 	.config ['$locationProvider', ($locationProvider) ->
# 		# make URL's comply with HTML5 rules
# 		$locationProvider.html5Mode
# 			enabled: true
# 			requireBase: false # if we need to support IE9, remove this line
# 	]
#
# module.exports = mainRte