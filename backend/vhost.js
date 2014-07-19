// virtual hosts for subdomains on Konneka website

express = require('express');
vhosts = express();
owners = express();
objects = express();

vhost = require('vhost');

owners.route('/').get(function(req, res, next) {
	owner = req.subdomains[0];
	res.redirect("http://konneka.org:3000/owners/" + owner);
	next();
});

objects.route('/').get(function(req, res, next) {
	owner = req.subdomains[0];
	object = req.subdomains[1];
	res.redirect("http://konneka.org:3000/owners/" + owner + "/objects/" + object);
	next();
});

vhosts.use(vhost('*.konneka.org', owners));

vhosts.use(vhost('*.*.konneka.org', objects));

module.exports = vhosts;
