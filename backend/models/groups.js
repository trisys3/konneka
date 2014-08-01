'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// schema for table of owner/object groups
var GroupSchema = new Schema({

	// name of group
	name: {
		type: String,
		trim: true,
		default: ''
	},

	// list of aliases for the group
	preferredNames: {
		type: Schema.Types.Mixed,
		default: undefined
	},

	// user-defined description of group
	description: {
		type: String,
		trim: true,
		default: ''
	},

	// list of members, where each member is a row in the database
	members: {
		type: [Schema],
		default: []
	},

	// Unix-style privacy level for "group"
	privacy: {
		type: Number,
		default: null
	}

});

mongoose.model('Group', GroupSchema);