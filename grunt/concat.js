'use strict';

// concatenation tasks
module.exports = {
	
	options: {
		separator: ';'
	},

	dist: {
		src: ['src**/*.js'],
		dest: 'dist/<%= grunt.file.readJSON("package.json").name %>.js'
	}

};