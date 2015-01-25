'use strict';

var csslint = require('gulp-csslint');

var lazypipe = require('lazypipe');

exports.check = lazypipe()
    .pipe(csslint, '.csslintrc')
    .pipe(csslint.reporter);