//comment added in testing branch
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var multer  = require('multer');



var routes = require('./routes/index');
var newsList = require('./routes/newsList');
var addNews=require('./routes/addNews');
var removeNews=require('./routes/removeNews');
var editNews=require('./routes/editNews');
var upload=require('./routes/upload');

var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
app.use( bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
/*Configure the multer.*/

app.use(multer({ dest: './public/images/',
    rename: function (fieldname, filename) {
        return filename+Date.now();
    },
    onFileUploadStart: function (file) {
        console.log(file.originalname + ' is starting ...')
    },
    onFileUploadComplete: function (file) {
        console.log(file.fieldname + ' uploaded to  ' + file.path);
        done=true;
    }
}));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
console.log("path----"+__dirname);
app.use('/', routes);
app.use('/editNews',editNews);
app.use('/newsList', newsList);
app.use('/addNews',addNews);
app.use('/removeNews',removeNews);
app.use('/upload',upload);
app.post('/api/photo',function(req,res){
    if(done==true){
        console.log("haiiiii--------"+req.files.userPhoto.path);
        var imagePath=req.files.userPhoto.path;
        var res1 = imagePath.substring(7);
        var res2="http://localhost:4000/"+res1;
        console.log("image path--------"+res2);
        res.end(res2);
    }
});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

http.listen(4000, function(){
    console.log('listening on *:4000');
});


module.exports = app;
