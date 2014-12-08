define([
    'jquery',
    'underscore',
    'backbone',
    'text!templatePath/editNewsTemplate.html'
], function( $,_, Backbone,sampleTemplate) {

    var view=Backbone.View.extend({
        el: $("#addNews"),
        initialize: function(){
            console.log("add News  view initialized");
            this.$el.html('');
            this.render();
        },
        render:function(){
            template = _.template(sampleTemplate);
            this.$el.append(template);
        },
        addNews:function(){
            var headline=document.getElementById('addNewsHeadline').value;
            var content=document.getElementById('addNewsContent').value;
            console.log("healine and content--"+headline+content);
            var options = {
                url: 'http://localhost:4000/users',
                type: 'POST',
                data: {headline:headline,content:content},
                success: function (res) {
                    console.log("succes"+res);


                },
                error: function (res) {
                    console.error("error"+res);

                }
            };
            $.ajax(options);
        },
        events: {
            'click #newsAdd': 'addNews'
        }


    })
    return view;
});
