path = require('path'); // get path module

module.exports = {

	// default options
	options: {
		hostname: '127.0.0.1', // allow connections from localhost
		port: 3000, // default port

	},

	// ephemeral server to not reload when express files change
	ephe: {
		options: {
			server: path.resolve(__dirname, '../backend/config/express.js'), // express server file
		}
	},

	dev: {
		options: {
			server: path.resolve(__dirname, '../backend/config/express.js'), // express server file
			livereload: true, // automatically reload server when express pages change
			serverreload: true // run forever-running server (do not close when finished)
		}
	},

	prod: {
		options: {
			livereload: true, // automatically reload server when express pages change
			serverreload: true, // run forever-running server (do not close when finished)
			server: path.resolve(__dirname, '../backend/config/express.js') // express server file
		}
	},

	test: {
		options: {
			showStack: true, // show errors in browser
			server: path.resolve(__dirname, '../backend/config/express.js'), // express server file
			open: true, // open default page in browser
			livereload: true, // automatically reload server when express pages change
			serverreload: true, // run forever-running server (do not close when finished)
		}
	},

	testEphe: {
		options: {
			showStack: true, // show errors in browser
			server: path.resolve(__dirname, '../backend/config/express.js'), // express server file
			open: true // open default page in browser
		}
	}

};