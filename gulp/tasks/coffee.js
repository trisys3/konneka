'use strict';

var patterns = require('../config/patterns').coffee;

var coffeeStreams = require('../streams/coffee');

var gulp = require('gulp');

gulp.task('coffee:check', function() {
  return gulp.src(patterns.front.src)
    .pipe(coffeeStreams.check());
});

gulp.task('coffee:move', function() {
  return gulp.src(patterns.front.src, {base: './'})
    .pipe(coffeeStreams.move())
    .pipe(gulp.dest(patterns.front.dest));
});