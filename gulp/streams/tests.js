'use strict';

var karma = require('karma').server;
// var buster = require('gulp-busterjs');

var lazypipe = require('lazypipe');

var gutil = require('gulp-util');

exports.front = function(tests, exclude) {
  return karma.start({
    configFile: __dirname + '/../../test/karma/karma.config.js',
    autoWatch: false,
    singleRun: true,
    files: tests
  });
};

// exports.back = lazypipe()
//   .pipe(buster);