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
    src: 'app/modules/**/*.css',
    dest: 'dist/app/modules/',
    concatStart: 'dist/app/modules/**/*.min.css',
    outFile: 'app.min.css',
    concatFolder: 'dist/app/modules/'
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

  browserify: {
    js: {
      inFile: ['./app/modules/main/js/app.js']
    },
    coffee: {
      inFile: ['./app/modules/main/coffee/app.coffee']
    },
    dev: {
      dest: 'app',
    },
    prod: {
      dest: 'dist/app/'
    },
    bundle: {
      outFile: 'index.js'
    }
  }
};