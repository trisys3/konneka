(function() {
  'use strict';
  var addModule;

  addModule = function(name, parent, deps) {
    angular.module(name, deps || []);
    if (parent) {
      return angular.module(parent).requires.push(name);
    }
  };

}).call(this);

//# sourceMappingURL=config.js.map
