'use strict';

module.exports = function(grunt) {

	require('time-grunt')(grunt);
	
	// function & property declarations
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json')

	});

	require('load-grunt-config')(grunt, {
		init: true,
		loadGruntConfig: {
			scope: 'devDependencies', 
			pattern: ['grunt-*', 'time-grunt']
		}
	});

};