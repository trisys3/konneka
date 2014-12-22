'use strict';

// file patterns for our gulp tasks
module.exports = {
  jshint: {
    dev: {
      src: ['app/modules/**/*.js', '.jshintrc', '.csslintrc', '.bowerrc', 'bower.json', 'package.json', 'gulpfile.js']
    },
    prod: {
      src: 'dist/app/modules/**/*.min.js'
    },
    node: {
      src: ['backend/**/*.js', 'gulp/**/*.js']
    },
    test: {
      src: ['test/**/*.js']
    }
  },

  csslint: {
    dev: {
      src: 'app/modules/**/*.css'
    },
    prod: {
      src: 'dist/app/modules/**/*.min.css'
    },
  },

  sass: {
    check: {
      src: 'app/**/?(sass, scss)/**/*.@(sass, scss)'
    },
    move: {
      src: 'app/**/?(sass, scss)/**/*.@(sass, scss)',
      dest: '.',
      rename: function(src) {
        return src.replace('scss', 'css');
      }
    }
  },

  stylus: {
    check: {
      src: 'app/**/?(styl)/**/*.styl'
    }
  }
};