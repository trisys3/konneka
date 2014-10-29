'use strict';

// get functions from environment file(s)
var env = require('../env/' + (process.env.NODE_ENV || 'dev'));

// require passport for our authentication functions
var passport = require('passport');

exports.signup = function(req, res, next) {

};

exports.signupPage = function(req, res, next) {
	res.locals.module = 'accounts';
};

exports.login = function(req, res, next) {
	passport.authenticate('local', {
		failureRedirect: '/auth/login',
		failureFlash: 'Incorrect username or password. Please try again.'
		// function(err, user, info) {
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

exports.loginPage = function(req, res, next) {
	res.locals.module = 'accounts';
	res.render('login');
};

exports.logout = function(req, res) {
	req.logout();
	res.redirect(res.locals.url);
};
