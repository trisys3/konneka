'use strict';

// route definitions
// create express object & its router function
var express = require('express');
var objects = require('../controllers/objects');
var router = express.Router();

// route for object actions
router.route('/owners/:owner/objects/:object').get(objects.main);

module.exports = router;