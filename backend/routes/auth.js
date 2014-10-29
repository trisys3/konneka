'use strict';

// authentication route definitions

// create express object & its router function
var express = require('express');
var router = express.Router();

// require the relevant controller
var auth = require('../controllers/auth');

router.route('/signup').get(auth.signupPage)
											 .put(auth.signup)
											 .post(auth.signup);

router.route('/login').get(auth.loginPage)
											.post(auth.login);

router.route('/logout').get(auth.logout)
											 .post(auth.logout);

module.exports = router;
