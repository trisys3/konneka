'use strict';

var patterns = require('../config/patterns').js;

var jsStreams = require('../streams/js');

var gulp = require('gulp');
var rename = require('gulp-rename');

gulp.task('js:check', function() {
  gulp.src(patterns.front.src)
    .pipe(jsStreams.check());
});

gulp.task('js:min', function() {
  gulp.src(patterns.front.src, {base: './'})
    .pipe(jsStreams.min())
    .pipe(rename(function(path) {
      path.extname = '.min' + path.extname;
    }))
    .pipe(gulp.dest(patterns.front.dest));
});