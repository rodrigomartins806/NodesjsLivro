var consign = require('consign'); 
var http = require('http');
var express = require('express');
var app = express();
//var server = http.createServer(app);
/* server.listen(3000, function(){
    console.log('listening on port 3000...');
}); */

//Codigo para chamar as rotas que estão organizadas na pasta Routes no arquivo que foi criado
consign()
    .include("models")
    .then("libs/middlewares.js")
    .then("routes")
    .then("libs/boot.js")
    .into(app);