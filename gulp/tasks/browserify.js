'use strict';

var patterns = require('../config/patterns').browserify;

var browserStreams = require('../streams/browserify');

var gulp = require('gulp');
var source = require('vinyl-source-stream');

gulp.task('coffeeify:dev', function() {
  return browserStreams.coffeeify(patterns.coffee.inFile, patterns.bundle.outFile)
    .pipe(gulp.dest(patterns.dev.dest))
});

gulp.task('browserify:dev', function() {
  return browserStreams.browserify(patterns.js.inFile, patterns.bundle.outFile)
    .pipe(gulp.dest(patterns.dev.dest));
});

gulp.task('coffeeify:prod', function() {
  return browserStreams.coffeeify(patterns.coffee.inFile, patterns.bundle.outFile)
    .pipe(gulp.dest(patterns.prod.dest))
});

gulp.task('browserify:prod', function() {
  return browserStreams.browserify(patterns.js.inFile, patterns.bundle.outFile)
    .pipe(gulp.dest(patterns.prod.dest));
});