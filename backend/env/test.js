'use strict';

var _ = require('lodash');
var path = require('path');
var fs = require('fs');

module.exports = {
	port: process.env.SERVER_PORT || 3002,
	db: 'mongodb://konneka.org:' + (process.env.MONGO_PORT || 27019) + '/mean-test',
	sessionSecret: 'Internet of Guinea Pigs',
	appRoot: 'test',
	// get the main JavaScript pages for our app, unminified for testing
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

	// get our "test" scripts, separated by testing framework and environment
	getModularJs: function(fram, env, test) {
		var moduleScripts = [];
		if(_.isString(test)) {
			test = [test];
		}
		if(!test) {
			var test_path = path.normalize(__dirname + '../../test/' + fram + '/' + env);
			fs.readdirSync(test_path).forEach(function(test) {
				moduleScripts.push(
					'/' + fram + '/' + env + '/' + test
				);
			});
		}
		else {
			test.forEach(function(val, test) {
				if(test.match(/\/$/)) {
					var test_path = path.normalize(__dirname + '../../test/' + fram + '/' + env + '/' + test);
					fs.readdirSync(test_path).forEach(function(test) {
						moduleScripts.push(
							'/' + fram + '/' + env + '/' + test
						);
					});
				}
				else {
					moduleScripts.push(
						'/' + fram + '/' + env + '/' + test + '.js'
					);
				}
			});
		}
	},

	getKarma: function(module) {
		var karmaFiles = [
			'jasmine/frontend/' + module + '/**/*.js',
      'lib/angular/angular-mocks.js',
      '../app/min-libs/angular-mocks/angular-mocks.js'
     ];

     return karmaFiles;
	},

	getJasmine: function() {
		var jasmineFiles = [];

		return jasmineFiles;
	}
};