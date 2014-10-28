'use strict';

// test our models

// require buster & its assertion methods
var buster = require('buster');
var assert = buster.referee.assert;
var refute = buster.referee.refute;

// require Mongoose
var mongoose = require('mongoose');

buster.testCase('models', {
  'users': {
    setUp: function() {
      var UserModel = mongoose.model('User');
    }
  },

  'owners': {
    setUp: function() {
      var OwnerModel = mongoose.model('Owner');
    }
  },

  'objects': {
    setUp: function() {
      var ObjectModel = mongoose.model('Object');
    }
  },

  'groups': {
    setUp: function() {
      var GroupModel = mongoose.model('Group');
    }
  }
});
