<!DOCTYPE html>
<html lang="en" ng-app="iotApp">
<head>
  <meta charset="utf-8">
  <title>My AngularJS App</title>
  <link rel="stylesheet" href="/dist/min-libs/bootstrap-3.0.3/bootstrap.min.css" />
  <link rel="stylesheet" href="/dist/app/modules/main/css/app.min.css" />
</head>
<body data-ng-controller="RootCtrl">

  <!--ng-include with the page that is actually in the URL-->
  <ng-include ng-controller="RouteCtrl" src="currUrl"></ng-include>

  <!-- <div>Angular seed app: v<span app-version></span></div> -->

  <!-- In production use:
  <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.7/angular.min.js"></script>
  <script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
  -->

  <!--External JavaScript scripts-->
  <script src="/dist/min-libs/jquery-2.0.3/jquery.min.js"></script>
  <script src="/dist/min-libs/bootstrap-3.0.3/bootstrap.min.js"></script>
  <script src="/dist/min-libs/angular-1.2.7/angular.min.js"></script>
  <script src="/dist/min-libs/angular-1.2.7/angular-route.min.js"></script>
  <!--AngularJS scripts-->
  <script src="/dist/app/modules/main/js/services/rootServ.min.js"></script>
  <script src="/dist/app/modules/main/js/controllers/rootCtrl.min.js"></script>
  <script src="/dist/app/modules/main/js/filters/rootFils.min.js"></script>
  <script src="/dist/app/modules/main/js/directives/rootDirec.min.js"></script>
  <script src="/dist/app/modules/main/js/routes.min.js"></script>
  <script src="/dist/app/modules/main/js/app.min.js"></script>
</body>
</html>
