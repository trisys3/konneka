'use strict';

// route definitions
// create express object & its router function
var express = require('express');
var router = express.Router();

// get functions from environment file(s)
var env = require('../env/' + (process.env.NODE_ENV || 'dev') + '.js');

// route for welcome screen
router.route('/').get(function(req, res, next) {
	res.send('Main route');
	res.locals.owner = null;
	res.locals.object = null;
	res.locals.module = 'welcome';
	res.locals.extScripts = env.getJs(res.locals.module);
	res.locals.extStyles = env.getCss(res.locals.module);
	next();
});

module.exports = router;