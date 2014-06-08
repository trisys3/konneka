module.exports = {

	// default options
	options: {
		hostname: '*',
		port: 3000,

	},

	def: {
		bases: path.resolve(__dirname, 'app')
	},

	prod: {
		livereload: true,
		serverreload: true,
		bases: path.resolve(__dirname, 'dist')
	}

	test: {
		showStack: true,
		bases: path.resolve(__dirname, 'app')
	}

};