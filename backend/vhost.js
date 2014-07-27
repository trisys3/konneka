'use strict';

// virtual hosts for subdomains on Konneka website

var express = require('express');
var vhosts = express.Router();
var owners = express.Router();
var objects = express.Router();

var vhost = require('vhost');

owners.route('/').get(function(req, res, next) {
	var owner = req.subdomains[0];
	res.redirect("http://konneka.org:3000/owners/" + owner);
	next();
});

module.exports.owners = owners;

objects.route('/').get(function(req, res, next) {
	var owner = req.subdomains[0];
	var object = req.subdomains[1];
	res.redirect("http://konneka.org:3000/owners/" + owner + "/objects/" + object);
	next();
});

module.exports.objects = objects;

vhosts.use(vhost('*.konneka.org', owners));

vhosts.use(vhost('*.*.konneka.org', objects));

module.exports.all = vhosts;
