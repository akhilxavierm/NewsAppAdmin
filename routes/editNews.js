var express = require('express');
var router = express.Router();
var path = require('path');
var NewsProvider = require('../newsProviderMongoDb/newsProvider').newsProvider;
var newsProvider = new NewsProvider();

/* Add new News */

router.post('/', function(req, res) {

   var _id = req.body.id;


    newsProvider.update(_id,function(error, docs){
        if(error){
            console.log("error--in newsprovider"+JSON.stringify(error));
        }
        console.log("docs--"+JSON.stringify(docs));
        //res.send(docs);
    });

});


module.exports = router;
