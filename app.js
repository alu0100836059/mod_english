// importar
var express = require('express');

// instanciar
var app = express();

// ruteo
app.get('/', function(req, res){
  res.sendfile(__dirname + '/public/index.html');
});
app.get('/about', function(req, res){
  res.sendfile(__dirname + '/public/about.html');
});

// puerto
app.use('port', (process.env.PORT || 8080));
// escuchar
// app.listen(9000);
//
// console.log("Servidor Express escuchando en modo %s", app.settings.env);
