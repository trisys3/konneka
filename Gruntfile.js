module.exports = function(grunt) {
	
	// function & property declarations
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		// JSHint options
		jshint: {
			// checks syntax of JavaScript files, but does not care about syntax IE8 & other older browsers complain about
			check: {
				src: ['Gruntfile.js', 'app/js/**/*.js'], // check Gruntfile and all JavaScript files in app folder
				options: {
					curly: true, // warn when not using curly braces for blocks
					eqeqeq: true, // always use ===/!==, never ==/!=
					immed: true, // always use parentheses in function calls
					latedef: true, // warn when using variables above where they are defined
					newcap: true, // always capitalize constructor functions
					noarg: true, // never use arguments.caller/arguments.callee
					nonew: true, // never use constructor functions purely for side effects, without assigning to a variable
					undef: true, // never use undefined variables
					unused: true, // warn when variables are not used
					strict: true, // use JavaScript's *strict* mode
					trailing: true, // no trailing white spaces
					boss: true, // ignore warnings about assignment (x = y) when comparison (x === y) is expected
					eqnull: true, // suppress warnings about "== null"
					multistr: true, // multiline strings are allowed
					browser: true, // browser globals are used
					jquery: true, // jQuery is used
					node: true, // Node.js is used
					force: true, // does not abort due to errors
					extensions: '', // extensions to check along with ".js"
					ignores: [], // specific warnings & errors to ignore, by ID number of error
					globals: {
						jQuery: true,
						console: true,
						module: true
					}
				}
			},
			// checks syntax of JavaScript files, then posts results to error file
			log: {
				src: ['Gruntfile.js', 'app/js/**/*.js'], // check Gruntfile and all JavaScript files in app folder
				options: {
					// es3: true, // enable this when testing Internet Explorer or older browser versions
					curly: true, // warn when not using curly braces for blocks
					eqeqeq: true, // always use ===/!==, never ==/!=
					immed: true, // always use parentheses in function calls
					latedef: true, // warn when using variables above where they are defined
					newcap: true, // always capitalize constructor functions
					noarg: true, // never use arguments.caller/arguments.callee
					nonew: true, // never use constructor functions purely for side effects, without assigning to a variable
					undef: true, // never use undefined variables
					unused: true, // warn when variables are not used
					strict: true, // use JavaScript's *strict* mode
					trailing: true, // no trailing white spaces
					boss: true, // ignore warnings about assignment (x = y) when comparison (x === y) is expected
					eqnull: true, // suppress warnings about "== null"
					multistr: true, // multiline strings are allowed
					browser: true, // browser globals are used
					jquery: true, // jQuery is used
					node: true, // Node.js is used
					force: true, // does not abort due to errors
					extensions: '', // extensions to check along with ".js"
					ignores: [], // specific warnings & errors to ignore, by ID number of error
					reporterOutput: 'errs/current-browsers/jsHint.js', // error output file
					globals: {
						jQuery: true,
						console: true,
						module: true
					}
				}
			},
			// checks syntax of JavaScript files, also warning about syntax errors/bad practice for older browsers like IE8
			ie8: {
				src: ['Gruntfile.js', 'app/js/**/*.js'], // check Gruntfile and all JavaScript files in app folder
				options: {
					es3: true, // enable this when testing Internet Explorer or older browser versions
					curly: true, // warn when not using curly braces for blocks
					eqeqeq: true, // always use ===/!==, never ==/!=
					immed: true, // always use parentheses in function calls
					latedef: true, // warn when using variables above where they are defined
					newcap: true, // always capitalize constructor functions
					noarg: true, // never use arguments.caller/arguments.callee
					nonew: true, // never use constructor functions purely for side effects, without assigning to a variable
					undef: true, // never use undefined variables
					unused: true, // warn when variables are not used
					strict: true, // use JavaScript's *strict* mode
					trailing: true, // no trailing white spaces
					boss: true, // ignore warnings about assignment (x = y) when comparison (x === y) is expected
					eqnull: true, // suppress warnings about "== null"
					multistr: true, // multiline strings are allowed
					browser: true, // browser globals are used
					jquery: true, // jQuery is used
					node: true, // Node.js is used
					force: true, // does not abort due to errors
					extensions: '', // extensions to check along with ".js"
					ignores: [], // specific warnings & errors to ignore, by ID number of error
					globals: {
						jQuery: true,
						console: true,
						module: true
					}
				}
			},
			// posts all syntax errors, including errors for older browsers, to error file
			ie8log: {
				src: ['Gruntfile.js', 'app/js/**/*.js'], // check Gruntfile and all JavaScript files in app folder
				options: {
					es3: true, // enable this when testing Internet Explorer or older browser versions
					curly: true, // warn when not using curly braces for blocks
					eqeqeq: true, // always use ===/!==, never ==/!=
					immed: true, // always use parentheses in function calls
					latedef: true, // warn when using variables above where they are defined
					newcap: true, // always capitalize constructor functions
					noarg: true, // never use arguments.caller/arguments.callee
					nonew: true, // never use constructor functions purely for side effects, without assigning to a variable
					undef: true, // never use undefined variables
					unused: true, // warn when variables are not used
					strict: true, // use JavaScript's *strict* mode
					trailing: true, // no trailing white spaces
					boss: true, // ignore warnings about assignment (x = y) when comparison (x === y) is expected
					eqnull: true, // suppress warnings about "== null"
					multistr: true, // multiline strings are allowed
					browser: true, // browser globals are used
					jquery: true, // jQuery is used
					node: true, // Node.js is used
					force: true, // does not abort due to errors
					reporterOutput: 'errs/old-browsers/jsHintIe8.js', // error output file
					extensions: '', // extensions to check along with ".js"
					ignores: [], // specific warnings & errors to ignore, by ID number of error
					globals: {
						jQuery: true,
						console: true,
						module: true
					}
				}
			}
		},

		// CSSLint options
		csslint: {
			// default options
			options: {
				import: 2, // abort on error when using @import
				force: true, // only abort on errors, not warnings
				'box-model': false, // do not warn when using "width" with "padding" or "border"
				'empty-rules': false, // do not warn when using rules with no content
				ids: false, // do not warn when using IDs in CSS rules
				important: 2, // abort on error when using !important in CSS rules
				'outline-none': false // do not warn when using "outline: none" or "outline: 0" to hide outline when focused
			},
			// check CSS files according to CSSLint rules
			check: {
				src: ['app/**/*.css', '!app/min-libs/**/*.css'], // check all files with ".css" extension in app folder
				options: {
					adjoiningClasses: false, // do not warn on CSS rules with 2 classes on 1 element
					'box-sizing': false, // do not warn when "box-sizing" selector is used
					'bulletproof-font-face': false, // do not warn when using multiple font faces in 1 definition
					'non-link-hover': false, // do not warn when using :hover property on elements besides links
					'fallback-colors': false // do not warn when using rgba, hsla, etc. without regular color
				}
			},
			// check CSS files according to CSSLint rules and log results
			log: {
				src: ['app/**/*.css', '!app/min-libs/**/*.css'], // check all files with ".css" extension in app folder
				options: {
					adjoiningClasses: false, // do not warn on CSS rules with 2 classes on 1 element
					'box-sizing': false, // do not warn when "box-sizing" selector is used
					'bulletproof-font-face': false, // do not warn when using multiple font faces in 1 definition
					'non-link-hover': false, // do not warn when using :hover property on elements besides links
					'fallback-colors': false, // do not warn when using rgba, hsla, etc. without regular color
					formatters: [{
						id: 'text',
						dest: 'errs/current-browsers/csslint'
					}]
				}
			},
			// check CSS files for incompatibilities in older browsers according to CSSLint rules
			checkOld: {
				src: ['app/**/*.css', '!app/min-libs/**/*.css'], // check all files with ".css" extension in app folder
				adjoiningClasses: 2, // abort with error when defining rules with multiple classes for 1 element
				'box-sizing': 2, // abort with error when "box-sizing" selector is used
				'fallback-colors': 2, // abort with error when using multiple font faces in 1 definition would screw up older browsers
			},
			// check CSS files for incompatibilities in older browsers according to CSSLint rules and log results
			logOld: {
				src: ['app/**/*.css', '!app/min-libs/**/*.css'], // check all files with ".css" extension in app folder
				adjoiningClasses: 2, // abort with error when defining rules with multiple classes for 1 element
				'box-sizing': 2, // abort with error when "box-sizing" selector is used
				'fallback-colors': 2, // abort with error when using multiple font faces in 1 definition would screw up older browsers
				formatters: [{
					id: 'text',
					dest: 'errs/old-browsers/csslint'
				}]
			}
		},

		// Uglify options
		uglify: {
			// minify JavaScript files, removing all comments
			def: {
				options: {
					banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n', // banner shown at top of minified file
					compress: true, // optimizes & compresses files
					sourceMap: 'dist/source-maps/uglify.map', // source map location
					sourceMapRoot: 'app/js/**/*.js', // path to original file for source map to use
					// mangle: { // reduce variable names to as few characters as possible
					// 	except: ['jQuery, AngularJS'] // except jQuery variables, as these are needed for jQuery
					// }
				},
				files: [{
					expand: true, // include subfolders
					cwd: 'app',
					['**/*.js', '!min-libs/**']: ['dist/app/**'],
					['min-libs/**.js']: ['dist/**'],
					ext: '.min.js' // use ".min.js" to show that these files are minified
				}],
			},
			// minify JavaScript files but keep comments and log results
			log: {
				options: {
					banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
					compress: true, // optimizes & compresses files
					report: 'gzip', // report everything
					wrap: 'wrapper', // wrap all code in closure function
					sourceMap: 'source-maps/uglify-log.map', // source map location
					sourceMapRoot: 'app/js/**/*.js', // path to original file for source map to use
					exportAll: true, // allow use of global functions & variables, even in closure function
					preserveComments: 'all' // keep all comments as they are
				},
				files: [{
					expand: true, // include all subfolders
					cwd: 'app',
					src: '**/*.js',
					dest: 'dist/app',
					ext: '.min.js' // use ".min.js" to show that these files are minified
				}],
			},
			// minify JavaScript files but keep comments
			comm: {
				options: {
					banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
					compress: true, // optimizes & compresses files
					sourceMap: 'source-maps/uglify-comm.map', // source map location
					sourceMapRoot: 'app/js/**/*.js', // path to original file for source map to use
					mangle: { // reduce variable names to as few characters as possible
						except: ['jQuery'] // except jQuery variables, as these are needed for jQuery
					},
					preserveComments: true // keep all comments as they are
				},
				files: [{
					expand: true, // include all subfolders
					cwd: 'app',
					src: '**/*.js',
					dest: 'dist/app',
					ext: '.min.js' // use ".min.js" to show that these files are minified
				}],
			}
			// dist: {
			// 	files: {
			// 		'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
			// 	}
			// }
		},

		// options for CSSMin task
		cssmin: {
			// minify CSS files
			def: {
				options: {
					banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n', // banner at top of output
					keepSpecialComments: 0 // do not keep any comments
				},
				files: [{
					expand: true, // include all subfolders
					cwd: 'app/',
					src: '**/*.css',
					dest: 'dist/app',
					ext: '.min.css' // use extension ".min.css" for destination files to show they are minified
				}],
			},
			// minify code, preserving comments, and log results
			log: {
				options: {
					banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n', // banner at top of output
					report: 'gzip', // compress log file with gzip algorithm
					benchmark: true, // report on how good CSS minification ends up being
					debug: true // show minification statistics
				},
				files: [{
					expand: true, // include all subfolders
					cwd: 'app',
					src: '**/*.css',
					dest: 'dist/app',
					ext: '.min.css' // use extension ".min.css" for destination files to show they are minified
				}],
			},
			// minify code, preserving comments
			comm: {
				options: {
					banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n', // banner at top of output
				},
				files: [{
					expand: true, // include all subfolders
					cwd: 'app',
					src: '**/*.css',
					dest: 'dist/app',
					ext: '.min.css' // use extension ".min.css" for destination files to show they are minified
				}],
			}
		},

		// SCSS options
		sass: {
			// converts SCSS/SASS files to CSS without checking syntax
			move: {
				files: [{
					expand: true, // include all subfolders
					cwd: 'app/scss',
					src: ['*.scss', '*.sass'], // convert SCSS and SASS files
					dest: 'app/css/',
					ext: '.css', // output CSS
					cacheLocation: 'app/.sass-cache'
				}]
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
				files: [{
					expand: true, // include all subfolders
					cwd: 'app/scss',
					src: ['*.scss', '*.sass'], // convert SASS and SCSS
					dest: 'app/css/',
					ext: '.css', // output CSS
					cacheLocation: 'app/.sass-cache'
				}]
			},
			options: {
				sourcemap: true,
				lineNumbers: true,
				compass: true
			}
		},
		

		// concat function
		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: ['src**/*.js'],
				dest: 'dist/<%= pkg.name %>.js'
			}
		},

		// tasks to run on "grunt watch"
		watch: {
			files: 'app/**',
			tasks: ['scss:convert', /*'qunit',*/ 'jshint:check', 'uglify:def', 'csslint:check', 'cssmin:def'],
			options: {
				interrupt: true
			}
		},

		// QUnit testing
		qunit: {
			files: ['test/**/*.html']
		}

	});

	// load tasks from NPM modules
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-csslint');

	// Grunt tasks, called by calling "grunt *task*" from command line
	// default task, called with just "grunt"
	grunt.registerTask('default', ['sass:convert', /*'qunit',*/ 'jshint:check', 'csslint:check', 'uglify:def', 'cssmin:def']);

	grunt.registerTask('log', ['sass:movelog', 'jshint:log', 'uglify:def', 'csslint:log', 'cssmin:def']);

	// same as default task, but also checks for older browser compatibility
	grunt.registerTask('oldBrow', ['sass:check', 'sass:move', 'jshint:ie8', 'csslint:checkOld', 'uglify:def', 'cssmin:def']);

	// testing task
	grunt.registerTask('test', ['qunit']);

	// check syntax of SCSS/SASS files and, if no errors, convert them to CSS
	grunt.registerTask('sass:convert', ['sass:check', 'sass:move']);

	// check syntax of SCSS/SASS files, log results, and, if no errors, convert them to CSS
	grunt.registerTask('sass:movelog', ['sass:log', 'sass:move']);

	// make "scss" & "sass" the same task
	grunt.registerTask('scss', 'sass');
	grunt.registerTask('scss:move', 'sass:move');
	grunt.registerTask('scss:check', 'sass:check');
	grunt.registerTask('scss:log', 'sass:log');
	grunt.registerTask('scss:convert', 'sass:convert');

	// check syntax for compatibility with older browsers
	grunt.registerTask('checkOld', ['jshint:ie8', 'csslint:checkOld'])

	// syntax-checking task
	grunt.registerTask('check', ['sass:check', 'jshint:check', 'csslint:check']);

	// convert all meta-markup languages to markup languages
	grunt.registerTask('convert', 'sass:move');

	// minification tasks
	grunt.registerTask('minify', ['sass:move', 'uglify:def', 'cssmin:def']); // just minification

	grunt.registerTask('minifyWComm', ['sass:move', 'uglify:comm', 'cssmin:comm']); // minification with comments

	grunt.registerTask('minifyLog', ['sass:log', 'uglify:log', 'cssmin:log']); // minification with logging & comments

};