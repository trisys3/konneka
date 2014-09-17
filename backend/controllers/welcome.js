'use strict';

// get functions from environment file(s)
var env = require('../env/' + (process.env.NODE_ENV || 'dev'));

exports.main = function(req, res, next) {
	res.send('Main route');
	res.locals.owner = null;
	res.locals.object = null;
	res.locals.module = 'welcome';
	res.locals.extScripts = env.getJs(res.locals.module);
	res.locals.extStyles = env.getCss(res.locals.module);
	next();
};