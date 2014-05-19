// CSSLint options
module.exports = {

	// default options
	options: {
		import: 2, // abort on error when using @import
		force: true, // only abort on errors, not warnings
		'box-model': false, // do not warn when using "width" with "padding" or "border"
		'empty-rules': false, // do not warn when using rules with no content
		ids: false, // do not warn when using IDs in CSS rules
		important: 2, // abort on error when using !important in CSS rules
		'outline-none': false // do not warn when using "outline: none" or "outline: 0" to hide outline when focused
	},
	
	// check CSS files according to CSSLint rules
	check: {
		src: '<%= filePatts.checkCss.files %>', // check all files with ".css" extension in app folder
		options: {
			adjoiningClasses: false, // do not warn on CSS rules with 2 classes on 1 element
			'box-sizing': false, // do not warn when "box-sizing" selector is used
			'bulletproof-font-face': false, // do not warn when using multiple font faces in 1 definition
			'non-link-hover': false, // do not warn when using :hover property on elements besides links
			'fallback-colors': false // do not warn when using rgba, hsla, etc. without regular color
		}
	},
	
	// check CSS files according to CSSLint rules and log results
	log: {
		src: '<%= filePatts.checkCss.files %>', // check all files with ".css" extension in app folder
		options: {
			adjoiningClasses: false, // do not warn on CSS rules with 2 classes on 1 element
			'box-sizing': false, // do not warn when "box-sizing" selector is used
			'bulletproof-font-face': false, // do not warn when using multiple font faces in 1 definition
			'non-link-hover': false, // do not warn when using :hover property on elements besides links
			'fallback-colors': false, // do not warn when using rgba, hsla, etc. without regular color
			formatters: [{
				id: 'text',
				dest: 'errs/dev/csslint.js'
			}]
		}
	},
	
	// check CSS files for incompatibilities in older browsers according to CSSLint rules
	checkOld: {
		src: '<%= filePatts.checkCss.files %>', // check all files with ".css" extension in app folder
		adjoiningClasses: 2, // abort with error when defining rules with multiple classes for 1 element
		'box-sizing': 2, // abort with error when "box-sizing" selector is used
		'fallback-colors': 2, // abort with error when using multiple font faces in 1 definition would screw up older browsers
	},
	
	// check CSS files for incompatibilities in older browsers according to CSSLint rules and log results
	logOld: {
		src: '<%= filePatts.checkCss.files %>', // check all files with ".css" extension in app folder
		adjoiningClasses: 2, // abort with error when defining rules with multiple classes for 1 element
		'box-sizing': 2, // abort with error when "box-sizing" selector is used
		'fallback-colors': 2, // abort with error when using multiple font faces in 1 definition would screw up older browsers
		formatters: [{
			id: 'text',
			dest: 'errs/old-browsers/csslint'
		}]
	}
	
};