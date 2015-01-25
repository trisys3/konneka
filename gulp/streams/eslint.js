'use strict';

var patterns = require('../config/patterns');

var gulp = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('eslint:browDev', function() {
  return gulp.src(patterns.eslint.browDev.src)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError())
});