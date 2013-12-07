define([
  'core',
  'mv/js/boilerplates/boilerplateModel'
], function(core, BoilerplateModel){
  
  mv.collections.BoilerplateCollection = Backbone.Collection.extend({
    
    initialize: function(){},
    
    model: BoilerplateModel

  });

  return mv.collections.BoilerplateCollection;
});
