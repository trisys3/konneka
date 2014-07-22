module.exports = {
	port: process.env.port || 3002,
	db: 'mongodb://konneka.org:' + (process.env.MONGO_PORT || 27019) + '/mean-test',
	busterFiles: [
		
	]
};