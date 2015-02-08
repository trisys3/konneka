'use strict';

var sourcemaps = require('gulp-sourcemaps');
// var scss = require('gulp-sass');
var stylus = require('gulp-stylus');
var nib = require('nib');
var rename = require('gulp-rename');
// var prefixer = require('autoprefixer-stylus');
var prefixer = require('gulp-autoprefixer');

var lazypipe = require('lazypipe');

// exports.scss = lazypipe()
//   .pipe(sourcemaps.init, {debug: true})
//     .pipe(scss)
//     .pipe(prefixer)
//     .pipe(rename, function(path) {
//       path.dirname = path.dirname.replace(/(\/|\\|^)(scss|sass)(\/|\\|$)/g, "/css/");
//     })
//   .pipe(sourcemaps.write);

exports.stylus = lazypipe()
  .pipe(sourcemaps.init, {debug: true, loadMaps: true})
    .pipe(stylus, {
      linenos: true,
      use: [nib()]
      // sourcemap: 'comment'
    })
    .pipe(prefixer)
    .pipe(rename, function(path) {
      path.dirname = path.dirname.replace(/(\/|\\|^)(stylus)(\/|\\|$)/g, "/css/");
    })
  .pipe(sourcemaps.write);

// exports.stylus = lazypipe()
//   // .pipe(sourcemaps.init, {debug: true})
//     .pipe(stylus, {
//       linenos: true,
//       use: [nib(), prefixer({browsers: ['last 2 versions']})]
//       // sourcemap: 'comment'
//     })
//     .pipe(rename, function(path) {
//       path.dirname = path.dirname.replace(/(\/|\\|^)(stylus)(\/|\\|$)/g, "/css/");
//     })
//   // .pipe(sourcemaps.write);
