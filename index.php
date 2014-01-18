<!DOCTYPE html>
<html lang="en" ng-app="iotApp"><!--our module is initialized here-->
<head>
  <meta charset="utf-8"><!--declares the site's encoding as UTF-8-->
  <title>Loading...</title><!--the title will go here, once the main sub-page is loaded-->
  <!--external CSS stylesheets-->
  <link rel="stylesheet" href="/dist/min-libs/bootstrap-3.0.3/bootstrap.min.css" /><!--Twitter Bootstrap, version 3.0.3-->
  <link rel="stylesheet" href="/dist/app/modules/main/css/app.min.css" /><!--the root stylesheet-->
</head>
<body data-ng-controller="RootCtrl"><!--the root controller is initialized here-->

  <!--ng-include with the page that is actually in the URL-->
  <ng-include ng-controller="RouteCtrl" src="currUrl"></ng-include><!--the routing controller is initialized here-->

  <!-- <div>Angular seed app: v<span app-version></span></div> -->

  <!-- In production use:
  <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.7/angular.min.js"></script> AngularJS, version 1.2.7, from Google's CDN
  <script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script> jQuery, version 2.0.3, from Google's CDN
  -->

  <!--External JavaScript scripts-->
  <script src="/dist/min-libs/jquery-2.0.3/jquery.min.js"></script><!--jQuery, version 2.0.3-->
  <script src="/dist/min-libs/bootstrap-3.0.3/bootstrap.min.js"></script><!--Twitter Bootstrap's JavaScript coponents-->
  <script src="/dist/min-libs/angular-1.2.7/angular.min.js"></script><!--AngularJS, version 1.2.7-->
  <script src="/dist/min-libs/angular-1.2.7/angular-route.min.js"></script><!--AngularJS's routing page-->
  <!--AngularJS scripts-->
  <script src="/dist/app/modules/main/js/services/rootServ.min.js"></script><!--all our root services-->
  <script src="/dist/app/modules/main/js/controllers/rootCtrl.min.js"></script><!--all our root controllers-->
  <script src="/dist/app/modules/main/js/filters/rootFils.min.js"></script><!--all our root filters-->
  <script src="/dist/app/modules/main/js/directives/rootDirec.min.js"></script><!--all our root directives-->
  <script src="/dist/app/modules/main/js/routes.min.js"></script><!--the routing module for the site-->
  <script src="/dist/app/modules/main/js/app.min.js"></script><!--the root module for the site-->
</body>
</html>
