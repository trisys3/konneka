'use strict';

var patterns = require('../config/patterns').css;

var gulp = require('gulp');

var cssStreams = require('../streams/css');

gulp.task('csslint:dev', function() {
  return gulp.src(patterns.dev.src)
    .pipe(cssStreams.check())
    .pipe(gulp.dest(patterns.dev.dest));
});