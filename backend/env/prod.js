module.exports = {
	port: process.env.port || 3000,
	appRoot: 'dist',
	jsFiles: [
		'/min-libs/jquery/dist/jquery.min.js',

		'/min-libs/jquery-ui/jquery-ui.min.js',

		'/min-libs/bootstrap-css/js/bootstrap.min.js',

		'/min-libs/angular/angular.min.js',
		'/min-libs/angular-route/angular-route.min.js',
		'/min-libs/angular-resource/angular-resource.min.js',
		'/min-libs/angular-animate/angular-animate.min.js',
		'/min-libs/angular-cookies/angular-cookies.min.js',

		'/min-libs/angular-bootstrap/ui-bootstrap.min.js',
		'/min-libs/angular-ui-router/release/angular-ui-router.min.js',
		'/min-libs/angular-ui-utils/ui-utils.min.js',

		'/modules/main/js/app.min.js',
		'/modules/main/js/head.min.js',
		'/modules/main/js/routes.min.js',
		'/modules/main/js/url.min.js',

		'/modules/' + res.locals.module + '/js/app.min.js',
		'/modules/' + res.locals.module + '/js/controllers/' + res.locals.module + 'Ctrl.min.js',
		'/modules/' + res.locals.module + '/js/services/' + res.locals.module + 'Serv.min.js',
		'/modules/' + res.locals.module + '/js/filters/' + res.locals.module + 'Fils.min.js',
		'/modules/' + res.locals.module + '/js/directives/' + res.locals.module + 'Direc.min.js'
	],
	cssFiles: [
		'/min-libs/bootstrap-css/css/bootstrap.css',
		'/min-libs/bootstrap-css/css/bootstrap-theme.css',

		'/min-libs/jquery-ui/themes/base/all.css',

		'/modules/' + res.locals.module + '/css/main.css'
	]
};