define([
        'jquery',
        'backbone'
        ], function( $, Backbone) {
       
    var model = Backbone.Model.extend({
    			defaults: {
				            name: 'Fetus',
				            age: 0,
				            
				        },
						initialize:function(){
						console.log ("student model initialized");
						console.log("name default="+this.get("name"));
						
						},
						getName:function() {

							console.log("name="+this.get("name"));
						}
    });
    return model;
});