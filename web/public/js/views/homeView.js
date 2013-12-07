define([
  'core',
  'text!templates/tplHome.html'
], function(core, template){

  mv.views.HomeView = Backbone.View.extend({
  
    el: '',

    template: _.template(template, {}),
  
    initialize: function(){},
    
    render: function() {
    	this.$el.html(this.template);
    },
    
    events: {}
  
  });
  
  return mv.views.HomeView;
});