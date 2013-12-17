/**
 * This file is meant to be used as a template for creating collections in this project.  It uses proper
 * namespacing to allow access to intanciate from the console or the code itself (which is not recommended
 * since we use RequireJS)
 */

define([
	'core',
	'boilerplates/boilerplateModel'
], function (core, BoilerplateModel) {

	mv.collections.BoilerplateCollection = Backbone.Collection.extend({

		initialize: function () {},

		model: BoilerplateModel

	});

	return mv.collections.BoilerplateCollection;
});
