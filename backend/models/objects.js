'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = require('./users');

var ObjectSchema = new Schema({

	// this object's owner's ID
	owner: {
		type: Number,
		ref: 'Owner',
		required: true
	},

	// the user associated with this object
	userProfile: {
		type: UserSchema,
		default: {}
	}
});

// get the owner of this object
ObjectSchema.methods.getOwner = function() {

	// find the owner with ID of this object's owner-id
	mongoose.model('Owner').findOne({
		_id: this.owner
	},

	// when we are done, return the owner & any errors
	function(err, owner) {
		done(err, owner.userProfile);
	});
}

mongoose.model('Object', ObjectSchema);