module.exports = {
	port: process.env.port || 3000,
	db: 'mongodb://konneka.org:' + (process.env.MONGO_PORT || 27017) + '/mean-dev',
	appRoot: 'app/',
	getJs: function(module) {
		'/min-libs/jquery/dist/jquery.js',

		'/min-libs/jquery-ui/jquery-ui.js',

		'/min-libs/bootstrap-css/js/bootstrap.js',

		'/min-libs/angular/angular.js',
		'/min-libs/angular-route/angular-route.js',
		'/min-libs/angular-resource/angular-resource.js',
		'/min-libs/angular-animate/angular-animate.js',
		'/min-libs/angular-cookies/angular-cookies.js',

		'/min-libs/angular-bootstrap/ui-bootstrap.js',
		'/min-libs/angular-ui-router/release/angular-ui-router.js',
		'/min-libs/angular-ui-utils/ui-utils.js',

		'/modules/main/js/app.js',
		'/modules/main/js/head.js',
		'/modules/main/js/routes.js',
		'/modules/main/js/url.js',

		'/modules/' + module + '/js/app.js',
		'/modules/' + module + '/js/controllers/' + module + 'Ctrl.js',
		'/modules/' + module + '/js/services/' + module + 'Serv.js',
		'/modules/' + module + '/js/filters/' + module + 'Fils.js',
		'/modules/' + module + '/js/directives/' + module + 'Direc.js'

	},
	getCss: function(module) {
		'/min-libs/bootstrap-css/css/bootstrap.css',
		'/min-libs/bootstrap-css/css/bootstrap-theme.css',

		'/min-libs/jquery-ui/themes/base/all.css',

		'/modules/' + module + '/css/main.css'
	}
};