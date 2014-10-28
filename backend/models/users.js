'use strict';

var mongoose = require('mongoose');
var GroupSchema = require('./groups.js');
var Schema = mongoose.Schema;
var crypto = require('crypto');

// schema for user collection/table
var UserSchema = new Schema({

	// space-separated list of prefix(es) of user, if any (Mr., Mme, etc.)
	prefix: {
		type: String,
		trim: true,
		default: ''
	},

	// first name of user
	firstName: {
		type: String,
		trim: true,
		default: ''
	},

	// middle name of user (can have more than 1)
	middleName: {
		type: String,
		trim: true,
		default: ''
	},

	// last name of user
	lastName: {
		type: String,
		trim: true,
		default: ''
	},

	// space-separated list of suffix(es) of user, if any (Sr., III, Phd, etc.)
	suffix: {
		type: String,
		trim: true,
		default: ''
	},

	// username of user
	username: {
		type: String,
		trim: true,
		default: '',
		unique: true,
		sparse: 1
	},

	// email of user
	email: {
		type: String,
		trim: true,
		default: null,
		match: [/[\w.%+-]+@[\w.]+\.[a-zA-Z]{2,4}/, 'Please fill in a valid email address']
	},

	// list of preferred names of user, if any
	preferredNames: {
		type: [String],
		default: []
	},

	// age of user
	age: {
		type: String,
		trim: true,
		default: '0'
	},

	// when the user was born (if living) or created (if robot, etc.)
	born: {
		type: Date,
		default: Date.now
	},

	// when the user died, if ever
	died: {
		type: Date,
		default: null
	},

	// password of user
	password: {
		type: String,
		default: null
	},

	// salt for user's password
	salt: {
		type: String
	},

	// description of user
	aboutMe: {
		type: String,
		trim: true,
		default: ''
	},

	// what the user is, i.e. human, computer, fridge, etc.
	whatIs: {
		type: String,
		trim: true,
		default: 'human'
	},

	// space-separated list of roles of user (user, admin, etc.)
	status: {
		type: String,
		trim: true,
		default: 'user'
	},

	// date this user was first inserted into database
	created: {
		type: Date,
		default: Date.now
	},

	// date this user was last updated in the database, if ever
	updated: {
		type: Date,
		default: null
	},

	// an array of the user's groups and, more importantly, their access levels
	groups: {
		type: [GroupSchema],
		default: []
	},

	// Unix-style read, write & execute privacy levels for self, groups without specified privacy level, & world
	privacy: {
		type: Number,
		default: 755
	},

	// temporary password
	tempPassword: {
		type: String,
		default: null
	},

	// temporary password expiration date/time
	tempPasswordExpires: {
		type: Date,
		default: null
	}
});

// pre-save hook to hash our new password
UserSchema.pre('save', function(next) {
	if(this.password) {
		this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
		this.password = this.hashPassword(this.password);
	}
	next();
});

// password-hashing function
UserSchema.methods.hashPassword = function(password) {
	if(this.salt && password) {
		return crypto.pbkdf2Sync(password, this.salt, 10000, 64).toString('base64');
	}
	else {
		return password;
	}
};

// authentication function
UserSchema.methods.authenticate = function(password) {
	if(this.password === this.hashPassword(password)) {
		return true;
	}
	else if(this.tempPassword === this.hashPassword(password) && this.tempPasswordExpires > Date.now) {
		return true;
	}
	else {
		return false;
	}
};

module.exports = exports = mongoose.model('User', UserSchema);
