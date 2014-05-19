// CoffeeScript-moving tasks
module.exports = {

	options: {
		"empty_constructor_needs_parens": {
			"level": "warn"
		},
		"max_line_length": {
			"level": "ignore"
		},
		"no_implicit_braces": {
			"level": "warn"
		},
		"no_implicit_parens": {
			"level": "warn"
		},
		"no_tabs": {
			"level": "ignore"
		},
		"no_throwing_strings": {
			"level": "warn"
		},
		"no_trailing_semicolons": {
			"level": "ignore"
		},
		"non_empty_constructor_needs_parens": {
			"level": "warn"
		}
	},

	check: {
		files: "<%= filePatts.coffeeCheck.files %>"
	}

};