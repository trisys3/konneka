'use strict';

// Protractor E2E tests, run with Selenium
module.exports = {
  options: {
    configFile: 'test/e2e/protractor.conf.js',
    noColor: false,
    keepAlive: true,
    // debug: true,
    args: {
      specs: [
        'app/min-libs/angular-mocks/angular-mocks.js',
        'test/e2e/**/*-e2e.js',
        'app/min-libs/jquery/dist/jquery.js'
      ]
    }
  },
  dev: {
    // debug: true,
    args: {
      browser: 'phantomjs',
      framework: 'jasmine'
    }
  }
};