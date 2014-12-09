define([
    'jquery',
    'underscore',
    'backbone',
    'text!templatePath/deleteNewsTemplate.html'
], function( $,_, Backbone,sampleTemplate) {

    var view=Backbone.View.extend({
        el: $("#addNews"),
        initialize: function(){
            console.log("delete News  view initialized");
            this.$el.html('');
            this.getNewsList();
        },
        render:function(){
            template = _.template(sampleTemplate);
            this.$el.append(template);
        },
        getNewsList:function(){
            console.log("inside here man");
            var _id="5485549c40d6d4d82a7fce43";
            var options = {
                url: 'http://localhost:4000/removeNews',
                type: 'POST',
                data: {_id:_id},
                success: function (res) {
                    console.log("succes newList"+res);
                },
                error: function (res) {
                    console.error("error"+res);
                }
            };
            $.ajax(options);
            /*var options = {
                url: 'http://localhost:4000/newsList',
                type: 'GET',
                success: function (res) {
                    console.log("succes newList"+res);
                },
                error: function (res) {
                    console.error("error"+res);
                }
            };
            $.ajax(options);*/
        },
        removeNewsById:function(){
            console.log("inside here man");
           var _id="5485549c40d6d4d82a7fce43";
            var options = {
                url: 'http://localhost:4000/removeNews',
                type: 'POST',
                data: {_id:_id},
                success: function (res) {
                    console.log("succes newList"+res);
                },
                error: function (res) {
                    console.error("error"+res);
                }
            };
            $.ajax(options);
        },
        events: {
            'click #removeNews': 'removeNewsById'
        }


    })
    return view;
});
