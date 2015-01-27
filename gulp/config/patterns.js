'use strict';

// file patterns for our gulp tasks
module.exports = {
  js: {
    front: {
      src: 'app/modules/**/*.js',
      dest: 'dist/app/modules/'
    },
    back: {
      src: 'backend/**/*.js'
    },
    test: {
      src: 'test/**/*.js'
    }
  },

  css: {
    dev: {
      src: 'app/modules/**/*.css',
      dest: 'dist/app/modules/'
    }
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

  preCss: {
    scss: {
      src: 'app/modules/**/?(scss)/**/*.scss',
      dest: ''
    },
    stylus: {
      src: 'app/modules/**/?(stylus)/**/*.styl',
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