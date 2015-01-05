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
        addNews:function(imgPath){
            console.log("this coutn--"+this.count);
            this.count++;
            var self=this;
            var section=document.getElementById('section').value;
            var headline=document.getElementById('addNewsHeadline').value;
            var content=document.getElementById('addNewsContent').value;
            var date=this.util.currentDate();
            var time=this.util.currentTime();
            var data={section:section,headline:headline,content:content,imgPath:imgPath,date:date,time:time};
            this.model.addNews(data,function(err,success){
                if(err){
                    console.log("error ---"+JSON.stringify(err));
                }
                else{
                    self.render();
                }
            })
        },
        checking:function(e){
            var self=this;
            e.preventDefault();
            console.log("inside checking");
            var formElement = document.getElementById("uploadForm");
            formData = new FormData(formElement);
            var options = {
                url: '/api/photo',
                type: 'POST',
                data: formData,
                mimeType:"multipart/form-data",
                contentType: false,
                cache: false,
                processData:false,

                success: function (res) {

                   console.log("sucess--"+res);
                    self.addNews(res);
                },
                error: function (res) {
                    console.log("erro--"+res);

                }
            };
            $.ajax(options);

        },
        events: {
            'click #newsAdd': 'addNews',
            'click #formSubmit':'checking'
        }


    })
    return view;
});