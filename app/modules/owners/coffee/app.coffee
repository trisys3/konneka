'use strict'

angular = require 'angular'

module.exports = angular.module 'ownersApp', [
  'iotApp'
  'ownersApp.routes'
  'ownersApp.controllers'
  'ownersApp.services'
  'ownersApp.directives'
  'ownersApp.filters'
]