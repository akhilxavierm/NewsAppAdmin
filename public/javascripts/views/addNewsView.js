define([
    'jquery',
    'underscore',
    'backbone',
    'text!templatePath/sampleTemplate.html'
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
        }

    })
    return view;
});
