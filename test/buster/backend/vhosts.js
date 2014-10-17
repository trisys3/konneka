// test our virtual hosts

// require Buster.js so our tests can run
var buster = require('buster');// expose Buster's sub-methods so we don't have to specify the entire path each time

// expose Buster's assertion methods so we don't have to specify the entire path each time
var assert = buster.referee.assert;
var refute = buster.referee.refute;

// require supertest so our tests can test HTTP easier
var request = require('supertest');

// define our test case
buster.testCase('vhosts', {
	setUp: function() {
		this.vhostServer = require('../../../backend/page.js');
	},

	// test what happens when navigating to the '*.konneka.org' subdomain
	'owners subdomain': {

		// test that, when we visit the owner's route ([owner].konneka.org), we are redirected to
		// the correct domain, 'konneka.org'
		'domain': function(done) {
			request(this.vhostServer)
				.get('/')
				.set('Host', 'owners.konneka.org')
				.end(function(err, res) {
					assert.match(res.header.location, /(http(s)?\:)?\/\/konneka.org/);
					done();
				});
		},

		// test that, when we visit the root path for the owner's route ([owner].konneka.org), we are
		// redirected to the correct path on the konneka.org domain, '/owners/[owner]/'
		'root path': function(done) {
			request(this.vhostServer)
				.get('/')
				.set('Host', 'owners.konneka.org')
				.end(function(err, res) {
					assert.match(res.header.location, /\/owners\/owners\/$/);
					done();
				});
		},

		// test that, when we visit a relatively deep path for the owner's route ([owner].konneka.org/[deep path]),
		// we are redirected to the correct path on the konneka.org domain, 'konneka.org/owners/[owner]/[deep path]'
		'deep path': function(done) {
			request(this.vhostServer)
				.get('/relatively/deep/path')
				.set('Host', 'owners.konneka.org')
				.end(function(err, res) {
					assert.match(res.header.location, /\/owners\/owners\/relatively\/deep\/path$/);
					done();
				});
		},

	},

	// test what happens when navigating to the *.*.konneka.org sub-subdomains
	'object subsubdomains': {

		// test that, when we visit the object's route ([object].[owner].konneka.org), we are redirected to
		// the correct domain, 'konneka.org'
		'domain': function(done) {
			request(this.vhostServer)
				.get('/')
				.set('Host', 'objects.owners.konneka.org')
				.end(function(err, res) {
					assert.match(res.header.location, /(http(s)?\:)?\/\/konneka.org/);
					done();
				});
		},

		// test that, when we visit the root path for the owner's route ([object].[owner].konneka.org),
		// we are redirected to the correct path on the konneka.org domain, '/owners/[owner]/objects/[object]'
		'root path': function(done) {
			request(this.vhostServer)
				.get('/')
				.set('Host', 'objects.owners.konneka.org')
				.end(function(err, res) {
					assert.match(res.header.location, /\/owners\/owners\/objects\/objects\/$/);
					done();
				});
		},

		// test that, when we visit a relatively deep path for the object's route ([object].[owner].konneka.org/[deep path]),
		// we are redirected to the correct path on the konneka.org domain, 'konneka.org/owners/[owner]/objects/[object]/[deep path]'
		'deep path': function(done) {
			request(this.vhostServer)
				.get('/relatively/deep/path')
				.set('Host', 'objects.owners.konneka.org')
				.end(function(err, res) {
					assert.match(res.header.location, /\/owners\/owners\/objects\/objects\/relatively\/deep\/path$/);
					done();
				});
		}

	}
});