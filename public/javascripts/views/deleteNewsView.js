define([
    'jquery',
    'underscore',
    'backbone',
    'text!templatePath/deleteNewsTemplate.html',
    'models/deleteNewsModel',
    'util/util'
], function( $,_, Backbone,deleteNewsTemplate,deleteNewsModel,Util) {

    var view=Backbone.View.extend({
        el: $("#deleteNewsContainer"),
        initialize: function(){
            console.log("delete News  view initialized");
            this.$el.html('');
            this.util=new Util();
            this.util.showOrHide("deleteNewsPage");
            this.model=new deleteNewsModel();
            this.getNewsList();
         },
        render:function(){
            template = _.template(deleteNewsTemplate,this.model);
            this.$el.html(template);
        },
        getNewsList:function(){
           var self=this;
           this.model.getFullNewsList(function(err,success){
               if(err){
                   console.log("error ---"+JSON.stringify(err));
               }
               else{
                  self.render();
               }
           })
        },
        removeNewsById:function(e){
            var self=this;
            var _id = $(e.currentTarget).attr("data-id");
            console.log("id firsrt---"+_id);
            this.model.removeNewsById(_id,function(err,result){
                if(err){
                    console.log("error ---"+JSON.stringify(err));
                }
                else{
                    console.log("success result ---"+JSON.stringify(result));
                    self.getNewsList();
                }
            })

        },
        events: {
            'click .removeNews': 'removeNewsById'

        }


    })
    return view;
});
