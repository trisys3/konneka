module.exports = {
	port: process.env.port || 3000,
	appRoot: 'app',
	jsFiles: [
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

		'/modules/' + res.locals.module + '/js/app.js',
		'/modules/' + res.locals.module + '/js/controllers/' + res.locals.module + 'Ctrl.js',
		'/modules/' + res.locals.module + '/js/services/' + res.locals.module + 'Serv.js',
		'/modules/' + res.locals.module + '/js/filters/' + res.locals.module + 'Fils.js',
		'/modules/' + res.locals.module + '/js/directives/' + res.locals.module + 'Direc.js',

	],
	cssFiles: [
		'/min-libs/bootstrap-css/css/bootstrap.css',
		'/min-libs/bootstrap-css/css/bootstrap-theme.css',

		'/min-libs/jquery-ui/themes/base/all.css',

		'/modules/' + res.locals.module + '/css/main.css'
	]
};