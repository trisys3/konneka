'use strict'

# account controller(s)
angular.module 'accountsApp.controllers', []
	.controller 'accountsCtrl', ['$scope', '$http', ($scope, $http) ->

		# initialize variables
		$scope.newUser = {};
		$scope.loginUser = {};
		
		$scope.signup = ->
			$http.put '/signup', $scope.newUser

		$scope.login = ->
			$http.post '/login', $scope.loginUser

	]