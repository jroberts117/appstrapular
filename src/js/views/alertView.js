define([
	'core',
	'models/alert',
	'text!html/tplAlert.html',
], function (core, Alert, template) {

	mv.views.AlertView = Backbone.View.extend({

		el: '#alert-container',

		template: _.template(template),

		initialize: function () {
		},

		setup: function() {},
		
		render: function () {
			this.$el.html(
				this.template({
					alert: this.model.toJSON()
				}));
		},

		events: {
			'click #purge' : 'purgeView'
		},

		purgeView: function(event) {
			this.close();
		},

		/**
		 * This overrides the close funciton that is prototyped for views.  This is done to ensure
		 * the container is not removed from the page
		 */

		close: function () {
			this.$el.html('');
			this.unbind();
			this.undelegateEvents();
		}
	});

	return mv.views.AlertView;
});