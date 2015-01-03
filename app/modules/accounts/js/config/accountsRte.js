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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2FjY291bnRzL2NvZmZlZS9jb25maWcvYWNjb3VudHNSdGUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsRUFBQSxZQUFBLENBQUE7QUFBQSxFQUdBLE9BQU8sQ0FBQyxNQUFSLENBQWUsb0JBQWYsRUFBcUMsQ0FBQyxXQUFELENBQXJDLENBQ0MsQ0FBQyxNQURGLENBQ1M7SUFBQyxnQkFBRCxFQUFtQixTQUFDLGNBQUQsR0FBQTthQUMxQixjQUNBLENBQUMsS0FERCxDQUNPLFFBRFAsRUFFQztBQUFBLFFBQUEsR0FBQSxFQUFLLFNBQUw7QUFBQSxRQUNBLFdBQUEsRUFBYSxxQ0FEYjtPQUZELENBS0EsQ0FBQyxLQUxELENBS08sT0FMUCxFQU1DO0FBQUEsUUFBQSxHQUFBLEVBQUssUUFBTDtBQUFBLFFBQ0EsV0FBQSxFQUFhLG9DQURiO09BTkQsRUFEMEI7SUFBQSxDQUFuQjtHQURULENBSEEsQ0FBQTtBQUFBIiwiZmlsZSI6ImFwcC9tb2R1bGVzL2FjY291bnRzL2pzL2NvbmZpZy9hY2NvdW50c1J0ZS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbiMgb3VyIGFjY291bnQgbW9kdWxlJ3Mgcm91dGVzXHJcbmFuZ3VsYXIubW9kdWxlICdhY2NvdW50c0FwcC5yb3V0ZXMnLCBbJ3VpLnJvdXRlciddXHJcblx0LmNvbmZpZyBbJyRzdGF0ZVByb3ZpZGVyJywgKCRzdGF0ZVByb3ZpZGVyKSAtPlxyXG5cdFx0JHN0YXRlUHJvdmlkZXJcclxuXHRcdC5zdGF0ZSAnc2lnbnVwJyxcclxuXHRcdFx0dXJsOiAnL3NpZ251cCdcclxuXHRcdFx0dGVtcGxhdGVVcmw6ICcvbW9kdWxlcy9hY2NvdW50cy92aWV3cy9zaWdudXAuaHRtbCdcclxuXHJcblx0XHQuc3RhdGUgJ2xvZ2luJyxcclxuXHRcdFx0dXJsOiAnL2xvZ2luJ1xyXG5cdFx0XHR0ZW1wbGF0ZVVybDogJy9tb2R1bGVzL2FjY291bnRzL3ZpZXdzL2xvZ2luLmh0bWwnXHJcblx0XSJdfQ==