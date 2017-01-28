'use strict'

// importar
var express = require('express');

// instanciar
var app = express();


app.use(express.static(__dirname + '/public'));


//------------------------ RUTAS ------------------------------//
app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});
app.get('/intro', function(req, res){
  res.sendFile(__dirname + '/public/pages/intro.html');
});

app.get('/login', function(req, res){
  res.sendFile(__dirname + '/public/pages/login.html')
})
//----------------- FINAL RUTAS ------------------------------//

// puerto
var port = process.env.PORT || 8080;
app.listen(port);
console.log("Servidor Express escuchando en modo %s", app.settings.env, "en el puerto:", port);

module.exports = app
