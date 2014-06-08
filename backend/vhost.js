// virtual hosts for Konneka website

express = require('express');
server = express();

owners = require('./routes/owners').owners;

console.log(owners.toString());

vhost = require('vhost');

server.use(vhost('*.konneka.org', owners));

server.listen(3000);
