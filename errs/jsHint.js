Linting Gruntfile.js ...[31mERROR[39m
[31m>> [39mBad option: 'extensions'.
[31m[[39m[33mL4[39m[31m:[39m[33mC5[39m[31m][39m [33mE007[39m[31m:[39m [33mMissing "use strict" statement.[39m
  gru[31m[7mn[27m[39mt.initConfig({
[31m[[39m[33mL200[39m[31m:[39m[33mC8[39m[31m][39m [33mW099[39m[31m:[39m [33mMixed spaces and tabs.[39m
          //[31m[7m [27m[39m  except: ['jQuery, AngularJS'] // except jQuery variables, as these are needed for jQuery
[31m[[39m[33mL252[39m[31m:[39m[33mC6[39m[31m][39m [33mW099[39m[31m:[39m [33mMixed spaces and tabs.[39m
      //[31m[7m [27m[39m  files: {
[31m[[39m[33mL253[39m[31m:[39m[33mC6[39m[31m][39m [33mW099[39m[31m:[39m [33mMixed spaces and tabs.[39m
      //[31m[7m [27m[39m    'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
[31m[[39m[33mL254[39m[31m:[39m[33mC6[39m[31m][39m [33mW099[39m[31m:[39m [33mMixed spaces and tabs.[39m
      //[31m[7m [27m[39m  }
[31m[[39m[33mL306[39m[31m:[39m[33mC5[39m[31m][39m [33mW099[39m[31m:[39m [33mMixed spaces and tabs.[39m
    //[31m[7m [27m[39m  compile: {
[31m[[39m[33mL307[39m[31m:[39m[33mC5[39m[31m][39m [33mW099[39m[31m:[39m [33mMixed spaces and tabs.[39m
    //[31m[7m [27m[39m    name: '<%= pkg.name %>',
[31m[[39m[33mL308[39m[31m:[39m[33mC5[39m[31m][39m [33mW099[39m[31m:[39m [33mMixed spaces and tabs.[39m
    //[31m[7m [27m[39m    description: '<%= pkg.description %>'
[31m[[39m[33mL309[39m[31m:[39m[33mC5[39m[31m][39m [33mW099[39m[31m:[39m [33mMixed spaces and tabs.[39m
    //[31m[7m [27m[39m    version: '<%= pkg.version %>',
[31m[[39m[33mL310[39m[31m:[39m[33mC5[39m[31m][39m [33mW099[39m[31m:[39m [33mMixed spaces and tabs.[39m
    //[31m[7m [27m[39m    url: '<%= pkg.homepage %>',
[31m[[39m[33mL311[39m[31m:[39m[33mC5[39m[31m][39m [33mW099[39m[31m:[39m [33mMixed spaces and tabs.[39m
    //[31m[7m [27m[39m    options: {
[31m[[39m[33mL312[39m[31m:[39m[33mC5[39m[31m][39m [33mW099[39m[31m:[39m [33mMixed spaces and tabs.[39m
    //[31m[7m [27m[39m      paths: ['app/js/**/*.js', 'app/css/**/*.css', 'app/min-libs/**/*.js', 'app/min-libs/**/*.css'],
[31m[[39m[33mL313[39m[31m:[39m[33mC5[39m[31m][39m [33mW099[39m[31m:[39m [33mMixed spaces and tabs.[39m
    //[31m[7m [27m[39m      outdir: 'dist/app'
[31m[[39m[33mL314[39m[31m:[39m[33mC5[39m[31m][39m [33mW099[39m[31m:[39m [33mMixed spaces and tabs.[39m
    //[31m[7m [27m[39m    }
[31m[[39m[33mL315[39m[31m:[39m[33mC5[39m[31m][39m [33mW099[39m[31m:[39m [33mMixed spaces and tabs.[39m
    //[31m[7m [27m[39m  }
[31m[[39m[33mL426[39m[31m:[39m[33mC71[39m[31m][39m [33mW033[39m[31m:[39m [33mMissing semicolon.[39m
  grunt.registerTask('checkOld', ['jshint:ie8', 'csslint:checkOld'])[31m[7m [27m[39m
Linting app/js/app.js ...[31mERROR[39m
[31m>> [39mBad option: 'extensions'.
[31m[[39m[33mL5[39m[31m:[39m[33mC1[39m[31m][39m [33mW117[39m[31m:[39m [33m'angular' is not defined.[39m
[31m[7ma[27m[39mngular.module('myApp', [
Linting app/js/controllers/controllers.js ...[31mERROR[39m
[31m>> [39mBad option: 'extensions'.
[31m[[39m[33mL5[39m[31m:[39m[33mC1[39m[31m][39m [33mW117[39m[31m:[39m [33m'angular' is not defined.[39m
[31m[7ma[27m[39mngular.module('myApp.controllers', []).
Linting app/js/directives/directives.js ...[31mERROR[39m
[31m>> [39mBad option: 'extensions'.
[31m[[39m[33mL6[39m[31m:[39m[33mC1[39m[31m][39m [33mW117[39m[31m:[39m [33m'angular' is not defined.[39m
[31m[7ma[27m[39mngular.module('myApp.directives', []).
[31m[[39m[33mL8[39m[31m:[39m[33mC38[39m[31m][39m [33mW098[39m[31m:[39m [33m'attrs' is defined but never used.[39m
    return function(scope, elm, attrs[31m[7m)[27m[39m {
Linting app/js/filters/filters.js ...[31mERROR[39m
[31m>> [39mBad option: 'extensions'.
[31m[[39m[33mL9[39m[31m:[39m[33mC6[39m[31m][39m [33mW033[39m[31m:[39m [33mMissing semicolon.[39m
    }[31m[7m [27m[39m
[31m[[39m[33mL5[39m[31m:[39m[33mC1[39m[31m][39m [33mW117[39m[31m:[39m [33m'angular' is not defined.[39m
[31m[7ma[27m[39mngular.module('myApp.filters', []).
Linting app/js/services/services.js ...[31mERROR[39m
[31m>> [39mBad option: 'extensions'.
[31m[[39m[33mL8[39m[31m:[39m[33mC1[39m[31m][39m [33mW117[39m[31m:[39m [33m'angular' is not defined.[39m
[31m[7ma[27m[39mngular.module('myApp.services', []).

