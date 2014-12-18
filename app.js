var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var newsList = require('./routes/newsList');
var addNews=require('./routes/addNews');
var removeNews=require('./routes/removeNews');
var editNews=require('./routes/editNews');
var upload=require('./routes/upload');

var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser')
app.use( bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
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
app.post('/photos', function(req, res) {
    console.log("insdie photos");
    console.log(req.files);
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
