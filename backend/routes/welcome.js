'use strict';

// route definitions
// create express object & its router function
var express = require('express');
var router = express.Router();

// route for welcome screen
router.route('/').get(function(req, res, next) {
	res.send('Main route');
	res.locals.owner = null;
	res.locals.object = null;
	res.locals.module = 'welcome';
	next();
});

module.exports = router;