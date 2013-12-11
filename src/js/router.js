define([
	'core'
], function(core, App) {
	var view = null;
	return Backbone.Router.extend({
		initialize: function() {},

		routes: {
			'.*': 'indexView'
		},
		mainContainer: '#main-container',

		indexView: function() {
			require(['views/homeView'], function(HomeView) {
				var view = mv.i.views.homeView = new HomeView({el: mv.sections.mainContainer});
				$.when(view.setup())
					.done(function() {
						view.render();
					});
			});
		}
	});
});