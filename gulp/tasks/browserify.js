'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');

var patterns = require('../config/patterns');

gulp.task('browserify', function() {
  browserify({
    entries: patterns.browserify.build.src,
    debug: true,
    basedir: '../../',
    extensions: ['.coffee']
  })
  .transform(coffeeify())
  .bundle()
  .pipe(gulp.dest(patterns.browserify.build.dest));
});