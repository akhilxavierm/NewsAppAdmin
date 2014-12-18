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
                   ""     :"signInCallback",
             	"addNews": "addNews",
	            "editNews": "editNews",
                "deleteNews": "deleteNews",
                "help": "help"
	            
        	} ,
           initialize: function(options) {
                this.addNews=null;
                this.editNews=null;
                this.deleteNews=null;
                this.help=null;
           },
           signInCallback:function(){

           },
           addNews:function(){
               if(!this.addNews){
                   this.addNews = new addNewsView();
               }
               else{
                   this.addNews.initialize();
               }
           },
           editNews:function(){
               if(!this.editNews){
                   this.editNews = new editNewsView();
               }
               else{
                   this.editNews.initialize();
               }
           },
           deleteNews:function(){
               if(!this.deleteNews){
                   this.deleteNews = new deleteNewsView();
               }
               else{
                   this.deleteNews.initialize();
               }
           },
           help:function(){
               if(!this.help){
                   this.help = new helpView();
               }
               else{
                   console.log("inside help alreday");
                   this.help.initialize();
               }
           }

        	
       });
       return appRouter;
       });



  
   