module.exports = function(grunt) {

	'use strict';

	require('time-grunt')(grunt);
	// require('load-grunt-config')(grunt, {
	// 	init: true,
	// 	loadGruntConfig: {
	// 		scope: 'devDependencies', 
	// 		pattern: ['grunt-*', 'time-grunt']
	// 	}
	// });
	
	// function & property declarations
	grunt.initConfig({

		// // file patterns
		// filePatts: {
		// 	// file pattern for minifying non-library .js files in app folder into .min.js files in dist's non-library folders
		// 	jsMinApp: {
		// 		files: [{
		// 			expand: true,
		// 			cwd: 'app/modules',
		// 			src: ['**/*.js', '!**/*.min.js'],
		// 			dest: 'dist/app/modules',
		// 			ext: '.min.js'
		// 		}]
		// 	},
		// 	// file pattern for minifying library .js files in app folder into .min.js files in dist's library folder
		// 	jsMinLib: {
		// 		files: [{
		// 			expand: true,
		// 			cwd: 'app/min-libs',
		// 			src: ['**/*.js', '!**/*.min.js'],
		// 			dest: 'dist/min-libs',
		// 			ext: '.min.js'
		// 		}]
		// 	},
		// 	// file pattern for minifying non-library .css files in app folder into .min.css files in dist's non-library folders
		// 	cssMinApp: {
		// 		files: [{
		// 			expand: true,
		// 			cwd: 'app/modules',
		// 			src: ['**/*.css', '!**/*.min.css'],
		// 			dest: 'dist/app/modules',
		// 			ext: '.min.css'
		// 		}]
		// 	},
		// 	// file pattern for minifying library .css files in app folder into .min.css files in dist's library folder
		// 	cssMinLib: {
		// 		files: [{
		// 			expand: true,
		// 			cwd: 'app/min-libs',
		// 			src: ['**/*.css', '!**/*.min.css'],
		// 			dest: 'dist/min-libs',
		// 			ext: '.min.css'
		// 		}]
		// 	},
		// 	// file pattern for moving already-minified non-library JavaScript & CSS files into dist's non-library folders
		// 	minnedApp: {
		// 		files: [{
		// 			expand: true,
		// 			cwd: 'app/modules',
		// 			src: ['**/*.min.js', '**/*.min.css'],
		// 			dest: 'dist/app/modules'
		// 		}]
		// 	},
		// 	// moves all files from app folder to dist folder except .js & .css files (they are minified by uglify &
		// 	// csslint, respectively), SASS/SCSS files (they are converted to CSS by sass then minified by csslint), library files, & cache
		// 	// files, if possible
		// 	otherExApp: {
		// 		files: [{
		// 			expand: true,
		// 			cwd: 'app/modules',
		// 			src: ['**', '!**/*.js', '!**/*.css', '!**/sass/**', '!**/scss/**', '../index.php'],
		// 			dest: 'dist/app/modules'
		// 		}]
		// 	},
		// 	// file pattern for moving all non-library files from app folder to dist folder
		// 	allApp: {
		// 		files: [{
		// 			expand: true,
		// 			cwd: 'app/modules',
		// 			src: ['**', '!**/*.js', '!**/*.css', '**/*.min.js', '**/*.min.css', '!**/sass/**', '!**/scss/**', '../index.php'],
		// 			dest: 'dist/app/modules'
		// 		}]
		// 	},
		// 	// file pattern for minifying images in the app folder & putting the results in the dist folder
		// 	images: {
		// 		files: [{
		// 			expand: true,
		// 			cwd: 'app/modules',
		// 			src: ['**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.tiff', '**/*.png'],
		// 			dest: ['dist/app/modules']
		// 		}]
		// 	},
		// 	// file pattern for minifying images in the min-libs folder & putting the results in the dist/min-libs folder
		// 	imagesLib: {
		// 		files: [{
		// 			expand: true,
		// 			cwd: 'app/min-libs',
		// 			src: ['**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.tiff', '**/*.png'],
		// 			dest: ['dist/min-libs']
		// 		}]
		// 	},
		// 	// file pattern for minifying back-end images from app folder to dist folder
		// 	backImages: {
		// 		files: [{
		// 			expand: true,
		// 			cwd: 'app/backend',
		// 			src: ['**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.tiff', '**/*.png'],
		// 			dest: ['dist/app/backend']
		// 		}]
		// 	},
		// 	// file pattern for moving library files in app folder into dist's library folder
		// 	minnedLibsOthers: {
		// 		files: [{
		// 			expand: true,
		// 			cwd: 'app/min-libs',
		// 			src: ['**'],
		// 			dest: 'dist/min-libs'
		// 		}]
		// 	},
		// 	// check non-library JavaScript files
		// 	checkJs: {
		// 		src: ['Gruntfile.js', 'package.json', 'app/modules/**/*.js', 'app/modules/**/*.json', '!app/modules/**/*.min.js', '!app/modules/**/*.min.json']
		// 	},
		// 	// check library JavaScript files
		// 	checkLibJs: {
		// 		src: ['app/min-libs/**/*.js', 'app/min-libs/**/*.json', '!app/min-libs/**/*.min.js', '!app/min-libs/**/*.min.json']
		// 	},
		// 	// check non-library CSS files
		// 	checkCss: {
		// 		src: ['app/modules/**/*.css', '!app/modules/**/*.min.css']
		// 	},
		// 	// check library CSS files
		// 	checkLibCss: {
		// 		src: ['app/min-libs/**/*.css', '!app/min-libs/**/*.min.css']
		// 	},
		// 	// convert Sass & SCSS files in app folder to CSS files in dist folder
		// 	convScss: {
		// 		files: [{
		// 			expand: true,
		// 			cwd: 'app/modules/',
		// 			src: ['**/*.scss', '**/*.sass'],
		// 			dest: '',
		// 			ext: '.css',
		// 			rename: function(dest, src) {
		// 				return 'app/modules/' + src.replace('scss', 'css');
		// 			}
		// 		}]
		// 	},
		// 	qunitTest: {
		// 		files: [{
		// 			expand: true,
		// 			cwd: 'test/',
		// 			src: ['**/*.html']
		// 		}]
		// 	},
		//	watchEvrthg: {
		//		files: [{
		//			expand: true,
		//			cwd: '/',
		//			src: '**'
		//		}]
		//	}
		// },

		pkg: grunt.file.readJSON('package.json')

		// // JSHint options
		// jshint: {
		// 	// default JSHint options for this site
		// 	options: {
		// 		// options designed to give more warnings & errors
		// 		curly: true, // warn when not using curly braces for blocks
		// 		eqeqeq: true, // always use ===/!==, never ==/!=
		// 		immed: true, // always use parentheses in function calls
		// 		indent: 2, // indent is equal to 2 spaces
		// 		latedef: true, // warn when using variables above where they are defined
		// 		newcap: true, // always capitalize constructor functions
		// 		noarg: true, // never use arguments.caller/arguments.callee
		// 		nonew: true, // never use constructor functions purely for side effects, without assigning to a variable
		// 		quotmark: true, // give warnings if I am not consistent in using single or double quotes
		// 		undef: true, // never use undefined variables
		// 		unused: true, // warn when variables are not used
		// 		strict: true, // use JavaScript's *strict* mode for functions, prohibit global *strict* mode
		// 		trailing: true, // no trailing white spaces
		// 		// options designed to give fewer warnings
		// 		boss: true, // ignore warnings about assignment (x = y) when comparison (x === y) is expected
		// 		eqnull: true, // suppress warnings about "== null"
		// 		// esnext: true, // tells JSHint I am using ECMAScript 6; uncomment this option if/when I start using ECMAScript 6 for this website
		// 		multistr: true, // multiline strings are allowed
		// 		sub: true, // does not warn when accessing array members with [] instead of dots (e.g. author['name'] instead of author.name)
		// 		force: true, // does not abort due to errors
		// 		extensions: '.json', // extensions to check along with ".js"
		// 		// environment global variables
		// 		browser: true, // browser globals are used
		// 		jquery: true, // jQuery is used
		// 		node: true, // Node.js is used
		// 		// specific warnings & errors to ignore, by ID number of error
		// 		ignores: [],
		// 		// global variables not defined in environment area
		// 		globals: {
		// 			module: true,
		// 			angular: true // used in AngularJS
		// 		}
		// 	},
		// 	// checks syntax of JavaScript files, but does not care about syntax IE8 & other older browsers complain about
		// 	check: {
		// 		src: '<%= filePatts.checkJs.src %>',
		// 		options: {
		// 			// extra environment global variables
		// 			devel: true // allow development global variables, usually for debugging
		// 		}
		// 	},
		// 	// checks syntax for older browsers
		// 	ie8: {
		// 		src: '<%= filePatts.checkJs.src %>',
		// 		options: {
		// 			// extra options for checking code for older browser compatibility
		// 			// options designed to give more warnings/errors
		// 			es3: true, // use ECMAScript 3 instead of 5/6
		// 			strict: false // do not require ECMAScript 5 "use strict" declaration
		// 			// options designed to give fewer warnings/errors
		// 			// esnext: false, // do not use ECMAScript 6 in code designed for older browsers; uncomment this option if/when I start using ECMAScript 6 for this website
		// 		}
		// 	},
		// 	// checks syntax for older browsers, logs output
		// 	ie8Log: {
		// 		src: '<%= filePatts.checkJs.src %>',
		// 		options: {
		// 			// extra options for checking code for older browser compatibility
		// 			// options designed to give more warnings/errors
		// 			es3: true, // use ECMAScript 3 instead of 5/6
		// 			strict: false, // do not require ECMAScript 5 "use strict" declaration
		// 			// options designed to give fewer warnings/errors
		// 			// esnext: false, // do not use ECMAScript 6 in code designed for older browsers; uncomment this option if/when I start using ECMAScript 6 for this website
		// 			// options unique to Grunt's version of JSHint
		// 			reporterOutput: 'errs/dev/jsHint.js', // error output file
		// 			reporter: 'checkstyle' // use "checkstyle" JSHint reporter
		// 		}
		// 	},
		// 	// checks syntax of JavaScript files, then posts results to error file
		// 	log: {
		// 		src: '<%= filePatts.checkJs.src %>',
		// 		options: {
		// 			reporterOutput: 'errs/dev/jsHint.js', // error output file
		// 			reporter: 'checkstyle', // use "checkstyle" JSHint reporter
		// 			// extra environment global variables
		// 			devel: true // allow development global variables, usually for debugging
		// 		}
		// 	},
		// 	// check code for production
		// 	prodCheck: {
		// 		src: '<%= filePatts.checkJs.src %>'
		// 	},
		// 	// check code for production & log results
		// 	prodLog: {
		// 		src: '<%= filePatts.checkJs.src %>',
		// 		options: {
		// 			reporterOutput: 'errs/prod/jsHint.js', // error output file
		// 			reporter: 'checkstyle', // use "checkstyle" JSHint reporter
		// 		}
		// 	}
		// },

		// // CSSLint options
		// csslint: {
		// 	// default options
		// 	options: {
		// 		import: 2, // abort on error when using @import
		// 		force: true, // only abort on errors, not warnings
		// 		'box-model': false, // do not warn when using "width" with "padding" or "border"
		// 		'empty-rules': false, // do not warn when using rules with no content
		// 		ids: false, // do not warn when using IDs in CSS rules
		// 		important: 2, // abort on error when using !important in CSS rules
		// 		'outline-none': false // do not warn when using "outline: none" or "outline: 0" to hide outline when focused
		// 	},
		// 	// check CSS files according to CSSLint rules
		// 	check: {
		// 		src: '<%= filePatts.checkCss.src %>', // check all files with ".css" extension in app folder
		// 		options: {
		// 			adjoiningClasses: false, // do not warn on CSS rules with 2 classes on 1 element
		// 			'box-sizing': false, // do not warn when "box-sizing" selector is used
		// 			'bulletproof-font-face': false, // do not warn when using multiple font faces in 1 definition
		// 			'non-link-hover': false, // do not warn when using :hover property on elements besides links
		// 			'fallback-colors': false // do not warn when using rgba, hsla, etc. without regular color
		// 		}
		// 	},
		// 	// check CSS files according to CSSLint rules and log results
		// 	log: {
		// 		src: '<%= filePatts.checkCss.src %>', // check all files with ".css" extension in app folder
		// 		options: {
		// 			adjoiningClasses: false, // do not warn on CSS rules with 2 classes on 1 element
		// 			'box-sizing': false, // do not warn when "box-sizing" selector is used
		// 			'bulletproof-font-face': false, // do not warn when using multiple font faces in 1 definition
		// 			'non-link-hover': false, // do not warn when using :hover property on elements besides links
		// 			'fallback-colors': false, // do not warn when using rgba, hsla, etc. without regular color
		// 			formatters: [{
		// 				id: 'text',
		// 				dest: 'errs/dev/csslint.js'
		// 			}]
		// 		}
		// 	},
		// 	// check CSS files for incompatibilities in older browsers according to CSSLint rules
		// 	checkOld: {
		// 		src: '<%= filePatts.checkCss.src %>', // check all files with ".css" extension in app folder
		// 		adjoiningClasses: 2, // abort with error when defining rules with multiple classes for 1 element
		// 		'box-sizing': 2, // abort with error when "box-sizing" selector is used
		// 		'fallback-colors': 2, // abort with error when using multiple font faces in 1 definition would screw up older browsers
		// 	},
		// 	// check CSS files for incompatibilities in older browsers according to CSSLint rules and log results
		// 	logOld: {
		// 		src: '<%= filePatts.checkCss.src %>', // check all files with ".css" extension in app folder
		// 		adjoiningClasses: 2, // abort with error when defining rules with multiple classes for 1 element
		// 		'box-sizing': 2, // abort with error when "box-sizing" selector is used
		// 		'fallback-colors': 2, // abort with error when using multiple font faces in 1 definition would screw up older browsers
		// 		formatters: [{
		// 			id: 'text',
		// 			dest: 'errs/old-browsers/csslint'
		// 		}]
		// 	}
		// },

		// // Uglify options
		// uglify: {
		// 	// default options
		// 	options: {
		// 		banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n', // banner shown at top of minified file
		// 		compress: true, // optimizes & compresses files
		// 		mangle: { // reduce variable names to as few characters as possible
		// 			except: ['jQuery, $'] // except jQuery variables, as these are needed for jQuery
		// 		}
		// 	},
		// 	// minify JavaScript app files, removing all comments
		// 	def: {
		// 		options: {
		// 			sourceMap: true // create source map to original location
		// 		},
		// 		files: '<%= filePatts.jsMinApp.files %>',
		// 	},
		// 	// minify files in library folder (min-libs); this shouldn't need to be done as often
		// 	libs: {
		// 		options: {
		// 			sourceMap: true // create source map to original location
		// 		},
		// 		files: '<%= filePatts.jsMinLib.files %>'
		// 	},
		// 	// minify JavaScript app files but keep comments and log results
		// 	log: {
		// 		options: {
		// 			report: 'gzip', // report everything
		// 			wrap: 'wrapper', // wrap all code in closure function
		// 			sourceMap: true, // create source map to original location
		// 			exportAll: true, // allow use of global functions & variables, even in closure function
		// 			preserveComments: 'all' // keep all comments as they are
		// 		},
		// 		files: '<%= filePatts.jsMinApp.files %>'
		// 	},
		// 	// minify JavaScript app files but keep comments
		// 	comm: {
		// 		options: {
		// 			sourceMap: true, // create source map to original location
		// 			preserveComments: true // keep all comments as they are
		// 		},
		// 		files: '<%= filePatts.jsMinApp.files %>'
		// 	}
		// },

		// // options for CSSMin task
		// cssmin: {
		// 	// default option
		// 	options: {
		// 		banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n' // banner at top of output
		// 	},
		// 	// minify CSS files
		// 	def: {
		// 		options: {
		// 			keepSpecialComments: 0 // do not keep any comments
		// 		},
		// 		files: '<%= filePatts.cssMinApp.files %>'
		// 	},
		// 	// minify library folders
		// 	libs: {
		// 		files: '<%= filePatts.cssMinLib.files %>'
		// 	},
		// 	// minify already-minified files
		// 	minned: {
		// 		files: '<%= filePatts.cssMinApp.files %>'
		// 	},
		// 	// minify code, preserving comments, and log results
		// 	log: {
		// 		options: {
		// 			report: 'gzip', // compress log file with gzip algorithm
		// 			benchmark: true, // report on how good CSS minification ends up being
		// 			debug: true // show minification statistics
		// 		},
		// 		files: '<%= filePatts.cssMinApp.files %>'
		// 	},
		// 	// minify code, preserving comments
		// 	comm: {
		// 		files: '<%= filePatts.cssMinApp.files %>'
		// 	}
		// },

		// // imagemin: {
		// 	app: {
		// 		files: '<%= filePatts.images.files %>',
		// 		options: {
		// 			optimizationLevel: 7
		// 		}
		// 	},
		// 	libs: {
		// 		files: '<%= filePatts.imageLib.files %>',
		// 		options: {
		// 			optimizationLevel: 7
		// 		}
		// 	},
		// 	backend: {
		// 		files: '<%= filePatts.backImages.files %>',
		// 		options: {
		// 			optimizationLevel: 7
		// 		}
		// 	}
		// },

		// // copy files that do not need to be minified
		// // see filePatts config blocks for explanations of file patterns
		// copy: {
		// 	libs: {
		// 		files: '<%= filePatts.minnedLibsOthers.files %>'
		// 	},
		// 	appMinned: {
		// 		files: '<%= filePatts.minnedApp.files %>'
		// 	},
		// 	otherEx: {
		// 		files: '<%= filePatts.otherExApp.files %>'
		// 	},
		// 	appAll: {
		// 		files: '<%= filePatts.allApp.files %>'
		// 	}
		// },

		// // SCSS/SASS options
		// sass: {
		// 	// default options
		// 	options: {
		// 		sourcemap: true,
		// 		lineNumbers: true,
		// 		compass: true,
		// 		cacheLocation: 'app/cache/.sass-cache'
		// 	},
		// 	// converts SCSS/SASS files to CSS without checking syntax
		// 	move: {
		// 		files: '<%= filePatts.convScss.files %>'
		// 	},
		// 	// checks SASS/SCSS syntax
		// 	check: {
		// 		options: {
		// 			check: true, // checks syntax
		// 			trace: true, // trace back to source on error
		// 			debugInfo: true, // extra debugging info to be used by browser debuggers
		// 		}
		// 	},
		// 	// checks syntax of SCSS/SASS files and reports results
		// 	log: {
		// 		options: {
		// 			check: true, // checks syntax
		// 			trace: true, // trace back to source on error
		// 			debugInfo: true, // extra debugging info to be used by browser debuggers
		// 		},
		// 		files: '<%= filePatts.convScss.files %>'
		// 	}
		// },
		

		// // concat function
		// concat: {
		// 	options: {
		// 		separator: ';'
		// 	},
		// 	dist: {
		// 		src: ['src**/*.js'],
		// 		dest: 'dist/<%= pkg.name %>.js'
		// 	}
		// },

		// // tasks to run concurrently
		// concurrent: {
		// 	check: {
		// 		tasks: ['sass:check', 'jshint:check', 'csslint:check', 'imagemin:app'] // check for errors/warnings, optimized for current browsers
		// 	},
		// 	checkProd: {
		// 		tasks: ['sass:check', 'jshint:prodCheck', 'csslint:check'] // check for errors/warnings, optimized for production
		// 	},
		// 	checkLog: {
		// 		tasks: ['sass:log', 'jshint:log', 'csslint:log'] // check for errors/warnings, optimized for newer browsers, log results to separate file
		// 	},
		// 	checkOld: {
		// 		tasks: ['sass:check', 'jshint:ie8', 'csslint:checkOld'] // check for errors/warnings, optimized for browsers older than Internet Explorer 9
		// 	},
		// 	checkOldLog: {
		// 		tasks: ['sass:log', 'jshint:ie8Log', 'csslint:logOld'] // check for errors/warnings, optimized for browsers older than Internet Explorer 9, logs output
		// 	},
		// 	checkProdLog: {
		// 		tasks: ['sass:log', 'jshint:prodLog', 'csslint:log'] // check for errors/warnings, optimized for production, log output to another file
		// 	},
		// 	preproc: {
		// 		tasks: ['sass:move'] // minify preprocessed code, storing output in code folders
		// 	},
		// 	preprocLog: {
		// 		tasks: ['sass:log'] //minify preprocessed code, storing output in code folders; log errors & output to log file
		// 	},
		// 	minify: {
		// 		tasks: ['uglify:def', 'cssmin:def', 'imagemin:app'] // minify code, stripping all comments, storing output in "dist" folder
		// 	},
		// 	minifyWComm: {
		// 		tasks: ['uglify:comm', 'cssmin:comm', 'imagemin:app'] // minify code, keeping all comments, storing output in "dist" folder
		// 	},
		// 	minifyLog: {
		// 		tasks: ['uglify:log', 'cssmin:log', 'imagemin:app'] // minify code, logging output & errors, storing output in "dist" folder
		// 	},
		// 	watch: {
		// 		tasks: ['watch'] // watching task
		// 	},
		// 	test: {
		// 		tasks: ['qunit'] // testing task
		// 	},
		// 	copyAppLibs: {
		// 		tasks: ['copy:appAll', 'copy:libs'] // task for copying app files & library files at the same time
		// 	}/*,
		// 	copyAppBack: {
		// 		tasks: ['copy:appAll, copy:backend'] // task for copying app files & backend server files at the same time
		// 	},
		// 	copyAll: {
		// 		tasks: ['copy:appAll', 'copy:libs', 'copy:backend'] // task for copying all files to be copied from app folder to dist folder
		// 	}*/

		// },

		// // tasks to run on "grunt watch"
		// watch: {
		// 	files: 'app/**',
		// 	tasks: ['preproc', /*'test',*/ 'minify', 'check'],
		// 	options: {
		// 		interrupt: true,
		// 		spawn: false,
		// 		reload: true
		// 	}
		// },

		// // QUnit testing
		// qunit: {
		// 	files: '<%= filePatts.qunitTest.files %>'
		// },

		// // options for grunt-newer task
		// newer: {
		// 	options: {
		// 		cache: 'app/cache/.grunt-newer'
		// 	}
		// }

	});

	require('load-grunt-config')(grunt, {
		init: true,
		loadGruntConfig: {
			scope: 'devDependencies', 
			pattern: ['grunt-*', 'time-grunt']
		}
	});

	// // Grunt tasks, called by calling "grunt *task*" from command line

	// // default task, called with just "grunt": converts all SCSS/SASS files into CSS files, checks syntax of non-library JavaScript & CSS files in app folder,
	// // minifies these files, and moves already-minified files as well as non-.js & non-.css files into dist's app folder
	// grunt.registerTask('default', ['check', 'preproc', 'minify', 'newer:copy:appAll']);

	// // same as default task, but includes library files, so this task shouldn't be done as often
	// grunt.registerTask('all', ['check', 'preproc', 'minify', 'copyAppLibs']);

	// // same as default task, but logs errors to files (except sass, which doesn't allow this)
	// grunt.registerTask('log', ['preprocLog', 'checkLog', /*'test',*/ 'minifyLog', 'newer:copy:appAll']);

	// // same as default task, but optimized for production
	// grunt.registerTask('prod', ['preproc', 'minify', /*'test',*/ 'checkProd', 'newer:copy:appAll']);
	// grunt.registerTask('prodLog', ['preproc', 'checkProdLog', /*'test',*/ 'minifyLog', 'newer:copy:appAll']); // also includes logging

	// // same as default task, but optimized for older browser compatibility
	// grunt.registerTask('oldBrow', ['preproc', 'checkOld', 'minify', 'copy:appAll']);

	// // same as default task, but optimized for older browser compatibility & logs output
	// grunt.registerTask('oldBrowLog', ['preproc', 'checkOldLog', 'minifyLog', 'copy:appAll']);

	// // testing task
	// grunt.registerTask('test', ['newer:concurrent:test']);

	// // check syntax of SCSS/SASS files and, if no errors, convert them to CSS
	// grunt.registerTask('sass:convert', ['newer:sass:check', 'newer:sass:move']);

	// // check syntax of SCSS/SASS files, log results, and, if no errors, convert them to CSS
	// grunt.registerTask('sass:movelog', ['newer:sass:log', 'newer:sass:move']);

	// // make "scss" & "sass" the same task (because SCSS is just a newer version of SASS)
	// grunt.registerTask('scss', 'sass');
	// grunt.registerTask('scss:move', 'sass:move');
	// grunt.registerTask('scss:check', 'sass:check');
	// grunt.registerTask('scss:log', 'sass:log');
	// grunt.registerTask('scss:convert', 'sass:convert');
	// grunt.registerTask('scss:movelog', 'sass:movelog');

	// // concurrent tasks

	// // check syntax for production environments
	// grunt.registerTask('checkProd', ['newer:concurrent:checkProd']);

	// // syntax-checking task
	// grunt.registerTask('check', ['newer:concurrent:check']);

	// // syntax-checking task for older browsers
	// grunt.registerTask('checkOld', ['newer:concurrent:checkOld']);

	// // convert all meta-markup languages to markup languages; "preproc" stands for "preprocess"
	// grunt.registerTask('preproc', ['newer:concurrent:preproc']);

	// // same as "preproc", but logs errors & results
	// grunt.registerTask('preprocLog', ['newer:concurrent:preprocLog']);

	// // minification tasks
	// grunt.registerTask('minify', ['concurrent:minify']); // just minification

	// grunt.registerTask('minifyWComm', ['newer:cocurrent:minifyWComm']); // minification with comments

	// grunt.registerTask('minifyLog', ['newer:concurrent:minifyLog']); // minification with logging & comments

	// // watching task
	// grunt.registerTask('watch', ['newer:concurrent:watch']);

	// // task to copy app files & library files at the same time
	// grunt.registerTask('copyAppLibs', ['newer:concurrent:copyAppLibs']);

};