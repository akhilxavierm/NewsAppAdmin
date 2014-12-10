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
        },
        removeNewsById:function(callBack){
            var _id="5485549c40d6d4d82a7fce43";
            data= {_id:_id};
            this.util.ajaxCall("http://localhost:4000/removeNews","POST",data,function(err,result){
                if(err)
                    return callBack(err);
                callBack('',result);
            });
        }
    });
    return model;
});