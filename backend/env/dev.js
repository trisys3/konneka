'use strict';

var _ = require('lodash');

// variables and functions to be used in our development environment
module.exports = {
	port: process.env.SERVER_PORT || 3000, // port for our server to listen on
	dbUrl: 'mongodb://konneka.org:' + (process.env.MONGO_PORT || 27017) + '/mean-dev', // our database URL for Mongoose
	sessionSecret: 'Internet of Monkeys', // session secret
	appRoot: 'app/modules', // root of the client parts of our app

	// get Angular scripts for another one of our modules
	getModularJs: function(module) {
		var moduleScripts = [];
		if(module) {
			moduleScripts.push(
				'/modules/' + module + '/js/app.js',
				'/modules/' + module + '/js/config/' + module + 'Rte.js',
				'/modules/' + module + '/js/controllers/' + module + 'Ctrl.js',
				'/modules/' + module + '/js/services/' + module + 'Serv.js',
				'/modules/' + module + '/js/filters/' + module + 'Fils.js',
				'/modules/' + module + '/js/directives/' + module + 'Direc.js'
			);
		}

		return moduleScripts;
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

// get common data for all environments
_.assign(module.exports, require('./all.js'));