define([
        'jquery',
        'backbone','models/studentModel'
        
        ], function( $, Backbone,studentModel) {
       
       var collection = Backbone.Collection.extend({
                                                           model: studentModel
                                                           });
        return collection;
   });