define([
	'core',
	'views/alertView'
], function(core, AlertView) {

	describe ("Alert view spec ", function(){
		var alertView, type;
	  beforeEach(function() {
	    alertView = new AlertView();
	  });
		
		it('Create success alert ', function() {
			type = 'Success';
			Backbone.trigger('alerts/showMainAlert', {
				type: type,
				icon: 'ok',
				message: 'we succeeded',
				scheme: 'success'
			});
			expect(alertView.model.get('type')).toEqual(type);
		});

		it('Create success alert ', function() {
			type = 'Warning';
			Backbone.trigger('alerts/showMainAlert', {
				type: type,
				icon: 'minus',
				message: 'this could be bad',
				scheme: 'warning'
			});
			expect(alertView.model.get('type')).toEqual(type);
		});


		it('Create success alert ', function() {
			type = 'Danger';
			Backbone.trigger('alerts/showMainAlert', {
				type: type,
				icon: 'remove',
				message: 'all is failed',
				scheme: 'danger'
			});
			expect(alertView.model.get('type')).toEqual(type);
		});

	});

});