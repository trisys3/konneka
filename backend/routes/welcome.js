'use strict';

// route definitions
// create express object & its router function
var express = require('express');
var router = express.Router();
var welcome = require('../controllers/welcome');

// route for welcome screen
router.route('/').get(welcome.main);

module.exports = router;