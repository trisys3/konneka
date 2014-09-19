'use strict';

// authentication route definitions
// create express object & its router function
var express = require('express');
var router = express.Router();

// require the relevant controller
var auth = require('../controllers/auth');

router.route('/auth/login').get(auth.login);

module.exports = router;