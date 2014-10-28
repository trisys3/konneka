'use strict';

// express configuration

var path = require('path');
var glob = require('glob');
var fs = require('fs');

var express = require('express'); // express module
var _ = require('lodash');

var consolidate = require('consolidate'); // consolidation module

// middleware modules
var morgan = require('morgan'); // morgan logging middleware
var compress = require('compression'); // compression middleware
var helmet = require('helmet'); // helmet middleware for HTTP header configuration
var vhost = require('vhost'); // virtual hosting middleware
var bodyParser = require('body-parser'); // body-parsing middleware
var cookieParser = require('cookie-parser'); // cookie-parsing middleware
var methodOverride = require('method-override'); // HTTP method-overriding middleware

var environ = require('./env/' + (process.env.NODE_ENV || 'dev')); // get more variables/functions based on the environment
var touch_env = false; // set variable indicating whether we are on a touchscreen to false initially
// if we are in a touch environment, set it to true
if(process.env.TOUCH) {
	touch_env = true;
}

var mongoose = require('mongoose'); // ORM module
var session = require('express-session'); // session-configuring software
var mongoStore = require('connect-mongo')(session); // session storage in our MongoDB database
var passport = require('passport');

var server = express(); // call express function

// require the model files
var model_path = __dirname + '/models/';
fs.readdirSync(model_path).forEach(function(model) {
	require(model_path + model);
});

// local server variables
server.use(function(req, res, next) {
	res.locals.url = req.protocol + '://' + req.hostname + (req.url || '/');
	res.locals.extScripts = environ.getJs();
	res.locals.extStyles = environ.getCss();
	environ.getModularJs('main').forEach(function(val, index) {
		res.locals.extScripts.push(val);
	});
	environ.getModularCss('main').forEach(function(val, index) {
		res.locals.extStyles.push(val);
	});
	next();
});

// compression middleware
server.use(compress({
	filter: function(req, res) {
		return (/json|text|javascript|css/).test(res.getHeader('Content-Type'));
	},
	level: 9
}));

// view options
server.set('views', __dirname + '/view-bases'); // set the views folder to the relevant module folder
server.engine('html', consolidate['dust']); // use "dust" view engines with the ".html" extension
server.set('view engine', 'html'); // set dust (extension ".html") as the default view engine

// environment-specific configuration
if(process.env.NODE_ENV === 'dev') { // for the "development" environment,
	// use express's logging middleware, "morgan"
	server.use(morgan('dev'));

	// disable caching of views
	server.disable('view cache');

	// show errors onscreen
	server.enable('showStackError');
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

// enable JSONP
server.enable('jsonp callback');

server.use(cookieParser()); // cookie-parsing middleware

// create the database object
var monServer = mongoose.connect(environ.dbUrl);

// create a client-server session, using a MongoDB collection/table to store its info
server.use(session({
	resave: true,
	saveUninitialized: true,
	secret: environ.sessionSecret,
	store: new mongoStore({
		mongoose_connection: monServer.connections[0], // specify the database these sessions will be saved into
		auto_reconnect: true
	})
}));

// initialize passport & have it use the current session
server.use(passport.initialize());
server.use(passport.session());

// helmet middleware for headers
server.use(helmet.csp({ // Content Security Policy (CSP) headers
	defaultSrc: ['konneka.org:*', '*.konneka.org:*'], // only allows anything related to CSP from this domain
	scriptSrc: ['konneka.org:*', '*.konneka.org:*'], // only allows scripts from this domain
	styleSrc: ['konneka.org:*', '*.konneka.org:*'], // only allows styles from this domain
	imgSrc: ['konneka.org:*', '*.konneka.org:*'], // only allows images from this domain
	connectSrc: ['konneka.org:*', '*.konneka.org:*'], // only allows origins from this domain
	fontSrc: ['konneka.org:*', '*.konneka.org:*'], // only allows fonts from this domain
	objectSrc: ['konneka.org:*', '*.konneka.org:*'], // only allows plugins from this domain
	mediaSrc: ['konneka.org:*', '*.konneka.org:*'], // only allows audio & video from this domain
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

server.use(express.static('../' + environ.views));

// virtual hosts
var vhosts = require('./vhost');
server.use(vhosts.all);

// require the routing files
var route_path = __dirname + '/routes/';
fs.readdirSync(route_path).forEach(function(route) {
	server.use(vhost('konneka.org', require(route_path + route)));
});

var signinoutup = require('./signinoutup/passport'); // our passport configuration

signinoutup();

// listen on port related to environment variable
server.listen(process.env.SERVER_PORT || 3000);

module.exports = server;
