require.config({
	paths: {
		jquery: 'libs/jquery',
		json2: 'libs/json2',
		underscore: 'libs/underscore-min',
		backbone: 'libs/backbone-min'
	},
    shim: {
        jquery: {
          exports: '$'
        },
        underscore: {
          exports: '_'
        },
        backbone: {
          exports: 'Backbone'
        }
    }
});

require([
	'app',
], function(App){
	App.initialize();
});