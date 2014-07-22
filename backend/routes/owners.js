// route definitions
// create express object & its router function
express = require('express');
router = express.Router();

// route for owner actions
router.route('/owners/:owner').get(function(req, res, next) {
	res.send(req.params['owner'] + ' is an owner.');
	res.locals.owner = req.params['owner'];
	res.locals.object = null;
	res.locals.module = 'owner';
	next();
});

module.exports = router;