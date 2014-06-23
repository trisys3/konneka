// main route, encompasses entire site
express = require('express');
main = {};
main.definition = express();
main.domain = 'konneka.org';
main.domainAlter = ['www.konneka.org'];

main.definition.route('/owners/:owner/objects/:object').get(function(req, res) {
	res.send(req.param('owner') + ' is the owner of ' + req.param('object') + '.');
});

main.definition.route('/owners/:owner').get(function(req, res) {
	res.send(req.param('owner') + ' is an owner.');
});

main.definition.route('/').get(function(req, res) {
	res.send('Main route');
});

module.exports = main;