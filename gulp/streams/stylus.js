'use strict';

var patterns = require('../config/patterns');

var gulp = require('gulp');
var stylus = require('gulp-stylus');
var nib = require('nib');
var sourcemaps = require('gulp-sourcemaps');
var prefixer = require('autoprefixer-stylus');

gulp.task('stylus', function() {
  return gulp.src(patterns.stylus.move.src)
    .pipe(stylus({
      linenos: true,
      use: [nib(), prefixer('last 2 versions')],
      sourcemap: 'comment'
    }))
});