'use strict';

// route definitions
// create express object & its router function
var express = require('express');
var router = express.Router();
var owners = require('../controllers/owners');

// route for owner actions
router.route('/owners/:owner').get(owners.main);

module.exports = router;