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

module.exports = router;