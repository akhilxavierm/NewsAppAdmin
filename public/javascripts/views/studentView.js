define([
        'jquery',
        'backbone',
        'models/studentModel'
        ], function( $, Backbone,studentModel) {
       
		var view=Backbone.View.extend({
								el: $("#studentList"),
								 initialize: function(){
							            console.log("student view initialized");
							            this.$el.html('');
							           // this.collection=studentCollection;
							            this.collection.bind('add',this.render);
							            this.render();

							           

							            
							        },
							     render:function(){
							     	console.log("collection=="+JSON.stringify(this.collection));
							     	console.log("inside rendeo")
								     	_(this.collection.models).each(function(item){
								     		htm='<div>NAME:'+item.get("name")+'</div><div>AGE:'+item.get("age")+'</div><br/>';
								     		$("#studentList").append(htm);
								     		console.log("htm=="+htm);

								     	})
							    	},
							    	
						})
		return view;
});
