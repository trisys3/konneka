// express configuration

path = require('path');
glob = require('glob');

express = require('express'); // express module
_ = require('lodash');

consolidate = require('consolidate'); // consolidation module

// middleware modules
morgan = require('morgan'); // morgan logging middleware
compress = require('compression'); // compression middleware
flash = require('connect-flash'); // flash middleware
helmet = require('helmet'); // helmet middleware for HTTP header configuration
vhost = require('vhost');
bodyParser = require('body-parser'); // body-parsing middleware
methodOverride = require('method-override'); // HTTP method-overriding middleware

environ = require('./env/' + (process.env.NODE_ENV || 'dev') + '.js'); // get more variables/functions based on the environment

server = express(); // call express function

// // local server variables
// server.use(function(req, res, next) {
// 	res.locals.url = req.protocol + '://' + req.host + req.url;
// 	next();
// });

// compression middleware
server.use(compress({
	filter: function(req, res) {
		return (/json|text|javascript|css/).test(res.getHeader('Content-Type'));
	},
	level: 9
}));

// view options
// server.set('views', './app/modules/' + getModule() + '/views'); // set the views folder to the relevant module folder
server.engine('swig', consolidate['swig']); // use "swig" engines with the ".swig" extension
server.set('view engine', 'swig'); // set swig as the default view engine

// environment-specific configuration
if(process.env.NODE_ENV === 'dev') { // for the "development" environment,
	// use express's logging middleware, "morgan"
	server.use(morgan('dev'));

	// disable caching of views
	server.disable('view cache');

	// show errors onscreen
	server.enable('showStackError');
}
else if(process.env.NODE_ENV === 'prod') { // for the "production" environment
	// enable caching, which is the default anyway
	server.enable('view cache');
}
else if(process.env.NODE_ENV === 'test') { // for the "test" environment
	// use express's logging middleware, "morgan"
	server.use(morgan('dev'));

	// enable caching of views
	server.enable('view cache');

	// show errors onscreen
	server.enable('showStackError');
}

// body-parsing middleware
server.use(bodyParser.urlencoded({extended: true})); // middleware for parsing urlencoded documents
server.use(bodyParser.json()); // middleware for parsing JSON-encoded documents

// HTTP method-overriding middleware
server.use(methodOverride());

// flash-messaging middleware
server.use(flash());

// helmet middleware for headers
server.use(helmet.csp({ // Content Security Policy (CSP) headers
	defaultSrc: ['konneka.org', '*.konneka.org'], // only allows anything related to CSP from this domain
	scriptSrc: ['konneka.org', '*.konneka.org'], // only allows scripts from this domain
	styleSrc: ['konneka.org', '*.konneka.org'], // only allows styles from this domain
	imgSrc: ['konneka.org', '*.konneka.org'], // only allows images from this domain
	connectSrc: ['konneka.org', '*.konneka.org'], // only allows origins from this domain
	fontSrc: ['konneka.org', '*.konneka.org'], // only allows scripts from this domain
	objectSrc: ['konneka.org', '*.konneka.org'], // only allows plugins from this domain
	mediaSrc: ['konneka.org', '*.konneka.org'], // only allows audio & video from this domain
	frameSrc: ['\'none\''], // does not allow frames inside webpages on this site
	reportUri: ['/csp/report-violation'], // where reports will be sent to
	reportOnly: false, // generate errors as well as other reports
	setAllHeaders: true, // do not set all headers
	safari5: false // do not implement CSP on clients served via Safari 5
}));
server.use(helmet.xframe('deny')); // don't let content be put in frames or iframes
server.use(helmet.xssFilter()); // X-XSS-Protection header for basic protection against XSS (Cross-Site-Scripting)
server.use(helmet.ienoopen()); // does not let users of Internet Explorer open files from this site, only save them
server.use(helmet.nosniff()); // does not let others sniff the X-Content-Type header
server.disable('x-powered-by'); // hides the X-Powered-By header

// virtual hosts
vhosts = require('./vhost.js');
server.use(vhosts.all);

// require the routing files
glob(__dirname + '/routes/*.js', function(err, files) {
	_.each(files, function(file) {
		server.use(require(file));
	});
});

// listen on port related to environment variable
server.listen(environ.port || 3000);

module.exports = server;