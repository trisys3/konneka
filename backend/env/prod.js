'use strict';

module.exports = {
	port: process.env.SERVER_PORT || 3001,
	dbUrl: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://konneka.org:' + (process.env.MONGO_PORT || 27018) + '/mean',
	sessionSecret: 'Internet of Things',
	appRoot: 'dist/',
	getJs: function(module) {
		var scripts = [
			'/min-libs/jquery/dist/jquery.min.js',

			'/min-libs/jquery-ui/jquery-ui.min.js',

			'/min-libs/bootstrap-css/js/bootstrap.min.js',

			'/min-libs/angular/angular.min.js',
			'/min-libs/angular-route/angular-route.min.js',
			'/min-libs/angular-resource/angular-resource.min.js',
			'/min-libs/angular-animate/angular-animate.min.js',
			'/min-libs/angular-cookies/angular-cookies.min.js',

			'/min-libs/angular-bootstrap/ui-bootstrap.min.js',
			'/min-libs/angular-ui-router/release/angular-ui-router.min.js',
			'/min-libs/angular-ui-utils/ui-utils.min.js',

			'/modules/main/js/app.min.js',
			'/modules/main/js/head.min.js',
			'/modules/main/js/routes.min.js',
			'/modules/main/js/url.min.js',

			'/modules/' + module + '/js/app.min.js',
			'/modules/' + module + '/js/controllers/' + module + 'Ctrl.min.js',
			'/modules/' + module + '/js/services/' + module + 'Serv.min.js',
			'/modules/' + module + '/js/filters/' + module + 'Fils.min.js',
			'/modules/' + module + '/js/directives/' + module + 'Direc.min.js'
		];

		return scripts;
	},
	getCss: function(module) {
		var styles = [
			'/min-libs/bootstrap-css/css/bootstrap.css',
			'/min-libs/bootstrap-css/css/bootstrap-theme.css',

			'/min-libs/jquery-ui/themes/base/all.css',

			'/modules/' + module + '/css/main.css'
		];

		return styles;
	}
};