define([
  'underscore',
  'backbone',
  // Pull in the Model module from above
  'models/bird'
], function(_, Backbone, BirdModel){
  var BirdsCollection = Backbone.Collection.extend({
    model: BirdModel,
    url:'http://ebird.org/ws1.1/data/obs/geo/recent?lng=-76.51&lat=42.46&fmt=json'
  });
  // You don't usually return a collection instantiated
  return BirdsCollection;
});