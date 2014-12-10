'use strict';

// get functions from environment file(s)
var env = require('../env/' + (process.env.NODE_ENV || 'dev'));

// require passport for our authentication functions
var passport = require('passport');

var _ = require('lodash');

exports.signup = function(req, res, next) {
	passport.authenticate('local-signup', function(err, user, info) {
		if(err || !user) {
			res.status(401).send(info);
		}
		else {
			req.login(user, function(err) {
				if(err) {
					res.status(401).send(info);
				}
				else {
					res.send(null);
				}
			});
		}
	})(req, res, next);
};

exports.signupPage = function(req, res, next) {
	res.locals.module = ['accounts'];
	require('../verbs/' + (req.method || 'get'))(req, res, next);
};

exports.login = function(req, res, next) {
	passport.authenticate('local', function(err, user, info) {
		if(err || !user) {
			res.status(401).send(info);
		}
		else {
			req.login(user, function(err) {
				if(err) {
					res.status(401).send(err);
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
	res.locals.module.forEach(function(val) {
		res.locals.extScripts = _.union(res.locals.extScripts, env.getModularJs(val));
		res.locals.extStyles = _.union(res.locals.extStyles, env.getModularCss(val));
	});
	res.render('layout');
};

exports.logout = function(req, res) {
	req.logout();
	res.redirect('/');
};
