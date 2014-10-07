'use strict';

// get functions from environment file(s)
var env = require('../env/' + (process.env.NODE_ENV || 'dev'));

exports.qunit = function(req, res, next) {
	res.render('qunit');
};