define([
    'jquery',
    'underscore',
    'backbone',
    'text!templatePath/editNewsTemplate.html',
    'text!templatePath/editTemplate.html',
    'models/editNewsModel',
    'util/util'
], function( $,_, Backbone,editNewsTemplate,editTemplate,editNewsModel,Util) {

    var view=Backbone.View.extend({
        el: $("#editNewsContainer"),
        initialize: function(){
            this.util=new Util();
            this.util.showOrHide("editNewsPage");
            this.model=new editNewsModel();
            this.getNewsList();
            this.editHeadline=null;
            this.editContent=null;
        },
        render:function(){
            var template = _.template(editNewsTemplate,this.model);
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
        editPageRender:function(){
            var template = _.template(editTemplate,{headline:this.editHeadline,content:this.editContent});
            this.$el.html(template);
        },
        editNewsById:function(e){
            this.editId=$(e.currentTarget).attr("data-id")
            this.editHeadline=$(e.currentTarget).attr("data-headline");
            console.log("editHdaldfsda-"+this.editHeadline);
            this.editContent=$(e.currentTarget).attr("data-content");
            this.editPageRender();
         },
        editNews:function(){
            var self=this;
            var _headline=document.getElementById('editNewsHeadline').value;
            var _content=document.getElementById('editNewsContent').value;
            var data={id:this.editId,headline:_headline,content:_content};
            console.log("Data in edit news--"+JSON.stringify(data));
             this.model.editNewsById(data,function(err,result){
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
            'click .editNews': 'editNewsById',
            'click #editSubmit':'editNews'

        }




    })
    return view;
});
