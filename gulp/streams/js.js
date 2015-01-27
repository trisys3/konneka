'use strict';

var eslint = require('gulp-eslint');
var uglify = require('gulp-uglify');

var lazypipe = require('lazypipe');

exports.check = lazypipe()
    .pipe(eslint)
    .pipe(eslint.format);

exports.min = lazypipe()
  .pipe(uglify)