'use strict';

var _ = require('lodash');

// variables and functions to be used in our development environment
module.exports = {
	port: process.env.SERVER_PORT || 3000, // port for our server to listen on
	dbUrl: 'mongodb://konneka.org:' + (process.env.MONGO_PORT || 27017) + '/konneka-dev', // our database URL for Mongoose
	sessionSecret: 'Internet of Monkeys', // session secret
	appRoot: 'app/', // root of the client parts of our app

	// get Angular scripts for another one of our modules
	getModularJs: function(module) {
		var moduleScripts = [];
		if(_.isString(module)) {
			module = [module];
		}
		if(_.isArray(module)) {
			_.forOwn(module, function(val) {
				moduleScripts.push(
					'/modules/' + val + '/js/app.js',
					'/modules/' + val + '/js/config/' + val + 'Rte.js',
					'/modules/' + val + '/js/controllers/' + val + 'Ctrl.js',
					'/modules/' + val + '/js/services/' + val + 'Serv.js',
					'/modules/' + val + '/js/filters/' + val + 'Fils.js',
					'/modules/' + val + '/js/directives/' + val + 'Direc.js'
				);
			});
		}

		return moduleScripts;
	},

	// get the stylesheet(s) for the current Angular module
	getModularCss: function(module) {
		var moduleStyles = [];
		if(_.isString(module)) {
			module = [module];
		}
		if(_.isArray(module)) {
			_.forOwn(module, function(val) {
				moduleStyles.push(
					'/modules/' + val + '/css/main.css'
				);
			});
		}

		return moduleStyles;
	}
};

// get common data for all environments
_.assign(module.exports, require('./all.js'));