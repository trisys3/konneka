// SCSS/SASS tasks
module.exports = {

	// default options
	options: {
		sourcemap: true,
		lineNumbers: true,
		compass: true,
		cacheLocation: 'app/cache/.sass-cache'
	},

	// converts SCSS/SASS files to CSS without checking syntax
	move: {
		files: '<%= filePatts.convScss.files %>'
	},

	// checks SASS/SCSS syntax
	check: {
		options: {
			check: true, // checks syntax
			trace: true, // trace back to source on error
			debugInfo: true, // extra debugging info to be used by browser debuggers
		}
	},

	// checks syntax of SCSS/SASS files and reports results
	log: {
		options: {
			check: true, // checks syntax
			trace: true, // trace back to source on error
			debugInfo: true, // extra debugging info to be used by browser debuggers
		},
		files: '<%= filePatts.convScss.files %>'
	}

};