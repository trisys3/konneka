// Uglify options
module.exports = {

	// default options
	options: {
		banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n', // banner shown at top of minified file
		compress: true, // optimizes & compresses files
		mangle: { // reduce variable names to as few characters as possible
			except: ['jQuery, $'] // except jQuery variables, as these are needed for jQuery
		}
	},

	// minify JavaScript app files, removing all comments
	def: {
		options: {
			sourceMap: true // create source map to original location
		},
		files: [{
					expand: true,
					cwd: 'app/modules',
					src: ['**/*.js', '!**/*.min.js'],
					dest: 'dist/app/modules',
					ext: '.min.js'
				}]
	},

	// minify files in library folder (min-libs); this shouldn't need to be done as often
	libs: {
		options: {
			sourceMap: true // create source map to original location
		},
		files: '<%= filePatts.jsMinLib.files %>'
	},

	// minify JavaScript app files but keep comments and log results
	log: {
		options: {
			report: 'gzip', // report everything
			wrap: 'wrapper', // wrap all code in closure function
			sourceMap: true, // create source map to original location
			exportAll: true, // allow use of global functions & variables, even in closure function
			preserveComments: 'all' // keep all comments as they are
		},
		files: '<%= filePatts.jsMinApp.files %>'
	},

	// minify JavaScript app files but keep comments
	comm: {
		options: {
			sourceMap: true, // create source map to original location
			preserveComments: true // keep all comments as they are
		},
		files: '<%= filePatts.jsMinApp.files %>'
	}

};