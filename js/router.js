define([
  'jquery',
  'underscore',
  'backbone',
  'views/birds/list'
], function($, _, Backbone, BirdListView){
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      '': 'showBirds',

      // Default
      '*actions': 'defaultAction'
    }
  });

  var initialize = function(){
    

    var app_router = new AppRouter;
    app_router.on('route:showBirds', function(){
      console.log('route:showBirds');
      // Call render on the module we loaded in via the dependency array
      // 'views/birds/list'
      var birdListView = new BirdListView();
      birdListView.render();
    });

    app_router.on('route:defaultAction', function(actions){
      // We have no matching route, lets just log what the URL was
      console.log('No route:', actions);
    });
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});