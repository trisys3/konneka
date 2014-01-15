<!doctype html>
<html lang="en" ng-app="myApp">
<head>
  <meta charset="utf-8">
  <title>My AngularJS App</title>
  <link rel="stylesheet" href="dist/min-libs/bootstrap-3.0.3/bootstrap.min.css" />
  <link rel="stylesheet" href="dist/app/css/app.min.css" />
</head>
<body>

  <ng-include src="currUrl"></ng-include>

  <!-- <div>Angular seed app: v<span app-version></span></div> -->

  <!-- In production use:
  <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.7/angular.min.js"></script>
  <script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
  -->
  <script src="dist/min-libs/jquery-2.0.3/jquery.min.js"></script>
  <script src="dist/min-libs/bootstrap-3.0.3/bootstrap.min.js"></script>
  <script src="dist/min-libs/angular-1.2.7/angular.min.js"></script>
  <script src="dist/min-libs/angular-1.2.7/angular-route.min.js"></script>
  <script src="dist/app/modules/main/js/app.min.js"></script>
  <script src="dist/app/modules/main/js/routes.min.js"></script>
  <script src="dist/app/modules/main/js/services/services.min.js"></script>
  <script src="dist/app/modules/main/js/controllers/controllers.min.js"></script>
  <script src="dist/app/modules/main/js/filters/filters.min.js"></script>
  <script src="dist/app/modules/main/js/directives/directives.min.js"></script>
</body>
</html>
