'use strict';

var patterns = require('../config/patterns');

var gulp = require('gulp');
var rename = require('gulp-rename');
var gutil = require('gulp-util');

var browserify = require('browserify');
var watchify = require('watchify');
var coffeeify = require('coffeeify');

var source = require('vinyl-source-stream');
var transform = require('vinyl-transform');

gulp.task('browserify', function() {
  return gulp.src(patterns.browserify.bundle.src, {base: './'})
  .pipe(transform(function(filename) {
    return browserify({
      // entries: filename,
      debug: true,
      basedir: './',
      // transform: ['coffeeify'],
      // extensions: ['.coffee']
    })
    // .pipe(gutil.log(filename))
    .add(filename)
    // .transform('coffeeify')
    .bundle();
  }))
  .pipe(rename(function(path) {
    path.dirname = '',
    path.basename = 'index',
    path.ext = '.js'
  }))
  // .pipe(source('index.js'))
  .pipe(gulp.dest(patterns.browserify.bundle.dest));
});