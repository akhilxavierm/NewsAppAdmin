var express = require('express');
var router = express.Router();
var fs=require('fs');
var path = require('path');
var Db = require('mongodb').Db,
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server;

/* GET users listing. */
router.post('/', function(req, res) {
    var headline = req.body.headline,
        content = req.body.content;
    console.log(("headline and content is--"+headline+"------"+content));
    var news={headline:headline,content:content};

    // Set up the connection to the local db
    var mongoclient = new MongoClient(new Server("localhost", 27017), {native_parser: true});
    // Open the connection to the server
    mongoclient.open(function(err, mongoclient) {
        console.log("inside client");
        // Get the first db and do an update document on it
        var db = mongoclient.db("news_test");
        db.collection('mycollection').insert(news, function (err, result) {
             console.log("result--"+JSON.stringify(result));
        });
        mongoclient.close();
     });

});

module.exports = router;
