// CSSMin options
module.exports = {

	// default option
	options: {
		banner: '/*! <%= grunt.file.readJSON("package.json").name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n' // banner at top of output
	},

	// minify CSS files
	def: {
		options: {
			keepSpecialComments: 0 // do not keep any comments
		},
		files: '<%= filePatts.cssMinApp.files %>'
	},

	// minify library folders
	libs: {
		files: '<%= filePatts.cssMinLib.files %>'
	},

	// minify already-minified files
	minned: {
		files: '<%= filePatts.cssMinApp.files %>'
	},
	
	// minify code, preserving comments, and log results
	log: {
		options: {
			report: 'gzip', // compress log file with gzip algorithm
			benchmark: true, // report on how good CSS minification ends up being
			debug: true // show minification statistics
		},
		files: '<%= filePatts.cssMinApp.files %>'
	},
	
	// minify code, preserving comments
	comm: {
		files: '<%= filePatts.cssMinApp.files %>'
	}
	
};