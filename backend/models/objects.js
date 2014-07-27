'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ObjectSchema = new Schema({

	// this object's owner's ID
	owner: {
		type: Number,
		ref: 'Owner',
		required: true
	}
});

module.exports = ObjectSchema;