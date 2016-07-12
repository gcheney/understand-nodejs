var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

//use static files
app.use('/assets', express.static(__dirname + '/public'));

//middleware
app.use('/', function(req, res, next){
    console.log('Request Url: ' + req.url);
    next();
});

app.get('/', function(req, res){
    res.send('<html><head><link href="assets/style.css" type="text/css" rel="stylesheet" />' 
             + '</head><body><h1>Hello world!</h1></body></html>');
});

//simple route
app.get('/person/:name', function(req, res){
    res.send('<html><head></head><body><h1>Hello ' 
             + req.params.name + '!</h1></body></html>');
});

app.get('/api', function(req, res){
   res.json({ firstname: 'John', lastname: 'Doe', age: 21}); 
});

app.listen(PORT, function(req, res){
   console.log('App is listening on port ' + PORT); 
});