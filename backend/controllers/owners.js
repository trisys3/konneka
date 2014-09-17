'use strict';

// get functions from environment file(s)
var env = require('../env/' + (process.env.NODE_ENV || 'dev'));

exports.main = function(req, res, next) {
	res.send(req.params['owner'] + ' is an owner.');
	res.locals.owner = req.params['owner'];
	res.locals.object = null;
	res.locals.module = 'owner';
	res.locals.extScripts = env.getJs(res.locals.module);
	res.locals.extStyles = env.getCss(res.locals.module);
	next();
};