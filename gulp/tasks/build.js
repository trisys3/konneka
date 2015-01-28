'use strict';

var patterns = require('../config/patterns');

var coffeeStreams = require('../streams/coffee');
var preCssStreams = require('../streams/preCss');
var jsStreams = require('../streams/js');
var cssStreams = require('../streams/css');
var browserStreams = require('../streams/browserify');
var testStreams = require('../streams/tests');

var gulp = require('gulp');

gulp.task('jsCoffee', function() {
  return gulp.src(patterns.coffee.front.src)
    .pipe(coffeeStreams.check())
    .pipe(coffeeStreams.move())
    .pipe(jsStreams.check())
    .pipe(jsStreams.min())
    .pipe(gulp.dest(patterns.js.front.dest));
});

gulp.task('cssAll', function() {
  return gulp.src(patterns.preCss.stylus.src)
    .pipe(preCssStreams.stylus())
    .pipe(cssStreams.check())
    .pipe(cssStreams.move())
    .pipe(cssStreams.concat(patterns.css.outFile))
    .pipe(gulp.dest(patterns.css.concatFolder));
});