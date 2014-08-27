// environment variable setting/replacing/unsetting tasks

module.exports = {

	// environment variable values for developers
	// creating/maintaining site
	dev: {
		options: {
			add: {
				NODE_ENV: 'dev',
				MONGO_PORT: 27017,
				SERVER_PORT: 3000,
				DEBUG: 'express:*'
			}
		}
	},

	// environment variable values for having site on
	// server, being shown to customers
	prod: {
		options: {
			add: {
				NODE_ENV: 'prod',
				MONGO_PORT: 27018,
				SERVER_PORT: 3001
			}
		}
	},

	// environment for making it easier to test things
	// on the site
	test: {
		options: {
			add: {
				NODE_ENV: 'test',
				MONGO_PORT: 27019,
				SERVER_PORT: 3002,
				DEBUG: 'express:*'
			}
		}
	}

};