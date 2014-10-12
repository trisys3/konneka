'use strict';

// variables and functions to be used in our development environment
module.exports = {
	port: process.env.SERVER_PORT || 3000, // port for our server to listen on
	dbUrl: 'mongodb://konneka.org:' + (process.env.MONGO_PORT || 27017) + '/mean-dev', // our database URL for Mongoose
	sessionSecret: 'Internet of Monkeys', // session secret
	appRoot: 'app/modules', // root of the client parts of our app

	// get the main JavaScript pages for our app, unminified for development
	getJs: function() {
		var scripts = [
			
			// jQuery
			'/min-libs/jquery/dist/jquery.js',

			// jQuery UI
			'/min-libs/jquery-ui/jquery-ui.js',

			// JavaScript functionality for Bootstrap
			'/min-libs/bootstrap-css/js/bootstrap.js',

			// main Angular scripts
			'/min-libs/angular/angular.js',
			'/min-libs/angular-route/angular-route.js',
			'/min-libs/angular-resource/angular-resource.js',
			'/min-libs/angular-animate/angular-animate.js',
			'/min-libs/angular-cookies/angular-cookies.js',

			// Angular UI
			'/min-libs/angular-bootstrap/ui-bootstrap.js',
			'/min-libs/angular-ui-router/release/angular-ui-router.js',
			'/min-libs/angular-ui-utils/ui-utils.js',

			// our core Angular scripts, in our "main" module
			'/modules/main/js/head.js',
			'/modules/main/js/routes.js',
			'/modules/main/js/url.js'
		];
		
		return scripts;
	},

	// get Angular scripts for another one of our modules
	getModularJs: function(module) {
		var moduleScripts = [];
		if(module) {
			moduleScripts.push(
				'/modules/' + module + '/js/app.js',
				'/modules/' + module + '/js/controllers/' + module + 'Ctrl.js',
				'/modules/' + module + '/js/services/' + module + 'Serv.js',
				'/modules/' + module + '/js/filters/' + module + 'Fils.js',
				'/modules/' + module + '/js/directives/' + module + 'Direc.js'
			);
		}

		return moduleScripts;
	},

	// get our main CSS stylesheets
	getCss: function() {
		var styles = [

			// Bootstrap
			'/min-libs/bootstrap-css/css/bootstrap.css',
			'/min-libs/bootstrap-css/css/bootstrap-theme.css',

			// our current jQuery theme
			'/min-libs/jquery-ui/themes/base/all.css',

			// Angular CSP stylesheet
			'/min-libs/angular/angular-csp.css'
		];

		return styles;
	},

	// get the stylesheet(s) for the current Angular module
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