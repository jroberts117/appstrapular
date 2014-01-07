define([
	'main',
	'text!html/tplAlerts.html'
], function (main, template) {

	mv.views.AlertsView = Backbone.View.extend({

		el: '',

		template: _.template(template),

		initialize: function () {},

		render: function () {
			this.$el.html(
				this.template({})
			);
		},

		events: {
			'click .btn-success': 'successClick',
			'click .btn-warning': 'warningClick',
			'click .btn-danger': 'dangerClick'
		},

		successClick: function (event) {
			event.preventDefault();
			Backbone.trigger('alerts/showMainAlert', {
				type: 'Success',
				icon: 'ok',
				message: 'we succeeded',
				scheme: 'success'
			});
		},

		warningClick: function (event) {
			event.preventDefault();
			Backbone.trigger('alerts/showMainAlert', {
				type: 'Warning',
				icon: 'minus',
				message: 'this could be bad',
				scheme: 'warning'
			});
		},

		dangerClick: function (event) {
			event.preventDefault();
			Backbone.trigger('alerts/showMainAlert', {
				type: 'Danger',
				icon: 'remove',
				message: 'all is failed',
				scheme: 'danger'
			});
		}
	});

	return mv.views.AlertsView;
});
