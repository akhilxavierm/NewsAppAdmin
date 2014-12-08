define([
        'jquery',
        'backbone',
        'views/addNewsView',
        'views/editNewsView',
        'views/deleteNewsView',
        'views/helpView',
         ], function( $, Backbone,addNewsView,editNewsView,deleteNewsView,helpView) {
       
       var appRouter = Backbone.Router.extend({

             routes: {
                   ""     :"fetching",
             	"addNews": "addNews",
	            "editNews": "editNews",
                "deleteNews": "deleteNews",
                "help": "help"
	            
        	} ,
           initialize: function(options) {
                 console.log("inside router");
           },
           addNews:function(){
               console.log("add News");
               var addNews=new addNewsView();
           },
           editNews:function(){
               console.log("edit News");
               var editNews=new editNewsView();
           },
           deleteNews:function(){
               console.log("delete News");
               var deleteNews=new deleteNewsView();
           },
           help:function(){
               console.log("help");
               var help=new helpView();
           }

        	
       });
       return appRouter;
       });



  
   