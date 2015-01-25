'use strict'

angular = require 'angular'

# account controller(s)
angular.module 'accountsApp.controllers', []
  .controller 'accountsCtrl', ['$scope', '$http', '$location', ($scope, $http, $location) ->

    # initialize variables
    $scope.newUser = {}
    $scope.loginUser = {}
    
    $scope.signup = ->
      $http.put '/signup', $scope.newUser
      .success ->
        $location.path '/'

    $scope.login = ->
      $http.post '/login', $scope.loginUser
      .success ->
        $location.path '/'

  ]