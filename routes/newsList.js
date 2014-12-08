var express = require('express');
var router = express.Router();
var path = require('path');
var Db = require('mongodb').Db,
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server;

/* GET News listing. */

router.get('/',function(req,res){
    console.log("inside newList");
    var mongoclient = new MongoClient(new Server("localhost", 27017), {native_parser: true});
    // Open the connection to the server
    mongoclient.open(function(err, mongoclient) {
        console.log("inside client");
        // Get the first db and do an update document on it
        var db = mongoclient.db("news_test");
        db.collection('mycollection').find(function(err,result){
            if(err){
                console.log("error--"+JSON.stringify(err));
            }
            else{
                console.log("result123--"+JSON.stringify(result[0]));
            }
        });
        mongoclient.close();
    });

});
module.exports = router;

