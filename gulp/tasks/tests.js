'use strict';

var patterns = require('../config/patterns').tests;

var testStreams = require('../streams/tests');

var gulp = require('gulp');

gulp.task('test:front', function() {
  return gulp.src(patterns.front.src)
    .pipe(testStreams())
});