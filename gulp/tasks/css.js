'use strict';

var patterns = require('../config/patterns').css;

var gulp = require('gulp');

var cssStreams = require('../streams/css');

gulp.task('css:check', function() {
  return gulp.src(patterns.dev.src)
    .pipe(cssStreams.check())
    .pipe(gulp.dest(patterns.dev.dest));
});

gulp.task('css:min', function() {
  return gulp.src(patterns.dev.src)
    .pipe(cssStreams.move())
    .pipe(gulp.dest(patterns.dev.dest));
});