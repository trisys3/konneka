'use strict';

// get functions from environment file(s)
var env = require('../env/' + (process.env.NODE_ENV || 'dev'));

exports.main = function(req, res, next) {
	res.locals.owner = null;
	res.locals.object = null;
	res.locals.module = 'welcome';
	env.getModularJs(res.locals.module).forEach(function(val, index) {
		res.locals.extScripts.push(val);
	});
	env.getModularCss(res.locals.module).forEach(function(val, index) {
		res.locals.extStyles.push(val);
	});
	res.render('welcome');
};