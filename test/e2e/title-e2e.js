'use strict';

describe('title', function() {
  
  beforeEach(function() {
    module('ngMockE2E');
  });

  it('should have a title', function() {
    browser.get('http://localhost:9001');

    expect(browser.getTitle()).toBeUndefined();
  });
});