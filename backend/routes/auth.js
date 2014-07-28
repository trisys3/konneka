'use strict';

// authentication route definitions
// create express object & its router function
var express = require('express');
var router = express.Router();

// get functions from environment file(s)
var env = require('../env/' + (process.env.NODE_ENV || 'dev') + '.js');

module.exports = router;