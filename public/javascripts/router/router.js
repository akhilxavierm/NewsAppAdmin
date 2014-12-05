define([
        'jquery',
        'backbone',
        'models/studentModel',
        'collections/studentCollection',
        'views/studentView',
        
        ], function( $, Backbone,studentModel,studentCollection,studentView) {
       
       var appRouter = Backbone.Router.extend({

             routes: {
                   ""     :"fetching",
             	"listName": "listName",
	            "listNameAndAge": "listNameAndAge"
	            
        	} ,
           initialize: function(options) {

               console.log("inside router");

           },

        	defaultRoute:function(){
        		
        		console.log("default");

        	},
        	listNameAndAge:function(){

        		
        		var student1=new studentModel();
				student1.set({ name: "Thomas", age: 20});
				student1.getName();
				var student2=new studentModel();
				student2.set({ name: "Arun", age: 30});
				var student3=new studentModel();
				student3.set({ name: "Rahul", age: 40});
				var studentCollection1=new studentCollection([student1,student2,student3]);
				var studentView1=new studentView({ collection:studentCollection1});
                 
				setTimeout(function () {
                   
					console.log("inside settimeout");
					
					
				},3000);

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



  
   