var express = require('express');
var bodyParser = require('body-parser');

var app = module.exports = express();
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

require('./src/endpoints/movieendpoint')(app);
require('./src/endpoints/actorendpoint')(app);
require('./src/endpoints/directorendpoint')(app);

app.get('/test', function(req, res) {
  res.json({message: "Hello, World!"});
});

app.get('/*', function(req, res){
  res.sendFile(__dirname+'/index.html');
});

if(!module.parent) {
  app.listen(3000, function() {
    console.log('Express started at port 3000');
  });
};
