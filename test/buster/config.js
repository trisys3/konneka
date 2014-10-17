module.exports = {

	// defaults for all tests
	"def": {
		rootPath: '../..'
		// tests: "shared/**/*.js"
	},
	
	// configuration for Node.js testing
	"node-tests": {
		extends: "def", // includes default task object
		env: "node",
		tests: ["backend/**/*.js"]
	},

	// defaults for browser testing
	"browser-def": {
		extends: "def", // includes default task configuration
		env: "browser",
		// libs: ["app/min-libs/**/*.js"]
		// extensions: ["buster-coffee", "buster-amd"]
	},

	// configuration for browser unit tests
	"browser-unit": {
		extends: "browser-def", // includes default browser configuration
		tests: ["browser/unit/**/*.js"]
	},

	// configuration for browser integration testing
	"browser-int": {
		extends: "browser-def", // includes default browser configuration
		tests: ["browser/int/**/*.js"]
	}

};