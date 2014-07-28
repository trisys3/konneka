'use strict';

module.exports = {
	port: process.env.port || 3002,
	db: 'mongodb://konneka.org:' + (process.env.MONGO_PORT || 27019) + '/mean-test',
	getBuster: function() {
		var busterFiles = [];

		return busterFiles;
	},

	getQunit: function() {
		var qunitFiles = [];

		return qunitFiles;
	},

	getKarma: function() {
		var karmaFiles = [
			'../jasmine/**/*.js',
      '../angular-mocks.js',
      '../../app/min-libs/angular-mocks/angular-mocks.js',
      '!../jasmine/**/directives/**.js'
     ];

     return karmaFiles;
	},

	getJasmine: function() {
		var jasmineFiles = [];

		return jasmineFiles;
	}
};