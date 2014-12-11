var MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    BSON = require('mongodb').BSON,
    ObjectID = require('mongodb').ObjectID;

var newsProvider = function() {};
newsProvider.prototype.dbSettings=function(callBack){
    this.mongoclient = new MongoClient(new Server("localhost", 27017), {native_parser: true});
    this.mongoclient.open(function(err, mongoclient) {
        console.log("3");
        if(err)
            return callBack(err);
        this.db = mongoclient.db("newNewsDb");
        return callBack('',"success");
    });

};


newsProvider.prototype.findAll= function(callback) {
        var self=this;
        this.dbSettings(function(error,success){
            if(error)
                return callback(error);
            console.log("inside newsProvider find all");
            this.db.collection('newsCollections').find().sort( { time: -1, date: -1 }).toArray(function (err, result) {
                if(error){
                    self.mongoclient.close();
                    return callback(error);;
                }
                else{
                    self.mongoclient.close();
                    callback('',result);
                }
            });
        })
};
newsProvider.prototype.removeById= function(newsId,callback) {
    var self=this;
    this.dbSettings(function(error,success){
        if(error)
            return callback(error);
        console.log("inside newsProvider remove by id");
        this.db.collection('newsCollections').remove({'_id':ObjectID(newsId)},function (err, result) {
            if(error){
                //self.mongoclient.close();
                return callback(error);
            }
            else{
                console.log("result--"+JSON.stringify(result));
                //self.mongoclient.close();
                callback('',result);
            }
        });
    })
};

newsProvider.prototype.findById = function(id, callback) {
    this.getCollection(function(error, article_collection) {
        if( error ) callback(error)
        else {
            article_collection.findOne({_id: article_collection.db.bson_serializer.ObjectID.createFromHexString(id)}, function(error, result) {
                if( error ) callback(error)
                else callback(null, result)
            });
        }
    });
};
newsProvider.prototype.update=function(data,callback){
    var self=this;
    console.log("headline and content-"+data.headline+"---"+data.content);
    this.dbSettings(function(error,success) {
        console.log("inside newsprovider upadate2");
        if (error)
            return callback(error);
        this.db.collection('newsCollections').update({'_id':ObjectID(data.id)}, {$set: {headline: data.headline,content:data.content}}, function (err, result) {
            console.log("inside newsprovider update3");
            if (error)
                return callback(error);
            ;
            console.log("result--update" + JSON.stringify(result));
            callback('', result);
            self.mongoclient.close();
        });
    });
};
newsProvider.prototype.save = function(news, callback) {
    var self=this;
    this.dbSettings(function(error,success){
        if(error)
            return callback(error);
        this.db.collection('newsCollections').insert(news,function (err, result) {
            if(error)
                return callback(error);;
            console.log("result--"+JSON.stringify(result));
            callback('',result);
            self.mongoclient.close();
        });
    })
};

exports.newsProvider = newsProvider;