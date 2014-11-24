'use strict';

// CoffeeScript-to-JavaScript tasks
module.exports = {

	// extra options
	options: {
		sourceMap: true
	},

	// task to minify frontend CoffeeScript files into JavaScript
	def: {
		files: '<%= filePatts.convCoffee.files %>'
	},

	// task to minify backend CoffeeScript files into JavaScript
	back: {
		files: '<%= filePatts.backCoffee.files %>'
	}

};