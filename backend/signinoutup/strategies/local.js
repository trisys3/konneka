'use strict';

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var UserModel = require('mongoose').model('User');

module.exports = function() {

	// use our "local" passport strategy
	passport.use(new LocalStrategy({
		
		// use the default names for the username & password fields
		usernameField: 'loginUser',
		passwordField: 'loginPass'
		},

		// main strategy function
		function(username, password, done) {

			// find user with given username
			UserModel.findOne({
				username: username
			},

			// with this username, do this
			function(err, user) {

				// if there's an error, pass it along
				if(err) {
					return done(err);
				}

				// if the username and/or password is incorrect, return an error
				// along with a message
				else if(!user || !user.authenticate(password)) {
					return done(null, false, {
						message: 'Invalid username and/or password'
					});
				}

				// if everything is correct, return the user document from the database
				else {
					return done(null, user);
				}

			});
		}

	));
};