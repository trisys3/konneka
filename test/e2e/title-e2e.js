'use strict';

describe('title', function() {
  
  beforeEach(function() {
    module('ngMock');
  });

  it('should have a title', function() {
    browser.get('/login');

    expect(browser.getTitle()).toBeUndefined();
  });
});