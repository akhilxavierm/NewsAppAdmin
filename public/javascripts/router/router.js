define([
        'jquery',
        'backbone',
        'models/studentModel',
        'collections/studentCollection',
        'views/addNewsView',
        
        ], function( $, Backbone,studentModel,studentCollection,addNewsView) {
       
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

           },
           deleteNews:function(){
               console.log("delete News");

           },
           help:function(){
               console.log("help");
           },
        	listNameOnly:function(){
        		var student1=new studentModel();
				student1.set({ name: "Thomas", age: 20});
				student1.getName();
				var student2=new studentModel();
				student2.set({ name: "Arun", age: 30});
				var student3=new studentModel();
				student3.set({ name: "Rahul", age: 40});
				var studentCollection1=new studentCollection([student1,student2,student3]);
				var studentView1=new studentView({ model:student1});
        	},
            fetching:function(){
                 var UserModel = Backbone.Model.extend({
                         urlRoot: 'http://localhost:8080/api',
                         defaults: {
                            nombre: '',
                            email: ''
                        }
                 });
                var userDetails = {
                    nombre: 'José',
                    email: 'jall@gmail.com'
                };
                var user = new UserModel(userDetails);

            user.fetch({
                success: function (user) {
                    console.log(user.toJSON());
                }
            });

            }
        	
        });

                                                             
       return appRouter;
       });



  
   