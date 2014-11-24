(function() {
  'use strict';
  angular.module('ownersApp.routes', ['ui.router']).config([
    '$stateProvider', function($stateProvider) {
      return $stateProvider.state('owners', {
        url: '/owners',
        controller: 'ownersCtrl',
        templateUrl: ''
      });
    }
  ]);

}).call(this);

//# sourceMappingURL=ownersRte.js.map
