'use strict'

angular = require 'angular'

module.exports = angular.module 'objectsApp', [
  'iotApp'
  'objectsApp.routes'
  'objectsApp.controllers'
  'objectsApp.services'
  'objectsApp.directives'
  'objectsApp.filters'
]