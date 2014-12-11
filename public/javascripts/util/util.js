define([
    'jquery',
], function($) {
    var Util =function (){};
    Util.prototype.ajaxCall = function (url, type, data, CallBack) {
        console.log("inside ajax call--"+url);
        var options = {
            url: url,
            type: type,
            data: data,
            success: function (res) {
                console.log("ajax success--"+url+"---------"+JSON.stringify(res));
                CallBack('', res);
            },
            error: function (res) {
                console.log("ajax failure--"+url+"---------"+JSON.stringify(res));
                CallBack(res);
            }
        };
        $.ajax(options);
    },
    Util.prototype.currentDate=function(){
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();

        if(dd<10) {
            dd='0'+dd
        }

        if(mm<10) {
            mm='0'+mm
        }

        today = dd+'/'+mm+'/'+yyyy;
        return today;
    },
    Util.prototype.currentTime=function(){
        var Time = new Date();
        var hour=Time.getHours();
        var minute=Time.getMinutes();
        var second=Time.getSeconds();
        Time=hour+":"+minute+":"+second;
        return Time;
    },
    Util.prototype.showOrHide=function(page){
        switch (page){
            case "homePage":
                $("#mainContainer").show();
                $("#addNewsContainer").hide();
                $("#deleteNewsContainer").hide();
                $("#editNewsContainer").hide();
                $("#helpContainer").hide();
                break;
            case "addNewsPage":
               // $("#mainContainer").hide();
                $("#addNewsContainer").show();
                $("#deleteNewsContainer").hide();
                $("#editNewsContainer").hide();
                $("#helpContainer").hide();
                break;
            case "deleteNewsPage":
               // $("#mainContainer").hide();
                $("#addNewsContainer").hide();
                $("#deleteNewsContainer").show();
                $("#editNewsContainer").hide();
                $("#helpContainer").hide();
                break;
            case "editNewsPage":
               // $("#mainContainer").hide();
                $("#addNewsContainer").hide();
                $("#deleteNewsContainer").hide();
                $("#editNewsContainer").show();
                $("#helpContainer").hide();
                break;
            case "helpPage":
               // $("#mainContainer").hide();
                $("#addNewsContainer").hide();
                $("#deleteNewsContainer").hide();
                $("#editNewsContainer").hide();
                $("#helpContainer").show();
                break;
            default :
               // $("#mainContainer").show();
                $("#addNewsContainer").hide();
                $("#deleteNewsContainer").hide();
                $("#editNewsContainer").hide();
                $("#helpContainer").show();
          }

    }
    return Util;
});