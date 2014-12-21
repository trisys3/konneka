'use strict';

// file patterns for our gulp tasks
module.exports = {
  jshint: {
    dev: {
      src: 'app/modules/**/*.js'
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

    sass: {
      check: {
        src: 'app/**/{sass, scss}/**/*.{sass, scss}'
      },
      move: {
        src: 'app/**/{sass, scss}/**/*.{sass, scss}'
      }
    },

    stylus: {
      check: {
        src: 'app/**/styl/**/*.styl'
      }
    }
  }
};