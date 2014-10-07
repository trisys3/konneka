// BusterJS tasks for testing backend
module.exports = {

	// extra options
	options: {
		// all tasks will notify via growl when done
		growl: true
	},

	// testing
	def: {
		// defaults for testing subtasks
		test: {
			config: "test/buster/config.js"
		},
		// defaults for server subtasks
		server: {
			port: "1111",
			binding: "127.0.0.1"
		},

		// testing subtasks

		// unit testing subtask
		unitTests: {
			test: {
				"config-group": "browser-unit"
			}
		},
		// integration testing subtask
		intTests: {
			test: {
				"config-group": "browser-int"
			}
		},
		// node testing subtask
		nodeTests: {
			test: {
				"config-group": "node-tests"
			}
		}
	}

	// 

};