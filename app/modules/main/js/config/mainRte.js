(function() {
  'use strict';
  angular.module('iotApp.routes', ['ui.router']).config(['$stateProvider', function($stateProvider) {}]).config([
    '$locationProvider', function($locationProvider) {
      return $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
    }
  ]);

}).call(this);

//# sourceMappingURL=mainRte.js.map
