'use strict';

// QUnit DOM-testing tasks, mostly for Angular directives
module.exports = {
	
	options: {
		force: true,
		noGlobals: true
	},

	direcTest: {
		files: '<%= filePatts.qunitDirec.src %>'
	},

	allTest: {
		files: '<%= filePatts.qunitAll.src %>'
	},

	nodeTest: {
		files: '<%= filePatts.qunitNode.src %>'
	},

	frontendTest: {
		files: '<%= filePatts.qunitFrontend.src %>'
	}

};