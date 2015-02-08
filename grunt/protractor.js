'use strict';

// Protractor E2E tests, run with Selenium
module.exports = {
  options: {
    configFile: 'test\\e2e\\protractor.conf.js',
    keepAlive: true,
    // debug: true,
    args: {
      specs: [
        'test\\e2e\\**\\*-e2e.js'
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