define([
    'jquery',
    'backbone',
    'util/util'
], function( $, Backbone,Util) {

    var model = Backbone.Model.extend({
        _newsList: null,
        initialize:function(){
            this.util=new Util();
        },
        getFullNewsList:function(callBack) {
            var self=this;
            this.util.ajaxCall("http://localhost:4000/newsList","GET","",function(err,result){
                if(err)
                    return callBack(err);
                self._newsList=result;
                callBack('','success');
            });
        },
        removeNewsById:function(data1,callBack){

            var  data=data1;
            this.util.ajaxCall("http://localhost:4000/removeNews","POST",data,function(err,result){
                if(err)
                    return callBack(err);
                callBack('',result);
            });
        }
    });
    return model;
});