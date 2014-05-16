module.exports = {

	// Grunt tasks, called by calling "grunt *task*" from command line

	// composite grunt tasks

	// default task, called with just "grunt": converts all SCSS/SASS files into CSS files, checks syntax of non-library JavaScript & CSS files in app folder,
	// minifies these files, and moves already-minified files as well as non-.js & non-.css files into dist's app folder
	default: ['check', 'preproc', 'minify', 'newer:copy:appAll' /*'test'*/],
	// also includes library files, so this task shouldn't be done as often
	all: ['check', 'preproc', 'minify', 'copyAppLibs' /*'test'*/],

	// same as default task, but logs errors/warnings/output to files (except sass, which doesn't allow this)
	log: ['checkLog', 'preprocLog', 'minifyLog', 'newer:copy:appAll' /*'test'*/],

	// same as default task, but optimized for production
	prod: ['checkProd', 'preproc', 'minify', 'newer:copy:appAll' /*'test'*/],
	// also logs output
	prodLog: ['checkProdLog', 'preproc', 'minifyLog', 'newer:copy:appAll' /*'test'*/],

	// same as default task, but optimized for older browser compatibility
	oldBrow: ['preproc', 'checkOld', 'minify', 'copy:appAll'],
	// also logs output
	oldBrowLog: ['preproc', 'checkOldLog', 'minifyLog', 'copy:appAll'],

	// testing tasks
	test: ['newer:concurrent:test'],


	// make "scss" & "sass" the same task (because SCSS is just a newer version of Sass)

	// // check syntax of SCSS/SASS files and, if no errors, convert them to CSS
	// sass:convert: ['newer:sass:check', 'newer:sass:move'],

	// // check syntax of SCSS/SASS files, log results, and, if no errors, convert them to CSS
	// sass:movelog: ['newer:sass:log', 'newer:sass:move'],

	scss: 'sass',
	// scss:move: 'sass:move',
	// scss:check: 'sass:check',
	// scss:log: 'sass:log',
	// scss:convert: 'sass:convert',
	// scss:movelog: 'sass:movelog',


	// syntax-checking tasks

	// main syntax-checking task
	check: 'newer:concurrent:check',

	// production environments
	checkProd: 'newer:concurrent:checkProd',

	// older browsers
	checkOld: 'newer:concurrent:checkOld',

	// older browsers, logs output
	checkOldLog: 'newer:concurrent:checkOldLog',

	// older browsers, production environments
	checkProdLog: 'newer:concurrent:checkProdLog',


	// preprocessing tasks

	// main preprocessing task
	preproc: 'newer:concurrent:preproc',

	// also logs output
	preprocLog: 'newer:concurrent:preprocLog',


	// minifying/uglifying tasks

	// main minifying task
	minify: 'newer:concurrent:minify',

	// minify, leaving comments
	minifyWComm: 'newer:concurrent:minify',

	// minify, leaving comments, logs output
	minifyLog: 'newer:concurrent:minifyLog',

	// copying tasks

	// copies both app & library files
	copyAppLibs: 'newer:concurrent:copyAppLibs'


	// // composite grunt tasks
	// all: {

	// 	// default task, called with just "grunt": converts all SCSS/SASS files into CSS files, checks syntax of non-library JavaScript & CSS files in app folder,
	// 	// minifies these files, and moves already-minified files as well as non-.js & non-.css files into dist's app folder
	// 	default: ['check', 'preproc', 'minify', 'newer:copy:appAll' /*'test'*/],
	// 	// also includes library files, so this task shouldn't be done as often
	// 	all: ['check', 'preproc', 'minify', 'copyAppLibs' /*'test'*/],
		
	// 	// same as default task, but logs errors/warnings/output to files (except sass, which doesn't allow this)
	// 	log: ['checkLog', 'preprocLog', 'minifyLog', 'newer:copy:appAll' /*'test'*/],
		
	// 	// same as default task, but optimized for production
	// 	prod: ['checkProd', 'preproc', 'minify', 'newer:copy:appAll' /*'test'*/],
	// 	// also logs output
	// 	prodLog: ['checkProdLog', 'preproc', 'minifyLog', 'newer:copy:appAll' /*'test'*/],
		
	// 	// same as default task, but optimized for older browser compatibility
	// 	oldBrow: ['preproc', 'checkOld', 'minify', 'copy:appAll'],
	// 	// also logs output
	// 	oldBrowLog: ['preproc', 'checkOldLog', 'minifyLog', 'copy:appAll']

	// },

	// test: {

	// 	// testing tasks
	// 	test: 'newer:concurrent:test'

	// },

	// // make "scss" & "sass" the same task (because SCSS is just a newer version of Sass)
	// scss: {

	// 	// // check syntax of SCSS/SASS files and, if no errors, convert them to CSS
	// 	// sass:convert: ['newer:sass:check', 'newer:sass:move'],

	// 	// // check syntax of SCSS/SASS files, log results, and, if no errors, convert them to CSS
	// 	// sass:movelog: ['newer:sass:log', 'newer:sass:move'],

	// 	scss: 'sass',
	// 	// scss:move: 'sass:move',
	// 	// scss:check: 'sass:check',
	// 	// scss:log: 'sass:log',
	// 	// scss:convert: 'sass:convert',
	// 	// scss:movelog: 'sass:movelog'
		
	// },

	// // checks syntax of main files
	// check: {

	// 	// main syntax-checking task
	// 	check: 'newer:concurrent:check',

	// 	// production environments
	// 	checkProd: 'newer:concurrent:checkProd',

	// 	// older browsers
	// 	checkOld: 'newer:concurrent:checkOld',

	// 	// older browsers, logs output
	// 	checkOldLog: 'newer:concurrent:checkOldLog',

	// 	// older browsers, production environments
	// 	checkProdLog: 'newer:concurrent:checkProdLog'

	// },

	// // converts code from preprocessed files to main code files
	// preproc: {

	// 	// main preprocessing task
	// 	preproc: 'newer:concurrent:preproc',

	// 	// also logs output
	// 	preprocLog: 'newer:concurrent:preprocLog'

	// },

	// // minifying tasks
	// minify: {

	// 	// main minifying task
	// 	minify: 'newer:concurrent:minify',

	// 	// minify, leaving comments
	// 	minifyWComm: 'newer:concurrent:minify',

	// 	// minify, leaving comments, logs output
	// 	minifyLog: 'newer:concurrent:minifyLog'

	// },

	// // copying tasks
	// copy: {

	// 	// copies both app & library files
	// 	copyAppLibs: 'newer:concurrent:copyAppLibs'

	// }

};