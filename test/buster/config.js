module.exports = {

	// defaults for all tests
	"def": {
		tests: "tests/shared/**/*.js"
	},
	
	// configuration for Node.js testing
	"node-tests": {
		extends: "defaults", // includes default task object
		env: "node",
		tests: "tests/backend/**/*.js"
	},

	// defaults for browser testing
	"browser-def": {
		extends: "defaults", // includes default task configuration
		env: "browser",
		libs: "../app/min-libs/**/*.js",
		extensions: ["buster-coffee", "buster-amd"]
	},

	// configuration for browser unit tests
	"browser-unit": {
		extends: "browser-def", // includes default browser configuration
		tests: "tests/browser/unit/**/*.js"
	},

	// configuration for browser integration testing
	"browser-int": {
		extends: "browser-def", // includes default browser configuration
		tests: "tests/browser/int/**/*.js"
	}

};