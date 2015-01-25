'use strict';

var patterns = require('../config/patterns');

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var scss = require('gulp-sass');
var rename = require('gulp-rename');
var prefixer = require('gulp-autoprefixer');

gulp.task('scss:move', function() {
  return gulp.src(patterns.scss.move.src, {base: './'})
    .pipe(sourcemaps.init({debug: true}))
      .pipe(scss())
      .pipe(prefixer())
      .pipe(rename(function(path) {
        path.dirname = path.dirname.replace(/(\/|\\|^)(scss|sass)(\/|\\|$)/g, "/css/");
      }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(patterns.scss.move.dest))
});