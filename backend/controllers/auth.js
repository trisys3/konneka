'use strict';

// get functions from environment file(s)
var env = require('../env/' + (process.env.NODE_ENV || 'dev'));

// require passport for our authentication functions
var passport = require('passport');

// specify model
var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.signup = function(req, res, next) {
	passport.authenticate('local-signup', function(err, user, info) {
		if(err || !user) {
			res.status(401).send(info);
		}
		else {
			req.login(user, function(err) {
				if(err) {
					res.status(400).send(info);
				}
				else {
					res.send(null)
				}
			});
		}
	})(req, res, next);
};

exports.signupPage = function(req, res) {
	res.locals.module = ['accounts'];
	res.locals.module.forEach(function(val, index) {
		env.getModularJs(res.locals.module).forEach(function(v, i) {
			res.locals.extScripts.push(v);
		});
		env.getModularCss(res.locals.module).forEach(function(v, i) {
			res.locals.extStyles.push(v);
		});
	});
	res.render('layout');
};

exports.login = function(req, res, next) {
	passport.authenticate('local', function(err, user, info) {
		if(err || !user) {
			res.status(401).send(info);
		}
		else {
			req.login(user, function(err) {
				if(err) {
					res.status(400).send(err);
				}
				else {
					res.send(null);
				}
			});
		}
	})(req, res, next);
};

exports.loginPage = function(req, res) {
	res.locals.module = ['accounts'];
	res.locals.module.forEach(function(val, index) {
		env.getModularJs(res.locals.module).forEach(function(v, i) {
			res.locals.extScripts.push(v);
		});
		env.getModularCss(res.locals.module).forEach(function(v, i) {
			res.locals.extStyles.push(v);
		});
	});
	res.render('layout');
};

exports.logout = function(req, res, next) {
	req.logout();
	res.redirect('/');
};
