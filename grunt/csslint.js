'use strict';

// CSS syntax-checking tasks
module.exports = {

	// default options
	options: {
		important: 2, // abort on error when using !important in CSS rules
		import: 2, // abort on error when using @import
		'adjoining-classes': false, // do not warn on CSS rules with 2 classes on 1 element
		'box-sizing': false, // do not warn when "box-sizing" selector is used
		'box-model': false, // do not warn when using "width" with "padding" or "border"
		'fallback-colors': false, // do not warn when using rgba, hsla, etc. without regular color
		ids: false, // do not warn when using IDs in CSS rules
		'outline-none': false // do not warn when using "outline: none" or "outline: 0" to hide outline when focused
	},
	
	// check CSS files according to CSSLint rules
	check: {
		files: '<%= filePatts.checkCss.files %>', // check all files with ".css" extension in app folder
		options: {
			'non-link-hover': false, // do not warn when using :hover property on elements besides links
		}
	},
	
	// check CSS files according to CSSLint rules and log results
	log: {
		files: '<%= filePatts.checkCss.files %>', // check all files with ".css" extension in app folder
		options: {
			'non-link-hover': false, // do not warn when using :hover property on elements besides links
			formatters: [{
				id: 'text',
				dest: 'errs/dev/csslint.js'
			}]
		}
	},
	
	// check CSS files for incompatibilities in older browsers according to CSSLint rules
	checkOld: {
		files: '<%= filePatts.checkCss.files %>', // check all files with ".css" extension in app folder
		'adjoining-classes': 2, // abort with error when defining rules with multiple classes for 1 element (<IE7)
		'box-sizing': 2, // abort with error when "box-sizing" selector is used (IE6-7)
		'bulletproof-font-face': 2, // do not warn when using multiple font faces in 1 definition (IE6-8)
		'fallback-colors': 2, // require fallback colors (<IE9)
	},
	
	// check CSS files for incompatibilities in older browsers according to CSSLint rules and log results
	logOld: {
		files: '<%= filePatts.checkCss.files %>', // check all files with ".css" extension in app folder
		'adjoining-classes': 2, // abort with error when defining rules with multiple classes for 1 element (<IE7)
		'box-sizing': 2, // abort with error when "box-sizing" selector is used (IE6-7)
		'bulletproof-font-face': 2, // do not warn when using multiple font faces in 1 definition (IE6-8)
		'fallback-colors': 2, // require fallback colors (<IE9)
		formatters: [{
			id: 'text',
			dest: 'errs/old-browsers/csslint'
		}]
	}
	
};