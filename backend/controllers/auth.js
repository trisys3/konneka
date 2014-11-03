'use strict';

// get functions from environment file(s)
var env = require('../env/' + (process.env.NODE_ENV || 'dev'));

// require passport for our authentication functions
var passport = require('passport');

// specify model
var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.signup = function(req, res) {
	console.log(req.body);
	var user = new User(req.body);
	user.save(function(err) {
		if(err) {
			return res.status(400).send(err);
		}
		else {
			req.login(user, function(err) {
				if(err) {
					res.status(400).send(err);
				}
			});
		}
	});
	console.log(req.session);
	console.log(req.user);
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

exports.login = function(req, res) {
	console.log(req.body);
	passport.authenticate('local', {
		successRedirect: '/',
		failureRedirect: '/login',
		failureFlash: 'Incorrect username or password. Please try again.'
	});
	console.log(req.user);
	console.log(req.session);
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

exports.logout = function(req, res) {
	req.logout();
	res.redirect(res.locals.url);
};
