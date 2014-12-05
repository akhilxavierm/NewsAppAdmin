//////mainjs
requirejs.config({
                 baseUrl: 'javascripts/lib',
                 paths: {
                     collections : '../collections',
                     models : '../models',
                     views : '../views',
                     templatePath: '../../templates'
                 },
                 shim: {
                    'backbone': {
                    deps: ['underscore', 'jquery'],
                    exports: 'Backbone'
                },

                 
                 'underscore': {
                 exports: '_'
                 }
                 }
});


require(['jquery', 'backbone','../router/router'], function ($, Backbone,appRouter ) {
                                    console.log("inside way to router");
    
        
                                    var router = new appRouter();
                                    Backbone.history.start();
             });

