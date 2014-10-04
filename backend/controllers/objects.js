'use strict';

// get functions from environment file(s)
var env = require('../env/' + (process.env.NODE_ENV || 'dev'));

exports.main = function(req, res, next) {
	res.locals.owner = req.params['owner'];
	res.locals.object = req.params['object'];
	res.locals.module = ['objects'];
	res.locals.module.forEach(function(val, index) {
		env.getModularJs(res.locals.module).forEach(function(v, i) {
			res.locals.extScripts.push(v);
		});
		env.getModularCss(res.locals.module).forEach(function(v, i) {
			res.locals.extStyles.push(v);
		});
	});
	env.getModularJs('main').forEach(function(val, index) {
		res.locals.extScripts.push(val);
	});
	env.getModularCss('main').forEach(function(val, index) {
		res.locals.extStyles.push(val);
	});
	res.render('objects');
};