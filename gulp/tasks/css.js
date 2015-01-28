'use strict';

var patterns = require('../config/patterns').css;

var gulp = require('gulp');

var cssStreams = require('../streams/css');

gulp.task('css:check', function() {
  return gulp.src(patterns.src)
    .pipe(cssStreams.check());
});

gulp.task('css:min', function() {
  return gulp.src(patterns.src)
    .pipe(cssStreams.move())
    .pipe(gulp.dest(patterns.dest));
});

gulp.task('css:concat', function() {
  return gulp.src(patterns.concatStart)
    .pipe(cssStreams.concat(patterns.outFile))
    .pipe(gulp.dest(patterns.concatFolder));
});