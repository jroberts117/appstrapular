define([
	'core'
], function (core, App) {
	var view = null; //attempting to minimize objects in memory by reusing this var for views
	return Backbone.Router.extend({
		initialize: function () {},

		routes: {
			'.*': 'indexView'
		},
		mainContainer: '#main-container',

		indexView: function () {
			require(['views/homeView'], function (HomeView) {
				view = mv.i.views.homeView = new HomeView({
					el: mv.sections.mainContainer
				});
				$.when(view.setup())
					.done(function () {
						view.render();
					});
			});
		}
	});
});
