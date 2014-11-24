'use strict';

var _ = require('lodash');

// get functions from environment file(s)
var env = require('../env/' + (process.env.NODE_ENV || 'dev'));

exports.main = function(req, res) {
	res.locals.owner = req.params['owner'];
	res.locals.object = req.params['object'];
	res.locals.module = ['objects'];
	res.locals.module.forEach(function(val) {
		res.locals.extScripts = _.union(res.locals.extScripts, env.getModularJs(val));
		res.locals.extStyles = _.union(res.locals.extStyles, env.getModularCss(val));
	});
	res.render('objects');
};