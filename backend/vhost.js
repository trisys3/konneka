// virtual hosts for Konneka website

express = require('express');
servers = express();
vhost = require('vhost');
glob = require('glob');
path = require('path');
_ = require('lodash');

// define vhost middleware
vhosts = {};

_.forEach(glob.sync(__dirname + '/routes/*.js'), function(file) {
	base = path.basename(file, '.js');
	vhosts[base] = require(path.resolve(__dirname, file));
	servers.use(vhost(vhosts[base]["domain"], vhosts[base]["definition"]));
	if(vhosts[base]["domainAlter"]) {
		_.forOwn(vhosts[base]["domainAlter"], function(alterDomain) {
			servers.use(vhost(alterDomain, vhosts[base]["definition"]));
		});
	}
});

module.exports = exports = servers;
