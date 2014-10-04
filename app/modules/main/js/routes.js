(function() {
  'use strict';
  angular.module('iotRoute', ['ngRoute']).factory('IotRoute', [
    '$route', function($route) {
      var IotRoute, IotRouteService, iotModule, iotObject, iotOwner, iotTitle;
      iotOwner = "";
      iotObject = "";
      iotTitle = "";
      iotModule = "";
      IotRoute = [];
      IotRouteService = {};
      IotRouteService.getUrlOwner = function() {
        if ($route.current.params.owner) {
          iotOwner = $route.current.params.owner;
        } else {
          iotOwner = 'sample';
        }
        return iotOwner;
      };
      IotRouteService.setUrlOwner = function(owner) {
        return $route.current.params.owner = owner;
      };
      IotRouteService.getUrlObject = function() {
        if ($route.current.params.objName) {
          iotObject = $route.current.params.objName;
        } else {
          iotObject = 'sample';
        }
        return iotObject;
      };
      IotRouteService.setUrlObject = function(objName) {
        return $route.current.params.objName = objName;
      };
      IotRouteService.getModule = function() {
        if ($route.current.module) {
          iotModule = $route.current.module;
        } else {
          iotModule = "welcome";
        }
        return iotModule;
      };
      IotRouteService.setModule = function(iotModule) {
        return $route.current.module = iotModule;
      };
      return IotRouteService;
    }
  ]);

}).call(this);

//# sourceMappingURL=routes.js.map
