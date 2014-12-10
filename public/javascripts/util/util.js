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
    Util.prototype.showOrHide=function(page){
        switch (page){
            case "homePage":
                $("#mainContainer").show();
                $("#addNewContainer").hide();
                $("#deleteNewsContainer").hide();
                $("#editNewsContainer").hide();
                $("#helpContainer").hide();
                break;
            case "addNewsPage":
                $("#mainContainer").hide();
                $("#addNewContainer").show();
                $("#deleteNewsContainer").hide();
                $("#editNewsContainer").hide();
                $("#helpContainer").hide();
                break;
            case "deleteNewsPage":
                $("#mainContainer").hide();
                $("#addNewContainer").hide();
                $("#deleteNewsContainer").show();
                $("#editNewsContainer").hide();
                $("#helpContainer").hide();
                break;
            case "editNewsPage":
                $("#mainContainer").hide();
                $("#addNewContainer").hide();
                $("#deleteNewsContainer").hide();
                $("#editNewsContainer").show();
                $("#helpContainer").hide();
                break;
            case "deleteNewsPage":
                $("#mainContainer").hide();
                $("#addNewContainer").hide();
                $("#deleteNewsContainer").hide();
                $("#editNewsContainer").hide();
                $("#helpContainer").show();
                break;
            default :
                $("#mainContainer").show();
                $("#addNewContainer").hide();
                $("#deleteNewsContainer").hide();
                $("#editNewsContainer").hide();
                $("#helpContainer").hide();
          }

    }
    return Util;
});