'use strict';

var eslint = require('gulp-eslint');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var lazypipe = require('lazypipe');

exports.check = lazypipe()
    .pipe(eslint)
    .pipe(eslint.format);

exports.min = lazypipe()
  .pipe(uglify)
  .pipe(rename, function(path) {
    path.extname = '.min' + path.extname;
  });