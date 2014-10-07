'use strict';

module.exports = {
	port: process.env.SERVER_PORT || 3002,
	db: 'mongodb://konneka.org:' + (process.env.MONGO_PORT || 27019) + '/mean-test',
	sessionSecret: 'Internet of Guinea Pigs',
	appRoot: 'test',
	getBuster: function() {
		var busterFiles = [];

		return busterFiles;
	},

	getQunit: {
		frontend: function(module) {
			var qunitFiles;

			var qunitFiles.html = [
				'qunit/frontend/' + module + '/**/*.html'
			];

			var qunitFiles.js = [
				'qunit/frontend/' + module + '/**/*.js'
			];

			var qunitFiles.css = [
				'qunit/frontend/' + module + '/**/*.css'
			];

			return qunitFiles;
		},

		direc: function(module) {
			var qunitFiles;

			var qunitFiles.html = [
				'qunit/direc/' + module + '/**/*.html'
			];

			var qunitFiles.js = [
				'qunit/direc/' + module + '/**/*.js'
			];

			var qunitFiles.css = [
				'qunit/direc/' + module + '/**/*.css'
			];

			return qunitFiles;
		},

		all: function(module) {
			var qunitFiles;

			var qunitFiles.html = [
				'qunit/(frontend | direc)/' + module + '/**/*.html'
			];

			var qunitFiles.js = [
				'qunit/(frontend | direc)/' + module + '/**/*.js'
			];

			var qunitFiles.css = [
				'qunit/(frontend | direc)/' + module + '/**/*.css'
			];

			return qunitFiles;
		},

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