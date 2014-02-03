<iot-sub iot-module="iotOwners" ng-controller="OwnersCtrl">

	<?php
	// if I ever decide to create nested ng-app, uncomment these
	/*<script src="/dist/app/modules/owners/js/app.min.js"></script>
	<script src="/dist/app/modules/owners/js/controllers/ownersCtrl.min.js"></script>
	<script src="/dist/app/modules/owners/js/filters/ownersFils.min.js"></script>
	<script src="/dist/app/modules/owners/js/directives/ownersDirec.min.js"></script>
	<script src="/dist/app/modules/owners/js/services/ownersServ.min.js"></script>*/
	?>

	<p>Hello, <iot-owner name="this">{{ owner.name }}</iot-owner>!</p>

</iot-sub>