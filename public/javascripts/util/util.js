define([
    'jquery',
], function($) {
    var Util =function (){};
    Util.prototype.ajaxCall = function (url, type, data, CallBack) {
        console.log("inside ajax call");
        var options = {
            url: url,
            type: type,
            data: data,
            success: function (res) {
                CallBack('', res);
            },
            error: function (res) {
                CallBack(err);
            }
        };
        $.ajax(options);
    }
    return Util;
});