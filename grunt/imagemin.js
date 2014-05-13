// imagemin options
module.exports = {
	
	app: {
		files: '<%= filePatts.images.files %>',
		options: {
			optimizationLevel: 7
		}
	},

	libs: {
		files: '<%= filePatts.imageLib.files %>',
		options: {
			optimizationLevel: 7
		}
	},

	backend: {
		files: '<%= filePatts.backImages.files %>',
		options: {
			optimizationLevel: 7
		}
	}
	
};