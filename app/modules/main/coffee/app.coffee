'use strict'

angular = require 'angular'

mainRtes = require './config/mainRte'
mainFils = require './filters/mainFils'
mainServs = require './services/mainServ'
mainDirecs = require './directives/mainDirec'
mainCtrls = require './controllers/mainCtrl'

# # main Angular module
# module.exports = angular.module 'iotApp', [
# 	require './config/mainRte'
# 	require './filters/mainFils'
# 	require './services/mainServ'
# 	require './directives/mainDirec'
# 	require './controllers/mainCtrl'
# ]

iotApp = angular.module 'iotApp', [
  'iotApp.config'
  'iotApp.filters'
  'iotApp.services'
  'iotApp.directives'
  'iotApp.controllers'
]

for own name, config of mainRtes
  iotApp.module 'iotApp.config', [config.deps]
    .config [config.def]

for own name, filter of mainFils
  iotApp.module 'iotApp.filters', [filter.deps]
    .filter name [filter.def]

for own name, service of mainServs
  iotApp.module 'iotApp.services', [service.deps]
    .factory name [service.def]

for own name, directive of mainDirecs
  iotApp.module 'iotApp.directives', [directive.deps]
    .directive name [directive.def]

for own name, controller of mainCtrls
  iotApp.module 'iotApp.controllers', [controller.deps]
    .controller name [controller.def]