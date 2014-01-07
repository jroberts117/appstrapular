define([
	'core'
], function (core, App) {
	var view = null; //attempting to minimize objects in memory by reusing this var for views
	return Backbone.Router.extend({
		initialize: function () {},

		routes: {
			'.*': 'indexView',
			'alerts': 'alertsView'			
		},

		mainContainer: '#main-container',
		alertContainer: '#alert-container',

		indexView: function () {
			require(['views/homeView'], function (HomeView) {
				view = mv.i.views.homeView = new HomeView({
					el: mv.sections.mainContainer
				});
				//spin wheel
				$.when(view.setup())
					.done(function () {
						view.render();
					})
					.fail(function(error){
						//show error on page
					})
			});
		},

		alertsView: function () {
			require(['views/alertsView'], function (AlertsView) {
				view = mv.i.views.alertsView = new AlertsView({
					el: mv.sections.mainContainer
				});
				$.when(view.setup())
					.done(function () {
						view.render();
					})
					.fail(function(error){
						console.log("alert view failed");
					})
			});
		}

	});
});
