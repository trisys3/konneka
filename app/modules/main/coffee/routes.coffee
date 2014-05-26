'use strict'

angular.module 'iotRoute', ['ngRoute'] # we need the ng-route module
	.factory 'IotRoute', ['$route', ($route) -> # call ng-route's $route service as a dependency

		iotOwner = "" # set the owner to nothing originally
		iotObject = "" # set the object to nothing originally
		iotTitle = "" # set title to nothing originally
		iotModule = "" # set module to nothing originally
		IotRoute = [] # set the route to an empty array originally
		IotRouteService = {} # create the route service singleton object

		# getters & setters for parts of the route

		# getter for the owner part of the route
		IotRouteService.getUrlOwner = ->
			if $route.current.params.owner
				iotOwner = $route.current.params.owner
			else
				iotOwner = 'sample' # if the owner route section is not set, we set it to "sample"
			return iotOwner

		# setter for the owner part of the route; used if the owner part of the URL is different
		# from the name of the owner
		IotRouteService.setUrlOwner = (owner) ->
			$route.current.params.owner = owner

		# getter for the object part of the route
		IotRouteService.getUrlObject = ->
			if $route.current.params.objName
				iotObject = $route.current.params.objName
			else
				iotObject = 'sample' # if the object route section is not set, we set it to "sample"
			return iotObject

		# setter for the object part of the route; used if the object part of the URL is different
		# from the name of the object
		IotRouteService.setUrlObject = (objName) ->
			$route.current.params.objName = objName

		# getter for module
		IotRouteService.getModule = ->
			if $route.current.module
				iotModule = $route.current.module # if we are in a module, get that module
			else
				iotModule = "welcome" # else, get the welcome module as a default
			return iotModule

		# setter for module
		IotRouteService.setModule = (iotModule) ->
			$route.current.module = iotModule

		return IotRouteService
	]