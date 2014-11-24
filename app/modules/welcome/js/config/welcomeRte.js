(function() {
  'use strict';
  angular.module('welcomeApp.routes', ['ui.router']).config([
    '$stateProvider', function($stateProvider) {
      return $stateProvider.state('welcome', {
        url: '/',
        controller: 'welcomeCtrl',
        templateUrl: '/modules/welcome/views/welcome.html'
      });
    }
  ]);

}).call(this);

//# sourceMappingURL=welcomeRte.js.map
