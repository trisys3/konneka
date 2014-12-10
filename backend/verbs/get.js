'use strict';

// ending actions for GET requests

// get extra module(s)
var _ = require('lodash');

// get environment-specific configurations
var env = require('../env/' + (process.env.NODE_ENV || 'dev'));

module.exports = function(req, res) {
  res.locals.extScripts = _.union(res.locals.extScripts, env.getModularJs(res.locals.module));
  res.locals.extStyles = _.union(res.locals.extStyles, env.getModularCss(res.locals.module));
  res.render('layout');
};