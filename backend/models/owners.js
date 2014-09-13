'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// schema for owner collection/table
var OwnerSchema = new Schema({

	// list of ID's of objects this owner also identifies as, if any
	objectIds: [{
		type: Number,
		ref: 'Object',
		default: null
	}],

	// the user this owner is associated with
	userProfile: {
		type: UserSchema,
		default: {}
	}
	
});

mongoose.model('Owner', OwnerSchema);