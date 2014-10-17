'use strict';

// get functions from environment file(s)
var env = require('../env/' + (process.env.NODE_ENV || 'dev'));

exports.qunit = function(req, res, next) {
	res.locals.testFram = 'qunit';
	res.locals.testEnv = 'direc';
	res.locals.extScripts.push('../app/min-libs/qunit/qunit/qunit.js');
	res.locals.extScripts.push(env.getModularJs(res.locals.testFram, res.locals.testEnv, 'test.js'));
	res.locals.extStyles.push('../app/min-libs/qunit/qunit/qunit.css');
	res.render('qunit');
};