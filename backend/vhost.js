// virtual hosts for Konneka website

express = require('express');
server = express();
vhost = require('express-vhost');

vhosts = {};

owners = require('./routes/owners');
objects = require('./routes/objects');

vhosts.objects = vhost('*.*.konneka.org', objects);
vhosts.owners = vhost('*.konneka.org', owners);

module.exports = exports = vhosts;
