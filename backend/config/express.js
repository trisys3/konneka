// express configuration
module.exports = function() {

	express = require('express');

	// middleware modules
	morgan = require('morgan');
	compress = require('compression');
	flash = require('connect-flash');
	helmet = require('helmet');
	bodyParser = require('body-parser');
	methodOverride = require('method-override');

	server = express();

	// // compression middleware
	// server.use(compress);

	// express options

	// view options
	server.set('views', './app/modules' + getModule() + '/views'); // the views folder is in the relevant module folder
	server.engine('swig', consolidate['swig']); // 
	server.set('view engine', 'swig'); // set swig as the default view engine
	// server.set('env', 'development'); // set the default environment as development

	// environment-specific configuration
	if(process.env.NODE_ENV === 'dev') { // for the "development" environment,
		// use express's logging middleware, "morgan"
		server.use(morgan('dev'));

		// disable caching of views
		server.disable('view cache');
	}
	else if(process.env.NODE_ENV === 'prod') { // for the "production" environment
		// enable caching, which is the default anyway
		server.enable('view cache');
	}

	// body-parsing middleware
	server.use(bodyParser.urlencoded()); // middleware for parsing urlencoded documents
	server.use(bodyParser.json()); // middleware for parsing JSON-encoded documents

	// HTTP method-overriding middleware
	server.use(methodOverride());

	// flash-messaging middleware
	server.use(flash());

	// helmet middleware for headers
	server.use(helmet.csp({ // Content Security Policy (CSP) headers
		'default-src': ['konneka.org', '*.konneka.org'], // only allows anything related to CSP from this domain
		'script-src': ['konneka.org', '*.konneka.org'], // only allows scripts from this domain
		'style-src': ['konneka.org', '*.konneka.org'], // only allows styles from this domain
		'img-src': ['konneka.org', '*.konneka.org'], // only allows images from this domain
		'connect-src': ['konneka.org', '*.konneka.org'], // only allows origins from this domain
		'font-src': ['konneka.org', '*.konneka.org'], // only allows scripts from this domain
		'object-src': ['konneka.org', '*.konneka.org'], // only allows plugins from this domain
		'media-src': ['konneka.org', '*.konneka.org'], // only allows audio & video from this domain
		'frame-src': ["'none'"], // does not allow frames inside webpages on this site
		'report-uri': ['/csp/report-violation'], // where reports will be sent to
		reportOnly: false, // generate errors as well as other reports
		setAllHeaders: false, // do not set all headers
		safari5: false // do not implement CSP on clients served via Safari 5
	}));
	server.use(helmet.xframe('deny')); // don't let content be put in frames or iframes
	server.use(helmet.iexss()); // X-XSS header for basic protection against XSS (Cross-Site-Scripting)
	server.use(helmet.ienoopen()); // does not let users of Internet Explorer open files from this site, only save them
	server.use(contentTypeOptions()); // does not let others sniff the X-Content-Type header
	server.disable('x-powered-by'); // hides the X-Powered-By header

	server.listen(3000);

}