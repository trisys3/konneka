'use strict';

var patterns = require('../config/patterns');

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var cache = require('gulp-cache');

gulp.task('jshint:dev', function() {
  return gulp.src(patterns.jshint.dev.src)
    .pipe(jshint('.jshintrc'), {
      cacheFile: new cache.Cache({cacheDirName: '.cache'}),
      name: 'js'
    })
    .pipe(jshint.reporter('jshint-stylish', {verbose: true}));
});

gulp.task('jshint:prod', function() {
  return gulp.src(patterns.jshint.prod.src)
    .pipe(cache(jshint()))
    .pipe(jshint.reporter('jshint-stylish', {verbose: true}));
});

gulp.task('jshint:node', function() {
  return gulp.src(patterns.jshint.node.src)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish', {verbose: true}));
});