'use strict';

var _ = require('lodash');

// variables & functions to be used in all environments
module.exports = {
	// get the main JavaScript pages for our app
	getJs: function(minned) {
		// if we want our scripts minified, add the appropriate pre-suffix
		var getMin = '';
		if(minned === true) {
			getMin = '.min';
		}
		else if(_.isString(minned)) {
			getMin = minned;
		}
		var scripts = [
			
			// jQuery
			'/min-libs/jquery/dist/jquery' + getMin + '.js',

			// jQuery UI
			'/min-libs/jquery-ui/jquery-ui' + getMin + '.js',

			// JavaScript functionality for Bootstrap
			'/min-libs/bootstrap-css/js/bootstrap' + getMin + '.js',

			// main Angular scripts
			'/min-libs/angular/angular' + getMin + '.js',
			'/min-libs/angular-route/angular-route' + getMin + '.js',
			'/min-libs/angular-resource/angular-resource' + getMin + '.js',
			'/min-libs/angular-animate/angular-animate' + getMin + '.js',
			'/min-libs/angular-cookies/angular-cookies' + getMin + '.js',

			// Angular UI
			'/min-libs/angular-bootstrap/ui-bootstrap' + getMin + '.js',
			'/min-libs/angular-ui-router/release/angular-ui-router' + getMin + '.js',
			'/min-libs/angular-ui-utils/ui-utils' + getMin + '.js',

			// our core Angular scripts, in our "main" module
			'/modules/main/js/head' + getMin + '.js'
		];
		
		return scripts;
	},

	// get our main CSS stylesheets
	getCss: function(minned) {
		// if we want our styles minified, add the appropriate pre-suffix
		var getMin = '';
		if(minned === true) {
			getMin = '.min';
		}
		else if(_.isString(minned)) {
			getMin = minned;
		}
		var styles = [

			// Bootstrap
			'/min-libs/bootstrap-css/css/bootstrap' + getMin + '.css',
			'/min-libs/bootstrap-css/css/bootstrap-theme' + getMin + '.css',

			// our current jQuery theme
			'/min-libs/jquery-ui/themes/base/all' + getMin + '.css',

			// Angular CSP stylesheet
			'/min-libs/angular/angular-csp' + getMin + '.css'
		];

		return styles;
	}
};
	