define([
	'core',
	'models/alert',
	'text!html/tplAlerts.html',
	'views/alertView'
], function (core, Alert, template, AlertView) {

	mv.views.AlertsView = Backbone.View.extend({

		el: '',

		template: _.template(template),

		initialize: function () {
			this.model = new Alert();
		},

		setup: function() {},
		
		render: function () {
			this.$el.html(
				this.template({})
			);
		},

		events: {
			'click .btn-success' : 'successClick',
			'click .btn-warning' : 'warningClick',
			'click .btn-danger' : 'dangerClick'
		},

		closePreviousAlert: function(){
			if(mv.i.views.alertView){
				mv.i.views.alertView.close();
			}
		},

		successClick: function(event) {
			event.preventDefault();
			var held = {
				type: 'Success',
				icon: 'ok',
				message: 'we succeeded',
				scheme: 'success'
			};
			this.model.set(held);
			this.closePreviousAlert();
			var alertView = mv.i.views.alertView = new AlertView({model: this.model});
			alertView.render();
		},

		warningClick: function(event) {
			event.preventDefault();
			var held = {
				type: 'Warning',
				icon: 'minus',
				message: 'this could be bad',
				scheme: 'warning'
			};
			this.model.set(held);
			this.closePreviousAlert();
			var alertView = mv.i.views.alertView = new AlertView({model: this.model});
			alertView.render();
		},

		dangerClick: function(event) {
			event.preventDefault();
			var held = {
				type: 'Danger',
				icon: 'remove',
				message: 'all is failed',
				scheme: 'danger'
			};
			this.model.set(held);
			this.closePreviousAlert();
			var alertView = mv.i.views.alertView = new AlertView({model: this.model});
			alertView.render();
		}
	});

	return mv.views.AlertsView;
});