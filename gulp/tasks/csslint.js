'use strict';

var patterns = require('../config/patterns');

var gulp = require('gulp');
var csslint = require('gulp-csslint');

gulp.task('csslint:dev', function() {
  return gulp.src(patterns.csslint.dev.src)
    .pipe(csslint('.csslintrc'))
    .pipe(csslint.reporter());
});