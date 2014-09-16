'use strict';

// get functions from environment file(s)
var env = require('../env/' + (process.env.NODE_ENV || 'dev') + '.js');

exports.main = function(req, res, next) {
	res.send(req.params['owner'] + ' is the owner of ' + req.params['object'] + '.');
	res.locals.owner = req.params['owner'];
	res.locals.object = req.params['object'];
	res.locals.module = 'object';
	res.locals.extScripts = env.getJs();
	res.locals.extStyles = env.getCss();
	next();
};