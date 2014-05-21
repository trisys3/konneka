module.exports = {
	// file pattern for minifying non-library .js files in app folder into .min.js files in dist's non-library folders
	jsMinApp: {
		files: [{
			expand: true,
			cwd: 'app/modules',
			src: ['**/*.js', '!**/*.min.js'],
			dest: 'dist/app/modules',
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
			src: ['**/*.css', '!**/*.min.css'],
			dest: 'dist/app/modules',
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
	otherExApp: {
		files: [{
			expand: true,
			cwd: 'app/modules',
			src: ['**', '!**/*.js', '!**/*.css', '!**/sass/**', '!**/scss/**', '../index.php'],
			dest: 'dist/app/modules'
		}]
	},
	// file pattern for moving all non-library files from app folder to dist folder
	allApp: {
		files: [{
			expand: true,
			cwd: 'app/modules',
			src: ['**', '!**/*.js', '!**/*.css', '**/*.min.js', '**/*.min.css', '!**/sass/**', '!**/scss/**', '../index.php'],
			dest: 'dist/app/modules'
		}]
	},
	// file pattern for minifying images in the app folder & putting the results in the dist folder
	images: {
		files: [{
			expand: true,
			cwd: 'app/modules',
			src: ['**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.tiff', '**/*.png'],
			dest: ['dist/app/modules']
		}]
	},
	// file pattern for minifying images in the min-libs folder & putting the results in the dist/min-libs folder
	imagesLib: {
		files: [{
			expand: true,
			cwd: 'app/min-libs',
			src: ['**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.tiff', '**/*.png'],
			dest: ['dist/min-libs']
		}]
	},
	// file pattern for minifying back-end images from app folder to dist folder
	backImages: {
		files: [{
			expand: true,
			cwd: 'app/backend',
			src: ['**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.tiff', '**/*.png'],
			dest: ['dist/app/backend']
		}]
	},
	// file pattern for moving library files in app folder into dist's library folder
	minnedLibsOthers: {
		files: [{
			expand: true,
			cwd: 'app/min-libs',
			src: ['**'],
			dest: 'dist/min-libs'
		}]
	},
	// check non-library JavaScript files
	checkJs: {
		src: ['Gruntfile.js', 'package.json', 'app/**/*.js', 'app/**/*.json', '!app/**/*.min.js', '!app/**/*.min.json']
	},
	// check library JavaScript & JSON files
	checkLibJs: {
		files: [{
			expand: true,
			cwd: 'app/min-libs',
			src: ['**/*.js', '**/*.json']
		}]
	},
	// check non-library CSS files
	checkCss: {
		files: [{
			expand: true,
			cwd: 'app/modules',
			src: ['**/*.css', '!**/*.min.css']
		}]
	},
	// check library CSS files
	checkLibCss: {
		files: [{
			expand: true,
			cwd: 'app/min-libs',
			src: ['**/*.css', '!**/*.min.css']
		}]
	},
	// convert Sass & SCSS files in app folder to CSS files in dist folder
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
	},
	// check CoffeeScript syntax
	coffeeCheck: {
		files: [{
			expand: true,
			cwd: 'app',
			src: ['**.coffee']
		}]
	},
	// convert frontend CoffeeScript files into JavaScript, then store results
	convCoffee: {
		files: [{
			expand: true,
			cwd: 'app/modules',
			src: ['**.coffee'],
			dest: '',
			ext: '.js',
			rename: function(dest, src) {
				return 'app/modules/' + src.replace('coffee', 'js');
			}
		}]
	},
	// convert backend CoffeeScript files into JavaScript, then store results
	backCoffee: {
		files: [{
			expand: true,
			cwd: 'app/backend',
			src: ['**.coffee'],
			dest: '',
			ext: '.js',
			rename: function(dest, src) {
				return 'app/backend/' + src.replace('coffee', 'js');
			}
		}]
	},
	// test Angular directives with QUnit
 	qunitDirec: {
 		files: [{
 			src: ['test/qunit/direc/**/*.html']
 		}]
 	},
 	// test all browser JavaScript files with QUnit
 	qunitAll: {
 		files: [{
 			src: ['test/qunit/all/**/*.html']
 		}]
 	},
 	// test Node files with QUnit
 	qunitNode: {
 		files: [{
 			src: ['test/qunit/backend/**/*.html']
 		}]
 	},
 	// watch all files
	watchEvrthg: {
		files: [{
			expand: true,
			cwd: '/',
			src: '**'
		}]
	}
};