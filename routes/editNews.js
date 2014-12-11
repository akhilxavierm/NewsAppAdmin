var express = require('express');
var router = express.Router();
var path = require('path');
var NewsProvider = require('../newsProviderMongoDb/newsProvider').newsProvider;
var newsProvider = new NewsProvider();

/* Add new News */

router.post('/', function(req, res) {

   var _id = req.body.id,
   _headline=req.body.headline,
   _content=req.body.content;
    console.log("in router header and contetn-----"+_headline+"_---------"+_content);
   var data={id:_id,headline:_headline,content:_content};



    newsProvider.update(data,function(error, docs){
        if(error){
            console.log("error--in newsprovider"+JSON.stringify(error));
        }
        else{
            console.log("docs--"+JSON.stringify(docs));
            res.send("success");
        }

    });

});


module.exports = router;
