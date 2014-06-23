module.exports = {
	
	check: {
		tasks: ['sass:check', 'coffeelint:check', 'jshint:check', 'csslint:check'] // check for errors/warnings, optimized for current browsers
	},

	checkProd: {
		tasks: ['sass:check', 'coffeelint:check', 'jshint:prodCheck', 'csslint:check'] // check for errors/warnings, optimized for production
	},
	
	checkLog: {
		tasks: ['sass:log', 'coffeelint:check', 'jshint:log', 'csslint:log'] // check for errors/warnings, optimized for newer browsers, log results to separate file
	},
	
	checkOld: {
		tasks: ['sass:check', 'jshint:ie8', 'csslint:checkOld'] // check for errors/warnings, optimized for browsers older than Internet Explorer 9
	},
	
	checkOldLog: {
		tasks: ['sass:log', 'coffeelint:check', 'jshint:ie8Log', 'csslint:logOld'] // check for errors/warnings, optimized for browsers older than Internet Explorer 9, logs output
	},
	
	checkProdLog: {
		tasks: ['sass:log', 'coffeelint:check', 'jshint:prodLog', 'csslint:log'] // check for errors/warnings, optimized for production, log output to another file
	},
	
	preproc: {
		tasks: ['sass:move', 'coffee:def'] // minify preprocessed code, storing output in code folders
	},
	
	preprocLog: {
		tasks: ['sass:log', 'coffee:def'] //minify preprocessed code, storing output in code folders; log errors & output to log file
	},
	
	minify: {
		tasks: ['uglify:def', 'cssmin:def'] // minify code, stripping all comments, storing output in "dist" folder
	},
	
	minifyWComm: {
		tasks: ['uglify:comm', 'cssmin:comm'] // minify code, keeping all comments, storing output in "dist" folder
	},
	
	minifyLog: {
		tasks: ['uglify:log', 'cssmin:log'] // minify code, logging output & errors, storing output in "dist" folder
	},
	
	watchkarma: {
		tasks: ['watch'] // watching task
	},
	
	test: {
		tasks: ['qunit:direcTest', 'buster:def:nodeTests'] // run regular tests
	},

	testAll: {
		tasks: ['qunit:direcTest', 'qunit:allTest', 'qunit:nodeTest', 'buster:def:unitTests', 'buster:def:intTests', 'buster:def:nodeTests'] // run all tests
	},
	
	copyAppLibs: {
		tasks: ['copy:appAll', 'copy:libs'] // task for copying app files & library files at the same time
	}/*,
	
	copyAppBack: {
		tasks: ['copy:appAll, copy:backend'] // task for copying app files & backend server files at the same time
	},
	
	copyAll: {
		tasks: ['copy:appAll', 'copy:libs', 'copy:backend'] // task for copying all files to be copied from app folder to dist folder
	}*/

};