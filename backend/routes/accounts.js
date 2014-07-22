// route definitions
// create express object & its router function
express = require('express');
router = express.Router();

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

module.exports = router;