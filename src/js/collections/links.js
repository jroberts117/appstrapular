define([
	'core',
	'models/link'
], function (core, Link) {

	mv.collections.Links = Backbone.Collection.extend({

		initialize: function () {},

		model: Link

	});

	return mv.collections.Links;
});
