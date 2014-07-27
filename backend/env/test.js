module.exports = {
	port: process.env.port || 3002,
	db: 'mongodb://konneka.org:' + (process.env.MONGO_PORT || 27019) + '/mean-test',
	getBuster: function() {
		
	},

	getQunit: function() {

	},

	getKarma: function() {
		'../jasmine/**/*.js',
      '../angular-mocks.js',
      '../../app/min-libs/angular-mocks/angular-mocks.js',
      '!../jasmine/**/directives/**.js'
	},

	getJasmine: function() {
		
	}
};