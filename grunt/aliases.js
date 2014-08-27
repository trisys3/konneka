module.exports = {

	// Grunt tasks, called by calling "grunt *task*" from command line

	// composite grunt tasks

	// default task, called with just "grunt": converts all SCSS/SASS files into CSS files, checks syntax of non-library JavaScript & CSS files in app folder,
	// minifies these files, and moves already-minified files as well as non-.js & non-.css files into dist's app folder
	default: ['check', 'preproc', 'minify', 'newer:copy:appAll'],
	// also includes library files, so this task shouldn't be done as often
	all: ['check', 'preproc', 'minify', 'copyAppLibs'],

	// same as default task, but logs errors/warnings/output to files (except sass, which doesn't allow this)
	log: ['checkLog', 'preprocLog', 'minifyLog', 'newer:copy:appAll'],

	// same as default task, but optimized for production
	prod: ['checkProd', 'preproc', 'minify', 'newer:copy:appAll'],
	// also logs output
	prodLog: ['checkProdLog', 'preproc', 'minifyLog', 'newer:copy:appAll'],

	// same as default task, but optimized for older browser compatibility
	oldBrow: ['preproc', 'checkOld', 'minify', 'newer:copy:appAll'],
	// also logs output
	oldBrowLog: ['preproc', 'checkOldLog', 'minifyLog', 'newer:copy:appAll'],


	// testing tasks

	// general testing task
	test: ['newer:concurrent:test'],

	// use every test specified with each testing framework
	testAll: ['newer:concurrent:testAll'],

	// special test-watching task for Karma
	testWatch: ['newer:concurrent:testWatch'],


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
	copyAppLibs: 'newer:concurrent:copyAppLibs',


	// server & environment tasks

	// starts forever-running server with "production" environment
	server: ['env:prod', 'shell:mongod', 'express:prod', 'express-keepalive'],

	// starts forever-running server with "development" environment
	serverDev: ['env:dev', 'shell:mongod', 'express:dev', 'express-keepalive'],

	// starts ephemeral server with "development" environment
	serverEphe: ['env:dev', 'shell:mongod', 'express:ephe'],

	// starts forever-running server with "test" environment
	serverTest: ['env:test', 'shell:mongod', 'express:test', 'express-keepalive'],

	// starts ephemeral server with "test" environment
	serverTestEphe: ['env:test', 'shell:mongod',  'express:testEphe']

};