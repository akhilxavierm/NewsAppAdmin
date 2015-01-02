var express = require('express');
var router = express.Router();
var path = require('path');
var NewsProvider = require('../newsProviderMongoDb/newsProvider').newsProvider;
var newsProvider = new NewsProvider();

/* Add new News */

router.post('/', function(req, res) {
    var headline = req.body.headline,
        content = req.body.content,
        imgPath=req.body.imgPath,
        date=req.body.date,
        time=req.body.time;

    var news={headline:headline,content:content,imgPath:imgPath,date:date,time:time};
    console.log("news before--"+JSON.stringify(news));
    newsProvider.save(news,function(error, docs){
        if(error){
            console.log("error in addNews"+JSON.stringify(error));
            res.send(error);
        }
        else{
            console.log("success response in addNews"+JSON.stringify(docs));
            res.send("success");
        }
    });
});
module.exports = router;
