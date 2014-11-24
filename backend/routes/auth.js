'use strict';

// authentication route definitions

// create express object & its router function
var express = require('express');
var router = express.Router();

// require the relevant controller
var auth = require('../controllers/auth');

// signup routes
router.route('/signup').get(auth.signupPage)
											 .post(auth.signup);

// login routes
router.route('/login').get(auth.loginPage)
											.post(auth.login);

// logout routes
router.route('/logout').get(auth.logout)
											 .post(auth.logout);

module.exports = router;
