(function() {
  'use strict';
  var angular;

  angular = require('angular');

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2FjY291bnRzL2NvZmZlZS9jb25maWcvYWNjb3VudHNSdGUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsRUFBQSxZQUFBLENBQUE7QUFBQSxNQUFBLE9BQUE7O0FBQUEsRUFFQSxPQUFBLEdBQVUsT0FBQSxDQUFRLFNBQVIsQ0FGVixDQUFBOztBQUFBLEVBS0EsT0FBTyxDQUFDLE1BQVIsQ0FBZSxvQkFBZixFQUFxQyxDQUFDLFdBQUQsQ0FBckMsQ0FDRSxDQUFDLE1BREgsQ0FDVTtJQUFDLGdCQUFELEVBQW1CLFNBQUMsY0FBRCxHQUFBO2FBQ3pCLGNBQ0UsQ0FBQyxLQURILENBQ1MsUUFEVCxFQUVJO0FBQUEsUUFBQSxHQUFBLEVBQUssU0FBTDtBQUFBLFFBQ0EsV0FBQSxFQUFhLHFDQURiO09BRkosQ0FLRSxDQUFDLEtBTEgsQ0FLUyxPQUxULEVBTUk7QUFBQSxRQUFBLEdBQUEsRUFBSyxRQUFMO0FBQUEsUUFDQSxXQUFBLEVBQWEsb0NBRGI7T0FOSixFQUR5QjtJQUFBLENBQW5CO0dBRFYsQ0FMQSxDQUFBO0FBQUEiLCJmaWxlIjoiYXBwL21vZHVsZXMvYWNjb3VudHMvanMvY29uZmlnL2FjY291bnRzUnRlLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXHJcblxyXG5hbmd1bGFyID0gcmVxdWlyZSAnYW5ndWxhcidcclxuXHJcbiMgb3VyIGFjY291bnQgbW9kdWxlJ3Mgcm91dGVzXHJcbmFuZ3VsYXIubW9kdWxlICdhY2NvdW50c0FwcC5yb3V0ZXMnLCBbJ3VpLnJvdXRlciddXHJcbiAgLmNvbmZpZyBbJyRzdGF0ZVByb3ZpZGVyJywgKCRzdGF0ZVByb3ZpZGVyKSAtPlxyXG4gICAgJHN0YXRlUHJvdmlkZXJcclxuICAgICAgLnN0YXRlICdzaWdudXAnLFxyXG4gICAgICAgIHVybDogJy9zaWdudXAnXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6ICcvbW9kdWxlcy9hY2NvdW50cy92aWV3cy9zaWdudXAuaHRtbCdcclxuXHJcbiAgICAgIC5zdGF0ZSAnbG9naW4nLFxyXG4gICAgICAgIHVybDogJy9sb2dpbidcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJy9tb2R1bGVzL2FjY291bnRzL3ZpZXdzL2xvZ2luLmh0bWwnXHJcbiAgXSJdfQ==