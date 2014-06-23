// objects route
express = require('express');
objects = {};
objects.definition = express();
objects.domain = '*.*.konneka.org';

objects.definition.route('/').get(function(req, res) {
	owner = req.subdomains[0];
	object = req.subdomains[1];
	res.redirect("http://konneka.org:3000/owners/" + owner + "/objects/" + object);
});

module.exports = objects;