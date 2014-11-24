'use strict';

// shell command tasks
module.exports = {

	// starts up MongoDB server/daemon
	mongod: {
		command: 'mongod --bind_ip konneka.org --port ' + (process.env.MONGO_PORT || 27017) + ' --dbpath ' + (process.env.SYSTEMDRIVE) + '/MongoDB/data/db',
		options: {
			async: true, // makes this command asynchronous
			stdout: false, // does not print to the console
			stderr: true, // prints errors to the console
			failOnError: true, // fails this task when it encounters errors
			execOptions: {
				cwd: '.'
			}
		}
	}
};
