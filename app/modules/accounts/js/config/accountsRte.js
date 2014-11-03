(function() {
  'use strict';
  angular.module('accountsApp.routes', ['ui.router']).config([
    '$stateProvider', function($stateProvider) {
      return $stateProvider.state('signup', {
        url: '/signup',
        templateUrl: '/modules/accounts/views/signup.html'
      }).state('login', {
        url: '/login',
        templateUrl: '/modules/accounts/views/login.html'
      });
    }
  ]);

}).call(this);

//# sourceMappingURL=accountsRte.js.map
