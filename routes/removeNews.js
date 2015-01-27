var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var NewsProvider = require('../newsProviderMongoDb/newsProvider').newsProvider;
var newsProvider = new NewsProvider();

/* Add new News */

router.post('/', function(req, res) {
    console.log("insid remove router");
    var id = req.body.id;
    var imgPath=req.body.imgPath;
    console.log("imga path--"+imgPath);
    var res1 = imgPath.substring(22);
    var res2="./public/"+res1;
    console.log("Res 2222222--"+res2);
    var newsId=id;
    newsProvider.removeById(newsId,function(error, docs){
        if(error){
            console.log("error--in newsprovider"+JSON.stringify(error));
        }
        else{
            if(docs==1){
                fs.unlink(res2, function (err) {
                    if (err) throw err;
                    console.log('successfully deleted /tmp/hello');
                });
                res.send("success");
            }
        }
        console.log("docs--"+JSON.stringify(docs));
        //res.send(docs);
    });
});


module.exports = router;
