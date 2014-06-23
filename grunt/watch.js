module.exports = {

	// default watching task
	def: {
		// watches proeprocessing, testing, minifying, & checking tasks
		tasks: ['preproc', 'testWatch', 'minify', 'check'],
		
		options: {
			interrupt: true,
			spawn: false,
			reload: true
		}
	},

	test: {
		tasks: ['testWatch']
	}
	
};