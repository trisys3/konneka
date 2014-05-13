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
		src: ['Gruntfile.js', 'package.json', 'app/modules/**/*.js', 'app/modules/**/*.json', '!app/modules/**/*.min.js', '!app/modules/**/*.min.json']
	},
	// check library JavaScript files
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
 	qunitTest: {
 		files: [{
 			expand: true,
 			cwd: 'test/',
 			src: ['**/*.html']
 		}]
 	},
	watchEvrthg: {
		files: [{
			expand: true,
			cwd: '/',
			src: '**'
		}]
	}
};