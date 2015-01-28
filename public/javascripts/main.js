//////mainjs
requirejs.config({
    baseUrl: 'javascripts',
    paths: {

        templatePath: '../templates',
        jquery:'lib/jquery',
        backbone:'lib/backbone',
        underscore:'lib/underscore',
        handlebars:'lib/handlebars',
        text:'lib/text'
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


require(['jquery', 'backbone','router/router'], function ($, Backbone,appRouter ) {
    console.log("inside way to router");


    var router = new appRouter();
    Backbone.history.start();
});

