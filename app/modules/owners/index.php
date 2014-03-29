<iot-sub iot-module="iotOwners" ng-controller="OwnersCtrl" iot-title="iot-title">

	<?php
	// if I ever decide to create nested ng-app, uncomment these
	/*<script src="/dist/app/modules/owners/js/app.min.js"></script>
	<script src="/dist/app/modules/owners/js/controllers/ownersCtrl.min.js"></script>
	<script src="/dist/app/modules/owners/js/filters/ownersFils.min.js"></script>
	<script src="/dist/app/modules/owners/js/directives/ownersDirec.min.js"></script>
	<script src="/dist/app/modules/owners/js/services/ownersServ.min.js"></script>*/
	?>

	<p>Hello, <iot-owner name="url">{{ owner.name }}</iot-owner>!</p>

	<ng-switch on="log-in">
		<?php/*<ng-include ng-include-when="logged-in" src="modules/account/loggedin/index.php">
		<ng-include ng-include-when="sign-up" src="modules/account/signup/index.php">
		<ng-include ng-include-when="log-in" src="modules/account/login/index.php">
		<ng-include ng-include-when="default" src="modules/account/loggedout/index.php">*/?>
</iot-sub>