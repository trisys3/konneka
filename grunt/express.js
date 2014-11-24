'use strict';

// express tasks
module.exports = {

	// default options
	options: {
		hostname: '127.0.0.1', // allow connections from localhost
		port: (process.env.SERVER_PORT || 3000), // default port
	},

	// ephemeral server to not reload when express files change
	ephe: {
		options: {
			server: 'backend/page', // express server file
		}
	},

	dev: {
		options: {
			server: 'backend/page', // express server file
			livereload: true, // automatically reload server when express pages change
			// serverreload: true, // run forever-running server (do not close when finished)
			bases: ['app', 'backend'] // watch files in app folder for changes
		}
	},

	prod: {
		options: {
			livereload: true, // automatically reload server when express pages change
			// serverreload: true, // run forever-running server (do not close when finished)
			server: 'backend/page', // express server file
			bases: ['dist', 'backend'] // watch files in app folder for changes
		}
	},

	test: {
		options: {
			showStack: true, // show errors in browser
			server: 'backend/page', // express server file
			livereload: true, // automatically reload server when express pages change
			// serverreload: true, // run forever-running server (do not close when finished)
			bases: ['app', 'test', 'backend'] // watch files in app folder for changes
		}
	},

	testEphe: {
		options: {
			showStack: true, // show errors in browser
			server: 'backend/page', // express server file
			open: true // open default page in browser
		}
	}

};
