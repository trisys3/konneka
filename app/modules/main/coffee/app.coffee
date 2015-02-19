'use strict'

angular = require 'angular/angular.js'

mainRtes = require './config/mainRte.coffee'
mainFils = require './filters/mainFils.coffee'
mainServs = require './services/mainServ.coffee'
mainDirecs = require './directives/mainDirec.coffee'
mainCtrls = require './controllers/mainCtrl.coffee'

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

module.exports = iotApp