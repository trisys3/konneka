// objects route
express = require('express');
objects = express();

objects.route('/').get(function(req, res) {
	res.redirect("http://konneka.org:3000/owners/" + owner + "/objects/" + object);
});

module.exports = objects;