'use strict';

var patterns = require('../config/patterns').test;

var testStreams = require('../streams/tests');

var gulp = require('gulp');

gulp.task('test:back', function() {
  return gulp.src('./test/lib/**.js')
    .pipe(testStreams.back());
});

gulp.task('test:front', function() {
  return testStreams.front(['./jasmine/**/*.js']);
});