define([
    'jquery',
    'backbone',
    'util/util'
], function( $, Backbone,Util) {

    var model = Backbone.Model.extend({

        initialize:function(){
            this.util=new Util();
        },
        addNews:function(data,callBack) {
            var self=this;
            this.util.ajaxCall("http://localhost:4000/addNews","POST",data,function(err,result){
                if(err)
                    return callBack(err);
                self._newsList=result;
                callBack('','success');
            });
        }

    });
    return model;
});