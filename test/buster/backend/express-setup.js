// require Buster.js so our tests can run
var buster = require('buster');
// require & call express module & its function
var express = require('express');
var server = express();

// require all our middleware dependencies
var vhost = require('express-vhost');
var helmet = require('helmet');

// buster.testCase(''
// 	var konnekaServer = require('/backend/config/express.js');