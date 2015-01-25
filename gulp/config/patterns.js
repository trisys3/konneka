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

  eslint: {
    browDev: {
      src: 'app/modules/**/*.js'
    }
  },

  css: {
    dev: {
      src: 'app/modules/**/*.css',
      dest: ''
    },
    prod: {
      src: 'dist/app/modules/**/*.min.css',
      dest: ''
    },
  },

  coffee: {
    front: {
      src: 'app/modules/**/coffee/**/*.coffee',
      dest: ''
    },
    back: {
      src: 'backend/**/coffee/**/*.coffee',
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
      src: 'app/modules/**/?(styl)/**/*.styl'
    },
    move: {
      src: 'app/modules/**/?(styl)/**/*.styl',
      dest: ''
    }
  },

  coffeeify: {
    bundle: {
      src: ['./app/modules/main/coffee/app.coffee'],
      dest: './'
    }
  },

  browserify: {
    bundle: {
      src: ['./app/modules/main/js/app.js'],
      dest: './'
    }
  }
};