define([
    'jquery',
    'underscore',
    'backbone',
    'text!templatePath/addNewsTemplate.html','util/util','models/addNewsModel'
], function( $,_, Backbone,addNewsTemplate,Util,addNewsModel) {

    var view=Backbone.View.extend({
        el: $("#addNewsContainer"),
        initialize: function(){
            console.log("add News  view initialized");
            this.$el.html('');
            this.util=new Util();
            this.util.showOrHide("addNewsPage");
            this.model=new addNewsModel();
            this.render();
        },
        render:function(){
            template = _.template(addNewsTemplate);
            this.$el.html(template);
        },
        addNews:function(){
            var headline=document.getElementById('addNewsHeadline').value;
            var content=document.getElementById('addNewsContent').value;
            var data={headline:headline,content:content};
            var self=this;
            this.model.addNews(data,function(err,success){
                if(err){
                    console.log("error ---"+JSON.stringify(err));
                }
                else{
                    self.render();
                }
            })
        },
        events: {
            'click #newsAdd': 'addNews'
        }


    })
    return view;
});
