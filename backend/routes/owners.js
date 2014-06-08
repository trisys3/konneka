// main route

// module.exports = function() {

	express = require('express');
	owners = express();

	owners.route('/').get(function(req, res) {
		res.send('whatever');
	});

	exports.owners = owners;

	// console.log(module.owners);

	// return owners;

	// owners.listen(3000);

// };