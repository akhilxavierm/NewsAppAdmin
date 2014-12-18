define([
    'jquery',
    'underscore',
    'backbone',
    'text!templatePath/helpTemplate.html',
    'models/helpModel',
    'util/util'
], function( $,_, Backbone,helpTemplate,helpModel,Util) {

    var view=Backbone.View.extend({
        el: $("#helpContainer"),
        initialize: function(){
            this.$el.html('');
            this.util=new Util();
            this.util.showOrHide("helpPage");
            this.model=new helpModel();
            this.render();
        },
        render:function(){
            template = _.template(helpTemplate);
            this.$el.html(template);
        },

        events: {
            'click #formSubmit':'uploadFun'

        },
        uploadFun:function(e){
        //    e.preventDefault();
            console.log("inside uplad");
            var formData = new FormData();

            formData.append("username", "Groucho");
            formData.append("accountnum", 123456);
          //var data = new FormData(document.forms.namedItem("uploadForm"));
          //  console.log("Data ---"+JSON.stringify(data));
            this.model.uploadForm(formData,function(err,result){
                if(err){
                    console.log("error ---"+JSON.stringify(err));
                }
                else{
                    console.log("success result ---"+JSON.stringify(result));
                    self.getNewsList();
                }
            })
        }



    })
    return view;
});
