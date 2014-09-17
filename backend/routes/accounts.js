'use strict';

// route definitions
// create express object & its router function
var express = require('express');
var router = express.Router();
var accounts = require('../controllers/accounts');

// route for owner accounts
router.route('/accounts/:owner').get(accounts.owner);

// route for object accounts
router.route('/accounts/:owner/:object').get(accounts.object);

module.exports = router;