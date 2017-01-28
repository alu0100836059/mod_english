'use strict'

// importar
var express = require('express');

// instanciar
var app = express();

console.log("Principio");
// app.set('public', __dirname + '/public');
// app.set('view engine', 'ejs');


// ruteo
app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
  console.log("/");
});
app.get('/about', function(req, res){
  res.sendfile(__dirname + '/public/about.html');
});

// puerto
var port = process.env.PORT || 8080;
// escuchar
// app.listen(port);
app.listen(8080);
//
// console.log("Servidor Express escuchando en modo %s", app.settings.env);
module.exports = app
