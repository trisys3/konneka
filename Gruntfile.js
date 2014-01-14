module.exports = function(grunt) {
	
	// function & property declarations
	grunt.initConfig({

		// file patterns
		filePatts: {
			// file pattern for minifying non-library .js files in app folder into .min.js files in dist's non-library folders
			jsMinApp: {
				files: [{
					expand: true,
					cwd: 'app/modules',
					src: ['**/*.js', '!min-libs/**', '!**/*.min.js'],
					dest: 'dist/app',
					ext: '.min.js'
				}]
			},
			// file pattern for minifying library .js files in app folder into .min.js files in dist's library folder
			jsMinLib: {
				files: [{
					expand: true,
					cwd: 'app/min-libs',
					src: ['**/*.js', '!**/*.min.js'],
					dest: 'dist/min-libs',
					ext: '.min.js'
				}]
			},
			// file pattern for minifying non-library .css files in app folder into .min.css files in dist's non-library folders
			cssMinApp: {
				files: [{
					expand: true,
					cwd: 'app/modules',
					src: ['**/*.css', '!min-libs/**', '!**/*.min.js'],
					dest: 'dist/app',
					ext: '.min.css'
				}]
			},
			// file pattern for minifying library .css files in app folder into .min.css files in dist's library folder
			cssMinLib: {
				files: [{
					expand: true,
					cwd: 'app/min-libs',
					src: ['**/*.css', '!**/*.min.css'],
					dest: 'dist/min-libs',
					ext: '.min.css'
				}]
			},
			// file pattern for moving already-minified non-library JavaScript & CSS files into dist's non-library folders
			minnedApp: {
				files: [{
					expand: true,
					cwd: 'app/modules',
					src: ['**/*.min.js', '**/*.min.css'],
					dest: 'dist/app/modules'
				}]
			},
			// moves all files from app folder to dist folder except .js & .css files (they are minified by uglify &
			// csslint, respectively), SASS/SCSS files (they are converted to CSS by sass then minified by csslint), library files, & cache
			// files, if possible
			OtherExApp: {
				files: [{
					expand: true,
					cwd: 'app/modules',
					src: ['**', '!**/*.js', '!**/*.css', '!**/sass/**', '!**/scss/**'],
					dest: 'dist/app/modules'
				}]
			},
			// file pattern for moving already-minified library files, as well as all non-JavaScript &
			// non-CSS library files, in app folder into dist's library folder
			minnedLibsOthers: {
				files: [{
					expand: true,
					cwd: 'app/min-libs',
					src: ['**', '!**/*.js', '!**/*.css', '**/*.min.js', '**/*.min.css'],
					dest: 'dist/min-libs'
				}]
			},
			// check non-library JavaScript files
			checkJs: {
				src: ['Gruntfile.js', 'package.json', 'app/modules/**/*.js', 'app/modules/**/*.json', '!app/modules/**/*.min.js', '!app/modules/**/*.min.json']
			},
			checkLibJs: {
				src: ['app/min-libs/**/*.js', 'app/min-libs/**/*.json', '!app/min-libs/**/*.min.js', '!app/min-libs/**/*.min.json']
			},
			// check non-library CSS files
			checkCss: {
				src: ['app/modules/**/*.css', '!app/modules/**/*.min.css']
			},
			// check library CSS files
			checkLibCss: {
				src: ['app/min-libs/**/*.css', '!app/min-libs/**/*.min.css']
			},
			convScss: {
				files: [{
					expand: true,
					cwd: 'app/modules/',
					src: ['**/*.scss', '**/*.sass'],
					dest: '',
					ext: '.css',
					rename: function(dest, src) {
						return 'app/modules/' + src.replace('scss', 'css');
					}
				}]
			}
		},

		pkg: grunt.file.readJSON('package.json'),

		// JSHint options
		jshint: {
			// default JSHint options for this site
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
			},
			// checks syntax of JavaScript files, but does not care about syntax IE8 & other older browsers complain about
			check: {
				src: '<%= filePatts.checkJs.src %>', // check Gruntfile and all JavaScript files in app folder
			},
			// checks syntax of JavaScript files, then posts results to error file
			log: {
				src: '<%= filePatts.checkJs.src %>', // check Gruntfile and all JavaScript files in app folder
				options: {
					reporterOutput: 'errs/current-browsers/jsHint.js', // error output file
				}
			},
			// checks syntax of JavaScript files, also warning about syntax errors/bad practice for older browsers like IE8
			ie8: {
				src: '<%= filePatts.checkJs.src %>', // check Gruntfile and all JavaScript files in app folder
				options: {
					es3: true, // tests for Internet Explorer and older versions of other browsers
				}
			},
			// posts all syntax errors, including errors for older browsers, to error file
			ie8log: {
				src: '<%= filePatts.checkCss.src %>', // check Gruntfile and all JavaScript files in app folder
				options: {
					es3: true, // tests for Internet Explorer and older versions of other browsers
					reporterOutput: 'errs/old-browsers/jsHintIe8.js', // error output file
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
				src: '<%= filePatts.checkCss.src %>', // check all files with ".css" extension in app folder
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
				src: '<%= filePatts.checkCss.src %>', // check all files with ".css" extension in app folder
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
				src: '<%= filePatts.checkCss.src %>', // check all files with ".css" extension in app folder
				adjoiningClasses: 2, // abort with error when defining rules with multiple classes for 1 element
				'box-sizing': 2, // abort with error when "box-sizing" selector is used
				'fallback-colors': 2, // abort with error when using multiple font faces in 1 definition would screw up older browsers
			},
			// check CSS files for incompatibilities in older browsers according to CSSLint rules and log results
			logOld: {
				src: '<%= filePatts.checkCss.src %>', // check all files with ".css" extension in app folder
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
			// default options
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n', // banner shown at top of minified file
				compress: true, // optimizes & compresses files
				mangle: { // reduce variable names to as few characters as possible
					except: ['jQuery, $'] // except jQuery variables, as these are needed for jQuery
				}
			},
			// minify JavaScript files, removing all comments
			def: {
				options: {
					sourceMap: '/dist/source-maps/uglify.map', // source map location
					sourceMapRoot: 'http://konneka.org/app/js/**/*.js', // path to original file for source map to use
				},
				files: '<%= filePatts.jsMinApp.files %>',
			},
			// minify files in library folder (min-libs); this shouldn't need to be done as often
			libs: {
				options: {
					sourceMap: '/dist/source-maps/uglify-libs.map', // source map location
					sourceMapRoot: 'http://konneka.org/app/js/**/*.js', // path to original files for source map to use
				},
				files: '<%= filePatts.jsMinLib.files %>'
			},
			// minify JavaScript files but keep comments and log results
			log: {
				options: {
					report: 'gzip', // report everything
					wrap: 'wrapper', // wrap all code in closure function
					sourceMap: '/dist/source-maps/uglify-log.map', // source map location
					sourceMapRoot: 'app/js/**/*.js', // path to original file for source map to use
					exportAll: true, // allow use of global functions & variables, even in closure function
					preserveComments: 'all' // keep all comments as they are
				},
				files: '<%= filePatts.jsMinApp.files %>'
			},
			// minify JavaScript files but keep comments
			comm: {
				options: {
					sourceMap: '/dist/source-maps/uglify-comm.map', // source map location
					sourceMapRoot: 'app/js/**/*.js', // path to original file for source map to use
					preserveComments: true // keep all comments as they are
				},
				files: '<%= filePatts.jsMinApp.files %>'
			}
			// dist: {
			// 	files: {
			// 		'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
			// 	}
			// }
		},

		// options for CSSMin task
		cssmin: {
			// default option
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n' // banner at top of output
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
		},

		// copy files that do not need to be minified
		copy: {
			libs: {
				files: '<%= filePatts.minnedLibsOthers.files %>'
			},
			app: {
				files: '<%= filePatts.minnedApp.files %>'
			}
			nonMinned: {
				files: '<%= filePatts.OtherExApp.files %>'
			}
		},

		// SCSS/SASS options
		sass: {
			// default options
			options: {
				sourcemap: true,
				lineNumbers: true,
				compass: true,
				cacheLocation: 'app/.sass-cache'
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
	grunt.loadNpmTasks('grunt-contrib-copy');

	// Grunt tasks, called by calling "grunt *task*" from command line
	// default task, called with just "grunt"
	grunt.registerTask('default', ['sass:convert', /*'qunit',*/ 'jshint:check', 'csslint:check', 'uglify:def', 'cssmin:def', 'copy:minnedApp', 'copy:OtherExApp']);

	grunt.registerTask('log', ['sass:movelog', 'jshint:log', 'uglify:def', 'csslint:log', 'cssmin:def']);

	// same as default task, but optimized for older browser compatibility
	grunt.registerTask('oldBrow', ['sass:check', 'sass:move', 'jshint:ie8', 'csslint:checkOld', 'uglify:def', 'cssmin:def', 'copy:minnedApp', 'copy:OtherExApp']);

	// minify & move app files
	grunt.registerTask('app', ['sass:check', 'sass:move', 'uglify:def', 'cssmin:def', 'copy:minnedApp', 'copy:OtherExApp']);

	// minify & move library files
	grunt.registerTask('library', ['uglify:libs', 'cssmin:libs', 'copy:minnedLibsOthers']);

	// move already-minified files
	grunt.registerTask('minned', ['copy:minnedLibsOthers', 'copy:minnedApp']);

	// testing task
	grunt.registerTask('test', ['qunit']);

	// check syntax of SCSS/SASS files and, if no errors, convert them to CSS
	grunt.registerTask('sass:convert', ['sass:check', 'sass:move']);

	// check syntax of SCSS/SASS files, log results, and, if no errors, convert them to CSS
	grunt.registerTask('sass:movelog', ['sass:log', 'sass:move']);

	// make "scss" & "sass" the same task (because SCSS is just a newer version of SASS)
	grunt.registerTask('scss', 'sass');
	grunt.registerTask('scss:move', 'sass:move');
	grunt.registerTask('scss:check', 'sass:check');
	grunt.registerTask('scss:log', 'sass:log');
	grunt.registerTask('scss:convert', 'sass:convert');
	grunt.registerTask('scss:movelog', 'sass:movelog');

	// check syntax for compatibility with older browsers
	grunt.registerTask('checkOld', ['sass:check', 'jshint:ie8', 'csslint:checkOld'])

	// syntax-checking task
	grunt.registerTask('check', ['sass:check', 'jshint:check', 'csslint:check']);

	// convert all meta-markup languages to markup languages
	grunt.registerTask('convert', ['sass:convert']);

	// minification tasks
	grunt.registerTask('minify', ['sass:move', 'uglify:def', 'cssmin:def']); // just minification

	grunt.registerTask('minifyWComm', ['sass:move', 'uglify:comm', 'cssmin:comm']); // minification with comments

	grunt.registerTask('minifyLog', ['sass:log', 'uglify:log', 'cssmin:log']); // minification with logging & comments

};