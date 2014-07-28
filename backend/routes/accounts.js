'use strict';

// route definitions
// create express object & its router function
var express = require('express');
var router = express.Router();

// get functions from environment file(s)
var env = require('../env/' + (process.env.NODE_ENV || 'dev') + '.js');

// route for object accounts
router.route('/accounts/:owner/:object').get(function(req, res, next) {
	res.locals.owner = req.params['owner'];
	res.locals.object = req.params['object'];
	res.locals.module = 'account';
	res.locals.extScripts = env.getJs(res.locals.module);
	res.locals.extStyles = env.getCss(res.locals.module);
	next();
});

// route for owner accounts
router.route('/accounts/:owner').get(function(req, res, next) {
	res.locals.owner = req.params['owner'];
	res.locals.object = null;
	res.locals.module = 'account';
	res.locals.extScripts = env.getJs(res.locals.module);
	res.locals.extStyles = env.getCss(res.locals.module);
	next();
});

module.exports = router;