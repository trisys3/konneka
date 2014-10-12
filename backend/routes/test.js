'use strict';

// testing route definitions

// create express object & its router function
var express = require('express');
var router = express.Router();

// require the relevant controller
var tests = require('../controllers/test.js');

module.exports = router;