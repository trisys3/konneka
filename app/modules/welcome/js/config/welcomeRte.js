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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL3dlbGNvbWUvY29mZmVlL2NvbmZpZy93ZWxjb21lUnRlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLEVBQUEsWUFBQSxDQUFBO0FBQUEsRUFHQSxPQUFPLENBQUMsTUFBUixDQUFlLG1CQUFmLEVBQW9DLENBQUMsV0FBRCxDQUFwQyxDQUNDLENBQUMsTUFERixDQUNTO0lBQUMsZ0JBQUQsRUFBbUIsU0FBQyxjQUFELEdBQUE7YUFDMUIsY0FDQSxDQUFDLEtBREQsQ0FDTyxTQURQLEVBRUM7QUFBQSxRQUFBLEdBQUEsRUFBSyxHQUFMO0FBQUEsUUFDQSxVQUFBLEVBQVksYUFEWjtBQUFBLFFBRUEsV0FBQSxFQUFhLHFDQUZiO09BRkQsRUFEMEI7SUFBQSxDQUFuQjtHQURULENBSEEsQ0FBQTtBQUFBIiwiZmlsZSI6ImFwcC9tb2R1bGVzL3dlbGNvbWUvanMvY29uZmlnL3dlbGNvbWVSdGUuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG4jIHJvdXRlcyBmb3Igb3VyIHdlbGNvbWUgbW9kdWxlXHJcbmFuZ3VsYXIubW9kdWxlICd3ZWxjb21lQXBwLnJvdXRlcycsIFsndWkucm91dGVyJ11cclxuXHQuY29uZmlnIFsnJHN0YXRlUHJvdmlkZXInLCAoJHN0YXRlUHJvdmlkZXIpIC0+XHJcblx0XHQkc3RhdGVQcm92aWRlclxyXG5cdFx0LnN0YXRlICd3ZWxjb21lJyxcclxuXHRcdFx0dXJsOiAnLydcclxuXHRcdFx0Y29udHJvbGxlcjogJ3dlbGNvbWVDdHJsJ1xyXG5cdFx0XHR0ZW1wbGF0ZVVybDogJy9tb2R1bGVzL3dlbGNvbWUvdmlld3Mvd2VsY29tZS5odG1sJ1xyXG5cdF0iXX0=