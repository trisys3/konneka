'use strict';

var coffee = require('gulp-coffee');
var coffeelint = require('gulp-coffeelint');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');

var lazypipe = require('lazypipe');

exports.check = lazypipe()
    .pipe(coffeelint)
    .pipe(coffeelint.reporter)
    .pipe(coffeelint.reporter, 'fail');

exports.move = lazypipe()
  .pipe(sourcemaps.init)
    .pipe(coffee)
    .pipe(rename, function(path) {
      path.dirname = path.dirname.replace(/(\/|\\|^)coffee(\/|\\|$)/g, '/js/')
    })
  .pipe(sourcemaps.write);

exports.back = lazypipe()
  .pipe(coffeelint)
  .pipe(coffeelint.reporter)
  .pipe(coffeelint.reporter, 'fail');