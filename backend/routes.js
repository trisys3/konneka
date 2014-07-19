// route definitions
express = require('express');
router = express.Router();

router.route('/owners/:owner/objects/:object').get(function(req, res, next) {
	res.send(req.params['owner'] + ' is the owner of ' + req.params['object'] + '.');
	router.locals.owner = req.params['owner'];
	router.locals.object = req.params['object'];
	next();
});

router.route('/owners/:owner').get(function(req, res, next) {
	res.send(req.params['owner'] + ' is an owner.');
	router.locals.owner = req.params['owner'];
	next();
});

router.route('/').get(function(req, res, next) {
	res.send('Main route');
	next();
});

module.exports = router;