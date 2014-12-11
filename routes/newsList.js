var express = require('express');
var router = express.Router();
var path = require('path');
var NewsProvider = require('../newsProviderMongoDb/newsProvider').newsProvider;
var newsProvider = new NewsProvider();

/* GET News listing. */

router.get('/',function(req,res){
    newsProvider.findAll(function(error, result){
        if(error){
            console.log("error--in newsprovider"+JSON.stringify(error));
        }
        res.send(result);
    });

});
module.exports = router;

