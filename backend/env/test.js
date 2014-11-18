'use strict';

var _ = require('lodash');
var path = require('path');
var fs = require('fs');

module.exports = {
	port: process.env.SERVER_PORT || 3002,
	dbUrl: 'mongodb://konneka.org:' + (process.env.MONGO_PORT || 27019) + '/konneka-test',
	sessionSecret: 'Internet of Guinea Pigs',
	appRoot: 'test',

	// get our "test" scripts, separated by testing framework and environment
	getModularJs: function(fram, env, test) {
		// make an empty array to hold our test files
		var moduleScripts = [];
		// if the user passes the test file in as a string, make it an array first
		if(_.isString(test)) {
			test = [test];
		}
		// if the user did not pass in a test, include all tests in the passed-in framework
		// & environment
		if(!test) {
			var test_path = path.normalize(__dirname + '/../../test/' + fram + '/' + env);
			fs.readdirSync(test_path).forEach(function(test) {
				moduleScripts.push(
					'/' + fram + '/' + env + '/' + test
				);
			});
		}
		// otherwise, include all passed-in tests in the framework & environment
		else {
			test.forEach(function(val, test) {
				// if the test parameter has a forward slash at the end, assume it is a folder &
				// include all tests in this folder
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

// get common data for all environments
_.assign(module.exports, require('./all.js'));