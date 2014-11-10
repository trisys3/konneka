'use strict'

# non-Angular configuration

# add new module, optionally with dependencies,
# then add it as a dependency to its parent module
addModule = (name, parent, deps) ->
	# create module
	angular.module name, deps || []

	# if we specified a parent module
	if(parent)
		# add module to its parent module
		angular.module(parent).requires.push(name)