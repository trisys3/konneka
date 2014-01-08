module.exports = function(grunt) {
	
	// function & property declarations
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		// JSHint options
		jshint: {
			src: ['Gruntfile.js', 'app/js/**/*.js'],
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
				globals: {
					jQuery: true,
					console: true,
					module: true
				}
			}
		},

		// Uglify options
		uglify: {
		// 	def: {
		// 		options: {
		// 			banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
		// 			compress: true, // optimizes & compresses files
		// 			mangle: { // reduce variable names to as few characters as possible
		// 				except: ['jQuery'] // except jQuery variables, as these are needed for jQuery
		// 			}
		// 		},
		// 		files: [{
		// 			expand: true,
		// 			cwd: 'app',
		// 			src: '**/*.js',
		// 			dest: 'dist/app'
		// 		}],
		// 	},
			log: {
				options: {
					banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
					compress: true, // optimizes & compresses files
					report: 'gzip',
					wrap: 'wrapper',
					exportAll: true,
					preserveComments: 'all'
				},
				files: [{
					expand: true,
					cwd: 'app',
					src: '**/*.js',
					dest: 'dist/app'
				}],
			}
			comm: {
				options: {
					banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
					compress: true, // optimizes & compresses files
					mangle: { // reduce variable names to as few characters as possible
						except: ['jQuery'] // except jQuery variables, as these are needed for jQuery
					},
					preserveComments: true
				},
				files: [{
					expand: true,
					cwd: 'app',
					src: '**/*.js',
					dest: 'dist/app'
				}],
			}
			// dist: {
			// 	files: {
			// 		'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
			// 	}
			// }
		},

		yuidoc: {
			compile: {
				name: '<%= pkg.name %>',
				description: '<%= pkg.description %>'
				version: '<%= pkg.version %>',
				url: '<%= pkg.homepage %>',
				options: {
					paths: ['app/js/**/*.js', 'app/css/**/*.css', 'app/min-libs/**/*.js', 'app/min-libs/**/*.css'],
					outdir: 'dist/app'
				}
			}
		}

		// SCSS options
		sass: {
			move: {
				options: {
					sourcemap: true, // allow source maps
					trace: true, // trace back to source on error
					debugInfo: true, // extra debugging info to be used by browser debuggers
					lineNumbers: true, // shows line numbers of errors, warnings, etc.
					compass: true // use Compass
				},
				files: [{
					expand: true,
					cwd: 'app/scss',
					src: ['**/*.scss', '**/*.sass'],
					dest: '../css/',
					ext: '.css'
				}]
			},
			check: {
				options: {
					check: true, // checks syntax
					sourcemap: true, // allow source maps
					trace: true, // trace back to source on error
					debugInfo: true, // extra debugging info to be used by browser debuggers
					lineNumbers: true, // shows line numbers of errors, warnings, etc.
					compass: true // use Compass
				}
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
			files: '<%= jshint.src %>',
			tasks: ['jshint', 'scss', 'qunit', ]
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

	// Grunt tasks, called by calling "grunt *task*" from command line
	// default task, called with just "grunt"
	grunt.registerTask('default', ['jshint']);

	// testing task
	grunt.registerTask('test', ['qunit']);

	// syntax-checking task
	grunt.registerTask('check', ['sass:check', 'jshint']);

	// these tasks compile preprocessors & stores results in separate files
	grunt.registerTask('sass_move', 'sass:move'); // even though this is named "Sass", it also compiles SCSS

	grunt.registerTask('scss_move', 'sass:move'); // even though this is named "SCSS", it also compiles Sass

	// minification tasks
	grunt.registerTask('minify', ['yuidoc']); // just minification

	grunt.registerTask('minifyWComm', ['uglify:comm']); // minification with comments

	grunt.registerTask('minifyLog', ['uglify:log']); // minification with logging & comments

};