'use strict';

var patterns = require('../config/patterns');

var gulp = require('gulp');
var gutil = require('gulp-util');
var coffee = require('gulp-coffee');
var coffeelint = require('gulp-coffeelint');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');

gulp.task('coffee:check', function() {
  return gulp.src(patterns.coffee.check.src)
    .pipe(coffeelint())
    .pipe(coffeelint.reporter())
    .pipe(coffeelint.reporter('fail'))
});

gulp.task('coffee:move', function() {
  return gulp.src(patterns.coffee.move.src, {base: './'})
    .pipe(sourcemaps.init())
      .pipe(coffee())
      .pipe(rename(function(path) {
        path.dirname = path.dirname.replace(/(\/|\\|^)coffee(\/|\\|$)/g, '/js/')
      }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(patterns.coffee.move.dest));
});