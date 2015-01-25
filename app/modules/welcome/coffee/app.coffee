'use strict'

angular = require 'angular'

module.exports = angular.module 'welcomeApp', [
  'iotApp'
  'welcomeApp.routes'
  'welcomeApp.filters'
  'welcomeApp.controllers'
  'welcomeApp.directives'
  'welcomeApp.services'
]