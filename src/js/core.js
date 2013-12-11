define([
	'jquery',
	'underscore',
	'backbone',
	'bootstrap'
], function ($, _, Backbone, Marionette) {
	_.templateSettings = {
		evaluate: /{{([\s\S]+?)}}/g,
		interpolate: /{{=([\s\S]+?)}}/g
	};

	// Prototyped view functions
	Backbone.View.prototype.setup = function () {};
	Backbone.View.prototype.close = function () {
		this.remove();
		this.unbind();
		this.undelegateEvents();
		if (this.onClose) {
			this.onClose();
		}
	};
});
