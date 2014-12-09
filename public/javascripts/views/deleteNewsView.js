define([
    'jquery',
    'underscore',
    'backbone',
    'text!templatePath/deleteNewsTemplate.html','util/util'
], function( $,_, Backbone,sampleTemplate,Util) {

    var view=Backbone.View.extend({
        el: $("#addNews"),
        initialize: function(){
            console.log("delete News  view initialized");
            this.$el.html('');
            this.util=new Util();
            this.getNewsList();

        },
        render:function(){
            template = _.template(sampleTemplate);
            this.$el.append(template);
        },
        getNewsList:function(){
           this.util.ajaxCall("http://localhost:4000/newsList","GET","",function(err,result){
               console.log("result afte ajax call---"+JSON.stringify(result));
           });
        },
        removeNewsById:function(){
            var _id="5485549c40d6d4d82a7fce43";
            data= {_id:_id};
            this.util.ajaxCall("http://localhost:4000/removeNews","POST",data,function(err,result){
                console.log("result afte ajax call---"+JSON.stringify(result));
            });
        },
        events: {
            'click #removeNews': 'removeNewsById'
        }


    })
    return view;
});
