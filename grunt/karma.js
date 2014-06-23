// Karma.js tests
module.exports = {

	// options shared among all tasks
	options: {
		configFile: 'test/karma/karma.config.js'
	},

	// default testing task
	def: {
		
	},

	// run all tests with default browsers
	allDefBrow: {
		files: '../jasmine/**/*.js'
	},

	// run all tests with all browsers
	allBrow: {
		browsers: ['Chrome', 'ChromeCanary', 'Firefox', 'Internet Explorer', 'Safari', 'Opera', 'PhantomJS']
	},

	// run default tests (all but DOM tests) in all browsers available for Windows
	allWindows: {
		browsers: ['Chrome', 'ChromeCanary', 'Firefox', 'Internet Explorer', 'Opera', 'PhantomJS']
	},

	// run default tests (all but DOM tests) in all browsers available for Linux
	allLinux: {
		browsers: ['Chrome', 'Firefox', 'Opera', 'PhantomJS']
	},

	// run default tests (all but DOM tests) in all browsers available for Mac
	allMac: {
		browsers: ['Chrome', 'ChromeCanary', 'Firefox', 'Safari', 'Opera', 'PhantomJS']
	},

	// only run tests with PhantomJS
	phanjs: {
		browsers: ['PhantomJS'],
		singleRun: true
	},

	// only run tests with Google Chrome
	chrome: {
		browsers: ['Chrome']
	},

	// only run tests in Firefox
	firefox: {
		browsers: ['Firefox']
	},

	// only run tests in Chrome & Chrome Canary
	canary: {
		browsers: ['Chrome', 'ChromeCanary']
	},

	// only run tests in Opera
	ie: {
		browsers: ['Internet Explorer']
	},

	// only run tests in Internet Explorer
	opera: {
		browsers: ['Opera']
	},

	// only run tests in Safari
	safari: {
		browsers: ['Safari']
	}

};