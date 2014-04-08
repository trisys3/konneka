<!DOCTYPE html>
<html lang="en" id="ng-app" ng-app="iotApp"><!--our module is initialized here-->
<head ng-controller="IotHeadCtrl">
  <meta charset="utf-8"><!--declares the site's encoding as UTF-8-->
  <title>Loading...</title><!--the title will go here, once the main sub-page is loaded-->
  <!--external CSS stylesheets-->
  <link rel="stylesheet" href="/modules/main/css/app.min.css" /><!--the root stylesheet-->
  <link rel="stylesheet" href="/min-libs/bootstrap/css/bootstrap.min.css" /><!--Twitter Bootstrap, version 3.0.3-->
</head>
<body ng-controller="IotRootCtrl"><!--the root controller is initialized here-->

  <ng-switch on="log_in" ng-controller="IotAccCtrl">
    <div ng-switch-when="login"><!--while user is logging in, display log-in page-->
      <ng-include src="/modules/account/login"></ng-include>
    </div>
    <div ng-switch-when="signup"><!--while user is signing up, display sign-up page-->
      <ng-include src="/modules/account/signup"></ng-include>
    </div>
    <div ng-switch-default="ng-switch-default"><!--when the user is not signing up or logging in, go to URL in browser-->
      <!--ng-include the page that is actually in the URL-->
      <ng-include ng-controller="IotUrlCtrl" src="currUrl"></ng-include><!--this is where the "inside" page is situated-->
    </div>
  </ng-switch>

  <!-- <div>Angular seed app: v<span app-version></span></div> -->

  <!-- In production use:
  <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.7/angular.min.js"></script> AngularJS, version 1.2.7, from Google's CDN
  <script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script> jQuery, version 2.0.3, from Google's CDN
  -->

  <!--External JavaScript scripts-->
  <script src="/min-libs/jquery-2.0.3/jquery.min.js"></script><!--jQuery, version 2.0.3-->
  <script src="/min-libs/bootstrap/js/bootstrap.min.js"></script><!--Twitter Bootstrap's JavaScript coponents-->
  <script src="/min-libs/angular/angular.js"></script><!--AngularJS, version 1.2.7-->
  <script src="/min-libs/angular-route/angular-route.min.js"></script><!--AngularJS's routing page-->
  
  <!--AngularJS scripts-->
  <!--root scripts, only needed for this view-->
  <script src="/modules/main/js/services/rootServ.min.js"></script><!--all our root services-->
  <script src="/modules/main/js/controllers/rootCtrl.min.js"></script><!--all our root controllers-->
  <script src="/modules/main/js/filters/rootFils.min.js"></script><!--all our root filters-->
  <script src="/modules/main/js/directives/rootDirec.min.js"></script><!--all our root directives-->
  <script src="/modules/main/js/routes.min.js"></script><!--the routing module for the site-->
  <script src="/modules/main/js/url.min.js"></script><!--the URL-interpreting module for the site-->
  <script src="/modules/main/js/head.min.js"></script><!--the module for the (single-page) site's header-->
  <script src="/modules/main/js/app.min.js"></script><!--the root module for the site-->

  <!--scripts for other pages, needed so Angular does not have to be re-bootstrapped-->
  <script src="/modules/objects/js/app.min.js"></script><!--main script for objects module-->
  <script src="/modules/objects/js/controllers/objectsCtrl.min.js"></script><!--controllers for objects module-->
  <script src="/modules/objects/js/services/objectsServ.min.js"></script><!--services for objects module-->
  <script src="/modules/objects/js/filters/objectsFils.min.js"></script><!--filters for objects module-->
  <script src="/modules/objects/js/directives/objectsDirec.min.js"></script><!--directives for objects module-->

  <script src="/modules/owners/js/app.min.js"></script><!--main script for owners module-->
  <script src="/modules/owners/js/controllers/ownersCtrl.min.js"></script><!--controllers for owners module-->
  <script src="/modules/owners/js/services/ownersServ.min.js"></script><!--services for owners module-->
  <script src="/modules/owners/js/filters/ownersFils.min.js"></script><!--filters for owners module-->
  <script src="/modules/owners/js/directives/ownersDirec.min.js"></script><!--directives for owners module-->

  <script src="/modules/welcome/js/app.min.js"></script><!--main script for welcome module-->
  <script src="/modules/welcome/js/controllers/welcomeCtrl.min.js"></script><!--controllers for welcome module-->
  <script src="/modules/welcome/js/services/welcomeServ.min.js"></script><!--services for welcome module-->
  <script src="/modules/welcome/js/filters/welcomeFils.min.js"></script><!--filters for welcome module-->
  <script src="/modules/welcome/js/directives/welcomeDirec.min.js"></script><!--directives for welcome module-->

  <script src="/modules/account/js/app.min.js"></script><!--main script for account module-->
  <script src="/modules/account/js/controllers/accountCtrl.min.js"></script><!--controllers for account module-->
  <script src="/modules/account/js/services/accountServ.min.js"></script><!--services for account module-->
  <script src="/modules/account/js/filters/accountFils.min.js"></script><!--filters for account module-->
  <script src="/modules/account/js/directives/accountDirec.min.js"></script><!--directives for account module-->
</body>
</html>
