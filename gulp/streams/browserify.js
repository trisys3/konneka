'use strict';

var patterns = require('../config/patterns');

var gulp = require('gulp');
var rename = require('gulp-rename');
var gutil = require('gulp-util');

var browserify = require('browserify');
var watchify = require('watchify');
var coffeeify = require('coffeeify');
var browserCss = require('browserify-css');

var source = require('vinyl-source-stream');
var transform = require('vinyl-transform');

exports.coffeeify = function(inFile, outFile) {
  // return gulp.src(patterns.coffeeify.bundle.src, {base: './'})
  // .pipe(transform(function(filename) {
  return browserify({
    // entries: inFile,
    debug: true,
    basedir: './',
    // transform: ['coffeeify'],
    extensions: ['.coffee']
  })
  // .pipe(gutil.log(filename))
  .add(inFile)
  .transform(coffeeify, {
    autoInject: false
  })
  .transform(browserCss)
  .bundle()
  .pipe(source(outFile));
  // }))
  // .pipe(rename(function(path) {
  //   path.dirname = '',
  //   path.basename = 'index',
  //   path.ext = '.js'
  // }))
};

exports.browserify = function(inFile, outFile) {
  return browserify({
    debug: true,
    basedir: './'
  })
  .add(inFile)
  .bundle()
  .pipe(source(outFile));
};