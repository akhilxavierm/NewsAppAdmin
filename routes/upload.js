var express = require('express');
var fs = require('fs');
var router = express.Router();
var path = require('path');
var NewsProvider = require('../newsProviderMongoDb/newsProvider').newsProvider;
var newsProvider = new NewsProvider();



router.post('/', function(req, res) {
    if(done==true){
        console.log(req.files);
        res.end("File uploaded.");
    }
});

module.exports = router;