module.exports = {
	
	options: {
		force: true
	},

	direcTest: {
		files: '<%= filePatts.qunitDirec.src %>'
	},

	allTest: {
		files: '<%= filePatts.qunitAll.src %>'
	},

	nodeTest: {
		files: '<%= filePatts.qunitNode.src %>'
	}

};