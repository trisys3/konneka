'use strict';

// variables and functions for production
module.exports = {
	port: process.env.SERVER_PORT || 3001, // server port for our app
	dbUrl: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://konneka.org:' + (process.env.MONGO_PORT || 27018) + '/mean', // our database URL for Mongoose
	sessionSecret: 'Internet of Things', // secret for our sessions (change this to something more secure ASAP)
	appRoot: 'dist/app/modules', // root for the client-side portions of our app

	// get the main JavaScript pages for our app, minified for production
	getJs: function() {
		var scripts = [

			// jQuery
			'/min-libs/jquery/dist/jquery.min.js',

			// jQuery UI
			'/min-libs/jquery-ui/jquery-ui.min.js',

			// JavaScript functionality for Bootstrap
			'/min-libs/bootstrap-css/js/bootstrap.min.js',

			// core Angular scripts
			'/min-libs/angular/angular.min.js',
			'/min-libs/angular-route/angular-route.min.js',
			'/min-libs/angular-resource/angular-resource.min.js',
			'/min-libs/angular-animate/angular-animate.min.js',
			'/min-libs/angular-cookies/angular-cookies.min.js',

			// Angular UI
			'/min-libs/angular-bootstrap/ui-bootstrap.min.js',
			'/min-libs/angular-ui-router/release/angular-ui-router.min.js',
			'/min-libs/angular-ui-utils/ui-utils.min.js',

			// our "main" module scripts
			'/modules/main/js/head.min.js',
			'/modules/main/js/routes.min.js',
			'/modules/main/js/url.min.js',
		];

		return scripts;
	},

	// get Angular scripts for another one of our modules
	getModularJs: function(module) {
		var moduleScripts = [];
		if(module) {
			moduleScripts.push(
				'/modules/' + module + '/js/app.min.js',
				'/modules/' + module + '/js/controllers/' + module + 'Ctrl.min.js',
				'/modules/' + module + '/js/services/' + module + 'Serv.min.js',
				'/modules/' + module + '/js/filters/' + module + 'Fils.min.js',
				'/modules/' + module + '/js/directives/' + module + 'Direc.min.js'
			);
		}

		return moduleScripts;
	},

	// get our CSS stylesheets
	getCss: function() {
		var styles = [

			// Bootstrap
			'/min-libs/bootstrap-css/css/bootstrap.css',
			'/min-libs/bootstrap-css/css/bootstrap-theme.css',

			// jQuery UI themes
			'/min-libs/jquery-ui/themes/base/all.css',
		];

		return styles;
	},

	// get stylesheets from another one of our modules
	getModularCss: function(module) {
		var moduleStyles = [];
		if(module) {
			moduleStyles.push(
				'/modules/' + module + '/css/main.css'
			);
		}

		return moduleStyles;
	}
};