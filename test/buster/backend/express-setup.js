'use strict';

// test our functions that set up the Express environment

// require Buster.js so our tests can run
var buster = require('buster');

// expose Buster's sub-methods so we don't have to specify the entire path each time
var assert = buster.referee.assert;
var refute = buster.referee.refute;

// require supertest so our tests can test HTTP easier
var request = require('supertest');

// define our tests
buster.testCase('express setup', {
	setUp: function() {
		// start our server before each test
		this.konnekaServer = require('../../../backend/page');
	},

	// test helmet middleware to ensure it protects the headers adequately
	'helmet protects my headers': {

		// set up helmet middleware
		setUp: function() {
			
		},

		// test that helmet sets the correct CSP
		'helmet sets up my Content Security Policy': {

			// Default Source part of the CSP header
			'default-src': function(done) {
				request(this.konnekaServer)
					.get('/')
					.set('User-Agent', 'Mozilla/5.0')
					.end(function(err, res) {
						assert.match(res.get('content-security-policy'), 'default-src konneka.org:* *.konneka.org:*');
						done();
					});
			},

			// Script Source part of the CSP header
			'script-src': function(done) {
				request(this.konnekaServer)
					.get('/')
					.set('User-Agent', 'Mozilla/5.0')
					.end(function(err, res) {
						assert.match(res.get('content-security-policy'), 'script-src konneka.org:* *.konneka.org:*');
						done();
					});
			},

			// Style Source part of the CSP header
			'style-src': function(done) {
				request(this.konnekaServer)
					.get('/')
					.set('User-Agent', 'Mozilla/5.0')
					.end(function(err, res) {
						assert.match(res.get('content-security-policy'), 'style-src konneka.org:* *.konneka.org:*');
						done();
					});
			},

			// Image Source part of the CSP header
			'img-src': function(done) {
				request(this.konnekaServer)
					.get('/')
					.set('User-Agent', 'Mozilla/5.0')
					.end(function(err, res) {
						assert.match(res.get('content-security-policy'), 'img-src konneka.org:* *.konneka.org:*');
						done();
					});
			},

			// Connect Source part of the CSP header
			'connect-src': function(done) {
				request(this.konnekaServer)
					.get('/')
					.set('User-Agent', 'Mozilla/5.0')
					.end(function(err, res) {
						assert.match(res.get('content-security-policy'), 'connect-src konneka.org:* *.konneka.org:*');
						done();
					});
			},

			// Font Source part of the CSP header
			'font-src': function(done) {
				request(this.konnekaServer)
					.get('/')
					.set('User-Agent', 'Mozilla/5.0')
					.end(function(err, res) {
						assert.match(res.get('content-security-policy'), 'font-src konneka.org:* *.konneka.org:*');
						done();
					});
			},

			// Object Source part of the CSP header
			'object-src': function(done) {
				request(this.konnekaServer)
					.get('/')
					.set('User-Agent', 'Mozilla/5.0')
					.end(function(err, res) {
						assert.match(res.get('content-security-policy'), 'object-src konneka.org:* *.konneka.org:*');
						done();
					});
			},

			// Media Source part of the CSP header
			'media-src': function(done) {
				request(this.konnekaServer)
					.get('/')
					.set('User-Agent', 'Mozilla/5.0')
					.end(function(err, res) {
						assert.match(res.get('content-security-policy'), 'media-src konneka.org:* *.konneka.org:*');
						done();
					});
			},

			// CSP doesn't allow framing
			'framing': function(done) {
				request(this.konnekaServer)
					.get('/')
					.set('User-Agent', 'Mozilla/5.0')
					.end(function(err, res) {
						assert.match(res.get('content-security-policy'), 'frame-src \'none\'');
						done();
					});
			},

			// URI that any CSP violations should be reported to
			'CSP reporting URI': function(done) {
				request(this.konnekaServer)
				.get('/')
				.set('User-Agent', 'Mozilla/5.0')
				.end(function(err, res) {
					assert.match(res.get('content-security-policy'), 'report-uri /csp/report-violation');
					done();
				});
			},

			// check that the CSP headers are not set on Safari 5
			'// no CSP for Safari 5': function(done) {
				request(this.konnekaServer)
					.get('/')
					.set('User-Agent', 'Mozilla/5.0 (Windows; U; Windows NT 6.3; en-US) AppleWebKit/533.18.1 (KHTML, like Gecko) Version/5.0 Safari/533.16')
					.end(function(err, res) {
						refute(res.get('content-security-policy'));
						done();
					});
			}
		},

		// check that helmet denies frames
		'x-frame header denies all frames': function(done) {
			request(this.konnekaServer)
				.get('/')
				.set('User-Agent', 'Mozilla/5.0')
				.end(function(err, res) {
					assert.equals(res.get('x-frame-options'), 'DENY');
					done();
				});
		},

		// check that helmet will not let Internet Explorer browsers download HTML files in the context of this site
		'noopen header prevents IE download': function(done) {
			request(this.konnekaServer)
				.get('/')
				.set('User-Agent', 'Mozilla/5.0')
				.end(function(err, res) {
					assert.equals(res.get('x-download-options'), 'noopen');
					done();
				});
		},

		// check that helmet does not let browsers sniff MIME types
		'x-content-type-options prevents sniffing MIMEs': function(done) {
			request(this.konnekaServer)
				.get('/')
				.set('User-Agent', 'Mozilla/5.0')
				.end(function(err, res) {
					assert.equals(res.get('x-content-type-options'), 'nosniff');
					done();
				});
		},

		// test that helmet sets the correct X-XSS-Protection header for the correct browsers
		'helmet sets correct X-XSS-Protection header': {

			// in old versions of Internet Explorer
			'IE': function(done) {
				request(this.konnekaServer)
					.get('/')
					.set('User-Agent', 'Mozilla/5.0 (Windows; U; MSIE 7.0; Windows NT 6.0; en-US)')
					.end(function(err, res) {
						assert.equals(res.get('X-XSS-Protection'), '0');
						done();
					});
			},

			// in modern browsers
			'other browsers': function(done) {
				request(this.konnekaServer)
					.get('/')
					.set('User-Agent', 'Mozilla/5.0')
					.expect(200)
					.end(function(err, res) {
						assert.equals(res.get('X-XSS-Protection'), '1; mode=block');
						done();
					});
			}
		},

		// test that Express does not show the X-Powered-By header
		'no X-Powered-By header': function(done) {
			request(this.konnekaServer)
				.get('/')
				.set('User-Agent', 'Mozilla/5.0')
				.expect(200)
				.end(function(err, res) {
					refute(res.get('x-powered-by'));
					done();
				});
		}

	}


});
