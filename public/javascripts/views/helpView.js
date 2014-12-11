define([
    'jquery',
    'underscore',
    'backbone',
    'text!templatePath/helpTemplate.html',
    'util/util'
], function( $,_, Backbone,helpTemplate,Util) {

    var view=Backbone.View.extend({
        el: $("#helpContainer"),
        initialize: function(){
            this.$el.html('');
            this.util=new Util();
            this.util.showOrHide("helpPage");
            this.render();
        },
        render:function(){
            template = _.template(helpTemplate);
            this.$el.html(template);
        }


    })
    return view;
});
