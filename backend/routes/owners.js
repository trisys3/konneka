'use strict';

// route definitions
// create express object & its router function
var express = require('express');
var router = express.Router();

// get functions from environment file(s)
var env = require('../env/' + (process.env.NODE_ENV || 'dev') + '.js');

// route for owner actions
router.route('/owners/:owner').get(function(req, res, next) {
	res.send(req.params['owner'] + ' is an owner.');
	res.locals.owner = req.params['owner'];
	res.locals.object = null;
	res.locals.module = 'owner';
	res.locals.extScripts = env.getJs(res.locals.module);
	res.locals.extStyles = env.getCss(res.locals.module);
	next();
});

module.exports = router;