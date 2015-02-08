'use strict';

var patterns = require('../config/patterns').preCss;

var preCssStreams = require('../streams/preCss');

var gulp = require('gulp');

// gulp.task('scss:move', function() {
//   return gulp.src(patterns.scss.src, {base: './'})
//     .pipe(preCssStreams.scss())
//     .pipe(gulp.dest(patterns.scss.dest));
// });

gulp.task('stylus:move', function() {
  return gulp.src(patterns.stylus.src, {base: './'})
    .pipe(preCssStreams.stylus())
    .pipe(gulp.dest(patterns.stylus.dest));
});