// importar
var express = require('express');

// instanciar
var app = express();

// ruteo
app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});
app.get('/about', function(req, res){
  res.sendfile(__dirname + '/public/about.html');
});

// puerto
var port = process.env.PORT || 8080;
// escuchar
app.listen(port);
//
// console.log("Servidor Express escuchando en modo %s", app.settings.env);
