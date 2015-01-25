'use strict'

angular = require 'angular'

# Angular module for accounts
module.exports = angular.module 'accountsApp', [
  'iotApp'
  'accountsApp.routes'
  'accountsApp.controllers'
  'accountsApp.services'
  'accountsApp.directives'
  'accountsApp.filters'
]
