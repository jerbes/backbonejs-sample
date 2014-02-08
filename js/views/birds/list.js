define([
  'jquery',
  'underscore',
  'backbone',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'collections/birds',
  'text!templates/birds/list.html'
], function($, _, Backbone, BirdsCollection, birdListTemplate){
  var BirdListView = Backbone.View.extend({
    el: $('nav'),
    render: function(){
      var self = this;
      this.collection = new BirdsCollection();
      this.collection.fetch({success: function(){
        console.log(self.collection.models);
        // Compile the template using Underscores micro-templating
        var compiledTemplate = _.template( birdListTemplate, { birds: self.collection.models } );
        // Append our compiled template to this Views "el"
        self.$el.append( compiledTemplate );
      }});
    }
  });
  // Our module now returns our view
  return BirdListView;
});