//comment added in testing branch
var express = require('express');
var path = require('path');



var app = express();
var http = require('http').Server(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
console.log("path----"+__dirname);
app.use(require('prerender-node').set('prerenderServiceUrl', 'http://localhost:3000/'));
// In our app.js configuration
/*app.use(function(req, res, next) {
	console.log("haifa");
  var fragment = req.query._escaped_fragment_;

  // If there is no fragment in the query params
  // then we're not serving a crawler
  if (!fragment) {
  	console.log("no fragment");
  	return next();
  }else{
  	console.log("no fragment yes");
  }

  // If the fragment is empty, serve the
  // index page
  if (fragment === "" || fragment === "/")
    fragment = "/index.html";

  // If fragment does not start with '/'
  // prepend it to our fragment
  if (fragment.charAt(0) !== "/")
    fragment = '/' + fragment;

  // If fragment does not end with '.html'
  // append it to the fragment
  if (fragment.indexOf('.html') == -1)
    fragment += ".html";

  // Serve the static html snapshot
  try {
    var file = __dirname + "/snapshots" + fragment;
    res.sendfile(file);
  } catch (err) {
    res.send(404);
  }
});
*/







app.get('/', function (req, res) {
	console.log("here");
  res.render('index');

});

http.listen(4000, function(){
    console.log('listening on *:4001');
});


module.exports = app;
