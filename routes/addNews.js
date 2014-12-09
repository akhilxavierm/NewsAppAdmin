var express = require('express');
var router = express.Router();
var path = require('path');
var NewsProvider = require('../newsProviderMongoDb/newsProvider').newsProvider;
var newsProvider = new NewsProvider();

/* Add new News */

router.post('/', function(req, res) {
    var headline = req.body.headline,
        content = req.body.content;
    console.log(("in add news headline and content is--"+headline+"------"+content));
    var news={headline:headline,content:content};
    newsProvider.save(news,function(error, docs){
        if(error){
            console.log("error--in newsprovider"+JSON.stringify(error));
        }
        console.log("docs--"+JSON.stringify(docs));
        //res.send(docs);
    });
});


module.exports = router;
