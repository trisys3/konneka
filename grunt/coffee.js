// CoffeeScript-to-JavaScript tasks
module.exports = {

	// extra options
	options: {
		bare: false,
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