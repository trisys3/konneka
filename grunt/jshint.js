module.exports = {

	// default JSHint options for this site
	options: {
		// options designed to give more warnings & errors
		curly: true, // warn when not using curly braces for blocks
		eqeqeq: true, // always use ===/!==, never ==/!=
		immed: true, // always use parentheses in function calls
		indent: 2, // indent is equal to 2 spaces
		latedef: true, // warn when using variables above where they are defined
		newcap: true, // always capitalize constructor functions
		noarg: true, // never use arguments.caller/arguments.callee
		nonew: true, // never use constructor functions purely for side effects, without assigning to a variable
		quotmark: true, // give warnings if I am not consistent in using single or double quotes
		undef: true, // never use undefined variables
		unused: true, // warn when variables are not used
		strict: true, // use JavaScript's *strict* mode for functions, prohibit global *strict* mode
		trailing: true, // no trailing white spaces
		// options designed to give fewer warnings
		boss: true, // ignore warnings about assignment (x = y) when comparison (x === y) is expected
		eqnull: true, // suppress warnings about "== null"
		// esnext: true, // tells JSHint I am using ECMAScript 6; uncomment this option if/when I start using ECMAScript 6 for this website
		multistr: true, // multiline strings are allowed
		sub: true, // does not warn when accessing array members with [] instead of dots (e.g. author['name'] instead of author.name)
		force: true, // does not abort due to errors
		extensions: '.json', // extensions to check along with ".js"
		// environment global variables
		browser: true, // browser globals are used
		jquery: true, // jQuery is used
		node: true, // Node.js is used
		// specific warnings & errors to ignore, by ID number of error
		ignores: [],
		// global variables not defined in environment area
		globals: {
			module: true,
			angular: true // used in AngularJS
		}
	},

	// checks syntax of JavaScript files, but does not care about syntax IE8 & other older browsers complain about
	check: {
		src: '<%= filePatts.checkJs.src %>',
		options: {
			// extra environment global variables
			devel: true // allow development global variables, usually for debugging
		}
	},
	
	// checks syntax for older browsers
	ie8: {
		src: '<%= filePatts.checkJs.src %>',
		options: {
			// extra options for checking code for older browser compatibility
			// options designed to give more warnings/errors
			es3: true, // use ECMAScript 3 instead of 5/6
			strict: false // do not require ECMAScript 5 "use strict" declaration
			// options designed to give fewer warnings/errors
			// esnext: false, // do not use ECMAScript 6 in code designed for older browsers; uncomment this option if/when I start using ECMAScript 6 for this website
		}
	},

	// checks syntax for older browsers, logs output
	ie8Log: {
		src: '<%= filePatts.checkJs.src %>',
		options: {
			// extra options for checking code for older browser compatibility
			// options designed to give more warnings/errors
			es3: true, // use ECMAScript 3 instead of 5/6
			strict: false, // do not require ECMAScript 5 "use strict" declaration
			// options designed to give fewer warnings/errors
			// esnext: false, // do not use ECMAScript 6 in code designed for older browsers; uncomment this option if/when I start using ECMAScript 6 for this website
			// options unique to Grunt's version of JSHint
			reporterOutput: 'errs/dev/jsHint.js', // error output file
			reporter: 'checkstyle' // use "checkstyle" JSHint reporter
		}
	},

	// checks syntax of JavaScript files, then posts results to error file
	log: {
		src: '<%= filePatts.checkJs.src %>',
		options: {
			reporterOutput: 'errs/dev/jsHint.js', // error output file
			reporter: 'checkstyle', // use "checkstyle" JSHint reporter
			// extra environment global variables
			devel: true // allow development global variables, usually for debugging
		}
	},

	// check code for production
	prodCheck: {
		src: '<%= filePatts.checkJs.src %>'
	},

	// check code for production & log results
	prodLog: {
		src: '<%= filePatts.checkJs.src %>',
		options: {
			reporterOutput: 'errs/prod/jsHint.js', // error output file
			reporter: 'checkstyle', // use "checkstyle" JSHint reporter
		}
	}

};