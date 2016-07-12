var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var PORT = process.env.PORT || 3000;

var urlEncodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

//use static files
app.use('/assets', express.static(__dirname + '/public'));

//middleware
app.use('/', function(req, res, next){
    console.log('Request Url: ' + req.url);
    next();
});

//view engine
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index');
});

//simple route
app.get('/person/:name', function(req, res){
    res.render('person', { name : req.params.name, 
                          Qstr: req.query.qstr });
});

app.post('/person', urlEncodedParser, function(req, res){
    console.log(req.body.firstname);
    console.log(req.body.lastname);
    res.send('Thank you!');
});

app.post('/personjson', jsonParser, function(req, res){
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

app.get('/api', function(req, res){
   res.json({ firstname: 'John', lastname: 'Doe', age: 21}); 
});

app.listen(PORT, function(req, res){
   console.log('App is listening on port ' + PORT); 
});