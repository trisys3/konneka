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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2FjY291bnRzL2NvZmZlZS9jb25maWcvYWNjb3VudHNSdGUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsRUFBQSxZQUFBLENBQUE7QUFBQSxNQUFBLE9BQUE7O0FBQUEsRUFFQSxPQUFBLEdBQVUsT0FBQSxDQUFRLFNBQVIsQ0FGVixDQUFBOztBQUFBLEVBS0EsT0FBTyxDQUFDLE1BQVIsQ0FBZSxvQkFBZixFQUFxQyxDQUFDLFdBQUQsQ0FBckMsQ0FDQyxDQUFDLE1BREYsQ0FDUztJQUFDLGdCQUFELEVBQW1CLFNBQUMsY0FBRCxHQUFBO2FBQzFCLGNBQ0EsQ0FBQyxLQURELENBQ08sUUFEUCxFQUVDO0FBQUEsUUFBQSxHQUFBLEVBQUssU0FBTDtBQUFBLFFBQ0EsV0FBQSxFQUFhLHFDQURiO09BRkQsQ0FLQSxDQUFDLEtBTEQsQ0FLTyxPQUxQLEVBTUM7QUFBQSxRQUFBLEdBQUEsRUFBSyxRQUFMO0FBQUEsUUFDQSxXQUFBLEVBQWEsb0NBRGI7T0FORCxFQUQwQjtJQUFBLENBQW5CO0dBRFQsQ0FMQSxDQUFBO0FBQUEiLCJmaWxlIjoiYXBwL21vZHVsZXMvYWNjb3VudHMvanMvY29uZmlnL2FjY291bnRzUnRlLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuYW5ndWxhciA9IHJlcXVpcmUgJ2FuZ3VsYXInXHJcblxyXG4jIG91ciBhY2NvdW50IG1vZHVsZSdzIHJvdXRlc1xyXG5hbmd1bGFyLm1vZHVsZSAnYWNjb3VudHNBcHAucm91dGVzJywgWyd1aS5yb3V0ZXInXVxyXG5cdC5jb25maWcgWyckc3RhdGVQcm92aWRlcicsICgkc3RhdGVQcm92aWRlcikgLT5cclxuXHRcdCRzdGF0ZVByb3ZpZGVyXHJcblx0XHQuc3RhdGUgJ3NpZ251cCcsXHJcblx0XHRcdHVybDogJy9zaWdudXAnXHJcblx0XHRcdHRlbXBsYXRlVXJsOiAnL21vZHVsZXMvYWNjb3VudHMvdmlld3Mvc2lnbnVwLmh0bWwnXHJcblxyXG5cdFx0LnN0YXRlICdsb2dpbicsXHJcblx0XHRcdHVybDogJy9sb2dpbidcclxuXHRcdFx0dGVtcGxhdGVVcmw6ICcvbW9kdWxlcy9hY2NvdW50cy92aWV3cy9sb2dpbi5odG1sJ1xyXG5cdF0iXX0=