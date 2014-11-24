'use strict';

// JavaScript minification tasks
module.exports = {

	// default options
	options: {
		banner: '/*! <%= grunt.file.readJSON("package.json").name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n', // banner shown at top of minified file
		compress: true, // optimizes & compresses files
		sourceMap: true, // create source map to original location
		mangle: { // reduce variable names to as few characters as possible
			except: ['jQuery, $'] // except jQuery variables, as these are needed for jQuery
		}
	},

	// minify JavaScript app files, removing all comments
	def: {
		files: '<%= filePatts.jsMinLib.files %>'
	},

	// minify files in library folder (min-libs); this shouldn't need to be done as often
	libs: {
		files: '<%= filePatts.jsMinLib.files %>'
	},

	// minify JavaScript app files but keep comments and log results
	log: {
		options: {
			report: 'gzip', // report everything
			wrap: 'wrapper', // wrap all code in closure function
			exportAll: true, // allow use of global functions & variables, even in closure function
			preserveComments: 'all' // keep all comments as they are
		},
		files: '<%= filePatts.jsMinApp.files %>'
	},

	// minify JavaScript app files but keep comments
	comm: {
		options: {
			preserveComments: true // keep all comments as they are
		},
		files: '<%= filePatts.jsMinApp.files %>'
	}

};