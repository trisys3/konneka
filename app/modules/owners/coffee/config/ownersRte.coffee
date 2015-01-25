'use strict'

angular = require 'angular'

# our owner routes
ownersRte = angular.module 'ownersApp.routes', ['ui.router']
  .config ['$stateProvider', ($stateProvider) ->
    $stateProvider
      .state 'owners',
        url: '/owners'
        controller: 'ownersCtrl'
        templateUrl: ''
  ]

module.exports = ownersRte