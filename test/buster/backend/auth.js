'use strict';

// test our authentication and authorization mechanisms

// get our required libraries
// get buster testing library & its assorted methods
var buster = require('buster');
var assert = buster.referee.assert;
var refute = buster.referee.refute;

// get supertest HTTP request-mocking framework
var request = require('supertest');

// get mongoose database abstraction library
var mongoose = require('mongoose');

buster.testCase('authentication and authorization', {
	setUp: function() {
		// define our test server
		this.authServer = require('../../../backend/page');

		// define the user model
		this.UserModel = mongoose.model('User');
	},

	// test signing in
	'signup, login and logout': {
		setUp: function() {
			// create as many user objects as our tests need

			// create a user with as many fields as the user inserts while
			// signing up
			this.fullUser = {
				username: 'username',
				password: 'password',
				email: 'user@email.com',
				prefix: 'Mr.',
				firstName: 'John',
				middleName: 'Smith',
				lastName: 'Doe',
				suffix: 'Jr.',
				born: 'Jan. 30, 1950',
				aboutMe: 'A description about myself'
			};

			// create empty user
			this.emptyUser = {};

			// create user with only username & password
			this.barebonesUser = {
				username: 'username',
				password: 'password'
			};

			// create incorrect username/password pair
			this.wrongUser = {
				username: 'wrongname',
				password: 'wrongword'
			}

			// delete all users in the "mean-dev" database so they don't conflict
			// with the ones we create for these tests
			this.UserModel.remove().exec();
		},

		'signup': {

			'able to signup with full user': function(done) {
				request(this.authServer)
					.put('/signup')
					.set('Content-Type', 'application/json')
					.set('Host', 'konneka.org')
					.send(this.fullUser)
					.end(function(req, res, done) {
						console.log(res);
					});
			},

			'able to signup with barebones user': function(done) {
				request(this.authServer)
					.put('/signup')
					.set('Content-Type', 'application/json')
					.set('Host', 'konneka.org')
					.send(this.barebonesUser)
					.end(function(req, res, done) {

					});
			},

			'able to sign up with empty user': function(done) {
				request(this.authServer)
					.put('/signup')
					.set('Content-Type', 'application/json')
					.set('Host', 'konneka.org')
					.send(this.emptyUser)
					.end(function(req, res, done) {

					});
			}

		},

		'login': {

			'able to log in with full user': function(done) {
				this.loginUser = new UserModel(this.fullUser);

				request(this.authServer)
					.post('/login')
					.set('Content-Type', 'application/json')
					.set('Host', 'konneka.org')
					.send(this.fullUser)
					.end(function(req, res, done) {

					});
			},

			'able to log in with barebones user': function(done) {
				this.loginUser = new UserModel(this.barebonesUser);

				request(this.authServer)
					.post('/login')
					.set('Content-Type', 'application/json')
					.set('Host', 'konneka.org')
					.send(this.barebonesUser)
					.end(function(req, res, done) {
						
					});
			},

			'able to log in with empty user': function(done) {
				this.loginUser = new UserModel(this.emptyUser);

				request(this.authServer)
					.post('/login')
					.set('Content-Type', 'application/json')
					.set('Host', 'konneka.org')
					.send(this.emptyUser)
					.end(function(req, res, done) {
						
					});
			},

			'able to log in with full user': function(done) {
				this.loginUser = new UserModel(this.fullUser);

				request(this.authServer)
					.post('/login')
					.set('Content-Type', 'application/json')
					.set('Host', 'konneka.org')
					.send(this.wrongUser)
					.end(function(req, res, done) {
						
					});
			}

		}

		tearDown: function() {
			// delete all the users in these tests
			this.UserModel.remove().exec();
		}


	}
});