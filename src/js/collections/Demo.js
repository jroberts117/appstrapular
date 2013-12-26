/**
 * This file is meant to be used as a template for creating collections in this project.  It uses proper
 * namespacing to allow access to intanciate from the console or the code itself (which is not recommended
 * since we use RequireJS)
 */

define([
	'core',
	'models/DemoModel'
], function (core, DemoModel) {

	mv.collections.DemoCollection = Backbone.Collection.extend({

		initialize: function () {},

		model: DemoModel

	});

	return mv.collections.DemoCollection;
});
