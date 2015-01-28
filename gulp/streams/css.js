'use strict';

var csslint = require('gulp-csslint');
var cssmin = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

var lazypipe = require('lazypipe');

exports.check = lazypipe()
  .pipe(csslint, '.csslintrc')
  .pipe(csslint.reporter);

exports.move = lazypipe()
  .pipe(sourcemaps.init, {loadMaps: true})
    .pipe(cssmin)
    .pipe(rename, function(path) {
      path.extname = '.min' + path.extname;
    })
  .pipe(sourcemaps.write);

exports.concat = function(outFile) {
  return lazypipe()
    .pipe(sourcemaps.init, {loadMaps: true})
      .pipe(concat, outFile, {newLine: ';'})
    .pipe(sourcemaps.write)();
};