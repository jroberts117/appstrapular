define([
  'core',
  'models/link',
  'collections/links',
  'text!templates/tplHome.html'
], function(core, Link, Links, template){

  mv.views.HomeView = Backbone.View.extend({
  
    el: '',

    template: _.template(template),
  
    initialize: function(){},

    /**
     * A method to generate some links
     * @return {object} a Link collection
     */
    generateLinks: function(){
      var link1 = new Link({
        url: 'http://www.google.com',
        display: 'Google',
        target: '_new'
      });

      var link2 = new Link({
        url: 'http://www.github.com',
        display: 'github',
        target: '_new'
      });

      var linksCol = new Links();
      linksCol.add(link1);
      linksCol.add(link2);

      return linksCol;
    },
    
    render: function() {
      var collection = this.generateLinks();
    	this.$el.html(this.template({links: collection.toJSON()}));
    },
    
    events: {
      'click .example-links': 'processClick'
    },

    processClick: function(event){
      event.preventDefault();
      alert('you clicked a link');
    }
  
  });
  
  return mv.views.HomeView;
});