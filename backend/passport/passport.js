'use strict';

var passport = require('passport');
var User = require('mongoose').model('User');
var path = require('path');
var glob = require('glob');

module.exports = exports = function() {
	// serialize our Passport sessions
	passport.serializeUser(function(user, done) {

		// when we are done, pass the user's ID through, without the error
		// even if there is one (it's probably just an authentication error anyway)
		done(null, user.id);

	});

	// deserialize our Passport sessions
	passport.deserializeUser(function(id, done) {

		// find a user with the ID we are given
		User.findOne({
			_id: id
		},

		// do not include salt, password or temporary password
		// in the result, for security
		'-salt -password',

		// when we are done, return the user and any errors
		function(err, user) {
			done(err, user);
		});

		// include our Passport strategies
		glob(__dirname + '/strategies/*.js', function(err, files) {
			_.each(files, function(strategy) {
				server.use(require(strategy));
			});
		});

	});
};