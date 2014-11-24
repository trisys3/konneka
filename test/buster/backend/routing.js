'use strict';

// test our routes

// require buster & its assertion methods
var buster = require('buster');
var assert = buster.referee.assert;
var refute = buster.referee.refute;

// require Mongoose
var mongoose = require('mongoose');

// require Supertest
var request = require('supertest');

buster.testCase('routing', {
	setUp: function() {
		// start our server before each test
		var routingServer = require('../../../backend/page');
	},

	'general routing succeeds': {
		setUp: function() {

		},

		'root url': {
			setUp: function() {
				request(this.routingServer)
				.get('/')
				.set('konneka.org');
			}
		},

		'deeper url': {
			setUp: function() {

			}
		}
	},

	'passport handles authentication & authorization': {
		// set up passport
		setUp: function() {
			var passport = require('passport');
		},

		'passport logs me in': {
			// get our user model before each test
			setUp: function() {
				var UserModel = mongoose.model('User');
			}
		},

		'passport logs me out': {

		},

		'passport authorizes me': {

		}
	},

	'owner routes': {
		// get our owner model before each test
		setUp: function() {
			var OwnerModel = mongoose.model('Owner');
		}
	},

	'object routes': {
		// get our object model before each test
		setUp: function() {
			var ObjectModel = mongoose.model('Object');
		}
	},

	'testing routes can be tested': {

	}
});