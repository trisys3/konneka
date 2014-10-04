'use strict';

// get functions from environment file(s)
var env = require('../env/' + (process.env.NODE_ENV || 'dev'));

exports.login = function(req, res, next) {
	passport.authenticate('local', function(err, user, info) {
		console.log(user);
		// if(err || !user) {
		// 	res.status(400).send(info);
		// }
		// else {
		// 	// remove sensitive data
		// 	user.password = undefined;
		// 	user.salt = undefined;

		// 	req.login()
		// }
	});
};

exports.logout = function(req, res) {
	req.logout();
};