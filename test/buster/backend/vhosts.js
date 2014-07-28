// test our virtual hosts

// require Buster.js so our tests can run
var buster = require('buster');// expose Buster's sub-methods so we don't have to specify the entire path each time

// expose Buster's assertion methods so we don't have tospecify the entire path each time
var assert = buster.referee.assert;
var refute = buster.referee.refute;

// require supertest so our tests can test HTTP easier
var request = require('supertest');

// define our test case
buster.testCase('vhosts', {
	setUp: function() {
		this.vhostServer = require('../../../backend/vhost.js');
	},

	// test what happens when navigating to the '*.owners.konneka' subdomain
	'owners submodule': {

		// setup function
		setUp: function() {

		},

		// test that we go to the correct location, '/owners/[owner-name]' in the main domain
		'owners route': function(done) {
			request(this.vhostServer)
				.get('http://owners.konneka.org/')
				.end(function(err, res) {
					console.log(res.headers.host);
					done();
				});
		}

	}
});