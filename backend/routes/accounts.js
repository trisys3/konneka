'use strict';

// route definitions

// create express object & its router function
var express = require('express');
var router = express.Router();
var accounts = require('../controllers/accounts');

// route for owner accounts
router.route('/owners/:owner/account').get(accounts.owner);

// route for object accounts
router.route('/owners/:owner/objects/:object/account').get(accounts.object);

module.exports = router;