define([
	'core',
	'models/alert',
	'text!html/tplAlert.html',
], function (core, Alert, template) {

	mv.views.AlertView = Backbone.View.extend({

		el: '#alert-container',

		template: _.template(template),

		initialize: function () {
			this.model = new Alert();
		},

		render: function () {
			this.$el.html(
				this.template({
					alert: this.model.toJSON()
				}));
		},

		events: {
			'click #purge': 'hideMainAlert',
			'global alerts/showMainAlert': 'showMainAlert',
			'global alerts/hideMainAlert': 'hideMainAlert'
		},

		showMainAlert: function (alertData) {
			this.model.clear();
			this.model.set(alertData);
			this.render();
			$('html, body').animate({
				scrollTop: 0
				// scrollTop: $("#alert-container").offset().top
			}, 500);
		},

		hideMainAlert: function (alertData) {
			this.$el.html('');
			this.model.clear();
		}

	});

	return mv.views.AlertView;
});
