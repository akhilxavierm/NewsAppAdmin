var express = require('express');
var router = express.Router();
var path = require('path');
var NewsProvider = require('../newsProviderMongoDb/newsProvider').newsProvider;
var newsProvider = new NewsProvider();

/* Add new News */

router.post('/', function(req, res) {
    console.log("insid remove router");
    var id = req.body.id;
    var newsId=id;
    newsProvider.removeById(newsId,function(error, docs){
        if(error){
            console.log("error--in newsprovider"+JSON.stringify(error));
        }
        else{
            if(docs==1){
                res.send("success");
            }
        }
        console.log("docs--"+JSON.stringify(docs));
        //res.send(docs);
    });
});


module.exports = router;
