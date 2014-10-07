'use strict';

// get functions from environment file(s)
var env = require('../env/' + (process.env.NODE_ENV || 'dev'));

exports.main = function(req, res, next) {
	res.locals.owner = req.params['owner'];
	res.locals.object = null;
	res.locals.module = ['owners'];
	res.locals.module.forEach(function(val, index) {
		env.getModularJs(res.locals.module).forEach(function(v, i) {
			res.locals.extScripts.push(v);
		});
		env.getModularCss(res.locals.module).forEach(function(v, i) {
			res.locals.extStyles.push(v);
		});
	});
	res.render('owners');
};