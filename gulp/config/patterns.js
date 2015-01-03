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

  coffee: {
    check: {
      src: 'app/modules/**/coffee/**/*.js'
    },
    move: {
      src: 'app/modules/**/coffee/**/*.coffee',
      dest: ''
    },
    backCheck: {
      src: 'backend/**/coffee/**/*.js'
    },
    backMove: {
      src: 'backend/**/coffee/**/*.js',
      dest: ''
    }
  },

  scss: {
    check: {
      src: 'app/modules/**/?(sass, scss)/**/*.@(sass, scss)'
    },
    move: {
      src: 'app/modules/**/?(sass|scss)/**/*.@(sass|scss)',
      dest: ''
    }
  },

  stylus: {
    check: {
      src: 'app/**/?(styl)/**/*.styl'
    }
  }
};