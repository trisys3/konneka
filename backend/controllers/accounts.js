'use strict';

// get functions from environment file(s)
var env = require('../env/' + (process.env.NODE_ENV || 'dev'));

exports.owner = function(req, res, next) {
	res.locals.owner = req.params['owner'];
	res.locals.object = null;
	res.locals.module = 'account';
	res.locals.extScripts = env.getJs(res.locals.module);
	res.locals.extStyles = env.getCss(res.locals.module);
	next();
};

exports.object = function(req, res, next) {
	res.locals.owner = req.params['owner'];
	res.locals.object = req.params['object'];
	res.locals.module = 'account';
	res.locals.extScripts = env.getJs(res.locals.module);
	res.locals.extStyles = env.getCss(res.locals.module);
	next();
};