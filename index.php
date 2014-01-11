<!doctype html>
<html lang="en" ng-app="myApp">
<head>
  <meta charset="utf-8">
  <title>My AngularJS App</title>
  <link rel="stylesheet" href="dist/min-libs/bootstrap-3.0.3/bootstrap.min.css" />
  <link rel="stylesheet" href="dist/app/css/app.min.css" />
</head>
<body>

  <div ng-view></div>

  <div>Angular seed app: v<span app-version></span></div>

  <!-- In production use:
  <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.7/angular.min.js"></script>
  -->
  <script src="dist/min-libs/bootstrap-3.0.3/bootstrap.min.js"></script>
  <script src="dist/min-libs/angular-1.2.7/angular.min.js"></script>
  <script src="dist/min-libs/angular-1.2.7/angular-route.min.js"></script>
  <script src="dist/app/js/app.min.js"></script>
  <script src="dist/app/js/services/services.min.js"></script>
  <script src="dist/app/js/controllers/controllers.min.js"></script>
  <script src="dist/app/js/filters/filters.min.js"></script>
  <script src="dist/app/js/directives/directives.min.js"></script>
</body>
</html>
