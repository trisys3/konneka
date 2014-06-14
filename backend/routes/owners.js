// owners route
express = require('express');
owners = express();

owners.route('/').get(function(req, res) {
	res.redirect("http://konneka.org:3000/owners/:owner");
});

module.exports = owners;