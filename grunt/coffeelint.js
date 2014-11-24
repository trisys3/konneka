'use strict';

// CoffeeScript-checking tasks
module.exports = {

	// general options
	options: {
		// only warn when classes are not Pascal-cased
		'camel_case_classes': {
			'level': 'warn'
		},
		// warn when constructor without arguments does not use parentheses
		'empty_constructor_needs_parens': {
			'level': 'warn'
		},
		// do not give error or warning when encountering files longer than 80 characters
		'max_line_length': {
			'level': 'ignore'
		},
		// only warn when using backticks, as the cited reason is something I never do anyway
		'no_backticks': {
			'level': 'warn'
		},
		// allows tabs when indenting
		'no_tabs': {
			'level': 'ignore'
		},
		// only warns when throwing objects/prototypes which are not errors
		'no_throwing_strings': {
			'level': 'warn'
		},
		// only warns when inputting semicolons at end of lines
		'no_trailing_semicolons': {
			'level': 'warn'
		},
		// warns when defining constructor without parentheses
		'non_empty_constructor_needs_parens': {
			'level': 'warn'
		}
	},

	// check syntax of all CoffeeScript files
	check: {
		files: '<%= filePatts.coffeeCheck.files %>'
	}

};