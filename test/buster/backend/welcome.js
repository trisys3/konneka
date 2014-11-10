'use strict';

// test our welcome routes

// require buster & its various methods
var buster = require('buster');
var assert = buster.referee.assert;
var refute = buster.referee.refute;

// require supertest so we can test HTTP easier
var request = require('supertest');

buster.testCase('welcome', {
	setUp: function() {
		// define our testing server
		this.welcomeServer = require('../../../backend/page');
	}
});