'use strict';

// route definitions
// create express object & its router function
var express = require('express');
var router = express.Router();

// get functions from environment file(s)
var env = require('../env/' + (process.env.NODE_ENV || 'dev') + '.js');

// route for object actions
router.route('/owners/:owner/objects/:object').get(function(req, res, next) {
	res.send(req.params['owner'] + ' is the owner of ' + req.params['object'] + '.');
	res.locals.owner = req.params['owner'];
	res.locals.object = req.params['object'];
	res.locals.module = 'object';
	res.locals.extScripts = env.getJs(res.locals.module);
	res.locals.extStyles = env.getCss(res.locals.module);
	next();
});

module.exports = router;