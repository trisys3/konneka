'use strict';

var patterns = require('../config/patterns').cache;

var gulp = require('gulp');
var cache = require('gulp-cache');

gulp.task('deleteCache', function() {
  return cache.clearAll();
});