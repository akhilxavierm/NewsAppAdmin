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
            this.count=0;
        },
        render:function(){
            template = _.template(addNewsTemplate);
            this.$el.html(template);
        },
        addNews:function(){
            console.log("this coutn--"+this.count);
            this.count++;
            var self=this;
            var headline=document.getElementById('addNewsHeadline').value;
            var content=document.getElementById('addNewsContent').value;
            var date=this.util.currentDate();
            var time=this.util.currentTime();
            var data={headline:headline,content:content,date:date,time:time};
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
