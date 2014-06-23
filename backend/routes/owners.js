// owners route
express = require('express');
owners = {};
owners.definition = express();
owners.domain = '*.konneka.org';

owners.definition.route('/').get(function(req, res) {
	owner = req.subdomains[0];
	res.redirect("http://konneka.org:3000/owners/" + owner);
});

module.exports = owners;