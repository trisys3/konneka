exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  framework: 'jasmine',
  jasmineNodeOpts: {
    includeStackTrace: true,
    showColors: true,
    isVerbose: true,
    silent: false,
    showTiming: true
  },
  capabilities: {
    browserName: 'phantomjs',
    'phantomjs.binary.path': require('phantomjs').path,
    'phantomjs.cli.args': ['--debug=true', '--webdriver-logfile=log/phantom.log', '--webdriver-loglevel=DEBUG', '--webdriver=127.0.0.1:4444', '--webdriver-selenium-grid-hub=127.0.0.1:4444/wd/hub'],
    version: '',
    platform: 'ANY'
  },
  baseUrl: 'localhost:3000'
};