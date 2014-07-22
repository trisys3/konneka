// route definitions
// create express object & its router function
express = require('express');
router = express.Router();

// route for object actions
router.route('/owners/:owner/objects/:object').get(function(req, res, next) {
	res.send(req.params['owner'] + ' is the owner of ' + req.params['object'] + '.');
	res.locals.owner = req.params['owner'];
	res.locals.object = req.params['object'];
	res.locals.module = 'object';
	next();
});

// route for owner without an object
router.route('/owners/:owner').get(function(req, res, next) {
	res.send(req.params['owner'] + ' is an owner.');
	res.locals.owner = req.params['owner'];
	res.locals.object = null;
	res.locals.module = 'owner';
	next();
});

// route for object accounts
router.route('/accounts/:owner/:object').get(function(req, res, next) {
	res.locals.owner = req.params['owner'];
	res.locals.object = req.params['object'];
	res.locals.module = 'account';
	next();
});

// route for owner accounts
router.route('/accounts/:owner').get(function(req, res, next) {
	res.locals.owner = req.params['owner'];
	res.locals.object = null;
	res.locals.module = 'account';
	next();
});

// route for welcome screen
router.route('/').get(function(req, res, next) {
	res.send('Main route');
	res.locals.owner = null;
	res.locals.object = null;
	res.locals.module = 'welcome';
	next();
});

module.exports = router;