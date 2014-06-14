// environment variable setting/replacing/unsetting tasks

module.exports = {

	// environment variable values for developers
	// creating/maintaining site
	dev: {
		NODE_ENV: 'dev'
	},

	// environment variable values for having site on
	// server, being shown to customers
	prod: {
		NODE_ENV: 'prod'
	},

	// environment for making it easier to test things
	// on the site
	test: {
		NODE_ENV: 'test',
		DEBUG: 'express:*'
	}

};