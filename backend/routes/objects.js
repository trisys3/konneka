'use strict';

// route definitions

// create express object & its router function
var express = require('express');
var router = express.Router();

// require the relevant controller
var objects = require('../controllers/objects');

// route for object actions
router.route('/owners/:owner/objects/:object').get(objects.main);

module.exports = router;